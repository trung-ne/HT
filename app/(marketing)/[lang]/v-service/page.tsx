import BusinessPage from "@/components/pages/BusinessPage";
import PageWrapper from "@/components/shared/PageWrapper";
import { getValidatedLang } from "../_lib/getValidatedLang";

export default async function ServicePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getValidatedLang(params);
  return (
    <PageWrapper lang={lang}>
      <BusinessPage lang={lang} />
    </PageWrapper>
  );
}
