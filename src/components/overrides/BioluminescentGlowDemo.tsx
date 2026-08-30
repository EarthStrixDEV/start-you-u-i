/**
 * Bioluminescent glow demo — near-black background with irregularly
 * positioned soft teal/emerald blurred glow blooms (same blurred-blob
 * technique as AuroraMeshDemo, but a teal/emerald deep-sea palette and
 * asymmetric organic placement rather than an even premium mesh spread).
 */
function BioluminescentGlowDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-[#040d0c] flex items-center justify-center">
      <div className="absolute -bottom-10 left-6 h-36 w-28 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] bg-emerald-400 blur-2xl opacity-50" />
      <div className="absolute top-2 right-10 h-20 w-20 rounded-[45%_55%_60%_40%/55%_45%_60%_40%] bg-teal-300 blur-2xl opacity-40" />
      <div className="absolute bottom-8 right-[-1.5rem] h-24 w-32 rounded-[55%_45%_40%_60%/40%_55%_45%_60%] bg-cyan-400 blur-3xl opacity-30" />
      <div className="absolute top-1/3 left-1/4 h-3 w-3 rounded-full bg-emerald-200 blur-[2px] opacity-80" />
      <div className="absolute top-10 left-1/2 h-2 w-2 rounded-full bg-teal-200 blur-[1px] opacity-70" />

      <div className="relative text-center px-6">
        <p className="text-xl font-semibold text-emerald-200">Bioluminescent</p>
        <p className="mt-1 text-sm text-teal-300/60">Deep-sea organic glow</p>
      </div>
    </div>
  );
}

export default BioluminescentGlowDemo;
