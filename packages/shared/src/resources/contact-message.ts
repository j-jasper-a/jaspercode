import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;
