"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type Props = { lang: string };

const T: Record<string, {
  heroEyebrow: string;
  heroTitle: string;
  introEyebrow: string;
  introHeading: string;
  introBody: string;
  strengthsHeading: string;
  strengths: { num: string; title: string; body: string }[];
  splits: {
    reversed: boolean;
    image: string;
    eyebrow: string;
    heading: string;
    body: string;
    list: string[];
  }[];
  ctaText: string;
  ctaBtn: string;
}> = {
  ja: {
    heroEyebrow: "Domestic",
    heroTitle: "国内不動産",
    introEyebrow: "Philosophy",
    introHeading: "お客様の大切な資産として",
    introBody: "株式会社HTグローバルは不動産を単なる商品ではなく、お客様の大切な資産として捉えています。市場の動向を的確に分析し、収益性を最大化するための最適な提案をご提供します。",
    strengthsHeading: "私たちの強み",
    strengths: [
      { num: "01", title: "収益重視の提案", body: "市場分析に基づき、お客様の資産価値を最大化する収益重視の提案を行います。" },
      { num: "02", title: "豊富なネットワーク", body: "都内・全国の優良物件情報を幅広く取り扱い、最適な選択肢をご提供します。" },
      { num: "03", title: "ワンストップサービス", body: "物件取得から管理・出口戦略まで、すべてのプロセスをワンストップでサポートします。" },
      { num: "04", title: "専門的な情報提供", body: "国内外の不動産リサーチ機関の情報を活用した、精度の高い市場分析をご提供します。" },
    ],
    splits: [
      {
        reversed: false,
        image: "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
        eyebrow: "For Buyers",
        heading: "不動産購入サポート",
        body: "マンション・戸建て・投資物件など、ご要望に合わせた幅広い物件情報をご提案します。多言語対応の専門スタッフが購入プロセス全体をサポートします。",
        list: ["物件探索・内覧サポート", "売買契約・重要事項説明", "住宅ローン・投資ローンのご相談"],
      },
      {
        reversed: true,
        image: "/assets/red/pexels-mart-production-7415041-scaled.jpg",
        eyebrow: "For Sellers",
        heading: "不動産売却サポート",
        body: "市場相場に基づく適正価格での売却をサポートします。査定から契約・引き渡しまで、一貫したサポート体制でお客様の売却を成功に導きます。",
        list: ["無料査定・市場価格分析", "販売戦略の立案・実行", "売却後の資産運用アドバイス"],
      },
    ],
    ctaText: "国内不動産に関するご相談はお気軽にご連絡ください。",
    ctaBtn: "お問合せ",
  },
  en: {
    heroEyebrow: "Domestic",
    heroTitle: "Domestic Real Estate",
    introEyebrow: "Philosophy",
    introHeading: "Your Precious Assets",
    introBody: "株式会社HTグローバル views real estate not as mere products but as precious assets for our clients. We accurately analyze market trends and provide optimal proposals to maximize profitability.",
    strengthsHeading: "Our Strengths",
    strengths: [
      { num: "01", title: "Profit-Focused Proposals", body: "Based on market analysis, we make profit-focused proposals to maximize our clients' asset value." },
      { num: "02", title: "Extensive Network", body: "We handle a wide range of quality properties in Tokyo and nationwide, providing optimal choices." },
      { num: "03", title: "One-Stop Service", body: "We support all processes from property acquisition to management and exit strategy in one stop." },
      { num: "04", title: "Professional Information", body: "We provide highly accurate market analysis using information from domestic and overseas real estate research institutions." },
    ],
    splits: [
      {
        reversed: false,
        image: "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
        eyebrow: "For Buyers",
        heading: "Purchase Support",
        body: "We propose a wide range of property information including condominiums, houses, and investment properties tailored to your needs. Multilingual specialist staff supports the entire purchase process.",
        list: ["Property search & viewing support", "Sales contract & important matters explanation", "Home loan & investment loan consultation"],
      },
      {
        reversed: true,
        image: "/assets/red/pexels-mart-production-7415041-scaled.jpg",
        eyebrow: "For Sellers",
        heading: "Sales Support",
        body: "We support sales at appropriate prices based on market rates. From appraisal to contract and handover, our consistent support system leads your sale to success.",
        list: ["Free appraisal & market price analysis", "Sales strategy planning & execution", "Post-sale asset management advice"],
      },
    ],
    ctaText: "Please feel free to contact us for any domestic real estate inquiries.",
    ctaBtn: "Contact Us",
  },
  zh: {
    heroEyebrow: "Domestic",
    heroTitle: "国内房产",
    introEyebrow: "Philosophy",
    introHeading: "作为您的珍贵资产",
    introBody: "株式会社HTグローバル将房地产视为客户的珍贵资产，而不仅仅是商品。我们精准分析市场动向，提供最大化收益性的最优方案。",
    strengthsHeading: "我们的优势",
    strengths: [
      { num: "01", title: "收益优先的提案", body: "基于市场分析，提出最大化客户资产价值的收益优先方案。" },
      { num: "02", title: "丰富的网络资源", body: "广泛经营东京及全国优质房产信息，提供最优选择。" },
      { num: "03", title: "一站式服务", body: "从物业获取到管理、退出策略，一站式支持所有流程。" },
      { num: "04", title: "专业信息提供", body: "利用国内外房地产研究机构的信息，提供高精度的市场分析。" },
    ],
    splits: [
      {
        reversed: false,
        image: "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
        eyebrow: "For Buyers",
        heading: "购房支持",
        body: "根据您的需求，推荐公寓、独栋住宅、投资房产等各类房产信息。多语言专业人员支持整个购买流程。",
        list: ["物业搜索·内览支持", "买卖合同·重要事项说明", "房屋贷款·投资贷款咨询"],
      },
      {
        reversed: true,
        image: "/assets/red/pexels-mart-production-7415041-scaled.jpg",
        eyebrow: "For Sellers",
        heading: "售房支持",
        body: "支持按市场价格合理出售。从评估到合同和交接，一贯的支持体制助您成功出售。",
        list: ["免费评估·市场价格分析", "销售策略制定·执行", "售后资产运用建议"],
      },
    ],
    ctaText: "如有国内房产相关咨询，欢迎随时联系我们。",
    ctaBtn: "联系我们",
  },
  vi: {
    heroEyebrow: "Domestic",
    heroTitle: "BĐS Trong Nước",
    introEyebrow: "Philosophy",
    introHeading: "Tài sản quý giá của bạn",
    introBody: "株式会社HTグローバル coi bất động sản không chỉ là hàng hóa mà là tài sản quý giá của khách hàng. Chúng tôi phân tích chính xác xu hướng thị trường và đưa ra đề xuất tối ưu để tối đa hóa lợi nhuận.",
    strengthsHeading: "Thế mạnh của chúng tôi",
    strengths: [
      { num: "01", title: "Đề xuất tập trung lợi nhuận", body: "Dựa trên phân tích thị trường, chúng tôi đưa ra đề xuất tập trung lợi nhuận để tối đa hóa giá trị tài sản của khách hàng." },
      { num: "02", title: "Mạng lưới rộng lớn", body: "Chúng tôi kinh doanh thông tin bất động sản chất lượng cao ở Tokyo và trên toàn quốc, cung cấp lựa chọn tối ưu." },
      { num: "03", title: "Dịch vụ một cửa", body: "Chúng tôi hỗ trợ toàn bộ quy trình từ mua bất động sản đến quản lý và chiến lược thoái vốn." },
      { num: "04", title: "Thông tin chuyên nghiệp", body: "Cung cấp phân tích thị trường chính xác cao sử dụng thông tin từ các tổ chức nghiên cứu bất động sản trong và ngoài nước." },
    ],
    splits: [
      {
        reversed: false,
        image: "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
        eyebrow: "For Buyers",
        heading: "Hỗ trợ mua BĐS",
        body: "Chúng tôi đề xuất thông tin đa dạng về bất động sản bao gồm căn hộ, nhà phố và bất động sản đầu tư phù hợp với nhu cầu của bạn. Nhân viên chuyên nghiệp đa ngôn ngữ hỗ trợ toàn bộ quá trình mua.",
        list: ["Hỗ trợ tìm kiếm & xem bất động sản", "Hợp đồng mua bán & giải thích các điều quan trọng", "Tư vấn vay mua nhà & vay đầu tư"],
      },
      {
        reversed: true,
        image: "/assets/red/pexels-mart-production-7415041-scaled.jpg",
        eyebrow: "For Sellers",
        heading: "Hỗ trợ bán BĐS",
        body: "Hỗ trợ bán với mức giá phù hợp dựa trên giá thị trường. Từ định giá đến hợp đồng và bàn giao, hệ thống hỗ trợ nhất quán dẫn đến thành công trong việc bán.",
        list: ["Định giá miễn phí & phân tích giá thị trường", "Lập kế hoạch & thực hiện chiến lược bán", "Tư vấn quản lý tài sản sau bán"],
      },
    ],
    ctaText: "Vui lòng liên hệ với chúng tôi để được tư vấn về bất động sản trong nước.",
    ctaBtn: "Liên hệ",
  },
};

export default function DomesticPage({ lang }: Props) {
  const t = T[lang] ?? T.ja;

  return (
    <>
      {/* Hero */}
      <section className="p-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/red/s_shutterstock_267766277-min.jpg"
          alt=""
          className="p-page-hero__img"
        />
        <div className="p-page-hero__overlay">
          <div className="p-page-hero__inner">
            <span className="p-page-hero__eyebrow">{t.heroEyebrow}</span>
            <h1 className="p-page-hero__title">{t.heroTitle}</h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section style={{ padding: "80px 0", background: "#fff", textAlign: "center" }}>
          <div className="l-inner">
            <div className="p-section-head" style={{ textAlign: "center" }}>
              <span className="p-section-head__eyebrow">{t.introEyebrow}</span>
              <h2 className="p-section-head__title">{t.introHeading}</h2>
              <p className="p-section-head__body" style={{ margin: "20px auto 0", textAlign: "left" }}>{t.introBody}</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Strengths */}
      <ScrollReveal>
        <section style={{ padding: "80px 0", background: "#f7f6f3" }}>
          <div className="l-inner">
            <div className="p-section-head">
              <h2 className="p-section-head__title">{t.strengthsHeading}</h2>
            </div>
            <div className="p-domestic-strengths">
              {t.strengths.map((s) => (
                <div key={s.num} className="p-domestic-strength-card">
                  <span className="p-domestic-strength-card__num">{s.num}</span>
                  <div className="p-domestic-strength-card__title">{s.title}</div>
                  <div className="p-domestic-strength-card__body">{s.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Split sections */}
      {t.splits.map((split) => (
        <ScrollReveal key={split.heading}>
          <section className="p-domestic-split">
            <div className="l-inner" style={{ padding: 0, maxWidth: "100%", width: "100%" }}>
              <div className={`p-domestic-split__inner${split.reversed ? " p-domestic-split__inner--rev" : ""}`}>
                <div className="p-domestic-split__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={split.image} alt={split.heading} />
                </div>
                <div className="p-domestic-split__content">
                  <div className="p-section-head" style={{ marginBottom: "24px" }}>
                    <span className="p-section-head__eyebrow">{split.eyebrow}</span>
                    <h2 className="p-section-head__title" style={{ fontSize: "28px" }}>{split.heading}</h2>
                    <p className="p-section-head__body" style={{ marginTop: "16px" }}>{split.body}</p>
                  </div>
                  <ul className="p-domestic-split__list">
                    {split.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      ))}

      {/* Contact CTA */}
      <ScrollReveal>
        <section className="p-contact-cta">
          <div className="l-inner">
            <p className="p-contact-cta__text">{t.ctaText}</p>
            <Link href={`/${lang}/contact`} className="p-contact-cta__btn">
              {t.ctaBtn}
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}

