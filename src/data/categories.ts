import type { CategoryConfig } from "./types";

export const categories: CategoryConfig[] = [
  {
    id: "texture",
    label: "Texture / Material",
    path: "/texture",
    description: "Frosted glass, clay, and material-mimicking surface styles.",
    iconName: "Layers",
  },
  {
    id: "flat-minimal",
    label: "Flat & Minimal",
    path: "/flat-minimal",
    description: "Clean, restrained styles with little to no shadow or gradient.",
    iconName: "Square",
  },
  {
    id: "retro",
    label: "Retro / Nostalgic",
    path: "/retro",
    description: "Y2K, vaporwave, and other throwback aesthetics.",
    iconName: "Disc",
  },
  {
    id: "dark-moody",
    label: "Dark & Moody",
    path: "/dark-moody",
    description: "High-contrast dark UIs, neon accents, and digital distortion.",
    iconName: "Moon",
  },
  {
    id: "playful-organic",
    label: "Playful / Organic",
    path: "/playful-organic",
    description: "Friendly shapes, hand-drawn touches, and 3D illustration feel.",
    iconName: "Sparkles",
  },
  {
    id: "corporate-clean",
    label: "Corporate / Clean Tech",
    path: "/corporate-clean",
    description: "Precise, restrained SaaS and dashboard styles.",
    iconName: "Briefcase",
  },
  {
    id: "layout-keywords",
    label: "Layout Keywords",
    path: "/layout-keywords",
    description: "Structural layout patterns to combine with any style above.",
    iconName: "LayoutGrid",
  },
  {
    id: "visual-effect",
    label: "Visual Effect",
    path: "/visual-effect",
    description: "Hover, interaction, and animation effects to layer onto any style.",
    iconName: "Wand2",
  },
  {
    id: "ux-ui-keyword",
    label: "UX/UI Keyword",
    path: "/ux-ui-keyword",
    description: "A glossary of UX/UI concepts senior devs and designers know.",
    iconName: "BookOpenText",
  },
  {
    id: "component",
    label: "Component",
    path: "/component",
    description: "Interactive UI components — modals, dropdowns, tabs, and more.",
    iconName: "PanelsTopLeft",
  },
];
