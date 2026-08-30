import type { ComponentType } from "react";
import { categories } from "../data/categories";
import { styles } from "../data/styles";
import type { StyleConfig } from "../data/types";
import PreviewFrame from "../components/preview/PreviewFrame";
import StyleInfoPanel from "../components/preview/StyleInfoPanel";
import BentoGridDemo from "../components/overrides/BentoGridDemo";
import CardLayoutDemo from "../components/overrides/CardLayoutDemo";
import AsymmetricGridDemo from "../components/overrides/AsymmetricGridDemo";
import SplitScreenHeroDemo from "../components/overrides/SplitScreenHeroDemo";
import StickySidebarDemo from "../components/overrides/StickySidebarDemo";
import MasonryGridDemo from "../components/overrides/MasonryGridDemo";
import ZPatternDemo from "../components/overrides/ZPatternDemo";
import TimelineFeedDemo from "../components/overrides/TimelineFeedDemo";

const category = categories.find((c) => c.id === "layout-keywords")!;
const layoutStyles = styles.filter((s) => s.categoryId === "layout-keywords");

// Maps a layout-keywords style id to its bespoke demo component.
const demoRegistry: Record<string, ComponentType> = {
  "bento-grid": BentoGridDemo,
  "card-based-layout": CardLayoutDemo,
  "asymmetric-grid": AsymmetricGridDemo,
  "split-screen-hero": SplitScreenHeroDemo,
  "sticky-sidebar-nav": StickySidebarDemo,
  "masonry-grid": MasonryGridDemo,
  "z-pattern-layout": ZPatternDemo,
  "timeline-vertical-feed": TimelineFeedDemo,
};

function LayoutStyleCard({ style }: { style: StyleConfig }) {
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

function LayoutKeywordsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800">{category.label}</h1>
      <p className="mt-2 text-slate-500">{category.description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {layoutStyles.map((style) => (
          <LayoutStyleCard key={style.id} style={style} />
        ))}
      </div>
    </div>
  );
}

export default LayoutKeywordsPage;
