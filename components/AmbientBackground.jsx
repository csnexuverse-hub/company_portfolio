/*
 * Sits behind the sections between About us and Contact us. The inner layer is
 * sticky rather than fixed, so it stays inside its own stacking context and the
 * movement stays continuous for the whole scroll of that region.
 */
export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="ambient-layer">
        <span className="ambient-blob ambient-blob-a" />
        <span className="ambient-blob ambient-blob-b" />
        <span className="ambient-blob ambient-blob-c" />
      </div>
    </div>
  );
}
