import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { AppFooter } from "@/components/shared/AppFooter";
import { AppHeader } from "@/components/shared/AppHeader";
import { isLocale, toVietnamLocale } from "@/lib/vietnam/i18n";

const REDHOMES_LANGS = ["ja", "en", "zh", "vi"] as const;

export function generateStaticParams() {
  return REDHOMES_LANGS.map((lang) => ({ lang }));
}

export default async function VietnamLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = toVietnamLocale(lang);
  if (!isLocale(locale)) notFound();

  return (
    <div className="flex min-h-full flex-col" style={{ paddingTop: "80px" }}>
      <AppHeader lang={lang} />
      <main className="flex-1">{children}</main>
      <AppFooter lang={lang} />
    </div>
  );
}
