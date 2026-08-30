import {
  MousePointerClick,
  ListTree,
  Repeat2,
  Layers3,
  Grid3x3,
  Brain,
  Sparkles,
  ShieldAlert,
  Target,
  Eye,
  BookOpenText,
  type LucideIcon,
} from "lucide-react";
import type { GlossaryTermConfig } from "../../data/types";

// Icon-resolution convention matching CategoryTabs.tsx / Home.tsx — resolves
// the string `iconName` from a glossary entry to a real lucide-react
// component, falling back to a generic glossary icon when unset/unknown.
const iconMap: Record<string, LucideIcon> = {
  MousePointerClick,
  ListTree,
  Repeat2,
  Layers3,
  Grid3x3,
  Brain,
  Sparkles,
  ShieldAlert,
  Target,
  Eye,
};

interface GlossaryTermCardProps {
  term: GlossaryTermConfig;
}

/**
 * Card for a single UX/UI glossary entry. Unlike StylePreviewCard, there is
 * no live demo to render — this is prose content (definition + example +
 * rationale), so it follows About.tsx's chrome/content visual language
 * instead of the preview-card + PreviewFrame pattern, and gets full dark:
 * support like the rest of the app's static chrome.
 */
function GlossaryTermCard({ term }: GlossaryTermCardProps) {
  const Icon = term.iconName ? (iconMap[term.iconName] ?? BookOpenText) : null;

  return (
    <div className="flex flex-col gap-3 rounded-[2rem] bg-white/80 p-6 shadow-clay dark:bg-slate-800/80">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm dark:from-violet-500/40 dark:to-pink-500/40">
            <Icon className="h-5 w-5 text-slate-700 dark:text-slate-100" aria-hidden="true" />
          </div>
        )}
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{term.term}</h2>
      </div>

      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {term.definition}
      </p>

      <div className="rounded-xl border-l-4 border-violet-300 bg-violet-50 p-3 dark:border-violet-500/40 dark:bg-slate-700/50">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">
          Example
        </p>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
          {term.example}
        </p>
      </div>

      {term.whyItMatters && (
        <p className="text-xs italic text-slate-500 dark:text-slate-400">
          Why it matters: {term.whyItMatters}
        </p>
      )}
    </div>
  );
}

export default GlossaryTermCard;
