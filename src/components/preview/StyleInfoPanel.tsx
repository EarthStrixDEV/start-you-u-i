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
      <p className="app-muted text-sm">{style.feel}</p>
      <details className="group mt-1">
        <summary className="app-focus cursor-pointer rounded-lg text-sm font-medium text-violet-700 marker:hidden hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-100">
          <span className="group-open:hidden">View prompt &amp; CSS</span>
          <span className="hidden group-open:inline">Hide prompt &amp; CSS</span>
        </summary>
        <div className="mt-3 flex flex-col gap-2">
          <CopyBox text={style.promptText} />
          <code className="app-code w-fit rounded-md px-2 py-1 font-mono text-xs">
            {style.cssTell}
          </code>
        </div>
      </details>
    </div>
  );
}

export default StyleInfoPanel;
