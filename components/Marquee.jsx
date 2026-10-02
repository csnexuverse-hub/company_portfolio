const COPIES = [0, 1, 2, 3]; // four identical copies: translating by -50% loops seamlessly
const EDGE_FADE = 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)';

/* `items` is a list of { label, Icon }. */
export default function Marquee({ items }) {
  return (
    <div className="w-full overflow-hidden" style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}>
      <ul className="flex w-max animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
        {COPIES.map((copy) =>
          items.map(({ label, Icon }) => (
            <li
              key={`${copy}-${label}`}
              aria-hidden={copy > 0 ? 'true' : undefined}
              className="flex flex-shrink-0 items-center gap-2.5 px-10 text-muted sm:gap-3 sm:px-14"
            >
              <Icon aria-hidden="true" className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.5} />
              <span className="whitespace-nowrap text-sm font-medium sm:text-base">{label}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
