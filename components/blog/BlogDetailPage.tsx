import Link from "next/link";
import type { LanguageCode } from "@/lib/i18n";
import type { BlogPost, BlogPostMeta } from "@/features/blog/types";
import { formatDate } from "@/features/blog/repository";
import { useT } from "@/lib/ui-strings";
import BlogCard from "./BlogCard";

type BlogDetailPageProps = {
  post: BlogPost;
  lang: LanguageCode;
  related: BlogPostMeta[];
};

export default function BlogDetailPage({ post, lang, related }: BlogDetailPageProps) {
  const t = useT(lang);
  const categoryLabel = t.blogCategories[post.category];
  const dateStr = formatDate(post.publishedAt, lang);
  const heroImage = post.coverImage;

  return (
    <div className="blog-detail-page-wrap">
      <div className="page-hero page-hero--compact">
        <div className="page-hero__bg" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="page-hero__overlay">
          <div className="page-hero__inner">
            <p className="page-hero__eyebrow">BLOG</p>
            <h1 className="page-hero__title">{post.title}</h1>
            <p className="page-hero__subtitle">{post.excerpt}</p>
          </div>
        </div>
      </div>

      <div className="blog-detail-page">
        <div className="blog-detail-page__back">
          <Link href={`/${lang}/blog`}>{t.blogBackToList}</Link>
        </div>

        <article className="blog-article">
        <header className="blog-article__header">
          <div className="blog-article__meta">
            <span className={`blog-card__category blog-card__category--${post.category}`}>
              {categoryLabel}
            </span>
            <time dateTime={post.publishedAt}>{dateStr}</time>
            <span>{post.readingMinutes} min</span>
          </div>
          <h2 className="blog-article__title">{post.title}</h2>
        </header>

        <div
          className="blog-article__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags.length > 0 && (
          <div className="blog-article__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-article__tag">
                #{tag}
              </span>
            ))}
          </div>
        )}
        </article>

        {related.length > 0 && (
          <section className="blog-related">
            <h2 className="blog-related__title">{t.blogRelatedTitle}</h2>
            <div className="blog-list-page__grid">
              {related.map((p) => (
                <BlogCard key={`${p.lang}-${p.slug}`} post={p} lang={lang} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
