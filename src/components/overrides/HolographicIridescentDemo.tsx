/**
 * Holographic / iridescent demo — a rounded surface painted with a multi-stop
 * rainbow gradient (foil-sticker prism effect), plus a diagonal white sheen
 * layer blended with `mix-blend-mode: overlay` to fake prismatic shimmer.
 * Hover shifts `background-position` on the base gradient for a light shift.
 */
function HolographicIridescentDemo() {
  return (
    <div className="group relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-neutral-900 flex items-center justify-center">
      <div
        className="absolute inset-4 rounded-2xl transition-[background-position] duration-700 ease-out [background-position:0%_center] group-hover:[background-position:100%_center]"
        style={{
          backgroundImage:
            "linear-gradient(110deg, #f9a8d4 0%, #c4b5fd 20%, #67e8f9 40%, #fef08a 60%, #f9a8d4 80%, #c4b5fd 100%)",
          backgroundSize: "220% auto",
        }}
      />
      <div
        className="absolute inset-4 rounded-2xl opacity-70"
        style={{
          mixBlendMode: "overlay",
          backgroundImage:
            "linear-gradient(115deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.8) 75%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div className="relative text-center px-6">
        <p className="text-xl font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          Holographic
        </p>
        <p className="mt-1 text-sm text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          Foil-sticker prism sheen
        </p>
      </div>
    </div>
  );
}

export default HolographicIridescentDemo;
