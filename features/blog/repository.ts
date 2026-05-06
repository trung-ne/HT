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
