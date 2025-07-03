import { z } from "zod/v4";

export const RawArticleMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  series: z.string().optional(),
  date: z.string(),
});

export const ArticleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
  description: z.string(),
  content: z.string(),
  coverImageUrl: z.url(),
  seriesTitle: z.string().optional(),
  readingTime: z.int().nonnegative(),
  author: z.object({
    fullName: z.string(),
    avatarUrl: z.string(),
  }),
  publishedAt: z.iso.datetime(),
});

export const ArticleCardSchema = ArticleSchema.omit({
  content: true,
});

export type RawArticleMeta = z.infer<typeof RawArticleMetaSchema>;
export type Article = z.infer<typeof ArticleSchema>;
export type ArticleCard = z.infer<typeof ArticleCardSchema>;
