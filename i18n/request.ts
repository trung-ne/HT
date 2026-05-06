export const defaultLocale = 'ja';
export const locales = ['ja', 'en', 'zh', 'vi'] as const;

export type Locale = (typeof locales)[number];
