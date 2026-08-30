import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const ITEMS = [
  { id: "shipping", question: "How long does shipping take?", answer: "Standard shipping arrives in 3-5 business days. Express options are available at checkout for 1-2 day delivery." },
  { id: "returns", question: "What is your return policy?", answer: "Items can be returned within 30 days of delivery for a full refund, provided they're unused and in original packaging." },
  { id: "support", question: "How do I contact support?", answer: "Reach the support team via the chat widget in the bottom corner, or email support at any hour — average response time is under 2 hours." },
];

/**
 * Accordion demo — single-open-at-a-time. Native <button> gives Enter/Space
 * toggling for free; aria-expanded + aria-controls wired via useId().
 */
function AccordionDemo() {
  const [openId, setOpenId] = useState<string | null>("shipping");
  const baseId = useId();

  return (
    <div className="w-full max-w-sm divide-y divide-slate-200 rounded-xl bg-white shadow-sm">
      {ITEMS.map((item) => {
        const expanded = openId === item.id;
        return (
          <div key={item.id}>
            <h3 className="m-0">
              <button
                type="button"
                id={`${baseId}-header-${item.id}`}
                aria-expanded={expanded}
                aria-controls={`${baseId}-panel-${item.id}`}
                onClick={() => setOpenId(expanded ? null : item.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-inset"
              >
                {item.question}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`${baseId}-panel-${item.id}`}
              role="region"
              aria-labelledby={`${baseId}-header-${item.id}`}
              hidden={!expanded}
              className="px-4 pb-3 text-sm leading-relaxed text-slate-500"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AccordionDemo;
