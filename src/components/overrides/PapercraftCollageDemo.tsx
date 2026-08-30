/**
 * Papercraft / collage demo — 4 layered "cut paper" rectangles in pastel
 * colors, each rotated a different amount and overlapped with negative
 * margins/z-index for stacked-paper depth. One layer uses an irregular
 * clip-path to read as an actual torn edge, not a plain rectangle.
 */
function PapercraftCollageDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-stone-100 flex items-center justify-center">
      <div className="relative h-36 w-56">
        <div className="absolute left-0 top-2 h-24 w-36 rotate-[-6deg] rounded-sm bg-sky-200 shadow-md" />
        <div
          className="absolute left-10 top-0 z-10 h-28 w-32 rotate-[4deg] bg-rose-200 shadow-md"
          style={{
            clipPath:
              "polygon(0% 4%, 10% 0%, 22% 5%, 35% 1%, 48% 6%, 60% 0%, 74% 4%, 88% 1%, 100% 6%, 100% 100%, 0% 100%)",
          }}
        />
        <div className="absolute left-24 top-6 z-20 h-20 w-28 rotate-[-2deg] rounded-sm bg-amber-200 shadow-md" />
        <div className="absolute left-14 top-16 z-30 h-14 w-24 rotate-[3deg] rounded-sm bg-emerald-200 shadow-md flex items-center justify-center">
          <span className="text-[10px] font-semibold text-emerald-900">Collage</span>
        </div>
      </div>
    </div>
  );
}

export default PapercraftCollageDemo;
