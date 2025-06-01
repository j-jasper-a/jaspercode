import { z } from "zod";

export const socialLinksSchema = z.record(z.string(), z.string());

export type SocialLinks = z.infer<typeof socialLinksSchema>;

export const socialLinks: SocialLinks = {
  GITHUB_PROFILE_URL: "https://github.com/j-jasper-a",
  EMAIL_ADDRESS: "contact@jaspercode.com",
};
