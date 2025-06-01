import { z } from "zod";

export const navLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  disabled: z.boolean(),
});

export type NavLink = z.infer<typeof navLinkSchema>;

export const navLinks: NavLink[] = [
  {
    label: "Work",
    href: "#work",
    disabled: false,
  },
  {
    label: "Writing",
    href: "/writing",
    disabled: true,
  },
  {
    label: "About",
    href: "#about",
    disabled: false,
  },
  {
    label: "Contact",
    href: "#contact",
    disabled: false,
  },
];
