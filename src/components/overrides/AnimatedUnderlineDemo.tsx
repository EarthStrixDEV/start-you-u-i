/**
 * Animated underline demo — a text link whose underline is a scaleX(0)
 * pseudo-element that grows from left to right on hover, rather than a
 * plain `text-decoration` toggle.
 */
function AnimatedUnderlineDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-slate-50 flex flex-col items-center justify-center gap-3">
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="group relative text-2xl font-semibold text-slate-800 no-underline"
      >
        Hover this link
        <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-pink-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </a>
      <p className="text-sm text-slate-400">Underline sweeps in on hover</p>
    </div>
  );
}

export default AnimatedUnderlineDemo;
