import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, matchLocale } from './lib/i18n/config';

/*
 * Sends visitors without a language in the URL to the right one:
 *   1. a language they picked before (cookie),
 *   2. otherwise the best match from their browser's Accept-Language,
 *   3. otherwise English.
 * "/" becomes "/es/", "/privacy/" becomes "/fr/privacy/", and so on.
 */
export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split('/')[1] || '';

  if (isLocale(first)) return NextResponse.next();

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : matchLocale(request.headers.get('accept-language')) || DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  const rest = pathname === '/' ? '/' : pathname.endsWith('/') ? pathname : `${pathname}/`;
  url.pathname = `/${locale}${rest}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next.js internals and any file with an extension (icon.svg, robots.txt).
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
