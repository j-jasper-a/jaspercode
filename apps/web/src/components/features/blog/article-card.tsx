import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArticleCard as ArticleCardType } from "@jaspercode/schemas";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  article: ArticleCardType;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="group">
      <article className="flex h-full flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div className="relative aspect-[40/21] overflow-x-hidden rounded-lg">
            <Image
              src={article.coverImageUrl}
              alt={article.title}
              width={1200}
              height={630}
              className="size-full object-cover"
            />
          </div>
          <p className="text-xl font-semibold leading-tight tracking-tight">
            {article.title}
          </p>
        </div>
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
      </article>
    </Link>
  );
}
