"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { localeLabels, localeLanguageTags, localizedPath, type Locale } from "@/lib/vietnam/i18n";

// Redhomes only supports 4 languages (ja/en/zh/vi); zh-TW is excluded
const displayItems: Array<{ lang: string; locale: Locale; label: string }> = [
  { lang: "ja",  locale: "ja",    label: localeLabels["ja"] },
  { lang: "en",  locale: "en",    label: localeLabels["en"] },
  { lang: "zh",  locale: "zh-CN", label: localeLabels["zh-CN"] },
  { lang: "vi",  locale: "vi",    label: localeLabels["vi"] },
];

type LanguageSwitcherProps = {
  locale: Locale;
  variant: "desktop" | "mobile";
};

function switchLocalePath(pathname: string, targetLang: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0) {
    segments[0] = targetLang;
    return "/" + segments.join("/");
  }
  return localizedPath(targetLang);
}

export function LanguageSwitcher({ locale, variant }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = displayItems.find((i) => i.locale === locale)?.lang ?? "ja";

  if (variant === "desktop") {
    return (
      <select
        value={currentLang}
        onChange={(e) => router.push(switchLocalePath(pathname, e.target.value))}
        className="h-8 cursor-pointer rounded-md border border-[var(--onsen-line)] bg-white px-2 pr-7 text-xs font-medium text-neutral-700 focus:outline-none focus:ring-1 focus:ring-[var(--onsen-orange)] hover:border-[var(--onsen-orange)]"
        aria-label="Select language"
      >
        {displayItems.map((item) => (
          <option key={item.lang} value={item.lang}>
            {item.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 pt-4">
      {displayItems.map((item) => (
        <Link
          key={item.lang}
          href={switchLocalePath(pathname, item.lang)}
          hrefLang={localeLanguageTags[item.locale]}
          className={`rounded-md border px-3 py-2 text-sm ${
            item.locale === locale
              ? "border-[var(--onsen-orange)] bg-[var(--onsen-soft-orange)]"
              : "border-[var(--onsen-line)]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
