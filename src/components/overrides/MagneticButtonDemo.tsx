import { useRef } from "react";
import type { MouseEvent } from "react";

/**
 * Magnetic button demo — tracks the pointer within a padded hit-zone and
 * translates the button toward the cursor, snapping back to center on
 * pointer leave. Pure transform math on mousemove, no external lib.
 */
function MagneticButtonDemo() {
  const btnRef = useRef<HTMLButtonElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    btn.style.transform = `translate(${relX * 0.35}px, ${relY * 0.35}px)`;
  }

  function handleMouseLeave() {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = "translate(0, 0)";
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-50 flex flex-col items-center justify-center gap-4"
    >
      <button
        ref={btnRef}
        type="button"
        className="rounded-full bg-slate-900 px-9 py-4 text-sm font-semibold text-white shadow-xl transition-transform duration-150 ease-out"
      >
        Attract Me
      </button>
      <p className="text-sm text-slate-400">Move your cursor nearby</p>
    </div>
  );
}

export default MagneticButtonDemo;
