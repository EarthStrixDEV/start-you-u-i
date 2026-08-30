import { useId, useState } from "react";
import type { KeyboardEvent } from "react";
import { Info } from "lucide-react";

/**
 * Tooltip demo — HARD CONSTRAINT: fixed safe position relative to its
 * trigger, contained within the card (no floating-UI collision detection).
 *
 * Shows on hover AND keyboard focus (not hover-only — a common a11y miss).
 * Hover and focus are tracked as independent booleans so a mouseleave while
 * the trigger still has keyboard focus does NOT hide the tooltip (and vice
 * versa) — visible is true whenever either is true.
 * role="tooltip" + aria-describedby links trigger to content. Dismisses on
 * Escape or blur.
 */
function TooltipDemo() {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const tooltipId = useId();
  const visible = hovered || focused;

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Escape") {
      setHovered(false);
      setFocused(false);
    }
  }

  return (
    <div className="relative flex h-full w-full self-stretch items-center justify-center pt-6">
      <div className="relative inline-flex">
        <button
          type="button"
          aria-describedby={visible ? tooltipId : undefined}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
          className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          <Info className="h-4 w-4 text-slate-400" aria-hidden="true" />
          Storage limit
        </button>

        {visible && (
          <div
            id={tooltipId}
            role="tooltip"
            className="absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-center text-xs leading-relaxed text-white shadow-lg"
          >
            Your workspace is using 8.2 GB of the 10 GB plan limit.
            <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-900" />
          </div>
        )}
      </div>
    </div>
  );
}

export default TooltipDemo;
