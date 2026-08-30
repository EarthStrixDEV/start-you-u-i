/**
 * Art Deco demo — symmetrical gold sunburst/fan motif radiating from a
 * center point on a deep-navy/black background, framed by a thin geometric
 * gold border. 1920s gilded luxury symmetry.
 */
const RAY_ANGLES = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180];

function ArtDecoDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-[#0b0d14] flex items-center justify-center p-4">
      {/* geometric border frame */}
      <div className="absolute inset-3 border border-amber-400/70" />
      <div className="absolute inset-[18px] border border-amber-400/30" />

      {/* corner chevrons for deco symmetry */}
      <svg
        className="absolute top-2 left-1/2 -translate-x-1/2 h-3 w-8"
        viewBox="0 0 32 12"
        fill="none"
      >
        <path d="M0 12 L16 0 L32 12" stroke="#fbbf24" strokeWidth="1.2" opacity="0.8" />
      </svg>
      <svg
        className="absolute bottom-2 left-1/2 -translate-x-1/2 h-3 w-8 rotate-180"
        viewBox="0 0 32 12"
        fill="none"
      >
        <path d="M0 12 L16 0 L32 12" stroke="#fbbf24" strokeWidth="1.2" opacity="0.8" />
      </svg>

      {/* sunburst */}
      <svg
        className="absolute h-40 w-40"
        viewBox="-100 -100 200 100"
        fill="none"
      >
        {RAY_ANGLES.map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 100 * Math.cos(rad);
          const y = -100 * Math.sin(rad);
          return (
            <line
              key={deg}
              x1={0}
              y1={0}
              x2={x}
              y2={y}
              stroke="#fbbf24"
              strokeWidth="1.5"
              opacity="0.55"
            />
          );
        })}
        <path
          d="M -70 0 A 70 70 0 0 1 70 0"
          stroke="#fbbf24"
          strokeWidth="2"
          opacity="0.9"
        />
      </svg>

      <div className="relative mt-6 text-center px-6">
        <p className="text-xl font-semibold tracking-[0.15em] text-amber-300">ART DECO</p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-amber-200/60">
          Gilded Symmetry
        </p>
      </div>
    </div>
  );
}

export default ArtDecoDemo;
