import { Link } from "react-router-dom";
import { Palette } from "lucide-react";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Texture / Material", to: "/texture" },
      { label: "Flat & Minimal", to: "/flat-minimal" },
      { label: "Retro / Nostalgic", to: "/retro" },
      { label: "Dark & Moody", to: "/dark-moody" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Layout Keywords", to: "/layout-keywords" },
      { label: "Visual Effects", to: "/visual-effect" },
      { label: "UX/UI Keywords", to: "/ux-ui-keyword" },
      { label: "Components", to: "/component" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "About StartYou UI", to: "/about" }],
  },
];

const linkClassName =
  "rounded-lg text-sm text-slate-500 transition-colors hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-slate-400 dark:hover:text-violet-300";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 rounded-[2rem] border border-white/70 bg-white/70 px-6 py-8 shadow-clay backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-800/70 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div className="max-w-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
          >
            <span className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-2.5 shadow-clay-sm">
              <Palette className="h-5 w-5 text-slate-700" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">StartYou UI</span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Your visual guide to UI styles.
          </p>
        </div>

        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100">{group.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-white/70 pt-5 text-xs text-slate-500 dark:border-slate-700/70 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} StartYou UI. Made for curious builders.</span>
        <nav aria-label="Legal" className="flex items-center gap-4">
          <Link to="/privacy" className={linkClassName}>
            Privacy
          </Link>
          <Link to="/terms" className={linkClassName}>
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
