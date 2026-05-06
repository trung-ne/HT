import type { Metadata } from "next";
import { splitPageContent, type SplitPageKey } from "@/features/home/page-content";
import { SUPPORTED_LANGUAGES, type LanguageCode } from "@/lib/i18n";

export function getSplitPageMetadata(lang: LanguageCode, pageKey: SplitPageKey): Metadata {
  const content = splitPageContent[lang][pageKey];
  const description = content.paragraphs[0] ?? content.title;

  return {
    title: `${content.title} | redhomes`,
    description,
    alternates: {
      canonical: `/${lang}/${pageKey}`,
      languages: Object.fromEntries(
        SUPPORTED_LANGUAGES.map((code) => [code, `/${code}/${pageKey}`]),
      ),
    },
  };
}
