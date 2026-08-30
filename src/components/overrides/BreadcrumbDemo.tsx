import { useState } from "react";
import { ChevronRight } from "lucide-react";

const PATHS: Record<string, { label: string; children?: string[] }> = {
  root: { label: "Dashboard", children: ["projects"] },
  projects: { label: "Projects", children: ["startyou"] },
  startyou: { label: "StartYou UI", children: ["settings"] },
  settings: { label: "Settings" },
};

const CHAIN = ["root", "projects", "startyou", "settings"];

/**
 * Breadcrumb demo — real <nav>/<ol> semantics, aria-current="page" on the
 * final crumb. Clicking a non-final crumb "navigates" (truncates the chain)
 * to demonstrate real interactivity, not just static markup.
 */
function BreadcrumbDemo() {
  const [depth, setDepth] = useState(CHAIN.length);
  const visible = CHAIN.slice(0, depth);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {visible.map((key, index) => {
            const isLast = index === visible.length - 1;
            return (
              <li key={key} className="flex items-center gap-1">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-slate-800">
                    {PATHS[key].label}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setDepth(index + 1)}
                    className="rounded px-1 text-slate-500 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  >
                    {PATHS[key].label}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      {depth < CHAIN.length && (
        <button
          type="button"
          onClick={() => setDepth(CHAIN.length)}
          className="w-fit rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Reset to full path
        </button>
      )}
    </div>
  );
}

export default BreadcrumbDemo;
