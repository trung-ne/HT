import Link from "next/link";
import type { LanguageCode } from "@/lib/i18n";
import type { BlogPostMeta } from "@/features/blog/types";
import { formatDate } from "@/features/blog/repository";
import { useT } from "@/lib/ui-strings";

type BlogCardProps = {
  post: BlogPostMeta;
  lang: LanguageCode;
};

export default function BlogCard({ post, lang }: BlogCardProps) {
  const href = `/${lang}/blog/${post.slug}`;
  const t = useT(lang);
  const categoryLabel = t.blogCategories[post.category];
  const dateStr = formatDate(post.publishedAt, lang);

  return (
    <article className="blog-card">
      <Link href={href} className="blog-card__image-link">
        <div className="blog-card__image-wrap">
          <img
            src={post.coverImage}
            alt={post.title}
            className="blog-card__image"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className={`blog-card__category blog-card__category--${post.category}`}>
            {categoryLabel}
          </span>
          <span className="blog-card__reading">{post.readingMinutes} min</span>
        </div>
        <h2 className="blog-card__title">
          <Link href={href}>{post.title}</Link>
        </h2>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__footer">
          <time className="blog-card__date" dateTime={post.publishedAt}>
            {dateStr}
          </time>
          <Link href={href} className="blog-card__read-more">
            {t.blogReadMore}
          </Link>
        </div>
      </div>
    </article>
  );
}

