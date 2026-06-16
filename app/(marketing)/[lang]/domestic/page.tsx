import DomesticPage from "@/components/pages/DomesticPage";
import PageWrapper from "@/components/shared/PageWrapper";
import { getValidatedLang } from "../_lib/getValidatedLang";

export default async function DomesticRealEstatePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getValidatedLang(params);
  return (
    <PageWrapper lang={lang}>
      <DomesticPage lang={lang} />
    </PageWrapper>
  );
}
