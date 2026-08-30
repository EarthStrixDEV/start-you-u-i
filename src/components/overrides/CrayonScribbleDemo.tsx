/**
 * Crayon / scribble demo — a solid-filled wonky star (same hand-drawn-path
 * technique as DoodleDemo, but filled rather than outline-only), roughened
 * with an SVG feTurbulence + feDisplacementMap filter for a waxy, uneven
 * crayon-edge look.
 */
function CrayonScribbleDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-yellow-50 flex flex-col items-center justify-center gap-3">
      <svg width="140" height="130" viewBox="0 0 140 130">
        <filter id="crayon-rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" result="noise" seed="7" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <path
          d="M70 10 C76 32 78 40 96 44 C110 47 118 50 102 58 C88 65 80 68 84 86 C87 100 90 110 74 100 C62 93 58 92 46 102 C36 110 32 114 32 98 C32 82 30 76 14 68 C2 62 -2 58 16 52 C34 46 42 42 44 24 C46 10 48 2 58 12 C62 16 66 14 70 10 Z"
          fill="#f97316"
          stroke="#c2410c"
          strokeWidth="3"
          filter="url(#crayon-rough)"
        />
      </svg>
      <p className="text-sm font-medium text-orange-900">Waxy &amp; hand-colored</p>
    </div>
  );
}

export default CrayonScribbleDemo;
