import SectionHeading from './SectionHeading';
import FadeInUp from './FadeInUp';

export default function About({ t }) {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 2xl:max-w-[88rem]">
      <SectionHeading id="about-title" badge={t.badge} title={t.title} />

      <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4 text-sm leading-6 text-muted sm:space-y-6 sm:text-base sm:leading-7">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <FadeInUp className="elevate rounded-2xl border border-line bg-panel/80 p-5 backdrop-blur-sm sm:p-8">
          <h3 className="text-lg font-semibold text-fg">{t.processTitle}</h3>
          <ol className="mt-6 space-y-6">
            {t.process.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line text-sm font-medium text-muted"
                >
                  {index + 1}
                </span>
                <div>
                  <p className="text-base font-medium text-fg">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </FadeInUp>
      </div>

      <div className="mt-12 grid gap-6 border-t border-line pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 sm:pt-10 lg:grid-cols-4 lg:pt-12">
        {t.principles.map((principle) => (
          <div key={principle.title}>
            <h3 className="text-base font-medium text-fg">{principle.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{principle.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
