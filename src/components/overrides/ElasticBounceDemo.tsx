/**
 * Elastic bounce demo — hovering the badge re-triggers the `elastic-pop`
 * keyframe (overshoot-then-settle scale sequence), giving a springy squash
 * feel distinct from a plain linear `hover:scale-*` transition.
 */
function ElasticBounceDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-50 flex flex-col items-center justify-center gap-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-pink-400 text-2xl shadow-lg transition-transform hover:animate-[elastic-pop_0.55s_ease-in-out]">
        🎯
      </div>
      <p className="text-sm text-slate-400">Hover for a springy bounce</p>
    </div>
  );
}

export default ElasticBounceDemo;
