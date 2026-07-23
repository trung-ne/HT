import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/vietnam/json-ld";
import { LeadForm } from "@/components/vietnam/lead-form";
import { ProjectGallery } from "@/components/vietnam/project-gallery";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { Badge } from "@/components/vietnam/ui/badge";
import { siteConfig } from "@/features/vietnam/content/site";
import { getProject, projects } from "@/features/vietnam/content/projects";
import { labels, uiCopy } from "@/features/vietnam/content/texts";
import { t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata, projectJsonLd } from "@/lib/vietnam/seo";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    lang,
    path: `/projects/${slug}`,
    title: project.title,
    description: project.summary,
    image: project.hero,
  });
}

export default async function VietnamProjectDetailPage({ params }: Params) {
  const { lang, slug } = await params;
  const locale = toVietnamLocale(lang) as Locale;
  const project = getProject(slug);
  if (!project) notFound();

  const projectUrl = `${siteConfig.baseUrl}/${lang}/vietnam/projects/${project.slug}`;
  const specRows = [
    { id: "location", label: t(labels.location, locale), value: t(project.location, locale) },
    { id: "area", label: t(labels.area, locale), value: project.area },
    { id: "scale", label: t(uiCopy.projects.detail.scale, locale), value: project.scale },
    { id: "status", label: t(labels.status, locale), value: t(project.status, locale) },
    ...project.specs.map((spec, index) => ({
      id: `spec-${index}`,
      label: t(spec.label, locale),
      value: spec.value,
    })),
    { id: "source-pages", label: t(uiCopy.projects.detail.sourcePages, locale), value: project.sourcePages.join(", ") },
  ];

  return (
    <>
      <JsonLd data={projectJsonLd(t(project.title, locale), t(project.summary, locale), t(project.location, locale), projectUrl)} />

      {/* Hero */}
      <section className="relative min-h-[58vh] overflow-hidden bg-neutral-950">
        <Image src={project.hero} alt={t(project.title, locale)} fill priority className="object-cover opacity-78" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/5" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-7xl items-end px-4 py-12 md:px-8">
          <div className="max-w-3xl text-white">
            <Badge className="mb-4 rounded-md bg-[var(--onsen-orange)]">
              {t(uiCopy.projects.categoryLabel[project.category], locale)}
            </Badge>
            <h1 className="text-4xl font-semibold md:text-6xl">{t(project.title, locale)}</h1>
            <p className="mt-5 text-lg leading-8 text-white/88">{t(project.summary, locale)}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1fr_0.8fr] md:px-8">
        <div className="space-y-12">

          {/* 1. Tổng quan */}
          {project.overview && (
            <div>
              <SectionHeading eyebrow={t(uiCopy.projects.detail.overviewEyebrow, locale)} title={t(uiCopy.projects.detail.overviewTitle, locale)} />
              <div className="space-y-4">
                {t(project.overview, locale).split("\n\n").map((para, i) => (
                  <p key={i} className="whitespace-pre-line leading-7 text-[var(--onsen-muted)]">{para}</p>
                ))}
              </div>
            </div>
          )}

          {/* 3. Vi tri */}
          {project.locationDescription && (
            <div>
              <SectionHeading eyebrow={t(uiCopy.projects.detail.locationEyebrow, locale)} title={t(uiCopy.projects.detail.locationTitle, locale)} />
              <div className="space-y-4">
                {t(project.locationDescription, locale).split("\n\n").map((para, i) => (
                  <p key={i} className="whitespace-pre-line leading-7 text-[var(--onsen-muted)]">{para}</p>
                ))}
              </div>
            </div>
          )}

          {/* 4. Tiện ích */}
          {project.amenities && (
            <div>
              <SectionHeading eyebrow={t(uiCopy.projects.detail.amenitiesEyebrow, locale)} title={t(uiCopy.projects.detail.amenitiesTitle, locale)} />
              <div className="flex flex-wrap gap-2 mt-2">
                {t(project.amenities, locale).split(" · ").map((item, i) => (
                  <span key={i} className="rounded-full border border-[var(--onsen-line)] bg-neutral-50 px-3 py-1 text-sm text-[var(--onsen-muted)]">{item.trim()}</span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div>
              <SectionHeading eyebrow={t(uiCopy.projects.detail.highlightsEyebrow, locale)} title={t(uiCopy.projects.detail.highlightsTitle, locale)} />
              <div className="grid gap-4">
                {project.highlights.map((highlight) => (
                  <div key={t(highlight, locale)} className="rounded-lg border border-[var(--onsen-line)] p-5 leading-7 text-[var(--onsen-muted)]">
                    {t(highlight, locale)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Thông số */}
          <div>
            <SectionHeading eyebrow={t(uiCopy.projects.detail.eyebrow, locale)} title={t(labels.specs, locale)} />
            <div className="overflow-hidden rounded-lg border border-[var(--onsen-line)]">
              {specRows.map((row) => (
                <div key={row.id} className="grid grid-cols-[160px_1fr] border-b border-[var(--onsen-line)] last:border-b-0">
                  <div className="bg-neutral-50 px-4 py-3 text-sm font-semibold">{row.label}</div>
                  <div className="px-4 py-3 text-sm text-[var(--onsen-muted)]">{row.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Tài liệu */}
          {project.documents && project.documents.length > 0 && (
            <div>
              <SectionHeading eyebrow={t(uiCopy.projects.detail.documentsEyebrow, locale)} title={t(uiCopy.projects.detail.documentsTitle, locale)} />
              <ul className="space-y-2">
                {project.documents.map((doc, i) => (
                  <li key={i}>
                    <Link href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-[var(--onsen-line)] px-4 py-3 text-sm text-[var(--onsen-muted)] hover:bg-neutral-50">
                      <span>📄</span>
                      <span>{t(doc.label, locale)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 7. Tin du an */}
          {project.news && project.news.length > 0 && (
            <div>
              <SectionHeading eyebrow={t(uiCopy.projects.detail.newsEyebrow, locale)} title={t(uiCopy.projects.detail.newsTitle, locale)} />
              <ul className="space-y-2">
                {project.news.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-lg border border-[var(--onsen-line)] px-4 py-3 text-sm text-[var(--onsen-muted)]">
                    <span className="mt-0.5 text-[var(--onsen-orange)]">▸</span>
                    <span>{t(item.title, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 8. Hinh anh */}
          {project.gallery.length > 0 && (
            <div>
              <SectionHeading eyebrow={t(uiCopy.projects.detail.galleryEyebrow, locale)} title={t(uiCopy.projects.detail.galleryTitle, locale)} />
              <ProjectGallery project={project} locale={locale} />
            </div>
          )}

        </div>

        <aside>
          <SectionHeading eyebrow={t(uiCopy.projects.detail.consultEyebrow, locale)} title={t(uiCopy.projects.detail.consultTitle, locale)} />
          <LeadForm locale={locale} />
        </aside>
      </section>
    </>
  );
}