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
  "app-focus app-muted rounded-lg text-sm transition-colors hover:text-violet-700 dark:hover:text-violet-200";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-card mt-12 rounded-2xl px-6 py-8 shadow-clay sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div className="max-w-sm">
          <Link
            to="/"
            className="app-focus inline-flex items-center gap-3 rounded-2xl"
          >
            <span className="app-icon-surface rounded-2xl p-2.5 shadow-clay-sm">
              <Palette className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">StartYou UI</span>
          </Link>
          <p className="app-muted mt-4 text-sm leading-6">
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

      <div className="app-muted mt-8 flex flex-col gap-3 border-t border-[var(--app-border)] pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
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
