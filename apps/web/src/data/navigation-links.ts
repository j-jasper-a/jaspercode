import { z } from "zod";

export const navigationLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  disabled: z.boolean(),
});

export type NavigationLink = z.infer<typeof navigationLinkSchema>;

export const navigationLinks: NavigationLink[] = [
  {
    label: "Work",
    href: "/#work",
    disabled: false,
  },
  {
    label: "Blog",
    href: "/blog",
    disabled: false,
  },
  {
    label: "About",
    href: "/#about",
    disabled: false,
  },
  {
    label: "Contact",
    href: "/#contact",
    disabled: false,
  },
];
