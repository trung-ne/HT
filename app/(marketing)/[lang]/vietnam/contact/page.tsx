import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "@/components/vietnam/lead-form";
import { SectionHeading } from "@/components/vietnam/section-heading";
import { Card, CardContent } from "@/components/vietnam/ui/card";
import { siteConfig } from "@/features/vietnam/content/site";
import { uiCopy } from "@/features/vietnam/content/texts";
import { t, toVietnamLocale, type Locale } from "@/lib/vietnam/i18n";
import { buildMetadata } from "@/lib/vietnam/seo";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    lang,
    path: "/contact",
    title: uiCopy.contact.metadataTitle,
    description: uiCopy.contact.metadataDescription,
  });
}

export default async function VietnamContactPage({ params }: Params) {
  const { lang } = await params;
  const locale = toVietnamLocale(lang) as Locale;

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8">
      <div>
        <SectionHeading eyebrow={t(uiCopy.contact.headingEyebrow, locale)} title={t(uiCopy.contact.headingTitle, locale)} />
        <div className="grid gap-4">
          <Card className="rounded-lg shadow-none">
            <CardContent className="grid gap-4 p-6 text-sm text-[var(--onsen-muted)]">
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-[var(--onsen-orange)]" />{siteConfig.company.address}</div>
              <div className="flex gap-3"><Mail className="h-5 w-5 text-[var(--onsen-orange)]" />{siteConfig.company.website}</div>
              <div className="flex gap-3"><Phone className="h-5 w-5 text-[var(--onsen-orange)]" />{t(uiCopy.contact.phoneDesk, locale)}</div>
            </CardContent>
          </Card>
          <div className="min-h-72 rounded-lg border border-[var(--onsen-line)] bg-neutral-100 p-6">
            <div className="text-sm font-semibold text-[var(--onsen-ink)]">{t(uiCopy.contact.mapTitle, locale)}</div>
            <p className="mt-3 text-sm leading-6 text-[var(--onsen-muted)]">
              {siteConfig.company.address}
            </p>
            <a className="mt-5 inline-block text-sm font-semibold text-[var(--onsen-orange)]" href="https://www.google.com/maps/search/?api=1&query=2%2F95%20Chua%20Boc%20Hanoi" target="_blank" rel="noreferrer">
              {t(uiCopy.contact.openDirections, locale)}
            </a>
          </div>
        </div>
      </div>
      <LeadForm locale={locale} />
    </section>
  );
}
