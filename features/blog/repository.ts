import type { LanguageCode } from "@/lib/i18n";
import { allPosts } from "./posts";
import type { BlogPost, BlogPostMeta, BlogCategory } from "./types";

export function getPostsByLang(lang: LanguageCode): BlogPostMeta[] {
  return allPosts
    .filter((p) => p.lang === lang)
    .map(({ content: _content, ...meta }) => meta)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getPostBySlug(
  slug: string,
  lang: LanguageCode,
): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug && p.lang === lang);
}

export function getPostsByCategory(
  lang: LanguageCode,
  category: BlogCategory,
): BlogPostMeta[] {
  return getPostsByLang(lang).filter((p) => p.category === category);
}

export function getAllSlugs(): { slug: string; lang: LanguageCode }[] {
  return allPosts.map(({ slug, lang }) => ({ slug, lang }));
}

export function getRelatedPosts(
  post: BlogPost,
  lang: LanguageCode,
  limit: number = 3,
): BlogPostMeta[] {
  return getPostsByLang(lang)
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category || p.tags.some((t) => post.tags.includes(t))),
    )
    .slice(0, limit);
}

export function getUniqueCategories(lang: LanguageCode): BlogCategory[] {
  const categories = new Set(getPostsByLang(lang).map((p) => p.category));
  return Array.from(categories);
}

export function getUniqueTags(lang: LanguageCode): string[] {
  const tags = new Set<string>();
  getPostsByLang(lang).forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function searchPosts(
  query: string,
  lang: LanguageCode,
): BlogPostMeta[] {
  const lowerQuery = query.toLowerCase();
  return getPostsByLang(lang).filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.excerpt.toLowerCase().includes(lowerQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(lowerQuery)),
  );
}

export function formatDate(isoDate: string, lang: LanguageCode): string {
  const date = new Date(isoDate);
  const locale: Record<LanguageCode, string> = {
    ja: "ja-JP",
    en: "en-US",
    zh: "zh-CN",
    vi: "vi-VN",
  };
  return date.toLocaleDateString(locale[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
