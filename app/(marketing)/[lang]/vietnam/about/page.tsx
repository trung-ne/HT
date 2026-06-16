import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/vietnam/ui/card";
import { JsonLd } from "@/components/vietnam/json-ld";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { awards } from "@/features/vietnam/content/csr";
import { aboutContent, coreValues, uiCopy } from "@/features/vietnam/content/texts";
import { isLocale, localizedPath, t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata, organizationJsonLd } from "@/lib/vietnam/seo";
import { media } from "@/lib/vietnam/media";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    lang,
    path: "/about",
    title: uiCopy.about.metadataTitle,
    description: uiCopy.about.metadataDescription,
  });
}

export default async function VietnamAboutPage({ params }: Params) {
  const { lang } = await params;
  const locale = toVietnamLocale(lang) as Locale;

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <SectionHeading
          eyebrow={t(uiCopy.about.hero.eyebrow, locale)}
          title={t(uiCopy.about.hero.title, locale)}
          description={t(uiCopy.about.hero.description, locale)}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-lg shadow-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{t(uiCopy.about.visionTitle, locale)}</h3>
              <p className="mt-4 leading-7 text-[var(--onsen-muted)]">{t(aboutContent.vision, locale)}</p>
            </CardContent>
          </Card>
          <Card className="rounded-lg shadow-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{t(uiCopy.about.missionTitle, locale)}</h3>
              <p className="mt-4 leading-7 text-[var(--onsen-muted)]">{t(aboutContent.mission, locale)}</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
          <SectionHeading eyebrow={t(uiCopy.about.coreValues.eyebrow, locale)} title={t(uiCopy.about.coreValues.title, locale)} />
          <div className="grid gap-4 md:grid-cols-5">
            {coreValues.map((item) => (
              <div key={item.title.ja} className="rounded-lg border border-[var(--onsen-line)] bg-white p-5">
                <div className="text-2xl font-semibold text-[var(--onsen-orange)]">{t(item.title, locale)}</div>
                <h3 className="mt-3 font-semibold">{t(item.subtitle, locale)}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--onsen-muted)]">{t(item.body, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:px-8">
        <div className="relative min-h-80 overflow-hidden rounded-lg">
          <Image src={media.culture.src} alt={media.culture.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div>
          <SectionHeading eyebrow={t(uiCopy.about.culture.eyebrow, locale)} title={t(uiCopy.about.culture.title, locale)} />
          <div className="grid gap-3 text-sm leading-7 text-[var(--onsen-muted)]">
            {uiCopy.about.culture.bullets.map((item) => (
              <p key={item.en}>{t(item, locale)}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <SectionHeading eyebrow={t(uiCopy.about.timeline.eyebrow, locale)} title={t(uiCopy.about.timeline.title, locale)} />
        <div className="grid gap-4 md:grid-cols-4">
          {awards.map((award) => (
            <Link key={award.slug} href={localizedPath(lang, `/awards/${award.slug}`)} className="rounded-lg border border-[var(--onsen-line)] p-5 transition hover:-translate-y-1 hover:border-[var(--onsen-orange)] hover:shadow-lg">
              <div className="text-sm text-[var(--onsen-orange)]">{award.year}</div>
              <div className="mt-2 font-medium">{t(award.title, locale)}</div>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--onsen-muted)]">{t(award.summary, locale)}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
