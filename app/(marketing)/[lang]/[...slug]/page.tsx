import ProxyClonePage from "@/components/shared/ProxyClonePage";
import { getValidatedLang } from "../_lib/getValidatedLang";

type SlugPageProps = {
  params: Promise<{ lang: string; slug: string[] }>;
};

export default async function LangSlugPage({ params }: SlugPageProps) {
  const [{ slug }, lang] = await Promise.all([params, getValidatedLang(params)]);
  return <ProxyClonePage lang={lang} slug={slug} />;
}
