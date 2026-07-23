import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SUPPORTED_LANGUAGES, isSupportedLanguage } from "@/lib/i18n";

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  return children;
}