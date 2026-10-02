'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const THEME_KEY = 'cs-theme';

const DEFAULT_LABELS = { toLight: 'Switch to light theme', toDark: 'Switch to dark theme', neutral: 'Switch theme' };

export default function ThemeToggle({ className = '', labels = DEFAULT_LABELS }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.style.colorScheme = next;
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      // storage can be unavailable in private modes; the choice simply will not persist
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? labels.toLight : theme === 'light' ? labels.toDark : labels.neutral}
      className={`flex h-10 w-10 flex-none items-center justify-center rounded-md border border-line text-fg transition-colors hover:bg-chip ${className}`}
    >
      {/* Icons swap with CSS so the markup matches before and after hydration. */}
      <Moon aria-hidden="true" className="h-[18px] w-[18px] dark:hidden" strokeWidth={1.75} />
      <Sun aria-hidden="true" className="hidden h-[18px] w-[18px] dark:block" strokeWidth={1.75} />
    </button>
  );
}
