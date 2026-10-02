import Link from 'next/link';
import { getMessages } from '@/lib/i18n';
import { DEFAULT_LOCALE, pageHref } from '@/lib/i18n/config';

export const metadata = {
  title: 'Page not found',
};

/*
 * Not-found pages receive no route params, so this one is shown in English
 * with links back to the home page in every language.
 */
export default function NotFound() {
  const m = getMessages(DEFAULT_LOCALE).notFound;
  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center px-5 text-center sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{m.title}</h1>
      <p className="mt-4 max-w-md text-[15px] text-muted sm:text-[16px]">{m.text}</p>
      <Link
        href={pageHref(DEFAULT_LOCALE)}
        className="mt-8 inline-flex items-center justify-center rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-fg/85"
      >
        {m.cta}
      </Link>
      <p className="mt-6 flex gap-4 text-sm text-muted">
        <Link href={pageHref('es')} lang="es" className="hover:text-fg">Español</Link>
        <Link href={pageHref('fr')} lang="fr" className="hover:text-fg">Français</Link>
        <Link href={pageHref('pt-br')} lang="pt-BR" className="hover:text-fg">Português</Link>
      </p>
    </main>
  );
}
