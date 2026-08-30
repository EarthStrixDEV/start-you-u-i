import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ChevronDown, Check } from "lucide-react";

const OPTIONS = ["Newest first", "Oldest first", "Most popular", "Alphabetical"];

/**
 * Dropdown demo — HARD CONSTRAINT: fake-in-card containment, no portals,
 * no floating-UI collision detection. Hardcoded safe anchor position that
 * opens downward and stays within the card (this is a demo, not production).
 *
 * Menu-button pattern: role="listbox"/"option" list, Enter/Space/ArrowDown
 * opens, ArrowUp/ArrowDown moves between options while open, Escape closes
 * and returns focus to the trigger.
 */
function DropdownDemo() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [activeOption, setActiveOption] = useState(0);
  const listId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      setActiveOption(selected);
    }
  }, [open, selected]);

  useEffect(() => {
    if (open) {
      optionRefs.current[activeOption]?.scrollIntoView({ block: "nearest" });
    }
  }, [open, activeOption]);

  function closeAndReturnFocus() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function chooseOption(index: number) {
    setSelected(index);
    closeAndReturnFocus();
  }

  function handleTriggerKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
    }
  }

  function handleListKeyDown(e: KeyboardEvent<HTMLUListElement>) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveOption((i) => (i + 1) % OPTIONS.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveOption((i) => (i - 1 + OPTIONS.length) % OPTIONS.length);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        chooseOption(activeOption);
        break;
      case "Escape":
        e.preventDefault();
        closeAndReturnFocus();
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div className="relative flex h-full w-full self-stretch items-start justify-center pt-2">
      <div className="relative w-56">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          onKeyDown={handleTriggerKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          <span>{OPTIONS[selected]}</span>
          <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>

        {open && (
          <ul
            id={listId}
            role="listbox"
            aria-label="Sort order"
            tabIndex={-1}
            onKeyDown={handleListKeyDown}
            ref={(el) => {
              if (el) el.focus();
            }}
            className="absolute left-0 right-0 top-full z-10 mt-1.5 max-h-48 overflow-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg focus-visible:outline-none"
          >
            {OPTIONS.map((option, index) => {
              const isSelected = index === selected;
              const isActive = index === activeOption;
              return (
                <li
                  key={option}
                  ref={(el) => {
                    optionRefs.current[index] = el;
                  }}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => chooseOption(index)}
                  onMouseEnter={() => setActiveOption(index)}
                  className={`flex cursor-pointer items-center justify-between gap-2 px-3.5 py-2 text-sm ${
                    isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600"
                  }`}
                >
                  {option}
                  {isSelected && <Check className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropdownDemo;
