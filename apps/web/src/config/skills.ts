import { z } from "zod";

export const categorySchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
});

export type Category = z.infer<typeof categorySchema>;

export const skills: Category[] = [
  {
    category: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "CSS",
      "Tailwind CSS",
      "Sass",
      "Material UI",
      "Redux Toolkit",
      "React Hook Form",
      "TanStack Query",
      "Zustand",
      "Vite",
      "HTML",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Firebase", "PHP"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "Docker",
      "Linux",
      "Vercel",
      "Turborepo",
      "Notion",
      "ClickUp",
    ],
  },
];
