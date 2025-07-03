import { z } from "zod";

export const SkillSchema = z.object({
  name: z.string(),
  technologies: z.array(z.string()),
});

export type Skill = z.infer<typeof SkillSchema>;

export const skills: Skill[] = [
  {
    name: "Frontend",
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt",
      "Astro",
      "CSS",
      "Tailwind CSS",
      "Sass",
      "Material UI",
      "Motion",
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
    technologies: [
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
    technologies: [
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
