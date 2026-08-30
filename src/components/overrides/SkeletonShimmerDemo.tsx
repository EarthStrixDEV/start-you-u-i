/**
 * Skeleton loading shimmer demo — static gray placeholder blocks with a
 * diagonal light band sweeping across via the `.shimmer-surface` /
 * `shimmer-sweep` keyframe defined in index.css. Runs continuously to
 * represent a loading state, no interaction needed.
 */
function SkeletonShimmerDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-white flex items-center justify-center p-6">
      <div className="flex w-full max-w-xs items-center gap-4">
        <div className="relative isolate h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-200">
          <div className="shimmer-surface absolute inset-0" />
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          <div className="relative isolate h-3.5 w-3/4 overflow-hidden rounded-full bg-slate-200">
            <div className="shimmer-surface absolute inset-0" />
          </div>
          <div className="relative isolate h-3.5 w-1/2 overflow-hidden rounded-full bg-slate-200">
            <div className="shimmer-surface absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonShimmerDemo;
