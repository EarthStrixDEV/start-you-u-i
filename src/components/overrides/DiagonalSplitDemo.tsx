/**
 * Diagonal split layout demo — two content blocks divided by an ANGLED
 * boundary (clip-path polygon on the second block) instead of a straight
 * vertical line, so it reads clearly differently from SplitScreenHeroDemo's
 * plain 50/50 flex split.
 */
function DiagonalSplitDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-xl min-h-[220px] w-full max-w-md mx-auto border border-slate-200">
      <div className="absolute inset-0 bg-slate-900 flex flex-col justify-center gap-2 p-5 pr-16">
        <span className="block h-2.5 w-3/5 rounded-full bg-white" />
        <span className="block h-2 w-2/5 rounded-full bg-slate-500" />
        <span className="mt-2 w-fit rounded-md bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-900">
          Get started
        </span>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400"
        style={{ clipPath: "polygon(62% 0, 100% 0, 100% 100%, 38% 100%)" }}
      />
    </div>
  );
}

export default DiagonalSplitDemo;
