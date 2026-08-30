/**
 * Noir / film grain demo — high-contrast grayscale gradient with an SVG
 * feTurbulence grain overlay (same technique as GrainyGradientDemo, unique
 * filter id to avoid collision) and a strong single-direction vignette
 * shadow for dramatic lighting.
 */
function NoirFilmGrainDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-gradient-to-br from-neutral-950 via-neutral-800 to-neutral-950 flex items-center justify-center">
      <svg className="absolute inset-0 h-0 w-0">
        <filter id="noise-noir">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="absolute inset-0"
        style={{ filter: "url(#noise-noir)", opacity: 0.15, mixBlendMode: "overlay" }}
      />
      {/* directional vignette — hard light from top-left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <div className="relative text-center px-6">
        <p className="text-2xl font-bold uppercase tracking-widest text-neutral-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Noir
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-neutral-400">
          Shadows &amp; grain
        </p>
      </div>
    </div>
  );
}

export default NoirFilmGrainDemo;
