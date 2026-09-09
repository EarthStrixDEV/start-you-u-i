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
    <div className="app-canvas min-h-screen md:flex md:gap-6 md:p-6">
      {/* Mobile-only top bar: logo + hamburger */}
      <div className="app-surface flex items-center justify-between rounded-b-3xl px-4 py-3 shadow-clay-sm md:hidden">
        <div className="flex items-center gap-2">
          <div className="app-icon-surface rounded-2xl p-2 shadow-clay-sm">
            <Palette className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-base font-semibold text-slate-800 dark:text-slate-100">
            StartYou UI
          </span>
        </div>
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open navigation menu"
            className="app-focus app-surface rounded-full p-2.5 shadow-clay-sm transition-shadow hover:shadow-clay"
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
