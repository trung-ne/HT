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
      title: "redhomesについて",
      paragraphs: [
        "redhomesは、海外から日本の不動産市場への参入を希望する世界中の投賄家・定住希望者を支援するために設立されました。",
        "私たちのチームは、日本語・英語・中国語・タイ語に対応する多言語の専門家で構成されており、お客様の言語や文化的背景に対応したサービスを提供します。",
        "物件の探索・購入・賃貸管理・リフォーム工事の手配りまで、ワンストップのサポート体制でお客様のゴールを実現します。",
        "市場の透明性と運用の安定性を最優先に考え、長期的な資産形成に向けてお客様と共に歩みます。",
      ],
      sections: [
            {
                  "heading": "企業概要",
                  "body": "会社名：モラホールディングス株式会社 / 代表取締役：鄭 光男 / 創立：2013年09月 / 宅建免許：東京都知事(3)97131號 / 資本金：3000万円 / 東京本社：〒171-0043 東京都豊島区要町3-37-1 / Tel/Fax：03-6905-8918",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-vanessa-garcia-6325982-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "会社沿革",
                  "body": "2013年9月 東京都文京区に設立。2014年10月 正式に東京地区の不動産会社として登録。2015年12月 日本台湾不動産協会を創立。2018年9月 台東区事務所を購入。2019年5月 資本金を3000万円に増資。2023年7月 豊島区事務所に移転。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-max-vakhtbovych-7060815-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "CEO MESSAGE",
                  "body": "日本の不動産は建設品質優良・完備な住宅管理サービス・賃貸の高収益率・多元化である資金調達ルートという四つの優れた特徴を持っています。当社は自家用・投資目的を問わず、専門的かつ多元なサービスを通じ、お客様一人ずつに最適な物件を見つけ出してあげます。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-roman-pohorecki-230557-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    "v-service": {
      title: "サービス一覧",
      paragraphs: [
        "redhomesは日本不動産投賄に関する幅広いサービスを提供しています。",
        "[不動産仒介] コンドミニアム・マンション・新築一户建て・土地を含む幅広い物件カテゴリに対応。購入・売却・賃貸の全ての局面でサポートします。",
        "[賃貸管理・運用支援] 入居者募集・家賌管理・全国の漏水・修繕対応・確定申告サポートに至るまで、穏やかな運用を代行します。",
        "[リフォーム・リノベーション] 内装工事・設備交換・リモデルなど、信頼できる工務店ネットワークを活用して物件の価値を高めます。",
        "[定住・移住支援] 日本への入国手続きのサポートから、住む場所・学校・生活環境の情報提供まで、居住の立ち上げを復層支援します。",
        "[法人設立・ビザサポート] 日本での会社設立・法人登記手続きや、投賄ビザ申請に伴う書類準備などをサポートします。",
      ],
      sections: [
            {
                  "heading": "不動産投資コンサルタント",
                  "body": "MOLAは長年から日本に深耕しており、「現地での生活と運営」の観点から、クライアントに一人ずつオーダーメイドの最も専門的で実用的かつ多面的な不動産投資アドバイスを提供致します。高輪ゲートウェイや中央新幹線計画など、東京の都市開発が進む中、最適な投資タイミングをご提案します。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "賃貸賃仲介事業",
                  "body": "東京都内の人口が日本一で、23区だけでも900万人を超えています。外国人留学生・若いサラリーマンの賃貸需要は常に高く、日本の不動産価格は台北より手頃な一方、賃貸収入は比較的高い。長期賃貸の平均利回率は約5％です。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-mart-production-7415041-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "不動産管理事業",
                  "body": "専門の住宅管理会社「WealthPark株式会社」「アズ・スタット株式会社」と連携し、クライアントに低リスクで安心投資でき、高利回率な家賃収入を得られるようにします。固定資本税の計算・納付サポートから民宿経営管理まで、物件価値を最大化します。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-tomas-anunziata-3876407-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    blog: {
      title: "ブログ",
      paragraphs: [
        "redhomesのブログでは、日本不動産市場の最新動向、法律・税務の制度変更、お得な物件情報、お客様の成功事例などを定期的に発信しています。",
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
        "特定商取引法および進情表示等に関する法律に基づく、当社サービスにおける各種表示事項を掉載しています。",
        "不明な点がございましたら、お問い合わせページよりお気軽にご連絡ください。",
      ],
    },
  },
  en: {
    "v-about": {
      title: "About redhomes",
      paragraphs: [
        "redhomes was founded to help global investors and residents access Japan's real estate market with clarity and confidence.",
        "Our team includes multilingual professionals fluent in Japanese, English, Chinese, and Thai, ensuring that clients from all backgrounds receive culturally informed, expert guidance.",
        "From property discovery through purchase, rental management, and beyond, we provide end-to-end support under one roof.",
        "We are committed to long-term partnerships, placing transparency and your investment outcomes at the center of everything we do.",
      ],
      sections: [
            {
                  "heading": "Company Profile",
                  "body": "MOLA Holdings Co., Ltd. / CEO: Kuang-Nan Cheng / Founded: September 2013 / Real Estate License: Tokyo Governor (3) No. 97131 / Capital: ¥30,000,000 / Head Office: 3-37-1 Kanamecho, Toshima-ku, Tokyo 171-0043 / Tel/Fax: 03-6905-8918",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-vanessa-garcia-6325982-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "Company History",
                  "body": "Sep 2013: Founded in Bunkyo-ku, Tokyo. Oct 2014: Officially registered as a real estate company. Dec 2015: Co-founded the Japan-Taiwan Real Estate Association. Sep 2018: Purchased Taito-ku office. May 2019: Capital increased to ¥30M. Jul 2023: Relocated to Toshima-ku.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-max-vakhtbovych-7060815-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "CEO Message",
                  "body": "Japanese real estate stands out for four key strengths: superior construction quality, comprehensive property management services, high rental yield, and diverse financing options. Whether you're buying for personal use or long-term investment, we'll find the perfect property tailored to your goals.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-roman-pohorecki-230557-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    "v-service": {
      title: "Our Services",
      paragraphs: [
        "redhomes provides a comprehensive suite of services for Japanese real estate investment.",
        "[Property Brokerage] Condominiums, apartments, houses, and land — covering purchase, sale, and leasing at every stage.",
        "[Rental Management] From tenant recruitment and lease management to maintenance coordination and tax filing support.",
        "[Renovation] Interior upgrades, equipment replacements, and remodeling through our trusted contractor network.",
        "[Relocation Support] We help overseas clients navigate Japanese residency procedures and settle into life in Japan.",
        "[Company Setup & Visa] Business registration in Japan and documentation support for investor visa applications.",
      ],
      sections: [
            {
                  "heading": "Real Estate Investment Consulting",
                  "body": "MOLA has been deeply rooted in Japan for years, providing each client with bespoke, professional, and practical real estate investment advice from a \"living and operating on the ground\" perspective. We help you identify the optimal investment opportunities in a rapidly developing Tokyo metropolitan area.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "Rental Brokerage",
                  "body": "Tokyo's population exceeds 9 million in the 23 wards alone, with sustained high demand from foreign students and young professionals. Japan's real estate prices are more affordable than Taipei while rental yields remain comparatively high — averaging around 5% for long-term rentals.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-mart-production-7415041-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "Property Management",
                  "body": "We partner with leading management firms WealthPark and AS STAT to deliver low-risk, high-yield rental income for our clients. Services cover property tax calculation, tenant feedback management, maintenance coordination, and short-term rental operations to maximize your property's return.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-tomas-anunziata-3876407-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    blog: {
      title: "Blog",
      paragraphs: [
        "The redhomes blog delivers timely insights on Japan's real estate market — market trends, regulatory changes, tax updates, and property highlights.",
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
        "This page provides required disclosures under Japan's Act on Specified Commercial Transactions and related regulations.",
        "If you have any questions about these disclosures, please contact us through the contact page.",
      ],
    },
  },
  zh: {
    "v-about": {
      title: "关于 redhomes",
      paragraphs: [
        "redhomes 成立的初衷是帮助全球投资者和定居希望者，以清晰、安心的方式进入日本不动产市场。",
        "我们的团队由精通日语、英语、中文和泰语的多语言专业人士组成，确保不同背景的客户都能得到文化适应的専业服务。",
        "从物业搜索、购入、租赁管理到后续运营，我们提供一站式全流程支持。",
        "我们致力于建立长期合作关系，将透明度和您的投资成果放在首位。",
      ],
      sections: [
            {
                  "heading": "企业概况",
                  "body": "公司名称：MOLA Holdings株式会社 / 代表取締役：郑光男 / 创立：2013年9月 / 宅建免许：东京都知事(3)97131号 / 注册资本：3000万日元 / 总部：〒171-0043 东京都丰岛区要町3-37-1 / 电话/传真：03-6905-8918",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-vanessa-garcia-6325982-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "公司沿革",
                  "body": "2013年9月于东京文京区成立。2014年10月正式注册为东京地区不动产公司。2015年12月联合创立日本台湾不动产协会。2018年9月购入台东区办公室。2019年5月增资至3000万日元。2023年7月迁入丰岛区新办公室。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-max-vakhtbovych-7060815-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "CEO致辞",
                  "body": "日本不动产具备四大优势：建设品质卓越、完善的物业管理服务、较高的租赁收益率以及多元化的融资渠道。无论是自住还是长期投资，我们将通过专业多元的服务，为每位客户找到最适合的物业。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-roman-pohorecki-230557-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    "v-service": {
      title: "服务项目",
      paragraphs: [
        "redhomes 为日本不动产投资提供全面服务。",
        "[不动产中介] 涵盖公寓、公寓、独栋、土地等多类型物业，支持购买、出售和租赁的全面服务。",
        "[租赁管理] 从招租、入住管理、维修协调到税务申报，我们全程代劳。",
        "[装修改造] 我们为您对接可信赖的施工队伍，提升物业价値。",
        "[定居与搬迁支持] 协助海外客户办理入居手续，并顺利开展日本生活。",
        "[公司注册与签证支持] 提供日本公司注册与投资签证申请的文件准备支持。",
      ],
      sections: [
            {
                  "heading": "不动产投资咨询",
                  "body": "MOLA深耕日本多年，从\"在地生活与运营\"的角度出发，为每位客户量身定制最专业、最实用的不动产投资建议。高輪Gateway车站开通、中央新干线等东京城市开发项目的推进，让投资时机更加明朗。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "租赁中介业务",
                  "body": "东京都23区人口超过900万，外国留学生与年轻上班族的租赁需求持续高涨。日本不动产价格比台北更实惠，而租金收益相对较高，长期租赁平均回报率约为5%。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-mart-production-7415041-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "物业管理业务",
                  "body": "我们与专业物业管理公司WealthPark及AS STAT合作，为客户提供低风险、高回报的租金收入。服务涵盖固定资产税计算与缴纳、租客反馈管理、维修协调及民宿运营管理，最大化物业投资回报。",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-tomas-anunziata-3876407-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    blog: {
      title: "博客",
      paragraphs: [
        "redhomes 博客定期分享日本不动产市场动态、政策变化、税务信息以及精选物业信息。",
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
        "本页根据日本《特定商业交易法》和相关法规，提供我们服务的必要信息公示。",
        "如果您对这些公示有任何疑问，请通过联系页面与我们联系。",
      ],
    },
  },
  vi: {
    "v-about": {
      title: "Về redhomes",
      paragraphs: [
        "redhomes được thành lập nhằm hỗ trợ các nhà đầu tư và người muốn định cư trên toàn thế giới tiếp cận thị trường bất động sản Nhật Bản một cách rõ ràng và tự tin.",
        "Đội ngũ của chúng tôi gồm các chuyên gia đa ngôn ngữ, thành thạo tiếng Nhật, Anh, Trung và Việt.",
        "Từ tìm kiếm, mua bán, quản lý cho thuê đến bảo lãnh lợi nhuận dài hạn, chúng tôi cung cấp dịch vụ toàn diện dưới một mái nhà.",
        "Chúng tôi hướng đến mối quan hệ lâu dài, ưu tiên minh bạch và hiệu quả đầu tư cho bạn.",
      ],
      sections: [
            {
                  "heading": "Thông tin công ty",
                  "body": "Tên công ty: MOLA Holdings Co., Ltd. / Giám đốc điều hành: Trịnh Quang Nam / Thành lập: Tháng 9/2013 / Giấy phép bất động sản: Tokyo (3) No. 97131 / Vốn điều lệ: 30 triệu yên / Trụ sở chính: 3-37-1 Kanamecho, Toshima-ku, Tokyo 171-0043",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-vanessa-garcia-6325982-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "Lịch sử công ty",
                  "body": "Tháng 9/2013: Thành lập tại Bunkyo-ku, Tokyo. Tháng 10/2014: Đăng ký chính thức là công ty bất động sản. Tháng 12/2015: Đồng sáng lập Hiệp hội BĐS Nhật Bản – Đài Loan. Tháng 9/2018: Mua văn phòng Taito-ku. Tháng 5/2019: Tăng vốn lên 30 triệu yên. Tháng 7/2023: Chuyển đến văn phòng Toshima-ku.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-max-vakhtbovych-7060815-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "Thông điệp CEO",
                  "body": "Bất động sản Nhật Bản nổi bật với bốn ưu điểm: chất lượng xây dựng vượt trội, dịch vụ quản lý toàn diện, lợi suất cho thuê cao và đa dạng kênh tài chính. Dù mua để ở hay đầu tư dài hạn, chúng tôi sẽ tìm bất động sản phù hợp nhất cho bạn.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-roman-pohorecki-230557-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    "v-service": {
      title: "Dịch vụ của chúng tôi",
      paragraphs: [
        "redhomes cung cấp dịch vụ toàn diện cho việc đầu tư bất động sản Nhật Bản.",
        "[Môi giới bất động sản] Căn hộ, chưng cư, nhà ở và đất nền — bao gồm mua, bán và cho thuê.",
        "[Địch vụ quản lý cho thuê] Tìm khách thuê, quản lý hợp đồng, sửa chữa và quyết toán thuế.",
        "[Địch vụ cải tạo] Kết nối với các đơn vị thi công uy tín để tăng giá trị bất động sản.",
        "[Địch vụ chuyển nhượng] Hỗ trợ khách hàng nước ngoài đăng ký và định cư tại Nhật Bản.",
        "[Đăng ký công ty và visa] Hỗ trợ thành lập công ty và chuẩn bị hồ sơ visa đầu tư.",
      ],
      sections: [
            {
                  "heading": "Tư vấn đầu tư bất động sản",
                  "body": "MOLA đã gắn bó sâu sắc với Nhật Bản nhiều năm, cung cấp tư vấn đầu tư bất động sản chuyên nghiệp, thực tiễn theo phong cách \"sống và vận hành tại chỗ\" cho từng khách hàng. Sự phát triển hạ tầng Tokyo như ga Takanawa Gateway và tuyến Shinkansen trung tâm mở ra cơ hội đầu tư lý tưởng.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
                  "reverse": false
            },
            {
                  "heading": "Môi giới cho thuê",
                  "body": "Dân số 23 quận Tokyo vượt 9 triệu người, nhu cầu thuê nhà từ du học sinh và nhân viên văn phòng trẻ luôn cao. Giá bất động sản Nhật Bản hợp lý hơn Đài Bắc trong khi thu nhập cho thuê tương đối cao, lợi suất cho thuê dài hạn trung bình khoảng 5%.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-mart-production-7415041-scaled.jpg",
                  "reverse": true
            },
            {
                  "heading": "Quản lý bất động sản",
                  "body": "Chúng tôi hợp tác với WealthPark và AS STAT để cung cấp thu nhập cho thuê rủi ro thấp, lợi suất cao. Dịch vụ bao gồm tính và nộp thuế cố định, quản lý phản hồi từ thuê nhà, điều phối sửa chữa và vận hành nhà nghỉ ngắn hạn nhằm tối đa hóa lợi tức đầu tư.",
                  "image": "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-tomas-anunziata-3876407-1-scaled.jpg",
                  "reverse": false
            }
      ]
    },
    blog: {
      title: "Blog",
      paragraphs: [
        "Blog của redhomes cập nhật xu hướng thị trường, thay đổi pháp luật, thông tin thuế và các thông tin hấp dẫn về bất động sản Nhật Bản.",
        "Dù bạn mới bắt đầu hay là nhà đầu tư dày dạn kinh nghiệm, các bài viết của chúng tôi đều thực tế và đáng tin cậy.",
      ],
    },
    contact: {
      title: "Liên hệ chúng tôi",
      paragraphs: [
        "Nếu bạn có bất kỳ câu hỏi nào về đầu tư bất động sản Nhật Bản, đừng ngần ngại liên hệ chúng tôi.",
        "redhomes hỗ trợ bằng tiếng Nhật, Anh, Trung và Việt. Chúng tôi sẽ phản hồi sớm nhất có thể.",
      ],
    },
    cdmmr: {
      title: "Thông tin giao dịch thương mại",
      paragraphs: [
        "Thông tin công bố theo Luật Giao dịch Thương mại Điện tử Nhật Bản.",
        "Tên công ty: redhomes / Địa chỉ: Tokyo, Nhật Bản / Liên hệ: info@redhomes.jp",
      ],
    },
  },
};