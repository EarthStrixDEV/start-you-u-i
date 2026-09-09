import type { ComponentType } from "react";
import { categories } from "../data/categories";
import { styles } from "../data/styles";
import type { StyleConfig } from "../data/types";
import PreviewFrame from "../components/preview/PreviewFrame";
import StyleInfoPanel from "../components/preview/StyleInfoPanel";
import ModalDemo from "../components/overrides/ModalDemo";
import DropdownDemo from "../components/overrides/DropdownDemo";
import TabsDemo from "../components/overrides/TabsDemo";
import AccordionDemo from "../components/overrides/AccordionDemo";
import ToastDemo from "../components/overrides/ToastDemo";
import TooltipDemo from "../components/overrides/TooltipDemo";
import PaginationDemo from "../components/overrides/PaginationDemo";
import BreadcrumbDemo from "../components/overrides/BreadcrumbDemo";
import StepperDemo from "../components/overrides/StepperDemo";

const category = categories.find((c) => c.id === "component")!;
const componentStyles = styles.filter((s) => s.categoryId === "component");

// Maps a component style id to its bespoke, genuinely interactive demo.
// Every entry in this category is demoKind: "custom" — no generic
// StylePreviewCard usage anywhere on this page.
const demoRegistry: Record<string, ComponentType> = {
  modal: ModalDemo,
  dropdown: DropdownDemo,
  tabs: TabsDemo,
  accordion: AccordionDemo,
  toast: ToastDemo,
  tooltip: TooltipDemo,
  pagination: PaginationDemo,
  breadcrumb: BreadcrumbDemo,
  stepper: StepperDemo,
};

function ComponentStyleCard({ style }: { style: StyleConfig }) {
  const Demo = demoRegistry[style.id];

  if (!Demo) {
    return (
      <div className="rounded-[2rem] bg-white/50 shadow-clay-sm p-6 text-slate-400 text-sm dark:bg-slate-700/50">
        {style.name} — custom demo coming soon
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] bg-white/80 shadow-clay p-6 flex flex-col gap-4 dark:bg-slate-800/80">
      <PreviewFrame>
        <Demo />
      </PreviewFrame>
      <StyleInfoPanel style={style} />
    </div>
  );
}

function ComponentPage() {
  return (
    <div>
      <h1 className="app-page-title text-2xl font-semibold">{category.label}</h1>
      <p className="app-page-description mt-2">{category.description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {componentStyles.map((style) => (
          <ComponentStyleCard key={style.id} style={style} />
        ))}
      </div>
    </div>
  );
}

export default ComponentPage;
