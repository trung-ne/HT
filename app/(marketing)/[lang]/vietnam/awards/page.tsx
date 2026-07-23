import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { awards } from "@/features/vietnam/content/csr";
import { uiCopy } from "@/features/vietnam/content/texts";
import { localizedPath, t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata } from "@/lib/vietnam/seo";
import { media } from "@/lib/vietnam/media";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    lang,
    path: "/awards",
    title: uiCopy.awards.metadataTitle,
    description: uiCopy.awards.metadataDescription,
    image: media.awards.src,
  });
}

export default async function VietnamAwardsPage({ params }: Params) {
  const { lang } = await params;
  const locale = toVietnamLocale(lang) as Locale;

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-normal text-[var(--onsen-orange)]">
              <span className="h-0.5 w-14 bg-[var(--onsen-orange)]" />
              {t(uiCopy.awards.list.eyebrow, locale)}
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--onsen-ink)] md:text-6xl">{t(uiCopy.awards.list.title, locale)}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--onsen-muted)]">{t(uiCopy.awards.description, locale)}</p>
          </div>
          <div className="relative mt-9 h-[15rem] w-full overflow-hidden rounded-lg bg-white md:h-[20rem] lg:h-[22rem]">
            <Image
              src={media.awards.src}
              alt={media.awards.alt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "18% 60%" }}
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-6">
          {awards.map((award) => (
            <Link key={award.slug} href={localizedPath(lang, `/awards/${award.slug}`)} className="group overflow-hidden rounded-lg border border-[var(--onsen-line)] bg-white transition hover:-translate-y-1 hover:border-[var(--onsen-orange)] hover:shadow-lg">
              <div className="grid gap-0 md:grid-cols-[18rem_1fr]">
                <div className="relative min-h-64 bg-neutral-50">
                  <Image src={award.image} alt={t(award.title, locale)} fill className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]" sizes="288px" />
                </div>
                <div className="flex items-center p-6 md:p-8">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-normal text-[var(--onsen-orange)]">{award.year} | {award.organization}</div>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-[var(--onsen-ink)] md:text-3xl">{t(award.title, locale)}</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--onsen-muted)]">{t(award.summary, locale)}</p>
                    <div className="mt-5 inline-flex items-center text-sm font-medium text-[var(--onsen-orange)]">
                      {t(uiCopy.awards.list.readMore, locale)} <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
