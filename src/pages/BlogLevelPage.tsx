import { Link, useParams } from "react-router-dom";
import {
  CheckCircle2,
  Zap,
  Sparkles,
  GitBranch,
  Sprout,
  Code2,
  Layers,
  Compass,
  ArrowLeft,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { blogLevels } from "../data/blogLevels";
import { blogPosts } from "../data/blog";
import type { BlogContentType } from "../data/types";
import CopyBox from "../components/shared/CopyBox";

// Same icon-resolution convention as BlogIndex.tsx / Home.tsx.
const levelIconMap: Record<string, LucideIcon> = {
  Sprout,
  Code2,
  Layers,
  Compass,
};

const contentTypeIconMap: Record<BlogContentType, LucideIcon> = {
  "best-practice": CheckCircle2,
  "quick-guide": Zap,
  prompt: Sparkles,
  workflow: GitBranch,
};

// Sensible reading order for the 4 content-type section-cards, per plan.
const contentTypeOrder: BlogContentType[] = ["best-practice", "quick-guide", "prompt", "workflow"];

function BlogLevelPage() {
  const { level } = useParams<{ level: string }>();

  // Look up by path, NOT array index — levels could theoretically be reordered.
  const config = blogLevels.find((entry) => entry.path === level);

  if (!config) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-white/80 p-12 text-center shadow-clay dark:bg-slate-800/80">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Level not found</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          "{level}" isn't a valid blog level.
        </p>
        <Link
          to="/blog"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-clay-sm transition-all hover:shadow-clay dark:bg-slate-700/80 dark:text-slate-100"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const LevelIcon = levelIconMap[config.iconName] ?? Sprout;

  const levelPosts = blogPosts.filter((post) => post.level === config.level);
  const orderedPosts = contentTypeOrder
    .map((type) => levelPosts.find((post) => post.contentType === type))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <section className="rounded-[3rem] bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 px-8 py-12 text-center shadow-clay sm:px-16 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <div className="mx-auto mb-4 inline-flex rounded-3xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
          <LevelIcon className="h-6 w-6 text-slate-700" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl dark:text-slate-100">
          {config.label}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          {config.description}
        </p>
      </section>

      {/* Content-type sections, stacked top-to-bottom */}
      {orderedPosts.map((post) => {
        const ContentIcon = contentTypeIconMap[post.contentType];

        return (
          <section
            key={post.id}
            className="rounded-[2rem] bg-white/80 p-6 shadow-clay dark:bg-slate-800/80"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
                <ContentIcon className="h-5 w-5 text-slate-700" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {post.contentTypeLabel}
                </h2>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {post.title}
                </h3>
              </div>
              {post.estReadMinutes !== undefined && (
                <span className="ml-auto flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.estReadMinutes} min
                </span>
              )}
            </div>

            <p className="text-sm italic text-slate-500 dark:text-slate-400">{post.summary}</p>

            <div className="mt-4 flex flex-col gap-4">
              {post.sections.map((section) => (
                <div key={section.heading}>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {section.heading}
                  </h4>
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {post.promptText && (
              <div className="mt-4">
                <CopyBox text={post.promptText} />
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

export default BlogLevelPage;
