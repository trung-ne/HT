import type { Metadata } from "next";
import {
  defaultLocale,
  type Locale,
  localizedAlternates,
  localizedPath,
  openGraphLocales,
  t,
  toVietnamLocale,
  type LocalizedText,
} from "@/lib/vietnam/i18n";
import { siteConfig } from "@/features/vietnam/content/site";

type SeoInput = {
  lang: string;
  path?: string;
  title: LocalizedText;
  description: LocalizedText;
  image?: string;
};

export function buildMetadata({
  lang,
  path = "/",
  title,
  description,
  image = "/assets/pdf-pages/cover_1.jpg",
}: SeoInput): Metadata {
  const locale = toVietnamLocale(lang);
  const url = new URL(localizedPath(lang, path), siteConfig.baseUrl);
  const titleText = t(title, lang);
  const descriptionText = t(description, lang);

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: titleText,
    description: descriptionText,
    alternates: {
      canonical: url.pathname,
      languages: {
        ...localizedAlternates(path),
        "x-default": localizedPath("ja", path),
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: titleText,
      description: descriptionText,
      url: url.pathname,
      siteName: siteConfig.name,
      locale: openGraphLocales[locale],
      alternateLocale: Object.values(openGraphLocales).filter(
        (item) => item !== openGraphLocales[locale]
      ),
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: descriptionText,
      images: [image],
    },
  };
}

export const baseDescriptions: Record<string, LocalizedText> = {
  home: {
    ja: "Onsen Fujiが提案するベトナムの温泉リゾート、コンドテル、工業用地への投資機会。",
    "zh-CN": "Onsen Fuji呈现越南温泉养生、海滨度假村及工业地产投资机会。",
    "zh-TW": "Onsen Fuji呈現越南溫泉養生、海濱度假村及工業地產投資機會。",
    vi: "Onsen Fuji giới thiệu cơ hội đầu tư BĐS nghỉ dưỡng wellness, căn hộ khách sạn và BĐS công nghiệp Việt Nam.",
    en: "Onsen Fuji presents Vietnam wellness resort, condotel and industrial real estate investment opportunities.",
  },
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteConfig.baseUrl}/#organization`,
    name: siteConfig.company.name,
    alternateName: "Onsen Fuji",
    url: siteConfig.baseUrl,
    address: siteConfig.company.address,
    inLanguage: ["ja-JP", "vi-VN", "zh-CN", "zh-TW", "en"],
    areaServed: ["Japan", "China", "Taiwan", "Vietnam"],
    brand: "Onsen Fuji",
  };
}

export function projectJsonLd(
  name: string,
  description: string,
  location: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Project",
    name,
    description,
    url,
    location: {
      "@type": "Place",
      name: location,
    },
  };
}
