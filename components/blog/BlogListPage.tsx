"use client";

import { useState } from "react";
import type { LanguageCode } from "@/lib/i18n";
import type { BlogPostMeta, BlogCategory } from "@/features/blog/types";
import BlogCard from "./BlogCard";
import { useT } from "@/lib/ui-strings";

const ALL_CATEGORIES: BlogCategory[] = ["market", "investment", "legal", "guide", "news"];

type BlogListPageProps = {
  posts: BlogPostMeta[];
  lang: LanguageCode;
};

export default function BlogListPage({ posts, lang }: BlogListPageProps) {
  const t = useT(lang);
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="blog-list-page">
      <div className="blog-list-page__header">
        <h1 className="blog-list-page__title">{t.blogPageTitle}</h1>
      </div>

      <div className="blog-list-page__filters">
        <button
          className={`blog-filter-btn${activeCategory === "all" ? " blog-filter-btn--active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          {t.blogFilterAll}
        </button>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`blog-filter-btn${activeCategory === cat ? " blog-filter-btn--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {t.blogCategories[cat]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="blog-list-page__empty">
          {t.blogNoPosts}
        </div>
      ) : (
        <div className="blog-list-page__grid">
          {filtered.map((post) => (
            <BlogCard key={`${post.lang}-${post.slug}`} post={post} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}
