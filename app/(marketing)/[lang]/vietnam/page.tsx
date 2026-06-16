import { redirect } from "next/navigation";

type Params = { params: Promise<{ lang: string }> };

export default async function VietnamHomePage({ params }: Params) {
  const { lang } = await params;
  redirect(`/${lang}/vietnam/projects`);
}
