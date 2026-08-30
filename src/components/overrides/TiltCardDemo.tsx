import { useRef } from "react";
import type { MouseEvent } from "react";

/**
 * 3D tilt-on-hover demo — mousemove position within the card drives
 * rotateX/rotateY via inline style, giving a light-follows-cursor
 * perspective tilt. Resets on mouse leave.
 */
function TiltCardDemo() {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 22;
    const rotateX = (0.5 - py) * 22;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }

  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-100 flex items-center justify-center p-8">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex h-32 w-48 flex-col items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-white shadow-2xl transition-transform duration-150 ease-out will-change-transform"
        style={{ transform: "perspective(600px) rotateX(0deg) rotateY(0deg)" }}
      >
        <span className="text-sm font-semibold">Tilt Card</span>
        <span className="text-xs text-slate-400">Move cursor over me</span>
      </div>
    </div>
  );
}

export default TiltCardDemo;
