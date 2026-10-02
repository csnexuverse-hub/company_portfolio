'use client';

import { requestPrefill } from '@/lib/prefill';

const BASE =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200';

const VARIANTS = {
  primary: `${BASE} bg-fg text-bg hover:bg-fg/85`,
  secondary: `${BASE} border border-line bg-chip text-fg hover:border-fg/25`,
  // Sits on top of a video, so it keeps fixed colours in both themes.
  onMedia: `${BASE} border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15`,
  onMediaPrimary: `${BASE} bg-white text-black hover:bg-gray-200`,
  plain: '',
  link: 'inline-flex text-sm font-medium text-fg underline decoration-fg/30 underline-offset-4 transition-colors hover:decoration-fg',
};

/*
 * Anchor styled as a button. `prefill` ({ subject, interest }) pre-selects
 * options in the contact form before the browser scrolls to it.
 */
export default function ButtonLink({ href, variant = 'primary', prefill, className = '', onClick, children, ...rest }) {
  function handleClick(event) {
    if (prefill) requestPrefill(prefill);
    if (onClick) onClick(event);
  }

  return (
    <a href={href} onClick={handleClick} className={`${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
