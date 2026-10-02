/*
 * Client components receive only the text they need, not the whole
 * catalogue, to keep the page payload small.
 */
export function navMessages(m) {
  const pick = (items, field) =>
    Object.fromEntries(Object.entries(items).map(([id, item]) => [id, { title: item.title, short: item[field] }]));
  return {
    nav: m.nav,
    common: m.common,
    research: pick(m.research.areas, 'description'),
    services: pick(m.services.items, 'short'),
    products: pick(m.products.items, 'short'),
  };
}

/*
 * The contact form needs its own messages plus the titles used in the
 * interest dropdown, in the shape buildInterestGroups() expects.
 */
export function contactFormMessages(m) {
  const titles = (items) => Object.fromEntries(Object.entries(items).map(([id, item]) => [id, { title: item.title }]));
  return {
    ...m.form,
    catalogue: {
      form: { groups: m.form.groups, otherOptions: m.form.otherOptions },
      services: { items: titles(m.services.items) },
      products: { items: titles(m.products.items) },
      research: { areas: titles(m.research.areas) },
    },
  };
}
