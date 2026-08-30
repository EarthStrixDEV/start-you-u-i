import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyToClipboard } from "../../lib/clipboard";

interface CopyBoxProps {
  text: string;
}

/**
 * Border-accented box displaying quoted text with a copy-to-clipboard
 * button. Icon swaps to a checkmark for 1.5s after a successful copy.
 * Generic — used for style prompt text and, later, Blog "Prompt" content.
 */
function CopyBox({ text }: CopyBoxProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border-l-4 border-slate-300 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50">
      <p className="text-sm italic text-slate-600 dark:text-slate-300">"{text}"</p>
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
  );
}

export default CopyBox;
