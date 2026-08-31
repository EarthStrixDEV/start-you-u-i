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

export const iconMap: Record<string, LucideIcon> = {
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

export function resolveCategoryIcon(iconName: string): LucideIcon {
  return iconMap[iconName] ?? Sparkles;
}
