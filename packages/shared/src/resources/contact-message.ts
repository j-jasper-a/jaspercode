import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(1, "Please enter a valid name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(1, "Please enter a message."),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;
