# Implement: StartYou UI — Left Sidebar Redesign

## Context

You're working in the **StartYou UI** codebase (React 19 + React Router 7 + Tailwind v4 + Vite), a live-rendered reference site for web UI style keywords. The site is built entirely on a **Claymorphism** design system already defined in `src/index.css` (`--shadow-clay`, `--shadow-clay-sm`, `--shadow-clay-inset` custom properties, plus a hand-written `.dark` override block — read the comment above that block before touching it, it explains why dark-mode shadows can't just be a redefined CSS variable under Tailwind v4).

Reference mockups for the new design live in `redesign-preview/` at the project root (`index.html`, `category-texture.html`, `glossary.html`, `blog.html`, `mobile-nav.html`) — open them in a browser before starting. They are static HTML approximations of the target, not literal markup to copy — port the *structure and Tailwind classes*, not raw inline styles.

## What's changing

**Navigation moves from a top bar to a persistent left sidebar.** Today `ClayShell.tsx` renders a horizontal header (logo + `CategoryTabs` pill row + Blog/About links + theme toggle) that runs out of horizontal room with 10 categories. Replace it with a `260px` sticky left sidebar containing:

1. Logo + "StartYou UI" wordmark
2. A search input (visual only for now — no filtering logic required unless you want to wire it to something client-side simple; do not invent a backend)
3. All 10 category links as a vertical icon+label list (reuse `categories.ts` — nothing changes there)
4. A divider, then Blog + About as a smaller utility group
5. A footer row pinned to the bottom of the sidebar with the theme toggle

Everything else about the app's behavior, routes, and data files stays the same. This is a shell/layout change, not a content or routing change.

## Files to touch

### 1. `src/layouts/ClayShell.tsx` — the main change

Restructure from a `<header>` + `<main>` vertical stack into a `<div style="display:flex">` with:

- A `<Sidebar>` component (new file, see below), `w-[260px] shrink-0`, `sticky top-*`
- A `<main>` content column, `flex-1 min-w-0`, that wraps `<Outlet />` + `<Footer />`

Keep the existing gradient background (`bg-gradient-to-br from-[#fdf1e7] via-[#eef3ff] to-[#f6ecff] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900`) on the outermost wrapper.

Mobile: below `md`, the sidebar must collapse into a hamburger-triggered slide-in drawer (see `redesign-preview/mobile-nav.html` for the exact target). Do **not** build a second, separate mobile-only component with duplicated markup — the same sidebar content should render as a `fixed` overlay on mobile and a normal sticky column on desktop, toggled by a small piece of local state (`useState` in `ClayShell` or the new `Sidebar` component) and Tailwind's `md:` responsive classes. A top bar with just logo + hamburger + theme toggle should render only below `md`.

### 2. `src/components/nav/Sidebar.tsx` — new file, replaces `CategoryTabs.tsx`'s role in the shell

Move the category-icon-resolution logic here (same `iconMap` pattern already used in `CategoryTabs.tsx` / `Home.tsx` — don't invent a new convention). Render:

```
<NavLink to={category.path}>
  <Icon />
  {category.label}
</NavLink>
```

for each entry in `categories` (from `data/categories.ts`, unchanged). Active state: reuse the existing pattern from `CategoryTabs.tsx` — `scale-[0.98] bg-gradient-to-br from-violet-200 to-pink-200 shadow-clay-inset dark:from-violet-500/40 dark:to-pink-500/40` — applied to the whole row, not just a pill, since rows are now full-width.

`CategoryTabs.tsx` becomes dead code once `Sidebar.tsx` replaces its usage in `ClayShell.tsx` — either delete it or leave it unimported per your preference, but don't leave two components doing the same lookup with copy-pasted `iconMap`s; if you keep both, extract the icon map to a shared `lib/categoryIcons.ts` instead of duplicating it a third time.

### 3. Pages that assume a wide top-level layout — reflow, don't rewrite

Every category page (`TexturePage.tsx`, `FlatMinimalPage.tsx`, `RetroPage.tsx`, `DarkMoodyPage.tsx`, `PlayfulOrganicPage.tsx`, `CorporateCleanPage.tsx`, `LayoutKeywordsPage.tsx`, `VisualEffectPage.tsx`, `UxUiKeywordPage.tsx`, `ComponentPage.tsx`) currently renders its style grid as `grid-cols-1 md:grid-cols-2`. **Leave the grid breakpoints as they are** — with the content column now narrower (viewport minus 260px sidebar instead of full width), the existing `md:grid-cols-2` will naturally read as fewer columns at the same breakpoints. Don't add a third column tier; the reference mockups use 2-col throughout the content area for this reason.

`Home.tsx`'s category grid is currently `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. Per the reference mockup, drop the `lg:grid-cols-3` tier to `lg:grid-cols-2` — three columns doesn't fit comfortably beside the sidebar at common desktop widths.

No page needs new props or new data shapes. `StylePreviewCard.tsx`, `StyleInfoPanel.tsx`, `PreviewFrame.tsx`, `CopyBox.tsx`, `GlossaryTermCard.tsx`, `BlogLevelPage.tsx`, `BlogIndex.tsx`, `About.tsx` are all unaffected by this change — their content sits inside the new narrower column exactly as it does today, no edits needed unless you spot actual visual breakage after reflow.

### 4. `Footer.tsx`

No structural change. It currently sits below `<Outlet />` inside `ClayShell.tsx`'s `<main>` — keep it there, just inside the new content column instead of full-width.

## Design tokens — reuse, do not reinvent

Everything below already exists in `src/index.css` / is already used across the codebase. The redesign uses **zero new tokens**:

- `shadow-clay`, `shadow-clay-sm`, `shadow-clay-inset` utility classes (defined via `@theme` in `index.css`, with the `.dark` override block directly below them — see the comment there for why)
- `bg-gradient-to-br from-pink-200 to-violet-200` for icon chips
- `bg-gradient-to-br from-violet-200 to-pink-200` (note reversed stop order) for active/pressed states, paired with `shadow-clay-inset`
- `rounded-[2rem]` / `rounded-[3rem]` for cards and the sidebar shell; smaller nested elements use Tailwind's standard `rounded-xl`/`rounded-2xl` scale
- `dark:bg-slate-800/80`, `dark:bg-slate-700/60` etc. for dark-mode card/pill backgrounds — every new element needs a `dark:` counterpart, matching the existing convention (nothing in this codebase ships light-only)

## Explicitly out of scope

- Do not add real search/filter logic to the sidebar search input unless asked — it can be a non-functional `<input>` for now (or wire trivial client-side substring filtering over `categories` if you want to be thorough, but that's optional, not required).
- Do not touch `data/*.ts` — no category, style, glossary, or blog data changes.
- Do not touch routing in `App.tsx` — no routes are added, removed, or renamed.
- Do not touch `useTheme.ts` — the theme toggle keeps its existing localStorage + `.dark`-class-on-`<html>` behavior, it just moves position in the DOM.
- Do not introduce a new icon library or state-management dependency — `lucide-react` + local `useState` is enough.

## Verification checklist before calling this done

- [ ] `npm run dev` boots with no console errors
- [ ] `npm run lint` (oxlint) passes
- [ ] `npm run build` (`tsc -b && vite build`) passes — no new TypeScript errors
- [ ] All 10 category routes, `/blog`, `/blog/:level`, `/about`, and `/` render with the sidebar present and the correct category highlighted as active
- [ ] Toggling dark mode from the sidebar still works and persists across a reload
- [ ] At a mobile viewport width (< 768px), the sidebar is hidden by default, a hamburger button in a slim top bar opens it as an overlay, and it can be closed again
- [ ] No visual regression in any existing style/glossary/blog card — they should look identical to before, just reflowed into a narrower column
