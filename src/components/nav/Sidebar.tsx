import { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Palette, Search, BookOpen, Info, Moon, Sun, X } from "lucide-react";
import { categories } from "../../data/categories";
import { styles } from "../../data/styles";
import { resolveCategoryIcon } from "../../lib/categoryIcons";
import type { Theme } from "../../hooks/useTheme";
import type { CategoryId } from "../../data/types";

const categoryById = new Map(categories.map((category) => [category.id, category]));
const styleCategoryIds = new Set<CategoryId>([
  "texture",
  "flat-minimal",
  "retro",
  "dark-moody",
  "playful-organic",
  "corporate-clean",
]);

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const navRowClass = ({ isActive }: { isActive: boolean }) =>
  [
    "app-focus flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
    isActive
      ? "bg-violet-100 text-violet-950 shadow-clay-inset dark:bg-violet-400/20 dark:text-violet-100"
      : "text-slate-700 hover:bg-violet-50 dark:text-slate-100 dark:hover:bg-violet-400/15",
  ].join(" ");

function Sidebar({ mobileOpen, onClose, theme, onToggleTheme }: SidebarProps) {
  const [query, setQuery] = useState("");
  const [activeResultIndex, setActiveResultIndex] = useState(-1);
  const navigate = useNavigate();
  const normalizedQuery = query.trim().toLowerCase();
  const searchResults = useMemo(
    () =>
      normalizedQuery
        ? styles
            .filter((style) =>
              [style.name, style.feel, style.categoryId].some((value) =>
                value.toLowerCase().includes(normalizedQuery),
              ),
            )
            .slice(0, 6)
            .map((style) => ({ style, category: categoryById.get(style.categoryId)! }))
        : [],
    [normalizedQuery],
  );
  const styleCategories = categories.filter((category) => styleCategoryIds.has(category.id));
  const learningCategories = categories.filter((category) => !styleCategoryIds.has(category.id));

  function clearSearch() {
    setQuery("");
    setActiveResultIndex(-1);
  }

  function openSearchResult(index: number) {
    const result = searchResults[index];
    if (!result) return;
    navigate(result.category.path);
    clearSearch();
    onClose();
  }

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
          "app-surface sidebar-scroll flex flex-col gap-4 overflow-y-auto rounded-3xl p-4 shadow-clay",
          "fixed inset-y-0 left-0 z-50 w-[260px] -translate-x-full transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:sticky md:top-6 md:z-auto md:h-[calc(100vh-3rem)] md:w-[260px] md:shrink-0 md:translate-x-0 md:transition-none",
        ].join(" ")}
      >
        {/* Logo row */}
        <div className="flex items-center gap-3 px-1">
          <div className="app-icon-surface rounded-2xl p-3 shadow-clay-sm">
            <Palette className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              StartYou UI
            </p>
            <p className="app-muted text-xs">
              Style cheatsheet
            </p>
          </div>
        </div>

        {/* Style search */}
        <div className="relative">
          <div className="app-input flex items-center gap-2 rounded-xl px-3 py-2.5 shadow-clay-inset">
          <Search className="app-muted h-4 w-4 shrink-0" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search styles…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveResultIndex(-1);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                clearSearch();
                return;
              }
              if (searchResults.length === 0) return;
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveResultIndex((index) => (index + 1) % searchResults.length);
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveResultIndex((index) => (index <= 0 ? searchResults.length - 1 : index - 1));
              }
              if (event.key === "Enter" && activeResultIndex >= 0) {
                event.preventDefault();
                openSearchResult(activeResultIndex);
              }
            }}
            role="combobox"
            aria-autocomplete="list"
            aria-controls={normalizedQuery ? "style-search-results" : undefined}
            aria-expanded={normalizedQuery.length > 0}
            aria-activedescendant={activeResultIndex >= 0 ? `style-search-result-${activeResultIndex}` : undefined}
            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-400"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear style search"
              className="app-focus app-muted rounded-md p-0.5 hover:text-violet-700 dark:hover:text-violet-200"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
          </div>
          {normalizedQuery && (
            <div id="style-search-results" role="listbox" className="app-surface absolute z-10 mt-2 w-full overflow-hidden rounded-xl p-1 shadow-clay-sm">
              {searchResults.length > 0 ? (
                searchResults.map(({ style, category }, index) => (
                  <NavLink
                    key={style.id}
                    id={`style-search-result-${index}`}
                    role="option"
                    aria-selected={activeResultIndex === index}
                    to={category.path}
                    onClick={() => {
                      clearSearch();
                      onClose();
                    }}
                    className={`app-focus block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-violet-50 dark:text-slate-100 dark:hover:bg-violet-400/15 ${activeResultIndex === index ? "bg-violet-100 dark:bg-violet-400/20" : ""}`}
                  >
                    <span className="block font-medium">{style.name}</span>
                    <span className="app-muted block text-xs">
                      {category.label}
                    </span>
                  </NavLink>
                ))
              ) : (
                <p className="app-muted px-3 py-3 text-sm">No styles match “{query}”.</p>
              )}
            </div>
          )}
        </div>

        {/* Browse section */}
        <div className="flex flex-col gap-1">
          <p className="app-muted px-2 text-[10px] font-semibold uppercase tracking-wide">
            Styles
          </p>
          <nav className="flex flex-col gap-1">
            {styleCategories.map((category) => {
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

        <div className="flex flex-col gap-1 border-t border-[var(--app-border)] pt-3">
          <p className="app-muted px-2 text-[10px] font-semibold uppercase tracking-wide">Learn</p>
          <nav className="flex flex-col gap-1">
            {learningCategories.map((category) => {
              const Icon = resolveCategoryIcon(category.iconName);
              return (
                <NavLink key={category.id} to={category.path} onClick={onClose} className={navRowClass}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {category.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Blog / About utility group */}
        <div className="flex flex-col gap-1 border-t border-[var(--app-border)] pt-3">
          <p className="app-muted px-2 text-[10px] font-semibold uppercase tracking-wide">More</p>
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
        <div className="mt-auto flex items-center justify-between border-t border-[var(--app-border)] pt-3">
          <span className="app-muted text-xs">
            v1.0
          </span>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="app-focus app-surface rounded-full p-2.5 shadow-clay-sm transition-shadow hover:shadow-clay"
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
