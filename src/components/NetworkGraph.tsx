import React from 'react';

export const NetworkGraph: React.FC = () => {
  // 12 nodes positioned harmoniously
  const nodes = [
    { id: 1, cx: 40, cy: 60 },
    { id: 2, cx: 120, cy: 30 },
    { id: 3, cx: 200, cy: 70 },
    { id: 4, cx: 280, cy: 40 },
    { id: 5, cx: 360, cy: 80 },
    { id: 6, cx: 80, cy: 130 },
    { id: 7, cx: 160, cy: 150 },
    { id: 8, cx: 240, cy: 120 },
    { id: 9, cx: 320, cy: 160 },
    { id: 10, cx: 60, cy: 210 },
    { id: 11, cx: 180, cy: 220 },
    { id: 12, cx: 300, cy: 210 },
  ];

  const links = [
    [1, 2], [2, 3], [3, 4], [4, 5],
    [1, 6], [2, 7], [3, 8], [4, 9],
    [6, 7], [7, 8], [8, 9],
    [6, 10], [7, 11], [8, 12], [9, 12],
    [10, 11], [11, 12],
  ];

  return (
    <div className="w-full h-full opacity-30 pointer-events-none select-none">
      <svg viewBox="0 0 400 250" className="w-full h-full">
        {/* Connecting Lines */}
        {links.map(([from, to], i) => {
          const n1 = nodes.find((n) => n.id === from)!;
          const n2 = nodes.find((n) => n.id === to)!;
          return (
            <line
              key={`link-${i}`}
              x1={n1.cx}
              y1={n1.cy}
              x2={n2.cx}
              y2={n2.cy}
              stroke="#10B981"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="4"
              fill="#064E3B"
              stroke="#10B981"
              strokeWidth="1.5"
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r="1.5"
              fill="#34D399"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default NetworkGraph;
