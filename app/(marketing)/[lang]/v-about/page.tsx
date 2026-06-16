import CompanyPage from "@/components/pages/CompanyPage";
import PageWrapper from "@/components/shared/PageWrapper";
import { getValidatedLang } from "../_lib/getValidatedLang";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getValidatedLang(params);
  return (
    <PageWrapper lang={lang}>
      <CompanyPage lang={lang} />
    </PageWrapper>
  );
}
