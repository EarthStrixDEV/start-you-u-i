import { useState } from "react";
import type { MouseEvent, CSSProperties } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
}

const COLORS = ["#f472b6", "#a78bfa", "#60a5fa", "#facc15", "#34d399"];
let particleIdSeq = 0;

/**
 * Particle burst demo — click spawns a ring of small colored dots that fly
 * outward and fade via the `particle-burst` keyframe (direction driven by
 * per-particle CSS custom properties), then clears itself from state.
 */
function ParticleBurstDemo() {
  const [particles, setParticles] = useState<Particle[]>([]);

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const count = 10;
    const burst: Particle[] = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count;
      const distance = 50 + Math.random() * 25;
      return {
        id: particleIdSeq++,
        x,
        y,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        color: COLORS[i % COLORS.length],
      };
    });
    setParticles((prev) => [...prev, ...burst]);
    setTimeout(() => {
      const ids = new Set(burst.map((p) => p.id));
      setParticles((prev) => prev.filter((p) => !ids.has(p.id)));
    }, 700);
  }

  return (
    <div
      onClick={handleClick}
      className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-100 flex cursor-pointer flex-col items-center justify-center gap-3"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          aria-hidden
          className="pointer-events-none absolute h-2 w-2 rounded-full"
          style={
            {
              left: p.x,
              top: p.y,
              backgroundColor: p.color,
              "--particle-x": `${p.dx}px`,
              "--particle-y": `${p.dy}px`,
              animation: "particle-burst 0.6s ease-out forwards",
            } as CSSProperties
          }
        />
      ))}
      <span className="rounded-full bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white shadow-md">
        Click anywhere
      </span>
      <p className="text-xs font-medium text-slate-400">Click to try</p>
    </div>
  );
}

export default ParticleBurstDemo;
