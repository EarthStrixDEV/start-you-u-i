import type { StyleConfig } from "../../data/types";
import CopyBox from "../shared/CopyBox";

interface StyleInfoPanelProps {
  style: Pick<StyleConfig, "name" | "feel" | "cssTell" | "promptText">;
}

/**
 * Chrome/info panel describing a style entry — name, feel, CSS tell, and a
 * copyable prompt. Always styled with the claymorphic shell's text
 * conventions, never the demo's own style classes.
 */
function StyleInfoPanel({ style }: StyleInfoPanelProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{style.name}</h3>
      <p className="text-sm text-slate-700 dark:text-slate-300">{style.feel}</p>
      <CopyBox text={style.promptText} />
      <code className="w-fit rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
        {style.cssTell}
      </code>
    </div>
  );
}

export default StyleInfoPanel;
