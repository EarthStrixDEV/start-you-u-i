import { useState } from "react";
import type { MouseEvent } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

let rippleIdSeq = 0;

/**
 * Ripple click demo — click handler spawns a transient circle at the click
 * coordinates that expands and fades via the `ripple-expand` keyframe, then
 * removes itself from state after the animation completes.
 */
function RippleClickDemo() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.8;
    const ripple: Ripple = {
      id: rippleIdSeq++,
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
    };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 650);
  }

  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-100 flex flex-col items-center justify-center gap-3">
      <button
        type="button"
        onClick={handleClick}
        className="relative isolate overflow-hidden rounded-xl bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform active:scale-95"
      >
        {ripples.map((r) => (
          <span
            key={r.id}
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-white"
            style={{
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              animation: "ripple-expand 0.6s ease-out forwards",
            }}
          />
        ))}
        <span className="relative">Click me</span>
      </button>
      <p className="text-xs font-medium text-slate-400">Click to try</p>
    </div>
  );
}

export default RippleClickDemo;
