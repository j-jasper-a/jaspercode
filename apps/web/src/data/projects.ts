import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Bookverse",
    summary:
      "An online book store built with Next.js, Tailwind CSS, and Sanity.io. It features a user-friendly interface, secure payment processing, and a user-friendly admin panel for managing products, orders, and customers.",
    images: ["/assets/work/bookverse-1.webp", "/assets/work/bookverse-2.webp"],
    demoUrl: "https://bookverse.jaspercode.com",
    repoUrl: "https://github.com/j-jasper-a/bookverse-demo",
    stack: [
      "TypeScript",
      "Next.js",
      "Material UI",
      "Redux Toolkit",
      "TanStack Query",
      "Express",
      "Firebase",
    ],
  },
  {
    id: "2",
    title: "Wizzle",
    summary:
      "A quiz web app where you can create and take quizzes. It features a sleek and minimalistic interface, a simple way to navigate, and a user-friendly admin panel for managing quizzes, questions, and answers.",
    images: ["/assets/work/wizzle-1.webp", "/assets/work/wizzle-2.webp"],
    demoUrl: "https://wizzle.jaspercode.com",
    repoUrl: "https://github.com/j-jasper-a/wizzle-demo",
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Express",
      "Firebase",
    ],
  },
  {
    id: "3",
    title: "Portfolio",
    summary:
      "A versatile website that showcases my software engineering skills through a curated portfolio and ever-evolving, thoughtfully designed features that reflect my growing expertise.",
    images: [
      "/assets/work/jaspercode-1.webp",
      "/assets/work/jaspercode-2.webp",
    ],
    demoUrl: "https://jaspercode.com",
    repoUrl: "https://github.com/j-jasper-a/jaspercode",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: "4",
    title: "Ukiyo",
    summary:
      "A classy landing page for a Japanese fine dining restaurant. It features a dynamic menu and a user-friendly interface, making it easy for visitors to find what they're looking for and make a reservation.",
    images: ["/assets/work/ukiyo-1.webp", "/assets/work/ukiyo-2.webp"],
    demoUrl: "https://ukiyo.jaspercode.com/",
    repoUrl: "https://github.com/j-jasper-a/ukiyo",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
];
