import type { ComponentType } from "react";
import { categories } from "../data/categories";
import { styles } from "../data/styles";
import StylePreviewCard from "../components/preview/StylePreviewCard";
import StyleInfoPanel from "../components/preview/StyleInfoPanel";
import AuroraMeshDemo from "../components/overrides/AuroraMeshDemo";
import GrainyGradientDemo from "../components/overrides/GrainyGradientDemo";
import ChromeTextDemo from "../components/overrides/ChromeTextDemo";
import HolographicIridescentDemo from "../components/overrides/HolographicIridescentDemo";
import MarbleVeiningDemo from "../components/overrides/MarbleVeiningDemo";

const category = categories.find((c) => c.id === "texture")!;
const textureStyles = styles.filter((s) => s.categoryId === "texture");

// Maps a texture style id to its bespoke demo component.
const demoRegistry: Record<string, ComponentType> = {
  "aurora-gradient-mesh": AuroraMeshDemo,
  "grainy-gradient-noise": GrainyGradientDemo,
  "chrome-liquid-metal": ChromeTextDemo,
  "holographic-iridescent": HolographicIridescentDemo,
  "marble-stone-veining": MarbleVeiningDemo,
};

function TexturePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800">{category.label}</h1>
      <p className="mt-2 text-slate-500">{category.description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {textureStyles.map((style) => {
          if (style.demoKind === "generic") {
            return <StylePreviewCard key={style.id} style={style} />;
          }

          const Demo = demoRegistry[style.id];
          if (!Demo) {
            return (
              <div
                key={style.id}
                className="rounded-[2rem] bg-white/50 shadow-clay-sm p-6 text-slate-400 text-sm dark:bg-slate-700/50"
              >
                {style.name} — custom demo coming soon
              </div>
            );
          }
          return (
            <div
              key={style.id}
              className="rounded-[2rem] bg-white/80 shadow-clay p-6 flex flex-col gap-4 dark:bg-slate-800/80"
            >
              <Demo />
              <StyleInfoPanel style={style} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TexturePage;
