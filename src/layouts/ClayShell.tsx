import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, Palette } from "lucide-react";
import Sidebar from "../components/nav/Sidebar";
import Footer from "../components/layout/Footer";
import useTheme from "../hooks/useTheme";

function ClayShell() {
  const { theme, toggleTheme } = useTheme();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf1e7] via-[#eef3ff] to-[#f6ecff] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 md:flex md:gap-6 md:p-6">
      {/* Mobile-only top bar: logo + hamburger */}
      <div className="flex items-center justify-between rounded-b-[2rem] bg-white/70 px-4 py-3 shadow-clay-sm backdrop-blur-sm dark:bg-slate-800/70 md:hidden">
        <div className="flex items-center gap-2">
          <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 p-2 shadow-clay-sm">
            <Palette className="h-5 w-5 text-slate-700" aria-hidden="true" />
          </div>
          <span className="text-base font-semibold text-slate-800 dark:text-slate-100">
            StartYou UI
          </span>
        </div>
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open navigation menu"
          className="rounded-full bg-white/60 p-2.5 shadow-clay-sm transition-all hover:shadow-clay dark:bg-slate-700/60"
        >
          <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden="true" />
        </button>
      </div>

      <Sidebar
        mobileOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex min-w-0 flex-1 flex-col px-4 py-6 md:px-0 md:py-6">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default ClayShell;
