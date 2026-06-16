"use client";

import Link from "next/link";
import type { LanguageCode } from "@/lib/i18n";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type HomeContentProps = {
  lang: LanguageCode;
};

// ── Localized content ────────────────────────────────────────
const T: Record<string, {
  messageEyebrow: string;
  messageTitle: string;
  messageBody: string;
  bizEyebrow: string;
  bizTitle: string;
  bizItems: { num: string; title: string; desc: string; href: string }[];
  strengthsEyebrow: string;
  strengthsTitle: string;
  strengthsItems: { title: string; desc: string }[];
  overseasEyebrow: string;
  overseasTitle: string;
  overseasDesc: string;
  overseasMore: string;
  overseasProjects: { tag: string; title: string; location: string }[];
  newsEyebrow: string;
  newsTitle: string;
  newsItems: { date: string; tag: string; title: string }[];
  newsMore: string;
}> = {
  ja: {
    messageEyebrow: "Our Philosophy",
    messageTitle: "海を越えて、\nお客様と共に歩む",
    messageBody: "株式会社HTグローバルは「安心・透明・長期的価値」を軸に、世界中のお客様が日本の不動産市場に自信を持って参入できるよう、多言語対応の専門チームで総合的なサポートを提供しております。\n\n物件の探索から購入・賃貸管理・出口戦略まで、ワンストップで対応。お客様一人ひとりに最適な資産運用のパートナーとして、長期的にお付き合いいたします。",
    bizEyebrow: "Services",
    bizTitle: "事業内容",
    bizItems: [
      { num: "01", title: "不動産売買・仲介", desc: "投資用・居住用を問わず、マンション・戸建て・土地など幅広い物件を取り扱います。", href: "/v-service" },
      { num: "02", title: "賃貸管理・運用支援", desc: "入居者募集から家賃管理・修繕対応・確定申告サポートまで一括代行。", href: "/v-service" },
      { num: "03", title: "海外進出コンサルティング", desc: "ベトナムをはじめとした東南アジアへの投資・事業進出を実務的にサポート。", href: "/v-service" },
      { num: "04", title: "外国人投資家サービス", desc: "多言語対応チームが言語・文化・法制度の壁を越えてサポートします。", href: "/v-service" },
    ],
    strengthsEyebrow: "Our Strengths",
    strengthsTitle: "HTグローバルの強み",
    strengthsItems: [
      { title: "安心のワンストップサポート", desc: "物件探索から購入・管理・売却まで、すべてのプロセスを一社で対応します。" },
      { title: "豊富な国内外ネットワーク", desc: "国内優良物件からベトナム不動産まで、幅広い投資機会をご提供します。" },
      { title: "多言語対応の専門チーム", desc: "日・英・中・越に対応した専門スタッフが、文化の壁を越えてサポートします。" },
    ],
    overseasEyebrow: "Overseas",
    overseasTitle: "海外不動産",
    overseasDesc: "ベトナムにおける温泉ウェルネスリゾート・ホテルコンドミニアム・産業不動産を手掛ける戦略的パートナー「Onsen Fuji」との提携プロジェクト。",
    overseasMore: "Vietnam プロジェクトをすべて見る",
    overseasProjects: [
      { tag: "Wellness Resort", title: "Onsen Fuji Ha Long", location: "Quảng Ninh, Vietnam" },
      { tag: "Condotel", title: "Onsen Fuji Phu Quoc", location: "Kiên Giang, Vietnam" },
      { tag: "Industrial", title: "Industrial Cluster", location: "Đồng Nai, Vietnam" },
    ],
    newsEyebrow: "Information",
    newsTitle: "最新情報",
    newsItems: [
      { date: "2026.06.01", tag: "お知らせ", title: "ベトナム・ハノイ新規プロジェクト説明会のご案内" },
      { date: "2026.05.15", tag: "市場情報", title: "2026年ベトナム不動産市場レポートを公開しました" },
      { date: "2026.04.20", tag: "お知らせ", title: "東南アジア投資セミナー（東京）開催のお知らせ" },
    ],
    newsMore: "ニュース一覧を見る",
  },
  en: {
    messageEyebrow: "Our Philosophy",
    messageTitle: "Crossing Borders,\nWalking Together",
    messageBody: "HT Global Holdings Co., Ltd. is built on safety, transparency and long-term value. We empower global investors to enter the Japanese real estate market with confidence, backed by a multilingual expert team at every step.\n\nFrom property search to purchase, rental management and exit strategy — we handle it all under one roof, as your long-term investment partner.",
    bizEyebrow: "Services",
    bizTitle: "Services",
    bizItems: [
      { num: "01", title: "Property Sales & Brokerage", desc: "A wide range of properties — apartments, houses, land — for investment and residential use.", href: "/v-service" },
      { num: "02", title: "Rental Management", desc: "From tenant recruitment to rent collection, repairs and tax filing support.", href: "/v-service" },
      { num: "03", title: "Overseas Expansion Consulting", desc: "Practical support for investment and business expansion into Vietnam and Southeast Asia.", href: "/v-service" },
      { num: "04", title: "Foreign Investor Services", desc: "Our multilingual team removes language, cultural and legal barriers.", href: "/v-service" },
    ],
    strengthsEyebrow: "Our Strengths",
    strengthsTitle: "Why HT Global",
    strengthsItems: [
      { title: "One-Stop Support", desc: "From property search to purchase, management and exit — all handled by one trusted partner." },
      { title: "Extensive Network", desc: "Premium domestic properties and Vietnam real estate — broad investment opportunities." },
      { title: "Multilingual Expert Team", desc: "Specialists in Japanese, English, Chinese and Vietnamese — bridging culture and language." },
    ],
    overseasEyebrow: "Overseas",
    overseasTitle: "Overseas Real Estate",
    overseasDesc: "Partnership projects with Onsen Fuji — wellness resorts, condotels and industrial real estate in Vietnam.",
    overseasMore: "View all Vietnam projects",
    overseasProjects: [
      { tag: "Wellness Resort", title: "Onsen Fuji Ha Long", location: "Quảng Ninh, Vietnam" },
      { tag: "Condotel", title: "Onsen Fuji Phu Quoc", location: "Kiên Giang, Vietnam" },
      { tag: "Industrial", title: "Industrial Cluster", location: "Đồng Nai, Vietnam" },
    ],
    newsEyebrow: "Information",
    newsTitle: "Latest News",
    newsItems: [
      { date: "2026.06.01", tag: "Notice", title: "Hanoi New Project Briefing Session" },
      { date: "2026.05.15", tag: "Market", title: "2026 Vietnam Real Estate Market Report Released" },
      { date: "2026.04.20", tag: "Notice", title: "Southeast Asia Investment Seminar (Tokyo)" },
    ],
    newsMore: "View all news",
  },
  zh: {
    messageEyebrow: "Our Philosophy",
    messageTitle: "跨越国界，\n与您携手同行",
    messageBody: "株式会社HTグローバル以安心、透明与长期价值为核心，通过多语言专业团队，帮助全球投资者自信进入日本房地产市场。\n\n从物件搜索到购买、租赁管理与退出策略，一站式全程服务，成为您长期的资产管理伙伴。",
    bizEyebrow: "Services",
    bizTitle: "业务内容",
    bizItems: [
      { num: "01", title: "不动产买卖·中介", desc: "涵盖公寓、独栋、土地等多种投资与自住物件。", href: "/v-service" },
      { num: "02", title: "租赁管理·运营支持", desc: "租客招募、租金管理、维修对应及申报辅助，全程代理。", href: "/v-service" },
      { num: "03", title: "海外进出咨询", desc: "为进军越南及东南亚的企业与个人提供实务支持。", href: "/v-service" },
      { num: "04", title: "外国投资者服务", desc: "多语言专业团队跨越语言、文化与法制障碍提供支持。", href: "/v-service" },
    ],
    strengthsEyebrow: "Our Strengths",
    strengthsTitle: "HTグローバルの優勢",
    strengthsItems: [
      { title: "一站式全程支持", desc: "从物件搜索到购买、管理、退出，全部由一家公司负责。" },
      { title: "丰富的国内外网络", desc: "国内优质物件到越南不动产，提供广泛的投资机会。" },
      { title: "多语言专业团队", desc: "日、英、中、越专业人员，跨越文化与语言障碍为您服务。" },
    ],
    overseasEyebrow: "Overseas",
    overseasTitle: "海外不动产",
    overseasDesc: "与战略合作伙伴Onsen Fuji联合开展的越南温泉康养度假、公寓酒店及工业地产项目。",
    overseasMore: "查看全部越南项目",
    overseasProjects: [
      { tag: "Wellness Resort", title: "Onsen Fuji Ha Long", location: "Quảng Ninh, Vietnam" },
      { tag: "Condotel", title: "Onsen Fuji Phu Quoc", location: "Kiên Giang, Vietnam" },
      { tag: "Industrial", title: "Industrial Cluster", location: "Đồng Nai, Vietnam" },
    ],
    newsEyebrow: "Information",
    newsTitle: "最新资讯",
    newsItems: [
      { date: "2026.06.01", tag: "公告", title: "越南河内新项目说明会通知" },
      { date: "2026.05.15", tag: "市场", title: "2026年越南不动产市场报告发布" },
      { date: "2026.04.20", tag: "公告", title: "东南亚投资研讨会（东京）开幕通知" },
    ],
    newsMore: "查看全部资讯",
  },
  vi: {
    messageEyebrow: "Triết lý của chúng tôi",
    messageTitle: "Vượt biên giới,\ncùng bước với bạn",
    messageBody: "HT Global Holdings được xây dựng trên nền tảng an toàn, minh bạch và giá trị dài hạn. Đội ngũ chuyên gia đa ngôn ngữ đồng hành cùng nhà đầu tư toàn cầu tiếp cận thị trường bất động sản Nhật Bản.\n\nTừ tìm kiếm bất động sản đến mua bán, quản lý cho thuê và chiến lược thoát vốn — một đầu mối, toàn diện.",
    bizEyebrow: "Dịch vụ",
    bizTitle: "Dịch vụ",
    bizItems: [
      { num: "01", title: "Mua bán & Môi giới BĐS", desc: "Căn hộ, nhà phố, đất đai — phục vụ cả mục đích đầu tư lẫn sinh sống.", href: "/v-service" },
      { num: "02", title: "Quản lý cho thuê", desc: "Tuyển dụng khách thuê, thu tiền, sửa chữa và hỗ trợ khai thuế.", href: "/v-service" },
      { num: "03", title: "Tư vấn đầu tư nước ngoài", desc: "Hỗ trợ thực tế cho cá nhân và doanh nghiệp đầu tư vào Việt Nam & Đông Nam Á.", href: "/v-service" },
      { num: "04", title: "Dịch vụ nhà đầu tư nước ngoài", desc: "Đội ngũ đa ngôn ngữ xóa bỏ rào cản ngôn ngữ, văn hóa và pháp lý.", href: "/v-service" },
    ],
    strengthsEyebrow: "Thế mạnh",
    strengthsTitle: "Tại sao chọn HT Global",
    strengthsItems: [
      { title: "Dịch vụ một điểm dừng", desc: "Từ tìm kiếm đến mua, quản lý và thoát vốn — tất cả trong một đầu mối." },
      { title: "Mạng lưới rộng khắp", desc: "BĐS nội địa Nhật Bản và Việt Nam — cơ hội đầu tư đa dạng." },
      { title: "Đội ngũ đa ngôn ngữ", desc: "Chuyên gia tiếng Nhật, Anh, Trung, Việt — đồng hành vượt rào cản ngôn ngữ." },
    ],
    overseasEyebrow: "Nước ngoài",
    overseasTitle: "BĐS nước ngoài",
    overseasDesc: "Dự án hợp tác cùng đối tác chiến lược Onsen Fuji — nghỉ dưỡng wellness, condotel và BĐS công nghiệp tại Việt Nam.",
    overseasMore: "Xem tất cả dự án Việt Nam",
    overseasProjects: [
      { tag: "Wellness Resort", title: "Onsen Fuji Ha Long", location: "Quảng Ninh, Việt Nam" },
      { tag: "Condotel", title: "Onsen Fuji Phu Quoc", location: "Kiên Giang, Việt Nam" },
      { tag: "Industrial", title: "Cụm công nghiệp", location: "Đồng Nai, Việt Nam" },
    ],
    newsEyebrow: "Thông tin",
    newsTitle: "Tin tức mới nhất",
    newsItems: [
      { date: "2026.06.01", tag: "Thông báo", title: "Hội thảo dự án mới tại Hà Nội" },
      { date: "2026.05.15", tag: "Thị trường", title: "Báo cáo thị trường BĐS Việt Nam 2026 đã được công bố" },
      { date: "2026.04.20", tag: "Thông báo", title: "Hội thảo đầu tư Đông Nam Á (Tokyo)" },
    ],
    newsMore: "Xem tất cả tin tức",
  },
};

const STRENGTH_IMAGES = [
  "/assets/red/s_shutterstock_475080787-min.jpg",
  "/assets/red/s_shutterstock_267766277-min.jpg",
  "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
];

const BIZ_IMAGE = "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg";

const OVERSEAS_IMAGES = [
  "https://images.unsplash.com/photo-1601628828688-632f38bc7cf3?w=800&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
];

export default function HomeContent({ lang }: HomeContentProps) {
  const t = T[lang] ?? T.ja;

  return (
    <div id="js-contents-builder">

      {/* ── Company Message ─────────────────────────────────── */}
      <ScrollReveal>
        <section className="p-home-message">
          <div className="l-inner">
            <div className="p-home-message__inner">
              <div className="p-home-message__text">
                <p className="p-home-message__eyebrow">{t.messageEyebrow}</p>
                <h2 className="p-home-message__title">
                  {t.messageTitle.split("\n").map((line, i) => (
                    <span key={i} className="p-home-message__title-line">{line}</span>
                  ))}
                </h2>
                <p className="p-home-message__body">
                  {t.messageBody.split("\n\n").map((para, i) => (
                    <span key={i} className="p-home-message__para">{para}</span>
                  ))}
                </p>
                <Link href={`/${lang}/v-about`} className="p-home-message__link">
                  {lang === "ja" ? "会社案内を見る" : lang === "zh" ? "了解公司" : lang === "vi" ? "Giới thiệu" : "Learn more"}
                  <span className="p-home-message__link-arrow" aria-hidden="true" />
                </Link>
              </div>
              <div className="p-home-message__img-wrap">
                <img
                  src="/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg"
                  alt="株式会社HTグローバル office"
                  className="p-home-message__img"
                />
                <div className="p-home-message__img-accent" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Business Activities (split: image left, list right) ─── */}
      <ScrollReveal>
        <section className="p-home-biz">
          <div className="p-home-biz__split">
            <div
              className="p-home-biz__img"
              style={{ backgroundImage: `url(${BIZ_IMAGE})` }}
              aria-hidden="true"
            />
            <div className="p-home-biz__content">
              <p className="p-home-biz__eyebrow">{t.bizEyebrow}</p>
              <h2 className="p-home-biz__title">{t.bizTitle}</h2>
              <span className="p-home-biz__title-bar" aria-hidden="true" />
              <ul className="p-home-biz__list">
                {t.bizItems.map((item) => (
                  <li key={item.num} className="p-home-biz-item">
                    <Link href={`/${lang}${item.href}`} className="p-home-biz-item__inner">
                      <span className="p-home-biz-item__num">{item.num}</span>
                      <span className="p-home-biz-item__title">{item.title}</span>
                      <span className="p-home-biz-item__arrow" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Strengths (navy bg, 3 cards) ─────────────────── */}
      <ScrollReveal>
        <section className="p-home-strengths">
          <div className="l-inner">
            <div className="p-home-strengths__head">
              <p className="p-home-strengths__eyebrow">{t.strengthsEyebrow}</p>
              <h2 className="p-home-strengths__title">{t.strengthsTitle}</h2>
            </div>
            <div className="p-home-strengths__grid">
              {t.strengthsItems.map((item, i) => (
                <div key={i} className="p-home-strength-card">
                  <div
                    className="p-home-strength-card__img"
                    style={{ backgroundImage: `url(${STRENGTH_IMAGES[i]})` }}
                  >
                    <span className="p-home-strength-card__num">0{i + 1}</span>
                  </div>
                  <div className="p-home-strength-card__body">
                    <h3 className="p-home-strength-card__title">{item.title}</h3>
                    <p className="p-home-strength-card__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Overseas / Vietnam ────────────────────────────── */}
      <ScrollReveal>
        <section className="p-overseas">
          <div className="l-inner">
            <div className="p-overseas__head">
              <span className="p-overseas__eyebrow">{t.overseasEyebrow}</span>
              <h2 className="p-overseas__title">{t.overseasTitle}</h2>
              <p className="p-overseas__sub">Vietnam Real Estate · Onsen Fuji</p>
              <p className="p-overseas__desc">{t.overseasDesc}</p>
            </div>
            <div className="p-overseas__grid">
              {t.overseasProjects.map((project, i) => (
                <Link key={project.title} href={`/${lang}/vietnam/projects`} className="p-overseas-card">
                  <div className="p-overseas-card__img" style={{ backgroundImage: `url(${OVERSEAS_IMAGES[i]})` }} />
                  <div className="p-overseas-card__body">
                    <span className="p-overseas-card__tag">{project.tag}</span>
                    <h3 className="p-overseas-card__title">{project.title}</h3>
                    <p className="p-overseas-card__location">{project.location}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="p-overseas__footer">
              <Link href={`/${lang}/vietnam/projects`} className="p-overseas__more">
                {t.overseasMore} →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Latest News ───────────────────────────────────── */}
      <ScrollReveal>
        <section className="p-home-news">
          <div className="l-inner">
            <div className="p-home-news__head">
              <p className="p-home-news__eyebrow">{t.newsEyebrow}</p>
              <h2 className="p-home-news__title">{t.newsTitle}</h2>
            </div>
            <ul className="p-home-news__list">
              {t.newsItems.map((item, i) => (
                <li key={i} className="p-home-news__item">
                  <time className="p-home-news__date">{item.date}</time>
                  <span className="p-home-news__tag">{item.tag}</span>
                  <Link href={`/${lang}/blog`} className="p-home-news__link">{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className="p-home-news__footer">
              <Link href={`/${lang}/blog`} className="p-overseas__more">{t.newsMore} →</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}

