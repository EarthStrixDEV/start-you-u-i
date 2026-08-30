import { NavLink, Outlet } from "react-router-dom";
import { Palette, Sun, Moon, Info } from "lucide-react";
import CategoryTabs from "../components/nav/CategoryTabs";
import Footer from "../components/layout/Footer";
import useTheme from "../hooks/useTheme";

function ClayShell() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf1e7] via-[#eef3ff] to-[#f6ecff] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <header className="flex flex-wrap items-center gap-6 rounded-b-[2.5rem] bg-white/70 px-8 py-5 shadow-clay backdrop-blur-sm dark:bg-slate-800/70">
        <div className="flex items-center gap-3">
          <div className="rounded-3xl bg-gradient-to-br from-pink-200 to-violet-200 p-3 shadow-clay-sm">
            <Palette className="h-6 w-6 text-slate-700" aria-hidden="true" />
          </div>
          <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            StartYou UI
          </span>
        </div>
        <CategoryTabs />
        <div className="ml-auto flex items-center gap-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              [
                "flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium shadow-clay-sm transition-all hover:shadow-clay",
                isActive
                  ? "scale-[0.98] bg-gradient-to-br from-violet-200 to-pink-200 text-slate-800 shadow-clay-inset dark:from-violet-500/40 dark:to-pink-500/40 dark:text-slate-100"
                  : "bg-white/60 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300",
              ].join(" ")
            }
          >
            <Info className="h-4 w-4" aria-hidden="true" />
            About
          </NavLink>
          <button
            type="button"
            onClick={toggleTheme}
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
      </header>

      <main className="px-8 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default ClayShell;
