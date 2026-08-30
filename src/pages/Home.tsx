import { Link } from "react-router-dom";
import {
  Layers,
  Square,
  Disc,
  Moon,
  Sparkles,
  Briefcase,
  LayoutGrid,
  Wand2,
  BookOpenText,
  PanelsTopLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { categories } from "../data/categories";
import { styles } from "../data/styles";
import { glossaryTerms } from "../data/glossaryTerms";
import type { CategoryId } from "../data/types";

// UX/UI Keyword glossary content lives in a separate `glossaryTerms` array,
// not in `styles.ts` — special-case just that one category id rather than
// building a generic "content source per category" abstraction for it.
function getCategoryItemCount(categoryId: CategoryId): number {
  if (categoryId === "ux-ui-keyword") {
    return glossaryTerms.length;
  }
  return styles.filter((style) => style.categoryId === categoryId).length;
}

// Same icon-resolution convention as CategoryTabs.tsx — resolves the string
// `iconName` from categories.ts to a real lucide-react component.
const iconMap: Record<string, LucideIcon> = {
  Layers,
  Square,
  Disc,
  Moon,
  Sparkles,
  Briefcase,
  LayoutGrid,
  Wand2,
  BookOpenText,
  PanelsTopLeft,
};

function Home() {
  const firstCategoryPath = categories[0]?.path ?? "/";

  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 px-8 py-16 text-center shadow-clay sm:px-16 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <h1 className="text-3xl font-bold text-slate-800 sm:text-5xl dark:text-slate-100">
          Web UI Style Cheatsheet
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
          A live-rendered reference of UI design style keywords, glossary concepts, and
          components, each shown with a real, working component preview instead of a
          static screenshot.
        </p>
        <Link
          to={firstCategoryPath}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-800 shadow-clay-sm transition-all hover:shadow-clay dark:bg-slate-700/80 dark:text-slate-100"
        >
          Start Exploring
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* Category grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = iconMap[category.iconName] ?? Sparkles;
          const styleCount = getCategoryItemCount(category.id);

          return (
            <Link
              key={category.id}
              to={category.path}
              className="flex flex-col gap-4 rounded-[2rem] bg-white/80 p-6 shadow-clay-sm transition-all hover:shadow-clay dark:bg-slate-800/80"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
                  <Icon className="h-6 w-6 text-slate-700" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                  {styleCount} {styleCount === 1 ? "style" : "styles"}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {category.label}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{category.description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
