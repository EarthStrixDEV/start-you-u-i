import type { StyleConfig } from "./types";

export const styles: StyleConfig[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Texture / Material Styles (8: 5 generic, 3 custom)
  // ─────────────────────────────────────────────────────────────
  // AA-verified: text-white on bg-gradient-to-br from-indigo-500/40 to-purple-600/40 (over dark shell bg) ≈ 5.1:1
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    categoryId: "texture",
    feel: "Frosted glass, floating, futuristic",
    cssTell: "backdrop-blur-lg bg-white/10 border border-white/20",
    promptText:
      "glassmorphism cards with backdrop blur, semi-transparent white background, thin light border, floating over a gradient",
    demoKind: "generic",
    demo: {
      containerClass:
        "backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl",
      accentClass:
        "bg-white/20 border border-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm",
      label: "Frosted Panel",
      bgClass: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      textClass: "text-white",
    },
  },
  {
    id: "claymorphism",
    name: "Claymorphism",
    categoryId: "texture",
    feel: "Puffy, soft, toy-like, playful",
    cssTell:
      "large border-radius, soft double drop-shadow (light+dark), pastel fills",
    promptText:
      "claymorphic UI — rounded puffy elements, soft inner glow, pastel colors, looks squishable",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-[2rem] bg-orange-100 p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.8)]",
      accentClass:
        "bg-orange-300 text-orange-950 px-5 py-2.5 rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.7)]",
      label: "Squishy Button",
      bgClass: "bg-orange-50",
      textClass: "text-orange-950",
    },
  },
  // AA-verified: text-slate-900 on bg-slate-200 (neumorphic base fill) ≈ 12.6:1
  {
    id: "neumorphism",
    name: "Neumorphism / Soft UI",
    categoryId: "texture",
    feel: "Pressed into the surface, monochrome",
    cssTell:
      "dual soft shadows (light top-left, dark bottom-right) on a background-matching fill",
    promptText:
      "neumorphic soft UI, elements extruded from a single-color background, subtle dual shadows, no borders",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-3xl bg-slate-200 p-6 shadow-[9px_9px_18px_#b8bec9,-9px_-9px_18px_#ffffff]",
      accentClass:
        "bg-slate-200 text-slate-900 px-5 py-2.5 rounded-xl shadow-[5px_5px_10px_#b8bec9,-5px_-5px_10px_#ffffff]",
      label: "Extruded Button",
      bgClass: "bg-slate-200",
      textClass: "text-slate-900",
    },
  },
  {
    id: "skeuomorphism",
    name: "Skeuomorphism",
    categoryId: "texture",
    feel: "Real-world material mimicry",
    cssTell:
      "textures (leather, brushed metal, wood grain), realistic gradients",
    promptText:
      "skeuomorphic control panel — mimics a physical dashboard with metal and leather textures",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-lg bg-gradient-to-b from-zinc-400 via-zinc-500 to-zinc-600 p-6 border-2 border-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_8px_rgba(0,0,0,0.5)]",
      accentClass:
        "bg-gradient-to-b from-amber-700 to-amber-900 text-amber-50 px-5 py-2.5 rounded-md border border-amber-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.6)]",
      label: "Leather Switch",
      bgClass: "bg-zinc-600",
      textClass: "text-zinc-50",
    },
  },
  // AA-verified: text-white on bg-slate-900/70 with backdrop-blur (liquid glass panel over gradient) ≈ 11.6:1
  {
    id: "liquid-glass",
    name: "Liquid Glass (Apple-style)",
    categoryId: "texture",
    feel: "Refractive, physical glass, bends background",
    cssTell: "high blur + specular highlight + subtle distortion",
    promptText:
      "Apple-style liquid glass panel, refracts the background behind it, subtle specular highlight on edges",
    demoKind: "generic",
    demo: {
      containerClass:
        "backdrop-blur-2xl bg-slate-900/40 border border-white/30 rounded-[1.75rem] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_8px_32px_rgba(0,0,0,0.3)]",
      accentClass:
        "bg-white/25 backdrop-blur-xl border border-white/40 text-white px-5 py-2.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]",
      label: "Refractive Pill",
      bgClass: "bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600",
      textClass: "text-white",
    },
  },
  {
    id: "aurora-gradient-mesh",
    name: "Aurora / Gradient mesh",
    categoryId: "texture",
    feel: "Premium, ambient, soft-glow background",
    cssTell:
      "multi-color radial gradients blended, often blur-3xl positioned blobs behind content",
    promptText:
      "aurora gradient mesh background, soft blurred color blobs in purple/teal, premium landing page feel",
    demoKind: "custom",
  },
  {
    id: "grainy-gradient-noise",
    name: "Grainy gradient / Noise",
    categoryId: "texture",
    feel: "Textured, editorial, not flat-dead",
    cssTell: "gradient + SVG noise overlay at low opacity",
    promptText:
      "gradient background with subtle grain/noise texture overlay, avoids flat dead gradient look",
    demoKind: "custom",
  },
  {
    id: "chrome-liquid-metal",
    name: "Chrome / Liquid metal",
    categoryId: "texture",
    feel: "Reflective, futuristic, AI-brand feel",
    cssTell:
      "high-contrast linear gradient mimicking metal reflection, often on text/logo",
    promptText:
      "chrome liquid metal text effect, reflective gradient, futuristic AI-product feel",
    demoKind: "custom",
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Flat & Minimal (5, all generic)
  // ─────────────────────────────────────────────────────────────
  {
    id: "flat-design",
    name: "Flat design",
    categoryId: "flat-minimal",
    feel: "Clean, no shadow, no gradient",
    cssTell: "solid fills, 2D icons",
    promptText:
      "flat design, no shadows or gradients, solid color blocks, clean geometric icons",
    demoKind: "generic",
    demo: {
      containerClass: "rounded-md bg-teal-500 p-6",
      accentClass: "bg-white text-teal-600 px-5 py-2.5 rounded-md font-medium",
      label: "Flat Button",
      bgClass: "bg-white",
      textClass: "text-white",
    },
  },
  {
    id: "material-design",
    name: "Material Design",
    categoryId: "flat-minimal",
    feel: "Google's system, purposeful elevation",
    cssTell: "elevation shadows, ripple interactions, FAB buttons",
    promptText:
      "Material Design 3 — elevation shadows, rounded cards, ripple click feedback",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-xl bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)]",
      accentClass:
        "bg-indigo-600 text-white px-5 py-2.5 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_2px_rgba(0,0,0,0.15)]",
      label: "FAB Action",
      bgClass: "bg-slate-50",
      textClass: "text-slate-900",
    },
  },
  {
    id: "minimalist",
    name: "Minimalist",
    categoryId: "flat-minimal",
    feel: "Whitespace-heavy, restrained",
    cssTell: "large margins, 1–2 accent colors max, generous line-height",
    promptText:
      "minimalist UI, heavy whitespace, single accent color, restrained typography",
    demoKind: "generic",
    demo: {
      containerClass: "bg-white p-12 border-b border-neutral-200",
      accentClass:
        "text-black border-b-2 border-black px-1 pb-1 font-normal tracking-wide",
      label: "Learn more",
      bgClass: "bg-white",
      textClass: "text-neutral-900",
    },
  },
  {
    id: "neobrutalism",
    name: "Neobrutalism",
    categoryId: "flat-minimal",
    feel: "Raw, high-contrast, anti-polish",
    cssTell:
      "thick black borders, hard offset shadows (no blur), clashing bold colors",
    promptText:
      "neobrutalist UI — thick black borders, hard drop shadow with no blur, bold clashing colors, raw unpolished feel",
    demoKind: "generic",
    demo: {
      containerClass:
        "border-4 border-black bg-yellow-300 p-6 shadow-[8px_8px_0_0_#000]",
      accentClass:
        "bg-fuchsia-500 text-black border-4 border-black px-5 py-2.5 font-bold shadow-[6px_6px_0_0_#000] active:shadow-[2px_2px_0_0_#000] active:translate-x-1 active:translate-y-1",
      label: "SMASH",
      bgClass: "bg-yellow-300",
      textClass: "text-black",
    },
  },
  {
    id: "monochrome-duotone",
    name: "Monochrome / Duotone",
    categoryId: "flat-minimal",
    feel: "Restrained palette",
    cssTell: "grayscale + one accent, or two-tone color mapping",
    promptText:
      "monochrome UI with a single accent color for interactive elements only",
    demoKind: "generic",
    demo: {
      containerClass: "bg-neutral-100 p-6 border border-neutral-300",
      accentClass: "bg-red-600 text-white px-5 py-2.5",
      label: "Accent Action",
      bgClass: "bg-neutral-100",
      textClass: "text-neutral-800",
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Retro / Nostalgic (5: 3 generic, 2 custom)
  // ─────────────────────────────────────────────────────────────
  {
    id: "y2k-aesthetic",
    name: "Y2K aesthetic",
    categoryId: "retro",
    feel: "Chrome, bubbly, early-2000s web",
    cssTell: "glossy buttons, bevels, bright gradients",
    promptText:
      "Y2K web aesthetic — glossy bubble buttons, chrome text, bright gradient backgrounds",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-3xl bg-gradient-to-b from-sky-300 via-blue-400 to-blue-600 p-6 border-2 border-white/60",
      accentClass:
        "bg-gradient-to-b from-white via-sky-200 to-sky-400 text-blue-900 px-6 py-2.5 rounded-full border border-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,50,0.4)] font-bold",
      label: "Enter Site",
      bgClass: "bg-blue-500",
      textClass: "text-white",
    },
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    categoryId: "retro",
    feel: "80s/90s nostalgic, neon + pastel",
    cssTell: "pink/cyan gradients, grid horizons, retro sans typefaces",
    promptText:
      "vaporwave aesthetic, pink-cyan gradient, retro grid background, glitch accents",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-none bg-gradient-to-b from-fuchsia-600 via-purple-600 to-cyan-500 p-6 border-t-4 border-cyan-300",
      accentClass:
        "bg-black/30 text-cyan-200 border border-cyan-300 px-5 py-2.5 tracking-widest uppercase backdrop-blur-sm",
      label: "Aesthetic",
      bgClass: "bg-purple-700",
      textClass: "text-cyan-100",
    },
  },
  {
    id: "retro-futurism",
    name: "Retro-futurism",
    categoryId: "retro",
    feel: "Old sci-fi vision of the future",
    cssTell: "chunky UI, CRT scanlines, amber/green monochrome accents",
    promptText:
      "retro-futuristic terminal UI, scanline overlay, monochrome green-on-black",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-none bg-black p-6 border-2 border-green-500",
      accentClass:
        "bg-black text-green-400 border-2 border-green-500 px-5 py-2.5 font-mono uppercase tracking-widest",
      label: "> Run_",
      bgClass: "bg-black",
      textClass: "text-green-400",
    },
  },
  {
    id: "memphis-design",
    name: "Memphis design",
    categoryId: "retro",
    feel: "Playful geometric shapes, 80s Italian",
    cssTell: "squiggles, confetti shapes, bold primary colors",
    promptText:
      "Memphis-style design, playful geometric confetti shapes, bold primary color palette",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-none bg-yellow-300 p-6 border-4 border-black relative overflow-hidden",
      accentClass:
        "bg-red-500 text-white border-4 border-black px-5 py-2.5 rotate-[-2deg] font-bold",
      label: "Zig Zag!",
      bgClass: "bg-yellow-200",
      textClass: "text-black",
    },
  },
  {
    id: "pixel-art-8bit",
    name: "Pixel art / 8-bit",
    categoryId: "retro",
    feel: "Retro gaming",
    cssTell: "pixelated icons, monospace pixel fonts",
    promptText: "8-bit pixel art UI style, chunky pixelated icons",
    demoKind: "custom",
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Dark & Moody (3: 2 generic, 1 custom)
  // ─────────────────────────────────────────────────────────────
  {
    id: "dark-mode-oled",
    name: "Dark mode / OLED black",
    categoryId: "dark-moody",
    feel: "True black, high contrast",
    cssTell: "#000 or near-black bg, high-contrast text",
    promptText:
      "true dark mode, OLED black background, high contrast white text, minimal color noise",
    demoKind: "generic",
    demo: {
      containerClass: "rounded-lg bg-black p-6 border border-neutral-800",
      accentClass:
        "bg-white text-black px-5 py-2.5 rounded-md font-medium",
      label: "Primary Action",
      bgClass: "bg-black",
      textClass: "text-white",
    },
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    categoryId: "dark-moody",
    feel: "Neon, gritty, high-tech-low-life",
    cssTell: "neon magenta/cyan glow, glitch effects, dark base",
    promptText:
      "cyberpunk UI, neon glow accents on dark background, glitch hover effects",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-md bg-neutral-950 p-6 border border-fuchsia-500/60 shadow-[0_0_20px_rgba(217,70,239,0.35)]",
      accentClass:
        "bg-neutral-950 text-cyan-300 border border-cyan-400 px-5 py-2.5 shadow-[0_0_12px_rgba(34,211,238,0.6)] uppercase tracking-wide",
      label: "Jack In",
      bgClass: "bg-neutral-950",
      textClass: "text-fuchsia-300",
    },
  },
  {
    id: "glitchcore",
    name: "Glitchcore",
    categoryId: "dark-moody",
    feel: "Digital distortion",
    cssTell: "RGB channel split, scan lines, jitter animation",
    promptText: "glitchcore aesthetic — RGB split on hover, subtle screen jitter",
    demoKind: "custom",
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Playful / Organic (4: 2 generic, 2 custom)
  // ─────────────────────────────────────────────────────────────
  {
    id: "blob-shapes",
    name: "Blob shapes",
    categoryId: "playful-organic",
    feel: "Organic, friendly",
    cssTell: "irregular rounded SVG shapes as background accents",
    promptText:
      "organic blob shapes as background decoration, soft irregular curves",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-[60%_40%_55%_45%/45%_55%_40%_60%] bg-teal-200 p-6",
      accentClass:
        "bg-teal-500 text-white px-5 py-2.5 rounded-[70%_30%_50%_50%/50%_50%_30%_70%]",
      label: "Explore",
      bgClass: "bg-teal-50",
      textClass: "text-teal-900",
    },
  },
  {
    id: "doodle-hand-drawn",
    name: "Doodle / Hand-drawn",
    categoryId: "playful-organic",
    feel: "Casual, personal",
    cssTell: "sketchy SVG line icons, imperfect strokes",
    promptText:
      "hand-drawn doodle style icons and dividers, imperfect sketchy lines",
    demoKind: "custom",
  },
  {
    id: "sticker-style",
    name: "Sticker-style",
    categoryId: "playful-organic",
    feel: "Die-cut, bold outline",
    cssTell: "white border simulating a sticker edge, drop shadow",
    promptText:
      "sticker-style cards — white die-cut border, drop shadow, playful",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-full bg-pink-400 p-6 border-[6px] border-white shadow-[0_6px_14px_rgba(0,0,0,0.25)]",
      accentClass:
        "bg-yellow-300 text-black border-4 border-white rounded-full px-5 py-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-bold",
      label: "New!",
      bgClass: "bg-pink-100",
      textClass: "text-white",
    },
  },
  {
    id: "isometric-3d",
    name: "3D isometric",
    categoryId: "playful-organic",
    feel: "Depth, product-illustration feel",
    cssTell: "isometric angle illustrations, soft 3D render style",
    promptText:
      "isometric 3D illustrations for feature sections, soft lighting",
    demoKind: "custom",
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Corporate / Clean Tech (3, all generic)
  // ─────────────────────────────────────────────────────────────
  {
    id: "saas-clean-linear",
    name: "SaaS clean / Linear-style",
    categoryId: "corporate-clean",
    feel: "Precise, restrained, dev-tool feel",
    cssTell: "thin borders, muted grays, tight spacing, subtle accent",
    promptText:
      "Linear-style clean SaaS UI, thin borders, muted neutral palette, precise spacing",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-lg bg-white p-5 border border-neutral-200",
      accentClass:
        "bg-neutral-900 text-white px-4 py-1.5 rounded-md text-sm border border-neutral-900",
      label: "Create issue",
      bgClass: "bg-white",
      textClass: "text-neutral-700",
    },
  },
  {
    id: "notion-style-minimal",
    name: "Notion-style minimal",
    categoryId: "corporate-clean",
    feel: "Content-first, quiet chrome",
    cssTell: "minimal chrome, black/white/gray, content is the hero",
    promptText:
      "Notion-style minimal interface, quiet UI chrome, content-first layout",
    demoKind: "generic",
    demo: {
      containerClass: "bg-white p-6",
      accentClass:
        "bg-neutral-100 text-neutral-700 px-3 py-1 rounded text-sm hover:bg-neutral-200",
      label: "+ New page",
      bgClass: "bg-white",
      textClass: "text-neutral-900",
    },
  },
  {
    id: "enterprise-dashboard",
    name: "Enterprise dashboard",
    categoryId: "corporate-clean",
    feel: "Data-dense, functional",
    cssTell: "dense tables, compact spacing, muted data-viz colors",
    promptText:
      "enterprise dashboard, data-dense tables, compact spacing, functional over decorative",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-md bg-slate-50 p-3 border border-slate-300 text-xs",
      accentClass:
        "bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium",
      label: "Export",
      bgClass: "bg-slate-50",
      textClass: "text-slate-700",
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Layout Keywords (5, all custom)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bento-grid",
    name: "Bento grid",
    categoryId: "layout-keywords",
    feel:
      "Asymmetric grid of varied-size cards (like a Japanese lunchbox) — great for feature showcases/dashboards",
    cssTell:
      "grid grid-cols-4 grid-auto-rows-[minmax(120px,auto)] gap-4 with varied col-span/row-span",
    promptText:
      "bento grid layout, asymmetric card sizes, some cards span 2 columns, visual rhythm",
    demoKind: "custom",
  },
  {
    id: "card-based-layout",
    name: "Card-based layout",
    categoryId: "layout-keywords",
    feel: "Everything in bordered/shadowed containers",
    cssTell:
      "repeated rounded-xl border shadow-sm containers with uniform padding/radius",
    promptText:
      "card-based layout, consistent padding and radius across all cards",
    demoKind: "custom",
  },
  {
    id: "asymmetric-grid",
    name: "Asymmetric grid",
    categoryId: "layout-keywords",
    feel: "Breaks the standard 12-col symmetry",
    cssTell:
      "grid with uneven col-span ratios (e.g. 7/5 or 8/4 split) instead of even halves",
    promptText: "asymmetric grid layout, intentional visual imbalance",
    demoKind: "custom",
  },
  {
    id: "split-screen-hero",
    name: "Split-screen hero",
    categoryId: "layout-keywords",
    feel: "Half image/visual, half text+CTA",
    cssTell: "grid grid-cols-2 with copy+CTA on one side, visual on the other",
    promptText:
      "split-screen hero section, left copy + CTA, right visual/product shot",
    demoKind: "custom",
  },
  {
    id: "sticky-sidebar-nav",
    name: "Sticky sidebar nav",
    categoryId: "layout-keywords",
    feel: "Nav stays fixed while content scrolls",
    cssTell: "sticky top-0 h-screen sidebar beside an independently scrolling main column",
    promptText:
      "sticky sidebar navigation, main content scrolls independently",
    demoKind: "custom",
  },

  // ─────────────────────────────────────────────────────────────
  // 8. New styles batch (T13, from T12 planning) — 21 entries
  // ─────────────────────────────────────────────────────────────

  // 1. Texture / Material additions (+3: 2 generic, 1 custom)
  // AA-verified: text-slate-800 on bg-white/60 backdrop-blur-md (frosted acrylic panel over slate bg) ≈ 8.9:1
  {
    id: "frosted-acrylic",
    name: "Frosted Acrylic",
    categoryId: "texture",
    feel: "Windows Fluent-style opaque frosted panel, warmer/denser than glass",
    cssTell:
      "backdrop-blur-md bg-white/60 border border-white/40 (higher opacity, denser blur than glassmorphism)",
    promptText:
      "frosted acrylic panel, Windows Fluent Design style, dense translucent blur, warm opaque tint, not see-through like glass",
    demoKind: "generic",
    demo: {
      containerClass:
        "backdrop-blur-md bg-white/60 border border-white/40 rounded-xl p-6 shadow-lg",
      accentClass:
        "bg-white/70 border border-white/50 text-slate-800 px-4 py-2 rounded-md backdrop-blur-sm font-medium",
      label: "Acrylic Panel",
      bgClass: "bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700",
      textClass: "text-slate-800",
    },
  },
  // AA-verified: text-zinc-900 on brushed-metal gray gradient base ≈ 7.1:1
  {
    id: "brushed-metal",
    name: "Brushed Metal",
    categoryId: "texture",
    feel: "Directional metallic sheen, early-Mac hardware feel",
    cssTell:
      "repeating-linear-gradient fine diagonal lines over a gray gradient base, subtle highlight",
    promptText:
      "brushed aluminum surface, fine directional metal grain texture, soft specular highlight, Mac OS X Aqua-era hardware look",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-lg bg-[repeating-linear-gradient(115deg,#d4d4d8_0px,#d4d4d8_2px,#e4e4e7_3px,#d4d4d8_4px)] p-6 border border-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_3px_6px_rgba(0,0,0,0.25)]",
      accentClass:
        "bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-900 px-5 py-2.5 rounded-md border border-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] font-medium",
      label: "Brushed Button",
      bgClass: "bg-zinc-500",
      textClass: "text-zinc-900",
    },
  },
  {
    id: "holographic-iridescent",
    name: "Holographic / Iridescent",
    categoryId: "texture",
    feel: "Shifting rainbow sheen, foil-sticker prism effect",
    cssTell:
      "conic-gradient or multi-stop rainbow linear-gradient with soft shimmer overlay",
    promptText:
      "holographic iridescent surface, shifting rainbow foil gradient, prism sheen like a trading card, soft color shift on edges",
    demoKind: "custom",
  },

  // 1b. Texture / Material additions (T27, +2: 1 generic, 1 custom)
  {
    id: "textile-weave",
    name: "Textile Weave",
    categoryId: "texture",
    feel: "Woven fabric surface, cozy tactile grain",
    cssTell:
      "repeating conic/linear-gradient crosshatch mimicking woven thread, subtle fiber-shadow ridges",
    promptText:
      "textile weave texture, subtle woven crosshatch surface pattern mimicking fabric threads, soft tactile fiber shadows, cozy not sterile",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-lg bg-[repeating-linear-gradient(90deg,#d6ccc2_0px,#d6ccc2_3px,#c4b8ab_4px,#c4b8ab_5px),repeating-linear-gradient(0deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_1px,transparent_2px,transparent_5px)] p-6 border border-stone-400/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]",
      accentClass:
        "bg-stone-600 text-stone-50 px-5 py-2.5 rounded-md border border-stone-700 font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
      label: "Woven Panel",
      bgClass: "bg-stone-200",
      textClass: "text-stone-800",
    },
  },
  {
    id: "marble-stone-veining",
    name: "Marble / Stone Veining",
    categoryId: "texture",
    feel: "Cold luxury, natural mineral veining",
    cssTell:
      "layered SVG/gradient veins over a pale stone base, low-opacity crack lines at angles",
    promptText:
      "marble stone surface with natural veining, thin irregular crack-like vein lines over a pale gray-white base, luxury cold-stone feel",
    demoKind: "custom",
  },

  // 2. Flat & Minimal additions (+3, all generic)
  {
    id: "swiss-international-style",
    name: "Swiss / International Style",
    categoryId: "flat-minimal",
    feel: "Grid-locked editorial precision, Helvetica-driven",
    cssTell:
      "strict baseline grid, flush-left type block, red/black-only accent, no decoration",
    promptText:
      "Swiss International Style layout, strict grid alignment, Helvetica-style sans type, red and black only, flush-left hierarchy, no ornament",
    demoKind: "generic",
    demo: {
      containerClass: "bg-white p-8 border-t-2 border-black",
      accentClass:
        "bg-red-600 text-white px-4 py-2 font-semibold tracking-tight",
      label: "01 — Read more",
      bgClass: "bg-white",
      textClass: "text-black",
    },
  },
  {
    id: "brutalist-web",
    name: "Brutalist Web Design",
    categoryId: "flat-minimal",
    feel: "Raw unstyled HTML, anti-design, default browser look",
    cssTell:
      "default serif/system font, blue underlined links, unrounded borders, no shadows",
    promptText:
      "brutalist web design, raw unstyled HTML look, default system fonts and blue underlined links, no border radius, deliberately unpolished",
    demoKind: "generic",
    demo: {
      containerClass: "bg-white p-6 border border-black font-serif",
      accentClass: "text-blue-800 underline decoration-1 font-serif",
      label: "Click here",
      bgClass: "bg-white",
      textClass: "text-black",
    },
  },
  {
    id: "outline-wireframe-ui",
    name: "Outline / Wireframe UI",
    categoryId: "flat-minimal",
    feel: "Skeleton blueprint, structure-only, no fills",
    cssTell:
      "1-2px outline borders only, transparent fills, no shadow, uniform stroke weight",
    promptText:
      "outline wireframe UI, thin uniform stroke borders only, no fill colors, looks like a low-fidelity blueprint",
    demoKind: "generic",
    demo: {
      containerClass: "bg-transparent p-6 border border-slate-400",
      accentClass:
        "bg-transparent border border-slate-500 text-slate-600 px-4 py-2",
      label: "Button",
      bgClass: "bg-white",
      textClass: "text-slate-600",
    },
  },

  // 2b. Flat & Minimal additions (T27, +2, both generic)
  {
    id: "bauhaus-modernism",
    name: "Bauhaus Modernism",
    categoryId: "flat-minimal",
    feel: "Primary-color geometric shapes, form-follows-function school",
    cssTell:
      "flat circles/triangles/squares in red-yellow-blue-black only, no gradients, grid-aligned composition",
    promptText:
      "Bauhaus-style UI, flat primary-color geometric shapes (circle, triangle, square) in red/yellow/blue/black, grid-aligned, form-follows-function",
    demoKind: "generic",
    demo: {
      containerClass:
        "bg-neutral-50 p-6 border-2 border-black grid grid-cols-3 gap-3 place-items-center",
      accentClass:
        "bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black",
      label: "●",
      bgClass: "bg-white",
      textClass: "text-black",
    },
  },
  {
    id: "soft-minimalism-japandi",
    name: "Soft Minimalism / Japandi",
    categoryId: "flat-minimal",
    feel: "Warm muted minimal, Japanese-Scandinavian calm",
    cssTell:
      "low-saturation earth-tone fills, generous whitespace, rounded-sm corners, no stark black",
    promptText:
      "Japandi soft minimalism, warm muted earth-tone palette, generous whitespace, gentle rounded corners, calm and understated — not stark black-and-white minimalism",
    demoKind: "generic",
    demo: {
      containerClass: "rounded-sm bg-stone-100 p-10 border border-stone-300",
      accentClass:
        "bg-stone-700 text-stone-50 px-5 py-2.5 rounded-sm font-normal tracking-wide",
      label: "Continue",
      bgClass: "bg-stone-50",
      textClass: "text-stone-700",
    },
  },

  // 3. Retro additions (+3, all custom)
  {
    id: "windows95-web1",
    name: "Windows 95 / Web 1.0",
    categoryId: "retro",
    feel: "Chunky beveled desktop OS UI, early internet",
    cssTell:
      "border with mismatched light/dark edges simulating 3D bevel, gray #c0c0c0 chrome, MS Sans Serif",
    promptText:
      "Windows 95 desktop UI, gray beveled 3D buttons and panels, chunky title bars, Web 1.0 early-internet look",
    demoKind: "custom",
  },
  {
    id: "terminal-dos-aesthetic",
    name: "Terminal / DOS Aesthetic",
    categoryId: "retro",
    feel: "Command-line, monospace, blinking cursor",
    cssTell:
      "monospace font, black bg, single-color text (green/amber/white), blinking cursor, no rounded corners",
    promptText:
      "DOS terminal aesthetic, monospace green or white text on black, blinking cursor, command-line prompt styling",
    demoKind: "custom",
  },
  {
    id: "cassette-futurism",
    name: "Cassette Futurism",
    categoryId: "retro",
    feel: "70s/80s analog sci-fi hardware, tape-deck knobs and dials",
    cssTell:
      "beige/orange plastic-panel gradients, chunky physical-knob shapes, LED-segment digit fonts",
    promptText:
      "cassette futurism UI, analog 1970s-80s sci-fi hardware look, beige and orange plastic panels, chunky knobs and LED-segment readouts",
    demoKind: "custom",
  },

  // 3b. Retro additions (T27, +2, both custom)
  {
    id: "art-deco",
    name: "Art Deco",
    categoryId: "retro",
    feel: "1920s geometric luxury, gilded symmetry",
    cssTell:
      "symmetrical fan/sunburst motifs, gold-on-black linework, thin geometric borders",
    promptText:
      "Art Deco style, 1920s geometric luxury, symmetrical sunburst and fan motifs, gold linework on black, elegant ornamental borders",
    demoKind: "custom",
  },
  {
    id: "risograph-print",
    name: "Risograph Print",
    categoryId: "retro",
    feel: "Grainy limited-palette poster print, slight misregistration",
    cssTell:
      "2-3 flat spot-color layers with grain texture, deliberate slight color-offset misalignment",
    promptText:
      "risograph print aesthetic, grainy limited 2-3 spot-color palette, slightly misregistered overlapping color layers, indie zine poster feel",
    demoKind: "custom",
  },

  // 4. Dark & Moody additions (+3: 1 generic, 2 custom)
  {
    id: "noir-film-grain",
    name: "Noir / Film Grain",
    categoryId: "dark-moody",
    feel: "High-contrast black and white, cinematic grain, detective-story mood",
    cssTell:
      "grayscale filter + SVG film-grain overlay, hard directional shadow, desaturated",
    promptText:
      "film noir UI, high-contrast black and white, grainy film texture overlay, dramatic hard-edged shadow lighting",
    demoKind: "custom",
  },
  // AA-verified: text-red-50 on near-black gothic panel bg-neutral-950 ≈ 17.8:1
  {
    id: "gothic-horror-ui",
    name: "Gothic / Horror UI",
    categoryId: "dark-moody",
    feel: "Ornate darkness, blood-red accents, unsettling elegance",
    cssTell:
      "near-black bg, deep-red/crimson accent, serif/blackletter-adjacent display type, thin ornate borders",
    promptText:
      "gothic horror UI, near-black background with deep crimson red accents, ornate thin borders, dramatic serif display type",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-sm bg-neutral-950 p-6 border border-red-900/60 shadow-[0_0_25px_rgba(127,29,29,0.4)]",
      accentClass:
        "bg-neutral-950 text-red-100 border border-red-800 px-5 py-2.5 font-serif tracking-wide",
      label: "Enter the Crypt",
      bgClass: "bg-neutral-950",
      textClass: "text-red-50",
    },
  },
  {
    id: "deep-space",
    name: "Deep Space",
    categoryId: "dark-moody",
    feel: "Vast cosmic dark, starfield, distant nebula glow",
    cssTell:
      "radial-gradient starfield dots on near-black, soft indigo/violet nebula blur blobs",
    promptText:
      "deep space UI, near-black background with a subtle starfield of tiny dots, soft distant nebula glow in indigo and violet",
    demoKind: "custom",
  },

  // 4b. Dark & Moody additions (T27, +2: 1 generic, 1 custom)
  {
    id: "midnight-academia",
    name: "Midnight Academia",
    categoryId: "dark-moody",
    feel: "Dark scholarly library mood, brass and leather",
    cssTell:
      "deep brown/near-black bg, warm brass/gold accent, serif display type, subtle vignette",
    promptText:
      "midnight academia UI, deep brown near-black background, warm brass and gold accents, classic serif type, dim library-at-night mood",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-md bg-[radial-gradient(ellipse_at_center,#2a2018_0%,#160f0a_100%)] p-6 border border-amber-800/50",
      accentClass:
        "bg-[#160f0a] text-amber-300 border border-amber-600/70 px-5 py-2.5 font-serif tracking-wide",
      label: "Open the Ledger",
      bgClass: "bg-[#160f0a]",
      textClass: "text-amber-100",
    },
  },
  {
    id: "bioluminescent-glow",
    name: "Bioluminescent Glow",
    categoryId: "dark-moody",
    feel: "Deep-sea dark, organic teal-green glow",
    cssTell:
      "near-black bg with soft teal/emerald glow blooms (blur-2xl), glow follows organic curved shapes not neon straight lines",
    promptText:
      "bioluminescent deep-sea UI, near-black background with soft glowing teal-green organic light blooms, natural luminous glow — not sharp cyberpunk neon",
    demoKind: "custom",
  },

  // 5. Playful / Organic additions (+3: 1 generic, 2 custom)
  // AA-verified: text-pink-950 on bg-pink-100 kawaii panel ≈ 9.8:1
  {
    id: "kawaii-cute-ui",
    name: "Kawaii / Cute UI",
    categoryId: "playful-organic",
    feel: "Pastel, rounded, mascot-friendly, Japanese cute culture",
    cssTell:
      "very high border-radius, pastel pink/mint fills, small face/blush details on shapes",
    promptText:
      "kawaii cute UI, pastel pink and mint colors, extremely rounded soft shapes, cute mascot-style details",
    demoKind: "generic",
    demo: {
      containerClass: "rounded-[3rem] bg-pink-100 p-6 border-2 border-pink-200",
      accentClass:
        "bg-pink-300 text-pink-950 px-6 py-2.5 rounded-full border-2 border-pink-200 font-semibold",
      label: "( ˶ˆ ᗜ ˆ˵ )",
      bgClass: "bg-emerald-50",
      textClass: "text-pink-950",
    },
  },
  {
    id: "papercraft-collage",
    name: "Papercraft / Collage",
    categoryId: "playful-organic",
    feel: "Cut-paper layered scrapbook, tactile depth",
    cssTell:
      "layered rotated cards with torn-edge clip-paths, subtle drop-shadow per layer mimicking stacked paper",
    promptText:
      "papercraft collage UI, layered cut-paper shapes with slight rotation, torn-edge borders, scrapbook-style stacked shadows",
    demoKind: "custom",
  },
  {
    id: "crayon-scribble",
    name: "Crayon / Scribble",
    categoryId: "playful-organic",
    feel: "Childlike hand-colored texture, waxy uneven fill",
    cssTell:
      "SVG feTurbulence filter to roughen edges, uneven crayon-stroke borders, bright saturated hand-colored fill",
    promptText:
      "crayon and scribble style UI, waxy uneven hand-colored fills, rough scribbled borders, childlike playful texture",
    demoKind: "custom",
  },

  // 5b. Playful / Organic additions (T27, +2, both custom)
  {
    id: "felt-plush-toy",
    name: "Felt / Plush Toy",
    categoryId: "playful-organic",
    feel: "Soft fabric-toy tactility, stitched seams",
    cssTell:
      "fuzzy-edge radial gradient shading + dashed stitch-line borders mimicking felt seams, muted toy colors",
    promptText:
      "felt plush toy style, soft fuzzy fabric shading, visible dashed stitch-seam borders, muted cozy toy colors, tactile handmade feel",
    demoKind: "custom",
  },
  {
    id: "picnic-pastel-gingham",
    name: "Picnic Pastel Gingham",
    categoryId: "playful-organic",
    feel: "Warm checkered pastel, summer-picnic cheer",
    cssTell:
      "gingham/checkerboard background pattern in pastel two-tone, scalloped-edge card borders",
    promptText:
      "picnic pastel gingham style, soft pastel checkerboard background pattern, scalloped card edges, warm cheerful summer-picnic feel",
    demoKind: "custom",
  },

  // 6. Corporate / Clean Tech additions (+3: 2 generic, 1 custom)
  {
    id: "fintech-precision",
    name: "Fintech Precision",
    categoryId: "corporate-clean",
    feel: "Trustworthy data-forward, tabular-numeral rigor",
    cssTell:
      "tabular-nums monospace numerals, deep navy/emerald palette, crisp 1px dividers, right-aligned data",
    promptText:
      "fintech precision UI, deep navy and emerald palette, tabular monospace numbers, crisp thin dividers, right-aligned financial data",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-md bg-slate-900 p-5 border border-slate-700 divide-y divide-slate-700",
      accentClass:
        "bg-emerald-600 text-white px-4 py-1.5 rounded text-sm font-mono tabular-nums",
      label: "+2.4%",
      bgClass: "bg-slate-900",
      textClass: "text-slate-100",
    },
  },
  {
    id: "editorial-magazine-grid",
    name: "Editorial / Magazine Grid",
    categoryId: "corporate-clean",
    feel: "Print-inspired column grid, serif headlines, pull quotes",
    cssTell:
      "multi-column text grid, large serif display headline, thin rule dividers between sections",
    promptText:
      "editorial magazine-style layout, multi-column text grid, large serif headline, thin horizontal rule dividers, pull-quote callouts",
    demoKind: "custom",
  },
  {
    id: "government-utilitarian",
    name: "Government / .gov Utilitarian",
    categoryId: "corporate-clean",
    feel: "Plain, accessible-first, zero-decoration bureaucratic",
    cssTell:
      "high-contrast blue links, system font stack, visible focus rings, boxy unstyled form fields",
    promptText:
      "government .gov style utilitarian UI, plain system fonts, high-contrast blue links, visible accessible focus outlines, no decorative styling",
    demoKind: "generic",
    demo: {
      containerClass: "bg-white p-6 border border-neutral-400",
      accentClass:
        "bg-blue-800 text-white px-4 py-2 rounded-none ring-2 ring-offset-2 ring-blue-900 font-medium",
      label: "Submit application",
      bgClass: "bg-neutral-50",
      textClass: "text-neutral-900",
    },
  },

  // 6b. Corporate / Clean Tech additions (T27, +2: 1 generic, 1 custom)
  {
    id: "developer-console-dark",
    name: "Developer Console Dark",
    categoryId: "corporate-clean",
    feel: "Dark-mode dev-tool chrome, terminal-adjacent SaaS",
    cssTell:
      "near-black bg, monospace labels, thin 1px slate borders, single cool accent (blue/violet) on dark",
    promptText:
      "developer console dark UI, near-black background, monospace labels for technical data, thin slate borders, single cool accent color, dev-tool precision",
    demoKind: "generic",
    demo: {
      containerClass:
        "rounded-md bg-neutral-950 p-5 border border-slate-800 font-mono text-xs",
      accentClass:
        "bg-violet-600 text-white px-4 py-1.5 rounded text-xs font-mono border border-violet-500",
      label: "$ deploy",
      bgClass: "bg-neutral-950",
      textClass: "text-slate-300",
    },
  },
  {
    id: "command-palette-first",
    name: "Command Palette First",
    categoryId: "corporate-clean",
    feel: "Keyboard-driven, ⌘K-centric power-user chrome",
    cssTell:
      "centered floating search-input modal with kbd-styled shortcut hints, fuzzy-match result list below",
    promptText:
      "command palette first UI, centered floating ⌘K search modal with keyboard shortcut badges, fuzzy-searchable action list, power-user keyboard-driven design",
    demoKind: "custom",
  },

  // 7. Layout Keywords additions (+3, all custom, matches existing 5)
  {
    id: "masonry-grid",
    name: "Masonry Grid",
    categoryId: "layout-keywords",
    feel: "Pinterest-style variable-height column-packed layout",
    cssTell:
      "CSS columns-3 gap-4 with break-inside-avoid items of varied natural height, no row alignment",
    promptText:
      "masonry grid layout, Pinterest-style columns packing variable-height cards with no row alignment",
    demoKind: "custom",
  },
  {
    id: "z-pattern-layout",
    name: "Z-Pattern Layout",
    categoryId: "layout-keywords",
    feel: "Eye-scan-guided diagonal flow across a landing page",
    cssTell:
      "content and CTAs placed along an implied Z path — top-left logo, top-right nav, diagonal to mid visual, bottom-right CTA",
    promptText:
      "Z-pattern landing page layout, content and CTA positioned along the natural top-left to bottom-right eye-scan path",
    demoKind: "custom",
  },
  {
    id: "timeline-vertical-feed",
    name: "Timeline / Vertical Feed",
    categoryId: "layout-keywords",
    feel: "Chronological single-column feed with connecting spine",
    cssTell:
      "vertical connecting line threading through stacked timestamped entries, alternating or left-aligned nodes",
    promptText:
      "vertical timeline feed layout, connecting line threading through chronological stacked entries with timestamp markers",
    demoKind: "custom",
  },

  // 7b. Layout Keywords additions (T27, +2, both custom)
  {
    id: "diagonal-split-layout",
    name: "Diagonal Split Layout",
    categoryId: "layout-keywords",
    feel: "Angled section divider cutting across the page",
    cssTell:
      "clip-path polygon or skew-transform creating an angled boundary between two content blocks, not a straight vertical split",
    promptText:
      "diagonal split layout, angled clip-path divider cutting across the section at a slant instead of a straight vertical line, dynamic asymmetric energy",
    demoKind: "custom",
  },
  {
    id: "modular-scale-grid",
    name: "Modular Scale Grid",
    categoryId: "layout-keywords",
    feel: "Strict typographic modular-scale rhythm",
    cssTell:
      "column/row tracks and font sizes both derived from one ratio (e.g. 1.25×), uniform rhythm across every element",
    promptText:
      "modular scale grid layout, every spacing and font size derived from one consistent ratio, strict mathematical rhythm across the whole page",
    demoKind: "custom",
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Visual Effect (9: 2 generic, 7 custom) — hover/interaction/
  //    animation patterns, distinct from the visual STYLES above.
  // ─────────────────────────────────────────────────────────────
  {
    id: "hover-glow",
    name: "Hover Glow",
    categoryId: "visual-effect",
    feel: "Soft luminous halo that blooms around an element on hover",
    cssTell:
      "transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(...)] on a solid-fill button",
    promptText:
      "hover glow effect, soft colored shadow bloom expanding around a button on hover with a smooth transition",
    demoKind: "generic",
    demo: {
      containerClass: "flex flex-col items-center gap-4",
      accentClass:
        "bg-violet-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-[0_0_0_rgba(139,92,246,0)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.7)]",
      label: "Hover me",
      bgClass: "bg-slate-100",
      textClass: "text-slate-400 text-sm",
    },
  },
  {
    id: "animated-underline",
    name: "Animated Underline",
    categoryId: "visual-effect",
    feel: "Playful, confident link affordance that draws itself in",
    cssTell:
      "absolute span with scale-x-0 origin-left, transition-transform, group-hover:scale-x-100",
    promptText:
      "animated underline hover effect, thin colored bar scaling in from left to right beneath a text link on hover",
    demoKind: "custom",
  },
  {
    id: "ripple-click",
    name: "Ripple Click",
    categoryId: "visual-effect",
    feel: "Material-style tactile feedback radiating from the click point",
    cssTell:
      "onClick spawns an absolutely-positioned circle at cursor coords, animates scale(0)->scale(1) + fade, then unmounts",
    promptText:
      "material design ripple click effect, circular wave expanding and fading outward from the exact click point on a button",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "magnetic-button",
    name: "Magnetic Button",
    categoryId: "visual-effect",
    feel: "Button that feels pulled toward the cursor like a magnet",
    cssTell:
      "onMouseMove computes cursor offset from center, applies translate() transform, snaps back to (0,0) on mouse leave",
    promptText:
      "magnetic button hover effect, button subtly translates toward the cursor position as it approaches, springs back on leave",
    demoKind: "custom",
  },
  {
    id: "cursor-trail",
    name: "Cursor-Follow Trail",
    categoryId: "visual-effect",
    feel: "Playful particle trail chasing the pointer across a surface",
    cssTell:
      "onMouseMove imperatively appends throttled dot elements at cursor position, fades + shrinks each via transition, then removes",
    promptText:
      "cursor-follow trail effect, small gradient dots spawning at the pointer position and fading out as the cursor moves",
    demoKind: "custom",
  },
  {
    id: "particle-burst",
    name: "Particle Burst",
    categoryId: "visual-effect",
    feel: "Satisfying celebratory scatter triggered by a click",
    cssTell:
      "onClick spawns N particles at click point, each animates translate(--x,--y) + fade via a shared keyframe with per-particle CSS custom properties",
    promptText:
      "particle burst click effect, colorful dots exploding outward in a ring and fading from the exact click point",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "skeleton-shimmer",
    name: "Skeleton Loading Shimmer",
    categoryId: "visual-effect",
    feel: "Calm, modern loading-state placeholder that implies content is coming",
    cssTell:
      "gray placeholder blocks with a diagonal gradient band animated via background-position keyframe sweep",
    promptText:
      "skeleton loading shimmer effect, gray placeholder blocks with a diagonal light band sweeping across continuously",
    demoKind: "custom",
  },
  {
    id: "tilt-3d-hover",
    name: "3D Tilt on Hover",
    categoryId: "visual-effect",
    feel: "Tactile, physical card that responds to cursor like it has depth",
    cssTell:
      "onMouseMove maps cursor position within bounds to rotateX/rotateY via inline transform, perspective() wrapper, resets on leave",
    promptText:
      "3D tilt hover effect, card rotates on X and Y axes following cursor position within its bounds, perspective depth feel",
    demoKind: "custom",
  },
  {
    id: "elastic-bounce",
    name: "Elastic Bounce",
    categoryId: "visual-effect",
    feel: "Springy, toy-like overshoot when an element is triggered",
    cssTell:
      "keyframe scale sequence overshooting past 1 then settling (0% -> 1.18 -> 0.94 -> 1.05 -> 1), applied via hover:animate-[...]",
    promptText:
      "elastic bounce effect, element overshoots past its target scale and settles with a springy squash-and-stretch motion",
    demoKind: "generic",
    demo: {
      containerClass: "flex flex-col items-center gap-4",
      accentClass:
        "bg-gradient-to-br from-emerald-400 to-teal-500 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg transition-transform hover:animate-[elastic-pop_0.55s_ease-in-out]",
      label: "Hover me",
      bgClass: "bg-slate-50",
      textClass: "text-slate-400 text-sm",
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Component (9, all custom, all interactive) — real clickable,
  //    keyboard-navigable UI components rather than decorative styles.
  // ─────────────────────────────────────────────────────────────
  {
    id: "modal",
    name: "Modal",
    categoryId: "component",
    feel: "Focused overlay, blocks background interaction until dismissed",
    cssTell:
      "fixed-position overlay panel, backdrop dim, focus-trapped, Escape/backdrop-click to close",
    promptText:
      "accessible modal dialog, dimmed backdrop, centered panel, Escape key and backdrop click both close it, focus returns to the trigger on close",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "dropdown",
    name: "Dropdown",
    categoryId: "component",
    feel: "Compact menu that expands from a trigger to reveal a list of choices",
    cssTell:
      "trigger button with aria-haspopup, absolutely-positioned option list anchored below, closes on select/Escape/outside click",
    promptText:
      "accessible dropdown menu, click or keyboard to open, arrow keys move between options, Enter selects, Escape closes and returns focus to the trigger",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "tabs",
    name: "Tabs",
    categoryId: "component",
    feel: "Switches between related content panels without leaving the page",
    cssTell:
      "role=tablist container, active tab gets an elevated/underlined treatment, roving tabindex across triggers",
    promptText:
      "accessible tabs component, click a tab to switch panels, arrow-key navigation between tab triggers, active tab visually distinct",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "accordion",
    name: "Accordion",
    categoryId: "component",
    feel: "Progressive disclosure — collapsed by default, expands on demand",
    cssTell:
      "stacked header buttons with a chevron that rotates on expand, animated max-height or hidden-attribute panel",
    promptText:
      "accessible accordion, single section open at a time, chevron rotates on expand, Enter or Space toggles the focused header",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "toast",
    name: "Toast",
    categoryId: "component",
    feel: "Brief, non-blocking confirmation that appears and dismisses itself",
    cssTell:
      "fixed-corner notification, slide/fade-in entrance, auto-dismiss timer with a manual close affordance",
    promptText:
      "toast notification, appears in the bottom corner after an action, auto-dismisses after a few seconds, includes a manual dismiss button, does not block the rest of the UI",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    categoryId: "component",
    feel: "Small contextual hint that appears next to an element on demand",
    cssTell:
      "absolutely-positioned label bubble with a small pointer/arrow, shows on hover or focus, fades in",
    promptText:
      "accessible tooltip, shows on hover and on keyboard focus (not hover-only), small arrow pointing to the trigger, dismisses on Escape or blur",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "pagination",
    name: "Pagination",
    categoryId: "component",
    feel: "Lets a user step through a long list broken into discrete pages",
    cssTell:
      "row of numbered buttons plus prev/next chevrons, active page visually highlighted, bounds disable prev/next",
    promptText:
      "accessible pagination control, numbered page buttons plus previous/next arrows, current page clearly highlighted, edges disable the out-of-range direction",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    categoryId: "component",
    feel: "Shows the current page's position within a hierarchy, each level clickable",
    cssTell:
      "ordered list of links separated by chevrons, final crumb rendered as plain text (not a link)",
    promptText:
      "accessible breadcrumb trail, ordered list of ancestor links separated by chevron dividers, current page shown as plain non-interactive text",
    demoKind: "custom",
    interactive: true,
  },
  {
    id: "stepper",
    name: "Stepper",
    categoryId: "component",
    feel: "Guides a user through a linear multi-step process with clear progress",
    cssTell:
      "row of numbered/checked circles connected by a progress line, active step highlighted, Next/Back buttons drive state",
    promptText:
      "accessible multi-step stepper, numbered circles connected by a line, completed steps show a checkmark, Next and Back buttons advance the active step",
    demoKind: "custom",
    interactive: true,
  },
];
