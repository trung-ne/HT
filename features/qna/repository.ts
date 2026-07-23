import type { LanguageCode } from "@/lib/i18n";
import { allQnAs } from "./qnas";
import type { QnAItem, QnACategory } from "./types";

export function getQnAsByLang(lang: LanguageCode): QnAItem[] {
  return allQnAs
    .filter((q) => q.lang === lang)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getQnAsByCategory(
  lang: LanguageCode,
  category: QnACategory,
): QnAItem[] {
  return getQnAsByLang(lang).filter((q) => q.category === category);
}

export function getQnACategories(lang: LanguageCode): QnACategory[] {
  const categories = new Set(
    getQnAsByLang(lang).map((q) => q.category).filter(Boolean),
  );
  return Array.from(categories) as QnACategory[];
}

export function searchQnAs(query: string, lang: LanguageCode): QnAItem[] {
  const lowerQuery = query.toLowerCase();
  return getQnAsByLang(lang).filter(
    (q) =>
      q.question.toLowerCase().includes(lowerQuery) ||
      q.answer.toLowerCase().includes(lowerQuery),
  );
}

