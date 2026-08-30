/**
 * Asymmetric grid mini demo — deliberately breaks 12-col symmetry. Unlike
 * the bento grid (organized, tiled, lunchbox-neat), this composition uses
 * an uneven 2/1 column split PLUS vertical offset margins so the blocks
 * feel intentionally off-kilter rather than aligned to a tidy system.
 */
function AsymmetricGridDemo() {
  return (
    <div className="w-full max-w-md mx-auto grid grid-cols-3 gap-3">
      <div className="col-span-2 rounded-lg bg-fuchsia-200 h-24 p-3 flex items-start">
        <span className="text-[10px] font-medium text-fuchsia-900">Wide block, 2/3</span>
      </div>
      <div className="col-span-1 rounded-lg bg-slate-800 h-16 mt-6 p-3 flex items-end">
        <span className="text-[10px] font-medium text-slate-100">Narrow</span>
      </div>
      <div className="col-span-1 rounded-lg bg-orange-200 h-14 mt-3 p-3" />
      <div className="col-span-2 rounded-lg bg-cyan-100 h-20 -mt-2 p-3 flex items-end">
        <span className="text-[10px] font-medium text-cyan-900">Overlapping rhythm, 2/3</span>
      </div>
    </div>
  );
}

export default AsymmetricGridDemo;
