import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ButtonLink from './ButtonLink';
import { SERVICES } from '@/lib/site';
import { sectionHref } from '@/lib/i18n/config';

export default function Services({ locale, t }) {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 2xl:max-w-[88rem]">
      <SectionHeading id="services-title" badge={t.badge} title={t.title} description={t.description} />

      <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {SERVICES.map(({ id, Icon }) => {
          const item = t.items[id];
          return (
            <article
              key={id}
              id={id}
              className="elevate flex min-w-0 scroll-mt-24 flex-col rounded-xl border border-line bg-panel/80 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-fg/25 sm:rounded-2xl sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-chip text-fg">
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 break-words text-base font-semibold leading-snug text-fg sm:mt-6 sm:text-lg">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              <ul className="mt-5 space-y-2.5 sm:mt-6">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-muted">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-subtle" strokeWidth={2} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <p className="mt-10 text-left text-sm text-muted sm:mt-12">
        {t.notListedBefore}{' '}
        <ButtonLink href={sectionHref(locale, 'contact')} variant="link" prefill={{ subject: 'enquiry', interest: 'Something else' }}>
          {t.notListedLink}
        </ButtonLink>{' '}
        {t.notListedAfter}
      </p>
    </section>
  );
}
