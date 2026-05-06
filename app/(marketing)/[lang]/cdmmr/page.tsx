import type { Metadata } from "next";
import ProxyClonePage from "@/components/shared/ProxyClonePage";
import { getSplitPageMetadata } from "../_lib/getSplitPageMetadata";
import { getValidatedLang } from "../_lib/getValidatedLang";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await getValidatedLang(params);
  return getSplitPageMetadata(lang, "cdmmr");
}

export default async function CdmmrPage({ params }: PageProps) {
  const lang = await getValidatedLang(params);
  return <ProxyClonePage lang={lang} slug={["cdmmr"]} />;
}
