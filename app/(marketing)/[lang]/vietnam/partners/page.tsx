import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { projects } from "@/features/vietnam/content/projects";
import { partners } from "@/features/vietnam/content/partners";
import { partnerGroups, uiCopy, labels } from "@/features/vietnam/content/texts";
import { localizedPath, t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata } from "@/lib/vietnam/seo";
import { ArrowRight } from "lucide-react";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    lang,
    path: "/partners",
    title: uiCopy.partners.metadataTitle,
    description: uiCopy.partners.metadataDescription,
  });
}

export default async function VietnamPartnersPage({ params }: Params) {
  const { lang } = await params;
  const locale = toVietnamLocale(lang) as Locale;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow={t(uiCopy.partners.list.eyebrow, locale)}
        title={t(uiCopy.partners.list.title, locale)}
      />

      <div className="grid gap-10">
        {(Object.keys(partnerGroups) as Array<keyof typeof partnerGroups>).map((group) => {
          const groupPartners = partners.filter((p) => p.group === group);
          if (groupPartners.length === 0) return null;
          return (
            <div key={group}>
              <h2 className="mb-5 border-b border-[var(--onsen-line)] pb-3 text-sm font-semibold uppercase tracking-widest text-[var(--onsen-muted)]">
                {t(partnerGroups[group], locale)}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {groupPartners.map((partner) => (
                  <Link
                    key={partner.name}
                    href={localizedPath(lang, `/partners/${partner.slug}`)}
                    className="group flex flex-col items-center rounded border border-[var(--onsen-line)] bg-white p-4 transition hover:border-[var(--onsen-accent)] hover:shadow-sm"
                  >
                    <div className="relative h-14 w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain grayscale transition group-hover:grayscale-0"
                        sizes="20vw"
                      />
                    </div>
                    <p className="mt-3 text-center text-xs font-medium leading-tight text-[var(--onsen-ink)]">
                      {partner.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Projects section - focus on projects */}
      <div className="mt-16 border-t border-[var(--onsen-line)] pt-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--onsen-accent)]">
              {t(uiCopy.home.featured.eyebrow, locale)}
            </p>
            <h2 className="text-2xl font-light text-[var(--onsen-ink)]">
              {t(uiCopy.home.featured.title, locale)}
            </h2>
          </div>
          <Link
            href={localizedPath(lang, "/projects")}
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--onsen-accent)] transition hover:gap-2"
          >
            {t(labels.viewProjects, locale)}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={localizedPath(lang, `/projects/${project.slug}`)}
              className="group relative overflow-hidden rounded border border-[var(--onsen-line)] bg-white"
            >
              <div className="relative h-36 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={project.hero}
                  alt={t(project.title, locale)}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-[var(--onsen-muted)]">{t(project.location, locale)}</p>
                <h3 className="mt-1 text-sm font-semibold text-[var(--onsen-ink)]">
                  {t(project.title, locale)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
