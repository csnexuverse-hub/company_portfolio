import Link from 'next/link';
import Logo from './Logo';
import ButtonLink from './ButtonLink';
import FadeInUp from './FadeInUp';
import LazyVideo from './LazyVideo';
import { SITE, VIDEOS } from '@/lib/site';
import { pageHref, sectionHref } from '@/lib/i18n/config';

const LINK = 'text-sm text-muted transition-colors hover:text-fg';

export default function Footer({ locale, t }) {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.company,
      links: [
        { label: t.about, href: sectionHref(locale, 'about') },
        { label: t.research, href: sectionHref(locale, 'research') },
        { label: t.events, href: sectionHref(locale, 'events') },
        { label: t.contact, href: sectionHref(locale, 'contact') },
      ],
    },
    {
      title: t.work,
      links: [
        { label: t.services, href: sectionHref(locale, 'services') },
        { label: t.products, href: sectionHref(locale, 'products') },
        { label: t.order, href: sectionHref(locale, 'contact'), prefill: { subject: 'order' } },
      ],
    },
    {
      title: t.legal,
      links: [
        { label: t.privacy, href: pageHref(locale, 'privacy'), internal: true },
        { label: t.terms, href: pageHref(locale, 'terms'), internal: true },
      ],
    },
  ];

  return (
    <footer className="relative z-0 overflow-hidden border-t border-line px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-32">
      <LazyVideo
        src={VIDEOS.footer}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 dark:opacity-40"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg/70 to-bg" />

      <FadeInUp className="mx-auto mb-14 max-w-3xl text-center sm:mb-32">
        <h2 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl md:text-5xl lg:text-6xl">
          {t.ctaTitle} <span className="italic">{t.ctaEmphasis}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-muted sm:mt-6 sm:text-base sm:leading-7">{t.ctaText}</p>
        <div className="mt-6 flex flex-col items-stretch gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
          <ButtonLink href={sectionHref(locale, 'contact')} prefill={{ subject: 'enquiry' }}>
            {t.primary}
          </ButtonLink>
          <ButtonLink href={sectionHref(locale, 'research')} variant="secondary">
            {t.secondary}
          </ButtonLink>
        </div>
      </FadeInUp>

      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-2 gap-6 sm:mb-20 md:grid-cols-4 md:gap-8 2xl:max-w-[88rem]">
        <div className="col-span-2 md:col-span-1">
          <a href={sectionHref(locale, 'home')} className="flex items-center gap-3 text-fg">
            <Logo className="h-8 w-8 flex-none" />
            <span className="text-base font-bold tracking-tight sm:text-lg md:text-xl">CS Development Technologies</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{t.tagline}</p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className="text-sm font-medium text-fg">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.internal ? (
                    <Link href={link.href} className={LINK}>
                      {link.label}
                    </Link>
                  ) : link.prefill ? (
                    <ButtonLink href={link.href} variant="plain" prefill={link.prefill} className={LINK}>
                      {link.label}
                    </ButtonLink>
                  ) : (
                    <a href={link.href} className={LINK}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 border-t border-line pt-6 text-center text-[11px] text-subtle sm:gap-4 sm:pt-8 sm:text-xs md:flex-row">
        <p>
          &copy; {year} {SITE.legalName}. {t.rights}
        </p>
      </div>
    </footer>
  );
}
