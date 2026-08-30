/**
 * Terminal / DOS aesthetic demo — black background, monospace green text,
 * a mock prompt line, and a blinking block cursor driven by the `blink`
 * keyframes defined in index.css.
 */
function TerminalDosDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-none min-h-[220px] w-full bg-black flex flex-col justify-center gap-1.5 p-5 font-mono text-green-400">
      <p className="text-xs">Microsoft(R) MS-DOS(R) Version 6.22</p>
      <p className="text-xs">(C)Copyright Microsoft Corp 1981-1994.</p>
      <p className="mt-3 text-sm">
        C:\&gt; dir
      </p>
      <p className="text-xs text-green-500/80">STYLES  TXT      1,024 bytes</p>
      <p className="text-xs text-green-500/80">README  MD         512 bytes</p>
      <p className="mt-3 text-sm">
        C:\&gt;{" "}
        <span
          aria-hidden
          className="inline-block h-3.5 w-2 translate-y-0.5 bg-green-400 [animation:blink_1s_steps(1)_infinite]"
        />
      </p>
    </div>
  );
}

export default TerminalDosDemo;
