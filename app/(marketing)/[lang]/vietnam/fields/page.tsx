import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { fields, labels, uiCopy } from "@/features/vietnam/content/texts";
import { localizedPath, t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata } from "@/lib/vietnam/seo";

type Params = { params: Promise<{ lang: string }> };

const fieldVisuals = [
  {
    image: "/assets/pdf-pages/development_1.jpg",
    metric: { ja: "5-6㎞", "zh-CN": "5-6㎞", "zh-TW": "5-6㎞", vi: "5-6㎞", en: "5-6㎞" },
    route: "/projects/lynntimes-thanh-thuy",
  },
  {
    image: "/assets/pdf-pages/quang_chu_1.jpg",
    metric: { ja: "74.4ha", "zh-CN": "74.4ha", "zh-TW": "74.4ha", vi: "74,4ha", en: "74.4ha" },
    route: "/projects/quang-chu",
  },
  {
    image: "/assets/projects/lynntimes-thanh-thuy/ohayo-onsen-aerial-02.jpg",
    metric: { ja: "LHM", "zh-CN": "LHM", "zh-TW": "LHM", vi: "LHM", en: "LHM" },
    route: "/projects/lynntimes-thanh-thuy",
  },
  {
    image: "/assets/pdf-pages/development_3.jpg",
    metric: uiCopy.fields.metricRobotService,
    route: "/projects",
  },
];

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    lang,
    path: "/fields",
    title: uiCopy.fields.metadataTitle,
    description: uiCopy.fields.metadataDescription,
  });
}

export default async function VietnamFieldsPage({ params }: Params) {
  const { lang } = await params;
  const locale = toVietnamLocale(lang) as Locale;

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="relative min-h-[52vh]">
          <Image
            src="/assets/pdf-pages/development_overview_1.jpg"
            alt={t(uiCopy.fields.title, locale)}
            fill
            priority
            className="object-contain opacity-58"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/48 to-black/18" />
          <div className="relative mx-auto flex min-h-[52vh] max-w-7xl items-end px-4 py-12 md:px-8">
            <div className="max-w-3xl text-white">
              <SectionHeading eyebrow={t(uiCopy.fields.heroEyebrow, locale)} title={t(uiCopy.fields.title, locale)} description={t(uiCopy.fields.description, locale)} />
              <Link href={localizedPath(lang, "/projects")} className="mt-6 inline-flex h-10 items-center rounded-md bg-[var(--onsen-orange)] px-4 text-sm font-medium text-white hover:bg-[#d93624]">
                {t(labels.viewProjects, locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10">
          {fields.map((field, index) => {
            const visual = fieldVisuals[index];
            return (
              <article key={t(field.title, locale)} className="grid overflow-hidden rounded-lg border border-[var(--onsen-line)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[minmax(0,1.75fr)_minmax(320px,0.55fr)]">
                <div className="overflow-x-auto bg-[#f8f3ef]">
                  <Link
                    href={visual.image}
                    target="_blank"
                    rel="noreferrer"
                    className="group/image relative block aspect-[835/313] w-[680px] max-w-none sm:w-full sm:min-h-[260px] lg:aspect-auto lg:min-h-[430px]"
                    aria-label={t(field.title, locale)}
                  >
                    <Image
                      src={visual.image}
                      alt={t(field.title, locale)}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 68vw, (min-width: 640px) 100vw, 680px"
                    />
                    <div className="absolute left-5 top-5 rounded-md bg-white/92 px-4 py-2 text-sm font-semibold text-[var(--onsen-ink)] shadow-sm">
                      {t(visual.metric, locale)}
                    </div>
                    <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-md bg-white/92 text-[var(--onsen-ink)] opacity-0 shadow-sm transition group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                  <div className="mb-5 h-0.5 w-16 bg-[var(--onsen-orange)]" />
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--onsen-orange)]">
                    0{index + 1}
                  </p>
                  <h2 className="text-2xl font-semibold leading-tight text-[var(--onsen-ink)] md:text-4xl">{t(field.title, locale)}</h2>
                  <p className="mt-5 text-base leading-8 text-[var(--onsen-muted)]">{t(field.body, locale)}</p>
                  <Link href={localizedPath(lang, visual.route)} className="mt-8 inline-flex h-10 w-fit items-center rounded-md border border-[var(--onsen-orange)] px-4 text-sm font-medium text-[var(--onsen-orange)] hover:bg-[var(--onsen-soft-orange)]">
                    {t(labels.viewProjects, locale)}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
