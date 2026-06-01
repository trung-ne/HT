import type { Metadata } from "next";
import SplitPageWrapper from "@/components/shared/SplitPageWrapper";
import { getSplitPageMetadata } from "../_lib/getSplitPageMetadata";
import { getValidatedLang } from "../_lib/getValidatedLang";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await getValidatedLang(params);
  return getSplitPageMetadata(lang, "v-service");
}

export default async function ServicePage({ params }: PageProps) {
  const lang = await getValidatedLang(params);
  return <SplitPageWrapper lang={lang} pageKey="v-service" />;
}
