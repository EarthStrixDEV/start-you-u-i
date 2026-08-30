import { Search, FileText, Settings, ArrowRight } from "lucide-react";

/**
 * Command palette first demo — a centered floating search-input mockup
 * with a search icon, a ⌘K kbd-styled badge, and a few mock fuzzy-matched
 * result rows below. Static/presentational preview, dark power-user chrome.
 */
const RESULTS = [
  { icon: FileText, label: "Create new document", match: "new" },
  { icon: Settings, label: "Open settings", match: "sett" },
  { icon: ArrowRight, label: "Go to dashboard", match: "dash" },
];

function CommandPaletteDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-neutral-950 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 border-b border-neutral-800 px-3 py-2.5">
          <Search className="h-4 w-4 text-neutral-500" />
          <span className="flex-1 text-sm text-neutral-400">Type a command…</span>
          <kbd className="rounded border border-neutral-700 bg-neutral-800 px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
            ⌘K
          </kbd>
        </div>
        <div className="py-1">
          {RESULTS.map(({ icon: Icon, label, match }) => {
            const idx = label.toLowerCase().indexOf(match);
            return (
              <div
                key={label}
                className="flex items-center gap-2.5 px-3 py-2 text-sm text-neutral-300 first:bg-neutral-800/70"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-neutral-500" />
                <span>
                  {label.slice(0, idx)}
                  <span className="text-violet-400 font-semibold">
                    {label.slice(idx, idx + match.length)}
                  </span>
                  {label.slice(idx + match.length)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CommandPaletteDemo;
