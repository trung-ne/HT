import type { LanguageCode } from "@/lib/i18n";
import type { BlogCategory } from "@/features/blog/types";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ContactFormStrings = {
  heading: string;
  subheading: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  budget: string;
  budgetOptions: readonly string[];
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  required: string;
  nameRequired: string;
  emailRequired: string;
  messageRequired: string;
};

export type UIStrings = {
  // Blog list page
  blogPageTitle: string;
  blogPageSubtitle: string;
  blogFilterAll: string;
  blogNoPosts: string;
  blogReadMore: string;
  blogBackToList: string;
  blogRelatedTitle: string;
  blogCategories: Record<BlogCategory, string>;

  // Contact page
  contactPageTitle: string;
  contactPageSubtitle: string;
  contactForm: ContactFormStrings;

  // Company info table labels
  companyFieldLabels: Record<
    "name" | "founded" | "capital" | "representative" | "address" | "businessContent",
    string
  >;
};

// ─── Strings ──────────────────────────────────────────────────────────────────

export const uiStrings: Record<LanguageCode, UIStrings> = {
  ja: {
    blogPageTitle: "不動産コラム",
    blogPageSubtitle: "日本不動産の最新トレンドと投資判断に役立つ情報を厳選してお届けします。",
    blogFilterAll: "すべて",
    blogNoPosts: "記事がありません",
    blogReadMore: "続きを読む",
    blogBackToList: "← コラム一覧へ",
    blogRelatedTitle: "関連記事",
    blogCategories: {
      market: "市場動向",
      investment: "投資",
      legal: "法律・税務",
      guide: "購入ガイド",
      news: "ニュース",
    },

    contactPageTitle: "無料相談・お問い合わせ",
    contactPageSubtitle: "日本の不動産投資に関するご相談を、専任スタッフが多言語でサポートします。",
    contactForm: {
      heading: "無料相談フォーム",
      subheading: "お気軽にお問い合わせください。専任担当者が迅速にご返答いたします。",
      name: "お名前",
      namePlaceholder: "山田 太郎",
      email: "メールアドレス",
      emailPlaceholder: "example@email.com",
      phone: "電話番号（任意）",
      phonePlaceholder: "+81 90-0000-0000",
      budget: "ご予算（任意）",
      budgetOptions: ["選択してください", "〜3,000万円", "3,000〜5,000万円", "5,000万〜1億円", "1億円以上"],
      message: "ご相談内容",
      messagePlaceholder: "物件の種類、ご希望エリア、投資目的など、何でもお気軽にお書きください。",
      submit: "無料相談を申し込む",
      submitting: "送信中...",
      successTitle: "送信が完了しました",
      successBody: "お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。",
      required: "必須",
      nameRequired: "お名前を入力してください",
      emailRequired: "正しいメールアドレスを入力してください",
      messageRequired: "ご相談内容を入力してください",
    },

    companyFieldLabels: {
      name: "会社名",
      founded: "設立",
      capital: "資本金",
      representative: "代表者",
      address: "所在地",
      businessContent: "事業内容",
    },
  },

  en: {
    blogPageTitle: "Real Estate Blog",
    blogPageSubtitle: "Insights and guidance on Japanese real estate, investment strategy, and market trends.",
    blogFilterAll: "All",
    blogNoPosts: "No posts found",
    blogReadMore: "Read more",
    blogBackToList: "← Back to Blog",
    blogRelatedTitle: "Related Posts",
    blogCategories: {
      market: "Market",
      investment: "Investment",
      legal: "Legal & Tax",
      guide: "Guide",
      news: "News",
    },

    contactPageTitle: "Free Consultation",
    contactPageSubtitle:
      "Our multilingual team is ready to guide you through every step of your Japanese real estate investment.",
    contactForm: {
      heading: "Free Consultation",
      subheading: "Get in touch with us. Our dedicated advisor will respond within 2 business days.",
      name: "Full Name",
      namePlaceholder: "John Smith",
      email: "Email Address",
      emailPlaceholder: "example@email.com",
      phone: "Phone Number (optional)",
      phonePlaceholder: "+1 555-000-0000",
      budget: "Budget (optional)",
      budgetOptions: ["Please select", "Under ¥30M", "¥30M – ¥50M", "¥50M – ¥100M", "Over ¥100M"],
      message: "Message",
      messagePlaceholder:
        "Tell us about the property type, preferred area, investment goals, or any questions you have.",
      submit: "Request Free Consultation",
      submitting: "Sending...",
      successTitle: "Message Sent!",
      successBody: "Thank you for reaching out. We will get back to you within 2 business days.",
      required: "Required",
      nameRequired: "Please enter your name",
      emailRequired: "Please enter a valid email address",
      messageRequired: "Please enter your message",
    },

    companyFieldLabels: {
      name: "Company Name",
      founded: "Founded",
      capital: "Capital",
      representative: "Representative",
      address: "Address",
      businessContent: "Business",
    },
  },

  zh: {
    blogPageTitle: "房产专栏",
    blogPageSubtitle: "为您精选日本不动产趋势、投资策略与实用指南。",
    blogFilterAll: "全部",
    blogNoPosts: "暂无文章",
    blogReadMore: "阅读更多",
    blogBackToList: "← 返回专栏",
    blogRelatedTitle: "相关文章",
    blogCategories: {
      market: "市场",
      investment: "投资",
      legal: "法律税务",
      guide: "购买指南",
      news: "新闻",
    },

    contactPageTitle: "免费咨询",
    contactPageSubtitle: "我们的多语言团队随时为您提供日本房产投资的全程专业支持。",
    contactForm: {
      heading: "免费咨询",
      subheading: "请随时联系我们，专属顾问将在2个工作日内回复您。",
      name: "姓名",
      namePlaceholder: "张 三",
      email: "电子邮箱",
      emailPlaceholder: "example@email.com",
      phone: "电话号码（选填）",
      phonePlaceholder: "+86 138-0000-0000",
      budget: "预算（选填）",
      budgetOptions: ["请选择", "3000万日元以下", "3000万～5000万日元", "5000万～1亿日元", "1亿日元以上"],
      message: "咨询内容",
      messagePlaceholder: "请告诉我们您感兴趣的房产类型、期望区域、投资目的或任何问题。",
      submit: "申请免费咨询",
      submitting: "发送中...",
      successTitle: "发送成功",
      successBody: "感谢您的咨询，我们的顾问将在2个工作日内与您联系。",
      required: "必填",
      nameRequired: "请输入姓名",
      emailRequired: "请输入有效的电子邮箱",
      messageRequired: "请输入咨询内容",
    },

    companyFieldLabels: {
      name: "公司名称",
      founded: "成立时间",
      capital: "注册资本",
      representative: "代表人",
      address: "地址",
      businessContent: "业务内容",
    },
  },

  vi: {
    blogPageTitle: "Blog Bất Động Sản",
    blogPageSubtitle: "Cập nhật xu hướng thị trường, chiến lược đầu tư và kiến thức thực tiễn tại Nhật Bản.",
    blogFilterAll: "Tất cả",
    blogNoPosts: "Chưa có bài viết",
    blogReadMore: "Đọc thêm",
    blogBackToList: "← Quay lại Blog",
    blogRelatedTitle: "Bài viết liên quan",
    blogCategories: {
      market: "Thị trường",
      investment: "Đầu tư",
      legal: "Pháp lý & Thuế",
      guide: "Hướng dẫn",
      news: "Tin tức",
    },

    contactPageTitle: "Tư vấn miễn phí",
    contactPageSubtitle:
      "Đội ngũ đa ngôn ngữ của chúng tôi sẵn sàng đồng hành cùng bạn trong từng bước đầu tư bất động sản Nhật Bản.",
    contactForm: {
      heading: "Tư vấn miễn phí",
      subheading: "Liên hệ với chúng tôi. Chuyên viên tư vấn sẽ phản hồi trong vòng 2 ngày làm việc.",
      name: "Họ và tên",
      namePlaceholder: "Nguyễn Văn A",
      email: "Địa chỉ email",
      emailPlaceholder: "example@email.com",
      phone: "Số điện thoại (tùy chọn)",
      phonePlaceholder: "+84 90-000-0000",
      budget: "Ngân sách (tùy chọn)",
      budgetOptions: ["Vui lòng chọn", "Dưới 30 triệu ¥", "30 – 50 triệu ¥", "50 triệu – 1 tỷ ¥", "Trên 1 tỷ ¥"],
      message: "Nội dung tư vấn",
      messagePlaceholder:
        "Cho chúng tôi biết loại bất động sản, khu vực mong muốn, mục tiêu đầu tư hoặc bất kỳ câu hỏi nào của bạn.",
      submit: "Đăng ký tư vấn miễn phí",
      submitting: "Đang gửi...",
      successTitle: "Gửi thành công!",
      successBody: "Cảm ơn bạn đã liên hệ. Chuyên viên của chúng tôi sẽ phản hồi trong vòng 2 ngày làm việc.",
      required: "Bắt buộc",
      nameRequired: "Vui lòng nhập họ và tên",
      emailRequired: "Vui lòng nhập địa chỉ email hợp lệ",
      messageRequired: "Vui lòng nhập nội dung tư vấn",
    },

    companyFieldLabels: {
      name: "Tên công ty",
      founded: "Thành lập",
      capital: "Vốn điều lệ",
      representative: "Đại diện",
      address: "Địa chỉ",
      businessContent: "Lĩnh vực kinh doanh",
    },
  },
};

// ─── Helper ───────────────────────────────────────────────────────────────────

/** Get UI strings for a given language */
export function useT(lang: LanguageCode): UIStrings {
  return uiStrings[lang];
}
