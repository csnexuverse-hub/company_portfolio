import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import AmbientBackground from './AmbientBackground';
import { SITE } from '@/lib/site';
import { pageHref } from '@/lib/i18n/config';
import { navMessages } from '@/lib/i18n/slices';

export function H2({ children }) {
  return <h2 className="mt-10 text-lg font-semibold tracking-tight text-fg sm:mt-12 sm:text-xl">{children}</h2>;
}

export function P({ children }) {
  return <p className="mt-4 text-[15px] leading-7 text-muted">{children}</p>;
}

export function UL({ children }) {
  return <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-muted marker:text-subtle">{children}</ul>;
}

export function Strong({ children }) {
  return <strong className="font-medium text-fg">{children}</strong>;
}

export function EmailLink() {
  return (
    <a href={`mailto:${SITE.email}`} className="text-fg underline decoration-fg/30 underline-offset-4 hover:decoration-fg">
      {SITE.email}
    </a>
  );
}

/*
 * Shared frame for the legal pages. The navigation, title and footer follow
 * the visitor's language; the legal text itself is English (the authoritative
 * version), marked with lang="en" and introduced by a translated notice.
 */
export default function LegalLayout({ locale, messages, titleKey, children }) {
  const t = messages.legal;
  return (
    <>
      <Navbar solid locale={locale} t={navMessages(messages)} />
      <main id="main" tabIndex={-1} className="relative isolate px-4 pb-16 pt-24 outline-none sm:px-6 sm:pb-24 sm:pt-32">
        <AmbientBackground />
        <article className="mx-auto max-w-3xl">
          <Link href={pageHref(locale)} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            {t.back}
          </Link>
          <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{t[titleKey]}</h1>
          <p className="mt-4 text-sm text-subtle">
            {t.lastUpdated} {SITE.lastUpdated}
          </p>
          {t.englishOnly ? (
            <p className="elevate mt-6 rounded-xl border border-line bg-panel p-4 text-sm leading-6 text-fg/90">{t.englishOnly}</p>
          ) : null}
          <div lang="en">{children}</div>
        </article>
      </main>
      <Footer locale={locale} t={messages.footer} />
    </>
  );
}
