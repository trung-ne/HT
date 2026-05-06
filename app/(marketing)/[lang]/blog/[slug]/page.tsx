import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogDetailWrapper from "@/components/blog/BlogDetailWrapper";
import { getPostBySlug, getPostsByLang, getAllSlugs } from "@/features/blog/repository";
import { getValidatedLang } from "../../_lib/getValidatedLang";

type PageProps = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map(({ slug, lang }) => ({ lang, slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = await getValidatedLang(Promise.resolve({ lang: rawLang }));
  const post = getPostBySlug(slug, lang);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, images: post.coverImage ? [post.coverImage] : [] } };
}

export default async function BlogDetailRoute({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = await getValidatedLang(Promise.resolve({ lang: rawLang }));
  const post = getPostBySlug(slug, lang);
  if (!post) notFound();
  const allPosts = getPostsByLang(lang);
  const related = allPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  return <BlogDetailWrapper lang={lang} post={post} related={related} />;
}