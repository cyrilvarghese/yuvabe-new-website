"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Dot = {
  id: number;
  angle: number;
  radiusX: number;
  radiusY: number;
  size: number;
  opacity: number;
  speed: number;
  hue: number;
  spread: number;
  offsetX: number;
  offsetY: number;
};

type RenderDot = Dot & {
  x: number;
  y: number;
};

type EllipticalDotRingProps = {
  active: boolean;
  cursorX: number;
  cursorY: number;
  className?: string;
};

const DOT_COUNT = 340;
const DRIFT_AMPLITUDE = 0.18;
const REPULSION_RADIUS = 18;
const REPULSION_STRENGTH = 13;

function createDot(index: number): Dot {
  const progress = index / DOT_COUNT;
  const angle = progress * Math.PI * 2;
  const radiusX = 38 + Math.sin(progress * Math.PI * 4) * 2.8 + Math.cos(progress * Math.PI * 7) * 1.8;
  const radiusY = 26 + Math.cos(progress * Math.PI * 3) * 2.2 + Math.sin(progress * Math.PI * 5) * 1.2;

  return {
    id: index,
    angle,
    radiusX,
    radiusY,
    size: 1 + ((index * 17) % 100) / 100 * 1.9,
    opacity: 0.22 + ((index * 23) % 100) / 100 * 0.65,
    speed: 0.18 + ((index * 19) % 100) / 100 * 0.4,
    hue: index % 2 === 0 ? 318 : 286,
    spread: ((index * 29) % 100) / 100,
    offsetX: Math.sin(progress * Math.PI * 8) * 1.8,
    offsetY: Math.cos(progress * Math.PI * 6) * 1.8,
  };
}

export function EllipticalDotRing({ active, cursorX, cursorY, className }: EllipticalDotRingProps) {
  const dots = useMemo(() => Array.from({ length: DOT_COUNT }, (_, index) => createDot(index)), []);
  const [renderDots, setRenderDots] = useState<RenderDot[]>(() => dots.map((dot) => ({ ...dot, x: 50, y: 50 })));
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      const time = (now - start) / 1000;
      const nextDots = dots.map((dot) => {
        const driftAngle = dot.angle + time * dot.speed;
        const ringX = 50 + Math.cos(driftAngle) * (dot.radiusX + Math.sin(time * 0.8 + dot.angle) * DRIFT_AMPLITUDE) + dot.offsetX;
        const ringY = 60 + Math.sin(driftAngle) * (dot.radiusY + Math.cos(time * 0.7 + dot.angle) * DRIFT_AMPLITUDE) + dot.offsetY;

        let x = ringX;
        let y = ringY;

        if (active) {
          const dx = ringX - cursorX;
          const dy = ringY - cursorY;
          const distance = Math.hypot(dx, dy);

          if (distance < REPULSION_RADIUS) {
            const force = ((REPULSION_RADIUS - distance) / REPULSION_RADIUS) ** 2 * REPULSION_STRENGTH;
            const nx = distance > 0 ? dx / distance : Math.cos(dot.angle);
            const ny = distance > 0 ? dy / distance : Math.sin(dot.angle);
            x += nx * force;
            y += ny * force;
          }
        }

        return { ...dot, x, y };
      });

      setRenderDots(nextDots);
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [active, cursorX, cursorY, dots]);

  return (
    <div aria-hidden className={className}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(255,188,232,0.08),rgba(255,188,232,0)_24%),radial-gradient(circle_at_52%_64%,rgba(186,134,255,0.08),rgba(186,134,255,0)_34%)]" />
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {renderDots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={dot.size / 3.2}
            fill={`hsla(${dot.hue} 88% 74% / ${dot.opacity})`}
          />
        ))}
      </svg>
    </div>
  );
}
