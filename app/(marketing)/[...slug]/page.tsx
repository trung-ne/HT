import ProxyClonePage from "@/components/shared/ProxyClonePage";

type SlugPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  return <ProxyClonePage lang="ja" slug={slug} />;
}
