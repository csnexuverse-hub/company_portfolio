import en from './messages/en';
import es from './messages/es';
import fr from './messages/fr';
import ptBr from './messages/pt-br';
import { DEFAULT_LOCALE } from './config';

const CATALOGUES = { en, es, fr, 'pt-br': ptBr };

export function getMessages(locale) {
  return CATALOGUES[locale] || CATALOGUES[DEFAULT_LOCALE];
}

/** Replaces {placeholders} in a message: format('Hi {name}', { name: 'Ana' }). */
export function format(message, values = {}) {
  return String(message).replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match
  );
}

export * from './config';
