/**
 * Picnic pastel gingham demo — a two-angle repeating-linear-gradient
 * checkerboard in pastel red/white forming the classic gingham pattern,
 * with a rounded white card floating on top.
 *
 * Simplification note: a true scalloped card edge (wavy border) needs a
 * repeating-radial-gradient mask or SVG wave path which added meaningful
 * complexity for a small preview card; a plain rounded white card is used
 * instead per the task's stated fallback ("simple gingham pattern alone is
 * acceptable"). The gingham background pattern itself is the primary tell
 * and is fully implemented.
 */
function PicnicGinghamDemo() {
  return (
    <div
      className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full flex items-center justify-center p-6"
      style={{
        backgroundColor: "#fff5f2",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(239,113,113,0.35) 0px, rgba(239,113,113,0.35) 20px, transparent 20px, transparent 40px), repeating-linear-gradient(90deg, rgba(239,113,113,0.35) 0px, rgba(239,113,113,0.35) 20px, transparent 20px, transparent 40px)",
      }}
    >
      <div className="rounded-xl bg-white/90 border border-red-200 shadow-md px-6 py-4 text-center">
        <p className="text-lg font-semibold text-red-500">Picnic Time</p>
        <p className="mt-1 text-xs text-red-400/80">Pastel gingham &amp; sunshine</p>
      </div>
    </div>
  );
}

export default PicnicGinghamDemo;
