import type { Metadata } from "next";
import RedhomesHome from "@/components/RedhomesHome";
import { getHomeMetadata } from "./_lib/getHomeMetadata";
import { getValidatedLang } from "./_lib/getValidatedLang";

type LangPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const lang = await getValidatedLang(params);
  return getHomeMetadata(lang);
}

export default async function LangPage({ params }: LangPageProps) {
  const lang = await getValidatedLang(params);
  return <RedhomesHome lang={lang} />;
}
