/*
 * Verifies every translation has exactly the same keys, array lengths and
 * {placeholders} as English:  npm run i18n:check
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// The catalogues use `export default`, which plain Node treats as CommonJS
// in this project, so each file is evaluated as a plain object instead.
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'lib', 'i18n', 'messages');

function load(file) {
  const source = fs.readFileSync(path.join(dir, file), 'utf8');
  const match = /export default (\w+);?\s*$/.exec(source.trim());
  if (!match) throw new Error(`${file} must end with "export default <name>;"`);
  const body = source.trim().replace(/export default \w+;?\s*$/, '');
  return new Function(`${body}\nreturn ${match[1]};`)();
}

const en = load('en.js');
const others = { es: load('es.js'), fr: load('fr.js'), 'pt-br': load('pt-br.js') };
const problems = [];

const placeholders = (s) => (String(s).match(/\{\w+\}/g) || []).sort().join(',');

function compare(ref, other, path, lang) {
  if (ref === null) {
    if (other !== null && typeof other !== 'string') problems.push(`${lang}: ${path} should be text or null`);
    return;
  }
  if (Array.isArray(ref)) {
    if (!Array.isArray(other)) return problems.push(`${lang}: ${path} should be a list`);
    if (other.length !== ref.length) problems.push(`${lang}: ${path} has ${other.length} items, English has ${ref.length}`);
    ref.forEach((item, i) => compare(item, other[i], `${path}[${i}]`, lang));
    return;
  }
  if (typeof ref === 'object') {
    if (!other || typeof other !== 'object') return problems.push(`${lang}: ${path} is missing`);
    for (const key of Object.keys(ref)) {
      if (!(key in other)) problems.push(`${lang}: ${path}.${key} is missing`);
      else compare(ref[key], other[key], `${path}.${key}`, lang);
    }
    for (const key of Object.keys(other)) if (!(key in ref)) problems.push(`${lang}: ${path}.${key} is not in English`);
    return;
  }
  if (typeof other !== 'string' || !other.trim()) return problems.push(`${lang}: ${path} is empty`);
  if (placeholders(ref) !== placeholders(other)) problems.push(`${lang}: ${path} placeholders differ from English`);
}

for (const [lang, catalogue] of Object.entries(others)) compare(en, catalogue, 'messages', lang);

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s) found.`);
  process.exit(1);
}
console.log('All translations match the English catalogue.');
