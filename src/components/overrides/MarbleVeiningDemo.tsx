/**
 * Marble / stone veining demo — pale stone-gray gradient base with a few
 * irregular, wobbly SVG vein lines (similar wobbly-bezier technique to
 * DoodleDemo, but thin gray/white crack-like lines angled diagonally
 * instead of a colored doodle), low opacity, cold luxury mineral feel.
 */
function MarbleVeiningDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 flex items-center justify-center">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-10 30 C60 10 90 55 140 40 C190 25 210 70 260 60 C310 50 340 90 410 75"
          stroke="#57534e"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.28"
        />
        <path
          d="M-10 30 C60 10 90 55 140 40 C190 25 210 70 260 60 C310 50 340 90 410 75"
          stroke="#ffffff"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.5"
          transform="translate(1.5 1.5)"
        />
        <path
          d="M30 220 C70 170 60 140 110 120 C160 100 150 60 200 20"
          stroke="#78716c"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.22"
        />
        <path
          d="M180 -10 C210 40 260 45 280 90 C300 135 360 140 390 190"
          stroke="#57534e"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>

      <div className="relative text-center px-6">
        <p className="text-xl font-semibold text-stone-700">Marble Veining</p>
        <p className="mt-1 text-sm text-stone-500">Cold luxury, natural stone</p>
      </div>
    </div>
  );
}

export default MarbleVeiningDemo;
