import { NavLink } from "react-router-dom";
import {
  Layers,
  Square,
  Disc,
  Moon,
  Sparkles,
  Briefcase,
  LayoutGrid,
  Wand2,
  BookOpenText,
  PanelsTopLeft,
  type LucideIcon,
} from "lucide-react";
import { categories } from "../../data/categories";

// Lookup map for the icon names actually used in categories.ts — resolves
// the string `iconName` to a real lucide-react component without importing
// the entire icon set dynamically.
const iconMap: Record<string, LucideIcon> = {
  Layers,
  Square,
  Disc,
  Moon,
  Sparkles,
  Briefcase,
  LayoutGrid,
  Wand2,
  BookOpenText,
  PanelsTopLeft,
};

function CategoryTabs() {
  return (
    <nav className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const Icon = iconMap[category.iconName] ?? Sparkles;
        return (
          <NavLink
            key={category.id}
            to={category.path}
            className={({ isActive }) =>
              [
                "flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "scale-[0.98] bg-gradient-to-br from-violet-200 to-pink-200 text-slate-800 shadow-clay-inset dark:from-violet-500/40 dark:to-pink-500/40 dark:text-slate-100"
                  : "bg-white/60 text-slate-600 shadow-clay-sm dark:bg-slate-700/60 dark:text-slate-300",
              ].join(" ")
            }
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {category.label}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default CategoryTabs;
