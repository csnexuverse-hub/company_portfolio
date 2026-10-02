'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronDown, LoaderCircle } from 'lucide-react';
import {
  DEFAULT_VALUES,
  MAX_TEXT,
  SUBJECT_VALUES,
  buildInterestGroups,
  buildPayload,
  createContactSchema,
  payloadToText,
} from '@/lib/contact-schema';
import { format, pageHref } from '@/lib/i18n';
import { PREFILL_EVENT } from '@/lib/prefill';
import { SITE } from '@/lib/site';


const CONTROL =
  'block w-full rounded-lg border border-line bg-bg px-4 py-3 text-[15px] text-fg placeholder:text-subtle transition-colors hover:border-fg/25 focus:border-fg/40 focus:outline-none focus:ring-2 focus:ring-fg/10 aria-[invalid=true]:border-red-500 dark:aria-[invalid=true]:border-red-400/70';

function Field({ id, label, required = false, optional = '', error, hint, full = false, children }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
        {label}
        {required ? (
          <span className="text-red-600 dark:text-red-300" aria-hidden="true">
            {' '}
            *
          </span>
        ) : null}
        {optional ? <span className="font-normal text-subtle"> {optional}</span> : null}
      </label>
      {children}
      {hint ? (
        <p id={`${id}-hint`} className="mt-2 text-xs text-subtle">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600 dark:text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function describedBy(id, { hint = false, error = false }) {
  const ids = [];
  if (hint) ids.push(`${id}-hint`);
  if (error) ids.push(`${id}-error`);
  return ids.length ? ids.join(' ') : undefined;
}

/*
 * `t` is messages.form plus the service, product and research titles needed
 * for the interest dropdown (see contactFormMessages in lib/i18n/slices.js).
 */
export default function ContactForm({ locale, t }) {
  const schema = useMemo(() => createContactSchema(t.errors), [t.errors]);
  const interestGroups = useMemo(() => buildInterestGroups(t.catalogue), [t.catalogue]);

  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onTouched',
  });

  const subject = watch('subject');
  const feedbackLength = (watch('feedback') || '').length;
  const isFeedback = subject === 'feedback';
  const hasSubject = SUBJECT_VALUES.includes(subject);

  // Changing the subject shows a different set of fields, so old errors no longer apply.
  useEffect(() => {
    clearErrors();
  }, [subject, clearErrors]);

  // Links elsewhere on the page can pre-select the subject and area of interest.
  useEffect(() => {
    function onPrefill(event) {
      const detail = event.detail || {};
      if (detail.subject) {
        setValue('subject', detail.subject, { shouldDirty: true });
        setStatus(null);
      }
      if (detail.interest && detail.subject !== 'feedback') {
        setValue('interest', detail.interest, { shouldDirty: true });
      }
    }
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, [setValue]);

  async function onSubmit(data) {
    setStatus(null);
    if (data.website) return; // honeypot filled: silently ignore automated submissions

    const payload = buildPayload(data, locale);
    const firstName = payload.name.split(/\s+/)[0];

    if (SITE.formEndpoint) {
      // Give up rather than spin forever if the network stalls.
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000);
      try {
        const response = await fetch(SITE.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        reset({ ...DEFAULT_VALUES, subject: data.subject });
        setStatus({
          type: 'success',
          message: format(t.success, { name: firstName, kind: t.sentNoun[data.subject], email: payload.email }),
        });
      } catch {
        setStatus({
          type: 'error',
          message: format(t.error, { email: SITE.email }),
        });
      } finally {
        clearTimeout(timeout);
      }
      return;
    }

    // No endpoint configured: hand the message to the visitor's email app.
    const mailSubject = `[${payload.subject}] ${payload.name}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(
      payloadToText(payload)
    )}`;
    setStatus({
      type: 'success',
      message: format(t.mailto, { kind: t.sentNoun[data.subject], email: SITE.email }),
    });
  }

  return (
    <div className="elevate rounded-xl border border-line bg-panel/90 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-8">
      <h3 className="text-lg font-semibold text-fg sm:text-xl">{t.title}</h3>
      <p className="mt-2 text-sm text-muted">
        {t.requiredBefore} <span aria-hidden="true">*</span>
        <span className="sr-only">{t.requiredSr}</span> {t.requiredAfter}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
        <Field id="cf-subject" label={t.subject} required error={errors.subject?.message}>
          <div className="relative">
            <select
              id="cf-subject"
              className={`${CONTROL} cursor-pointer appearance-none pr-10`}
              aria-invalid={errors.subject ? 'true' : 'false'}
              aria-describedby={describedBy('cf-subject', { error: !!errors.subject })}
              {...register('subject')}
            >
              <option value="">{t.subjectPlaceholder}</option>
              {SUBJECT_VALUES.map((value) => (
                <option key={value} value={value}>
                  {t.subjects[value]}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
          </div>
        </Field>

        {!hasSubject ? (
          <p className="text-sm text-subtle sm:col-span-2">{t.chooseHint}</p>
        ) : (
          <>
            <Field id="cf-name" label={t.name} required error={errors.name?.message}>
              <input
                id="cf-name"
                type="text"
                autoComplete="name"
                maxLength={100}
                className={CONTROL}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={describedBy('cf-name', { error: !!errors.name })}
                {...register('name')}
              />
            </Field>

            <Field id="cf-email" label={t.email} required error={errors.email?.message}>
              <input
                id="cf-email"
                type="email"
                autoComplete="email"
                maxLength={160}
                className={CONTROL}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={describedBy('cf-email', { error: !!errors.email })}
                {...register('email')}
              />
            </Field>

            {isFeedback ? (
              <Field
                id="cf-feedback"
                label={t.feedback}
                required
                error={errors.feedback?.message}
                hint={format(t.counter, { count: feedbackLength, max: MAX_TEXT })}
                full
              >
                <textarea
                  id="cf-feedback"
                  rows={6}
                  maxLength={MAX_TEXT}
                  className={`${CONTROL} resize-y`}
                  aria-invalid={errors.feedback ? 'true' : 'false'}
                  aria-describedby={describedBy('cf-feedback', { hint: true, error: !!errors.feedback })}
                  {...register('feedback')}
                />
              </Field>
            ) : (
              <>
                <Field
                  id="cf-phone"
                  label={t.phone}
                  required
                  error={errors.phone?.message}
                  hint={t.phoneHint}
                >
                  <input
                    id="cf-phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={20}
                    className={CONTROL}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={describedBy('cf-phone', { hint: true, error: !!errors.phone })}
                    {...register('phone')}
                  />
                </Field>

                <Field id="cf-organisation" label={t.organisation} optional={t.optional}>
                  <input
                    id="cf-organisation"
                    type="text"
                    autoComplete="organization"
                    maxLength={120}
                    className={CONTROL}
                    {...register('organisation')}
                  />
                </Field>

                <Field
                  id="cf-interest"
                  label={subject === 'order' ? t.orderInterest : t.areaInterest}
                  required
                  error={errors.interest?.message}
                  full
                >
                  <div className="relative">
                    <select
                      id="cf-interest"
                      className={`${CONTROL} cursor-pointer appearance-none pr-10`}
                      aria-invalid={errors.interest ? 'true' : 'false'}
                      aria-describedby={describedBy('cf-interest', { error: !!errors.interest })}
                      {...register('interest')}
                    >
                      <option value="">{t.selectOption}</option>
                      {interestGroups.map((group) => (
                        <optgroup key={group.label} label={group.label}>
                          {group.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
                  </div>
                </Field>

                <Field
                  id="cf-message"
                  label={subject === 'order' ? t.projectDetails : t.question}
                  optional={t.optional}
                  error={errors.message?.message}
                  hint={t.messageHint}
                  full
                >
                  <textarea
                    id="cf-message"
                    rows={5}
                    maxLength={MAX_TEXT}
                    className={`${CONTROL} resize-y`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={describedBy('cf-message', { hint: true, error: !!errors.message })}
                    {...register('message')}
                  />
                </Field>
              </>
            )}

            {/* Honeypot: hidden from people, often filled in by bots. */}
            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
              <label htmlFor="cf-website">{t.honeypot}</label>
              <input id="cf-website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-start gap-3">
                <input
                  id="cf-consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 flex-none cursor-pointer accent-fg"
                  aria-invalid={errors.consent ? 'true' : 'false'}
                  aria-describedby={describedBy('cf-consent', { error: !!errors.consent })}
                  {...register('consent')}
                />
                <label htmlFor="cf-consent" className="text-sm leading-6 text-muted">
                  {t.consentBefore}{' '}
                  <Link href={pageHref(locale, 'privacy')} className="text-fg underline decoration-fg/30 underline-offset-4 hover:decoration-fg">
                    {t.consentLink}
                  </Link>
                  .<span className="text-red-600 dark:text-red-300" aria-hidden="true"> *</span>
                </label>
              </div>
              {errors.consent ? (
                <p id="cf-consent-error" className="mt-2 text-sm text-red-600 dark:text-red-300">
                  {errors.consent.message}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-200 hover:bg-fg/85 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" /> : null}
                {isSubmitting ? t.sending : t.submit[subject]}
              </button>
            </div>
          </>
        )}

        <div role="status" aria-live="polite" className="sm:col-span-2">
          {status ? (
            <p
              className={`rounded-lg border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-100'
                  : 'border-red-500/30 bg-red-500/10 text-red-800 dark:text-red-100'
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
