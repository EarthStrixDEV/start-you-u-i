import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/60 bg-white/50 px-8 py-6 text-xs text-slate-500 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50 dark:text-slate-400">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <span>
          © {year} StartYou UI
        </span>
        <div className="flex gap-4">
          <Link
            to="/blog"
            className="font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
