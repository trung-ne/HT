import type { MetadataRoute } from "next";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ROUTES = ["", "v-about", "v-service", "blog", "contact", "cdmmr"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SUPPORTED_LANGUAGES.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: route ? `${BASE_URL}/${lang}/${route}` : `${BASE_URL}/${lang}`,
      lastModified,
      changeFrequency: route ? "weekly" : "daily",
      priority: route ? 0.7 : 1,
    })),
  );
}
