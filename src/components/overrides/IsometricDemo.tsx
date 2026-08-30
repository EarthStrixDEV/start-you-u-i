/**
 * 3D isometric demo — a small stack of three shaded "faces" composed with
 * CSS transforms to fake an isometric cube: top face lightest, left/right
 * side faces progressively darker to fake depth/lighting.
 */
function IsometricDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-100 flex items-center justify-center">
      <div
        className="relative w-24 h-24"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(30deg) rotateZ(45deg)" }}
      >
        {/* top face — lightest */}
        <div
          className="absolute inset-0 bg-teal-300"
          style={{ transform: "translateZ(48px)" }}
        />
        {/* right/front face — mid shade */}
        <div
          className="absolute inset-0 bg-teal-500 origin-right"
          style={{ transform: "rotateY(90deg) translateZ(48px)" }}
        />
        {/* left/side face — darkest */}
        <div
          className="absolute inset-0 bg-teal-700 origin-bottom"
          style={{ transform: "rotateX(-90deg) translateZ(48px)" }}
        />
      </div>
      <p className="absolute bottom-5 text-sm font-medium text-slate-500">
        Isometric block
      </p>
    </div>
  );
}

export default IsometricDemo;
