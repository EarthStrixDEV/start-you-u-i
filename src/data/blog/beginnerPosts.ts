import type { BlogPost } from "../types";

export const beginnerPosts: BlogPost[] = [
  {
    id: "beginner-best-practice-commit-early-often",
    level: "beginner",
    levelLabel: "Beginner / Entry",
    contentType: "best-practice",
    contentTypeLabel: "Best Practice",
    title: "Commit After Every Working Change, Not Once a Day",
    summary:
      "Small, frequent commits are your undo button when an AI-generated change breaks something you can't explain.",
    estReadMinutes: 3,
    sections: [
      {
        heading: "The Practice",
        body: "Run `git add -A && git commit -m \"...\"` every time your app goes from broken to working — not at the end of the day, not after a whole feature.",
      },
      {
        heading: "Why It Matters at This Level",
        body: "When you're vibe coding, you're often accepting large chunks of AI-generated code you haven't fully read line by line. If you go three hours between commits and something subtly breaks — a form that silently stops validating, a button that used to work — you have no way to know which of the last ten AI suggestions caused it. Your only real safety net at this stage isn't understanding every line, it's being able to jump back to the last known-good point in seconds. Beginners also tend to trust that \"it looks right in the browser\" means it's fine, but AI-generated changes can break something you're not actively looking at while fixing something you are.",
      },
      {
        heading: "How to Apply It",
        body: "Commit the moment a feature works, even if it's ugly — you can clean it up in the next commit. Write commit messages that describe what changed in plain words (\"add login form\", not \"wip\" or \"fix\"). Before asking your AI tool for a big change, commit first so you always have a clean point to return to. If you're not comfortable with git yet, use your editor's built-in source control panel instead of memorizing commands — the habit matters more than the interface. Aim for one commit per feature or fix, not one commit per file, so each commit tells a story you could explain out loud.",
      },
      {
        heading: "Common Mistake",
        body: "The most common beginner anti-pattern is the \"mega-commit\": working for an entire session, accepting a dozen AI suggestions in a row, and only committing once everything 'looks done'. When something in that session breaks the app, you're stuck debugging a huge diff with no smaller checkpoints inside it, which is exactly the kind of debugging a beginner isn't ready for yet. A close cousin is committing only when you remember to, rather than treating it as part of finishing any change — by the time you remember, the working state you'd want to save has already drifted.",
      },
    ],
  },
  {
    id: "beginner-quick-guide-first-vite-project",
    level: "beginner",
    levelLabel: "Beginner / Entry",
    contentType: "quick-guide",
    contentTypeLabel: "Quick Guide",
    title: "Get a React Project Running Locally in Under 10 Minutes",
    summary:
      "A no-detours path from an empty folder to a working dev server you can actually see in the browser.",
    estReadMinutes: 3,
    sections: [
      {
        heading: "Goal",
        body: "Go from nothing installed to a React app running in your browser at localhost, with zero configuration decisions to agonize over.",
      },
      {
        heading: "Steps",
        body: "1. Install Node.js from nodejs.org (the LTS version, not \"current\") — this gives you `npm`, which you'll need for everything else.\n2. Open a terminal in the folder where you want your project and run `npm create vite@latest my-app -- --template react-ts`.\n3. Run `cd my-app` to move into the new project folder.\n4. Run `npm install` to download the project's dependencies — this can take a minute, that's normal.\n5. Run `npm run dev` and watch the terminal for a localhost URL (usually http://localhost:5173).\n6. Open that URL in your browser — you should see the default Vite + React starter page.\n7. Open the project folder in your code editor and edit `src/App.tsx` — save the file and watch the browser update instantly without you refreshing it.\n8. Once the live-reload loop is confirmed working, run `git init && git add -A && git commit -m \"initial scaffold\"` before writing any real code, so you have a clean starting point to compare against later.",
      },
      {
        heading: "If You Get Stuck",
        body: "The most likely blocker is `npm run dev` failing with a red wall of text right after `npm install`. Before panicking, scroll up in that terminal output to find the first error line, not the last — errors cascade, so the real cause is usually near the top, and everything below it is often just noise caused by that first failure. Nine times out of ten for a fresh project, closing the terminal, reopening it, and running `npm install` again fixes it. If it still fails, check that `node -v` reports an even-numbered major version (18, 20, 22) — Vite's newer templates don't support older or odd-numbered Node releases.",
      },
    ],
  },
  {
    id: "beginner-prompt-single-signup-form",
    level: "beginner",
    levelLabel: "Beginner / Entry",
    contentType: "prompt",
    contentTypeLabel: "Prompt",
    title: "A Paste-Ready Prompt for Your First Signup Form",
    summary:
      "Use this when you need one self-contained component and want the AI to teach you the syntax as it writes it, not just hand you a black box.",
    estReadMinutes: 2,
    sections: [
      {
        heading: "Why This Prompt",
        body: "You've got a React + TypeScript project running and you need your very first real UI piece — a signup form with an email and password field. You don't yet know what a 'controlled input' is or why forms in React look different from plain HTML forms. This is the situation where you want the AI to generate something small enough to fully read, and to explain itself while it does, rather than a slick multi-file solution you'd have to take on faith.",
      },
      {
        heading: "Why This Prompt Works",
        body: "It names the exact stack (React and TypeScript, no extra libraries) so the AI can't reach for a form library you haven't installed and don't understand yet. It scopes the request to one component with a fixed, short list of fields, which keeps the output small enough to actually read end to end instead of skimming and hoping. And it explicitly asks for comments explaining each part, plus names the specific concept (controlled inputs) you want explained — turning the AI's output into a mini-lesson on state and event handlers instead of just code you paste and hope works.",
      },
      {
        heading: "How to Use It",
        body: "Paste this into your AI coding tool as-is, then actually read every comment it generates before moving on — don't just accept and forget it. If a comment references a concept you still don't follow, that's your cue to ask a direct follow-up question rather than nodding along, since the whole point of this prompt is to leave you understanding the code, not just possessing it.",
      },
    ],
    promptText:
      "I'm building my first project with React and TypeScript, no other libraries. Create a single SignupForm component with two fields: email and password, plus a submit button. When submitted, just console.log the values for now — no backend call yet. Use React's built-in useState for the form state, no external form library. Explain each part of the code in comments as if I'm learning React state and event handlers for the first time — specifically explain what 'controlled input' means and why the input's value and onChange are wired the way they are.",
  },
  {
    id: "beginner-workflow-first-todo-app",
    level: "beginner",
    levelLabel: "Beginner / Entry",
    contentType: "workflow",
    contentTypeLabel: "Workflow for Initial Project",
    title: "Your First Real Project: A Local To-Do App, Start to Finish",
    summary:
      "A phased path through a first solo project that builds real habits — scaffolding, version control, and iterative AI use — without overwhelming scope.",
    estReadMinutes: 5,
    sections: [
      {
        heading: "The Shape of This Workflow",
        body: "This workflow fits a first solo project meant to teach you the full loop of building something real: setting up a project, building UI piece by piece, saving your work as you go, and stopping before you get in over your head. A to-do app (add, complete, delete, save to local storage) is ideal because every piece is small enough to fully understand, and there's no backend to complicate things.",
      },
      {
        heading: "Phase 1: Scaffold and Commit Immediately",
        body: "Create the project with `npm create vite@latest` (React + TypeScript template), run it once to confirm it starts, then immediately run `git init` and make your first commit before writing any custom code. This gives you a clean baseline to compare against for your entire project.",
      },
      {
        heading: "Phase 2: Build the Static Shape First",
        body: "Ask the AI for a TodoList component that renders a hardcoded array of three fake to-do items — no add/delete logic yet, just the visual layout. Get this on screen and looking right before any interactivity exists. Commit once it renders correctly.",
      },
      {
        heading: "Phase 3: Add One Behavior at a Time",
        body: "Add the ability to add a new item, run it, test it by hand, commit. Then add the ability to mark an item complete, test, commit. Then add delete, test, commit. Each behavior is its own small AI request and its own commit — never ask for all three behaviors in one prompt. If a step breaks something that worked before, you'll know exactly which single change caused it.",
      },
      {
        heading: "Phase 4: Persist to Local Storage",
        body: "Once add/complete/delete all work, ask the AI to make the list survive a page refresh using the browser's localStorage. This is a good final phase because it's a self-contained addition that doesn't touch your existing component logic much — you're adding a save/load step around behavior that already works, not rewriting the behavior itself.",
      },
      {
        heading: "Phase 5: Polish Only After It Fully Works",
        body: "Only once add, complete, delete, and persistence are all working do you touch styling or add small niceties like an empty-state message. Doing polish earlier tempts you to mix visual tweaks into the same AI request as behavior changes, which makes it harder to tell whether a bug came from the logic or the layout.",
      },
      {
        heading: "What NOT to Do Yet",
        body: "Don't add a backend, database, or user accounts to this project — the goal is to finish something, and connecting to a real server introduces authentication, API errors, and deployment concerns that will stall you before you've built the habit of finishing anything. If you're tempted to add \"just a simple database,\" that's the sign to start a second project instead of scope-creeping this one.",
      },
    ],
  },
];
