import type { Metadata } from "next";
import type { LanguageCode } from "@/lib/i18n";
import { getValidatedLang } from "@/app/(marketing)/[lang]/_lib/getValidatedLang";
import QnADisplay from "@/components/qna/QnADisplay";

type QnAPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: QnAPageProps): Promise<Metadata> {
  const lang = await getValidatedLang(params);

  const heroTitles: Record<LanguageCode, string> = {
    ja: "よくあるご質問",
    en: "Frequently Asked Questions",
    zh: "常见问题",
    vi: "Câu hỏi thường gặp",
  };

  const descriptions: Record<LanguageCode, string> = {
    ja: "日本の不動産投資に関するよくあるご質問にお答えします。",
    en: "Find answers to common questions about investing in Japanese real estate.",
    zh: "日本房地产投资常见问题及答案。",
    vi: "日本房地产投资常见问题。",
  };

  return {
    title: `${heroTitles[lang]} | 株式会社HTグローバル`,
    description: descriptions[lang],
  };
}

export default async function QnAPage({ params }: QnAPageProps) {
  const lang = await getValidatedLang(params);

  const heroTitles: Record<LanguageCode, string> = {
    ja: "よくあるご質問",
    en: "Frequently Asked Questions",
    zh: "常见问题",
    vi: "Câu hỏi thường gặp",
  };

  const heroSubtitles: Record<LanguageCode, string> = {
    ja: "日本の不動産投資に関する一般的なご質問にお答えします。",
    en: "Find answers to common questions about investing in Japanese real estate.",
    zh: "找到关于日本房地产投资的常见问题的答案。",
    vi: "Tìm câu trả lời cho các câu hỏi phổ biến về đầu tư bất động sản Nhật Bản.",
  };

  return (
    <div className="qna-main">
      <div className="page-hero">
        <div
          className="page-hero__bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)",
          }}
        />
        <div className="page-hero__overlay">
          <div className="page-hero__inner">
            <h1 className="page-hero__title">{heroTitles[lang]}</h1>
            <p className="page-hero__subtitle">{heroSubtitles[lang]}</p>
          </div>
        </div>
      </div>

      <div className="qna-page-content">
        <div className="qna-page-container">
          <QnADisplay lang={lang} showCategories={true} />
        </div>
      </div>
    </div>
  );
}
