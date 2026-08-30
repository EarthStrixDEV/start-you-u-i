import { useRef } from "react";
import type { MouseEvent } from "react";

/**
 * Cursor-follow trail demo — mousemove spawns short-lived dot elements at
 * the pointer position that fade and shrink out via inline transition,
 * imperatively appended/removed from the DOM (no re-render per dot).
 */
function CursorTrailDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const now = performance.now();
    if (now - lastSpawnRef.current < 40) return; // throttle spawn rate
    lastSpawnRef.current = now;

    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className =
      "pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-gradient-to-br from-pink-400 to-violet-500 transition-all duration-500 ease-out";
    dot.style.left = `${e.clientX - rect.left - 5}px`;
    dot.style.top = `${e.clientY - rect.top - 5}px`;
    container.appendChild(dot);

    requestAnimationFrame(() => {
      dot.style.opacity = "0";
      dot.style.transform = "scale(0.2)";
    });

    setTimeout(() => {
      dot.remove();
    }, 500);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-900 flex items-center justify-center"
    >
      <p className="pointer-events-none text-sm font-medium text-slate-400">
        Move your cursor around
      </p>
    </div>
  );
}

export default CursorTrailDemo;
