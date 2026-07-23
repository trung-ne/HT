import type { Metadata } from "next";
import { translations } from "@/features/home/content";
import { SUPPORTED_LANGUAGES, type LanguageCode } from "@/lib/i18n";

export function getHomeMetadata(lang: LanguageCode): Metadata {
  const t = translations[lang];

  return {
    title: `株式会社HTグローバル | ${t.philosophyTitle}`,
    description: t.splashDesc,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        SUPPORTED_LANGUAGES.map((code) => [code, `/${code}`]),
      ),
    },
  };
}
