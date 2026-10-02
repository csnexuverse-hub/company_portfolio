const TONES = {
  gray: { text: 'text-muted', dot: 'bg-subtle' },
  yellow: { text: 'text-yellow-700 dark:text-yellow-300', dot: 'bg-yellow-600 dark:bg-yellow-300' },
  green: { text: 'text-emerald-700 dark:text-green-300', dot: 'bg-emerald-600 dark:bg-green-300' },
  sky: { text: 'text-sky-700 dark:text-sky-300', dot: 'bg-sky-600 dark:bg-sky-300' },
};

export default function Badge({ children, tone = 'gray', className = '' }) {
  const t = TONES[tone] || TONES.gray;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border border-line bg-chip px-3 py-1.5 text-xs font-medium ${t.text} ${className}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
      {children}
    </span>
  );
}
