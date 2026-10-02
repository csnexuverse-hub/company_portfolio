import { NextResponse } from 'next/server';
import connectDB, { warmUpDB } from '@/lib/db';
import ContactSubmission from '@/lib/models/ContactSubmission';
import { sendConfirmationEmail } from '@/lib/email';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Open the database connection when this route is first loaded, so the first
// visitor does not wait for the handshake.
warmUpDB();

/*
 * POST /api/contact/
 *
 * The visitor waits only for validation. Saving to MongoDB and sending both
 * emails happen in a detached promise after the response is returned, so a
 * slow SMTP server or an unreachable database can never hold up the form.
 * Each step logs its own failure, and the email is sent even if the database
 * write fails.
 */
export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!payload.subject || !payload.name || !payload.email) {
    return NextResponse.json({ error: 'Missing required fields: subject, name, email.' }, { status: 400 });
  }

  const record = {
    subject: String(payload.subject).slice(0, 120),
    name: String(payload.name).slice(0, 120),
    email: String(payload.email).slice(0, 200),
    phone: String(payload.phone || '').slice(0, 40),
    organisation: String(payload.organisation || '').slice(0, 160),
    interest: String(payload.interest || '').slice(0, 160),
    message: String(payload.message || '').slice(0, 5000),
    feedback: String(payload.feedback || '').slice(0, 5000),
    locale: String(payload.locale || 'en').slice(0, 10),
  };

  // Fire-and-forget: runs completely detached from the response lifecycle.
  // Unlike next/server `after()`, this does NOT hold the HTTP connection open
  // in dev mode, so the client gets an immediate 202.
  void Promise.resolve().then(() => processSubmission(record));

  return NextResponse.json({ message: 'Submission received.' }, { status: 202 });
}

async function processSubmission(record) {
  try {
    const [saved, emailResult] = await Promise.all([saveSubmission(record), sendConfirmationEmail(record)]);

    if (!emailResult.success) console.warn('Email send failed:', emailResult.error);

    if (saved) {
      try {
        await ContactSubmission.findByIdAndUpdate(saved._id, {
          emailSent: emailResult.success,
          emailError: emailResult.error || '',
        });
      } catch (err) {
        console.error('Failed to record email status:', err.message);
      }
    }
  } catch (err) {
    console.error('processSubmission error:', err);
  }
}
async function saveSubmission(record) {
  try {
    await connectDB();
    const saved = await ContactSubmission.create(record);
    console.log('Saved submission', saved._id.toString());
    return saved;
  } catch (err) {
    console.error('MongoDB save failed, the email was still sent:', err.message);
    // Keep the submission in the log so nothing is lost while the database is down.
    console.error('Unsaved submission:', JSON.stringify(record));
    return null;
  }
}
