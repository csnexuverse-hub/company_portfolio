/*
 * Stroke-based mark: a rounded frame holding an open ring (the "C") with a
 * single node in its opening, suggesting a system with a defined interface.
 */
export default function Logo({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <rect x="1.75" y="1.75" width="28.5" height="28.5" rx="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20.24 11.76A6 6 0 1 0 20.24 20.24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="21" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}
