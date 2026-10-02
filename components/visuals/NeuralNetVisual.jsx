/*
 * Machine learning visual: a small network that assembles itself, layer by
 * layer, then keeps a signal flowing along its connections. Drawn as inline
 * SVG so it is a few kilobytes, sharp at any size, themed by CSS variables
 * and completely still for visitors who prefer reduced motion.
 */
const LAYERS = [
  { x: 52, count: 4, label: 'data' },
  { x: 152, count: 5, label: 'features' },
  { x: 252, count: 5, label: 'layers' },
  { x: 352, count: 2, label: 'output' },
];

const HEIGHT = 300;

function nodesFor(layer) {
  const gap = 46;
  const total = (layer.count - 1) * gap;
  const top = HEIGHT / 2 - total / 2 + 8;
  return Array.from({ length: layer.count }, (_, i) => ({ x: layer.x, y: top + i * gap }));
}

const POINTS = LAYERS.map(nodesFor);

const EDGES = [];
for (let l = 0; l < POINTS.length - 1; l += 1) {
  POINTS[l].forEach((from, i) => {
    POINTS[l + 1].forEach((to, j) => {
      EDGES.push({ from, to, delay: l * 0.35 + (i + j) * 0.04 });
    });
  });
}

export default function NeuralNetVisual({ labels }) {
  const names = labels || LAYERS.map((layer) => layer.label);

  return (
    <svg viewBox="0 0 420 300" className="nn h-full w-full" role="presentation" focusable="false">
      {EDGES.map((edge, index) => (
        <line
          key={index}
          className="nn-edge"
          x1={edge.from.x}
          y1={edge.from.y}
          x2={edge.to.x}
          y2={edge.to.y}
          style={{ '--d': `${edge.delay.toFixed(2)}s` }}
        />
      ))}

      {POINTS.map((layer, layerIndex) =>
        layer.map((node, index) => (
          <circle
            key={`${layerIndex}-${index}`}
            className={layerIndex === POINTS.length - 1 ? 'nn-node nn-node-out' : 'nn-node'}
            cx={node.x}
            cy={node.y}
            r="7"
            style={{ '--d': `${(layerIndex * 0.35 + index * 0.08).toFixed(2)}s` }}
          />
        ))
      )}

      {LAYERS.map((layer, index) => (
        <text
          key={layer.x}
          className="nn-label"
          x={layer.x}
          y={22}
          textAnchor="middle"
          style={{ '--d': `${(index * 0.35 + 0.4).toFixed(2)}s` }}
        >
          {names[index]}
        </text>
      ))}
    </svg>
  );
}
