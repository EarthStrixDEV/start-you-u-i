/**
 * Doodle / hand-drawn demo — inline SVG with wobbly, asymmetric bezier paths
 * (a lopsided star, a squiggly underline, a sketchy arrow), styled as loose
 * currentColor strokes rather than perfect geometry.
 */
function DoodleDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-amber-50 flex flex-col items-center justify-center gap-4 text-amber-800">
      <svg
        width="160"
        height="120"
        viewBox="0 0 160 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* wonky star */}
        <path d="M46 14 C49 26 51 33 58 38 C67 42 74 40 71 45 C66 51 60 52 62 60 C64 68 67 72 59 69 C51 66 47 65 41 71 C36 76 35 80 34 71 C33 63 33 59 25 56 C17 53 12 53 20 48 C29 43 33 41 33 32 C33 24 34 17 40 22 C43 24 44 19 46 14 Z" />
        {/* squiggly underline */}
        <path d="M14 92 C24 86 30 98 40 91 C50 84 56 97 66 90 C76 83 82 95 92 89 C102 83 108 94 118 88" />
        {/* sketchy arrow */}
        <path d="M92 30 C104 26 114 24 128 27" />
        <path d="M116 19 C122 22 127 25 129 28 C126 32 120 34 113 37" />
      </svg>
      <p className="text-sm font-medium">Hand-drawn &amp; imperfect</p>
    </div>
  );
}

export default DoodleDemo;
