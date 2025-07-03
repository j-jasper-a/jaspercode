import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { faker } from "@faker-js/faker";
import { Article, ArticleCard, RawArticleMeta } from "@jaspercode/schemas";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { getFrontmatter } from "next-mdx-remote-client/utils";

dayjs.extend(utc);
dayjs.extend(timezone);

const computedTimezone = dayjs.tz.guess();
const SOURCE = join(process.cwd(), "src/content/articles");
const isDev = process.env.NODE_ENV === "development";

class ArticleCache {
  private articles: ArticleCard[] | null = null;
  private articleMap = new Map<string, Article>();

  getAll(): ArticleCard[] | null {
    return this.articles;
  }

  setAll(articles: ArticleCard[]) {
    this.articles = articles;
  }

  get(slug: string): Article | undefined {
    return this.articleMap.get(slug);
  }

  set(slug: string, article: Article): void {
    this.articleMap.set(slug, article);
  }

  has(slug: string): boolean {
    return this.articleMap.has(slug);
  }

  clear(): void {
    this.articleMap.clear();
    this.articles = null;
  }
}

const articleCache = new ArticleCache();

function parseArticleMeta(
  frontmatter: RawArticleMeta,
): Omit<Article, "content" | "slug" | "coverImageUrl" | "readingTime"> {
  return {
    title: frontmatter.title,
    tags: frontmatter.tags,
    description: frontmatter.description,
    seriesTitle: frontmatter.series,
    author: {
      fullName: "Jihan Jasper Al Rashid",
      avatarUrl: "/assets/about/photo.webp",
    },
    publishedAt: dayjs(frontmatter.date).tz(computedTimezone).format(),
  };
}

export async function fetchAllArticles(): Promise<ArticleCard[]> {
  const cached = articleCache.getAll();
  if (!isDev && cached) return cached;

  const files = await readdir(SOURCE);
  const articles: ArticleCard[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const slug = file.slice(0, -4);
    const filePath = join(SOURCE, file);
    const source = await readFile(filePath, "utf-8");
    const { frontmatter, strippedSource } =
      getFrontmatter<RawArticleMeta>(source);

    const parsedMeta = parseArticleMeta(frontmatter);
    const wordsArray = strippedSource.split(" ");
    const readingTime = Math.ceil(wordsArray.length / 200);

    articles.push({
      ...parsedMeta,
      slug,
      coverImageUrl: `/assets/articles/${slug}.webp`,
      readingTime,
    });
  }

  articles.sort(
    (a, b) => dayjs(b.publishedAt).valueOf() - dayjs(a.publishedAt).valueOf(),
  );

  articleCache.setAll(articles);
  return articles;
}

export async function fetchArticleBySlug(slug: string): Promise<Article> {
  const cached = articleCache.get(slug);
  if (!isDev && cached) return cached;

  const filePath = join(SOURCE, `${slug}.mdx`);
  try {
    const source = await readFile(filePath, "utf-8");
    const { frontmatter, strippedSource } =
      getFrontmatter<RawArticleMeta>(source);

    const parsedMeta = parseArticleMeta(frontmatter);
    const wordsArray = strippedSource.split(" ");
    const readingTime = Math.ceil(wordsArray.length / 200);

    const article: Article = {
      ...parsedMeta,
      slug,
      coverImageUrl: `/assets/articles/${slug}.webp`,
      readingTime,
      content: strippedSource,
    };

    articleCache.set(slug, article);
    return article;
  } catch (err) {
    console.error(`Error reading article file at ${filePath}:`, err);
    throw new Error(`Article not found: ${slug}`);
  }
}

export async function fetchAllFakeArticles(): Promise<ArticleCard[]> {
  Promise.resolve(setTimeout(() => {}, 0)); // Simulate async if needed

  const fakeArticles: ArticleCard[] = Array.from({ length: 64 }, () => ({
    slug: faker.helpers.slugify(faker.lorem.words(4)),
    title: faker.lorem.sentence(6),
    description: faker.lorem.sentence(12),
    tags: faker.helpers.arrayElements(
      ["frontend", "backend", "fullstack", "devops", "design"],
      2,
    ),
    coverImageUrl: faker.image.urlPicsumPhotos({
      width: 800,
      height: 450,
      blur: 0,
      grayscale: false,
    }),
    seriesTitle: faker.datatype.boolean()
      ? faker.helpers.arrayElement([
          "Web Development",
          "Software Engineering",
          "Design Patterns",
          "DevOps Practices",
          "Frontend Frameworks",
        ])
      : undefined,
    readingTime: faker.number.int({ min: 1, max: 10 }),
    author: {
      fullName: faker.person.fullName(),
      avatarUrl: faker.image.personPortrait({
        size: 512,
        sex: "male",
      }),
    },
    publishedAt: dayjs(faker.date.past()).tz(computedTimezone).format(),
  }));

  return fakeArticles;
}
