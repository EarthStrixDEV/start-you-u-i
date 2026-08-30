/**
 * Deep space demo — near-black background, a scattered starfield built from
 * inline SVG circles (convincing random-dot look without dozens of divs),
 * plus two soft blurred indigo/violet nebula blobs for ambient glow.
 */
const STARS = [
  [12, 18, 1.2], [34, 8, 0.8], [58, 22, 1], [76, 12, 0.6], [91, 30, 1.3],
  [6, 45, 0.7], [22, 55, 1.1], [45, 40, 0.6], [64, 48, 1.4], [83, 58, 0.8],
  [15, 72, 0.9], [38, 82, 1.2], [52, 68, 0.7], [70, 78, 1], [88, 85, 0.9],
  [4, 90, 0.6], [96, 10, 0.7], [27, 30, 0.5], [80, 40, 0.5], [60, 90, 0.8],
];

function DeepSpaceDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-neutral-950 flex items-center justify-center">
      <div className="absolute -top-8 -left-6 h-40 w-40 rounded-full bg-indigo-600 blur-3xl opacity-40" />
      <div className="absolute bottom-[-3rem] right-[-2rem] h-44 w-44 rounded-full bg-violet-700 blur-3xl opacity-40" />

      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {STARS.map(([x, y, r], i) => (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={r}
            fill="white"
            opacity={0.5 + (i % 3) * 0.15}
          />
        ))}
      </svg>

      <div className="relative text-center px-6">
        <p className="text-xl font-semibold text-white">Deep Space</p>
        <p className="mt-1 text-sm text-indigo-200/70">Starfield &amp; distant nebula</p>
      </div>
    </div>
  );
}

export default DeepSpaceDemo;
