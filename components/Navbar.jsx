'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import ButtonLink from './ButtonLink';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { NAV_ITEMS, PRODUCTS, RESEARCH_AREAS, SERVICES } from '@/lib/site';
import { sectionHref } from '@/lib/i18n/config';

const CONSULTATION = { subject: 'enquiry' };

/*
 * Dropdown contents for the current language. `t` is the slice of messages
 * built by navMessages() in lib/i18n/slices.js.
 */
function buildMenus(locale, t) {
  return {
    research: {
      items: RESEARCH_AREAS.map((a) => ({ id: a.id, Icon: a.Icon, title: t.research[a.key].title, short: t.research[a.key].short })),
      allHref: sectionHref(locale, 'research'),
      allLabel: t.nav.allResearch,
    },
    services: {
      items: SERVICES.map((s) => ({ id: s.id, Icon: s.Icon, title: t.services[s.id].title, short: t.services[s.id].short })),
      allHref: sectionHref(locale, 'services'),
      allLabel: t.nav.allServices,
    },
    products: {
      items: PRODUCTS.map((p) => ({ id: p.id, Icon: p.Icon, title: t.products[p.id].title, short: t.products[p.id].short })),
      allHref: sectionHref(locale, 'products'),
      allLabel: t.nav.allProducts,
    },
  };
}

export default function Navbar({ solid = false, locale, t }) {
  const MENUS = buildMenus(locale, t);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown: 'services' | 'products' | null
  const [mobileGroup, setMobileGroup] = useState(null); // mobile accordion group
  const [active, setActive] = useState('');
  const closeTimer = useRef(null);
  const lastPointer = useRef('');

  // Transparent at the top, blurred black after 20px of scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Escape closes everything; clicking outside closes desktop dropdowns.
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMenuOpen(false);
      }
    };
    const onClick = (event) => {
      if (!event.target.closest('[data-nav-dropdown]')) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  // The mobile menu should not stay open after resizing to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileGroup(null);
  };

  const hoverOpen = (name) => (event) => {
    if (event.pointerType !== 'mouse') return;
    clearTimeout(closeTimer.current);
    setOpenMenu(name);
  };
  const hoverClose = (event) => {
    if (event.pointerType !== 'mouse') return;
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const filled = solid || scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        filled ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
        <div className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-6">
          <a href={sectionHref(locale, 'home')} className="flex min-w-0 items-center gap-2 text-fg sm:gap-2.5" aria-label={t.common.home}>
            <Logo className="h-6 w-6 flex-none sm:h-7 sm:w-7" />
            <span className="hidden truncate text-sm font-semibold tracking-tight min-[360px]:inline sm:text-[15px]">CS Development Technologies</span>
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                if (!item.menu) {
                  return (
                    <li key={item.id}>
                      <a
                        href={sectionHref(locale, item.id)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
                          isActive ? 'text-fg' : 'text-muted hover:text-fg'
                        }`}
                        style={isActive ? { boxShadow: '0 2px 0 0 rgb(var(--fg))' } : undefined}
                      >
                        {t.nav[item.key]}
                      </a>
                    </li>
                  );
                }

                const menu = MENUS[item.menu];
                const isOpen = openMenu === item.menu;
                const panelId = `nav-panel-${item.menu}`;
                return (
                  <li
                    key={item.id}
                    className="relative"
                    data-nav-dropdown
                    onPointerEnter={hoverOpen(item.menu)}
                    onPointerLeave={hoverClose}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onPointerDown={(event) => {
                        lastPointer.current = event.pointerType;
                      }}
                      onClick={() => {
                        // A mouse user has already opened the menu by hovering, so a click keeps it open.
                        // Keyboard and touch users toggle it.
                        const viaMouse = lastPointer.current === 'mouse';
                        lastPointer.current = '';
                        setOpenMenu((current) => (viaMouse || current !== item.menu ? item.menu : null));
                      }}
                      className={`flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
                        isActive || isOpen ? 'text-fg' : 'text-muted hover:text-fg'
                      }`}
                      style={isActive ? { boxShadow: '0 2px 0 0 rgb(var(--fg))' } : undefined}
                    >
                      {t.nav[item.key]}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <div
                      id={panelId}
                      inert={!isOpen}
                      className={`absolute left-1/2 top-full w-[min(380px,calc(100vw-2.5rem))] -translate-x-1/2 pt-3 transition-all duration-200 ${
                        isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'
                      }`}
                    >
                      <div className="elevate rounded-xl border border-line bg-bg/95 p-2 backdrop-blur-xl">
                        <ul>
                          {menu.items.map(({ id, title, short, Icon }) => (
                            <li key={id}>
                              <a
                                href={sectionHref(locale, id)}
                                onClick={() => setOpenMenu(null)}
                                className="flex gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-chip"
                              >
                                <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-muted" strokeWidth={1.5} />
                                <span>
                                  <span className="block text-sm font-medium text-fg">{title}</span>
                                  <span className="mt-0.5 block text-xs text-muted">{short}</span>
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-1 border-t border-line px-3 pb-1 pt-3">
                          <a
                            href={menu.allHref}
                            onClick={() => setOpenMenu(null)}
                            className="text-sm font-medium text-fg underline decoration-fg/30 underline-offset-4 hover:decoration-fg"
                          >
                            {menu.allLabel}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-none items-center gap-2 sm:gap-3">
            <LanguageSwitcher locale={locale} label={t.common.language} />
            <ThemeToggle
              labels={{ toLight: t.common.themeToLight, toDark: t.common.themeToDark, neutral: t.common.themeSwitch }}
            />
            <ButtonLink href={sectionHref(locale, 'contact')} variant="secondary" prefill={CONSULTATION} className="hidden xl:inline-flex">
              {t.common.bookConsultation}
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-fg transition-colors hover:bg-chip sm:h-10 sm:w-10 lg:hidden"
            >
              {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: smooth height transition using the grid-rows technique. */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            aria-label="Mobile"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg/95 backdrop-blur-md"
          >
            <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
              {NAV_ITEMS.map((item) => {
                if (!item.menu) {
                  return (
                    <li key={item.id} className="border-b border-line">
                      <a href={sectionHref(locale, item.id)} onClick={closeMobile} className="block py-3.5 text-base text-muted hover:text-fg">
                        {t.nav[item.key]}
                      </a>
                    </li>
                  );
                }
                const menu = MENUS[item.menu];
                const isOpen = mobileGroup === item.menu;
                const groupId = `mobile-group-${item.menu}`;
                return (
                  <li key={item.id} className="border-b border-line">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={groupId}
                      onClick={() => setMobileGroup(isOpen ? null : item.menu)}
                      className="flex w-full items-center justify-between py-3.5 text-left text-base text-muted hover:text-fg"
                    >
                      {t.nav[item.key]}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 flex-none text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      id={groupId}
                      inert={!isOpen}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <ul className="min-h-0 overflow-hidden">
                        <li>
                          <a href={menu.allHref} onClick={closeMobile} className="block py-2.5 pl-3 text-sm text-fg">
                            {menu.allLabel}
                          </a>
                        </li>
                        {menu.items.map(({ id, title }) => (
                          <li key={id}>
                            <a href={sectionHref(locale, id)} onClick={closeMobile} className="block py-2.5 pl-3 text-sm text-muted hover:text-fg">
                              {title}
                            </a>
                          </li>
                        ))}
                        <li aria-hidden="true" className="h-2" />
                      </ul>
                    </div>
                  </li>
                );
              })}
              <li className="py-5">
                <ButtonLink href={sectionHref(locale, 'contact')} prefill={CONSULTATION} onClick={closeMobile} className="w-full">
                  {t.common.bookConsultation}
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
