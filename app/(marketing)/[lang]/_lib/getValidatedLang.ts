import { isSupportedLanguage, type LanguageCode } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function getValidatedLang(
  paramsPromise: Promise<{ lang: string }>,
): Promise<LanguageCode> {
  const { lang } = await paramsPromise;

  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  return lang;
}
