import type { GlossaryTermConfig } from "./types";

// A glossary of well-established UX/UI concepts a senior developer or
// designer should recognize by name and apply correctly. Each entry has a
// precise definition (not a dictionary blurb), a concrete example grounded
// in a real UI scenario, and a "why it matters" line explaining the
// practical consequence of ignoring or applying the concept.
export const glossaryTerms: GlossaryTermConfig[] = [
  {
    id: "fitts-s-law",
    term: "Fitts's Law",
    categoryId: "ux-ui-keyword",
    definition:
      "A predictive model of pointing movement: the time required to acquire a target is a function of the distance to it and inversely a function of its size. Bigger, closer targets are faster and more accurate to hit than small, distant ones.",
    example:
      "macOS puts the menu bar at the very top edge of the screen instead of floating it below the title bar — the screen edge makes the target effectively infinite in height, so you can slam the cursor upward without slowing down to aim.",
    whyItMatters:
      "It's the quantitative reason 'make the primary button bigger and put it where the thumb already rests' isn't just taste — mis-sized or poorly placed tap targets measurably increase error rate and time-on-task, especially on mobile.",
    iconName: "MousePointerClick",
  },
  {
    id: "hick-s-law",
    term: "Hick's Law",
    categoryId: "ux-ui-keyword",
    definition:
      "The time it takes to make a decision increases logarithmically with the number and complexity of choices available. Doubling the options does not double decision time — but it does increase it, and complex or dissimilar options increase it further.",
    example:
      "A restaurant ordering app that shows 6 curated meal categories up front, with everything else behind a 'See all' link, gets users to a decision faster than one that dumps all 80 menu items into a single flat list.",
    whyItMatters:
      "It's the direct justification for progressive disclosure and default/curated options in complex flows (checkout, settings, onboarding) — every extra visible choice has a measurable cost, so 'just show everything' is rarely the fast path.",
    iconName: "ListTree",
  },
  {
    id: "jakob-s-law",
    term: "Jakob's Law",
    categoryId: "ux-ui-keyword",
    definition:
      "Users spend most of their time on other sites and products, so they arrive with expectations shaped by those experiences and prefer your interface to work the way the ones they already know work — the cart icon top-right, the logo linking home, underlined blue links.",
    example:
      "Putting the shopping cart icon in the top-right corner of an e-commerce site, even though nothing technically requires that position — users' muscle memory from Amazon and every other major retailer makes it the fastest place for them to find it on yours.",
    whyItMatters:
      "It's the practical argument against novelty for novelty's sake in navigation and core interaction patterns — being 'unique' in a place users rely on convention costs learnability, and learnability is a real cost in conversion and support tickets.",
    iconName: "Repeat2",
  },
  {
    id: "miller-s-law",
    term: "Miller's Law (7±2)",
    categoryId: "ux-ui-keyword",
    definition:
      "Popularly cited as 'the average person can hold about 7 (plus or minus 2) items in working memory at once.' The modern, more accurate reading (per later research, e.g. Cowan) puts practical working-memory capacity closer to 3-4 chunks — the actionable point either way is that unaided short-term memory is small and chunking extends it.",
    example:
      "Splitting a 16-field signup form into four grouped steps of ~4 fields each (account, profile, preferences, confirmation) instead of one long scrolling form — each step is a memorable chunk instead of one overwhelming list.",
    whyItMatters:
      "It's the reasoning behind chunking navigation into 5-7 top-level nav items instead of 20, and grouping related form fields — exceeding working-memory limits doesn't just feel cluttered, it measurably increases errors and abandonment.",
    iconName: "Layers3",
  },
  {
    id: "gestalt-proximity-similarity",
    term: "Gestalt Principles (Proximity & Similarity)",
    categoryId: "ux-ui-keyword",
    definition:
      "Perceptual rules describing how the eye groups discrete elements into a whole without being told to. Proximity: elements placed close together are perceived as related. Similarity: elements sharing color, shape, or size are perceived as belonging to the same group, even when spacing is equal.",
    example:
      "In a settings page, tightening the vertical gap between a label and its input field (8px) while leaving more space before the next field group (24px) visually communicates the label-input pairing without a border or background — pure spacing does the grouping.",
    whyItMatters:
      "Whitespace and consistent styling aren't decoration — they're the actual mechanism the user's visual system relies on to parse structure. Inconsistent spacing between related vs. unrelated elements creates ambiguous grouping that CSS alone can't fix without you understanding this first.",
    iconName: "Grid3x3",
  },
  {
    id: "cognitive-load",
    term: "Cognitive Load",
    categoryId: "ux-ui-keyword",
    definition:
      "The total amount of working-memory effort required to use an interface, commonly split into intrinsic load (inherent complexity of the task itself), extraneous load (effort wasted on bad design — confusing labels, inconsistent patterns), and germane load (effort spent building useful understanding). Good UI design minimizes extraneous load specifically.",
    example:
      "A multi-step checkout that shows a running order summary and progress indicator on every step reduces extraneous load — the user doesn't have to hold 'what did I already select and how many steps are left' in their own head, the UI holds it for them.",
    whyItMatters:
      "It reframes 'this feature is confusing' from a vague complaint into a diagnosable problem: is the load intrinsic (the task really is complex, simplify the task) or extraneous (the UI is adding unnecessary effort, fix the UI)? Conflating the two leads to fixing the wrong thing.",
    iconName: "Brain",
  },
  {
    id: "von-restorff-effect",
    term: "Von Restorff Effect (Isolation Effect)",
    categoryId: "ux-ui-keyword",
    definition:
      "When multiple similar items are presented together, the one item that differs from the rest — in color, size, shape, or style — is disproportionately more likely to be noticed and remembered.",
    example:
      "A pricing table with three identical-looking plan cards except the middle 'Pro' plan is rendered larger, in an accent color, with a 'Most Popular' badge — the visual outlier captures attention and steers the eye (and often the choice) toward it.",
    whyItMatters:
      "It's the mechanism behind making exactly one primary CTA visually distinct per screen — if every button competes for the same visual weight, the isolation effect can't do its job and the user has no fast path to the intended action.",
    iconName: "Sparkles",
  },
  {
    id: "dark-pattern",
    term: "Dark Pattern",
    categoryId: "ux-ui-keyword",
    definition:
      "A UI/UX design choice that intentionally manipulates or deceives users into doing something they wouldn't otherwise choose to do — subscribing, overspending, giving up privacy — by exploiting cognitive biases rather than serving genuine user needs. Named and cataloged by Harry Brignull.",
    example:
      "A cancel-subscription flow that requires 6 clicks through retention offers and a live-chat confirmation, while the original sign-up was a single click — the asymmetry (called a 'roach motel' pattern) is the deception, not any single screen in isolation.",
    whyItMatters:
      "Recognizing the named pattern taxonomy (confirmshaming, roach motel, bait-and-switch, forced continuity) lets an engineer flag manipulative flows in review by name instead of vague unease — and matters concretely now that regulations like the EU's DSA and California's DROP Act impose real liability for them.",
    iconName: "ShieldAlert",
  },
  {
    id: "peak-end-rule",
    term: "Peak-End Rule",
    categoryId: "ux-ui-keyword",
    definition:
      "People judge an experience largely based on how they felt at its most intense point (the peak, positive or negative) and at its end, rather than on the average of every moment or the total duration — a finding from Kahneman's behavioral research on remembered vs. experienced utility.",
    example:
      "A SaaS product that has a rough multi-step data-import process but closes with a polished success screen, a clear 'here's what happens next' summary, and a small celebratory animation — the ending is engineered to be the strongest memory of the flow, outweighing friction earlier on.",
    whyItMatters:
      "It's the argument for investing disproportionate design effort in error-recovery moments and final confirmation screens rather than spreading effort evenly across a flow — the last impression carries more weight in user-reported satisfaction than the flow's total friction would predict.",
    iconName: "Target",
  },
  {
    id: "progressive-disclosure",
    term: "Progressive Disclosure",
    categoryId: "ux-ui-keyword",
    definition:
      "A design strategy that defers secondary or advanced options out of the initial view, revealing them only when the user explicitly requests more — through an 'Advanced settings' expander, a second screen, or a drill-down — so the primary path stays uncluttered for the majority of users.",
    example:
      "A file upload widget that shows just a drag-and-drop zone and a filename by default, with compression quality, format conversion, and metadata-stripping options tucked behind an 'Advanced options' disclosure triangle that most users never open.",
    whyItMatters:
      "It's how you reconcile power-user completeness with Hick's Law and cognitive load for everyone else — the feature set doesn't shrink, but the default decision surface does, so the 90% case stays fast without deleting capability the 10% case needs.",
    iconName: "Eye",
  },
];
