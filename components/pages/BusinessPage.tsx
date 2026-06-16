"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type Props = { lang: string };

const T: Record<string, {
  heroEyebrow: string;
  heroTitle: string;
  sections: {
    num: string;
    heading: string;
    body: string;
    image: string;
    cards: { title: string; body: string }[];
  }[];
  ctaText: string;
  ctaBtn: string;
}> = {
  ja: {
    heroEyebrow: "Services",
    heroTitle: "事業内容",
    sections: [
      {
        num: "01",
        heading: "国内不動産サービス",
        body: "日本国内の不動産売買・仲介・賃貸管理を総合的にサポートします。投資物件から居住用まで、豊富な情報と専門知識で最適な資産運用をご提案します。",
        image: "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
        cards: [
          { title: "物件売買・仲介", body: "投資・居住目的を問わず、マンション・戸建て・土地・商業施設など幅広い物件を取り扱います。" },
          { title: "賃貸管理・運用", body: "入居者募集から家賃管理・修繕対応・確定申告サポートまで、安心の管理体制を提供します。" },
        ],
      },
      {
        num: "02",
        heading: "海外不動産サービス",
        body: "ベトナムをはじめとした東南アジアの高成長不動産市場への投資をサポート。現地スタッフによる総合的なサポート体制で、安心の海外不動産投資を実現します。",
        image: "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
        cards: [
          { title: "投資物件", body: "ウェルネスリゾート・ホテルコンドミニアム・産業不動産など、高い収益性が期待できるベトナムの優良物件をご紹介します。" },
          { title: "日系賃貸住宅", body: "戦略的パートナー「Onsen Fuji」と連携し、現地在住の日本人向け賃貸住宅サービスを提供します。" },
        ],
      },
      {
        num: "03",
        heading: "海外進出コンサルティング",
        body: "海外への事業進出を検討している企業・個人をトータルサポート。現地でのビジネスデューデリジェンスから事業立ち上げまで、実務的なアドバイスを提供します。",
        image: "/assets/red/pexels-mart-production-7415041-scaled.jpg",
        cards: [
          { title: "現地法人設立支援", body: "海外での会社設立・法人登記・許認可取得など、煩雑な手続きを一括サポートします。" },
          { title: "投資ビザ・移住サポート", body: "投資ビザ申請から現地生活の立ち上げまで、スムーズな海外移住をサポートします。" },
        ],
      },
      {
        num: "04",
        heading: "外国人投資家向けサービス",
        body: "日本の不動産に興味をお持ちの海外投資家向けに、多言語対応の専門チームがサポートします。日本語・英語・中国語・ベトナム語に対応し、文化・法制度の壁を越えたサービスを提供します。",
        image: "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
        cards: [
          { title: "多言語サポート", body: "日本語・英語・中国語・ベトナム語の専門スタッフが対応。言語の壁なく日本不動産投資が可能です。" },
          { title: "ワンストップ対応", body: "物件探索から購入・管理・出口戦略まで、全プロセスをワンストップでサポートします。" },
        ],
      },
    ],
    ctaText: "不動産に関するご相談は、お気軽にお問い合わせください。",
    ctaBtn: "お問合せ",
  },
  en: {
    heroEyebrow: "Services",
    heroTitle: "Our Services",
    sections: [
      {
        num: "01",
        heading: "Domestic Real Estate",
        body: "Comprehensive support for buying, selling, brokerage, and rental management of real estate in Japan. We offer optimal asset management proposals for both investment and residential properties.",
        image: "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
        cards: [
          { title: "Property Sales & Brokerage", body: "We handle a wide range of properties including condominiums, houses, land, and commercial facilities for investment and residential purposes." },
          { title: "Rental Management", body: "From tenant recruitment to rent management, repair support, and tax return support, we provide a reliable management system." },
        ],
      },
      {
        num: "02",
        heading: "Overseas Real Estate",
        body: "We support investment in high-growth real estate markets in Southeast Asia, including Vietnam. Our comprehensive support system with local staff ensures safe overseas real estate investment.",
        image: "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
        cards: [
          { title: "Investment Properties", body: "We introduce excellent Vietnamese properties with high expected returns, including wellness resorts, hotel condominiums, and industrial real estate." },
          { title: "Japanese Rental Housing", body: "In cooperation with strategic partner 'Onsen Fuji', we provide rental housing services for Japanese residents in Vietnam." },
        ],
      },
      {
        num: "03",
        heading: "Overseas Expansion Consulting",
        body: "Total support for companies and individuals considering expanding overseas. We provide practical advice from local business due diligence to business launch.",
        image: "/assets/red/pexels-mart-production-7415041-scaled.jpg",
        cards: [
          { title: "Local Company Establishment", body: "We provide one-stop support for complex procedures such as overseas company establishment, corporate registration, and license acquisition." },
          { title: "Investment Visa & Relocation", body: "From investment visa applications to setting up local life, we support smooth overseas relocation." },
        ],
      },
      {
        num: "04",
        heading: "Services for Foreign Investors",
        body: "For overseas investors interested in Japanese real estate, our multilingual specialist team provides support. We handle Japanese, English, Chinese, and Vietnamese, breaking cultural and legal barriers.",
        image: "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
        cards: [
          { title: "Multilingual Support", body: "Specialist staff in Japanese, English, Chinese, and Vietnamese. Japanese real estate investment without language barriers." },
          { title: "One-Stop Service", body: "We support all processes from property search to purchase, management, and exit strategy in one stop." },
        ],
      },
    ],
    ctaText: "Please feel free to contact us for any real estate inquiries.",
    ctaBtn: "Contact Us",
  },
  zh: {
    heroEyebrow: "Services",
    heroTitle: "业务内容",
    sections: [
      {
        num: "01",
        heading: "国内房地产服务",
        body: "全面支持日本国内房地产买卖、中介和租赁管理。从投资物业到自住物业，我们提供丰富的信息和专业知识，为您提供最佳的资产管理方案。",
        image: "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
        cards: [
          { title: "房产买卖·中介", body: "无论投资还是自住，我们经营公寓、独栋住宅、土地、商业设施等各类房产。" },
          { title: "租赁管理·运营", body: "从招募租客到租金管理、维修支持、报税支持，提供放心的管理体制。" },
        ],
      },
      {
        num: "02",
        heading: "海外房地产服务",
        body: "支持投资以越南为首的东南亚高增长房地产市场。通过当地工作人员的全面支持体制，实现安心的海外房地产投资。",
        image: "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
        cards: [
          { title: "投资物业", body: "介绍健康度假村、酒店公寓、工业地产等预期收益率高的越南优质物业。" },
          { title: "日系租赁住宅", body: "与战略合作伙伴「Onsen Fuji」合作，为在越日本人提供租赁住宅服务。" },
        ],
      },
      {
        num: "03",
        heading: "海外拓展咨询",
        body: "为考虑海外业务拓展的企业和个人提供全面支持。从当地商业尽职调查到业务启动，提供实务性建议。",
        image: "/assets/red/pexels-mart-production-7415041-scaled.jpg",
        cards: [
          { title: "当地法人设立支持", body: "一站式支持海外公司设立、法人登记、许可证获取等繁琐手续。" },
          { title: "投资签证·移居支持", body: "从投资签证申请到当地生活的启动，支持顺利的海外移居。" },
        ],
      },
      {
        num: "04",
        heading: "面向外国投资者的服务",
        body: "为对日本房地产感兴趣的海外投资者，多语言专业团队提供支持。支持日语、英语、中文、越南语，跨越文化和法律制度壁垒提供服务。",
        image: "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
        cards: [
          { title: "多语言支持", body: "日语、英语、中文、越南语专业人员对应。无语言障碍即可进行日本房地产投资。" },
          { title: "一站式对应", body: "从物业搜索到购买、管理、退出策略，全程一站式支持。" },
        ],
      },
    ],
    ctaText: "如有任何房地产相关咨询，欢迎随时联系我们。",
    ctaBtn: "联系我们",
  },
  vi: {
    heroEyebrow: "Services",
    heroTitle: "Dịch Vụ",
    sections: [
      {
        num: "01",
        heading: "Dịch vụ BĐS trong nước",
        body: "Hỗ trợ toàn diện mua bán, môi giới và quản lý cho thuê bất động sản tại Nhật Bản. Chúng tôi đề xuất phương án quản lý tài sản tối ưu từ bất động sản đầu tư đến nhà ở.",
        image: "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
        cards: [
          { title: "Mua bán & Môi giới", body: "Chúng tôi kinh doanh đa dạng bất động sản bao gồm căn hộ, nhà phố, đất nền, cơ sở thương mại cho cả mục đích đầu tư và sinh sống." },
          { title: "Quản lý cho thuê", body: "Từ tuyển dụng người thuê đến quản lý tiền thuê, hỗ trợ sửa chữa và khai thuế, chúng tôi cung cấp hệ thống quản lý đáng tin cậy." },
        ],
      },
      {
        num: "02",
        heading: "Dịch vụ BĐS nước ngoài",
        body: "Hỗ trợ đầu tư vào thị trường bất động sản tăng trưởng cao ở Đông Nam Á, đặc biệt là Việt Nam. Hệ thống hỗ trợ toàn diện với nhân viên địa phương đảm bảo đầu tư bất động sản nước ngoài an toàn.",
        image: "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
        cards: [
          { title: "Bất động sản đầu tư", body: "Giới thiệu các bất động sản chất lượng cao tại Việt Nam với lợi nhuận kỳ vọng cao bao gồm khu nghỉ dưỡng, căn hộ khách sạn và bất động sản công nghiệp." },
          { title: "Nhà cho thuê kiểu Nhật", body: "Phối hợp với đối tác chiến lược 'Onsen Fuji', cung cấp dịch vụ nhà cho thuê cho người Nhật sinh sống tại Việt Nam." },
        ],
      },
      {
        num: "03",
        heading: "Tư vấn mở rộng ra nước ngoài",
        body: "Hỗ trợ toàn diện cho các doanh nghiệp và cá nhân đang cân nhắc mở rộng kinh doanh ra nước ngoài. Cung cấp tư vấn thực tế từ thẩm định doanh nghiệp tại địa phương đến khởi động kinh doanh.",
        image: "/assets/red/pexels-mart-production-7415041-scaled.jpg",
        cards: [
          { title: "Hỗ trợ thành lập pháp nhân", body: "Hỗ trợ một cửa các thủ tục phức tạp như thành lập công ty, đăng ký pháp nhân và xin giấy phép tại nước ngoài." },
          { title: "Visa đầu tư & Hỗ trợ di cư", body: "Từ xin visa đầu tư đến thiết lập cuộc sống tại địa phương, chúng tôi hỗ trợ di cư ra nước ngoài một cách suôn sẻ." },
        ],
      },
      {
        num: "04",
        heading: "Dịch vụ cho nhà đầu tư nước ngoài",
        body: "Đội ngũ chuyên gia đa ngôn ngữ hỗ trợ các nhà đầu tư nước ngoài quan tâm đến bất động sản Nhật Bản. Hỗ trợ tiếng Nhật, tiếng Anh, tiếng Trung và tiếng Việt.",
        image: "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
        cards: [
          { title: "Hỗ trợ đa ngôn ngữ", body: "Nhân viên chuyên nghiệp tiếng Nhật, tiếng Anh, tiếng Trung và tiếng Việt. Đầu tư bất động sản Nhật Bản không rào cản ngôn ngữ." },
          { title: "Dịch vụ một cửa", body: "Hỗ trợ toàn bộ quy trình từ tìm kiếm bất động sản đến mua bán, quản lý và chiến lược thoái vốn." },
        ],
      },
    ],
    ctaText: "Vui lòng liên hệ với chúng tôi để được tư vấn về bất động sản.",
    ctaBtn: "Liên hệ",
  },
};

export default function BusinessPage({ lang }: Props) {
  const t = T[lang] ?? T.ja;

  return (
    <>
      {/* Hero */}
      <section className="p-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg"
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

      {/* Numbered sections */}
      {t.sections.map((sec, i) => (
        <ScrollReveal key={sec.num}>
          <section className="p-biz-numbered">
            <div className="l-inner">
              <div className={`p-biz-numbered__inner${i % 2 !== 0 ? " p-biz-numbered__inner--rev" : ""}`}>
                <div className="p-biz-numbered__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sec.image} alt={sec.heading} />
                </div>
                <div className="p-biz-numbered__content">
                  <span className="p-biz-numbered__num">{sec.num}</span>
                  <h2 className="p-biz-numbered__heading">{sec.heading}</h2>
                  <p className="p-biz-numbered__body">{sec.body}</p>
                  <div className="p-biz-numbered__cards">
                    {sec.cards.map((card) => (
                      <div key={card.title} className="p-biz-numbered__card">
                        <div className="p-biz-numbered__card-title">「{card.title}」</div>
                        <div className="p-biz-numbered__card-body">{card.body}</div>
                      </div>
                    ))}
                  </div>
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

