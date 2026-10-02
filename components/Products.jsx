import SectionHeading from './SectionHeading';
import ButtonLink from './ButtonLink';
import { PRODUCTS } from '@/lib/site';
import { sectionHref } from '@/lib/i18n/config';

export default function Products({ locale, t }) {
  return (
    <section id="products" aria-labelledby="products-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 2xl:max-w-[88rem]">
      <SectionHeading id="products-title" badge={t.badge} tone="sky" title={t.title} description={t.description} />

      <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2">
        {PRODUCTS.map(({ id, Icon, value }) => {
          const item = t.items[id];
          return (
            <article
              key={id}
              id={id}
              className="elevate flex min-w-0 scroll-mt-24 flex-col rounded-xl border border-line bg-panel/80 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-fg/25 sm:rounded-2xl sm:p-8 lg:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-line bg-chip text-fg">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="text-lg font-semibold text-fg sm:text-xl">{item.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted sm:mt-6">{item.description}</p>
              <h4 className="mt-6 text-xs font-semibold uppercase tracking-wide text-fg">{t.typicalWork}</h4>
              <ul className="mt-3 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-muted">
                    <span aria-hidden="true" className="h-px w-3 flex-none bg-subtle" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 sm:pt-8">
                <ButtonLink href={sectionHref(locale, 'contact')} variant="link" prefill={{ subject: 'order', interest: value }}>
                  {item.cta}
                </ButtonLink>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
