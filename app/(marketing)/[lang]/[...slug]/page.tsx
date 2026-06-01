import { notFound } from "next/navigation";

type SlugPageProps = {
  params: Promise<{ lang: string; slug: string[] }>;
};

export default async function LangSlugPage({ params }: SlugPageProps) {
  await params;
  notFound();
}
