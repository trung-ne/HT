import type { LocalizedText } from "@/lib/vietnam/i18n";

export const lt = (ja: string, zhCN: string, zhTW: string, vi: string, en: string): LocalizedText => ({
  ja,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  vi,
  en,
});

export const siteText = {
  navigation: [
    { href: "/", label: lt("ホーム", "首页", "首頁", "Trang chủ", "Home") },
    { href: "/about", label: lt("企業情報", "关于我们", "關於我們", "Giới thiệu", "About") },
    { href: "/fields", label: lt("事業領域", "业务领域", "業務領域", "Lĩnh vực", "Fields") },
    { href: "/projects", label: lt("プロジェクト", "项目", "項目", "Dự án", "Projects") },
    { href: "/partners", label: lt("パートナー", "合作伙伴", "合作夥伴", "Đối tác", "Partners") },
    { href: "/csr", label: lt("CSR", "社会责任", "社會責任", "CSR", "CSR") },
    { href: "/awards", label: lt("受賞歴", "奖项", "獎項", "Giải thưởng", "Awards") },
    { href: "/contact", label: lt("お問い合わせ", "联系我们", "聯絡我們", "Liên hệ", "Contact") },
  ],

  labels: {
    consult: lt("無料相談", "免费咨询", "免費諮詢", "Nhận tư vấn", "Consultation"),
    viewProjects: lt("プロジェクトを見る", "查看项目", "查看項目", "Khám phá dự án", "View projects"),
    learnMore: lt("詳しく見る", "了解更多", "了解更多", "Tìm hiểu thêm", "Learn more"),
    location: lt("所在地", "位置", "位置", "Vị trí", "Location"),
    area: lt("面積", "面积", "面積", "Diện tích", "Area"),
    status: lt("ステータス", "状态", "狀態", "Trạng thái", "Status"),
    specs: lt("主要データ", "核心数据", "核心資料", "Thông số", "Key facts"),
  },

  home: {
    heroTitle: lt(
      "Onsen Fuji - 特別な目的地を創造するパイオニア",
      "Onsen Fuji - 开创建造特别目的地的先锋",
      "Onsen Fuji - 開創建造特別目的地的先鋒",
      "Onsen Fuji - Tiên phong kiến tạo những điểm đến đặc biệt",
      "Onsen Fuji - Pioneering distinctive destinations",
    ),
    heroSubtitle: lt(
      "文化の精髄、独自価値、国際基準を融合し、持続可能なウェルネスリゾート投資を創造します。",
      "融合文化精髓、独特价值与国际标准,打造可持续的康养度假投资目的地。",
      "融合文化精髓、獨特價值與國際標準,打造可持續的康養度假投資目的地。",
      "Kết hợp tinh hoa văn hóa, giá trị độc bản và tiêu chuẩn quốc tế để tạo nên các điểm đến nghỉ dưỡng bền vững.",
      "Combining cultural refinement, distinct value and international standards to create sustainable wellness destinations.",
    ),
    eyebrow: lt(
      "ベトナム不動産投資 | ウェルネス | ホテルコンドミニアム",
      "越南房地产投资 | 康养 | 酒店式公寓",
      "越南房地產投資 | 康養 | 飯店式公寓",
      "Đầu tư BĐS Việt Nam | Wellness | Condotel",
      "Vietnam real estate investment | Wellness | Condotel",
    ),
    featured: {
      eyebrow: lt("注目プロジェクト", "重点项目", "重點項目", "Dự án nổi bật", "Featured Projects"),
      title: lt("代表プロジェクト", "代表项目", "代表項目", "Dự án tiêu biểu", "Featured Projects"),
      description: lt(
        "温泉、海岸、産業インフラを横断するOnsen Fujiの主要投資機会。",
        "覆盖温泉康养、滨海度假与产业基础设施的核心投资机会。",
        "覆蓋溫泉康養、濱海度假與產業基礎設施的核心投資機會。",
        "Cơ hội đầu tư trọng điểm từ wellness khoáng nóng, nghỉ dưỡng biển đến hạ tầng công nghiệp.",
        "Flagship investment opportunities across hot spring wellness, beachfront hospitality and industrial infrastructure.",
      ),
    },
    ecosystem: {
      eyebrow: lt("事業エコシステム", "业务生态", "業務生態", "Hệ sinh thái", "Ecosystem"),
      title: lt("顧客体験を中心にした事業領域", "以客户体验为中心的业务版图", "以客戶體驗為中心的業務版圖", "Lĩnh vực chiến lược xoay quanh trải nghiệm khách hàng", "Strategic fields centered on customer experience"),
    },
    awards: {
      eyebrow: lt("受賞", "奖项", "獎項", "Giải thưởng", "Awards"),
      title: lt("国際的な評価", "国际认可", "國際認可", "Ghi nhận quốc tế", "International recognition"),
    },
  },

  stats: [
    { value: "2200+", label: lt("温泉ホテルコンドミニアム", "温泉酒店式公寓", "溫泉飯店式公寓", "căn hộ khách sạn khoáng nóng", "hot spring condotel units") },
    { value: "74.4ha", label: lt("近代的な産業クラスター", "现代工业集群", "現代工業聚落", "cụm công nghiệp hiện đại", "modern industrial cluster") },
    { value: "5-6★", label: lt("国際運営基準", "国际运营标准", "國際營運標準", "tiêu chuẩn vận hành quốc tế", "international operating standards") },
  ],

  about: {
    metadataTitle: lt("企業情報", "关于 Onsen Fuji", "關於 Onsen Fuji", "Giới thiệu Onsen Fuji", "About Onsen Fuji"),
    metadataDescription: lt("Onsen Fujiのビジョン、ミッション、価値観、企業文化と受賞歴。", "Onsen Fuji 的愿景、使命、价值观、企业文化与奖项。", "Onsen Fuji 的願景、使命、價值觀、企業文化與獎項。", "Tầm nhìn, sứ mệnh, giá trị, văn hóa và giải thưởng của Onsen Fuji.", "Onsen Fuji vision, mission, values, culture and awards."),
    hero: {
      eyebrow: lt("Onsen Fuji Group", "Onsen Fuji Group", "Onsen Fuji Group", "Onsen Fuji Group", "Onsen Fuji Group"),
      title: lt("品質・信頼・独自性で築く投資価値", "以品质、信任与独特性构建投资价值", "以品質、信任與獨特性構建投資價值", "Giá trị đầu tư xây dựng từ chất lượng, tin cậy và khác biệt", "Investment value built on quality, trust and distinctiveness"),
      description: lt("国際ブランドと連携し、地域の土地価値と観光ポテンシャルを引き出すデベロッパーです。", "与国际品牌协同,释放本地土地价值与旅游潜力。", "與國際品牌協同,釋放本地土地價值與旅遊潛力。", "Nhà phát triển kết nối thương hiệu quốc tế để khai mở giá trị đất đai và tiềm năng du lịch địa phương.", "A developer that connects international brands with local land potential and tourism value."),
    },
    visionTitle: lt("ビジョン", "愿景", "願景", "Tầm nhìn", "Vision"),
    missionTitle: lt("ミッション", "使命", "使命", "Sứ mệnh", "Mission"),
    vision: lt(
      "国際基準を厳格に遵守し、透明で専門的な商業市場を創出する高品質投資商品の先駆的デベロッパーとなる。",
      "成为严格遵循国际标准、创造专业透明商业市场的高品质投资产品开发商。",
      "成為嚴格遵循國際標準、創造專業透明商業市場的高品質投資產品開發商。",
      "Trở thành nhà phát triển tiên phong các sản phẩm đầu tư chất lượng cao, tuân thủ nghiêm ngặt tiêu chuẩn quốc tế.",
      "To become a pioneering developer of high-quality investment products with international standards and transparent markets.",
    ),
    mission: lt(
      "土地の潜在力を目覚めさせ、国家価値を高め、地域社会、パートナー、居住者へ持続的価値を届ける。",
      "唤醒土地潜力,提升国家地位,并为社区、伙伴和居民创造可持续价值。",
      "喚醒土地潛力,提升國家地位,並為社區、夥伴與居民創造可持續價值。",
      "Đánh thức tiềm năng đất đai, nâng tầm vị thế quốc gia và mang lại giá trị bền vững cho cộng đồng, đối tác và cư dân.",
      "To awaken land potential, elevate national positioning and deliver lasting value to communities and partners.",
    ),
    coreValues: {
      eyebrow: lt("コアバリュー", "核心价值", "核心價值", "Giá trị cốt lõi", "Core Values"),
      title: lt("5つのコアバリュー", "五大核心价值", "五大核心價值", "5 giá trị cốt lõi", "Five core values"),
    },
    culture: {
      eyebrow: lt("企業文化", "企业文化", "企業文化", "Văn hóa", "Culture"),
      title: lt("チーム、規律、挑戦", "团队、纪律与挑战", "團隊、紀律與挑戰", "Tinh thần đội ngũ, kỷ luật và thử thách", "Teamwork, discipline and challenge"),
      bullets: [
        lt("チームスピリット:共通目標に向かう協働。", "团队精神:围绕共同目标协同。", "團隊精神:圍繞共同目標協同。", "Tinh thần đội ngũ: phối hợp vì mục tiêu chung.", "Team spirit: collaboration toward a shared objective."),
        lt("厳格な規律:プロセス準拠と高い実行力。", "严格纪律:流程遵循与高执行力。", "嚴格紀律:流程遵循與高執行力。", "Kỷ luật nghiêm ngặt: tuân thủ quy trình và năng lực thực thi cao.", "Strict discipline: process compliance and high performance."),
        lt("情熱と挑戦:限界を超えて進化し続ける。", "热情与挑战:持续突破边界。", "熱情與挑戰:持續突破邊界。", "Đam mê và thử thách: liên tục vượt giới hạn.", "Passion and challenge: continuous expansion beyond limits."),
      ],
    },
    timeline: {
      eyebrow: lt("タイムライン", "时间轴", "時間軸", "Dòng thời gian", "Timeline"),
      title: lt("受賞歴", "奖项时间线", "獎項時間線", "Lộ trình giải thưởng", "Awards timeline"),
    },
    coreValueItems: [
      {
        title: lt("品格", "品格", "品格", "Phẩm cách", "Dignity"),
        subtitle: lt("国際基準", "国际标准", "國際標準", "Tiêu chuẩn quốc tế", "International standards"),
        body: lt("設計・品質・顧客体験のすべてで国際基準を上回る価値を追求します。", "在设计、质量和客户体验上持续超越国际标准。", "在設計、品質和客戶體驗上持續超越國際標準。", "Theo đuổi giá trị vượt chuẩn quốc tế trong thiết kế, chất lượng và trải nghiệm khách hàng.", "Pursues value beyond international standards in design, quality and customer experience."),
      },
      {
        title: lt("独自性", "独特性", "獨特性", "Độc bản", "Distinctiveness"),
        subtitle: lt("唯一性", "唯一性", "唯一性", "Khác biệt", "Unique identity"),
        body: lt("すべてのプロジェクトに建築・文化・自然の融合による固有のアイデンティティを持たせます。", "每个项目都以建筑、文化与自然融合塑造独特身份。", "每個項目都以建築、文化與自然融合塑造獨特身份。", "Mỗi dự án có bản sắc riêng từ sự giao thoa kiến trúc, văn hóa và thiên nhiên.", "Each project has a unique identity created from architecture, culture and nature."),
      },
      {
        title: lt("信頼", "信任", "信任", "Tin cậy", "Trust"),
        subtitle: lt("透明性", "透明度", "透明度", "Minh bạch", "Transparency"),
        body: lt("誠実なコミットメントと透明な運営で投資家・パートナー・地域社会の信頼を築きます。", "以诚信承诺和透明运营建立投资者、伙伴与社区信任。", "以誠信承諾和透明營運建立投資者、夥伴與社區信任。", "Xây dựng niềm tin với nhà đầu tư, đối tác và cộng đồng bằng cam kết minh bạch, nhất quán.", "Builds investor, partner and community trust through transparent and reliable commitments."),
      },
      {
        title: lt("品質重視", "质量导向", "品質導向", "Chất lượng", "Quality focus"),
        subtitle: lt("精密運営", "精细运营", "精細營運", "Vận hành tinh gọn", "Operational excellence"),
        body: lt("設計仕様から運営プロセスまで細部にこだわり、安定した品質を提供します。", "从设计规范到运营流程关注每个细节,确保稳定品质。", "從設計規範到營運流程關注每個細節,確保穩定品質。", "Chú trọng từng chi tiết từ thiết kế đến vận hành để đảm bảo chất lượng ổn định.", "Delivers consistent quality with attention to detail from design to operation."),
      },
      {
        title: lt("持続可能性", "可持续性", "可持續性", "Bền vững", "Sustainability"),
        subtitle: lt("長期価値", "长期价值", "長期價值", "Giá trị dài hạn", "Long-term value"),
        body: lt("経済・環境・社会のバランスを重視し、持続可能な成長モデルを追求します。", "重视经济、环境与社会平衡,追求可持续增长模型。", "重視經濟、環境與社會平衡,追求可持續增長模型。", "Cân bằng kinh tế, môi trường và xã hội để tạo mô hình phát triển dài hạn.", "Balances economic, environmental and social goals for sustainable growth."),
      },
    ],
  },

  fields: {
    metadataTitle: lt("事業領域", "业务领域", "業務領域", "Lĩnh vực hoạt động", "Strategic Fields"),
    metadataDescription: lt("ウェルネス不動産、産業不動産、LHM運営、スマートテクノロジー。", "康养地产、工业地产、LHM运营与智能科技。", "康養地產、工業地產、LHM營運與智慧科技。", "Wellness, công nghiệp, vận hành LHM và công nghệ thông minh.", "Wellness, industrial real estate, LHM operations and smart technology."),
    heroEyebrow: lt("戦略領域", "战略领域", "戰略領域", "Lĩnh vực chiến lược", "Strategic Fields"),
    title: lt("体験価値でつながる事業エコシステム", "以体验价值连接的业务生态系统", "以體驗價值連接的業務生態系統", "Hệ sinh thái kinh doanh kết nối bằng giá trị trải nghiệm", "An ecosystem connected by experience value"),
    description: lt("温泉ウェルネス、産業インフラ、ホテル運営、スマートテクノロジーを組み合わせ、投資家と利用者の双方に長期価値を提供します。", "整合温泉康养、产业基础设施、酒店运营与智能科技,为投资者与使用者创造长期价值。", "整合溫泉康養、產業基礎設施、飯店營運與智慧科技,為投資者與使用者創造長期價值。", "Kết hợp wellness khoáng nóng, hạ tầng công nghiệp, vận hành khách sạn và công nghệ thông minh để tạo giá trị dài hạn.", "Combining hot spring wellness, industrial infrastructure, hospitality operations and smart technology to create long-term value."),
    metricRobotService: lt("ロボット接客", "机器人服务", "機器人服務", "Dịch vụ robot", "Robot service"),
    items: [
      { title: lt("ウェルネスリゾート不動産", "康养度假地产", "康養度假地產", "BĐS nghỉ dưỡng Wellness", "Wellness resort real estate"), body: lt("温泉、スパ、瞑想、健康食を組み合わせた高級複合施設を開発します。", "开发融合矿物温泉、Spa、冥想与健康饮食的高端综合体。", "開發融合礦物溫泉、Spa、冥想與健康飲食的高端綜合體。", "Phát triển các tổ hợp cao cấp kết hợp khoáng nóng, spa, thiền và thực dưỡng.", "Premium complexes combining hot springs, spa, meditation and wellness nutrition.") },
      { title: lt("産業不動産", "工业地产", "工業地產", "BĐS công nghiệp", "Industrial real estate"), body: lt("74.4haの近代的な産業クラスターを開発し、同期インフラと戦略接続を提供します。", "开发74.4公顷现代工业集群,提供同步基础设施和战略连接。", "開發74.4公頃現代工業聚落,提供同步基礎設施和戰略連接。", "Phát triển CCN hiện đại 74,4ha, hạ tầng đồng bộ, kết nối chiến lược.", "A 74.4ha modern industrial cluster with synchronized infrastructure.") },
      { title: lt("Lynntimes Hospitality Management", "Lynntimes 酒店运营管理", "Lynntimes 飯店營運管理", "Quản lý vận hành LHM", "Lynntimes Hospitality Management"), body: lt("温泉技術システムと5つ星ホテルサービスを専門的に管理します。", "专责管理温泉技术系统与五星级酒店服务,优化资产价值。", "專責管理溫泉技術系統與五星級飯店服務,優化資產價值。", "Quản lý hệ thống kỹ thuật khoáng nóng và dịch vụ khách sạn 5 sao.", "Specialized mineral hot spring systems and 5-star hospitality operations.") },
      { title: lt("スマートテクノロジー", "智能科技", "智慧科技", "Công nghệ thông minh", "Smart technology"), body: lt("F&Bロボット接客とスマート機器の国際協業を推進します。", "应用餐饮服务机器人,并推动智能设备的国际合作。", "應用餐飲服務機器人,並推動智慧設備的國際合作。", "Ứng dụng robot phục vụ F&B và hợp tác quốc tế về thiết bị thông minh.", "F&B service robots and international smart equipment partnerships.") },
    ],
  },

  pages: {
    projects: {
      metadataTitle: lt("プロジェクト", "项目组合", "項目組合", "Danh mục dự án", "Projects Portfolio"),
      metadataDescription: lt("Onsen Fujiのウェルネスリゾート、ホテルコンドミニアム、産業不動産プロジェクト。", "Onsen Fuji 康养度假、酒店式公寓和工业地产项目。", "Onsen Fuji 康養度假、飯店式公寓和工業地產項目。", "Danh mục dự án wellness, condotel và BĐS công nghiệp của Onsen Fuji.", "Onsen Fuji wellness, condotel and industrial real estate projects."),
      eyebrow: lt("ポートフォリオ", "项目组合", "項目組合", "Danh mục", "Portfolio"),
      title: lt("ベトナム不動産投資ポートフォリオ", "越南房地产投资组合", "越南房地產投資組合", "Danh mục đầu tư bất động sản Việt Nam", "Vietnam real estate investment portfolio"),
    },
    partners: {
      metadataTitle: lt("戦略的パートナー", "战略合作伙伴", "戰略合作夥伴", "Đối tác chiến lược", "Strategic Partners"),
      metadataDescription: lt("運営、建設、設計、技術を支えるOnsen Fujiの戦略的パートナー。", "支持 Onsen Fuji 运营、建设、设计与技术的战略伙伴。", "支持 Onsen Fuji 營運、建設、設計與技術的戰略夥伴。", "Các đối tác chiến lược về quản lý, xây dựng, thiết kế và kỹ thuật của Onsen Fuji.", "Strategic partners in management, construction, design and engineering."),
      eyebrow: lt("パートナー", "合作伙伴", "合作夥伴", "Đối tác", "Partners"),
      title: lt("国際基準を支えるパートナー", "支撑国际标准的合作伙伴", "支撐國際標準的合作夥伴", "Đối tác đồng hành cùng tiêu chuẩn quốc tế", "Partners supporting international standards"),
      detailEyebrow: lt("パートナー詳細", "伙伴详情", "夥伴詳情", "Chi tiết đối tác", "Partner Detail"),
      roleTitle: lt("協業の位置づけ", "合作定位", "合作定位", "Vai trò hợp tác", "Partnership role"),
      companyOverview: lt("企業概要", "公司概况", "公司概況", "Tổng quan doanh nghiệp", "Company overview"),
      officialWebsite: lt("公式サイト", "官方网站", "官方網站", "Trang chính thức", "Official website"),
    },
    awards: {
      metadataTitle: lt("受賞歴", "奖项荣誉", "獎項榮譽", "Giải thưởng", "Awards"),
      metadataDescription: lt("Onsen Fujiの国際不動産賞とプロジェクト評価。", "Onsen Fuji 的国际地产奖项与项目认可。", "Onsen Fuji 的國際地產獎項與項目認可。", "Giải thưởng quốc tế và ghi nhận dự án của Onsen Fuji.", "International property awards and project recognition for Onsen Fuji."),
      eyebrow: lt("受賞", "奖项", "獎項", "Giải thưởng", "Awards"),
      title: lt("国際的な評価", "国际奖项与项目认可", "國際獎項與項目認可", "Ghi nhận quốc tế", "International recognition"),
      description: lt("Dot Property Vietnam Awards と Asia Pacific Property Awards による、プロジェクト価値と企業力の評価をまとめています。", "汇总 Dot Property Vietnam Awards 与 Asia Pacific Property Awards 对项目价值和企业实力的认可。", "彙整 Dot Property Vietnam Awards 與 Asia Pacific Property Awards 對項目價值與企業實力的認可。", "Tổng hợp các ghi nhận từ Dot Property Vietnam Awards và Asia Pacific Property Awards về giá trị dự án và năng lực doanh nghiệp.", "A roundup of recognitions from Dot Property Vietnam Awards and Asia Pacific Property Awards for project value and company strength."),
      detailEyebrow: lt("受賞詳細", "奖项详情", "獎項詳情", "Chi tiết giải thưởng", "Award Detail"),
      contextTitle: lt("受賞の意義", "获奖意义", "獲獎意義", "Ý nghĩa giải thưởng", "Recognition context"),
      sourcesTitle: lt("情報ソース", "资料来源", "資料來源", "Nguồn tham chiếu", "Sources"),
      readMore: lt("全文を読む", "阅读全文", "閱讀全文", "Đọc bài viết", "Read full story"),
    },
    csr: {
      metadataTitle: lt("社会貢献活動", "社会责任", "社會責任", "Trách nhiệm xã hội", "Corporate Social Responsibility"),
      metadataDescription: lt("献血、災害救援、医療・教育支援を通じたOnsen Fujiの社会貢献。", "Onsen Fuji 通过献血、救灾、医疗和教育支持回馈社区。", "Onsen Fuji 透過捐血、救災、醫療和教育支援回饋社區。", "Hoạt động CSR của Onsen Fuji qua hiến máu, cứu trợ thiên tai, giáo dục và y tế.", "Onsen Fuji CSR through blood donation, disaster relief, education and healthcare."),
      eyebrow: lt("CSR", "社会责任", "社會責任", "CSR", "CSR"),
      title: lt("地域社会への持続的な貢献", "对社区的持续贡献", "對社區的持續貢獻", "Đóng góp bền vững cho cộng đồng", "Sustained contribution to communities"),
      detailEyebrow: lt("CSR詳細", "CSR 详情", "CSR 詳情", "Chi tiết CSR", "CSR Detail"),
      contextTitle: lt("活動背景", "项目背景", "項目背景", "Bối cảnh chương trình", "Program context"),
      sourcesTitle: lt("情報ソース", "资料来源", "資料來源", "Nguồn tham chiếu", "Sources"),
    },
    contact: {
      metadataTitle: lt("お問い合わせ", "联系我们", "聯絡我們", "Liên hệ", "Contact"),
      metadataDescription: lt("ベトナム不動産投資、資料請求、プロジェクト相談はこちら。", "咨询越南房地产投资、项目资料和合作机会。", "諮詢越南房地產投資、項目資料和合作機會。", "Liên hệ tư vấn đầu tư BĐS Việt Nam và thông tin dự án.", "Contact for Vietnam real estate investment consultation and project materials."),
      eyebrow: lt("連絡先", "联系", "聯絡", "Liên hệ", "Contact"),
      title: lt("資料請求・投資相談", "索取资料与投资咨询", "索取資料與投資諮詢", "Yêu cầu tài liệu và tư vấn đầu tư", "Request materials and investment consultation"),
      mapTitle: lt("地図", "地图", "地圖", "Bản đồ", "Google Maps"),
      phoneDesk: lt("日本・中国・台湾 投資家デスク", "日本/中国大陆/中国台湾 投资咨询", "日本/中國大陸/中國台灣 投資諮詢", "Bộ phận tư vấn nhà đầu tư Nhật / Trung Quốc / Đài Loan", "Japan / China / Taiwan investor desk"),
      openDirections: lt("ルートを開く", "打开路线", "開啟路線", "Mở chỉ đường", "Open directions"),
    },
  },

  projects: {
    eyebrow: lt("プロジェクト詳細", "项目详情", "項目詳情", "Chi tiết dự án", "Project Detail"),
    detailEyebrow: lt("プロジェクト詳細", "项目详情", "項目詳情", "Chi tiết dự án", "Project Detail"),
    overviewEyebrow: lt("概要", "概述", "概述", "Giới thiệu", "Overview"),
    overviewTitle: lt("プロジェクト概要", "项目总览", "項目總覽", "Tổng quan dự án", "Project overview"),
    locationEyebrow: lt("所在地", "位置", "位置", "Vị trí", "Location"),
    locationTitle: lt("アクセスと立地", "位置与交通", "位置與交通", "Vị trí & kết nối", "Location & connectivity"),
    amenitiesEyebrow: lt("アメニティ", "配套设施", "配套設施", "Tiện ích", "Amenities"),
    amenitiesTitle: lt("施設・設備", "设施与配套", "設施與配套", "Tiện ích dự án", "Project amenities"),
    documentsEyebrow: lt("資料", "文档", "文件", "Tài liệu", "Documents"),
    documentsTitle: lt("プロジェクト資料", "项目资料", "項目資料", "Tài liệu dự án", "Project documents"),
    newsEyebrow: lt("ニュース", "项目动态", "項目動態", "Tin tức", "News"),
    newsTitle: lt("プロジェクトニュース", "最新动态", "最新動態", "Tin dự án", "Project updates"),
    highlightsEyebrow: lt("ハイライト", "亮点", "亮點", "Điểm nổi bật", "Highlights"),
    highlightsTitle: lt("投資価値と独自性", "投资价值与独特性", "投資價值與獨特性", "Giá trị đầu tư và tính độc bản", "Investment value and distinctiveness"),
    consultEyebrow: lt("相談", "咨询", "諮詢", "Tư vấn", "Consultation"),
    consultTitle: lt("資料請求・相談", "索取资料与咨询", "索取資料與諮詢", "Yêu cầu tài liệu và tư vấn", "Request consultation"),
    galleryEyebrow: lt("ギャラリー", "图集", "圖集", "Thư viện ảnh", "Gallery"),
    galleryTitle: lt("ビジュアル資料", "视觉资料", "視覺資料", "Tư liệu hình ảnh", "Visual materials"),
    scale: lt("規模", "规模", "規模", "Quy mô", "Scale"),
    sourcePages: lt("参照ページ", "来源页码", "來源頁碼", "Trang nguồn", "PDF source pages"),
  },

  form: {
    name: lt("お名前", "姓名", "姓名", "Họ và tên", "Name"),
    phone: lt("電話番号", "电话", "電話", "Số điện thoại", "Phone"),
    email: lt("メール", "邮箱", "電子郵件", "Email", "Email"),
    country: lt("国・地域", "国家/地区", "國家/地區", "Quốc gia / khu vực", "Country / Region"),
    preferredLanguage: lt("希望言語", "首选语言", "首選語言", "Ngôn ngữ ưu tiên", "Preferred language"),
    interestedProject: lt("関心プロジェクト", "感兴趣项目", "感興趣項目", "Dự án quan tâm", "Interested project"),
    demandType: lt("相談タイプ", "需求类型", "需求類型", "Loại nhu cầu", "Demand type"),
    message: lt("ご相談内容", "留言内容", "留言內容", "Nội dung trao đổi", "Message"),
    submit: lt("送信", "提交", "提交", "Gửi", "Submit"),
    sending: lt("送信中...", "发送中...", "發送中...", "Đang gửi...", "Sending..."),
    sent: lt("受け付けました。担当者よりご連絡します。", "我们已收到您的请求,将尽快联系您。", "我們已收到您的請求,將盡快聯繫您。", "Đã nhận thông tin. Chúng tôi sẽ liên hệ sớm.", "Request received. Our team will contact you shortly."),
    error: lt("入力内容をご確認のうえ、再度お試しください。", "请检查信息后重试。", "請檢查資訊後重試。", "Vui lòng kiểm tra lại thông tin và thử lại.", "Please check your information and try again."),
    demand: {
      investment: lt("投資", "投资", "投資", "Đầu tư", "Investment"),
      "apartment-purchase": lt("住戸購入", "公寓购买", "公寓購買", "Mua căn hộ", "Apartment purchase"),
      "industrial-land": lt("産業用地", "工业土地", "工業土地", "Đất công nghiệp", "Industrial land"),
      partnership: lt("提携", "合作", "合作", "Hợp tác", "Partnership"),
      other: lt("その他", "其他", "其他", "Khác", "Other"),
    },
    languageOptions: {
      ja: lt("日本語", "日语", "日語", "Tiếng Nhật", "Japanese"),
      "zh-CN": lt("中国語(簡体)", "简体中文", "中文(簡體)", "Tiếng Trung giản thể", "Chinese (Simplified)"),
      "zh-TW": lt("中国語(繁体)", "繁体中文", "中文(繁體)", "Tiếng Trung phồn thể", "Chinese (Traditional)"),
      vi: lt("ベトナム語", "越南语", "越南語", "Tiếng Việt", "Vietnamese"),
      en: lt("英語", "英语", "英語", "Tiếng Anh", "English"),
    },
  },
} as const;

export const navigation = siteText.navigation;
export const labels = siteText.labels;
export const homeContent = {
  heroTitle: siteText.home.heroTitle,
  heroSubtitle: siteText.home.heroSubtitle,
  eyebrow: siteText.home.eyebrow,
};
export const stats = siteText.stats;
export const aboutContent = {
  vision: siteText.about.vision,
  mission: siteText.about.mission,
};
export const coreValues = siteText.about.coreValueItems;
export const fields = siteText.fields.items;
export const uiCopy = {
  home: {
    featured: siteText.home.featured,
    ecosystem: siteText.home.ecosystem,
    awards: siteText.home.awards,
  },
  about: siteText.about,
  fields: siteText.fields,
  projects: {
    metadataTitle: siteText.pages.projects.metadataTitle,
    metadataDescription: siteText.pages.projects.metadataDescription,
    list: {
      eyebrow: siteText.pages.projects.eyebrow,
      title: siteText.pages.projects.title,
    },
    categoryLabel: {
      all: lt("すべて", "全部", "全部", "Tất cả", "All"),
      resort: lt("リゾート", "度假", "度假", "Nghỉ dưỡng", "Resort"),
      industrial: lt("工業", "工业", "工業", "Công nghiệp", "Industrial"),
      commercial: lt("商業", "商业", "商業", "Thương mại", "Commercial"),
      "city-hotel": lt("シティホテル", "城市酒店", "城市飯店", "Khách sạn đô thị", "City hotel"),
    },
    detail: siteText.projects,
  },
  partners: {
    metadataTitle: siteText.pages.partners.metadataTitle,
    metadataDescription: siteText.pages.partners.metadataDescription,
    list: {
      eyebrow: siteText.pages.partners.eyebrow,
      title: siteText.pages.partners.title,
    },
    detail: {
      eyebrow: siteText.pages.partners.detailEyebrow,
      roleTitle: siteText.pages.partners.roleTitle,
      companyOverview: siteText.pages.partners.companyOverview,
      officialWebsite: siteText.pages.partners.officialWebsite,
    },
  },
  awards: {
    metadataTitle: siteText.pages.awards.metadataTitle,
    metadataDescription: siteText.pages.awards.metadataDescription,
    description: siteText.pages.awards.description,
    list: {
      eyebrow: siteText.pages.awards.eyebrow,
      title: siteText.pages.awards.title,
      readMore: siteText.pages.awards.readMore,
    },
    detail: {
      eyebrow: siteText.pages.awards.detailEyebrow,
      contextTitle: siteText.pages.awards.contextTitle,
      sourcesTitle: siteText.pages.awards.sourcesTitle,
    },
  },
  csr: {
    metadataTitle: siteText.pages.csr.metadataTitle,
    metadataDescription: siteText.pages.csr.metadataDescription,
    list: {
      eyebrow: siteText.pages.csr.eyebrow,
      title: siteText.pages.csr.title,
    },
    detail: {
      eyebrow: siteText.pages.csr.detailEyebrow,
      contextTitle: siteText.pages.csr.contextTitle,
      sourcesTitle: siteText.pages.csr.sourcesTitle,
    },
  },
  contact: {
    metadataTitle: siteText.pages.contact.metadataTitle,
    metadataDescription: siteText.pages.contact.metadataDescription,
    headingEyebrow: siteText.pages.contact.eyebrow,
    headingTitle: siteText.pages.contact.title,
    mapTitle: siteText.pages.contact.mapTitle,
    phoneDesk: siteText.pages.contact.phoneDesk,
    openDirections: siteText.pages.contact.openDirections,
  },
  form: siteText.form,
};

export const partnerGroups = {
  management: lt("運営管理", "运营管理", "營運管理", "Quản lý vận hành", "Management"),
  construction: lt("建設", "建设", "建設", "Xây dựng", "Construction"),
  engineering: lt("設計・技術", "设计与技术", "設計與技術", "Thiết kế / kỹ thuật", "Design / engineering"),
} as const;

