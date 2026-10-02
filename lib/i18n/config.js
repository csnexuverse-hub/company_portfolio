/*
 * Supported languages. `code` is the URL segment (/es/, /pt-br/), `htmlLang`
 * is the BCP 47 tag used for <html lang> and hreflang.
 */
export const LOCALES = [
  { code: 'en', htmlLang: 'en', label: 'English', short: 'EN' },
  { code: 'es', htmlLang: 'es', label: 'Español', short: 'ES' },
  { code: 'fr', htmlLang: 'fr', label: 'Français', short: 'FR' },
  { code: 'pt-br', htmlLang: 'pt-BR', label: 'Português (Brasil)', short: 'PT' },
];

export const LOCALE_CODES = LOCALES.map((l) => l.code);
export const DEFAULT_LOCALE = 'en';
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export function isLocale(value) {
  return LOCALE_CODES.includes(value);
}

export function getLocaleInfo(code) {
  return LOCALES.find((l) => l.code === code) || LOCALES[0];
}

/** Link to a section of the home page in a given language: /es/#contact */
export function sectionHref(locale, id) {
  return `/${locale}/#${id}`;
}

/** Link to a page in a given language: /fr/privacy/ */
export function pageHref(locale, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

/*
 * Picks the best supported language from an Accept-Language header, for
 * example "pt-BR,pt;q=0.9,en;q=0.8" gives "pt-br".
 */
export function matchLocale(acceptLanguage) {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { tag, q: q ? parseFloat(q.split('=')[1]) || 0 : 1 };
    })
    .filter((entry) => entry.tag)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (isLocale(tag)) return tag;
    const base = tag.split('-')[0];
    if (base === 'pt') return 'pt-br';
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}
