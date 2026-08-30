/**
 * Split-screen hero mini demo — roughly 50/50: copy + CTA on one side,
 * a solid/gradient visual block standing in for a product shot on the
 * other. Scaled-down flex row (not grid) since this is a small preview.
 */
function SplitScreenHeroDemo() {
  return (
    <div className="w-full max-w-md mx-auto flex h-40 rounded-xl overflow-hidden border border-slate-200">
      <div className="w-1/2 bg-white p-4 flex flex-col justify-center gap-2">
        <span className="block h-2.5 w-4/5 rounded-full bg-slate-800" />
        <span className="block h-2 w-3/5 rounded-full bg-slate-300" />
        <span className="mt-2 w-fit rounded-md bg-indigo-600 px-3 py-1.5 text-[10px] font-semibold text-white">
          Get started
        </span>
      </div>
      <div className="w-1/2 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400" />
    </div>
  );
}

export default SplitScreenHeroDemo;
