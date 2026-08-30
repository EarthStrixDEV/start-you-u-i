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
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 px-8 py-16 text-center shadow-clay sm:px-16 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <div className="mx-auto mb-4 inline-flex rounded-3xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
          <Newspaper className="h-6 w-6 text-slate-700" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 sm:text-5xl dark:text-slate-100">
          Vibe Coder Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
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
              className="flex flex-col gap-4 rounded-[2rem] bg-white/80 p-6 shadow-clay-sm transition-all hover:shadow-clay dark:bg-slate-800/80"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
                  <Icon className="h-6 w-6 text-slate-700" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                  {postCount} {postCount === 1 ? "post" : "posts"}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {level.label}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{level.description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default BlogIndex;
