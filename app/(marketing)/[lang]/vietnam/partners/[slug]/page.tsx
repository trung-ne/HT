import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { getPartner, partners } from "@/features/vietnam/content/partners";
import { partnerGroups, uiCopy } from "@/features/vietnam/content/texts";
import { t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata } from "@/lib/vietnam/seo";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return partners.map((partner) => ({ slug: partner.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  const partner = getPartner(slug);
  if (!partner) return {};
  return buildMetadata({
    lang,
    path: `/partners/${slug}`,
    title: { ja: partner.name, "zh-CN": partner.name, "zh-TW": partner.name, vi: partner.name, en: partner.name },
    description: partner.summary,
    image: partner.logo,
  });
}

export default async function VietnamPartnerDetailPage({ params }: Params) {
  const { lang, slug } = await params;
  const locale = toVietnamLocale(lang) as Locale;
  const partner = getPartner(slug);
  if (!partner) notFound();

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="h-fit rounded-lg border border-[var(--onsen-line)] bg-white p-6">
          <div className="relative h-32 rounded-md bg-neutral-50">
            <Image src={partner.logo} alt={partner.name} fill className="object-contain p-5" sizes="380px" />
          </div>
          <div className="mt-6 text-sm font-semibold text-[var(--onsen-orange)]">{t(partnerGroups[partner.group], locale)}</div>
          <h1 className="mt-3 text-3xl font-semibold text-[var(--onsen-ink)]">{partner.name}</h1>
          <p className="mt-4 leading-7 text-[var(--onsen-muted)]">{t(partner.summary, locale)}</p>
          {partner.website ? (
            <Link href={partner.website} target="_blank" rel="noreferrer" className="mt-6 inline-flex h-10 items-center rounded-md bg-[var(--onsen-orange)] px-4 text-sm font-medium text-white hover:bg-[#d93624]">
              {t(uiCopy.partners.detail.officialWebsite, locale)}
            </Link>
          ) : null}
        </aside>
        <div>
          <SectionHeading eyebrow={t(uiCopy.partners.detail.eyebrow, locale)} title={t(uiCopy.partners.detail.roleTitle, locale)} description={t(partner.cooperation, locale)} />
          <div className="mb-6 rounded-lg border border-[var(--onsen-line)] bg-neutral-50 p-6">
            <h2 className="text-xl font-semibold text-[var(--onsen-ink)]">{t(uiCopy.partners.detail.companyOverview, locale)}</h2>
            <p className="mt-4 leading-7 text-[var(--onsen-muted)]">{t(partner.companyOverview, locale)}</p>
          </div>
          <div className="grid gap-4">
            {partner.details.map((detail) => (
              <div key={t(detail, locale)} className="rounded-lg border border-[var(--onsen-line)] bg-white p-5 leading-7 text-[var(--onsen-muted)]">
                {t(detail, locale)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
