"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type Props = { lang: string };

const T: Record<string, {
  heroEyebrow: string;
  heroTitle: string;
  heroSubTitle: string;
  breadcrumb: string[];
  messageEyebrow: string;
  messageHeading: string;
  messageLead: string;
  messageBody: string;
  messageFactLabel: string;
  messageFactValue: string;
  overviewHeading: string;
  overviewLead: string;
  overviewRows: { label: string; value: string }[];
  officesHeading: string;
  officesLead: string;
  offices: { name: string; body: string }[];
  overseasHeading: string;
  overseasLead: string;
  overseasBody: string;
  overseasHighlights: { title: string; body: string }[];
  overseasBtn: string;
  contactText: string;
  contactBtn: string;
}> = {
  ja: {
    heroEyebrow: "Company",
    heroTitle: "会社案内",
    heroSubTitle: "株式会社HTグローバルの企業理念、会社情報、拠点についてご案内いたします。",
    breadcrumb: ["ホーム", "会社案内"],
    messageEyebrow: "Message",
    messageHeading: "代表取締役からのご挨拶",
    messageLead: "日本と海外をつなぐ不動産パートナーとして、信頼と透明性を大切にしております。",
    messageBody: "株式会社HTグローバルは、日本の不動産市場へのアクセスを世界中の投資家の皆様に提供することを使命としております。\n\n日本の不動産は、建設品質の高さ・安定した賃貸収益・長期的な資産保全において世界的に高い評価を受けております。私どもは多言語対応の専門チームと透明性の高いサービスにより、お客様一人ひとりに最適な不動産投資のパートナーとして誠実にご支援いたします。\n\n株式会社HTグローバル 代表取締役",
    messageFactLabel: "所在地",
    messageFactValue: "東京都江戸川区",
    overviewHeading: "会社概要",
    overviewLead: "当社に関する基本情報をご覧いただけます。",
    overviewRows: [
      { label: "会社名", value: "株式会社HTグローバル" },
      { label: "資本金", value: "3,000万円" },
      { label: "代表取締役", value: "代表取締役" },
      { label: "所在地", value: "〒132-0035 東京都江戸川区平井5-38-3 サンヴェールボニー301号" },
      { label: "TEL/FAX", value: "03-6657-2050" },
      { label: "宅建免許", value: "東京都知事（１）第114049号" },
      { label: "加盟団体", value: "公益社団法人 全国宅地建物取引業協会" },
      { label: "事業内容", value: "不動産売買・仲介業、賃貸管理業、外国人投資家向け不動産コンサルティング" },
    ],
    officesHeading: "事務所",
    officesLead: "国内外の案件に迅速かつ丁寧に対応できる体制を整えております。",
    offices: [
      { name: "東京本社", body: "〒132-0035 東京都江戸川区平井5-38-3 サンヴェールボニー301号\nTEL: 03-6657-2050" },
      { name: "ベトナム拠点", body: "Onsen Fuji Groupと連携" },
    ],
    overseasHeading: "海外事業 – Onsen Fuji との提携",
    overseasLead: "ベトナム市場を中心に、現地パートナーと連携した投資支援を行っております。",
    overseasBody: "当社は、ベトナム不動産市場においてOnsen Fuji Groupと戦略的パートナーシップを締結しております。ウェルネスリゾート・ホテルコンドミニアム・産業不動産にわたるプロジェクトを通じて、日本人投資家の皆様に高品質な海外投資機会をご提供しております。",
    overseasHighlights: [
      { title: "現地連携", body: "現地パートナーと協力し、スピーディーかつ確実な案件推進を実現いたします。" },
      { title: "投資サポート", body: "物件選定から運用相談まで、投資家視点でしっかりと伴走いたします。" },
      { title: "多言語対応", body: "日本語・英語・ベトナム語を中心に、円滑なコミュニケーションを提供いたします。" },
    ],
    overseasBtn: "Vietnamプロジェクトを見る",
    contactText: "会社案内や事業提携についてのご相談は、お気軽にお問い合わせください。",
    contactBtn: "お問合せ",
  },
  en: {
    heroEyebrow: "Company",
    heroTitle: "About Us",
    heroSubTitle: "Learn more about HT Global Holdings, our company profile, and our locations.",
    breadcrumb: ["Home", "Company"],
    messageEyebrow: "Message",
    messageHeading: "Message from the CEO",
    messageLead: "We value trust and transparency as a real estate partner connecting Japan and overseas markets.",
    messageBody: "HT Global Holdings Co., Ltd. is on a mission to provide investors worldwide with access to the Japanese real estate market.\n\nJapanese real estate is highly regarded globally for its high construction quality, stable rental income, and long-term asset preservation. We aim to be the optimal real estate investment partner for each of our clients through our multilingual specialist team and highly transparent service.\n\nHT Global Holdings Co., Ltd. CEO",
    messageFactLabel: "Location",
    messageFactValue: "Edogawa-ku, Tokyo",
    overviewHeading: "Company Overview",
    overviewLead: "A quick look at our company profile and business scope.",
    overviewRows: [
      { label: "Company Name", value: "HT Global Holdings Co., Ltd. (株式会社HTグローバル)" },
      { label: "Capital", value: "¥30 million" },
      { label: "CEO", value: "CEO" },
      { label: "Address", value: "5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301" },
      { label: "TEL/FAX", value: "03-6657-2050" },
      { label: "Real Estate License", value: "Tokyo Governor (1) No. 114049" },
      { label: "Membership", value: "All Japan Real Estate Association" },
      { label: "Business", value: "Real estate sales & brokerage, rental management, real estate consulting for foreign investors" },
    ],
    officesHeading: "Offices",
    officesLead: "We have a structure ready to respond swiftly and reliably to domestic and overseas projects.",
    offices: [
      { name: "Tokyo HQ", body: "5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301\nTEL: 03-6657-2050" },
      { name: "Vietnam Office", body: "In partnership with Onsen Fuji Group" },
    ],
    overseasHeading: "Overseas Operations – Partnership with Onsen Fuji",
    overseasLead: "Centered on the Vietnamese market, we work closely with local partners to support investment projects.",
    overseasBody: "HT Global Holdings Co., Ltd. has entered into a strategic partnership with Onsen Fuji Group in the Vietnamese real estate market. Through projects spanning wellness resorts, hotel condominiums, and industrial real estate, we provide Japanese investors with high-quality overseas investment opportunities.",
    overseasHighlights: [
      { title: "Local Collaboration", body: "We work with local partners to move projects forward efficiently and reliably." },
      { title: "Investment Support", body: "From project selection to operational consultation, we support investors end to end." },
      { title: "Multilingual Support", body: "Japanese, English, and Vietnamese communication is available for smoother coordination." },
    ],
    overseasBtn: "View Vietnam Projects",
    contactText: "Please feel free to contact us for company information or business partnerships.",
    contactBtn: "Contact Us",
  },
  zh: {
    heroEyebrow: "Company",
    heroTitle: "关于我们",
    heroSubTitle: "了解株式会社HTグローバル的企业理念、公司信息与办公据点。",
    breadcrumb: ["首页", "公司案内"],
    messageEyebrow: "Message",
    messageHeading: "董事长致辞",
    messageLead: "作为连接日本与海外市场的不动产合作伙伴，我们重视信赖与透明度。",
    messageBody: "株式会社HTグローバル致力于为全球投资者提供进入日本房地产市场的渠道。\n\n日本房地产因其高建筑质量、稳定的租赁收益和长期资产保值而在全球享有高度评价。我们通过多语言专业团队和高度透明的服务，旨在成为每位客户的最佳房地产投资伙伴。\n\n株式会社HTグローバル 董事长",
    messageFactLabel: "所在地",
    messageFactValue: "东京都江户川区",
    overviewHeading: "公司概况",
    overviewLead: "一览我们的公司信息与业务范围。",
    overviewRows: [
      { label: "公司名称", value: "株式会社HTグローバル（HT Global Holdings Co., Ltd.）" },
      { label: "注册资本", value: "3000万日元" },
      { label: "董事长", value: "董事长" },
      { label: "地址", value: "〒132-0035 东京都江户川区平井5-38-3 サンヴェールボニー301号" },
      { label: "电话/传真", value: "03-6657-2050" },
      { label: "宅建许可证", value: "东京都知事（１）第114049号" },
      { label: "会员团体", value: "公益社团法人 全国宅地建物取引业协会" },
      { label: "业务内容", value: "房产买卖·中介、租赁管理、面向外国投资者的房产咨询" },
    ],
    officesHeading: "办公室",
    officesLead: "我们建立了能快速、可靠地应对国内外项目的服务体制。",
    offices: [
      { name: "东京总部", body: "〒132-0035 东京都江户川区平井5-38-3 サンヴェールボニー301号\nTEL: 03-6657-2050" },
      { name: "越南办公室", body: "与Onsen Fuji Group合作" },
    ],
    overseasHeading: "海外业务 – 与Onsen Fuji的合作",
    overseasLead: "以越南市场为中心，与当地合作伙伴共同推进项目支持。",
    overseasBody: "株式会社HTグローバル在越南房地产市场与Onsen Fuji Group建立了战略合作伙伴关系。通过涵盖健康度假村、酒店公寓和工业地产的项目，为日本投资者提供高质量的海外投资机会。",
    overseasHighlights: [
      { title: "本地协作", body: "与当地合作伙伴紧密配合，高效推进项目。" },
      { title: "投资支持", body: "从项目筛选到运营咨询，提供全流程支持。" },
      { title: "多语言支持", body: "提供日语、英语、越南语沟通支持。" },
    ],
    overseasBtn: "查看越南项目",
    contactText: "如需公司资料或业务合作，欢迎随时联系我们。",
    contactBtn: "联系我们",
  },
  vi: {
    heroEyebrow: "Company",
    heroTitle: "Giới Thiệu",
    heroSubTitle: "Tìm hiểu triết lý, hồ sơ công ty và các văn phòng của HT Global.",
    breadcrumb: ["Trang chủ", "Giới thiệu"],
    messageEyebrow: "Message",
    messageHeading: "Thông điệp từ Giám đốc điều hành",
    messageLead: "Chúng tôi coi trọng sự tin cậy và minh bạch với vai trò là đối tác bất động sản kết nối Nhật Bản và thị trường quốc tế.",
    messageBody: "HT Global Holdings Co., Ltd. có sứ mệnh cung cấp cho các nhà đầu tư trên toàn thế giới quyền tiếp cận thị trường bất động sản Nhật Bản.\n\nBất động sản Nhật Bản được đánh giá cao trên toàn cầu về chất lượng xây dựng, thu nhập cho thuê ổn định và bảo toàn tài sản dài hạn. Chúng tôi hướng tới trở thành đối tác đầu tư bất động sản tối ưu cho từng khách hàng thông qua đội ngũ chuyên gia đa ngôn ngữ và dịch vụ minh bạch cao.\n\nGiám đốc điều hành, HT Global Holdings Co., Ltd.",
    messageFactLabel: "Địa điểm",
    messageFactValue: "Edogawa-ku, Tokyo",
    overviewHeading: "Thông tin công ty",
    overviewLead: "Tổng quan về thông tin công ty và phạm vi kinh doanh của chúng tôi.",
    overviewRows: [
      { label: "Tên công ty", value: "株式会社HTグローバル (HT Global Holdings Co., Ltd.)" },
      { label: "Vốn điều lệ", value: "30 triệu yên" },
      { label: "Giám đốc điều hành", value: "Giám đốc điều hành" },
      { label: "Địa chỉ", value: "5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301" },
      { label: "ĐT/Fax", value: "03-6657-2050" },
      { label: "Giấy phép BĐS", value: "Tokyo Governor (1) No. 114049" },
      { label: "Thành viên", value: "Hiệp hội Bất động sản toàn quốc Nhật Bản" },
      { label: "Kinh doanh", value: "Mua bán & môi giới BĐS, quản lý cho thuê, tư vấn BĐS cho nhà đầu tư nước ngoài" },
    ],
    officesHeading: "Văn phòng",
    officesLead: "Chúng tôi có cấu trúc sẵn sàng phản ứng nhanh và đáng tin cậy với các dự án trong và ngoài nước.",
    offices: [
      { name: "Trụ sở Tokyo", body: "5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301\nĐT: 03-6657-2050" },
      { name: "Văn phòng Việt Nam", body: "Hợp tác với Onsen Fuji Group" },
    ],
    overseasHeading: "Hoạt động nước ngoài – Hợp tác với Onsen Fuji",
    overseasLead: "Tập trung vào thị trường Việt Nam, chúng tôi phối hợp chặt chẽ với đối tác địa phương để hỗ trợ dự án đầu tư.",
    overseasBody: "HT Global Holdings Co., Ltd. đã ký kết quan hệ đối tác chiến lược với Onsen Fuji Group trong thị trường bất động sản Việt Nam. Thông qua các dự án trải dài từ khu nghỉ dưỡng sức khỏe, căn hộ khách sạn đến bất động sản công nghiệp, chúng tôi cung cấp cơ hội đầu tư nước ngoài chất lượng cao cho các nhà đầu tư Nhật Bản.",
    overseasHighlights: [
      { title: "Hợp tác địa phương", body: "Chúng tôi phối hợp với đối tác bản địa để triển khai dự án hiệu quả và tin cậy." },
      { title: "Hỗ trợ đầu tư", body: "Từ lựa chọn dự án đến tư vấn vận hành, chúng tôi đồng hành trọn vẹn." },
      { title: "Đa ngôn ngữ", body: "Hỗ trợ giao tiếp bằng tiếng Nhật, tiếng Anh và tiếng Việt." },
    ],
    overseasBtn: "Xem dự án Vietnam",
    contactText: "Vui lòng liên hệ với chúng tôi nếu bạn cần hồ sơ công ty hoặc hợp tác kinh doanh.",
    contactBtn: "Liên hệ",
  },
};

export default function CompanyPage({ lang }: Props) {
  const t = T[lang] ?? T.ja;

  return (
    <>
      {/* Hero */}
      <section className="p-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/brand/corporate-culture-silhouette-01.jpg"
          alt=""
          className="p-page-hero__img"
        />
        <div className="p-page-hero__overlay">
          <div className="p-page-hero__inner">
            <div className="p-company-hero__copy">
              <span className="p-page-hero__eyebrow">{t.heroEyebrow}</span>
              <h1 className="p-page-hero__title">{t.heroTitle}</h1>
              <p className="p-company-hero__subtitle">{t.heroSubTitle}</p>
            </div>
            <nav className="p-company-breadcrumb" aria-label="Breadcrumb">
              <ol className="p-company-breadcrumb__list">
                {t.breadcrumb.map((item, index) => (
                  <li key={item} className="p-company-breadcrumb__item">
                    {index === 0 ? <Link href={`/${lang}`}>{item}</Link> : <span>{item}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <ScrollReveal>
        <section className="p-company-section">
          <div className="l-inner">
            <div className="p-section-head">
              <span className="p-section-head__eyebrow">{t.messageEyebrow}</span>
              <h2 className="p-section-head__title">{t.messageHeading}</h2>
              <p className="p-section-head__body">{t.messageLead}</p>
            </div>
            <div className="p-company-message">
              <div className="p-company-message__img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/brand/corporate-culture-silhouette-01.jpg"
                  alt={t.messageHeading}
                />
              </div>
              <div className="p-company-message__content">
                <p className="p-company-message__text">{t.messageBody}</p>
                <div className="p-company-message__meta">
                  <span className="p-company-message__meta-label">{t.messageFactLabel}</span>
                  <span className="p-company-message__meta-value">{t.messageFactValue}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Company Overview */}
      <ScrollReveal>
        <section className="p-company-section">
          <div className="l-inner">
            <div className="p-section-head">
              <h2 className="p-section-head__title">{t.overviewHeading}</h2>
              <p className="p-section-head__body">{t.overviewLead}</p>
            </div>
            <div className="p-company-overview">
              <table className="p-company-table">
                <tbody>
                  {t.overviewRows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-company-overview__note">
                <div className="p-company-overview__note-title">株式会社HTグローバル</div>
                <p className="p-company-overview__note-body">
                  日本と海外の不動産市場をつなぐ専門企業として、投資・実需・提携案件まで幅広くご対応いたします。
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Offices */}
      <ScrollReveal>
        <section className="p-company-section">
          <div className="l-inner">
            <div className="p-section-head">
              <h2 className="p-section-head__title">{t.officesHeading}</h2>
              <p className="p-section-head__body">{t.officesLead}</p>
            </div>
            <div className="p-company-offices">
              {t.offices.map((office) => (
                <div key={office.name} className="p-company-office-card">
                  <div className="p-company-office-card__name">{office.name}</div>
                  <div className="p-company-office-card__body" style={{ whiteSpace: "pre-line" }}>{office.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Overseas */}
      <ScrollReveal>
        <section className="p-company-section">
          <div className="l-inner">
            <div className="p-section-head">
              <h2 className="p-section-head__title">{t.overseasHeading}</h2>
              <p className="p-section-head__body">{t.overseasLead}</p>
              <p className="p-section-head__body">{t.overseasBody}</p>
            </div>
            <div className="p-company-overseas-grid">
              {t.overseasHighlights.map((item) => (
                <div key={item.title} className="p-company-overseas-card">
                  <div className="p-company-overseas-card__title">{item.title}</div>
                  <p className="p-company-overseas-card__body">{item.body}</p>
                </div>
              ))}
            </div>
            <Link href={`/${lang}/vietnam/projects`} className="p-company-overseas-btn">
              {t.overseasBtn}
            </Link>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="p-contact-cta">
          <div className="l-inner">
            <p className="p-contact-cta__text">{t.contactText}</p>
            <Link href={`/${lang}/contact`} className="p-contact-cta__btn">
              {t.contactBtn}
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}

