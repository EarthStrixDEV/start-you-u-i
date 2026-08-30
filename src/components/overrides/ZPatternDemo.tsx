/**
 * Z-pattern layout demo — 4 elements positioned along the classic eye-scan
 * path (top-left logo, top-right nav, mid-diagonal element, bottom-right
 * CTA), with a faint SVG path tracing the Z shape behind them so the
 * diagonal flow reads clearly rather than looking like a generic grid.
 */
function ZPatternDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-50">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 300 200"
        preserveAspectRatio="none"
      >
        <path
          d="M 30 30 L 270 30 L 30 170 L 270 170"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.6"
        />
      </svg>

      {/* top-left logo */}
      <div className="absolute left-6 top-5 rounded-md bg-indigo-600 px-2.5 py-1 text-[10px] font-bold text-white">
        LOGO
      </div>
      {/* top-right nav */}
      <div className="absolute right-6 top-6 flex gap-2">
        <span className="h-1.5 w-6 rounded-full bg-slate-300" />
        <span className="h-1.5 w-6 rounded-full bg-slate-300" />
        <span className="h-1.5 w-6 rounded-full bg-slate-300" />
      </div>
      {/* mid-diagonal element */}
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400" />
      {/* bottom-right CTA */}
      <div className="absolute bottom-5 right-6 rounded-md bg-indigo-600 px-4 py-2 text-[10px] font-semibold text-white shadow-sm">
        Get Started
      </div>
    </div>
  );
}

export default ZPatternDemo;
