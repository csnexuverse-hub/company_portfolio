import ButtonLink from './ButtonLink';
import FadeInUp from './FadeInUp';
import LazyVideo from './LazyVideo';
import Marquee from './Marquee';
import { VIDEOS } from '@/lib/site';
import { sectionHref } from '@/lib/i18n/config';

/*
 * The hero sits on top of a video, so its content keeps fixed light colours in
 * both themes. The gradient fades the video into the page colour at the bottom.
 */
export default function Hero({ locale, t, areas }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative z-0 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-1 pb-12 pt-24 sm:pb-20 sm:pt-32"
    >
      <LazyVideo
        src={VIDEOS.hero}
        priority
        className="absolute inset-0 -z-10 h-full min-h-full w-full min-w-full object-cover opacity-90"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/20 to-bg" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6">
        <FadeInUp>
          <span className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-200 backdrop-blur-sm sm:mb-8 sm:px-3 sm:py-1.5 sm:text-xs">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            {t.badge}
          </span>
        </FadeInUp>

        <FadeInUp delay={100}>
          <h1
            id="hero-title"
            className="mb-4 max-w-6xl text-balance text-center text-[1.75rem] font-medium leading-[1.15] tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl md:leading-[1.05] lg:text-7xl"
          >
            {t.titleStart}
            <br className="hidden md:block" /> {t.titleEnd} <span className="italic">{t.titleEmphasis}</span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={200}>
          <p className="mx-auto max-w-2xl text-center text-xs leading-6 text-gray-300 sm:text-sm sm:leading-7">{t.lede}</p>
        </FadeInUp>

        <FadeInUp delay={300} className="mt-6 flex w-full flex-col items-stretch gap-2.5 px-2 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:px-0">
          <ButtonLink href={sectionHref(locale, 'contact')} variant="onMediaPrimary" prefill={{ subject: 'enquiry' }}>
            {t.primary}
          </ButtonLink>
          <ButtonLink href={sectionHref(locale, 'research')} variant="onMedia">
            {t.secondary}
          </ButtonLink>
        </FadeInUp>
      </div>

      <div className="mt-16 w-full sm:mt-28">
        <p className="mb-5 text-center text-xs font-medium text-muted sm:mb-10 sm:text-sm">{t.marqueeLabel}</p>
        <Marquee items={areas} />
      </div>
    </section>
  );
}
