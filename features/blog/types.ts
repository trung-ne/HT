import type { LanguageCode } from "@/lib/i18n";

export type BlogCategory =
  | "market"
  | "investment"
  | "legal"
  | "guide"
  | "news";

export type BlogPost = {
  slug: string;
  lang: LanguageCode;
  title: string;
  excerpt: string;
  content: string; // HTML
  category: BlogCategory;
  coverImage: string;
  publishedAt: string; // ISO date string
  readingMinutes: number;
  tags: string[];
};

export type BlogPostMeta = Omit<BlogPost, "content">;

