"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type Props = { lang: string };

const companyCard = {
  companyName: "HT Global Co., Ltd. (株式会社HTグローバル)",
  representative: "YOSHINOBU UMENO / 梅野 義信; NGUYEN DUY THANG / グエン ユイ タン",
  title: "Director & Division Manager / 取締役 事業部長; Director / General Manager / 取締役 事業本部長",
  license: "東京都知事（1）第114049号",
  specialist: "宅地建物取引士（千葉）第035390号",
  afp: "AFP (Affiliated Financial Planner) / 日本FP協会認定AFP",
  mortgage: "Certified Mortgage Loan Advisor / 住宅金融普及協会認定 住宅ローンアドバイザー",
  address: "〒132-0035 東京都江戸川区平井5-38-3 サンヴェールボニー301号",
  telFax: "03-6657-2050 / 03-6657-2059",
  mobile: "070-9098-4825",
  email: "ht.global.info1@gmail.com",
  website: "htglobal.jp",
  chamber: "Tokyo Chamber of Commerce and Industry / 東京商工会議所 C3207900",
  association: "All Japan Real Estate Association / 公益社団法人 全日本不動産協会",
  legalPartner: "Tokyo Seishin Law Office / 東京誠心法律事務所",
};

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
    heroSubTitle: "HT Global Co., Ltd.（株式会社HTグローバル）の会社情報、代表者情報、拠点についてご案内いたします。",
    breadcrumb: ["ホーム", "会社案内"],
    messageEyebrow: "Message",
    messageHeading: "代表取締役からのご挨拶",
    messageLead: "NGUYEN DUY THANG が率いる HT Global Co., Ltd. は、信頼と透明性を大切にしております。",
    messageBody: "HT Global Co., Ltd.（株式会社HTグローバル）は、宅地建物取引業免許、宅地建物取引士、AFP、住宅ローンアドバイザーの資格を活かし、不動産に関する専門的なご相談に対応しております。\n\n東京商工会議所および全日本不動産協会の会員として、確かな情報と誠実な対応を重視し、お客様の資産形成をサポートいたします。\n\n取締役 事業本部長　NGUYEN DUY THANG / グエン ユイ タン",
    messageFactLabel: "取締役",
    messageFactValue: "NGUYEN DUY THANG / グエン ユイ タン",
    overviewHeading: "会社概要",
    overviewLead: "当社に関する基本情報をご覧いただけます。",
    overviewRows: [
      { label: "会社名", value: companyCard.companyName },
      { label: "代表者名", value: companyCard.representative },
      { label: "役職", value: companyCard.title },
      { label: "宅地建物取引業免許", value: companyCard.license },
      { label: "宅地建物取引士", value: companyCard.specialist },
      { label: "AFP", value: companyCard.afp },
      { label: "住宅ローンアドバイザー", value: companyCard.mortgage },
      { label: "所在地", value: companyCard.address },
      { label: "TEL/FAX", value: companyCard.telFax },
      { label: "Mobile", value: companyCard.mobile },
      { label: "Email", value: companyCard.email },
      { label: "Website", value: companyCard.website },
      { label: "加盟団体", value: companyCard.chamber },
      { label: "業界団体", value: companyCard.association },
      { label: "提携弁護士事務所", value: companyCard.legalPartner },
    ],
    officesHeading: "事務所",
    officesLead: "国内外の案件に迅速かつ丁寧に対応できる体制を整えております。",
    offices: [
      { name: "東京本社", body: `${companyCard.address}\nTEL: ${companyCard.telFax}\nMobile: ${companyCard.mobile}\nEmail: ${companyCard.email}` },
      { name: "ベトナム拠点", body: "Onsen Fuji Groupと連携" },
    ],
    overseasHeading: "海外事業 – Onsen Fuji との提携",
    overseasLead: "ベトナム市場を中心に、現地パートナーと連携した投資支援を行っております。",
    overseasBody: "HT Global Co., Ltd. は、ベトナム不動産市場において Onsen Fuji Group と戦略的パートナーシップを締結しております。ウェルネスリゾート・ホテルコンドミニアム・産業不動産にわたるプロジェクトを通じて、日本人投資家の皆様に高品質な海外投資機会をご提供しております。",
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
    heroSubTitle: "Learn more about HT Global Co., Ltd., our company profile, and our locations.",
    breadcrumb: ["Home", "Company"],
    messageEyebrow: "Message",
    messageHeading: "Message from the CEO",
    messageLead: "Led by NGUYEN DUY THANG, HT Global Co., Ltd. values trust and transparency.",
    messageBody: "HT Global Co., Ltd. (株式会社HTグローバル) provides professional real estate services supported by licensed expertise and industry memberships.\n\nOur team combines the Real Estate Transaction License, Licensed Real Estate Transaction Specialist, AFP certification, and Certified Mortgage Loan Advisor qualifications to support clients with accurate, trustworthy guidance.\n\nDirector / General Manager, NGUYEN DUY THANG / グエン ユイ タン",
    messageFactLabel: "Director",
    messageFactValue: "NGUYEN DUY THANG / グエン ユイ タン",
    overviewHeading: "Company Overview",
    overviewLead: "A quick look at our company profile and business scope.",
    overviewRows: [
      { label: "Company Name", value: companyCard.companyName },
      { label: "Representative", value: companyCard.representative },
      { label: "Title", value: companyCard.title },
      { label: "Real Estate License", value: companyCard.license },
      { label: "Licensed Specialist", value: companyCard.specialist },
      { label: "AFP", value: companyCard.afp },
      { label: "Mortgage Advisor", value: companyCard.mortgage },
      { label: "Address", value: companyCard.address },
      { label: "TEL/FAX", value: companyCard.telFax },
      { label: "Mobile", value: companyCard.mobile },
      { label: "Email", value: companyCard.email },
      { label: "Website", value: companyCard.website },
      { label: "Membership", value: companyCard.chamber },
      { label: "Association", value: companyCard.association },
      { label: "Legal Partner", value: companyCard.legalPartner },
    ],
    officesHeading: "Offices",
    officesLead: "We have a structure ready to respond swiftly and reliably to domestic and overseas projects.",
    offices: [
      { name: "Tokyo HQ", body: `${companyCard.address}\nTEL: ${companyCard.telFax}\nMobile: ${companyCard.mobile}\nEmail: ${companyCard.email}` },
      { name: "Vietnam Office", body: "In partnership with Onsen Fuji Group" },
    ],
    overseasHeading: "Overseas Operations – Partnership with Onsen Fuji",
    overseasLead: "Centered on the Vietnamese market, we work closely with local partners to support investment projects.",
    overseasBody: "HT Global Co., Ltd. has entered into a strategic partnership with Onsen Fuji Group in the Vietnamese real estate market. Through projects spanning wellness resorts, hotel condominiums, and industrial real estate, we provide Japanese investors with high-quality overseas investment opportunities.",
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
    heroSubTitle: "了解 HT Global Co., Ltd. 的公司信息、代表者与办公据点。",
    breadcrumb: ["首页", "公司案内"],
    messageEyebrow: "Message",
    messageHeading: "董事长致辞",
    messageLead: "作为连接日本与海外市场的不动产合作伙伴，我们重视信赖与透明度。",
    messageBody: "HT Global Co., Ltd.（株式会社HTグローバル）依托持牌资质与专业会员身份，为客户提供不动产相关的专业咨询与服务。\n\n公司成员具备宅地建物取引业免许、宅地建物取引士、AFP 及住宅贷款顾问资格，并以准确、可信的方式支持客户资产规划。\n\n取締役 事業本部長 NGUYEN DUY THANG / グエン ユイ タン",
    messageFactLabel: "董事",
    messageFactValue: "NGUYEN DUY THANG / グエン ユイ タン",
    overviewHeading: "公司概况",
    overviewLead: "一览我们的公司信息与业务范围。",
    overviewRows: [
      { label: "公司名称", value: companyCard.companyName },
      { label: "代表者", value: companyCard.representative },
      { label: "职务", value: companyCard.title },
      { label: "宅地建物取引业免许", value: companyCard.license },
      { label: "宅地建物取引士", value: companyCard.specialist },
      { label: "AFP", value: companyCard.afp },
      { label: "住宅贷款顾问", value: companyCard.mortgage },
      { label: "地址", value: companyCard.address },
      { label: "电话/传真", value: companyCard.telFax },
      { label: "Mobile", value: companyCard.mobile },
      { label: "Email", value: companyCard.email },
      { label: "Website", value: companyCard.website },
      { label: "会员团体", value: companyCard.chamber },
      { label: "行业协会", value: companyCard.association },
      { label: "法律顾问", value: companyCard.legalPartner },
    ],
    officesHeading: "办公室",
    officesLead: "我们建立了能快速、可靠地应对国内外项目的服务体制。",
    offices: [
      { name: "东京总部", body: `${companyCard.address}\nTEL: ${companyCard.telFax}\nMobile: ${companyCard.mobile}\nEmail: ${companyCard.email}` },
      { name: "越南办公室", body: "与Onsen Fuji Group合作" },
    ],
    overseasHeading: "海外业务 – 与Onsen Fuji的合作",
    overseasLead: "以越南市场为中心，与当地合作伙伴共同推进项目支持。",
    overseasBody: "HT Global Co., Ltd. 在越南房地产市场与 Onsen Fuji Group 建立了战略合作伙伴关系。通过涵盖健康度假村、酒店公寓和工业地产的项目，为日本投资者提供高质量的海外投资机会。",
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
    heroSubTitle: "Tìm hiểu thông tin công ty, đại diện và văn phòng của HT Global Co., Ltd.",
    breadcrumb: ["Trang chủ", "Giới thiệu"],
    messageEyebrow: "Message",
    messageHeading: "Thông điệp từ Giám đốc điều hành",
    messageLead: "Chúng tôi coi trọng sự tin cậy và minh bạch với vai trò là đối tác bất động sản kết nối Nhật Bản và thị trường quốc tế.",
    messageBody: "HT Global Co., Ltd. (株式会社HTグローバル) cung cấp dịch vụ bất động sản chuyên nghiệp dựa trên giấy phép và các chứng chỉ chuyên môn đã được cấp.\n\nĐội ngũ của chúng tôi sở hữu giấy phép giao dịch bất động sản, chứng chỉ môi giới bất động sản, AFP và tư vấn vay mua nhà, đồng thời là thành viên của Tokyo Chamber of Commerce and Industry và All Japan Real Estate Association.\n\nGiám đốc & Trưởng bộ phận, NGUYEN DUY THANG / グエン ユイ タン",
    messageFactLabel: "Giám đốc",
    messageFactValue: "NGUYEN DUY THANG / グエン ユイ タン",
    overviewHeading: "Thông tin công ty",
    overviewLead: "Tổng quan về thông tin công ty và phạm vi kinh doanh của chúng tôi.",
    overviewRows: [
      { label: "Tên công ty", value: companyCard.companyName },
      { label: "Đại diện", value: companyCard.representative },
      { label: "Chức vụ", value: companyCard.title },
      { label: "Giấy phép BĐS", value: companyCard.license },
      { label: "Chứng chỉ môi giới", value: companyCard.specialist },
      { label: "AFP", value: companyCard.afp },
      { label: "Tư vấn vay nhà", value: companyCard.mortgage },
      { label: "Địa chỉ", value: companyCard.address },
      { label: "ĐT/Fax", value: companyCard.telFax },
      { label: "Mobile", value: companyCard.mobile },
      { label: "Email", value: companyCard.email },
      { label: "Website", value: companyCard.website },
      { label: "Thành viên", value: companyCard.chamber },
      { label: "Hiệp hội", value: companyCard.association },
      { label: "Đối tác pháp lý", value: companyCard.legalPartner },
    ],
    officesHeading: "Văn phòng",
    officesLead: "Chúng tôi có cấu trúc sẵn sàng phản ứng nhanh và đáng tin cậy với các dự án trong và ngoài nước.",
    offices: [
      { name: "Trụ sở Tokyo", body: `${companyCard.address}\nĐT: ${companyCard.telFax}\nMobile: ${companyCard.mobile}\nEmail: ${companyCard.email}` },
      { name: "Văn phòng Việt Nam", body: "Hợp tác với Onsen Fuji Group" },
    ],
    overseasHeading: "Hoạt động nước ngoài – Hợp tác với Onsen Fuji",
    overseasLead: "Tập trung vào thị trường Việt Nam, chúng tôi phối hợp chặt chẽ với đối tác địa phương để hỗ trợ dự án đầu tư.",
    overseasBody: "HT Global Co., Ltd. đã ký kết quan hệ đối tác chiến lược với Onsen Fuji Group trong thị trường bất động sản Việt Nam. Thông qua các dự án trải dài từ khu nghỉ dưỡng sức khỏe, căn hộ khách sạn đến bất động sản công nghiệp, chúng tôi cung cấp cơ hội đầu tư nước ngoài chất lượng cao cho các nhà đầu tư Nhật Bản.",
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
          src="/information/1784437041822_7237405166500974155_7237405166500974155_a9448b85e35a3a5bb6a32b1790fe77e3.jpg"
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
                  src="/information/1784437041822_7237405166500974155_7237405166500974155_a9448b85e35a3a5bb6a32b1790fe77e3.jpg"
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

