# Web UI Style Cheatsheet — for Vibe Coders & AI Agent Prompts

Reference sheet for prompting Claude/Cursor/v0/Lovable/ChatGPT to build web UI. Each style has: **what it means**, **the actual CSS/Tailwind tells**, and a **ready-to-paste prompt line**.

Confirmed against current design references (2026): glassmorphism, neumorphism, claymorphism, neobrutalism, and bento grids are all still active, mainstream styles — not just internet buzzwords.

---

## 1. Texture / Material Styles

| Keyword | Feel | Tailwind/CSS tell | Paste-ready prompt |
|---|---|---|---|
| **Glassmorphism** | Frosted glass, floating, futuristic | `backdrop-blur-lg bg-white/10 border border-white/20` | "glassmorphism cards with backdrop blur, semi-transparent white background, thin light border, floating over a gradient" |
| **Claymorphism** | Puffy, soft, toy-like, playful | large `border-radius`, soft double drop-shadow (light+dark), pastel fills | "claymorphic UI — rounded puffy elements, soft inner glow, pastel colors, looks squishable" |
| **Neumorphism / Soft UI** | Pressed into the surface, monochrome | dual soft shadows (light top-left, dark bottom-right) on a background-matching fill | "neumorphic soft UI, elements extruded from a single-color background, subtle dual shadows, no borders" |
| **Skeuomorphism** | Real-world material mimicry | textures (leather, brushed metal, wood grain), realistic gradients | "skeuomorphic control panel — mimics a physical dashboard with metal and leather textures" |
| **Liquid Glass** (Apple-style) | Refractive, physical glass, bends background | high blur + specular highlight + subtle distortion | "Apple-style liquid glass panel, refracts the background behind it, subtle specular highlight on edges" |
| **Aurora / Gradient mesh** | Premium, ambient, soft-glow background | multi-color radial gradients blended, often `blur-3xl` positioned blobs behind content | "aurora gradient mesh background, soft blurred color blobs in purple/teal, premium landing page feel" |
| **Grainy gradient / Noise** | Textured, editorial, not flat-dead | gradient + SVG noise overlay at low opacity | "gradient background with subtle grain/noise texture overlay, avoids flat dead gradient look" |
| **Chrome / Liquid metal** | Reflective, futuristic, AI-brand feel | high-contrast linear gradient mimicking metal reflection, often on text/logo | "chrome liquid metal text effect, reflective gradient, futuristic AI-product feel" |

---

## 2. Flat & Minimal

| Keyword | Feel | Tell | Prompt |
|---|---|---|---|
| **Flat design** | Clean, no shadow, no gradient | solid fills, 2D icons | "flat design, no shadows or gradients, solid color blocks, clean geometric icons" |
| **Material Design** | Google's system, purposeful elevation | `elevation` shadows, ripple interactions, FAB buttons | "Material Design 3 — elevation shadows, rounded cards, ripple click feedback" |
| **Minimalist** | Whitespace-heavy, restrained | large margins, 1–2 accent colors max, generous line-height | "minimalist UI, heavy whitespace, single accent color, restrained typography" |
| **Neobrutalism** | Raw, high-contrast, anti-polish | thick black borders, hard offset shadows (no blur), clashing bold colors | "neobrutalist UI — thick black borders, hard drop shadow with no blur, bold clashing colors, raw unpolished feel" |
| **Monochrome / Duotone** | Restrained palette | grayscale + one accent, or two-tone color mapping | "monochrome UI with a single accent color for interactive elements only" |

---

## 3. Retro / Nostalgic

| Keyword | Feel | Tell | Prompt |
|---|---|---|---|
| **Y2K aesthetic** | Chrome, bubbly, early-2000s web | glossy buttons, bevels, bright gradients | "Y2K web aesthetic — glossy bubble buttons, chrome text, bright gradient backgrounds" |
| **Vaporwave** | 80s/90s nostalgic, neon + pastel | pink/cyan gradients, grid horizons, retro sans typefaces | "vaporwave aesthetic, pink-cyan gradient, retro grid background, glitch accents" |
| **Retro-futurism** | Old sci-fi vision of the future | chunky UI, CRT scanlines, amber/green monochrome accents | "retro-futuristic terminal UI, scanline overlay, monochrome green-on-black" |
| **Memphis design** | Playful geometric shapes, 80s Italian | squiggles, confetti shapes, bold primary colors | "Memphis-style design, playful geometric confetti shapes, bold primary color palette" |
| **Pixel art / 8-bit** | Retro gaming | pixelated icons, monospace pixel fonts | "8-bit pixel art UI style, chunky pixelated icons" |

---

## 4. Dark & Moody

| Keyword | Feel | Tell | Prompt |
|---|---|---|---|
| **Dark mode / OLED black** | True black, high contrast | `#000` or near-black bg, high-contrast text | "true dark mode, OLED black background, high contrast white text, minimal color noise" |
| **Cyberpunk** | Neon, gritty, high-tech-low-life | neon magenta/cyan glow, glitch effects, dark base | "cyberpunk UI, neon glow accents on dark background, glitch hover effects" |
| **Glitchcore** | Digital distortion | RGB channel split, scan lines, jitter animation | "glitchcore aesthetic — RGB split on hover, subtle screen jitter" |

---

## 5. Playful / Organic

| Keyword | Feel | Tell | Prompt |
|---|---|---|---|
| **Blob shapes** | Organic, friendly | irregular rounded SVG shapes as background accents | "organic blob shapes as background decoration, soft irregular curves" |
| **Doodle / Hand-drawn** | Casual, personal | sketchy SVG line icons, imperfect strokes | "hand-drawn doodle style icons and dividers, imperfect sketchy lines" |
| **Sticker-style** | Die-cut, bold outline | white border simulating a sticker edge, drop shadow | "sticker-style cards — white die-cut border, drop shadow, playful" |
| **3D isometric** | Depth, product-illustration feel | isometric angle illustrations, soft 3D render style | "isometric 3D illustrations for feature sections, soft lighting" |

---

## 6. Corporate / Clean Tech (best default for SaaS)

| Keyword | Feel | Tell | Prompt |
|---|---|---|---|
| **SaaS clean / Linear-style** | Precise, restrained, dev-tool feel | thin borders, muted grays, tight spacing, subtle accent | "Linear-style clean SaaS UI, thin borders, muted neutral palette, precise spacing" |
| **Notion-style minimal** | Content-first, quiet chrome | minimal chrome, black/white/gray, content is the hero | "Notion-style minimal interface, quiet UI chrome, content-first layout" |
| **Enterprise dashboard** | Data-dense, functional | dense tables, compact spacing, muted data-viz colors | "enterprise dashboard, data-dense tables, compact spacing, functional over decorative" |

---

## 7. Layout Keywords (combine with any style above)

| Keyword | What it does | Prompt |
|---|---|---|
| **Bento grid** | Asymmetric grid of varied-size cards (like a Japanese lunchbox) — great for feature showcases/dashboards | "bento grid layout, asymmetric card sizes, some cards span 2 columns, visual rhythm" |
| **Card-based layout** | Everything in bordered/shadowed containers | "card-based layout, consistent padding and radius across all cards" |
| **Asymmetric grid** | Breaks the standard 12-col symmetry | "asymmetric grid layout, intentional visual imbalance" |
| **Split-screen hero** | Half image/visual, half text+CTA | "split-screen hero section, left copy + CTA, right visual/product shot" |
| **Sticky sidebar nav** | Nav stays fixed while content scrolls | "sticky sidebar navigation, main content scrolls independently" |

---

## Practical notes for prompting AI agents

- **Name the CSS mechanism, not just the vibe.** "Glassmorphism" alone is vaguer to an agent than "backdrop-blur-lg + bg-white/10 + border border-white/20." Both together = best results.
- **Pick ONE hero style + at most one layout keyword.** Stacking 3+ style keywords (e.g. glassmorphism + neumorphism + neobrutalism) confuses agents into a muddy mix. Bento grid is the exception — it's a layout, not a texture, so it pairs cleanly with anything.
- **Accessibility flag for glass/neumorphic styles:** always add "ensure text contrast passes WCAG AA" — both styles are notorious for low-contrast text on real implementations.
- **Reference a real product when possible.** "like Linear," "like Stripe docs," "like Arc browser" often out-performs the keyword alone because the agent has seen that product's actual DOM patterns in training.

---

*Compiled ka — want Minju to turn any single row into a full ready-to-paste system prompt for a specific project (e.g. "SaaS landing page, glassmorphism + bento")?*
