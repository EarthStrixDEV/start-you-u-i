import type { StyleConfig } from "../../data/types";
import PreviewFrame from "./PreviewFrame";
import StyleInfoPanel from "./StyleInfoPanel";

interface StylePreviewCardProps {
  style: StyleConfig;
}

/**
 * Claymorphic container card rendering a live mini-UI demo for a
 * `demoKind: "generic"` style entry, plus its descriptive info panel.
 *
 * Contract: generic-only. Custom-kind entries get dedicated components in
 * T08 — this component renders nothing meaningful for them.
 */
function StylePreviewCard({ style }: StylePreviewCardProps) {
  if (style.demoKind !== "generic" || !style.demo) {
    if (import.meta.env.DEV) {
      console.warn(
        `StylePreviewCard: "${style.id}" is not a generic-demo style; this component only renders generic demos.`,
      );
    }
    return null;
  }

  const { containerClass, accentClass, label, textClass, bgClass } =
    style.demo;

  return (
    <div className="app-card rounded-2xl p-6 shadow-clay flex flex-col gap-4">
      <PreviewFrame bgClass={bgClass}>
        <div className={containerClass}>
          <p className={`mb-4 text-sm font-medium ${textClass ?? ""}`}>
            {style.name}
          </p>
          <span
            className={
              accentClass ?? "bg-slate-800 text-white px-4 py-2 rounded-md"
            }
          >
            {label ?? "Preview"}
          </span>
        </div>
      </PreviewFrame>
      <StyleInfoPanel style={style} />
    </div>
  );
}

export default StylePreviewCard;
