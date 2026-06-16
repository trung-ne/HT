import type { LanguageCode } from "@/lib/i18n";

export type SplitPageKey = "v-about" | "v-service" | "blog" | "contact" | "cdmmr";

export type SplitPageSection = {
  heading: string;
  body: string;
  image?: string;
  reverse?: boolean;
};

type SplitPageContent = {
  title: string;
  heroImage?: string;
  paragraphs: string[];
  sections?: SplitPageSection[];
};

export const splitPageContent: Record<LanguageCode, Record<SplitPageKey, SplitPageContent>> = {
  ja: {
    "v-about": {
      title: "HTグローバルについて",
      paragraphs: [
        "株式会社HTグローバルは、海外から日本の不動産市場への参入を希望する世界中の投資家・定住希望者を支援するために設立されました。",
        "私たちのチームは、日本語・英語・中国語・タイ語に対応する多言語の専門家で構成されており、お客様の言語や文化的背景に対応したサービスをご提供いたします。",
        "物件の探索・購入・賃貸管理・リフォーム工事の手配まで、ワンストップのサポート体制でお客様のゴールを実現いたします。",
        "市場の透明性と運用の安定性を最優先に考え、長期的な資産形成に向けてお客様と共に歩んでまいります。",
      ],
      sections: [
            {
                  "heading": "企業概要",
                  "body": "会社名：株式会社HTグローバル / 宅建免許：東京都知事（１）第114049号 / 資本金：3,000万円 / 東京本社：〒132-0035 東京都江戸川区平井5-38-3 サンヴェールボニー301号 / TEL/FAX：03-6657-2050",
                  "image": "/assets/red/pexels-vanessa-garcia-6325982-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "代表取締役メッセージ",
                  "body": "日本の不動産は建設品質の高さ・完備な住宅管理サービス・安定した賃貸収益率・多様な資金調達ルートという優れた特徴を持っております。当社は自家用・投資目的を問わず、専門的かつ多元的なサービスを通じ、お客様一人ひとりに最適な不動産をご提案いたします。",
                  "image": "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "加盟団体",
                  "body": "公益社団法人 全国宅地建物取引業協会",
                  "image": "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    "v-service": {
      title: "サービス一覧",
      paragraphs: [
        "株式会社HTグローバルは日本不動産投資に関する幅広いサービスを提供しております。",
        "[不動産仒介] コンドミニアム・マンション・新築一户建て・土地を含む幅広い物件カテゴリに対応。購入・売却・賃貸の全ての局面でサポートします。",
        "[賃貸管理・運用支援] 入居者募集・家賌管理・全国の漏水・修繕対応・確定申告サポートに至るまで、穏やかな運用を代行します。",
        "[リフォーム・リノベーション] 内装工事・設備交換・リモデルなど、信頼できる工務店ネットワークを活用して物件の価値を高めます。",
        "[定住・移住支援] 日本への入国手続きのサポートから、住む場所・学校・生活環境の情報提供まで、居住の立ち上げを復層支援します。",
        "[法人設立・ビザサポート] 日本での会社設立・法人登記手続きや、投賄ビザ申請に伴う書類準備などをサポートします。",
      ],
      sections: [
            {
                  "heading": "不動産投資コンサルティング",
                  "body": "当社は長年にわたり日本不動産市場に精通しており、「現地での生活と運営」の観点から、お客様一人ひとりにオーダーメイドの専門的かつ多面的な不動産投資アドバイスをご提供いたします。東京の都市開発が進む中、最適な投資タイミングをご提案いたします。",
                  "image": "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "賃貸賃仲介事業",
                  "body": "東京都内の人口が日本一で、23区だけでも900万人を超えています。外国人留学生・若いサラリーマンの賃貸需要は常に高く、日本の不動産価格は台北より手頃な一方、賃貸収入は比較的高い。長期賃貸の平均利回率は約5％です。",
                  "image": "/assets/red/pexels-mart-production-7415041-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "不動産管理事業",
                  "body": "専門の住宅管理会社「WealthPark株式会社」「アズ・スタット株式会社」と連携し、クライアントに低リスクで安心投資でき、高利回率な家賃収入を得られるようにします。固定資本税の計算・納付サポートから民宿経営管理まで、物件価値を最大化します。",
                  "image": "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    blog: {
      title: "ブログ",
      paragraphs: [
        "当社のブログでは、日本不動産市場の最新動向、法律・税務の制度変更、お得な物件情報、お客様の成功事例などを定期的に発信しております。",
        "投賄を初めて検討する方から、すでに複数物件を所有する方まで、実務に役立つ情報を分かりやすくお届けします。",
      ],
    },
    contact: {
      title: "お問い合わせ",
      paragraphs: [
        "物件に関するご相談、投賄プランのお説明、パートナーシップに関するオウンラインなど、お気軽にお問い合わせください。",
        "内容をご確認の上、指定の連絡先までおれん絡ください。通常、ビジネス日〃3日以内に返信いたします。",
      ],
    },
    cdmmr: {
      title: "特定商取引法に基づく表記",
      paragraphs: [
        "株式会社HTグローバル",
        "所在地：〒132-0035 東京都江戸川区平井5-38-3 サンヴェールボニー301号",
        "宅建免許：東京都知事（１）第114049号",
        "資本金：3,000万円",
        "代表取締役：代表取締役",
        "TEL/FAX：03-6657-2050",
        "業務内容：不動産売買・仲介、賃貸管理、海外投資家向けコンサルティング",
        "加盟団体：公益社団法人 全国宅地建物取引業協会",
        "本ページは、特定商取引法および関連法令に基づき必要な表示事項を掲載しています。",
      ],
    },
  },
  en: {
    "v-about": {
      title: "About HT Global Holdings",
      paragraphs: [
        "HT Global Holdings Co., Ltd. was founded to help global investors and residents access Japan's real estate market with clarity and confidence.",
        "Our team includes multilingual professionals fluent in Japanese, English, Chinese, and Thai, ensuring that clients from all backgrounds receive culturally informed, expert guidance.",
        "From property discovery through purchase, rental management, and beyond, we provide end-to-end support under one roof.",
        "We are committed to long-term partnerships, placing transparency and your investment outcomes at the center of everything we do.",
      ],
      sections: [
            {
                  "heading": "Company Profile",
                  "body": "HT Global Holdings Co., Ltd. (株式会社HTグローバル) / Real Estate License: Tokyo Governor (1) No. 114049 / Capital: ¥30,000,000 / Head Office: 5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301 / TEL/FAX: 03-6657-2050",
                  "image": "/assets/red/pexels-vanessa-garcia-6325982-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "Company History",
                  "body": "HT Global Holdings Co., Ltd. is a licensed real estate firm based in Edogawa-ku, Tokyo. We specialize in connecting global investors with Japan's real estate market through multilingual, full-service support.",
                  "image": "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "CEO Message",
                  "body": "Japanese real estate stands out for four key strengths: superior construction quality, comprehensive property management services, high rental yield, and diverse financing options. Whether you're buying for personal use or long-term investment, HT Global Holdings will find the perfect property tailored to your goals.",
                  "image": "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    "v-service": {
      title: "Our Services",
      paragraphs: [
        "HTグローバル provides a comprehensive suite of services for Japanese real estate investment.",
        "[Property Brokerage] Condominiums, apartments, houses, and land — covering purchase, sale, and leasing at every stage.",
        "[Rental Management] From tenant recruitment and lease management to maintenance coordination and tax filing support.",
        "[Renovation] Interior upgrades, equipment replacements, and remodeling through our trusted contractor network.",
        "[Relocation Support] We help overseas clients navigate Japanese residency procedures and settle into life in Japan.",
        "[Company Setup & Visa] Business registration in Japan and documentation support for investor visa applications.",
      ],
      sections: [
            {
                  "heading": "Real Estate Investment Consulting",
                  "body": "HT Global Holdings has been deeply rooted in Japan's real estate market, providing each client with bespoke, professional, and practical investment advice from an on-the-ground perspective. We help you identify optimal investment opportunities in a rapidly developing Tokyo metropolitan area.",
                  "image": "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "Rental Brokerage",
                  "body": "Tokyo's population exceeds 9 million in the 23 wards alone, with sustained high demand from foreign students and young professionals. Japan's real estate prices are more affordable than Taipei while rental yields remain comparatively high — averaging around 5% for long-term rentals.",
                  "image": "/assets/red/pexels-mart-production-7415041-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "Property Management",
                  "body": "We partner with leading management firms WealthPark and AS STAT to deliver low-risk, high-yield rental income for our clients. Services cover property tax calculation, tenant feedback management, maintenance coordination, and short-term rental operations to maximize your property's return.",
                  "image": "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    blog: {
      title: "Blog",
      paragraphs: [
        "The HT Global Holdings blog delivers timely insights on Japan's real estate market — market trends, regulatory changes, tax updates, and property highlights.",
        "Whether you're exploring your first investment or managing a growing portfolio, our articles give you actionable, trustworthy information.",
      ],
    },
    contact: {
      title: "Contact Us",
      paragraphs: [
        "Have a question about a property, need investment advice, or want to explore a partnership? We're here to help.",
        "Reach out through the contact form or the details listed below. We typically respond within 3 business days.",
      ],
    },
    cdmmr: {
      title: "Specified Commercial Transactions",
      paragraphs: [
        "Company Name: HT Global Holdings Co., Ltd. (株式会社HTグローバル)",
        "Address: 5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301",
        "Real Estate License: Tokyo Governor (1) No. 114049",
        "Capital: ¥30,000,000",
        "Representative: CEO",
        "TEL/FAX: 03-6657-2050",
        "Business: Real estate sales & brokerage, rental management, investment consulting for overseas investors",
        "Membership: All Japan Real Estate Association",
        "This page discloses the information required under Japan's Act on Specified Commercial Transactions and related regulations.",
        "For any questions about these disclosures, please contact us through the contact page.",
      ],
    },
  },
  zh: {
    "v-about": {
      title: "关于 HTグローバル",
      paragraphs: [
        "株式会社HTグローバル的成立初衷是帮助全球投资者和定居希望者，以清晰、安心的方式进入日本不动产市场。",
        "我们的团队由精通日语、英语、中文和泰语的多语言专业人士组成，确保不同背景的客户都能得到文化适应的専业服务。",
        "从物业搜索、购入、租赁管理到后续运营，我们提供一站式全流程支持。",
        "我们致力于建立长期合作关系，将透明度和您的投资成果放在首位。",
      ],
      sections: [
            {
                  "heading": "企业概况",
                  "body": "公司名称：株式会社HTグローバル（HT Global Holdings Co., Ltd.）/ 宅建许可证：东京都知事（１）第114049号 / 注册资本：3000万日元 / 总部：〒132-0035 东京都江户川区平井5-38-3 サンヴェールボニー301号 / 电话/传真：03-6657-2050",
                  "image": "/assets/red/pexels-vanessa-garcia-6325982-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "公司沿革",
                  "body": "株式会社HTグローバル是一家在东京江户川区设立的持牌不动产公司。我们专注于通过多语言全方位服务，将全球投资者与日本不动产市场连接起来。",
                  "image": "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "CEO致辞",
                  "body": "日本不动产具备四大优势：建设品质卓越、完善的物业管理服务、较高的租赁收益率以及多元化的融资渠道。无论是自住还是长期投资，我们将通过专业多元的服务，为每位客户找到最适合的物业。",
                  "image": "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    "v-service": {
      title: "服务项目",
      paragraphs: [
        "株式会社HTグローバル为日本不动产投资提供全面服务。",
        "[不动产中介] 涵盖公寓、公寓、独栋、土地等多类型物业，支持购买、出售和租赁的全面服务。",
        "[租赁管理] 从招租、入住管理、维修协调到税务申报，我们全程代劳。",
        "[装修改造] 我们为您对接可信赖的施工队伍，提升物业价値。",
        "[定居与搬迁支持] 协助海外客户办理入居手续，并顺利开展日本生活。",
        "[公司注册与签证支持] 提供日本公司注册与投资签证申请的文件准备支持。",
      ],
      sections: [
            {
                  "heading": "不动产投资咨询",
                  "body": "株式会社HTグローバル深耕日本不动产市场，从专业角度出发，为每位客户量身定制最专业、最实用的不动产投资建议。东京城市开发项目持续推进，让投资时机更加明朗。",
                  "image": "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "租赁中介业务",
                  "body": "东京都23区人口超过900万，外国留学生与年轻上班族的租赁需求持续高涨。日本不动产价格比台北更实惠，而租金收益相对较高，长期租赁平均回报率约为5%。",
                  "image": "/assets/red/pexels-mart-production-7415041-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "物业管理业务",
                  "body": "我们与专业物业管理公司WealthPark及AS STAT合作，为客户提供低风险、高回报的租金收入。服务涵盖固定资产税计算与缴纳、租客反馈管理、维修协调及民宿运营管理，最大化物业投资回报。",
                  "image": "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    blog: {
      title: "博客",
      paragraphs: [
        "HTグローバル 博客定期分享日本不动产市场动态、政策变化、税务信息以及精选物业信息。",
        "无论您是初次探索投资还是管理多个资产的老手，我们的文章旨在提供可操作性强的可靠信息。",
      ],
    },
    contact: {
      title: "联系我们",
      paragraphs: [
        "如果您有关于物业的问题、需要投资建议或者希望探讨合作机会，欢迎随时与我们联系。",
        "请通过联系表或以下列出的联系方式与我们取得联系。通常在3个工作日内回复。",
      ],
    },
    cdmmr: {
      title: "特定商业交易法标示",
      paragraphs: [
        "公司名称：株式会社HTグローバル（HT Global Holdings Co., Ltd.）",
        "总部地址：〒132-0035 东京都江户川区平井5-38-3 サンヴェールボニー301号",
        "宅建许可证：东京都知事（１）第114049号",
        "注册资本：3000万日元",
        "代表人：董事长",
        "电话/传真：03-6657-2050",
        "业务内容：不动产买卖与中介、租赁管理、海外投资者房地产咨询",
        "会员团体：公益社团法人 全国宅地建物取引业协会",
        "本页根据日本《特定商业交易法》及相关法规，公开必要的表示事项。",
        "如对本公示内容有任何疑问，请通过联系页面与我们联系。",
      ],
    },
  },
  vi: {
    "v-about": {
      title: "Về HT Global",
      paragraphs: [
        "HT Global Holdings Co., Ltd. được thành lập nhằm hỗ trợ các nhà đầu tư và người muốn định cư trên toàn thế giới tiếp cận thị trường bất động sản Nhật Bản một cách rõ ràng và tự tin.",
        "Đội ngũ của chúng tôi gồm các chuyên gia đa ngôn ngữ, thành thạo tiếng Nhật, Anh, Trung và Việt.",
        "Từ tìm kiếm, mua bán, quản lý cho thuê đến bảo lãnh lợi nhuận dài hạn, chúng tôi cung cấp dịch vụ toàn diện dưới một mái nhà.",
        "Chúng tôi hướng đến mối quan hệ lâu dài, ưu tiên minh bạch và hiệu quả đầu tư cho bạn.",
      ],
      sections: [
            {
                  "heading": "Thông tin công ty",
                  "body": "Tên công ty: HT Global Holdings Co., Ltd. (株式会社HTグローバル) / Giấy phép BĐS: Tokyo Governor (1) No. 114049 / Vốn điều lệ: 30 triệu yên / Trụ sở chính: 5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301 / ĐT/Fax: 03-6657-2050",
                  "image": "/assets/red/pexels-vanessa-garcia-6325982-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "Lịch sử công ty",
                  "body": "HT Global Holdings Co., Ltd. là công ty bất động sản có giấy phép hoạt động tại Edogawa-ku, Tokyo. Chúng tôi chuyên kết nối nhà đầu tư toàn cầu với thị trường bất động sản Nhật Bản thông qua dịch vụ đa ngôn ngữ, toàn diện.",
                  "image": "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "Thông điệp CEO",
                  "body": "Bất động sản Nhật Bản nổi bật với bốn ưu điểm: chất lượng xây dựng vượt trội, dịch vụ quản lý toàn diện, lợi suất cho thuê cao và đa dạng kênh tài chính. Dù mua để ở hay đầu tư dài hạn, chúng tôi sẽ tìm bất động sản phù hợp nhất cho bạn.",
                  "image": "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    "v-service": {
      title: "Dịch vụ của chúng tôi",
      paragraphs: [
        "HT Global Holdings cung cấp dịch vụ toàn diện cho việc đầu tư bất động sản Nhật Bản.",
        "[Môi giới bất động sản] Căn hộ, chưng cư, nhà ở và đất nền — bao gồm mua, bán và cho thuê.",
        "[Địch vụ quản lý cho thuê] Tìm khách thuê, quản lý hợp đồng, sửa chữa và quyết toán thuế.",
        "[Địch vụ cải tạo] Kết nối với các đơn vị thi công uy tín để tăng giá trị bất động sản.",
        "[Địch vụ chuyển nhượng] Hỗ trợ khách hàng nước ngoài đăng ký và định cư tại Nhật Bản.",
        "[Đăng ký công ty và visa] Hỗ trợ thành lập công ty và chuẩn bị hồ sơ visa đầu tư.",
      ],
      sections: [
            {
                  "heading": "Tư vấn đầu tư bất động sản",
                  "body": "HT Global Holdings đã gắn bó sâu sắc với thị trường bất động sản Nhật Bản, cung cấp tư vấn đầu tư chuyên nghiệp, thực tiễn cho từng khách hàng. Sự phát triển hạ tầng Tokyo mở ra nhiều cơ hội đầu tư lý tưởng mà chúng tôi sẵn sàng hỗ trợ bạn nắm bắt.",
                  "image": "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "Môi giới cho thuê",
                  "body": "Dân số 23 quận Tokyo vượt 9 triệu người, nhu cầu thuê nhà từ du học sinh và nhân viên văn phòng trẻ luôn cao. Giá bất động sản Nhật Bản hợp lý hơn Đài Bắc trong khi thu nhập cho thuê tương đối cao, lợi suất cho thuê dài hạn trung bình khoảng 5%.",
                  "image": "/assets/red/pexels-mart-production-7415041-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "Quản lý bất động sản",
                  "body": "Chúng tôi hợp tác với WealthPark và AS STAT để cung cấp thu nhập cho thuê rủi ro thấp, lợi suất cao. Dịch vụ bao gồm tính và nộp thuế cố định, quản lý phản hồi từ thuê nhà, điều phối sửa chữa và vận hành nhà nghỉ ngắn hạn nhằm tối đa hóa lợi tức đầu tư.",
                  "image": "/assets/red/pexels-tomas-anunziata-3876407-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    blog: {
      title: "Blog",
      paragraphs: [
        "Blog của HT Global Holdings cập nhật xu hướng thị trường, thay đổi pháp luật, thông tin thuế và các thông tin hấp dẫn về bất động sản Nhật Bản.",
        "Dù bạn mới bắt đầu hay là nhà đầu tư dày dạn kinh nghiệm, các bài viết của chúng tôi đều thực tế và đáng tin cậy.",
      ],
    },
    contact: {
      title: "Liên hệ chúng tôi",
      paragraphs: [
        "Nếu bạn có bất kỳ câu hỏi nào về đầu tư bất động sản Nhật Bản, đừng ngần ngại liên hệ chúng tôi.",
        "HT Global Holdings hỗ trợ bằng tiếng Nhật, Anh, Trung và Việt. Chúng tôi sẽ phản hồi sớm nhất có thể.",
      ],
    },
    cdmmr: {
      title: "Thông tin giao dịch thương mại",
      paragraphs: [
        "Tên công ty: HT Global Holdings Co., Ltd. (株式会社HTグローバル)",
        "Địa chỉ: 5-38-3 Hirai, Edogawa-ku, Tokyo 132-0035, Sunveil Bony 301",
        "Giấy phép BĐS: Tokyo Governor (1) No. 114049",
        "Vốn điều lệ: 30 triệu yên",
        "Giám đốc điều hành: Giám đốc điều hành",
        "ĐT/Fax: 03-6657-2050",
        "Nội dung kinh doanh: Mua bán & môi giới bất động sản, quản lý cho thuê, tư vấn đầu tư cho nhà đầu tư nước ngoài",
        "Thành viên: Hiệp hội Bất động sản toàn quốc Nhật Bản",
        "Thông tin này được công bố theo Luật Giao dịch Thương mại Điện tử Nhật Bản và các quy định liên quan.",
        "Nếu bạn có thắc mắc về nội dung công bố, vui lòng liên hệ với chúng tôi qua trang liên hệ.",
      ],
    },
  },
};

