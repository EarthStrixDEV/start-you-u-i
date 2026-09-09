import type { ComponentType } from "react";
import { categories } from "../data/categories";
import { styles } from "../data/styles";
import StylePreviewCard from "../components/preview/StylePreviewCard";
import StyleInfoPanel from "../components/preview/StyleInfoPanel";
import PixelArtDemo from "../components/overrides/PixelArtDemo";
import Windows95Demo from "../components/overrides/Windows95Demo";
import TerminalDosDemo from "../components/overrides/TerminalDosDemo";
import CassetteFuturismDemo from "../components/overrides/CassetteFuturismDemo";
import ArtDecoDemo from "../components/overrides/ArtDecoDemo";
import RisographPrintDemo from "../components/overrides/RisographPrintDemo";

const category = categories.find((c) => c.id === "retro")!;
const retroStyles = styles.filter((s) => s.categoryId === "retro");

// Maps a retro style id to its bespoke demo component.
const demoRegistry: Record<string, ComponentType> = {
  "pixel-art-8bit": PixelArtDemo,
  "windows95-web1": Windows95Demo,
  "terminal-dos-aesthetic": TerminalDosDemo,
  "cassette-futurism": CassetteFuturismDemo,
  "art-deco": ArtDecoDemo,
  "risograph-print": RisographPrintDemo,
};

function RetroPage() {
  return (
    <div>
      <h1 className="app-page-title text-2xl font-semibold">{category.label}</h1>
      <p className="app-page-description mt-2">{category.description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {retroStyles.map((style) => {
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

export default RetroPage;
