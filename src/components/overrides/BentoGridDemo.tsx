/**
 * Bento grid mini-layout demo — an asymmetric grid of varied-size tiles
 * (like a Japanese lunchbox), the signature "some cards span more space
 * than others but everything still tiles cleanly" look.
 */
function BentoGridDemo() {
  return (
    <div className="w-full max-w-md mx-auto grid grid-cols-4 auto-rows-[36px] gap-2">
      <div className="col-span-2 row-span-2 rounded-xl bg-violet-200 p-2 flex items-end">
        <span className="text-[10px] font-medium text-violet-900">Featured</span>
      </div>
      <div className="col-span-1 row-span-1 rounded-xl bg-amber-200 p-2" />
      <div className="col-span-1 row-span-1 rounded-xl bg-rose-200 p-2" />
      <div className="col-span-1 row-span-2 rounded-xl bg-teal-200 p-2 flex items-end">
        <span className="text-[10px] font-medium text-teal-900">Tall</span>
      </div>
      <div className="col-span-1 row-span-1 rounded-xl bg-sky-200 p-2" />
      <div className="col-span-3 row-span-1 rounded-xl bg-lime-200 p-2 flex items-center">
        <span className="text-[10px] font-medium text-lime-900">Wide banner</span>
      </div>
    </div>
  );
}

export default BentoGridDemo;
