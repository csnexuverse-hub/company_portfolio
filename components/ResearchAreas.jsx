import SectionHeading from './SectionHeading';
import ButtonLink from './ButtonLink';
import { METHODS_ICON as MethodsIcon, RESEARCH_AREAS } from '@/lib/site';
import { sectionHref } from '@/lib/i18n/config';

/*
 * The portfolio: seven research domains described by topic only (no client
 * names or results), plus one card for the methods shared across all of
 * them. Eight cards so the grid stays even at two and four columns.
 */
export default function ResearchAreas({ locale, t }) {
  return (
    <section id="research" aria-labelledby="research-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 2xl:max-w-[88rem]">
      <SectionHeading id="research-title" badge={t.badge} tone="sky" title={t.title} description={t.description} />

      <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        {RESEARCH_AREAS.map(({ key, id, Icon, value }) => {
          const area = t.areas[key];
          return (
            <article
              key={key}
              id={id}
              className="elevate flex min-w-0 scroll-mt-24 flex-col rounded-xl border border-line bg-panel/80 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-fg/25 sm:rounded-2xl sm:p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-chip text-fg">
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 break-words text-base font-semibold leading-snug text-fg">{area.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{area.description}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {area.topics.map((topic) => (
                  <li key={topic} className="rounded-md border border-line bg-chip px-2 py-1 text-xs leading-5 text-muted">
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <ButtonLink
                  href={sectionHref(locale, 'contact')}
                  variant="link"
                  prefill={{ subject: 'enquiry', interest: value }}
                  className="text-xs sm:text-sm"
                >
                  {t.discuss}
                </ButtonLink>
              </div>
            </article>
          );
        })}

        <article className="elevate flex min-w-0 flex-col rounded-xl border border-dashed border-fg/25 bg-panel/60 p-5 backdrop-blur-sm sm:rounded-2xl sm:p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-fg text-bg">
            <MethodsIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <h3 className="mt-5 text-base font-semibold leading-snug text-fg">{t.methods.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{t.methods.description}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {t.methods.items.map((item) => (
              <li key={item} className="rounded-md border border-fg/20 px-2 py-1 text-xs leading-5 text-fg">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
