import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { csrStories } from "@/features/vietnam/content/csr";
import { uiCopy } from "@/features/vietnam/content/texts";
import { localizedPath, t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata } from "@/lib/vietnam/seo";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    lang,
    path: "/csr",
    title: uiCopy.csr.metadataTitle,
    description: uiCopy.csr.metadataDescription,
  });
}

export default async function VietnamCSRPage({ params }: Params) {
  const { lang } = await params;
  const locale = toVietnamLocale(lang) as Locale;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading eyebrow={t(uiCopy.csr.list.eyebrow, locale)} title={t(uiCopy.csr.list.title, locale)} />
      <div className="grid gap-6 md:grid-cols-3">
        {csrStories.map((story) => (
          <Link key={t(story.title, locale)} href={localizedPath(lang, `/csr/${story.slug}`)} className="group overflow-hidden rounded-lg border border-[var(--onsen-line)] bg-white transition hover:-translate-y-1 hover:border-[var(--onsen-orange)] hover:shadow-lg">
            <div className="relative aspect-[4/3]">
              <Image src={story.image} alt={t(story.title, locale)} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
            <div className="p-5">
              <div className="mb-3 text-sm font-semibold text-[var(--onsen-orange)]">{story.year}</div>
              <h2 className="text-xl font-semibold">{t(story.title, locale)}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--onsen-muted)]">{t(story.body, locale)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
