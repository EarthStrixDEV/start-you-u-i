import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { StyleConfig } from "../../data/types";
import { copyToClipboard } from "../../lib/clipboard";

interface StyleInfoPanelProps {
  style: Pick<StyleConfig, "name" | "feel" | "cssTell" | "promptText">;
}

/**
 * Chrome/info panel describing a style entry — name, feel, CSS tell, and a
 * copyable prompt. Always styled with the claymorphic shell's text
 * conventions, never the demo's own style classes.
 */
function StyleInfoPanel({ style }: StyleInfoPanelProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const ok = await copyToClipboard(style.promptText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{style.name}</h3>
      <p className="text-sm text-slate-700 dark:text-slate-300">{style.feel}</p>
      <div className="flex items-start justify-between gap-3 rounded-xl border-l-4 border-slate-300 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50">
        <p className="text-sm italic text-slate-600 dark:text-slate-300">"{style.promptText}"</p>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy prompt text"
          className="shrink-0 rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-100"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <code className="w-fit rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
        {style.cssTell}
      </code>
    </div>
  );
}

export default StyleInfoPanel;
