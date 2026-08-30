import type { BlogLevelConfig } from "./types";

export const blogLevels: BlogLevelConfig[] = [
  {
    level: "beginner",
    label: "Beginner / Entry",
    path: "beginner",
    description:
      "You're shipping your first real projects with AI help. Here's how to build habits that don't turn into a mess six months from now.",
    iconName: "Sprout",
  },
  {
    level: "junior",
    label: "Junior Developer",
    path: "junior",
    description:
      "You can ship features on your own now. This is about writing code a teammate can trust without you standing over their shoulder.",
    iconName: "Code2",
  },
  {
    level: "mid-level",
    label: "Mid-Level Developer",
    path: "mid-level",
    description:
      "You own features end to end and touch shared systems. This is about reasoning through trade-offs before the AI writes a line.",
    iconName: "Layers",
  },
  {
    level: "senior",
    label: "Senior Developer",
    path: "senior",
    description:
      "You're accountable for architecture, team velocity, and what breaks in a year. This is about using AI as a critic, not a typist.",
    iconName: "Compass",
  },
];
