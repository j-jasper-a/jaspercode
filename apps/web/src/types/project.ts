import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  images: z.array(z.string()),
  demoUrl: z.string(),
  repoUrl: z.string(),
  stack: z.array(z.string()),
});

export type Project = z.infer<typeof projectSchema>;
