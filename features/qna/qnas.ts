import type { QnAItem } from "./types";

export const allQnAs: QnAItem[] = [
  // ── Japanese ──────────────────────────────────────────────────
  {
    id: "ja-invest-foreign",
    lang: "ja",
    question: "外国人でも日本の不動産を買えますか？",
    answer:
      "はい、可能です。日本には外国人の不動産所有を制限する法律がありません。HTグローバルは海外在住者専用サポートを提供しています。",
    category: "investment",
    displayOrder: 1,
  },
  {
    id: "ja-visa-requirement",
    lang: "ja",
    question: "購入に際してビザは必要ですか？",
    answer:
      "不動産購入にはビザは不要です。ただし、オンライン対応が可能な場合でも、署名や登記手続きの際に来日することが推奨されます。HTグローバルは代理人署名対応も検討できます。",
    category: "legal",
    displayOrder: 2,
  },
  {
    id: "ja-minimum-investment",
    lang: "ja",
    question: "最小投資額はいくらですか？",
    answer:
      "東京のワンルームマンションは通常500万～1500万円。いくつかの格安物件は300万円以下もあります。融資相談も可能です。",
    category: "investment",
    displayOrder: 3,
  },
  {
    id: "ja-renting-process",
    lang: "ja",
    question: "購入後、賃貸に出すまでの流れは？",
    answer:
      "購入登記完了後、賃貸管理会社と契約します。通常、契約から入居希望者募集まで2～4週間。HTグローバルが最適な管理会社を紹介します。",
    category: "process",
    displayOrder: 4,
  },
  {
    id: "ja-yield-guarantee",
    lang: "ja",
    question: "利回りはどの程度保証されていますか？",
    answer:
      "不動産投資に保証はありませんが、当社実績では東京23区内で平均3～4.5%の実利回りを実現しています。詳細は無料相談でお伝えします。",
    category: "general",
    displayOrder: 5,
  },
  {
    id: "ja-tax-payment",
    lang: "ja",
    question: "税金はどのくらい払う必要がありますか？",
    answer:
      "非居住者は賃料に対し20.42%の源泉徴収税が発生します。固定資産税は年1.4%程度。HTグローバルが税理士を紹介し、最適化をサポートします。",
    category: "legal",
    displayOrder: 6,
  },

  // ── English ───────────────────────────────────────────────────
  {
    id: "en-invest-foreign",
    lang: "en",
    question: "Can foreigners buy real estate in Japan?",
    answer:
      "Yes, absolutely. Japan has no laws restricting foreign ownership of property. HTグローバル specializes in supporting overseas investors through the entire process.",
    category: "investment",
    displayOrder: 1,
  },
  {
    id: "en-visa-requirement",
    lang: "en",
    question: "Do I need a visa to purchase property?",
    answer:
      "No visa is required for real estate purchase. However, visiting Japan for contract signing and registration is recommended. HTグローバル can arrange proxy signing in certain cases.",
    category: "legal",
    displayOrder: 2,
  },
  {
    id: "en-minimum-investment",
    lang: "en",
    question: "What is the minimum investment amount?",
    answer:
      "Tokyo one-bedroom condos typically range from ¥5M to ¥15M. Some affordable units start below ¥3M. Financing options are available.",
    category: "investment",
    displayOrder: 3,
  },
  {
    id: "en-renting-process",
    lang: "en",
    question: "What is the process to rent out my property after purchase?",
    answer:
      "After ownership registration, contract with a property management company. Tenant recruitment typically takes 2-4 weeks. HTグローバル connects you with vetted managers.",
    category: "process",
    displayOrder: 4,
  },
  {
    id: "en-yield-reality",
    lang: "en",
    question: "What are realistic yield expectations?",
    answer:
      "While no guarantee exists, HTグローバル' portfolio averaged 3-4.5% actual yield in central Tokyo. Detailed projections are provided during free consultation.",
    category: "general",
    displayOrder: 5,
  },
  {
    id: "en-tax-obligations",
    lang: "en",
    question: "What are my tax obligations?",
    answer:
      "Non-residents face 20.42% withholding tax on rental income. Fixed asset tax is ~1.4% annually. HTグローバル coordinates with tax professionals to optimize your situation.",
    category: "legal",
    displayOrder: 6,
  },

  // ── Chinese ───────────────────────────────────────────────────
  {
    id: "zh-invest-foreign",
    lang: "zh",
    question: "外国人可以在日本购买房产吗？",
    answer:
      "可以。日本没有法律禁止外国人拥有房产。HTグローバル 为海外投资者提供全程支持服务。",
    category: "investment",
    displayOrder: 1,
  },
  {
    id: "zh-visa-requirement",
    lang: "zh",
    question: "购买房产需要签证吗？",
    answer:
      "不需要。购买房产不需要签证。但建议来日本签署合同和办理登记。HTグローバル 可在必要时安排代理签署。",
    category: "legal",
    displayOrder: 2,
  },
  {
    id: "zh-minimum-investment",
    lang: "zh",
    question: "最低投资金额是多少？",
    answer:
      "东京的一居室公寓通常价格在500万～1500万日元之间。部分经济型单位低于300万日元。提供融资选项。",
    category: "investment",
    displayOrder: 3,
  },
  {
    id: "zh-rental-management",
    lang: "zh",
    question: "购买后如何管理租赁?",
    answer:
      "产权登记完成后，与物业管理公司签约。租户招募通常需要2-4周。HTグローバル 推荐信誉良好的管理公司。",
    category: "process",
    displayOrder: 4,
  },
  {
    id: "zh-yield-expectation",
    lang: "zh",
    question: "预期收益率是多少？",
    answer:
      "虽然无法保证，但 HTグローバル 在东京中心地区的平均实际收益率为 3-4.5%。免费咨询时可提供详细预测。",
    category: "general",
    displayOrder: 5,
  },
  {
    id: "zh-tax-info",
    lang: "zh",
    question: "税务责任是什么？",
    answer:
      "非居住者需缴纳租金的 20.42% 预扣税。固定资产税约为年评估值的 1.4%。HTグローバル 协调税务专家优化您的税务情况。",
    category: "legal",
    displayOrder: 6,
  },

  // ── Vietnamese ────────────────────────────────────────────────
  {
    id: "vi-invest-foreign",
    lang: "vi",
    question: "Người nước ngoài có thể mua bất động sản tại Nhật Bản không?",
    answer:
      "Có thể. Nhật Bản không có luật cấm người nước ngoài sở hữu bất động sản. HTグローバル cung cấp hỗ trợ toàn diện cho nhà đầu tư nước ngoài.",
    category: "investment",
    displayOrder: 1,
  },
  {
    id: "vi-visa-requirement",
    lang: "vi",
    question: "Có cần thị thực để mua bất động sản không?",
    answer:
      "Không cần thị thực. Đề nghị ghé thăm Nhật Bản để ký hợp đồng và xử lý đăng ký. HTグローバル có thể sắp xếp ký đại diện nếu cần.",
    category: "legal",
    displayOrder: 2,
  },
  {
    id: "vi-minimum-investment",
    lang: "vi",
    question: "Số tiền đầu tư tối thiểu là bao nhiêu?",
    answer:
      "Căn hộ một phòng ở Tokyo thường có giá từ 5 triệu ~ 15 triệu yen. Một số đơn vị giá rẻ dưới 3 triệu yen. Có hỗ trợ tài chính.",
    category: "investment",
    displayOrder: 3,
  },
  {
    id: "vi-rental-process",
    lang: "vi",
    question: "Sau khi mua, làm sao để cho thuê bất động sản?",
    answer:
      "Sau khi đăng ký quyền sở hữu, hợp đồng với công ty quản lý bất động sản. Tuyển dụng người thuê thường mất 2-4 tuần. HTグローバル giới thiệu công ty quản lý uy tín.",
    category: "process",
    displayOrder: 4,
  },
  {
    id: "vi-yield-realistic",
    lang: "vi",
    question: "Lợi suất thực tế là bao nhiêu?",
    answer:
      "Không có bảo đảm, nhưng HTグローバル đạt mức lợi suất trung bình 3-4,5% ở các quận trung tâm Tokyo. Tư vấn miễn phí sẽ cung cấp dự báo chi tiết.",
    category: "general",
    displayOrder: 5,
  },
  {
    id: "vi-tax-obligation",
    lang: "vi",
    question: "Tôi cần nộp thuế gì?",
    answer:
      "Người không cư trú phải nộp 20,42% thuế suất tại nguồn trên thu nhập cho thuê. Thuế tài sản cố định khoảng 1,4%/năm. HTグローバル phối hợp cố vấn thuế.",
    category: "legal",
    displayOrder: 6,
  },
];

