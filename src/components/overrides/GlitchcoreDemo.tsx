/**
 * Glitchcore demo — bold text rendered as a stack of offset, channel-split
 * copies. Clean/aligned at rest, splits apart and jitters on hover.
 */
function GlitchcoreDemo() {
  return (
    <div className="group relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-black flex items-center justify-center crt-scanlines">
      <div className="relative">
        <span
          aria-hidden
          className="absolute inset-0 font-black text-5xl tracking-tight text-cyan-400 opacity-0 mix-blend-screen transition-all duration-150 group-hover:opacity-80 group-hover:-translate-x-1.5 group-hover:animate-[glitch-jitter_0.3s_infinite]"
        >
          GLITCH
        </span>
        <span
          aria-hidden
          className="absolute inset-0 font-black text-5xl tracking-tight text-fuchsia-500 opacity-0 mix-blend-screen transition-all duration-150 group-hover:opacity-80 group-hover:translate-x-1.5 group-hover:animate-[glitch-jitter_0.3s_infinite]"
        >
          GLITCH
        </span>
        <span className="relative font-black text-5xl tracking-tight text-white transition-transform duration-150 group-hover:animate-[glitch-jitter_0.3s_infinite]">
          GLITCH
        </span>
      </div>
    </div>
  );
}

export default GlitchcoreDemo;
