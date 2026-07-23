"use client";

import Image from "next/image";
import { Badge } from "@/components/vietnam/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/vietnam/ui/dialog";
import type { Project } from "@/features/vietnam/content/projects";
import { labels, uiCopy } from "@/features/vietnam/content/texts";
import type { Locale } from "@/lib/vietnam/i18n";
import { t } from "@/lib/vietnam/i18n";

export function ProjectGallery({ project, locale }: { project: Project; locale: Locale }) {
  const projectTitle = t(project.title, locale);

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {project.gallery.map((image, index) => (
        <Dialog key={image}>
          <DialogTrigger
            render={
              <button
                type="button"
                className="group block w-full overflow-hidden rounded-lg border border-[var(--onsen-line)] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--onsen-orange)] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--onsen-orange)] focus-visible:ring-offset-2"
                aria-label={`${projectTitle} gallery ${index + 1}`}
              />
            }
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100">
              <Image
                src={image}
                alt={`${projectTitle} ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/72 p-4 text-sm leading-6 text-white transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                <div>{t(labels.location, locale)}: {t(project.location, locale)}</div>
                <div>{t(labels.area, locale)}: {project.area}</div>
                <div>{t(labels.status, locale)}: {t(project.status, locale)}</div>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <Badge variant="outline" className="rounded-md">
                  {t(uiCopy.projects.categoryLabel[project.category], locale)}
                </Badge>
                <span className="text-xs text-[var(--onsen-orange)]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--onsen-ink)]">{projectTitle}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--onsen-muted)]">{t(project.summary, locale)}</p>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[min(96vw,1180px)] gap-3 rounded-lg bg-white p-3 sm:max-w-[min(96vw,1180px)]">
            <DialogTitle className="pr-10 text-base font-semibold text-[var(--onsen-ink)]">
              {projectTitle}
            </DialogTitle>
            <div className="relative aspect-[16/10] max-h-[78vh] overflow-hidden rounded-md bg-neutral-100">
              <Image
                src={image}
                alt={`${projectTitle} ${index + 1}`}
                fill
                className="object-contain"
                sizes="96vw"
              />
            </div>
            <div className="grid gap-2 rounded-md bg-neutral-50 p-3 text-sm text-[var(--onsen-muted)] md:grid-cols-3">
              <div>{t(labels.location, locale)}: {t(project.location, locale)}</div>
              <div>{t(labels.area, locale)}: {project.area}</div>
              <div>{t(labels.status, locale)}: {t(project.status, locale)}</div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}


