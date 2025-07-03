import { z } from "zod";

export const jobSchema = z.object({
  id: z.string(),
  company: z.object({
    name: z.string(),
    url: z.string(),
    logoUrl: z.string(),
    location: z.string().optional(),
  }),
  position: z.string(),
  type: z.string(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime().optional(),
  accomplishments: z.array(z.string()),
});

export type Job = z.infer<typeof jobSchema>;

export const jobs: Job[] = [
  {
    id: "1",
    company: {
      name: "Grey Stone International",
      url: "https://www.greystoneintl.com/",
      logoUrl: "/assets/experience/grey-stone-international-logo.webp",
      location: "Dhaka, Bangladesh",
    },
    position: "Technical Operations Manager",
    type: "Full-time",
    startDate: "2018-01-01T00:00:00+06:00",
    endDate: "2021-02-01T00:00:00+06:00",
    accomplishments: [
      "Designed, launched, and administered corporate website, contributing to 35% of total sales",
      "Investigated and quantified trends to predict success rate, matching expectations 8 out of 10 times",
      "Coordinated logistics between buyers and suppliers, streamlining order/shipment workflows",
    ],
  },
  {
    id: "2",
    company: {
      name: "Grey Stone International",
      url: "https://www.greystoneintl.com/",
      logoUrl: "/assets/experience/grey-stone-international-logo.webp",
      location: "Dhaka, Bangladesh",
    },
    position: "Software Engineer",
    type: "Full-time",
    startDate: "2021-03-01T00:00:00+06:00",
    endDate: "2023-05-01T00:00:00+06:00",
    accomplishments: [
      "Delivered dashboard for global fintech startup ahead of schedule, guaranteeing smooth launch",
      "Refactored marketing website for ad optimization startup, reducing load times by 75% ",
      "Guaranteed swift onboarding of new employees in data ingestion team by normalizing 3rd-party APIs",
    ],
  },
  {
    id: "3",
    company: {
      name: "Canvas Developers",
      url: "https://www.canvasdevelopers.com/",
      logoUrl: "/assets/experience/canvas-developers-logo.webp",
    },
    position: "Senior Software Engineer",
    type: "Full-time",
    startDate: "2023-06-01T00:00:00+06:00",
    accomplishments: [
      "Spearheaded development of B2C management SaaS product, achieving 225% higher engagement",
      "Devised and documented monolithic REST API, streamlining operations and boosting stability",
      "Crafted native-like user experience for web app on mobile devices, increasing user retention by 280%",
    ],
  },
];
