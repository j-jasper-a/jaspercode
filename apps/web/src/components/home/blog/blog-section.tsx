import { ArticleCard } from "@/components/features/blog/article-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fetchAllArticles } from "@/lib/api/articles";

export async function BlogSection() {
  const articles = await fetchAllArticles();

  return (
    <section id="work" className="pt-20">
      <SectionHeading title="Blog" description="Thoughts and guides" />
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
