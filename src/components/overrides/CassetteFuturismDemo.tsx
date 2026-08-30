/**
 * Cassette futurism demo — beige/orange analog hardware panel with three
 * 3D "knobs" (radial-gradient + inset shadow, each with a notch indicator)
 * and a dark inset LED-segment-style monospace readout.
 */
function Knob({ rotate }: { rotate: string }) {
  return (
    <div
      className="relative h-9 w-9 rounded-full"
      style={{
        backgroundImage:
          "radial-gradient(circle at 35% 30%, #fef3c7 0%, #d97706 55%, #92400e 100%)",
        boxShadow:
          "inset 0 -2px 3px rgba(0,0,0,0.5), inset 0 2px 2px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.4)",
      }}
    >
      <span
        className="absolute left-1/2 top-1 h-2.5 w-[3px] -translate-x-1/2 rounded-full bg-black/70"
        style={{ transform: `translateX(-50%) rotate(${rotate})`, transformOrigin: "50% 16px" }}
      />
    </div>
  );
}

function CassetteFuturismDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-gradient-to-br from-amber-100 via-orange-200 to-amber-300 border border-amber-400 flex flex-col items-center justify-center gap-4 p-5">
      <div className="flex items-center gap-4">
        <Knob rotate="-20deg" />
        <Knob rotate="10deg" />
        <Knob rotate="35deg" />
      </div>
      <div
        className="rounded-sm border border-amber-900/40 bg-neutral-900 px-4 py-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        <span
          className="text-lg font-bold tracking-widest text-orange-400"
          style={{ textShadow: "0 0 6px rgba(251,146,60,0.8)" }}
        >
          88:14
        </span>
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-900/70">
        Rec &middot; Deck A
      </p>
    </div>
  );
}

export default CassetteFuturismDemo;
