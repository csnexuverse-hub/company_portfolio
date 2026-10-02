import Badge from './Badge';
import ButtonLink from './ButtonLink';
import FadeInUp from './FadeInUp';
import PrototypeVisual from './visuals/PrototypeVisual';
import { sectionHref } from '@/lib/i18n/config';

export default function FeaturePrototypes({ locale, t }) {
  return (
    <section
      aria-labelledby="prototypes-title"
      className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24 2xl:max-w-[88rem]"
    >
      <FadeInUp>
        <Badge tone="sky">{t.badge}</Badge>
        <h2 id="prototypes-title" className="mt-4 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:mt-6 sm:text-base sm:leading-7">{t.text}</p>
        <ButtonLink
          href={sectionHref(locale, 'contact')}
          prefill={{ subject: 'order', interest: 'Physical Model Development' }}
          className="mt-7 w-full sm:mt-8 sm:w-auto"
        >
          {t.cta}
        </ButtonLink>
      </FadeInUp>

      <FadeInUp delay={150} className="min-w-0">
        <div
          role="img"
          aria-label={t.aria}
          className="elevate relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl border border-line bg-panel/60 p-3 backdrop-blur-sm sm:min-h-[460px] sm:p-6"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 p-4 sm:p-6">
            <PrototypeVisual labels={t.labels} />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-panel via-panel/60 to-transparent"
          />
        </div>
      </FadeInUp>
    </section>
  );
}
