import { z } from "zod";

export const navLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export type NavLink = z.infer<typeof navLinkSchema>;
