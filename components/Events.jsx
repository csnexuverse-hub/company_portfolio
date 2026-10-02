import SectionHeading from './SectionHeading';
import ButtonLink from './ButtonLink';
import FadeInUp from './FadeInUp';
import { EVENT_ICONS } from '@/lib/site';
import { sectionHref } from '@/lib/i18n/config';

export default function Events({ locale, t }) {
  return (
    <section id="events" aria-labelledby="events-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 2xl:max-w-[88rem]">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="events-title" badge={t.badge} title={t.title} description={t.description} />
          <FadeInUp delay={100}>
            <p className="mt-6 max-w-xl border-l-2 border-line pl-4 text-sm leading-7 text-muted sm:mt-8">{t.note}</p>
          </FadeInUp>
        </div>

        <div>
          <ul className="elevate self-start divide-y divide-line rounded-xl border border-line bg-panel/80 backdrop-blur-sm sm:rounded-2xl">
            {t.items.map(({ title, description }, index) => {
              const Icon = EVENT_ICONS[index];
              return (
                <li key={title} className="flex flex-col gap-3 p-4 sm:flex-row sm:flex-wrap sm:items-start sm:gap-4 sm:p-6">
                  {Icon ? <Icon aria-hidden="true" className="mt-0.5 hidden h-6 w-6 flex-none text-muted sm:block" strokeWidth={1.5} /> : null}
                  <div className="min-w-[12rem] flex-1">
                    <h3 className="text-base font-medium text-fg">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
                  </div>
                  <span className="flex-none self-start rounded-md border border-line px-2 py-1 text-xs font-medium text-muted sm:self-auto">
                    {t.planned}
                  </span>
                </li>
              );
            })}
          </ul>
          <ButtonLink
            href={sectionHref(locale, 'contact')}
            prefill={{ subject: 'enquiry', interest: 'Events and programmes' }}
            className="mt-6 w-full sm:mt-8 sm:w-auto"
          >
            {t.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
