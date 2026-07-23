import type { Metadata } from "next";
import { ProjectFilters } from "@/components/vietnam/project-filters";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { projects } from "@/features/vietnam/content/projects";
import { uiCopy } from "@/features/vietnam/content/texts";
import { t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata } from "@/lib/vietnam/seo";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    lang,
    path: "/projects",
    title: uiCopy.projects.metadataTitle,
    description: uiCopy.projects.metadataDescription,
  });
}

export default async function VietnamProjectsPage({ params }: Params) {
  const { lang } = await params;
  const locale = toVietnamLocale(lang) as Locale;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading eyebrow={t(uiCopy.projects.list.eyebrow, locale)} title={t(uiCopy.projects.list.title, locale)} />
      <ProjectFilters projects={projects} locale={locale} />
    </section>
  );
}
