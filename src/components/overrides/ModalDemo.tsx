import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { X } from "lucide-react";

/**
 * Modal demo — HARD CONSTRAINT: fake-in-card containment, no portals.
 *
 * Rendered as `absolute inset-0` scoped WITHIN this component's own root,
 * which is placed inside PreviewFrame's `relative isolate overflow-hidden`
 * container by ComponentPage. Never `position: fixed` to the viewport,
 * never ReactDOM.createPortal to document.body — the overlay and dialog
 * panel are clipped to the card's own bounds.
 *
 * Focus management: on open, focus moves to the dialog heading/close
 * button; Escape closes and returns focus to the trigger button via ref.
 */
function ModalDemo() {
  const [open, setOpen] = useState(false);
  const headingId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    }
  }, [open]);

  function handleClose() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      e.stopPropagation();
      handleClose();
    }
  }

  return (
    <div className="relative flex h-full w-full self-stretch items-center justify-center">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        Open Modal
      </button>

      {open && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/50 p-4"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xs rounded-2xl bg-white p-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 id={headingId} className="text-base font-semibold text-slate-900">
                Confirm action
              </h3>
              <button
                ref={closeRef}
                type="button"
                onClick={handleClose}
                aria-label="Close dialog"
                className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              This will permanently remove the item. Escape or backdrop click also closes this dialog.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalDemo;
