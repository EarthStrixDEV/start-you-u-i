import { Info, BookOpenText, Users, BarChart3, FileText } from "lucide-react";
import { categories } from "../data/categories";
import { styles } from "../data/styles";
import { glossaryTerms } from "../data/glossaryTerms";
import { blogPosts } from "../data/blog";

interface AgentTeamMember {
  name: string;
  role: string;
}

const agentTeam: AgentTeamMember[] = [
  { name: "พลอย (Ploy)", role: "Lead Planner" },
  { name: "ฟ้า (Fah)", role: "Database Engineer" },
  { name: "นุ่น (Noon)", role: "API Contract Engineer" },
  { name: "มายด์ลิน (Maidlin)", role: "Backend Logic Engineer" },
  { name: "เจน (Jane)", role: "Backend Endpoint Engineer" },
  { name: "ออม (Aom)", role: "Frontend UI Engineer" },
  { name: "เบล (Bell)", role: "Frontend Integration Engineer" },
  { name: "แพร (Prae)", role: "QA Lead" },
  { name: "โบว์ (Bow)", role: "Security & Dependency Auditor" },
];

function About() {
  // Live-computed stats — no hardcoded numbers. Recomputed from the actual
  // imported data arrays every render, same pattern as Home.tsx's category grid.
  const totalStyles = styles.length;
  const totalCategories = categories.length;
  const totalGlossaryTerms = glossaryTerms.length;
  const totalBlogPosts = blogPosts.length;
  // UX/UI Keyword glossary content lives in a separate `glossaryTerms` array,
  // not in `styles.ts` — special-case just that one category id rather than
  // building a generic "content source per category" abstraction for it.
  const breakdown = categories.map((category) => ({
    label: category.label,
    count:
      category.id === "ux-ui-keyword"
        ? totalGlossaryTerms
        : styles.filter((style) => style.categoryId === category.id).length,
  }));

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <section className="rounded-[3rem] bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 px-8 py-12 text-center shadow-clay sm:px-16 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <div className="mx-auto mb-4 inline-flex rounded-3xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
          <Info className="h-6 w-6 text-slate-700" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl dark:text-slate-100">
          About StartYou UI
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          What this app is, how to use it, and who built it.
        </p>
      </section>

      {/* What / How to use */}
      <section className="rounded-[2rem] bg-white/80 p-6 shadow-clay dark:bg-slate-800/80">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
            <BookOpenText className="h-5 w-5 text-slate-700" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            What is this?
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          StartYou UI is a live-rendered reference of UI design style keywords — instead of
          static screenshots, every entry ships with a real, working component preview built
          from a curated cheatsheet of design vocabulary.
        </p>

        <h3 className="mt-6 text-sm font-semibold text-slate-800 dark:text-slate-100">
          How to use it
        </h3>
        <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <li>
            Browse styles by category from the header nav — visual styles, layout and
            visual-effect keywords, interactive components, and a UX/UI concepts glossary.
          </li>
          <li>Each card shows a live demo of the style so you can see it, not just read about it.</li>
          <li>
            Every card also includes copyable AI prompt text — handy when you're prompting an
            AI coding tool and want the exact style vocabulary it responds well to.
          </li>
        </ul>
      </section>

      {/* Stats */}
      <section className="rounded-[2rem] bg-white/80 p-6 shadow-clay dark:bg-slate-800/80">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
            <BarChart3 className="h-5 w-5 text-slate-700" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Stats
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-700">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {totalStyles}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              total styles
            </div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-700">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {totalCategories}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              categories
            </div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-700">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {totalGlossaryTerms}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              glossary terms
            </div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-700">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {totalBlogPosts}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              blog posts
            </div>
          </div>
        </div>

        <h3 className="mt-6 text-sm font-semibold text-slate-800 dark:text-slate-100">
          Per-category breakdown
        </h3>
        <ul className="mt-2 flex flex-col gap-2">
          {breakdown.map((entry) => (
            <li
              key={entry.label}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2 text-sm dark:bg-slate-700/60"
            >
              <span className="text-slate-700 dark:text-slate-200">{entry.label}</span>
              <span className="rounded-full bg-slate-200 px-3 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-600 dark:text-slate-200">
                {entry.count} {entry.count === 1 ? "style" : "styles"}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Credits */}
      <section className="rounded-[2rem] bg-white/80 p-6 shadow-clay dark:bg-slate-800/80">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
            <Users className="h-5 w-5 text-slate-700" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Credits
          </h2>
        </div>

        <ul className="flex flex-col gap-2">
          <li className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2 text-sm dark:bg-slate-700/60">
            <span className="font-medium text-slate-800 dark:text-slate-100">Earth</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Project Owner / Requester
            </span>
          </li>
          <li className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2 text-sm dark:bg-slate-700/60">
            <span className="font-medium text-slate-800 dark:text-slate-100">Min-Ju</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Lead Engineer</span>
          </li>
        </ul>

        <h3 className="mt-5 text-sm font-semibold text-slate-800 dark:text-slate-100">
          Agent Team
        </h3>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {agentTeam.map((member) => (
            <li
              key={member.name}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2 text-sm dark:bg-slate-700/60"
            >
              <span className="text-slate-800 dark:text-slate-100">{member.name}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{member.role}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
          Database, API contract, and backend logic/endpoint roles weren't actively needed on
          this project since it's a static frontend — they're listed here as part of the full
          team roster.
        </p>
      </section>

      {/* Source */}
      <section className="rounded-[2rem] bg-white/80 p-6 shadow-clay dark:bg-slate-800/80">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
            <FileText className="h-5 w-5 text-slate-700" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Source
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Style content is curated from{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-700">
            web-ui-style-cheatsheet.md
          </code>
          , a reference sheet for prompting AI coding tools with precise UI style vocabulary.
        </p>
      </section>
    </div>
  );
}

export default About;
