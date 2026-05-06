export const SUPPORTED_LANGUAGES = ["ja", "en", "zh", "vi"] as const;
export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number];

export function isSupportedLanguage(value: string): value is LanguageCode {
  return SUPPORTED_LANGUAGES.includes(value as LanguageCode);
}

export function withLang(lang: LanguageCode, path: string) {
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}
