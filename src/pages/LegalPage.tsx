import { FileText, ShieldCheck } from "lucide-react";

type LegalDocument = "privacy" | "terms";

interface LegalPageProps {
  document: LegalDocument;
}

const legalContent = {
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy at a glance",
    description: "A simple guide to how this reference site handles information.",
    sections: [
      {
        title: "What this site collects",
        body: "StartYou UI does not provide accounts, forms, or a place to submit personal information. Any information processed by the hosting platform is governed by that platform's own privacy policy.",
      },
      {
        title: "Changes to this page",
        body: "If the site gains features that collect information, this page will be updated before those features are made available.",
      },
    ],
  },
  terms: {
    eyebrow: "Terms",
    title: "Using StartYou UI",
    description: "A short guide for using this UI-style reference responsibly.",
    sections: [
      {
        title: "Reference material",
        body: "The examples and terminology are provided for learning and inspiration. Review any generated code or design decision before using it in a production product.",
      },
      {
        title: "Updates",
        body: "The content may change as the reference grows. Continued use of the site means you accept the latest version of these terms.",
      },
    ],
  },
} as const;

function LegalPage({ document }: LegalPageProps) {
  const content = legalContent[document];
  const Icon = document === "privacy" ? ShieldCheck : FileText;

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
      <section className="rounded-[3rem] bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 px-8 py-12 text-center shadow-clay sm:px-16 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <div className="mb-4 inline-flex rounded-3xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
          <Icon className="h-6 w-6 text-slate-700" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
          {content.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl dark:text-slate-100">
          {content.title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          {content.description}
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        {content.sections.map((section) => (
          <article key={section.title} className="rounded-[2rem] bg-white/80 p-6 shadow-clay dark:bg-slate-800/80">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{section.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default LegalPage;
