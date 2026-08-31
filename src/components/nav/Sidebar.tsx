import { NavLink } from "react-router-dom";
import { Palette, Search, BookOpen, Info, Moon, Sun } from "lucide-react";
import { categories } from "../../data/categories";
import { resolveCategoryIcon } from "../../lib/categoryIcons";
import type { Theme } from "../../hooks/useTheme";

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const navRowClass = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
    isActive
      ? "scale-[0.98] bg-gradient-to-br from-violet-200 to-pink-200 text-slate-800 shadow-clay-inset dark:from-violet-500/40 dark:to-pink-500/40 dark:text-slate-100"
      : "text-slate-600 hover:bg-white/60 dark:text-slate-300 dark:hover:bg-slate-700/40",
  ].join(" ");

function Sidebar({ mobileOpen, onClose, theme, onToggleTheme }: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={[
          "flex flex-col gap-4 overflow-y-auto rounded-[2rem] bg-white/70 p-4 shadow-clay backdrop-blur-sm dark:bg-slate-800/70",
          "fixed inset-y-0 left-0 z-50 w-[260px] -translate-x-full transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:sticky md:top-6 md:z-auto md:h-[calc(100vh-3rem)] md:w-[260px] md:shrink-0 md:translate-x-0 md:transition-none",
        ].join(" ")}
      >
        {/* Logo row */}
        <div className="flex items-center gap-3 px-1">
          <div className="rounded-3xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
            <Palette className="h-6 w-6 text-slate-700" aria-hidden="true" />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              StartYou UI
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Style cheatsheet
            </p>
          </div>
        </div>

        {/* Search input (visual only) */}
        <div className="flex items-center gap-2 rounded-full px-3 py-2.5 shadow-clay-inset">
          <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search styles…"
            className="w-full bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none dark:text-slate-300"
          />
        </div>

        {/* Browse section */}
        <div className="flex flex-col gap-1">
          <p className="px-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Browse
          </p>
          <nav className="flex flex-col gap-1">
            {categories.map((category) => {
              const Icon = resolveCategoryIcon(category.iconName);
              return (
                <NavLink
                  key={category.id}
                  to={category.path}
                  onClick={onClose}
                  className={navRowClass}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {category.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Blog / About utility group */}
        <div className="flex flex-col gap-1 border-t border-white/60 pt-3 dark:border-slate-700/60">
          <NavLink to="/blog" onClick={onClose} className={navRowClass}>
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Blog
          </NavLink>
          <NavLink to="/about" onClick={onClose} className={navRowClass}>
            <Info className="h-4 w-4" aria-hidden="true" />
            About
          </NavLink>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-white/60 pt-3 dark:border-slate-700/60">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            v1.0
          </span>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="rounded-full bg-white/60 p-2.5 shadow-clay-sm transition-all hover:shadow-clay dark:bg-slate-700/60"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-slate-700" aria-hidden="true" />
            ) : (
              <Sun className="h-5 w-5 text-slate-200" aria-hidden="true" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
