import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  type: z.string(),
  images: z.array(z.string()),
  url: z.string(),
  repoUrl: z.string(),
  stack: z.array(z.string()),
});

export type Project = z.infer<typeof projectSchema>;

export const projects: Project[] = [
  {
    id: "1",
    title: "Bookverse",
    summary:
      "An online book store. It features a user-friendly and stylish interface.",
    type: "ecommerce",
    images: ["/assets/work/bookverse-1.webp", "/assets/work/bookverse-2.webp"],
    url: "https://bookverse.jaspercode.com",
    repoUrl: "https://github.com/j-jasper-a/bookverse-demo",
    stack: [
      "HTML/CSS",
      "JavaScript/TypeScript",
      "React (Next.js)",
      "Tailwind CSS",
      "Material UI",
      "TanStack Query",
      "Node.js (NestJS)",
      "Firebase",
    ],
  },
  {
    id: "2",
    title: "Wizzle",
    summary:
      "A quiz web app where you can create and take quizzes. It features a sleek and minimalistic interface, a simple way to navigate, and a user-friendly admin panel for managing quizzes, questions, and answers.",
    type: "saas",
    images: ["/assets/work/wizzle-1.webp", "/assets/work/wizzle-2.webp"],
    url: "https://wizzle.jaspercode.com",
    repoUrl: "https://github.com/j-jasper-a/wizzle-demo",
    stack: [
      "HTML/CSS",
      "JavaScript/TypeScript",
      "React (Next.js)",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Node.js (Express)",
      "Firebase",
    ],
  },
  {
    id: "3",
    title: "Portfolio",
    summary:
      "A versatile website that showcases my software engineering skills through a curated portfolio and ever-evolving, thoughtfully designed features that reflect my growing expertise.",
    type: "marketing",
    images: [
      "/assets/work/jaspercode-1.webp",
      "/assets/work/jaspercode-2.webp",
    ],
    url: "https://jaspercode.com",
    repoUrl: "https://github.com/j-jasper-a/jaspercode",
    stack: [
      "HTML/CSS",
      "JavaScript/TypeScript",
      "React (Next.js)",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    id: "4",
    title: "Ukiyo",
    summary:
      "A classy landing page for a Japanese fine dining restaurant. It features a dynamic menu and a user-friendly interface, making it easy for visitors to find what they're looking for and make a reservation.",
    type: "marketing",
    images: ["/assets/work/ukiyo-1.webp", "/assets/work/ukiyo-2.webp"],
    url: "https://ukiyo-demo.jaspercode.com/",
    repoUrl: "https://github.com/j-jasper-a/ukiyo-demo",
    stack: [
      "HTML/CSS",
      "JavaScript/TypeScript",
      "Astro",
      "React",
      "Tailwind CSS",
      "Motion",
    ],
  },
];

const featuredProjectIds = ["1", "2", "3", "4"];

export const featuredProjects = projects.filter((project) =>
  featuredProjectIds.includes(project.id),
);
