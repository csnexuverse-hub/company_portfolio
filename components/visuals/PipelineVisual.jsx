/*
 * Data engineering visual: the stages of a pipeline snap into place one after
 * another, then batches of records travel through them. Raw rows feed in on
 * the left, tidy results come out on the right. Inline SVG, themed by CSS
 * variables, still for visitors who prefer reduced motion.
 */
const STAGES = [
  { label: 'collect', sub: 'sources' },
  { label: 'clean', sub: 'nulls, types' },
  { label: 'validate', sub: 'schema' },
  { label: 'analyse', sub: 'results' },
];

const BOX_W = 92;
const BOX_H = 54;
const GAP = 26;
const START_X = 16;
const ROW_Y = 120;

export default function PipelineVisual({ stages = STAGES }) {
  const lastX = START_X + (stages.length - 1) * (BOX_W + GAP);

  return (
    <svg viewBox="0 0 474 210" className="pipe h-full w-full" role="presentation" focusable="false">
      {/* Raw, uneven rows feeding the first stage. */}
      {[0, 1, 2, 3].map((row) => (
        <rect
          key={`in-${row}`}
          className="pipe-row pipe-row-raw"
          x={START_X + 8 + row * 5}
          y={26 + row * 10}
          width={62 - row * 9}
          height="5"
          rx="2"
          style={{ '--d': `${(row * 0.12).toFixed(2)}s` }}
        />
      ))}
      <path
        className="pipe-track"
        d={`M${START_X + BOX_W / 2} 74 V${ROW_Y}`}
        style={{ '--d': '0.4s' }}
      />

      {/* Even, validated results leaving the last stage. */}
      {[0, 1, 2].map((row) => (
        <rect
          key={`out-${row}`}
          className="pipe-row pipe-row-clean"
          x={lastX + 10}
          y={30 + row * 12}
          width={BOX_W - 20}
          height="6"
          rx="2"
          style={{ '--d': `${(1.1 + row * 0.14).toFixed(2)}s` }}
        />
      ))}
      <path className="pipe-track" d={`M${lastX + BOX_W / 2} 74 V${ROW_Y}`} />

      {/* Connectors with a batch travelling along each one. */}
      {stages.slice(0, -1).map((_, index) => {
        const x = START_X + (index + 1) * BOX_W + index * GAP;
        return (
          <g key={`pipe-${index}`}>
            <line className="pipe-track" x1={x} y1={ROW_Y + BOX_H / 2} x2={x + GAP} y2={ROW_Y + BOX_H / 2} />
            <rect
              className="pipe-packet"
              x={x}
              y={ROW_Y + BOX_H / 2 - 4}
              width="8"
              height="8"
              rx="2"
              style={{ '--d': `${(index * 0.45).toFixed(2)}s`, '--travel': `${GAP}px` }}
            />
          </g>
        );
      })}

      {stages.map((stage, index) => {
        const x = START_X + index * (BOX_W + GAP);
        return (
          <g key={index} className="pipe-stage" style={{ '--d': `${(index * 0.22).toFixed(2)}s` }}>
            <rect className="pipe-box" x={x} y={ROW_Y} width={BOX_W} height={BOX_H} rx="8" />
            <text className="pipe-label" x={x + BOX_W / 2} y={ROW_Y + 23} textAnchor="middle">
              {stage.label}
            </text>
            <text className="pipe-sub" x={x + BOX_W / 2} y={ROW_Y + 40} textAnchor="middle">
              {stage.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
