import type { MetadataRoute } from "next";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n";
import { awards, csrStories } from "@/features/vietnam/content/csr";
import { partners } from "@/features/vietnam/content/partners";
import { projects } from "@/features/vietnam/content/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ROUTES = ["", "v-about", "v-service", "blog", "contact", "cdmmr"] as const;
const VIETNAM_STATIC_ROUTES = ["vietnam", "vietnam/about", "vietnam/fields", "vietnam/projects", "vietnam/partners", "vietnam/csr", "vietnam/awards", "vietnam/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const redhomesUrls = SUPPORTED_LANGUAGES.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: route ? `${BASE_URL}/${lang}/${route}` : `${BASE_URL}/${lang}`,
      lastModified,
      changeFrequency: (route ? "weekly" : "daily") as "weekly" | "daily",
      priority: route ? 0.7 : 1,
    })),
  );

  const vietnamUrls = SUPPORTED_LANGUAGES.flatMap((lang) => {
    const staticUrls = VIETNAM_STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}/${lang}/${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "vietnam" ? 0.9 : 0.8,
    }));
    const projectUrls = projects.map((p) => ({
      url: `${BASE_URL}/${lang}/vietnam/projects/${p.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));
    const partnerUrls = partners.map((p) => ({
      url: `${BASE_URL}/${lang}/vietnam/partners/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
    const csrUrls = csrStories.map((s) => ({
      url: `${BASE_URL}/${lang}/vietnam/csr/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
    const awardUrls = awards.map((a) => ({
      url: `${BASE_URL}/${lang}/vietnam/awards/${a.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
    return [...staticUrls, ...projectUrls, ...partnerUrls, ...csrUrls, ...awardUrls];
  });

  return [...redhomesUrls, ...vietnamUrls];
}
