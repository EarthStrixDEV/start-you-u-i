/**
 * Grainy gradient / noise demo — a soft gradient base with an inline SVG
 * fractal-noise filter overlaid at low opacity, avoiding the "flat dead
 * gradient" look.
 */
function GrainyGradientDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-gradient-to-br from-orange-200 to-rose-300 flex items-center justify-center">
      <svg className="absolute inset-0 h-0 w-0">
        <filter id="noise-grainy">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="absolute inset-0"
        style={{ filter: "url(#noise-grainy)", opacity: 0.08 }}
      />

      <div className="relative text-center px-6">
        <p className="text-xl font-semibold text-rose-950">Textured Gradient</p>
        <p className="mt-1 text-sm text-rose-900/70">Grain overlay, editorial feel</p>
      </div>
    </div>
  );
}

export default GrainyGradientDemo;
