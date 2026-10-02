import nodemailer from 'nodemailer';

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.warn('GMAIL_USER or GMAIL_APP_PASSWORD missing: emails will not be sent.');
}

/*
 * A pooled transporter keeps the SMTP connection open between messages, so
 * the second and later emails do not pay for a fresh TLS handshake. It is
 * cached on globalThis so hot reloads in development reuse the same pool.
 */
function getTransporter() {
  if (!globalThis.__mailTransporter) {
    globalThis.__mailTransporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      pool: true,
      maxConnections: 3,
      maxMessages: 50,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });
  }
  return globalThis.__mailTransporter;
}

/*
 * Builds a responsive, theme-neutral HTML email that looks polished in
 * Gmail, Outlook, Apple Mail and most mobile clients.
 */
function buildConfirmationEmail(payload) {
  const firstName = payload.name.split(/\s+/)[0];
  const isFeedback = payload.subject === 'Feedback';

  const heading = isFeedback
    ? `Thank you for your feedback, ${firstName}.`
    : `We received your ${payload.subject.toLowerCase()}, ${firstName}.`;

  const intro = isFeedback
    ? 'We appreciate you taking the time to share your thoughts. Our team will review your feedback and get back to you if a follow-up is needed.'
    : 'Our team will review the details and get back to you shortly. Below is a summary of what you submitted.';

  // Build the details table rows.
  const rows = [];
  rows.push({ label: 'Subject', value: payload.subject });
  rows.push({ label: 'Name', value: payload.name });
  rows.push({ label: 'Email', value: payload.email });

  if (!isFeedback) {
    if (payload.phone) rows.push({ label: 'Phone', value: payload.phone });
    if (payload.organisation) rows.push({ label: 'Organisation', value: payload.organisation });
    if (payload.interest) rows.push({ label: 'Area of interest', value: payload.interest });
    if (payload.message) rows.push({ label: 'Message', value: payload.message });
  } else {
    if (payload.feedback) rows.push({ label: 'Feedback', value: payload.feedback });
  }

  const tableRows = rows
    .map(
      (r) => `
        <tr>
          <td style="padding:10px 14px;font-size:13px;color:#6b7280;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f3f4f6;">${r.label}</td>
          <td style="padding:10px 14px;font-size:14px;color:#111827;vertical-align:top;border-bottom:1px solid #f3f4f6;">${escapeHtml(r.value)}</td>
        </tr>`
    )
    .join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0f1218 0%,#1e2330 100%);padding:32px 28px;text-align:center;">
            <h1 style="margin:0;font-size:20px;font-weight:600;color:#ffffff;letter-spacing:-0.01em;">CS Development Technologies</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 28px 16px;">
            <h2 style="margin:0 0 12px;font-size:18px;font-weight:600;color:#111827;">${escapeHtml(heading)}</h2>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#4b5563;">${intro}</p>

            <!-- Details table -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              ${tableRows}
            </table>

            <p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:#4b5563;">
              If any of the above details are incorrect, simply reply to this email and let us know.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 28px 28px;border-top:1px solid #f3f4f6;">
            <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.5;">
              CS Development Technologies, Pune, Maharashtra, India<br>
              This is an automated confirmation. Please do not reply unless you need to correct something.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

/*
 * Builds a plain-text notification email for the team (sent to GMAIL_USER)
 * so you get an immediate alert for every submission.
 */
function buildTeamPlainText(payload) {
  const lines = [`New ${payload.subject} from ${payload.name}`, ''];
  const fields = { ...payload };
  for (const [key, value] of Object.entries(fields)) {
    if (value) lines.push(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
  }
  return lines.join('\n');
}

/**
 * Send a confirmation email to the client AND a notification to the team.
 * Returns { success, error? }.
 */
export async function sendConfirmationEmail(payload) {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return { success: false, error: 'Email credentials not configured.' };
  }

  const html = buildConfirmationEmail(payload);
  const subjectLine = `We received your ${payload.subject.toLowerCase()}: CS Development Technologies`;

  try {
    const transporter = getTransporter();

    // Both messages go out at the same time over the pooled connection.
    await Promise.all([
      transporter.sendMail({
        from: `"CS Development Technologies" <${GMAIL_USER}>`,
        to: payload.email,
        replyTo: GMAIL_USER,
        subject: subjectLine,
        html,
      }),
      transporter.sendMail({
        from: `"CS Dev Website" <${GMAIL_USER}>`,
        to: GMAIL_USER,
        replyTo: payload.email,
        subject: `[Website] New ${payload.subject} from ${payload.name}`,
        text: buildTeamPlainText(payload),
      }),
    ]);

    return { success: true };
  } catch (err) {
    console.error('Email send failed:', err);
    return { success: false, error: err.message };
  }
}
