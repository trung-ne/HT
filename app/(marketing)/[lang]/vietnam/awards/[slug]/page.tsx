import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { awards, getAward } from "@/features/vietnam/content/csr";
import { uiCopy } from "@/features/vietnam/content/texts";
import { localizedPath, t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { media } from "@/lib/vietnam/media";
import { buildMetadata } from "@/lib/vietnam/seo";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return awards.map((award) => ({ slug: award.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  const award = getAward(slug);
  if (!award) return {};
  return buildMetadata({
    lang,
    path: `/awards/${slug}`,
    title: award.title,
    description: award.summary,
    image: award.image,
  });
}

export default async function VietnamAwardDetailPage({ params }: Params) {
  const { lang, slug } = await params;
  const locale = toVietnamLocale(lang) as Locale;
  const award = getAward(slug);
  if (!award) notFound();
  const heroObjectPosition = award.image === media.awards.src ? "18% 60%" : "center 55%";

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">
          <header className="max-w-4xl">
            <Link href={localizedPath(lang, "/awards")} className="mb-8 inline-flex w-fit items-center text-sm font-medium text-[var(--onsen-muted)] hover:text-[var(--onsen-ink)]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t(uiCopy.awards.list.title, locale)}
            </Link>
            <div className="text-sm font-semibold uppercase tracking-normal text-[var(--onsen-orange)]">{award.year} | {award.organization}</div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--onsen-ink)] md:text-6xl">{t(award.title, locale)}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--onsen-muted)]">{t(award.summary, locale)}</p>
          </header>
          <div className="relative mt-9 h-[15rem] w-full overflow-hidden rounded-lg bg-white md:h-[20rem] lg:h-[22rem]">
            <Image
              src={award.image}
              alt={t(award.title, locale)}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: heroObjectPosition }}
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <SectionHeading eyebrow={t(uiCopy.awards.detail.eyebrow, locale)} title={t(uiCopy.awards.detail.contextTitle, locale)} />
          <div className="grid gap-4">
            {award.details.map((detail, index) => (
              <div key={`${slug}-${index}`} className="rounded-lg border border-[var(--onsen-line)] bg-white p-6 leading-8 text-[var(--onsen-muted)] md:p-7">
                {t(detail, locale)}
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-[var(--onsen-line)] bg-neutral-50 p-6 md:p-7">
            <div className="text-sm font-semibold uppercase tracking-normal text-[var(--onsen-orange)]">{award.year}</div>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--onsen-ink)]">{award.organization}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--onsen-muted)]">{t(award.summary, locale)}</p>
          </div>

          <div className="rounded-lg border border-[var(--onsen-line)] bg-white p-6 md:p-7">
            <h2 className="text-xl font-semibold text-[var(--onsen-ink)]">{t(uiCopy.awards.detail.sourcesTitle, locale)}</h2>
            <div className="mt-4 grid gap-3">
              {award.sources.map((source) => (
                <Link
                  key={source.url}
                  href={source.url}
                  target={source.url.startsWith("/") ? undefined : "_blank"}
                  rel={source.url.startsWith("/") ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--onsen-orange)] hover:underline"
                >
                  {source.label}
                  {!source.url.startsWith("/") ? <ExternalLink className="h-3.5 w-3.5" /> : null}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
