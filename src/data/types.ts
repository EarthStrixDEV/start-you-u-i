export type CategoryId =
  | "texture"
  | "flat-minimal"
  | "retro"
  | "dark-moody"
  | "playful-organic"
  | "corporate-clean"
  | "layout-keywords";

export type DemoKind = "generic" | "custom";

export interface GenericDemoConfig {
  containerClass: string; // Tailwind classes for the outer preview surface
  accentClass?: string; // button/badge classes inside the demo
  label?: string; // demo button/card text
  bgClass?: string; // PreviewFrame background override
  textClass?: string; // explicit text color for contrast
}

export interface StyleConfig {
  id: string; // slug
  name: string;
  categoryId: CategoryId;
  feel: string;
  cssTell: string;
  promptText: string;
  demoKind: DemoKind;
  demo?: GenericDemoConfig; // required when demoKind === "generic"
  // when demoKind === "custom", the component consuming this looks up
  // a matching component by `id` from a registry in components/overrides — do NOT put a React component reference in this data file (keep data layer framework-render-agnostic / no JSX here)
}

export interface CategoryConfig {
  id: CategoryId;
  label: string;
  path: string; // route path, must match App.tsx routes
  description: string; // short 1-liner for the category page header
  iconName: string; // a lucide-react icon component NAME (e.g. "Sparkles") — resolved to the actual icon elsewhere, not imported here
}
