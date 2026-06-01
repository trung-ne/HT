import Image from "next/image";
import Link from "next/link";
import type { LanguageCode } from "@/lib/i18n";
import { getRelatedPosts, getPostBySlug, formatDate } from "@/features/blog/repository";
import type { BlogPost } from "@/features/blog/types";

type RelatedPostsProps = {
  currentPost: BlogPost;
  lang: LanguageCode;
  limit?: number;
};

export function RelatedPosts({
  currentPost,
  lang,
  limit = 3,
}: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentPost, lang, limit);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="blog-related">
      <h3 className="blog-related__title">
        {lang === "ja"
          ? "関連記事"
          : lang === "en"
            ? "Related Articles"
            : lang === "zh"
              ? "相关文章"
              : "Bài viết liên quan"}
      </h3>
      <div className="blog-related__grid">
        {relatedPosts.map((post) => (
          <div key={post.slug} className="blog-related-card">
            <Link href={`/${lang}/blog/${post.slug}`} className="blog-related-card__image-link">
              <div className="blog-related-card__image-wrap">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="blog-related-card__image"
                />
              </div>
            </Link>
            <div className="blog-related-card__body">
              <p className="blog-related-card__category">{post.category}</p>
              <h4 className="blog-related-card__title">
                <Link href={`/${lang}/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h4>
              <p className="blog-related-card__meta">
                {formatDate(post.publishedAt, lang)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedPosts;
