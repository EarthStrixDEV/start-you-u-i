import type { ComponentType } from "react";
import { categories } from "../data/categories";
import { styles } from "../data/styles";
import StylePreviewCard from "../components/preview/StylePreviewCard";
import StyleInfoPanel from "../components/preview/StyleInfoPanel";
import DoodleDemo from "../components/overrides/DoodleDemo";
import IsometricDemo from "../components/overrides/IsometricDemo";
import PapercraftCollageDemo from "../components/overrides/PapercraftCollageDemo";
import CrayonScribbleDemo from "../components/overrides/CrayonScribbleDemo";
import FeltPlushToyDemo from "../components/overrides/FeltPlushToyDemo";
import PicnicGinghamDemo from "../components/overrides/PicnicGinghamDemo";

const category = categories.find((c) => c.id === "playful-organic")!;
const playfulOrganicStyles = styles.filter((s) => s.categoryId === "playful-organic");

// Maps a playful-organic style id to its bespoke demo component.
const demoRegistry: Record<string, ComponentType> = {
  "doodle-hand-drawn": DoodleDemo,
  "isometric-3d": IsometricDemo,
  "papercraft-collage": PapercraftCollageDemo,
  "crayon-scribble": CrayonScribbleDemo,
  "felt-plush-toy": FeltPlushToyDemo,
  "picnic-pastel-gingham": PicnicGinghamDemo,
};

function PlayfulOrganicPage() {
  return (
    <div>
      <h1 className="app-page-title text-2xl font-semibold">{category.label}</h1>
      <p className="app-page-description mt-2">{category.description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {playfulOrganicStyles.map((style) => {
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

export default PlayfulOrganicPage;
