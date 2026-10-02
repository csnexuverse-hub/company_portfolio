import mongoose from 'mongoose';

const ContactSubmissionSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },           // "New order" | "General enquiry" | "Feedback"
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    organisation: { type: String, default: '' },
    interest: { type: String, default: '' },
    message: { type: String, default: '' },
    feedback: { type: String, default: '' },
    locale: { type: String, default: 'en' },             // language the visitor used on the site
    emailSent: { type: Boolean, default: false },        // true once the confirmation email was delivered
    emailError: { type: String, default: '' },           // error message if email failed
  },
  {
    timestamps: true,                                     // adds createdAt and updatedAt
  }
);

// Prevent model re-compilation during hot-reload.
export default mongoose.models.ContactSubmission ||
  mongoose.model('ContactSubmission', ContactSubmissionSchema);
