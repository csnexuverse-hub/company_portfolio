/*
 * Lets any "Book a consultation" or "Discuss ..." link pre-select the
 * subject and area of interest in the contact form before scrolling to it.
 */
export const PREFILL_EVENT = 'cs:contact-prefill';

export function requestPrefill(detail) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail }));
}
