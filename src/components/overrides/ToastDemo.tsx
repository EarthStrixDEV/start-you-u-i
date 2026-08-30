import { useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const AUTO_DISMISS_MS = 3000;

/**
 * Toast demo — HARD CONSTRAINT: fake-in-card containment. Renders
 * `absolute bottom-3 right-3` within its own root (placed inside
 * PreviewFrame's `relative isolate overflow-hidden` container by
 * ComponentPage), never fixed to the viewport.
 *
 * useState + useEffect + setTimeout for auto-dismiss, timeout is cleared
 * on unmount and whenever a new toast is triggered before the old one fires.
 */
function ToastDemo() {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function triggerToast() {
    setVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      timeoutRef.current = null;
    }, AUTO_DISMISS_MS);
  }

  function dismissNow() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setVisible(false);
  }

  return (
    <div className="relative flex h-full w-full self-stretch items-center justify-center">
      <button
        type="button"
        onClick={triggerToast}
        className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        Save changes
      </button>

      {visible && (
        <div
          role="status"
          aria-live="polite"
          className="absolute bottom-3 right-3 z-10 flex max-w-[85%] items-start gap-2.5 rounded-xl bg-slate-900 px-4 py-3 text-white shadow-2xl animate-[toast-in_0.2s_ease-out]"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
          <p className="text-sm font-medium leading-snug">Changes saved successfully.</p>
          <button
            type="button"
            onClick={dismissNow}
            aria-label="Dismiss notification"
            className="ml-1 shrink-0 rounded-md p-0.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ToastDemo;
