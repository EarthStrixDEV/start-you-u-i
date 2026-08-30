import type { BlogPost } from "../types";

export const juniorPosts: BlogPost[] = [
  {
    id: "junior-best-practice-read-the-diff",
    level: "junior",
    levelLabel: "Junior Developer",
    contentType: "best-practice",
    contentTypeLabel: "Best Practice",
    title: "Read Every Diff Before You Accept It, Not Just the File After",
    summary:
      "The habit that separates a junior who ships reliable PRs from one whose reviewer keeps finding surprises.",
    estReadMinutes: 3,
    sections: [
      {
        heading: "The Practice",
        body: "Before accepting an AI-generated change, look at the diff view — what got added, removed, and changed — not just the final file with fresh eyes.",
      },
      {
        heading: "Why It Matters at This Level",
        body: "At this level you're trusted to open PRs against a shared codebase, and your failure mode has shifted from \"my personal project broke\" to \"I introduced a regression a teammate now has to catch in review.\" AI tools frequently touch more than what you asked for — reformatting an unrelated function, removing a comment, or quietly changing a default parameter while fixing the thing you actually requested. Reading only the final file makes all of that invisible, because it looks normal in isolation. Reading the diff makes every unintended change visible by definition.",
      },
      {
        heading: "How to Apply It",
        body: "Use your editor's inline diff view (most AI coding tools show one before you accept) rather than accepting blind and checking git status after. Treat any change to a file you didn't ask about as a question to the AI, not something to accept silently — ask \"why did you touch X\". Before opening a PR, run `git diff` yourself one more time as a final human pass, independent of the AI tool's own diff view. If a diff touches more than roughly 3-4 files for what you thought was a small fix, stop and ask the AI to explain its reasoning before proceeding.",
      },
      {
        heading: "Common Mistake",
        body: "The specific anti-pattern at this level is what teams call \"diff blindness\": approving AI suggestions based on whether the feature works when you click around, without ever looking at what actually changed under the hood. This is how junior PRs end up with accidentally-reverted bug fixes or silently-removed error handling that nobody notices until it's in production, because the app still worked fine in the one manual test that got run.",
      },
    ],
  },
  {
    id: "junior-quick-guide-debug-with-ai-not-guesswork",
    level: "junior",
    levelLabel: "Junior Developer",
    contentType: "quick-guide",
    contentTypeLabel: "Quick Guide",
    title: "Debug a Failing API Call Without Just Re-Prompting Randomly",
    summary:
      "A structured sequence for using AI to debug that gets to the actual cause instead of trying fixes at random.",
    estReadMinutes: 3,
    sections: [
      {
        heading: "Goal",
        body: "Find the actual root cause of a failing API request instead of pasting the error into the AI five times with slightly different wording and hoping something sticks.",
      },
      {
        heading: "Steps",
        body: "1. Reproduce the failure once, reliably, and note the exact steps that trigger it — an intermittent bug you can't reproduce yet isn't ready for AI debugging, it's ready for more manual investigation first.\n2. Open your browser's Network tab and capture the actual request — method, URL, headers, payload — and the actual response, not just the console error.\n3. Paste the full request/response pair into the AI, not just the error message, and ask it to identify what's inconsistent between what was sent and what the server expected.\n4. Ask the AI for its hypothesis before asking for a fix — if it can't state a specific cause, it's guessing, and you should push back and provide more context instead of accepting a random patch.\n5. Apply exactly one fix at a time and re-test, even if the AI suggests multiple changes at once — bundling fixes hides which one actually mattered.\n6. Once fixed, ask the AI to explain in one sentence why the original code failed — if you can't restate that explanation yourself, you haven't actually learned from the bug.\n7. Add a quick note (comment or commit message) describing the root cause so future-you or a teammate doesn't reintroduce it.",
      },
      {
        heading: "If You Get Stuck",
        body: "The likeliest blocker at this level is a CORS or auth-header error that looks scary but is usually caused by a mismatched base URL or a missing/expired token — before diving deep, double check the request URL in the Network tab actually points at the environment you think it does (localhost vs. staging vs. prod are easy to mix up). If the AI keeps proposing fixes that don't match your actual error, you're probably under-sharing context — paste the full stack trace, not a paraphrase of it.",
      },
    ],
  },
  {
    id: "junior-prompt-paginated-list-hook",
    level: "junior",
    levelLabel: "Junior Developer",
    contentType: "prompt",
    contentTypeLabel: "Prompt",
    title: "A Scoped Prompt for a Reusable Paginated List Feature",
    summary:
      "Use this when you're asked to add pagination to a list view and want output a teammate could reuse without you hand-holding through acceptance criteria.",
    estReadMinutes: 2,
    sections: [
      {
        heading: "Why This Prompt",
        body: "You've been assigned a ticket: add pagination to a product list page that currently renders every item at once. You know enough now to specify what \"done\" means yourself, and your reviewer expects idiomatic code without you needing every implementation detail spelled out — but you also don't want the AI inventing extra scope, like a search bar nobody asked for, that turns a one-day ticket into a multi-file review headache.",
      },
      {
        heading: "Why This Prompt Works",
        body: "It states concrete, checkable acceptance criteria instead of a vague goal, so both you and the AI have a shared definition of done that you can verify item by item once the code lands. It asks for the pagination logic to be extracted into a custom hook specifically so a teammate could reuse it on a different list without copy-pasting or restructuring — this is the kind of forward-thinking scoping a reviewer notices and one AI tools won't default to unless asked. And it explicitly fences scope at the end, which matters because AI tools left unconstrained will often add nice-to-haves (loading skeletons, search, sorting) that weren't part of the ticket and now need separate review and separate justification in the PR.",
      },
      {
        heading: "How to Use It",
        body: "Adapt the field names and page-size number to your actual ticket, then review the generated hook's public API (what it returns and what it accepts) before you look at anything else — that's what your teammates will actually interact with, and a clean API is worth more scrutiny than the internal implementation.",
      },
    ],
    promptText:
      "Implement pagination for the ProductList component in this React + TypeScript codebase, showing 20 items per page. Requirements: page number is reflected in the URL query string so a shared link opens to the same page; a Previous/Next control is disabled correctly on the first and last page; the current page's items and total page count are computed from the existing `products` array already in state, no new API calls; and the component doesn't refetch data on page change since we already have all items client-side. Extract the pagination logic into a usePagination custom hook that takes the array and a page size, so a teammate could apply it to the OrderHistory list later without restructuring their component. Don't add features I didn't ask for — no search, no sorting, no loading states.",
  },
  {
    id: "junior-workflow-first-team-feature",
    level: "junior",
    levelLabel: "Junior Developer",
    contentType: "workflow",
    contentTypeLabel: "Workflow for Initial Project",
    title: "Shipping Your First Feature Against a Real Team Codebase",
    summary:
      "A phased approach to your first ticket in an existing codebase, where the goal shifts from 'does it work' to 'does it fit'.",
    estReadMinutes: 5,
    sections: [
      {
        heading: "The Shape of This Workflow",
        body: "This workflow fits your first assigned feature ticket in an established team codebase — not a project you're scaffolding from scratch. The core difference from solo projects is that conventions already exist (component patterns, state management, styling approach) and your job is to match them, not invent your own.",
      },
      {
        heading: "Phase 1: Orient Before You Prompt",
        body: "Before asking the AI to generate anything, open two or three existing components similar to what you're about to build and read them. Ask the AI to summarize the patterns it sees (naming conventions, how API calls are structured, how state is managed) so your first prompt can explicitly say \"follow the pattern used in X\" instead of getting a generic implementation that clashes with the rest of the app. This orientation pass usually takes fifteen minutes and saves a round of \"please restructure this to match our conventions\" review comments later.",
      },
      {
        heading: "Phase 2: Build Against the Ticket's Acceptance Criteria",
        body: "Turn the ticket into explicit, checkable criteria if it isn't already, and build toward those specifically — resist the urge to also fix an unrelated bug you noticed on the way, even a small one; that belongs in its own ticket.",
      },
      {
        heading: "Phase 3: Self-Review Like Your Reviewer Will",
        body: "Before opening the PR, read your own diff as if you were the reviewer: does every changed line trace back to the ticket, are there leftover console.logs or commented-out code, does it follow the file/folder conventions used elsewhere. Catching this yourself is what starts building your reviewer's trust, and it's a habit that pays off faster than any amount of explaining your intentions in the PR description.",
      },
      {
        heading: "Phase 4: Respond to Review Feedback by Understanding, Not Just Applying",
        body: "When a reviewer requests a change, ask the AI to explain why the requested pattern is preferred here before blindly applying the diff — this is how the team's conventions actually become your own knowledge instead of a one-off patch you'll need explained again next time.",
      },
      {
        heading: "What NOT to Do Yet",
        body: "Don't refactor shared code you touch in passing, even if the AI suggests it looks messy or you personally disagree with a pattern — a junior's first few PRs should have a small, obvious blast radius, and \"cleaned up while I was in there\" is exactly the kind of unreviewed scope creep that erodes a reviewer's trust before you've built a track record.",
      },
    ],
  },
];
