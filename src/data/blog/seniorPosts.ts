import type { BlogPost } from "../types";

export const seniorPosts: BlogPost[] = [
  {
    id: "senior-best-practice-treat-ai-output-as-a-pr-from-a-fast-junior",
    level: "senior",
    levelLabel: "Senior Developer",
    contentType: "best-practice",
    contentTypeLabel: "Best Practice",
    title: "Review AI Output the Way You'd Review a Fast, Unaccountable Junior's PR",
    summary:
      "The calibration that keeps AI-assisted velocity from quietly becoming a team-wide technical debt accumulator.",
    estReadMinutes: 3,
    sections: [
      {
        heading: "The Practice",
        body: "Apply the same review bar to AI-generated code that you'd apply to a talented but inexperienced contributor's PR — competent syntax doesn't exempt it from architectural scrutiny.",
      },
      {
        heading: "Why It Matters at This Level",
        body: "Your failure mode isn't a bug in one PR — it's setting a review bar for the whole team that lets AI-generated code skate through on \"it works and looks clean\" while accumulating exactly the kind of architectural drift you'd never accept from a human contributor: duplicated abstractions, inconsistent error handling philosophy, patterns that solve today's ticket while making next quarter's migration harder. Because AI output tends to be locally well-formatted and idiomatic-looking, it passes the surface-level review checks that would catch a human junior's rougher-looking mistakes, while the actual architectural judgment gap goes unchecked. You're the check.",
      },
      {
        heading: "How to Apply It",
        body: "Ask the same question you'd ask of a junior's PR: does this introduce a pattern that now needs to be the standard, and do we actually want that as the standard. When AI-generated code introduces a new abstraction, require the same justification you'd require from a human — why this over the three existing similar patterns already in the codebase. Push back on velocity-driven exceptions to review depth (\"it's just AI-generated, it's probably fine\") the same way you'd push back on \"it's just a small PR\" — size and origin aren't correctness. Use AI-assisted PRs as a forcing function to keep architectural documentation current, since the AI won't know decisions that live only in senior engineers' heads.",
      },
      {
        heading: "Common Mistake",
        body: "The specific anti-pattern to watch for on your own team is \"velocity laundering\": a team's PR review depth quietly drops because AI-assisted PRs ship faster and look more polished, so reviewers unconsciously calibrate to lighter scrutiny — and six months later the codebase has three different patterns for the same problem because no one was asking \"why this approach\" with the same rigor they used to.",
      },
    ],
  },
  {
    id: "senior-quick-guide-running-an-architecture-critique-session",
    level: "senior",
    levelLabel: "Senior Developer",
    contentType: "quick-guide",
    contentTypeLabel: "Quick Guide",
    title: "Use AI as a Standing Devil's Advocate Before a Design Review",
    summary:
      "A concrete sequence for using AI to pressure-test your own design doc before it reaches humans, so the room's time goes to real disagreements.",
    estReadMinutes: 3,
    sections: [
      {
        heading: "Goal",
        body: "Surface the weakest points in your own architecture proposal before a design review meeting, so human reviewer time is spent on genuine disagreements instead of gaps you could have caught yourself.",
      },
      {
        heading: "Steps",
        body: "1. Write the design doc as you normally would, including the decision you're leaning toward and why.\n2. Paste the full doc to the AI and explicitly instruct it to argue against your proposal, not summarize or validate it.\n3. Ask it specifically to name what breaks under scale, team growth, or a requirement change you haven't listed — don't let it stay at the level of generic risks.\n4. For each critique it raises, decide explicitly: is this a real gap I need to address in the doc, or a critique that doesn't apply here and why not — write that reasoning into the doc itself so reviewers see you've already considered it.\n5. Ask it to propose the strongest alternative architecture it can, even one you already rejected, and articulate why your choice still wins against that specific alternative.\n6. Revise the doc's trade-offs section using only the critiques you found genuinely load-bearing — don't pad the doc with rebuttals to weak critiques just because the AI raised them.\n7. Bring the sharpened doc to the human review with the alternatives-considered section already reflecting this pass, so the room's discussion starts from a higher baseline instead of re-deriving objections you could have pre-empted.",
      },
      {
        heading: "If You Get Stuck",
        body: "The likeliest failure mode here is the AI defaulting to agreeable, surface-level critiques (naming a generic risk like \"scalability\" without specifics) — if that happens, explicitly instruct it that generic validation is not useful and ask it to name the exact scenario, load pattern, or team-size threshold where your specific design would need to change. If it still stays generic after that, feed it a concrete number (current QPS, team headcount) and ask it to reason from that specific figure instead of abstractions.",
      },
    ],
  },
  {
    id: "senior-prompt-critique-service-boundary-split",
    level: "senior",
    levelLabel: "Senior Developer",
    contentType: "prompt",
    contentTypeLabel: "Prompt",
    title: "A Critique-Seeking Prompt for a Proposed Service Boundary Split",
    summary:
      "Use this before committing a team to splitting a monolith module into separate services, when you need real pushback, not agreement.",
    estReadMinutes: 2,
    sections: [
      {
        heading: "Why This Prompt",
        body: "You're proposing splitting the billing logic out of the main monolith into its own service, ahead of a team that's about to double in size. You've already convinced yourself it's the right call — which is exactly the situation where you most need something to argue the other side, because your own review of your own design is the weakest check in the process, and the humans reviewing it will be junior enough on this specific decision to defer to you unless the doc pre-empts their objections.",
      },
      {
        heading: "Why This Prompt Works",
        body: "It names a specific, concrete concern (coupling) and a timeframe, forcing the critique to be falsifiable rather than a vague \"there could be issues\" hedge that's impossible to act on. It asks for a migration path that preserves a named constraint throughout, which surfaces whether the transition itself — not just the end state — has been thought through, since most architecture failures happen mid-migration, not at either endpoint. And it explicitly instructs the AI not to validate, which matters because models default toward agreeable framing unless told plainly that agreement isn't the goal here.",
      },
      {
        heading: "How to Use It",
        body: "Take the critique that stings the most seriously, not the one that's easiest to rebut — if the AI's strongest objection lands on a point you can't cleanly answer, that's the actual risk in your design, not a false positive to dismiss before a human reviewer finds the same gap. Write your response to it into the doc itself, not just into your own head.",
      },
    ],
    promptText:
      "Here's my proposed architecture: splitting BillingService out of our monolith into a standalone service, communicating with the rest of the system via an async event bus instead of direct function calls, ahead of our team growing from 6 to 14 engineers over the next two quarters. Critique this design — where will it create coupling or operational overhead we'll regret in 12 months, what's the migration path that keeps billing correctness (no double-charges, no lost events) intact throughout the transition rather than only at the end state, and what would you do differently given the team-size trajectory. Don't just validate my plan; actively look for what's wrong with it, including whether this split is premature relative to our actual current pain versus anticipated future pain.",
  },
  {
    id: "senior-workflow-greenfield-service-with-a-growing-team",
    level: "senior",
    levelLabel: "Senior Developer",
    contentType: "workflow",
    contentTypeLabel: "Workflow for Initial Project",
    title: "Standing Up a Greenfield Service Ahead of Team Growth",
    summary:
      "A phased approach for an initial build where the real constraint isn't the code — it's making decisions that stay legible as headcount triples.",
    estReadMinutes: 5,
    sections: [
      {
        heading: "The Shape of This Workflow",
        body: "This workflow fits a genuinely greenfield service — no existing code to match — being built by a small initial team that's expected to grow significantly within the year. The central design constraint isn't technical feasibility, which AI tools make relatively cheap to explore; it's making early decisions (module boundaries, conventions, how state flows) that stay coherent and self-explanatory once most of the people working on it weren't there for the founding decisions.",
      },
      {
        heading: "Phase 1: Decide and Record the Load-Bearing Constraints First",
        body: "Before any code, settle the handful of decisions that are expensive to reverse later — data ownership boundaries, sync vs. async communication with the rest of the org's systems, and the primary consistency model. Write these down as a short ADR-style doc, explicitly including what you're not optimizing for and why, since a future engineer without your context needs the \"why not\" as much as the \"why.\"",
      },
      {
        heading: "Phase 2: Build a Thin Vertical Slice, Not a Foundation Layer",
        body: "Implement one real end-to-end path (one endpoint, one UI flow) through the full stack before building out shared infrastructure, generic abstractions, or config systems. This tests whether Phase 1's decisions actually hold up against real code, which is cheaper to discover now than after three engineers have built on top of a flawed abstraction.",
      },
      {
        heading: "Phase 3: Codify Conventions as Enforceable, Not Just Documented",
        body: "Once the vertical slice proves the shape works, turn the emerging conventions (folder structure, error handling pattern, how modules expose their public API) into lint rules, templates, or scaffolding scripts wherever feasible — not just a wiki page. A convention a new engineer's tooling enforces survives team growth; one that only lives in a doc quietly erodes as headcount outpaces onboarding.",
      },
      {
        heading: "Phase 4: Onboard the Next Engineer Against the System, Not Against You",
        body: "When the second or third engineer joins, deliberately route their first tasks through the documented conventions and ask them to flag anywhere the docs didn't match reality, rather than explaining the undocumented parts verbally. Every verbal-only explanation you give is a scaling bottleneck that resurfaces at the next hire.",
      },
      {
        heading: "What NOT to Do Yet",
        body: "Don't build for the org-wide scale you're anticipating at month 18 — no premature multi-region deployment, no generalized plugin system for hypothetical future service types, no abstraction layer speculatively supporting a second data store you don't have yet. At this stage, over-engineering for imagined future scale is a more likely failure mode than under-engineering, because it multiplies the surface area every new engineer has to learn before they can be productive, for scale requirements that may never materialize as designed.",
      },
    ],
  },
];
