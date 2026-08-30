/**
 * Aurora / gradient mesh demo — several blurred pastel blobs layered behind
 * centered content on a light base, the "premium ambient glow" look.
 */
function AuroraMeshDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-50 flex items-center justify-center">
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-purple-400 blur-3xl opacity-60 -z-10" />
      <div className="absolute top-6 right-0 h-32 w-48 rounded-full bg-teal-300 blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-[-3rem] left-1/3 h-36 w-36 rounded-full bg-pink-400 blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 right-1/4 h-24 w-24 rounded-full bg-indigo-300 blur-3xl opacity-50 -z-10" />

      <div className="relative text-center px-6">
        <p className="text-xl font-semibold text-slate-800">Aurora Mesh</p>
        <p className="mt-1 text-sm text-slate-500">Ambient, soft-glow background</p>
      </div>
    </div>
  );
}

export default AuroraMeshDemo;
