/**
 * Felt / plush toy demo — a soft rounded blob shape with a fuzzy-edge
 * radial gradient suggesting fabric shading, plus a dashed-line SVG
 * outline mimicking a stitched seam, in muted toy colors (coral, mustard,
 * sage). Tactile handmade feel.
 */
function FeltPlushToyDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-[#faf3ea] flex items-center justify-center gap-6 p-6">
      <div
        className="relative h-32 w-32 rounded-[58%_42%_48%_52%/45%_55%_45%_55%]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 38% 32%, #ff9a80 0%, #f4805f 55%, #e06848 100%)",
          boxShadow: "inset -6px -8px 14px rgba(120,40,20,0.25), inset 4px 6px 10px rgba(255,255,255,0.35)",
        }}
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="38"
            stroke="#7a2e18"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-2.5">
        <span className="h-9 w-16 rounded-[45%_55%_50%_50%/55%_45%_55%_45%] border-2 border-dashed border-amber-800/40 bg-amber-200" />
        <span className="h-9 w-16 rounded-[50%_50%_45%_55%/45%_55%_50%_50%] border-2 border-dashed border-emerald-800/40 bg-emerald-200" />
      </div>

      <p className="absolute bottom-3 text-xs font-medium text-[#7a2e18]/70">
        Stitched &amp; huggable
      </p>
    </div>
  );
}

export default FeltPlushToyDemo;
