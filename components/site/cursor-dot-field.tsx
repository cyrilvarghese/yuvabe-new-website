"use client";

import { useMemo } from "react";

type CursorDotFieldProps = {
  x: number;
  y: number;
  active: boolean;
  className?: string;
  columns?: number;
  rows?: number;
  influenceRadius?: number;
  pullStrength?: number;
  maxOpacity?: number;
  dotSize?: number;
};

export function CursorDotField({
  x,
  y,
  active,
  className,
  columns = 24,
  rows = 24,
  influenceRadius = 28,
  pullStrength = 3,
  maxOpacity = .2,
  dotSize = 2.1,
}: CursorDotFieldProps) {
  const points = useMemo(
    () =>
      Array.from({ length: columns * rows }, (_, index) => {
        const col = index % columns;
        const row = Math.floor(index / columns);
        return {
          x: 4 + (col / Math.max(1, columns - 1)) * 92,
          y: 5 + (row / Math.max(1, rows - 1)) * 90,
        };
      }),
    [columns, rows],
  );

  return (
    <div className={className}>
      {points.map((point, index) => {
        const dx = x - point.x;
        const dy = y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const influence = active ? Math.max(0, 1 - dist / influenceRadius) : 0;
        const eased = influence * influence;
        const pull = eased * pullStrength;
        const tx = (dx / dist) * pull;
        const ty = (dy / dist) * pull;
        const opacity = eased * maxOpacity;

        return (
          <span
            key={`${point.x}-${point.y}-${index}`}
            className="absolute rounded-full bg-white"
            style={{
              width: dotSize,
              height: dotSize,
              left: `${point.x}%`,
              top: `${point.y}%`,
              transform: `translate(-50%, -50%) translate(${tx}px, ${ty}px)`,
              opacity,
              transition: "transform 95ms linear, opacity 120ms ease-out",
            }}
          />
        );
      })}
    </div>
  );
}

