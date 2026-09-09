import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/categories";
import { styles } from "../data/styles";
import { glossaryTerms } from "../data/glossaryTerms";
import type { CategoryId } from "../data/types";
import { resolveCategoryIcon } from "../lib/categoryIcons";

// UX/UI Keyword glossary content lives in a separate `glossaryTerms` array,
// not in `styles.ts` — special-case just that one category id rather than
// building a generic "content source per category" abstraction for it.
function getCategoryItemCount(categoryId: CategoryId): number {
  if (categoryId === "ux-ui-keyword") {
    return glossaryTerms.length;
  }
  return styles.filter((style) => style.categoryId === categoryId).length;
}

function Home() {
  const firstCategoryPath = categories[0]?.path ?? "/";

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="app-hero relative overflow-hidden rounded-[2rem] px-8 py-12 text-center shadow-clay sm:px-16">
        <h1 className="text-3xl font-bold text-slate-800 sm:text-5xl dark:text-slate-100">
          Web UI Style Cheatsheet
        </h1>
        <p className="app-muted mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          A live-rendered reference of UI design style keywords, glossary concepts, and
          components, each shown with a real, working component preview instead of a
          static screenshot.
        </p>
        <Link
          to={firstCategoryPath}
          className="app-button-primary app-focus mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors"
        >
          Start Exploring
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* Category grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {categories.map((category) => {
          const Icon = resolveCategoryIcon(category.iconName);
          const styleCount = getCategoryItemCount(category.id);

          return (
            <Link
              key={category.id}
              to={category.path}
              className="app-card app-focus flex flex-col gap-4 rounded-2xl p-6 transition-shadow hover:shadow-clay"
            >
              <div className="flex items-center justify-between">
                <div className="app-icon-surface rounded-2xl p-3 shadow-clay-sm">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="app-surface-subtle app-muted rounded-full px-3 py-1 text-xs font-medium">
                  {styleCount} {styleCount === 1 ? "style" : "styles"}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {category.label}
                </h2>
                <p className="app-muted mt-1 text-sm">{category.description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
