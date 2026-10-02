import { z } from 'zod';
import { OTHER_INTERESTS, PRODUCTS, RESEARCH_AREAS, SERVICES } from './site';

/*
 * Subject values and their English names. The English name is what the team
 * receives by email and what is stored in MongoDB, whatever language the
 * visitor used.
 */
export const SUBJECT_VALUES = ['order', 'enquiry', 'feedback'];
const SUBJECT_ENGLISH = { order: 'New order', enquiry: 'General enquiry', feedback: 'Feedback' };

/*
 * Options for the interest dropdown. `value` is the English name (sent to the
 * team); `label` is shown to the visitor in their language.
 */
export function buildInterestGroups(messages) {
  return [
    {
      label: messages.form.groups.services,
      options: SERVICES.map((s) => ({ value: s.value, label: messages.services.items[s.id].title })),
    },
    {
      label: messages.form.groups.products,
      options: PRODUCTS.map((p) => ({ value: p.value, label: messages.products.items[p.id].title })),
    },
    {
      label: messages.form.groups.research,
      options: RESEARCH_AREAS.map((a) => ({ value: a.value, label: messages.research.areas[a.key].title })),
    },
    {
      label: messages.form.groups.other,
      options: OTHER_INTERESTS.map((value) => ({ value, label: messages.form.otherOptions[value] })),
    },
  ];
}

export const DEFAULT_VALUES = {
  subject: '',
  name: '',
  email: '',
  phone: '',
  organisation: '',
  interest: '',
  message: '',
  feedback: '',
  consent: false,
  website: '', // honeypot, must stay empty
};

export const MAX_TEXT = 2000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d\s().-]+$/;

const fill = (message, values) => String(message).replace(/\{(\w+)\}/g, (m, k) => (k in values ? values[k] : m));

/*
 * Builds the validation schema with error messages in the visitor's language.
 * Every field is typed as a plain string (or boolean) so that all checks run
 * together in superRefine and the visitor sees every problem at once. Only
 * the fields relevant to the chosen subject are validated.
 */
export function createContactSchema(errors) {
  return z
    .object({
      subject: z.string(),
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      organisation: z.string(),
      interest: z.string(),
      message: z.string(),
      feedback: z.string(),
      consent: z.boolean(),
      website: z.string(),
    })
    .superRefine((data, ctx) => {
      const fail = (path, message) => ctx.addIssue({ code: 'custom', path: [path], message });

      if (!SUBJECT_VALUES.includes(data.subject)) {
        fail('subject', errors.subject);
        return;
      }

      const name = data.name.trim();
      if (!name) fail('name', errors.nameRequired);
      else if (name.length < 2) fail('name', errors.nameShort);
      else if (name.length > 100) fail('name', errors.nameLong);

      const email = data.email.trim();
      if (!email) fail('email', errors.emailRequired);
      else if (!EMAIL_RE.test(email)) fail('email', errors.emailInvalid);

      if (data.subject === 'feedback') {
        const feedback = data.feedback.trim();
        if (!feedback) fail('feedback', errors.feedbackRequired);
        else if (feedback.length < 10) fail('feedback', errors.feedbackShort);
        else if (feedback.length > MAX_TEXT) fail('feedback', fill(errors.feedbackLong, { max: MAX_TEXT }));
      } else {
        const phone = data.phone.trim();
        const digits = phone.replace(/\D/g, '');
        if (!phone) fail('phone', errors.phoneRequired);
        else if (!PHONE_RE.test(phone) || digits.length < 7 || digits.length > 15) fail('phone', errors.phoneInvalid);

        if (!data.interest) fail('interest', data.subject === 'order' ? errors.interestOrder : errors.interestEnquiry);

        if (data.message.length > MAX_TEXT) fail('message', fill(errors.messageLong, { max: MAX_TEXT }));
      }

      if (!data.consent) fail('consent', errors.consent);
    });
}

export function buildPayload(data, locale = 'en') {
  const base = {
    subject: SUBJECT_ENGLISH[data.subject] || data.subject,
    name: data.name.trim(),
    email: data.email.trim(),
    locale,
  };
  if (data.subject === 'feedback') {
    return { ...base, feedback: data.feedback.trim() };
  }
  return {
    ...base,
    phone: data.phone.trim(),
    organisation: data.organisation.trim(),
    interest: data.interest,
    message: data.message.trim(),
  };
}

const LABELS = {
  subject: 'Subject',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  organisation: 'Organisation',
  interest: 'Interest',
  message: 'Message',
  feedback: 'Feedback',
  locale: 'Language',
};

export function payloadToText(payload) {
  return Object.keys(payload)
    .filter((key) => payload[key])
    .map((key) => `${LABELS[key]}: ${payload[key]}`)
    .join('\n');
}
