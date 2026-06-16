"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/vietnam/ui/button";
import { ProjectCard } from "@/components/vietnam/project-card";
import type { Project } from "@/features/vietnam/content/projects";
import { uiCopy } from "@/features/vietnam/content/texts";
import type { Locale } from "@/lib/vietnam/i18n";
import { t } from "@/lib/vietnam/i18n";

const categories = ["all", "resort", "industrial", "commercial", "city-hotel"] as const;

export function ProjectFilters({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("all");

  const filtered = useMemo(() => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  }, [category, projects]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <Button key={item} variant={item === category ? "default" : "outline"} className={item === category ? "rounded-md bg-[var(--onsen-orange)] hover:bg-[#d93624]" : "rounded-md"} onClick={() => setCategory(item)}>
            {t(uiCopy.projects.categoryLabel[item], locale)}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </div>
  );
}



