import { Pin } from "lucide-react";

/**
 * Sticky sidebar nav mini demo — a narrow sidebar column beside a wider
 * content column. The `sticky top-0` class is applied for real (technically
 * correct), but a confined static preview can't demonstrate scroll-pinning
 * behavior, so a small "pinned" badge communicates the mechanism visually.
 */
function StickySidebarDemo() {
  const navItems = ["Overview", "Analytics", "Settings", "Team"];

  return (
    <div className="w-full max-w-md mx-auto flex h-40 gap-3">
      <div className="sticky top-0 w-1/3 self-start rounded-lg bg-slate-800 p-2 flex flex-col gap-1.5">
        <div className="mb-1 flex items-center gap-1 text-slate-300">
          <Pin className="h-3 w-3" />
          <span className="text-[9px] font-semibold uppercase tracking-wide">Pinned</span>
        </div>
        {navItems.map((item) => (
          <span
            key={item}
            className="block rounded px-2 py-1 text-[9px] font-medium text-slate-200 bg-slate-700/60"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="w-2/3 rounded-lg bg-slate-50 border border-slate-200 p-3 flex flex-col gap-2 overflow-hidden">
        <span className="block h-2 w-3/4 rounded-full bg-slate-300" />
        <span className="block h-2 w-full rounded-full bg-slate-200" />
        <span className="block h-2 w-5/6 rounded-full bg-slate-200" />
        <span className="mt-1 block h-10 w-full rounded-md bg-slate-200" />
      </div>
    </div>
  );
}

export default StickySidebarDemo;
