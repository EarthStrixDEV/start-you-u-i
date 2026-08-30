/**
 * Modular scale grid demo — demonstrates a typographic modular scale
 * (~1.25x ratio: 12 / 15 / 18.75 / 23.4 / 29.3px) as a stacked mini
 * heading-hierarchy mockup, spacing between rows also derived from the
 * same ratio. This is about typographic/spacing RATIO, not grid
 * arrangement — structurally distinct from AsymmetricGridDemo /
 * MasonryGridDemo which arrange multiple tiled blocks.
 */
const SCALE_STEPS = [
  { size: "29.3px", label: "Heading", weight: "font-bold", gap: "mb-3" },
  { size: "23.4px", label: "Subheading", weight: "font-semibold", gap: "mb-2.5" },
  { size: "18.75px", label: "Section title", weight: "font-medium", gap: "mb-2" },
  { size: "15px", label: "Body emphasis", weight: "font-normal", gap: "mb-1.5" },
  { size: "12px", label: "Caption text", weight: "font-normal", gap: "" },
];

function ModularScaleDemo() {
  return (
    <div className="w-full max-w-md mx-auto rounded-xl bg-white border border-slate-200 p-6">
      {SCALE_STEPS.map((step) => (
        <div
          key={step.label}
          className={`flex items-baseline justify-between ${step.gap}`}
        >
          <span
            className={`text-slate-800 ${step.weight}`}
            style={{ fontSize: step.size, lineHeight: 1.2 }}
          >
            {step.label}
          </span>
          <span className="font-mono text-[9px] text-slate-400">{step.size}</span>
        </div>
      ))}
      <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-slate-400">
        1.25× ratio rhythm
      </p>
    </div>
  );
}

export default ModularScaleDemo;
