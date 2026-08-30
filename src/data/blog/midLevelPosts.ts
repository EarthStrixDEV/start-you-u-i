import type { BlogPost } from "../types";

export const midLevelPosts: BlogPost[] = [
  {
    id: "mid-level-best-practice-blast-radius-first",
    level: "mid-level",
    levelLabel: "Mid-Level Developer",
    contentType: "best-practice",
    contentTypeLabel: "Best Practice",
    title: "Map the Blast Radius Before You Let AI Touch Shared State",
    summary:
      "The habit that prevents a 'small' AI-assisted change from quietly breaking three other features that depend on the same state.",
    estReadMinutes: 3,
    sections: [
      {
        heading: "The Practice",
        body: "Before asking an AI tool to modify shared state, a context provider, or a widely-imported utility, explicitly list what else consumes it — and tell the AI that list as part of your prompt.",
      },
      {
        heading: "Why It Matters at This Level",
        body: "Your failure mode isn't a broken component anymore — it's a change that looks correct in isolation but breaks an unrelated feature three sprints later because it silently relied on the old behavior of a shared hook or context. AI tools reason about the code you show them, not the whole dependency graph of your app, so they'll happily \"simplify\" a shared function's return shape without knowing five other components destructure it a specific way. At this level you're one of the few people positioned to catch that before it ships, because you're the one who actually knows where the shared code is used.",
      },
      {
        heading: "How to Apply It",
        body: "Grep for all usages of the function, hook, or context you're about to change before prompting, and paste that list into your prompt as explicit context. Ask the AI directly what breaking changes its proposed approach would introduce for existing consumers, not just whether the new code works. When a shared piece has more than a handful of consumers, prefer additive changes (a new optional parameter) over changing existing behavior, and say so explicitly in your prompt. Write a quick regression check — even a manual click-through list — covering the other known consumers before merging, since your test suite may not cover all of them.",
      },
      {
        heading: "Common Mistake",
        body: "The specific anti-pattern here is \"local correctness, global blindness\": verifying the change works for the one component you were actively working on, while three other components silently importing the same hook get skipped because they weren't open in your editor at the time. This is how a one-line change to a shared `useAuth` hook ends up breaking the admin panel that nobody had open during testing.",
      },
    ],
  },
  {
    id: "mid-level-quick-guide-cutting-a-safe-feature-flag",
    level: "mid-level",
    levelLabel: "Mid-Level Developer",
    contentType: "quick-guide",
    contentTypeLabel: "Quick Guide",
    title: "Ship a Risky Change Behind a Feature Flag Instead of a Big-Bang Release",
    summary:
      "A concrete sequence for de-risking a change that touches a high-traffic path, using a flag instead of hoping the PR review catches everything.",
    estReadMinutes: 3,
    sections: [
      {
        heading: "Goal",
        body: "Get a behaviorally-risky change (e.g. a new checkout flow, a rewritten data-fetching layer) into production without betting the whole user base on it working correctly on day one.",
      },
      {
        heading: "Steps",
        body: "1. Identify the smallest boolean that meaningfully separates old behavior from new — resist flagging at too coarse a level (\"new checkout\" vs. specifically \"new payment-step validation\"), since a coarse flag forces an all-or-nothing rollback if only part of the change misbehaves.\n2. Wire the flag through your existing flag provider (LaunchDarkly, a config service, or even an env-driven constant for smaller teams) rather than a hardcoded boolean, so it can change without a redeploy.\n3. Write both code paths to coexist cleanly — ask the AI to keep the old path completely untouched and add the new path alongside it, not interleaved with conditionals scattered throughout.\n4. Default the flag off in production and on in your local/staging environment so your own testing exercises the new path continuously.\n5. Roll out to an internal or low-traffic segment first, and explicitly define what you're watching (error rate, a specific metric) before flipping it further.\n6. Widen the rollout percentage gradually, watching the same metrics at each step rather than jumping straight to 100%.\n7. Once fully rolled out and stable for an agreed period, remove the flag and the old code path in a dedicated cleanup PR — don't let it become permanent dead code that outlives its purpose.",
      },
      {
        heading: "If You Get Stuck",
        body: "The likeliest blocker is the two code paths sharing more state than expected, causing the old path to subtly break even though it's supposedly untouched — if that happens, that's a sign the two behaviors need to be more cleanly separated (even duplicated temporarily) rather than sharing a conditional deep inside shared logic. It's a worthwhile short-term duplication cost in exchange for a rollback you can actually trust.",
      },
    ],
  },
  {
    id: "mid-level-prompt-optimistic-update-flow",
    level: "mid-level",
    levelLabel: "Mid-Level Developer",
    contentType: "prompt",
    contentTypeLabel: "Prompt",
    title: "A Trade-Off-First Prompt for Adding Optimistic Updates",
    summary:
      "Use this when a feature needs to feel instant but the naive implementation risks state getting out of sync with the server on failure.",
    estReadMinutes: 2,
    sections: [
      {
        heading: "Why This Prompt",
        body: "Product wants the \"like\" button on a feed to feel instant instead of waiting on a round trip, so you need optimistic updates. But you already know the naive version — flip the UI immediately, hope the request succeeds — leaves you with silently wrong state on failure or flaky networks, and there's more than one reasonable way to reconcile that. This is a case where you want the AI's reasoning surfaced before its code, because the choice of approach matters more than the syntax of any one of them, and picking wrong here means revisiting it later under production incident pressure instead of now.",
      },
      {
        heading: "Why This Prompt Works",
        body: "It asks for multiple approaches and their trade-offs before any code, which forces the AI to actually reason about failure modes instead of jumping straight to the first plausible implementation. It names a specific edge case (request failure, rapid repeated clicks) so the AI can't hand-wave past it in whichever approach it picks — vague prompts get vague edge-case handling, or none at all. And it asks what else this touches, which surfaces shared-state risk before it's discovered in review — the same blast-radius thinking that matters everywhere at this level, applied proactively instead of after the fact.",
      },
      {
        heading: "How to Use It",
        body: "Read the proposed approaches critically before accepting the recommendation — the AI may default to the simplest option even when your specific rapid-click scenario calls for a queue or debounce instead, and you're the one who has to own that trade-off in production.",
      },
    ],
    promptText:
      "I need to add optimistic updates to the like button on FeedItem in this React + TypeScript app, backed by a REST API. Before writing code, tell me the 2-3 approaches you'd consider (e.g. naive flip-and-hope, flip-with-rollback-on-error, request queue) and their trade-offs, then implement the one you recommend, including handling for: the request failing after the UI already updated, and the user clicking like/unlike rapidly before the first request resolves. Flag anywhere this touches shared state — specifically whether the like count needs to stay in sync with the same item shown in the PostDetail view if the user has both open.",
  },
  {
    id: "mid-level-workflow-cross-cutting-notification-system",
    level: "mid-level",
    levelLabel: "Mid-Level Developer",
    contentType: "workflow",
    contentTypeLabel: "Workflow for Initial Project",
    title: "Building a Cross-Cutting Notification System From a Blank Slate",
    summary:
      "A phased approach for a feature that necessarily touches many parts of the app at once, where the risk is architectural, not just implementation detail.",
    estReadMinutes: 5,
    sections: [
      {
        heading: "The Shape of This Workflow",
        body: "This workflow fits a feature that is inherently cross-cutting from day one — an in-app notification system that multiple existing features (comments, mentions, task assignments) will need to trigger and multiple UI surfaces (a bell icon, a toast, a settings page) will need to consume. The risk here isn't any single piece being hard to build, it's the interface between them ossifying badly if you build UI and data model in the wrong order.",
      },
      {
        heading: "Phase 1: Define the Interface Before Any UI",
        body: "Design the shape of a Notification (type, payload, read state, target route) and the function signature other features will call to create one, before building any rendering. Get this reviewed by whoever owns the features that will trigger notifications, since you're effectively designing a contract they'll depend on.",
      },
      {
        heading: "Phase 2: Build the Write Path With One Real Caller",
        body: "Wire up the actual persistence (API + DB write) and connect exactly one real trigger — say, comment mentions — end to end, rather than mocking all triggers at once. This surfaces contract problems immediately instead of after three features have already been wired to a shape you'll need to change.",
      },
      {
        heading: "Phase 3: Build the Read Surfaces",
        body: "Build the bell icon, dropdown list, and read/unread state against the now-proven data shape. Use the AI to reason through polling vs. websocket vs. optimistic-local-then-sync for how the UI learns about new notifications, since this is a real trade-off with UX and infra cost implications, not a default to accept blindly.",
      },
      {
        heading: "Phase 4: Onboard the Remaining Triggers",
        body: "Add the other trigger points (task assignment, mentions elsewhere) one at a time, each as its own small PR against the now-stable contract from Phase 1. Each addition should not require touching the notification system's core code — if it does, the interface from Phase 1 wasn't general enough and needs revisiting before adding more callers, rather than patching around the gap feature by feature.",
      },
      {
        heading: "Phase 5: Document the Contract for Other Feature Owners",
        body: "Once two or three trigger points exist, write a short usage doc showing how to emit a notification from a new feature, aimed at teammates who didn't build the system. If you find yourself needing to explain caveats verbally that aren't obvious from the function signature, that's a signal the interface itself should be clearer, not just better documented.",
      },
      {
        heading: "What NOT to Do Yet",
        body: "Don't build notification preferences (per-type opt-out, digest emails, quiet hours) in this initial pass, even though product will likely ask — preference management is a second, mostly-independent feature that will muddy the core contract you're trying to get right first, and bolting it on after the read/write paths are proven is far cheaper than designing for it upfront speculatively.",
      },
    ],
  },
];
