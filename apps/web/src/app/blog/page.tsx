import { ArticleCard } from "@/components/features/blog/article-card";
import { fetchAllArticles } from "@/lib/api/articles";

export default async function Page() {
  const articles = await fetchAllArticles();

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col p-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
