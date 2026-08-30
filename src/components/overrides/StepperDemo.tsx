import { useState } from "react";
import { Check } from "lucide-react";

const STEPS = ["Account", "Profile", "Payment", "Confirm"];

/**
 * Stepper demo — real Next/Back <button>s, aria-current="step" on the
 * active step, a visually-hidden live region announces progress for
 * screen-reader users on every change.
 */
function StepperDemo() {
  const [step, setStep] = useState(0);
  const isLast = step === STEPS.length - 1;

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <ol className="flex w-full items-center">
        {STEPS.map((label, index) => {
          const completed = index < step;
          const current = index === step;
          return (
            <li key={label} className="flex flex-1 items-center last:flex-initial">
              <div className="flex flex-col items-center gap-1.5">
                <span
                  aria-current={current ? "step" : undefined}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                    completed
                      ? "bg-indigo-600 text-white"
                      : current
                        ? "bg-indigo-100 text-indigo-700 ring-2 ring-indigo-600"
                        : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {completed ? <Check className="h-4 w-4" aria-hidden="true" /> : index + 1}
                </span>
                <span className={`text-[11px] font-medium ${current ? "text-slate-800" : "text-slate-400"}`}>
                  {label}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <div className={`mx-2 h-0.5 flex-1 rounded ${completed ? "bg-indigo-600" : "bg-slate-200"}`} />
              )}
            </li>
          );
        })}
      </ol>

      <p role="status" aria-live="polite" className="sr-only">
        Step {step + 1} of {STEPS.length}: {STEPS[step]}
      </p>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
          disabled={isLast}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          {isLast ? "Done" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default StepperDemo;
