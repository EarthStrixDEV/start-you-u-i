import { Link } from "react-router-dom";
import { Sprout, Code2, Layers, Compass, Newspaper, type LucideIcon } from "lucide-react";
import { blogLevels } from "../data/blogLevels";
import { blogPosts } from "../data/blog";

// Same icon-resolution convention as Home.tsx — resolves the string
// `iconName` from blogLevels.ts to a real lucide-react component.
const iconMap: Record<string, LucideIcon> = {
  Sprout,
  Code2,
  Layers,
  Compass,
};

function BlogIndex() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="app-hero relative overflow-hidden rounded-[2rem] px-8 py-12 text-center shadow-clay sm:px-16">
        <div className="app-icon-surface mx-auto mb-4 inline-flex rounded-2xl p-3 shadow-clay-sm">
          <Newspaper className="h-6 w-6" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 sm:text-5xl dark:text-slate-100">
          Vibe Coder Blog
        </h1>
        <p className="app-muted mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Best practices, quick guides, prompts, and workflows for building with AI coding
          tools — organized by where you are in your experience, from your first shipped
          project to owning architecture decisions.
        </p>
      </section>

      {/* Level grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {blogLevels.map((level) => {
          const Icon = iconMap[level.iconName] ?? Sprout;
          const postCount = blogPosts.filter((post) => post.level === level.level).length;

          return (
            <Link
              key={level.level}
              to={`/blog/${level.path}`}
              className="app-card app-focus flex flex-col gap-4 rounded-2xl p-6 transition-shadow hover:shadow-clay"
            >
              <div className="flex items-center justify-between">
                <div className="app-icon-surface rounded-2xl p-3 shadow-clay-sm">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="app-surface-subtle app-muted rounded-full px-3 py-1 text-xs font-medium">
                  {postCount} {postCount === 1 ? "post" : "posts"}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {level.label}
                </h2>
                <p className="app-muted mt-1 text-sm">{level.description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default BlogIndex;
