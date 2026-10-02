import { LOCALES, DEFAULT_LOCALE, pageHref } from './config';

/*
 * hreflang links so search engines show each visitor the page in their own
 * language. Paths are relative; metadataBase in the layout makes them absolute.
 */
export function alternatesFor(locale, path = '') {
  const languages = Object.fromEntries(LOCALES.map((l) => [l.htmlLang, pageHref(l.code, path)]));
  languages['x-default'] = pageHref(DEFAULT_LOCALE, path);
  return { canonical: pageHref(locale, path), languages };
}
