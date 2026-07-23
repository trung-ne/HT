// Vietnam section i18n — mapped from redhomes LanguageCode (ja/en/zh/vi)
// zh maps to zh-CN; zh-TW is hidden in language switcher (redhomes only has 4 langs)

export const vietnamLocales = ["ja", "zh-CN", "zh-TW", "vi", "en"] as const;
export type Locale = (typeof vietnamLocales)[number];
export type LocalizedText = Record<Locale, string>;

export const defaultLocale: Locale = "ja";
export const locales = vietnamLocales;

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  vi: "Tiếng Việt",
  en: "English",
};

export const localeLanguageTags: Record<Locale, string> = {
  ja: "ja-JP",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  vi: "vi-VN",
  en: "en",
};

export const openGraphLocales: Record<Locale, string> = {
  ja: "ja_JP",
  "zh-CN": "zh_CN",
  "zh-TW": "zh_TW",
  vi: "vi_VN",
  en: "en_US",
};

/** Map redhomes LanguageCode (ja/en/zh/vi) to VietnamLocale */
export function toVietnamLocale(lang: string): Locale {
  if (lang === "zh") return "zh-CN";
  if ((vietnamLocales as readonly string[]).includes(lang)) return lang as Locale;
  return defaultLocale;
}

export function isLocale(value: string): value is Locale {
  return (vietnamLocales as readonly string[]).includes(value);
}

export function t(text: LocalizedText, lang: string): string {
  const locale = toVietnamLocale(lang);
  return text[locale] || text[defaultLocale];
}

/** Generate a URL within the vietnam section: /[lang]/vietnam/[path] */
export function localizedPath(lang: string, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const vietnamPath = `/vietnam${clean === "/" ? "" : clean}`;
  return `/${lang}${vietnamPath}`;
}

/** Generate hreflang alternate URLs for all locales */
export function localizedAlternates(path = ""): Record<string, string> {
  const redhomesLangs = ["ja", "en", "zh", "vi"] as const;
  return Object.fromEntries(
    redhomesLangs.map((l) => [
      localeLanguageTags[toVietnamLocale(l)],
      localizedPath(l, path),
    ])
  );
}
