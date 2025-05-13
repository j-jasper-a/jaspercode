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
