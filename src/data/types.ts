export type CategoryId =
  | "texture"
  | "flat-minimal"
  | "retro"
  | "dark-moody"
  | "playful-organic"
  | "corporate-clean"
  | "layout-keywords"
  | "visual-effect"
  | "component"
  | "ux-ui-keyword";

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
  interactive?: boolean; // true = requires click/hover to reveal the effect, used for some Visual Effect and all Component category entries
}

export interface CategoryConfig {
  id: CategoryId;
  label: string;
  path: string; // route path, must match App.tsx routes
  description: string; // short 1-liner for the category page header
  iconName: string; // a lucide-react icon component NAME (e.g. "Sparkles") — resolved to the actual icon elsewhere, not imported here
}

// --- UX/UI Keyword glossary ---

export interface GlossaryTermConfig {
  id: string; // slug
  term: string; // e.g. "Fitts's Law"
  categoryId: "ux-ui-keyword"; // literal-narrowed, this type only ever belongs to this one category
  definition: string; // 1-3 sentence plain definition
  example: string; // concrete example in a real UI scenario
  whyItMatters?: string; // optional "so what" for a senior audience
  iconName?: string; // optional lucide icon name
}

// --- Vibe Coder Blog ---

export type BlogLevel = "beginner" | "junior" | "mid-level" | "senior";
export type BlogContentType = "best-practice" | "quick-guide" | "prompt" | "workflow";

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  id: string; // slug
  level: BlogLevel;
  levelLabel: string; // e.g. "Senior Developer" — avoids re-deriving from BlogLevelConfig everywhere
  contentType: BlogContentType;
  contentTypeLabel: string; // e.g. "Workflow for Initial Project"
  title: string; // post-specific headline
  summary: string; // 1-sentence teaser
  sections: BlogSection[]; // the 300-600 word body, structured into sections
  promptText?: string; // ONLY set when contentType === "prompt"
  estReadMinutes?: number;
}

export interface BlogLevelConfig {
  level: BlogLevel;
  label: string; // "Junior Developer"
  path: string; // route segment under /blog/, e.g. "junior"
  description: string;
  iconName: string;
}
