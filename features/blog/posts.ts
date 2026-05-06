import type { BlogPost } from "./types";

export const allPosts: BlogPost[] = [
  // ── Japanese ──────────────────────────────────────────────────
  {
    slug: "why-invest-in-japan-real-estate",
    lang: "ja",
    title: "なぜ今、日本の不動産に投資するのか",
    excerpt:
      "日本の不動産市場は、安定したキャッシュフロー・低金利・透明な法制度という三拍子が揃った希少な投資先です。",
    category: "investment",
    coverImage:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-04-01",
    readingMinutes: 5,
    tags: ["投資", "日本不動産", "市場分析"],
    content: `
<p>日本の不動産は、世界の投資家から注目を集めています。その理由は単純明快です。<strong>安定したキャッシュフロー、低い空室率、透明性の高い法制度</strong>の三点が揃っているからです。</p>
<h2>東京の市場動向</h2>
<p>東京は世界最大の都市圏のひとつであり、人口集中が継続しています。特に23区内のワンルームマンションは、海外投資家に人気の高いアセットクラスです。</p>
<h2>利回りの実態</h2>
<p>表面利回りは平均3〜5%、実質利回りは管理費・税金を差し引いても2〜4%程度を維持しています。これはシンガポールや香港と比較しても競争力があります。</p>
<h2>redhomesが提供するサポート</h2>
<p>物件選定から購入契約、賃貸管理、確定申告サポートまで、ワンストップで対応します。まずはお気軽にお問い合わせください。</p>
`,
  },
  {
    slug: "tokyo-condo-buying-guide",
    lang: "ja",
    title: "東京マンション購入ガイド — 海外居住者向け完全版",
    excerpt:
      "非居住者でも日本の不動産は購入できます。手続きの流れと注意点を分かりやすく解説します。",
    category: "guide",
    coverImage:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-mart-production-7415041-scaled.jpg",
    publishedAt: "2026-03-15",
    readingMinutes: 8,
    tags: ["購入ガイド", "マンション", "海外居住者"],
    content: `
<p>海外在住の方が日本の不動産を購入する際、最初に気になるのは「本当に買えるのか？」という点でしょう。答えは<strong>YES</strong>です。</p>
<h2>購入プロセス概要</h2>
<ol>
  <li>物件選定・内見（オンライン対応可）</li>
  <li>購入申込書の提出</li>
  <li>重要事項説明（宅建士による説明）</li>
  <li>売買契約・手付金支払い</li>
  <li>残代金決済・所有権移転登記</li>
</ol>
<h2>必要書類</h2>
<p>パスポート、在留資格証明、資金証明（銀行残高証明）などが必要です。redhomesが書類準備をサポートします。</p>
`,
  },

  // ── English ───────────────────────────────────────────────────
  {
    slug: "why-invest-in-japan-real-estate",
    lang: "en",
    title: "Why Invest in Japanese Real Estate Now",
    excerpt:
      "Japan offers a rare trifecta for global investors: stable cash flow, transparent regulation, and long-term value preservation.",
    category: "investment",
    coverImage:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-04-01",
    readingMinutes: 5,
    tags: ["Investment", "Japan", "Market Analysis"],
    content: `
<p>Japan's real estate market stands out globally for three compelling reasons: <strong>stable cash flow, low vacancy rates, and a transparent legal framework</strong> that protects foreign investors.</p>
<h2>Tokyo Market Overview</h2>
<p>Tokyo remains one of the world's largest metropolitan areas with sustained population concentration. Studio condominiums in the 23 wards are among the most popular assets for overseas investors.</p>
<h2>Real Yield Figures</h2>
<p>Gross yields average 3–5%, with net yields of 2–4% after management fees and taxes — highly competitive compared to Singapore or Hong Kong.</p>
<h2>How redhomes Supports You</h2>
<p>From property selection to purchase contracts, rental management, and tax filing — we handle everything end-to-end. Get in touch to start your journey.</p>
`,
  },
  {
    slug: "understanding-japan-property-tax",
    lang: "en",
    title: "Understanding Property Tax in Japan for Foreign Investors",
    excerpt:
      "A clear breakdown of fixed asset tax, city planning tax, and income tax on rental revenue — everything you need to know.",
    category: "legal",
    coverImage:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-max-vakhtbovych-7060815-scaled.jpg",
    publishedAt: "2026-02-20",
    readingMinutes: 6,
    tags: ["Tax", "Legal", "Foreign Investors"],
    content: `
<p>Taxation is often the biggest concern for first-time foreign investors in Japan. Here is a straightforward breakdown.</p>
<h2>Fixed Asset Tax (固定資産税)</h2>
<p>Levied annually at approximately <strong>1.4% of the assessed value</strong>. For condos, this is typically ¥50,000–¥150,000 per year.</p>
<h2>City Planning Tax (都市計画税)</h2>
<p>An additional 0.3% on properties within urbanization promotion areas. Applied on top of fixed asset tax.</p>
<h2>Income Tax on Rental Revenue</h2>
<p>Non-residents pay a flat <strong>20.42%</strong> withholding tax on gross rental income. Residents file a progressive income tax return instead.</p>
<h2>Capital Gains Tax</h2>
<p>Properties held under 5 years are taxed at 39.63%. Over 5 years: 20.315%. Long-term holding is strongly advantageous.</p>
`,
  },

  // ── Chinese ───────────────────────────────────────────────────
  {
    slug: "why-invest-in-japan-real-estate",
    lang: "zh",
    title: "为什么现在投资日本房地产",
    excerpt:
      "日本为全球投资者提供了难得的三重优势：稳定的现金流、透明的法规体系和长期保值能力。",
    category: "investment",
    coverImage:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-04-01",
    readingMinutes: 5,
    tags: ["投资", "日本", "市场分析"],
    content: `
<p>日本房地产市场因三大优势而在全球脱颖而出：<strong>稳定的现金流、低空置率以及保护外国投资者的透明法律框架</strong>。</p>
<h2>东京市场概况</h2>
<p>东京仍是全球最大的都市圈之一，人口持续集中。23区内的单室公寓是海外投资者最受欢迎的资产类别之一。</p>
<h2>实际收益</h2>
<p>毛收益率平均3–5%，扣除管理费和税费后净收益率为2–4%，与新加坡或香港相比极具竞争力。</p>
<h2>redhomes 如何支持您</h2>
<p>从选房、签约、租赁管理到税务申报，我们提供一站式全程服务。立即联系我们，开启您的投资之旅。</p>
`,
  },

  // ── Vietnamese ────────────────────────────────────────────────
  {
    slug: "why-invest-in-japan-real-estate",
    lang: "vi",
    title: "Tại sao nên đầu tư bất động sản Nhật Bản ngay bây giờ",
    excerpt:
      "Nhật Bản mang đến bộ ba hiếm có cho nhà đầu tư toàn cầu: dòng tiền ổn định, pháp lý minh bạch và bảo toàn giá trị dài hạn.",
    category: "investment",
    coverImage:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-04-01",
    readingMinutes: 5,
    tags: ["Đầu tư", "Nhật Bản", "Phân tích thị trường"],
    content: `
<p>Thị trường bất động sản Nhật Bản nổi bật toàn cầu nhờ ba lý do: <strong>dòng tiền ổn định, tỷ lệ trống thấp và khung pháp lý minh bạch</strong> bảo vệ nhà đầu tư nước ngoài.</p>
<h2>Tổng quan thị trường Tokyo</h2>
<p>Tokyo vẫn là một trong những vùng đô thị lớn nhất thế giới với dân số tập trung bền vững. Căn hộ studio trong 23 quận là loại tài sản phổ biến nhất với nhà đầu tư nước ngoài.</p>
<h2>Lợi suất thực tế</h2>
<p>Lợi suất gộp trung bình 3–5%, lợi suất ròng sau phí quản lý và thuế đạt 2–4% — rất cạnh tranh so với Singapore hay Hong Kong.</p>
<h2>redhomes hỗ trợ bạn như thế nào</h2>
<p>Từ chọn bất động sản, ký hợp đồng, quản lý cho thuê đến khai thuế — chúng tôi xử lý toàn bộ quy trình. Liên hệ ngay để bắt đầu.</p>
`,
  },
  {
    slug: "huong-dan-mua-can-ho-tokyo",
    lang: "vi",
    title: "Hướng dẫn mua căn hộ Tokyo cho người nước ngoài",
    excerpt:
      "Người không cư trú vẫn có thể mua bất động sản tại Nhật Bản. Chúng tôi hướng dẫn từng bước quy trình và những điểm cần lưu ý.",
    category: "guide",
    coverImage:
      "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-mart-production-7415041-scaled.jpg",
    publishedAt: "2026-03-15",
    readingMinutes: 8,
    tags: ["Hướng dẫn", "Căn hộ", "Người nước ngoài"],
    content: `
<p>Điều đầu tiên người nước ngoài muốn mua bất động sản Nhật Bản thắc mắc là: "Tôi có mua được không?" Câu trả lời là <strong>CÓ</strong>.</p>
<h2>Quy trình mua tổng quan</h2>
<ol>
  <li>Chọn bất động sản và xem nhà (hỗ trợ online)</li>
  <li>Nộp đơn đặt mua</li>
  <li>Giải thích các điều khoản quan trọng (bởi môi giới có chứng chỉ)</li>
  <li>Ký hợp đồng mua bán & thanh toán tiền đặt cọc</li>
  <li>Thanh toán số dư & chuyển nhượng quyền sở hữu</li>
</ol>
<h2>Giấy tờ cần thiết</h2>
<p>Hộ chiếu, chứng minh tài chính (sao kê ngân hàng) và các giấy tờ liên quan. redhomes hỗ trợ chuẩn bị toàn bộ hồ sơ.</p>
`,
  },
];
