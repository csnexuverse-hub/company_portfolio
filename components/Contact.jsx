import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm';
import { SITE } from '@/lib/site';

const tel = (number) => `tel:${number.replace(/[^\d+]/g, '')}`;

export default function Contact({ locale, t, form }) {
  const socials = SITE.socials.filter((social) => social.url);
  const DETAILS = [
    { label: t.email, values: [{ text: SITE.email, href: `mailto:${SITE.email}` }], Icon: Mail },
    { label: t.phone, values: SITE.phones.map((number) => ({ text: number, href: tel(number) })), Icon: Phone },
    { label: t.hoursLabel, values: [{ text: t.hours }], Icon: Clock },
    { label: t.office, values: [{ text: SITE.address }], Icon: MapPin },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 2xl:max-w-[88rem]">
      <SectionHeading id="contact-title" badge={t.badge} title={t.title} description={t.description} />

      <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="min-w-0 lg:col-span-2">
          <ul className="space-y-5 sm:space-y-6">
            {DETAILS.map(({ label, values, Icon }) => (
              <li key={label} className="flex gap-3 sm:gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-line bg-chip text-muted">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-subtle">{label}</p>
                  {values.map(({ text, href }) =>
                    href ? (
                      <a
                        key={text}
                        href={href}
                        className="mt-0.5 block break-words text-sm text-fg hover:underline hover:underline-offset-4"
                      >
                        {text}
                      </a>
                    ) : (
                      <p key={text} className="mt-0.5 break-words text-sm text-fg">
                        {text}
                      </p>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>

          {socials.length > 0 ? (
            <div className="mt-8 border-t border-line pt-8 sm:mt-10">
              <h3 className="text-sm font-medium text-fg">{t.follow}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (${t.opensNewTab})`}
                      className="inline-flex items-center gap-1.5 rounded-md border border-line px-3.5 py-2 text-sm text-muted transition-colors hover:border-fg/25 hover:text-fg"
                    >
                      {social.label}
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="min-w-0 lg:col-span-3">
          <ContactForm locale={locale} t={form} />
        </div>
      </div>
    </section>
  );
}
