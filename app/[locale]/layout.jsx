import { notFound } from 'next/navigation';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import '../globals.css';
import { LOCALE_CODES, getLocaleInfo, isLocale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n';
import { alternatesFor } from '@/lib/i18n/seo';
import { SITE } from '@/lib/site';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

// Every language is generated at build time; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = getMessages(locale);
  return {
    metadataBase: new URL(SITE.siteUrl),
    title: { default: m.meta.title, template: '%s | CS Development Technologies' },
    description: m.meta.description,
    alternates: alternatesFor(locale),
    icons: { icon: '/icon.svg' },
    openGraph: {
      title: 'CS Development Technologies',
      description: m.meta.ogDescription,
      type: 'website',
      locale: getLocaleInfo(locale).htmlLang.replace('-', '_'),
    },
  };
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

/*
 * Applies the saved theme (or the system preference, defaulting to dark)
 * before the first paint, so the page never flashes the wrong colours.
 */
const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('cs-theme');var dark=s==='dark'||s==='light'?s==='dark':!window.matchMedia('(prefers-color-scheme: light)').matches;var e=document.documentElement;e.classList.toggle('dark',dark);e.style.colorScheme=dark?'dark':'light';}catch(err){document.documentElement.classList.add('dark');}})();`;

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const m = getMessages(locale);

  return (
    <html lang={getLocaleInfo(locale).htmlLang} className={`dark ${sans.variable}`} suppressHydrationWarning>
      <body>
        <Script id="theme-script" strategy="beforeInteractive">
          {THEME_SCRIPT}
        </Script>
        {/* Without JavaScript, scroll-reveal content must still be visible. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<style>.fade-in-up{opacity:1!important;transform:none!important}</style>',
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          {m.common.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
