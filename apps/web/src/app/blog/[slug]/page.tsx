import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MDXRemoteDisplay } from "@/components/ui/mdx";
import { fetchAllArticles, fetchArticleBySlug } from "@/lib/api/articles";
import dayjs from "dayjs";
import { Metadata } from "next";
import Image from "next/image";

type PageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = await fetchAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;

  const article = await fetchArticleBySlug(slug);

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://jaspercode.com/blog/${slug}`,
      siteName: "JasperCode",
      images: [
        {
          url: `/assets/articles/${slug}-og.webp`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [`/assets/articles/${slug}-og.webp`],
      creator: "@Jasper_JJA",
    },
  };
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;

  const article = await fetchArticleBySlug(slug);

  if (!article) {
    return <div>Post not found</div>;
  }

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-4">
      <Image
        src={article.coverImageUrl}
        alt={article.title}
        width={1200}
        height={630}
        className="rounded-2xl"
      />
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={article.author.avatarUrl}
              alt={article.author.fullName}
            />
            <AvatarFallback>
              {article.author.fullName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{article.author.fullName}</p>
            <p className="text-muted-foreground text-xs">
              {dayjs(article.publishedAt).format("MMM D, YYYY")}
            </p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{`${article.readingTime} minutes`}</p>
      </div>
      <MDXRemoteDisplay content={article.content} />
    </main>
  );
}
