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
  {
    id: "cb_1",
    reverse: true,
    image:
      "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
  },
  {
    id: "cb_2",
    image:
      "/assets/red/pexels-mart-production-7415041-scaled.jpg",
  },
  {
    id: "cb_3",
    reverse: true,
    image:
      "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
  },
  {
    id: "cb_4",
    image:
      "/assets/red/pexels-vanessa-garcia-6325982-scaled.jpg",
  },
] as const;

export const translations: Record<LanguageCode, Translation> = {
  ja: {
    navAbout: "HT Global Holdingsについて",
    splashDesc: "世界中どこからでも信頼できる、日本不動産へのゲートウェイ。",
    philosophyTitle: "私たちのビジョン",
    philosophyDesc:
      "HT Global Holdingsは、安全性、透明性、長期的価値を重視しています。専門的なサポートで、海外投資家が安心して日本の不動産市場に参入できるよう支援します。",
    sections: [
      {
        title: "ボーダレスな専門性",
        description:
          "日本語、英語、中国語、タイ語など複数言語に対応する専門チームが、海外投資家の不動産取引を支援します。\n言語・文化・法規制の壁を越え、安心して日本の不動産市場を進められるよう導きます。",
      },
      {
        title: "ワンストップ投資サポート",
        description:
          "物件探しから購入契約、賃貸管理、リノベーション、税務申告サポートまで、HT Globalが一貫して対応します。\n複数の事業者を行き来する必要はありません。一つの信頼できるパートナーが、最初の相談から資産管理まで伴走します。",
      },
      {
        title: "透明性と信頼",
        description:
          "すべての取引で費用、条件、リスクを明確に提示します。\n隠れた手数料なし。不明瞭な説明なし。十分に情報を得たお客様がより良い判断をできると信じています。",
      },
      {
        title: "長期的価値へのコミットメント",
        description:
          "日本の不動産は安定した収益と資産の保全性で世界的に評価されています。\n売買だけでなく、賃貸運営、出口戦略、ポートフォリオ最適化まで長期的な価値向上を支援します。",
      },
    ],
    footerCommerce: "特定商取引法に基づく表記 / 通信販売法に基づく表示",
    processTitle: "購入までの流れ",
    processSteps: [
      { title: "初回相談", description: "ご希望、予算、投資目的を伺い、最適なプランをご提案します。" },
      { title: "物件提案", description: "豊富な物件データベースから条件に合う物件をご紹介します。" },
      { title: "内見", description: "実物見学またはオンライン見学で物件と周辺環境を確認します。" },
      { title: "購入申込", description: "購入意思が固まりましたら申込書を提出し、支払い条件と引渡し時期を交渉します。" },
      { title: "契約締結", description: "重要事項を十分に説明した上で売買契約を締結し、手付金をお支払いいただきます。" },
      { title: "引渡し・管理", description: "決済完了後、物件を引渡します。HT Global Holdingsが引き続き賃貸管理をサポートします。" },
    ],
    companyTitle: "会社情報",
    companyInfo: {
      name: "HT Global Holdings Co., Ltd.（株式会社HTグローバル）",
      founded: "",
      capital: "30,000,000円",
      representative: "代表取締役",
      address: "〒132-0035 東京都江戸川区平井5-38-3 サンヴェールボニー301",
      businessContent: "不動産売買・仲介、賃貸管理、海外投資家向け投資コンサルティング",
      ctaLabel: "無料相談",
    },
  },
  en: {
    navAbout: "About HT Global Holdings",
    splashDesc: "Your trusted gateway to Japanese real estate, from anywhere in the world.",
    philosophyTitle: "Our Vision",
    philosophyDesc:
      "HT Global Holdings Co., Ltd. is built on the principles of safety, transparency, and long-term value. We empower global investors to enter the Japanese real estate market with confidence, backed by expert guidance at every step.",
    sections: [
      {
        title: "Borderless Expertise",
        description:
          "Our multilingual team of professionals supports clients in Japanese, English, Chinese, Thai, and more.\nWe bridge the gaps in language, culture, and regulation so that overseas investors can navigate the Japanese property market with ease and confidence.",
      },
      {
        title: "One-Stop Investment Support",
        description:
          "From property search and purchase contracts to rental management, renovation, and tax filing support – HT Global handles the entire process under one roof.\nNo need to juggle multiple agencies. One trusted partner guides you from first inquiry to long-term asset management.",
      },
      {
        title: "Transparency and Trust",
        description:
          "We are committed to full disclosure of costs, conditions, and risks in every transaction.\nNo hidden fees. No vague explanations. We believe that well-informed clients make better decisions, and we are dedicated to honest, clear communication at every stage.",
      },
      {
        title: "Committed to Long-Term Value",
        description:
          "Japanese real estate is globally recognized for stable returns and reliable asset preservation.\nBeyond buying and selling, HT Global partners with you for the long haul – supporting rental operations, exit strategies, and portfolio optimization to maximize the value of your investment over time.",
      },
    ],
    footerCommerce:
      "Notation based on the Specified Commercial Transactions Act / Mail-order Sales Disclosure",
    processTitle: "How to Buy",
    processSteps: [
      { title: "Initial Consultation", description: "Share your goals, budget, and investment objectives. Our advisor creates a tailored plan for you." },
      { title: "Property Proposal", description: "We introduce properties matching your criteria from our extensive database." },
      { title: "Property Viewing", description: "Visit in person or take a virtual tour to inspect the property and surrounding area." },
      { title: "Purchase Application", description: "Once decided, fill in the application form. We negotiate payment terms and handover dates on your behalf." },
      { title: "Contract Signing", description: "After full explanation of key terms, sign the sales agreement and pay the deposit." },
      { title: "Handover & Management", description: "After final settlement, the property is transferred to you. HT Global Holdings handles ongoing rental management." },
    ],
    companyTitle: "Company Information",
    companyInfo: {
      name: "HT Global Holdings Co., Ltd. (株式会社HTグローバル)",
      founded: "",
      capital: "¥30,000,000",
      representative: "Representative Director",
      address: "5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301",
      businessContent: "Real estate sales & brokerage, rental management, investment consulting for overseas investors",
      ctaLabel: "Free Consultation",
    },
  },
  zh: {
    navAbout: "关于 HT Global Holdings",
    splashDesc: "值得信赖的日本房地产入口，无论您身在世界何处。",
    philosophyTitle: "我们的愿景",
    philosophyDesc:
      "HT Global Holdings秉承安全、透明和长期价值的原则。我们为海外投资者提供专业支持，帮助他们自信进入日本房地产市场。",
    sections: [
      {
        title: "无国界专业服务",
        description:
          "我们的多语种团队提供日语、英语、中文、泰语等支持。\n我们帮助海外客户跨越语言、文化和法规障碍，轻松进入日本房地产市场。",
      },
      {
        title: "一站式投资支持",
        description:
          "从物色房源、签署购房合同到出租管理、装修和税务申报，HT Global为您提供一体化服务。\n无需协调多个机构，一个可信赖的合作伙伴陪伴您从咨询到长期资产管理。",
      },
      {
        title: "透明与信赖",
        description:
          "我们承诺在每一次交易中完整披露费用、条件和风险。\n没有隐形费用，没有模糊解释。我们相信充分知情的客户会做出更好的决策。",
      },
      {
        title: "长期价值承诺",
        description:
          "日本房地产因稳定回报和资产保值而享誉全球。\nHT Global不仅协助买卖，还长期支持出租管理、退出策略和资产组合优化。",
      },
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
      name: "株式会社HTグローバル (HT Global Holdings Co., Ltd.)",
      founded: "",
      capital: "¥30,000,000",
      representative: "执行董事",
      address: "〒132-0035 东京都江户川区平井5-38-3 Sunveil Bony 301",
      businessContent: "不动产买卖与中介、出租管理、海外投资者投资咨询",
      ctaLabel: "免费咨询",
    },
  },
  vi: {
    navAbout: "Về HT Global Holdings",
    splashDesc: "Cổng vào bất động sản Nhật Bản đáng tin cậy, dù bạn ở bất kỳ đâu trên thế giới.",
    philosophyTitle: "T\u1ea7m nh\u00ecn c\u1ee7a ch\u00fang t\u00f4i",
    philosophyDesc:
      "HT Global Holdings được xây dựng trên nền tảng an toàn, minh bạch và giá trị dài hạn. Chúng tôi hỗ trợ các nhà đầu tư quốc tế bước vào thị trường bất động sản Nhật Bản một cách tự tin.",
    sections: [
      {
        title: "Chuy\u00ean m\u00f4n kh\u00f4ng bi\u00ean gi\u1edbi",
        description:
          "\u0110\u1ed9i ng\u0169 \u0111a ng\u00f4n ng\u1eef c\u1ee7a ch\u00fang t\u00f4i h\u1ed7 tr\u1ee3 kh\u00e1ch h\u00e0ng b\u1eb1ng ti\u1ebfng Nh\u1eadt, Anh, Trung, Vi\u1ec7t v\u00e0 nhi\u1ec1u ng\u00f4n ng\u1eef kh\u00e1c.\nCh\u00fang t\u00f4i gi\u00fap v\u01b0\u1ee3t qua r\u00e0o c\u1ea3n ng\u00f4n ng\u1eef, v\u0103n h\u00f3a v\u00e0 ph\u00e1p l\u00fd \u0111\u1ec3 nh\u00e0 \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i ti\u1ebfp c\u1eadn th\u1ecb tr\u01b0\u1eddng b\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n m\u1ed9t c\u00e1ch thu\u1eadn l\u1ee3i.",
      },
      {
        title: "H\u1ed7 tr\u1ee3 \u0111\u1ea7u t\u01b0 to\u00e0n di\u1ec7n",
        description:
          "Từ tìm kiếm bất động sản, ký hợp đồng mua bán, quản lý cho thuê, sửa chữa đến khai thuế — HT Global Holdings xử lý toàn bộ quy trình trong một nơi.\nKhông cần liên hệ nhiều công ty. Một đối tác đáng tin cậy đồng hành cùng bạn từ lúc bắt đầu đến quản lý tài sản dài hạn.",
      },
      {
        title: "Minh b\u1ea1ch v\u00e0 uy t\u00edn",
        description:
          "Ch\u00fang t\u00f4i c\u00f4ng khai \u0111\u1ea7y \u0111\u1ee7 chi ph\u00ed, \u0111i\u1ec1u ki\u1ec7n v\u00e0 r\u1ee7i ro trong m\u1ecdi giao d\u1ecbch.\nKh\u00f4ng ph\u00ed ti\u1ec1n \u1ea9n. Kh\u00f4ng gi\u1ea3i th\u00edch mao h\u1ed3. Ch\u00fang t\u00f4i tin r\u1eb1ng kh\u00e1ch h\u00e0ng c\u00f3 \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin s\u1ebd \u0111\u01b0a ra quy\u1ebft \u0111\u1ecbnh t\u1ed1t h\u01a1n.",
      },
      {
        title: "Cam k\u1ebft gi\u00e1 tr\u1ecb d\u00e0i h\u1ea1n",
        description:
          "Bất động sản Nhật Bản được công nhận toàn cầu về lợi nhuận ổn định và bảo toàn giá trị tài sản.\nHT Global Holdings không chỉ dừng lại ở giao dịch mua bán, mà là đối tác dài hạn hỗ trợ quản lý cho thuê, chiến lược tự động và gia tăng giá trị danh mục.",
      },
    ],
    footerCommerce: "Th\u00f4ng tin theo Lu\u1eadt Giao d\u1ecbch Th\u01b0\u01a1ng m\u1ea1i \u0110i\u1ec7n t\u1eed / Th\u00f4ng tin b\u00e1n h\u00e0ng qua b\u01b0u \u0111i\u1ec7n",    processTitle: "Quy tr\u00ecnh mua nh\u00e0",
    processSteps: [
      { title: "T\u01b0 v\u1ea5n ban \u0111\u1ea7u", description: "Cho ch\u00fang t\u00f4i bi\u1ebft nhu c\u1ea7u, ng\u00e2n s\u00e1ch v\u00e0 m\u1ee5c ti\u00eau \u0111\u1ea7u t\u01b0. Chuy\u00ean vi\u00ean s\u1ebd \u0111\u1ec1 xu\u1ea5t ph\u01b0\u01a1ng \u00e1n ph\u00f9 h\u1ee3p." },
      { title: "Gi\u1edbi thi\u1ec7u b\u1ea5t \u0111\u1ed9ng s\u1ea3n", description: "Ch\u00fang t\u00f4i gi\u1edbi thi\u1ec7u c\u00e1c b\u1ea5t \u0111\u1ed9ng s\u1ea3n ph\u00f9 h\u1ee3p t\u1eeb c\u01a1 s\u1edf d\u1eef li\u1ec7u phong ph\u00fa." },
      { title: "Xem nh\u00e0 / T\u01b0 v\u1ea5n online", description: "Tham quan tr\u1ef1c ti\u1ebfp ho\u1eb7c xem online \u0111\u1ec3 ki\u1ec3m tra b\u1ea5t \u0111\u1ed9ng s\u1ea3n v\u00e0 khu v\u1ef1c xung quanh." },
      { title: "\u0110i\u1ec1n form \u0111\u0103ng k\u00fd mua", description: "Sau khi quy\u1ebft \u0111\u1ecbnh, \u0111i\u1ec1n form \u0111\u0103ng k\u00fd. Ch\u00fang t\u00f4i th\u01b0\u01a1ng l\u01b0\u1ee3ng \u0111i\u1ec1u ki\u1ec7n thanh to\u00e1n v\u00e0 ng\u00e0y b\u00e0n giao." },
      { title: "K\u00fd h\u1ee3p \u0111\u1ed3ng", description: "Sau khi gi\u1ea3i th\u00edch \u0111\u1ea7y \u0111\u1ee7 c\u00e1c \u0111i\u1ec1u kho\u1ea3n, k\u00fd h\u1ee3p \u0111\u1ed3ng mua b\u00e1n v\u00e0 thanh to\u00e1n ti\u1ec1n \u0111\u1eb7t c\u1ecdc." },
      { title: "B\u00e0n giao & Qu\u1ea3n l\u00fd cho thu\u00ea", description: "Sau khi thanh to\u00e1n \u0111\u1ea7y \u0111\u1ee7, b\u00e0n giao nh\u00e0 cho b\u1ea1n. HT Global ti\u1ebfp t\u1ee5c h\u1ed7 tr\u1ee3 qu\u1ea3n l\u00fd cho thu\u00ea d\u00e0i h\u1ea1n." },
    ],
    companyTitle: "Th\u00f4ng tin c\u00f4ng ty",
    companyInfo: {
      name: "HT Global Holdings Co., Ltd. (\u682a\u5f0f\u4f1a\u793eHT\u30b0\u30ed\u30fc\u30d0\u30eb)",
      founded: "",
      capital: "30 tri\u1ec7u y\u00ean",
      representative: "Gi\u00e1m \u0111\u1ed1c \u0111i\u1ec1u h\u00e0nh",
      address: "5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301",
      businessContent: "Mua b\u00e1n & m\u00f4i gi\u1edbi b\u1ea5t \u0111\u1ed9ng s\u1ea3n, qu\u1ea3n l\u00fd cho thu\u00ea, t\u01b0 v\u1ea5n \u0111\u1ea7u t\u01b0 cho nh\u00e0 \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i",
      ctaLabel: "T\u01b0 v\u1ea5n mi\u1ec5n ph\u00ed",
    },
  },
};



