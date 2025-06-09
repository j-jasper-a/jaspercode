import { z } from "zod";

export const skillSetSchema = z.object({
  name: z.string(),
  skills: z.array(z.string()),
});

export type SkillSet = z.infer<typeof skillSetSchema>;

export const skillSets: SkillSet[] = [
  {
    name: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt",
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
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "PHP",
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "Vercel",
      "Neon",
      "Turborepo",
      "Notion",
      "ClickUp",
    ],
  },
];
