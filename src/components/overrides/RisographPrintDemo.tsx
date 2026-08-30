/**
 * Risograph print demo — 2-3 flat spot-color layers (pink, teal, yellow)
 * with a slight deliberate translate offset between layers to fake
 * misregistration, plus an SVG feTurbulence grain overlay (unique filter
 * id `noise-riso`, reusing the GrainyGradientDemo technique). Indie zine
 * poster feel.
 */
function RisographPrintDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-[#f5f1e8] flex items-center justify-center">
      <svg className="absolute inset-0 h-0 w-0">
        <filter id="noise-riso">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* misregistered flat-color shapes */}
      <div className="absolute h-24 w-24 rounded-full bg-[#ff6f91] mix-blend-multiply opacity-80 translate-x-[-38px] translate-y-[-18px]" />
      <div className="absolute h-28 w-20 rounded-md bg-[#00a89d] mix-blend-multiply opacity-80 translate-x-[30px] translate-y-[-30px] rotate-6" />
      <div className="absolute h-20 w-32 rounded-md bg-[#ffcf3f] mix-blend-multiply opacity-75 translate-x-[6px] translate-y-[44px]" />

      {/* grain overlay */}
      <div
        className="absolute inset-0"
        style={{ filter: "url(#noise-riso)", opacity: 0.18 }}
      />

      <div className="relative text-center px-6">
        <p className="text-xl font-black uppercase tracking-tight text-[#1a1a1a]">
          Riso Print
        </p>
        <p className="mt-1 text-sm text-[#1a1a1a]/60">Grainy, slightly off-register</p>
      </div>
    </div>
  );
}

export default RisographPrintDemo;
