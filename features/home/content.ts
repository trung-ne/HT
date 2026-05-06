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
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
  },
  {
    id: "cb_2",
    image:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-mart-production-7415041-scaled.jpg",
  },
  {
    id: "cb_3",
    reverse: true,
    image:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-tomas-anunziata-3876407-1-scaled.jpg",
  },
  {
    id: "cb_4",
    image:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-vanessa-garcia-6325982-scaled.jpg",
  },
] as const;

export const translations: Record<LanguageCode, Translation> = {
  ja: {
    navAbout: "redhomesについて",
    splashDesc: "日本不動産への確かな一歩を、世界のお客様と共に。",
    philosophyTitle: "私たちのビジョン",
    philosophyDesc:
      "redhomesは「安心・透明・長期的価値」を軸に、世界中のお客様が日本の不動産市場に自信を持って参入できるよう、専門的かつ誠実なサービスを提供します。",
    sections: [
      {
        title: "ボーダーレスな専門性",
        description:
          "redhomesは多国籍のプロフェッショナルチームを擁し、日本語・英語・中国語・タイ語など多言語でのサポートを提供します。\n国境を越えたバックグラウンドを持つ専門家が、海外のお客様が日本不動産市場に参入する際の言語・文化・法制度の壁を取り除きます。",
      },
      {
        title: "ワンストップ投賄支援",
        description:
          "物件の探索から購入契約、賃貸管理、リフォーム、確定申告サポートまで、投賄に必要なあらゆるプロセスをredhomesが一括サポートします。\nお客様が複数の業者に問い合わせる手間を省き、一つの信頼できる窓口で全てを完結できる体制を整えています。",
      },
      {
        title: "透明性と信頼の構築",
        description:
          "redhomesはすべての取引において、費用・条件・リスクを明確に開示することを徹底しています。\n隠れた手数料や曖昧な説明は一切なく、お客様が十分な情報を持って意思決定できるよう、誠実なコミュニケーションを大切にしています。",
      },
      {
        title: "長期的な資産価値へのコミット",
        description:
          "日本の不動産は安定した収益と長期的な資産保全において世界的に高い評価を受けています。\nredhomesは単なる売買付にとどまらず、購入後の運用・出口戦略・資産の最大化まで、長期的パートナーとしてお客様に寡り添います。",
      },
    ],
    footerCommerce: "特定商取引法に基づく表記 / 通信販売に関する表示事項",
    processTitle: "購入の流れ",
    processSteps: [
      { title: "購入相談", description: "ご要望・ご予算・投資目的をお聞かせください。担当者が最適なご提案をいたします。" },
      { title: "物件紹介", description: "条件に合った物件を豊富な情報の中からご紹介します。" },
      { title: "物件確認・見学", description: "現地視察またはオンラインにて物件・周辺環境をご確認いただけます。" },
      { title: "購入申込", description: "ご購入を決定された後、購入申込書にご記入。支払方法・引渡日等の条件を交渉します。" },
      { title: "売買契約", description: "重要事項の説明後、売買契約書に署名・押印し、手付金をお支払いいただきます。" },
      { title: "引渡し・管理開始", description: "残代金決済後、物件を引き渡します。その後の賃貸管理もredhomesが一括サポートします。" },
    ],
    companyTitle: "会社概要",
    companyInfo: {
      name: "redhomes株式会社",
      founded: "2020年",
      capital: "10,000,000円",
      representative: "代表取締役",
      address: "東京都渋谷区",
      businessContent: "不動産売買・仲介業、賃貸管理業、外国人投資家向け不動産コンサルティング",
      ctaLabel: "無料相談はこちら",
    },
  },
  en: {
    navAbout: "About redhomes",
    splashDesc: "Your trusted gateway to Japanese real estate, from anywhere in the world.",
    philosophyTitle: "Our Vision",
    philosophyDesc:
      "redhomes is built on the principles of safety, transparency, and long-term value. We empower global investors to enter the Japanese real estate market with confidence, backed by expert guidance at every step.",
    sections: [
      {
        title: "Borderless Expertise",
        description:
          "Our multilingual team of professionals supports clients in Japanese, English, Chinese, Thai, and more.\nWe bridge the gaps in language, culture, and regulation so that overseas investors can navigate the Japanese property market with ease and confidence.",
      },
      {
        title: "One-Stop Investment Support",
        description:
          "From property search and purchase contracts to rental management, renovation, and tax filing support — redhomes handles the entire process under one roof.\nNo need to juggle multiple agencies. One trusted partner guides you from first inquiry to long-term asset management.",
      },
      {
        title: "Transparency and Trust",
        description:
          "We are committed to full disclosure of costs, conditions, and risks in every transaction.\nNo hidden fees. No vague explanations. We believe that well-informed clients make better decisions, and we are dedicated to honest, clear communication at every stage.",
      },
      {
        title: "Committed to Long-Term Value",
        description:
          "Japanese real estate is globally recognized for stable returns and reliable asset preservation.\nBeyond buying and selling, redhomes partners with you for the long haul — supporting rental operations, exit strategies, and portfolio optimization to maximize the value of your investment over time.",
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
      { title: "Handover & Management", description: "After final settlement, the property is transferred to you. redhomes handles ongoing rental management." },
    ],
    companyTitle: "Company Information",
    companyInfo: {
      name: "redhomes Co., Ltd.",
      founded: "2020",
      capital: "¥10,000,000",
      representative: "Representative Director",
      address: "Shibuya, Tokyo, Japan",
      businessContent: "Real estate sales & brokerage, rental management, investment consulting for overseas investors",
      ctaLabel: "Free Consultation",
    },
  },
  zh: {
    navAbout: "关于 redhomes",
    splashDesc: "无论身处何地，开启日本不动产投资的第一步。",
    philosophyTitle: "我们的愿景",
    philosophyDesc:
      "redhomes 以「安心、透明、长期价値」为核心理念，助力全球投资者以充分的信心进入日本不动产市场，并在每个环节提供专业、诚信的服务。",
    sections: [
      {
        title: "跨境专业能力",
        description:
          "我们的多语言专业团队支持日语、英语、中文、泰语等多种语言服务。\n我们消除语言、文化与法规壁垒，让海外投资者能够轻松、自信地进入日本不动产市场。",
      },
      {
        title: "一站式投资支持",
        description:
          "从房源搜索、购买合同、租赁管理、装修改造到税务申报，redhomes 全程一站式服务。\n无需联系多家机构，一个値得信赖的合作伙伴陊伴您从初步咋询到长期资产管理。",
      },
      {
        title: "透明与信任",
        description:
          "我们在每笔交易中严格披露费用、条件与风险。\n没有隐藏收费，没有模糊说明。我们相信充分了解信息的客户能做出更好的决策，致力于在每个阶段提供诚实、清晰的沟通。",
      },
      {
        title: "致力于长期资产价値",
        description:
          "日本不动产以稳定收益和可靠的资产保値在全球享有盛誉。\nredhomes 不止于买卖中介，更作为长期合作伙伴，支持您进行出租运营、退出规划与资产组合优化，帮助您实现投资价値的长期最大化。",
      },
    ],
    footerCommerce: "特定商业交易法标示 / 通信销售相关标示事项",
    processTitle: "购房流程",
    processSteps: [
      { title: "初步咨询", description: "告诉我们您的需求、预算和投资目标，我们的顾问将为您量身定制方案。" },
      { title: "房源推荐", description: "我们从丰富的房源数据库中为您推荐符合条件的优质房产。" },
      { title: "实地看房", description: "亲临现场或线上看房，确认房产及周边环境情况。" },
      { title: "提交购房申请", description: "决定购买后填写申请表，协商付款方式、交房日期等条件。" },
      { title: "签署合同", description: "重要事项说明后，签署买卖合同并支付定金。" },
      { title: "交房及租赁管理", description: "尾款结清后完成交房，此后的租赁管理也由redhomes全程提供。" },
    ],
    companyTitle: "公司简介",
    companyInfo: {
      name: "redhomes株式会社",
      founded: "2020年",
      capital: "1,000万日元",
      representative: "代表取缔役",
      address: "日本东京都涩谷区",
      businessContent: "不动产买卖·中介业务、租赁管理、面向海外投资者的不动产咨询",
      ctaLabel: "免费咨询",
    },
  },
  vi: {
    navAbout: "V\u1ec1 redhomes",
    splashDesc: "C\u1ed5ng v\u00e0o b\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n \u0111\u00e1ng tin c\u1eady, d\u00f9 b\u1ea1n \u1edf b\u1ea5t k\u1ef3 \u0111\u00e2u tr\u00ean th\u1ebf gi\u1edbi.",
    philosophyTitle: "T\u1ea7m nh\u00ecn c\u1ee7a ch\u00fang t\u00f4i",
    philosophyDesc:
      "redhomes \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng tr\u00ean n\u1ec1n t\u1ea3ng an to\u00e0n, minh b\u1ea1ch v\u00e0 gi\u00e1 tr\u1ecb d\u00e0i h\u1ea1n. Ch\u00fang t\u00f4i h\u1ed7 tr\u1ee3 c\u00e1c nh\u00e0 \u0111\u1ea7u t\u01b0 qu\u1ed1c t\u1ebf b\u01b0\u1edbc v\u00e0o th\u1ecb tr\u01b0\u1eddng b\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n m\u1ed9t c\u00e1ch t\u1ef1 tin.",
    sections: [
      {
        title: "Chuy\u00ean m\u00f4n kh\u00f4ng bi\u00ean gi\u1edbi",
        description:
          "\u0110\u1ed9i ng\u0169 \u0111a ng\u00f4n ng\u1eef c\u1ee7a ch\u00fang t\u00f4i h\u1ed7 tr\u1ee3 kh\u00e1ch h\u00e0ng b\u1eb1ng ti\u1ebfng Nh\u1eadt, Anh, Trung, Vi\u1ec7t v\u00e0 nhi\u1ec1u ng\u00f4n ng\u1eef kh\u00e1c.\nCh\u00fang t\u00f4i gi\u00fap v\u01b0\u1ee3t qua r\u00e0o c\u1ea3n ng\u00f4n ng\u1eef, v\u0103n h\u00f3a v\u00e0 ph\u00e1p l\u00fd \u0111\u1ec3 nh\u00e0 \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i ti\u1ebfp c\u1eadn th\u1ecb tr\u01b0\u1eddng b\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n m\u1ed9t c\u00e1ch thu\u1eadn l\u1ee3i.",
      },
      {
        title: "H\u1ed7 tr\u1ee3 \u0111\u1ea7u t\u01b0 to\u00e0n di\u1ec7n",
        description:
          "T\u1eeb t\u00ecm ki\u1ebfm b\u1ea5t \u0111\u1ed9ng s\u1ea3n, k\u00fd h\u1ee3p \u0111\u1ed3ng mua b\u00e1n, qu\u1ea3n l\u00fd cho thu\u00ea, s\u1eeda ch\u1eefa \u0111\u1ebfn khai thu\u1ebf \u2014 redhomes x\u1eed l\u00fd to\u00e0n b\u1ed9 quy tr\u00ecnh trong m\u1ed9t n\u01a1i.\nKh\u00f4ng c\u1ea7n li\u00ean h\u1ec7 nhi\u1ec1u c\u00f4ng ty. M\u1ed9t \u0111\u1ed1i t\u00e1c \u0111\u00e1ng tin c\u1eady \u0111\u1ed3ng h\u00e0nh c\u00f9ng b\u1ea1n t\u1eeb l\u00fac b\u1eaft \u0111\u1ea7u \u0111\u1ebfn qu\u1ea3n l\u00fd t\u00e0i s\u1ea3n d\u00e0i h\u1ea1n.",
      },
      {
        title: "Minh b\u1ea1ch v\u00e0 uy t\u00edn",
        description:
          "Ch\u00fang t\u00f4i c\u00f4ng khai \u0111\u1ea7y \u0111\u1ee7 chi ph\u00ed, \u0111i\u1ec1u ki\u1ec7n v\u00e0 r\u1ee7i ro trong m\u1ecdi giao d\u1ecbch.\nKh\u00f4ng ph\u00ed ti\u1ec1n \u1ea9n. Kh\u00f4ng gi\u1ea3i th\u00edch mao h\u1ed3. Ch\u00fang t\u00f4i tin r\u1eb1ng kh\u00e1ch h\u00e0ng c\u00f3 \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin s\u1ebd \u0111\u01b0a ra quy\u1ebft \u0111\u1ecbnh t\u1ed1t h\u01a1n.",
      },
      {
        title: "Cam k\u1ebft gi\u00e1 tr\u1ecb d\u00e0i h\u1ea1n",
        description:
          "B\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n \u0111\u01b0\u1ee3c c\u00f4ng nh\u1eadn to\u00e0n c\u1ea7u v\u1ec1 l\u1ee3i nhu\u1eadn \u1ed5n \u0111\u1ecbnh v\u00e0 b\u1ea3o to\u00e0n gi\u00e1 tr\u1ecb t\u00e0i s\u1ea3n.\nredhomes kh\u00f4ng ch\u1ec9 d\u1eebng l\u1ea1i \u1edf giao d\u1ecbch mua b\u00e1n, m\u00e0 l\u00e0 \u0111\u1ed1i t\u00e1c d\u00e0i h\u1ea1n h\u1ed7 tr\u1ee3 qu\u1ea3n l\u00fd cho thu\u00ea, chi\u1ebfn l\u01b0\u1ee3c t\u01b0 \u0111\u1ed3ng v\u00e0 gia t\u0103ng gi\u00e1 tr\u1ecb danh m\u1ee5c.",
      },
    ],
    footerCommerce: "Th\u00f4ng tin theo Lu\u1eadt Giao d\u1ecbch Th\u01b0\u01a1ng m\u1ea1i \u0110i\u1ec7n t\u1eed / Th\u00f4ng tin b\u00e1n h\u00e0ng qua b\u01b0u \u0111i\u1ec7n",    processTitle: "Quy tr\u00ecnh mua nh\u00e0",
    processSteps: [
      { title: "T\u01b0 v\u1ea5n ban \u0111\u1ea7u", description: "Cho ch\u00fang t\u00f4i bi\u1ebft nhu c\u1ea7u, ng\u00e2n s\u00e1ch v\u00e0 m\u1ee5c ti\u00eau \u0111\u1ea7u t\u01b0. Chuy\u00ean vi\u00ean s\u1ebd \u0111\u1ec1 xu\u1ea5t ph\u01b0\u01a1ng \u00e1n ph\u00f9 h\u1ee3p." },
      { title: "Gi\u1edbi thi\u1ec7u b\u1ea5t \u0111\u1ed9ng s\u1ea3n", description: "Ch\u00fang t\u00f4i gi\u1edbi thi\u1ec7u c\u00e1c b\u1ea5t \u0111\u1ed9ng s\u1ea3n ph\u00f9 h\u1ee3p t\u1eeb c\u01a1 s\u1edf d\u1eef li\u1ec7u phong ph\u00fa." },
      { title: "Xem nh\u00e0 / T\u01b0 v\u1ea5n online", description: "Tham quan tr\u1ef1c ti\u1ebfp ho\u1eb7c xem online \u0111\u1ec3 ki\u1ec3m tra b\u1ea5t \u0111\u1ed9ng s\u1ea3n v\u00e0 khu v\u1ef1c xung quanh." },
      { title: "\u0110i\u1ec1n form \u0111\u0103ng k\u00fd mua", description: "Sau khi quy\u1ebft \u0111\u1ecbnh, \u0111i\u1ec1n form \u0111\u0103ng k\u00fd. Ch\u00fang t\u00f4i th\u01b0\u01a1ng l\u01b0\u1ee3ng \u0111i\u1ec1u ki\u1ec7n thanh to\u00e1n v\u00e0 ng\u00e0y b\u00e0n giao." },
      { title: "K\u00fd h\u1ee3p \u0111\u1ed3ng", description: "Sau khi gi\u1ea3i th\u00edch \u0111\u1ea7y \u0111\u1ee7 c\u00e1c \u0111i\u1ec1u kho\u1ea3n, k\u00fd h\u1ee3p \u0111\u1ed3ng mua b\u00e1n v\u00e0 thanh to\u00e1n ti\u1ec1n \u0111\u1eb7t c\u1ecdc." },
      { title: "B\u00e0n giao & Qu\u1ea3n l\u00fd cho thu\u00ea", description: "Sau khi thanh to\u00e1n \u0111\u1ea7y \u0111\u1ee7, b\u00e0n giao nh\u00e0 cho b\u1ea1n. redhomes ti\u1ebfp t\u1ee5c h\u1ed7 tr\u1ee3 qu\u1ea3n l\u00fd cho thu\u00ea d\u00e0i h\u1ea1n." },
    ],
    companyTitle: "Th\u00f4ng tin c\u00f4ng ty",
    companyInfo: {
      name: "redhomes Co., Ltd.",
      founded: "2020",
      capital: "10.000.000 Y\u00ean",
      representative: "Gi\u00e1m \u0111\u1ed1c \u0111i\u1ec1u h\u00e0nh",
      address: "Shibuya, Tokyo, Nh\u1eadt B\u1ea3n",
      businessContent: "Mua b\u00e1n & m\u00f4i gi\u1edbi b\u1ea5t \u0111\u1ed9ng s\u1ea3n, qu\u1ea3n l\u00fd cho thu\u00ea, t\u01b0 v\u1ea5n \u0111\u1ea7u t\u01b0 cho nh\u00e0 \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i",
      ctaLabel: "T\u01b0 v\u1ea5n mi\u1ec5n ph\u00ed",
    },
  },
};
