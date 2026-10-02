/*
 * Physical model visual: a schematic robotic arm with gears and measurement
 * labels that assembles itself. Drawn as inline SVG, sharp at any size,
 * themed by CSS variables and completely still for visitors who prefer
 * reduced motion. Follows the same animation pattern as NeuralNetVisual
 * and PipelineVisual.
 */

const GEARS = [
  { cx: 80, cy: 220, r: 28, teeth: 10, delay: 0.1, speed: 12 },
  { cx: 132, cy: 220, r: 20, teeth: 8, delay: 0.3, speed: -9 },
  { cx: 172, cy: 220, r: 14, teeth: 6, delay: 0.5, speed: 7 },
];

const ARM_SEGMENTS = [
  { x1: 172, y1: 220, x2: 220, y2: 140, delay: 0.6 },
  { x1: 220, y1: 140, x2: 300, y2: 100, delay: 0.8 },
  { x1: 300, y1: 100, x2: 350, y2: 70, delay: 1.0 },
];

const JOINTS = [
  { cx: 172, cy: 220, r: 5, delay: 0.5 },
  { cx: 220, cy: 140, r: 5, delay: 0.7 },
  { cx: 300, cy: 100, r: 5, delay: 0.9 },
  { cx: 350, cy: 70, r: 4, delay: 1.1 },
];

const LABELS = [
  { x: 80, y: 264, text: 'drive', delay: 0.4 },
  { x: 220, y: 130, text: 'joint-A', delay: 0.9 },
  { x: 350, y: 60, text: 'effector', delay: 1.3 },
];

const DIMS = [
  { x1: 172, y1: 275, x2: 300, y2: 275, label: '128 mm', delay: 1.2 },
  { x1: 300, y1: 275, x2: 370, y2: 275, label: '50 mm', delay: 1.4 },
];

function gearPath(cx, cy, r, teeth) {
  const inner = r * 0.7;
  const toothWidth = Math.PI / teeth;
  let d = '';
  for (let i = 0; i < teeth; i++) {
    const a1 = (i * 2 * Math.PI) / teeth;
    const a2 = a1 + toothWidth * 0.4;
    const a3 = a1 + toothWidth;
    const a4 = a1 + toothWidth * 1.4;
    if (i === 0) {
      d += `M${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)}`;
    }
    d += ` L${cx + r * Math.cos(a2)},${cy + r * Math.sin(a2)}`;
    d += ` L${cx + inner * Math.cos(a3)},${cy + inner * Math.sin(a3)}`;
    d += ` L${cx + inner * Math.cos(a4)},${cy + inner * Math.sin(a4)}`;
    const aNext = ((i + 1) * 2 * Math.PI) / teeth;
    d += ` L${cx + r * Math.cos(aNext)},${cy + r * Math.sin(aNext)}`;
  }
  d += 'Z';
  return d;
}

export default function PrototypeVisual({ labels }) {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" role="presentation" focusable="false">
      {/* Base platform */}
      <rect
        className="proto-part"
        x="40" y="240" width="160" height="8" rx="2"
        style={{ '--d': '0s' }}
      />

      {/* Gears */}
      {GEARS.map((gear, i) => (
        <g key={`gear-${i}`}>
          <path
            className="proto-gear"
            d={gearPath(gear.cx, gear.cy, gear.r, gear.teeth)}
            style={{ '--d': `${gear.delay}s`, '--speed': `${gear.speed}s` }}
          />
          <circle
            className="proto-gear-center"
            cx={gear.cx} cy={gear.cy} r={3.5}
            style={{ '--d': `${gear.delay}s` }}
          />
        </g>
      ))}

      {/* Arm segments */}
      {ARM_SEGMENTS.map((seg, i) => (
        <line
          key={`seg-${i}`}
          className="proto-arm"
          x1={seg.x1} y1={seg.y1} x2={seg.x2} y2={seg.y2}
          style={{ '--d': `${seg.delay}s` }}
        />
      ))}

      {/* Joints */}
      {JOINTS.map((joint, i) => (
        <circle
          key={`joint-${i}`}
          className="proto-joint"
          cx={joint.cx} cy={joint.cy} r={joint.r}
          style={{ '--d': `${joint.delay}s` }}
        />
      ))}

      {/* Gripper at end effector */}
      <line className="proto-arm" x1="350" y1="70" x2="365" y2="50" style={{ '--d': '1.2s' }} />
      <line className="proto-arm" x1="350" y1="70" x2="370" y2="58" style={{ '--d': '1.2s' }} />
      <line className="proto-arm" x1="365" y1="50" x2="372" y2="42" style={{ '--d': '1.3s' }} />
      <line className="proto-arm" x1="370" y1="58" x2="378" y2="50" style={{ '--d': '1.3s' }} />

      {/* Dimension lines */}
      {DIMS.map((dim, i) => (
        <g key={`dim-${i}`} className="proto-dim" style={{ '--d': `${dim.delay}s` }}>
          <line x1={dim.x1} y1={dim.y1} x2={dim.x2} y2={dim.y2} />
          <line x1={dim.x1} y1={dim.y1 - 4} x2={dim.x1} y2={dim.y1 + 4} />
          <line x1={dim.x2} y1={dim.y2 - 4} x2={dim.x2} y2={dim.y2 + 4} />
          <text x={(dim.x1 + dim.x2) / 2} y={dim.y1 + 14} textAnchor="middle">
            {dim.label}
          </text>
        </g>
      ))}

      {/* Labels */}
      {LABELS.map((lbl, index) => (
        <text
          key={lbl.x}
          className="nn-label"
          x={lbl.x} y={lbl.y}
          textAnchor="middle"
          style={{ '--d': `${lbl.delay}s` }}
        >
          {labels?.[index] || lbl.text}
        </text>
      ))}
    </svg>
  );
}
