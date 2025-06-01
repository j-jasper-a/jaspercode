import { z } from "zod";

export const socialsSchema = z.record(z.string(), z.string());

export type Socials = z.infer<typeof socialsSchema>;

export const socials: Socials = {
  GITHUB_PROFILE_URL: "https://github.com/j-jasper-a",
  EMAIL_ADDRESS: "contact@jaspercode.com",
};
