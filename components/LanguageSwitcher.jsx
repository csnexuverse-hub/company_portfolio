'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Globe } from 'lucide-react';
import { LOCALES, LOCALE_COOKIE, getLocaleInfo } from '@/lib/i18n/config';

/*
 * Language menu next to the theme toggle. Picking a language keeps the
 * visitor on the same page and section (/es/privacy/ -> /fr/privacy/,
 * /es/#contact -> /fr/#contact) and remembers the choice in a cookie, which
 * the middleware reads on the next visit.
 */
export default function LanguageSwitcher({ locale, label }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = getLocaleInfo(locale);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function switchTo(code) {
    setOpen(false);
    if (code === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
    const { pathname, hash, search } = window.location;
    const parts = pathname.split('/');
    // parts[0] is '' and parts[1] is the current locale segment.
    parts[1] = code;
    window.location.assign(`${parts.join('/')}${search}${hash}`);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="language-menu"
        aria-label={`${label}: ${current.label}`}
        className="flex h-10 items-center gap-1.5 rounded-md border border-line px-2.5 text-xs font-medium text-fg transition-colors hover:bg-chip"
      >
        <Globe aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
        <span>{current.short}</span>
      </button>

      <div
        id="language-menu"
        inert={!open}
        className={`absolute right-0 top-full z-50 pt-2 transition-all duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'
        }`}
      >
        <ul className="elevate w-48 rounded-xl border border-line bg-bg/95 p-1.5 backdrop-blur-xl">
          {LOCALES.map((l) => {
            const selected = l.code === locale;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  lang={l.htmlLang}
                  onClick={() => switchTo(l.code)}
                  aria-current={selected ? 'true' : undefined}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-chip ${
                    selected ? 'font-medium text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {l.label}
                  {selected ? <Check aria-hidden="true" className="h-4 w-4 flex-none" /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
