import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/vietnam/ui/badge";
import type { Project } from "@/features/vietnam/content/projects";
import { labels, uiCopy } from "@/features/vietnam/content/texts";
import type { Locale } from "@/lib/vietnam/i18n";
import { localizedPath, t } from "@/lib/vietnam/i18n";

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <Link href={localizedPath(locale, `/projects/${project.slug}`)} className="group block overflow-hidden rounded-lg border border-[var(--onsen-line)] bg-white">
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image src={project.hero} alt={t(project.title, locale)} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/72 p-4 text-sm text-white transition group-hover:translate-y-0">
          <div>{t(labels.location, locale)}: {t(project.location, locale)}</div>
          <div>{t(labels.area, locale)}: {project.area}</div>
          <div>{t(labels.status, locale)}: {t(project.status, locale)}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge variant="outline" className="rounded-md">{t(uiCopy.projects.categoryLabel[project.category], locale)}</Badge>
          <ArrowUpRight className="h-5 w-5 text-[var(--onsen-orange)]" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--onsen-ink)]">{t(project.title, locale)}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--onsen-muted)]">{t(project.summary, locale)}</p>
      </div>
    </Link>
  );
}


