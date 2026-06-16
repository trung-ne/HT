import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { csrStories, getCsrStory } from "@/features/vietnam/content/csr";
import { uiCopy } from "@/features/vietnam/content/texts";
import { t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata } from "@/lib/vietnam/seo";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return csrStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  const story = getCsrStory(slug);
  if (!story) return {};
  return buildMetadata({
    lang,
    path: `/csr/${slug}`,
    title: story.title,
    description: story.body,
    image: story.image,
  });
}

export default async function VietnamCsrDetailPage({ params }: Params) {
  const { lang, slug } = await params;
  const locale = toVietnamLocale(lang) as Locale;
  const story = getCsrStory(slug);
  if (!story) notFound();

  return (
    <>
      <section className="relative min-h-[54vh] overflow-hidden bg-neutral-950">
        <Image src={story.image} alt={t(story.title, locale)} fill priority className="object-cover opacity-75" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/76 via-black/42 to-black/10" />
        <div className="relative mx-auto flex min-h-[54vh] max-w-7xl items-end px-4 py-12 md:px-8">
          <div className="max-w-3xl text-white">
            <div className="mb-4 text-sm font-semibold text-[var(--onsen-coral)]">{story.year} · {t(story.location, locale)}</div>
            <h1 className="text-4xl font-semibold md:text-6xl">{t(story.title, locale)}</h1>
            <p className="mt-5 text-lg leading-8 text-white/88">{t(story.body, locale)}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1fr_0.45fr]">
        <div>
          <SectionHeading eyebrow={t(uiCopy.csr.detail.eyebrow, locale)} title={t(uiCopy.csr.detail.contextTitle, locale)} />
          <div className="grid gap-4">
            {story.details.map((detail) => (
              <div key={t(detail, locale)} className="rounded-lg border border-[var(--onsen-line)] bg-white p-5 leading-7 text-[var(--onsen-muted)]">
                {t(detail, locale)}
              </div>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-lg border border-[var(--onsen-line)] bg-neutral-50 p-6">
          <h2 className="text-xl font-semibold text-[var(--onsen-ink)]">{t(uiCopy.csr.detail.sourcesTitle, locale)}</h2>
          <div className="mt-4 grid gap-3">
            {story.sources.map((source) => (
              <Link key={source.url} href={source.url} target={source.url.startsWith("/") ? undefined : "_blank"} className="text-sm text-[var(--onsen-orange)] hover:underline">
                {source.label}
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
