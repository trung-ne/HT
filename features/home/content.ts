import type { LanguageCode } from "@/lib/i18n";

export type MainImageSection = {
  id: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export type Translation = {
  navAbout: string;
  splashDesc: string;
  philosophyTitle: string;
  philosophyDesc: string;
  sections: Omit<MainImageSection, "image" | "id" | "reverse">[];
  footerCommerce: string;
  processTitle: string;
  processSteps: { title: string; description: string }[];
  companyTitle: string;
  companyInfo: {
    name: string;
    founded: string;
    capital: string;
    representative: string;
    address: string;
    businessContent: string;
    ctaLabel: string;
  };
};

export const sectionImageMeta = [
  { id: "cb_1", reverse: true, image: "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg" },
  { id: "cb_2", image: "/assets/red/pexels-mart-production-7415041-scaled.jpg" },
  { id: "cb_3", reverse: true, image: "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg" },
  { id: "cb_4", image: "/assets/red/pexels-vanessa-garcia-6325982-scaled.jpg" },
] as const;

export const translations: Record<LanguageCode, Translation> = {
  ja: {
    navAbout: "HT Globalについて",
    splashDesc: "世界中どこからでも信頼できる、日本不動産へのゲートウェイ。",
    philosophyTitle: "私たちのビジョン",
    philosophyDesc: "HT Globalは、安全性、透明性、長期的価値を重視しています。専門的なサポートで、海外投資家が安心して日本の不動産市場に参入できるよう支援します。",
    sections: [
      { title: "ボーダレスな専門性", description: "日本語、英語、中国語、タイ語など複数言語に対応する専門チームが、海外投資家の不動産取引を支援します。\n言語・文化・法規制の壁を越え、安心して日本の不動産市場を進められるよう導きます。" },
      { title: "ワンストップ投資サポート", description: "物件探しから購入契約、賃貸管理、リノベーション、税務申告サポートまで、HT Globalが一貫して対応します。\n複数の事業者を行き来する必要はありません。一つの信頼できるパートナーが、最初の相談から資産管理まで伴走します。" },
      { title: "透明性と信頼", description: "すべての取引で費用、条件、リスクを明確に提示します。\n隠れた手数料なし。不明瞭な説明なし。十分に情報を得たお客様がより良い判断をできると信じています。" },
      { title: "長期的価値へのコミットメント", description: "日本の不動産は安定した収益と資産の保全性で世界的に評価されています。\n売買だけでなく、賃貸運営、出口戦略、ポートフォリオ最適化まで長期的な価値向上を支援します。" },
    ],
    footerCommerce: "特定商取引法に基づく表記 / 通信販売法に基づく表示",
    processTitle: "購入までの流れ",
    processSteps: [
      { title: "初回相談", description: "ご希望、予算、投資目的を伺い、最適なプランをご提案します。" },
      { title: "物件提案", description: "豊富な物件データベースから条件に合う物件をご紹介します。" },
      { title: "内見", description: "実物見学またはオンライン見学で物件と周辺環境を確認します。" },
      { title: "購入申込", description: "購入意思が固まりましたら申込書を提出し、支払い条件と引渡し時期を交渉します。" },
      { title: "契約締結", description: "重要事項を十分に説明した上で売買契約を締結し、手付金をお支払いいただきます。" },
      { title: "引渡し・管理", description: "決済完了後、物件を引渡します。HT Globalが引き続き賃貸管理をサポートします。" },
    ],
    companyTitle: "会社情報",
    companyInfo: {
      name: "HT Global Co., Ltd.（株式会社HTグローバル）",
      founded: "",
      capital: "30,000,000円",
      representative: "YOSHINOBU UMENO / 梅野 義信 / Director & Division Manager; NGUYEN DUY THANG / グエン ユイ タン / 取締役 事業本部長",
      address: "〒132-0035 東京都江戸川区平井5-38-3 サンヴェールボニー301",
      businessContent: "不動産の売買、仲介、賃貸、管理、海外投資向け不動産情報提供及びコンサルティング業務",
      ctaLabel: "無料相談",
    },
  },
  en: {
    navAbout: "About HT Global",
    splashDesc: "Your trusted gateway to Japanese real estate, from anywhere in the world.",
    philosophyTitle: "Our Vision",
    philosophyDesc: "HT Global Co., Ltd. is built on the principles of safety, transparency, and long-term value. We empower global investors to enter the Japanese real estate market with confidence, backed by expert guidance at every step.",
    sections: [
      { title: "Borderless Expertise", description: "Our multilingual team of professionals supports clients in Japanese, English, Chinese, Thai, and more.\nWe bridge the gaps in language, culture, and regulation so that overseas investors can navigate the Japanese property market with ease and confidence." },
      { title: "One-Stop Investment Support", description: "From property search and purchase contracts to rental management, renovation, and tax filing support – HT Global handles the entire process under one roof.\nNo need to juggle multiple agencies. One trusted partner guides you from first inquiry to long-term asset management." },
      { title: "Transparency and Trust", description: "We are committed to full disclosure of costs, conditions, and risks in every transaction.\nNo hidden fees. No vague explanations. We believe that well-informed clients make better decisions, and we are dedicated to honest, clear communication at every stage." },
      { title: "Committed to Long-Term Value", description: "Japanese real estate is globally recognized for stable returns and reliable asset preservation.\nBeyond buying and selling, HT Global partners with you for the long haul – supporting rental operations, exit strategies, and portfolio optimization to maximize the value of your investment over time." },
    ],
    footerCommerce: "Notation based on the Specified Commercial Transactions Act / Mail-order Sales Disclosure",
    processTitle: "How to Buy",
    processSteps: [
      { title: "Initial Consultation", description: "Share your goals, budget, and investment objectives. Our advisor creates a tailored plan for you." },
      { title: "Property Proposal", description: "We introduce properties matching your criteria from our extensive database." },
      { title: "Property Viewing", description: "Visit in person or take a virtual tour to inspect the property and surrounding area." },
      { title: "Purchase Application", description: "Once decided, fill in the application form. We negotiate payment terms and handover dates on your behalf." },
      { title: "Contract Signing", description: "After full explanation of key terms, sign the sales agreement and pay the deposit." },
      { title: "Handover & Management", description: "After final settlement, the property is transferred to you. HT Global handles ongoing rental management." },
    ],
    companyTitle: "Company Information",
    companyInfo: {
      name: "HT Global Co., Ltd. (株式会社HTグローバル)",
      founded: "",
      capital: "¥30,000,000",
      representative: "YOSHINOBU UMENO / 梅野 義信 / Director & Division Manager; NGUYEN DUY THANG / グエン ユイ タン / Director / General Manager",
      address: "5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301",
      businessContent: "Real estate sales, brokerage, rental, property management, and real estate information & consulting for overseas investors",
      ctaLabel: "Free Consultation",
    },
  },
  zh: {
    navAbout: "关于 HT Global",
    splashDesc: "值得信赖的日本房地产入口，无论您身在世界何处。",
    philosophyTitle: "我们的愿景",
    philosophyDesc: "HT Global秉承安全、透明和长期价值的原则。我们为海外投资者提供专业支持，帮助他们自信进入日本房地产市场。",
    sections: [
      { title: "无国界专业服务", description: "我们的多语种团队提供日语、英语、中文、泰语等支持。\n我们帮助海外客户跨越语言、文化和法规障碍，轻松进入日本房地产市场。" },
      { title: "一站式投资支持", description: "从物色房源、签署购房合同到出租管理、装修和税务申报，HT Global为您提供一体化服务。\n无需协调多个机构，一个可信赖的合作伙伴陪伴您从咨询到长期资产管理。" },
      { title: "透明与信赖", description: "我们承诺在每一次交易中完整披露费用、条件和风险。\n没有隐形费用，没有模糊解释。我们相信充分知情的客户会做出更好的决策。" },
      { title: "长期价值承诺", description: "日本房地产因稳定回报和资产保值而享誉全球。\nHT Global不仅协助买卖，还长期支持出租管理、退出策略和资产组合优化。" },
    ],
    footerCommerce: "基于特定商取引法的标注 / 邮购法披露",
    processTitle: "购买流程",
    processSteps: [
      { title: "初次咨询", description: "告诉我们您的需求、预算和投资目标。我们的顾问会为您制定专属方案。" },
      { title: "房源推荐", description: "我们从丰富数据库中筛选符合您条件的房源。" },
      { title: "看房 / 在线咨询", description: "实地看房或线上看房，检查房源及周边环境。" },
      { title: "提交购房申请", description: "决定后填写申请表。我们代为协商付款条件和交付日期。" },
      { title: "签署合同", description: "在充分说明关键条款后，签署买卖合同并支付定金。" },
      { title: "交付与管理", description: "完成结算后交付房产。HT Global继续提供长期出租管理支持。" },
    ],
    companyTitle: "公司信息",
    companyInfo: {
      name: "株式会社HTグローバル (HT Global Co., Ltd.)",
      founded: "",
      capital: "¥30,000,000",
      representative: "YOSHINOBU UMENO / 梅野 義信 / 取締役 事業部長; NGUYEN DUY THANG / グエン ユイ タン / 取締役 事業本部長",
      address: "〒132-0035 东京都江户川区平井5-38-3 Sunveil Bony 301",
      businessContent: "不动产买卖、仲介、出租、管理，以及面向海外投资者的不动产信息提供与咨询服务",
      ctaLabel: "免费咨询",
    },
  },
  vi: {
    navAbout: "Về HT Global",
    splashDesc: "Cổng vào bất động sản Nhật Bản đáng tin cậy, dù bạn ở bất kỳ đâu trên thế giới.",
    philosophyTitle: "Tầm nhìn của chúng tôi",
    philosophyDesc: "HT Global được xây dựng trên nền tảng an toàn, minh bạch và giá trị dài hạn. Chúng tôi hỗ trợ các nhà đầu tư quốc tế bước vào thị trường bất động sản Nhật Bản một cách tự tin.",
    sections: [
      { title: "Chuyên môn không biên giới", description: "Đội ngũ đa ngôn ngữ của chúng tôi hỗ trợ khách hàng bằng tiếng Nhật, Anh, Trung, Việt và nhiều ngôn ngữ khác.\nChúng tôi giúp vượt qua rào cản ngôn ngữ, văn hóa và pháp lý để nhà đầu tư nước ngoài có thể dễ dàng tiếp cận thị trường bất động sản Nhật Bản một cách thuận lợi." },
      { title: "Hỗ trợ đầu tư toàn diện", description: "Từ tìm kiếm bất động sản, ký hợp đồng mua bán, quản lý cho thuê, sửa chữa đến khai thuế — HT Global xử lý toàn bộ quy trình trong một nơi.\nKhông cần liên hệ nhiều công ty. Một đối tác đáng tin cậy đồng hành cùng bạn từ lúc bắt đầu đến quản lý tài sản dài hạn." },
      { title: "Minh bạch và uy tín", description: "Chúng tôi công khai đầy đủ chi phí, điều kiện và rủi ro trong mọi giao dịch.\nKhông phí tiềm ẩn. Không giải thích mơ hồ. Chúng tôi tin rằng khách hàng có đầy đủ thông tin sẽ đưa ra quyết định tốt hơn." },
      { title: "Cam kết giá trị dài hạn", description: "Bất động sản Nhật Bản được công nhận toàn cầu về lợi nhuận ổn định và bảo toàn giá trị tài sản.\nHT Global không chỉ dừng lại ở giao dịch mua bán, mà là đối tác dài hạn hỗ trợ quản lý cho thuê, chiến lược và gia tăng giá trị danh mục." },
    ],
    footerCommerce: "Thông tin theo Luật Giao dịch Thương mại Điện tử / Thông tin bán hàng qua bưu điện",
    processTitle: "Quy trình mua nhà",
    processSteps: [
      { title: "Tư vấn ban đầu", description: "Cho chúng tôi biết nhu cầu, ngân sách và mục tiêu đầu tư của bạn. Chuyên viên sẽ đề xuất phương án phù hợp." },
      { title: "Giới thiệu bất động sản", description: "Chúng tôi giới thiệu các bất động sản phù hợp từ cơ sở dữ liệu phong phú." },
      { title: "Xem nhà / Tư vấn online", description: "Tham quan trực tiếp hoặc xem online để kiểm tra bất động sản và khu vực xung quanh." },
      { title: "Điền form đăng ký mua", description: "Sau khi quyết định, điền form đăng ký. Chúng tôi thương lượng điều kiện thanh toán và ngày bàn giao." },
      { title: "Ký hợp đồng", description: "Sau khi giải thích đầy đủ các điều khoản, ký hợp đồng mua bán và thanh toán tiền đặt cọc." },
      { title: "Bàn giao & Quản lý cho thuê", description: "Sau khi thanh toán đầy đủ, bàn giao nhà cho bạn. HT Global tiếp tục hỗ trợ quản lý cho thuê dài hạn." },
    ],
    companyTitle: "Thông tin công ty",
    companyInfo: {
      name: "HT Global Co., Ltd. (株式会社HTグローバル)",
      founded: "",
      capital: "30 triệu yên",
      representative: "YOSHINOBU UMENO / 梅野 義信 / Director & Division Manager; NGUYEN DUY THANG / グエン ユイ タン / Giám đốc & Trưởng bộ phận",
      address: "5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301",
      businessContent: "Mua bán, môi giới, cho thuê, quản lý bất động sản, và cung cấp thông tin & tư vấn bất động sản cho nhà đầu tư nước ngoài",
      ctaLabel: "Tư vấn miễn phí",
    },
  },
};