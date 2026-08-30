import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

const TABS = [
  { id: "overview", label: "Overview", content: "A quick summary of the project status, key metrics, and what changed since the last review." },
  { id: "activity", label: "Activity", content: "A chronological feed of recent actions — commits, comments, and status changes from the team." },
  { id: "settings", label: "Settings", content: "Configuration for notifications, access control, and integrations tied to this workspace." },
];

/**
 * Tabs demo — real roving-tabindex keyboard navigation (Left/Right/Home/End)
 * between tab triggers, click to activate, full ARIA tablist/tab/tabpanel
 * wiring via useId().
 */
function TabsDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusTab(index: number) {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        focusTab((activeIndex + 1) % TABS.length);
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusTab((activeIndex - 1 + TABS.length) % TABS.length);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(TABS.length - 1);
        break;
    }
  }

  return (
    <div className="w-full max-w-sm">
      <div role="tablist" aria-label="Workspace sections" className="flex gap-1 rounded-xl bg-slate-200 p-1">
        {TABS.map((tab, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleKeyDown}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-200 ${
                selected ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {TABS.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={index !== activeIndex}
          tabIndex={0}
          className="mt-3 rounded-lg bg-white p-4 text-sm leading-relaxed text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

export default TabsDemo;
