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
      "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-04-01",
    readingMinutes: 5,
    tags: ["投資", "日本不動産", "市場分析"],
    content: `
<p>日本の不動産は、世界の投資家から注目を集めています。その理由は単純明快です。<strong>安定したキャッシュフロー、低い空室率、透明性の高い法制度</strong>の三点が揃っているからです。</p>
<h2>東京の市場動向</h2>
<p>東京は世界最大の都市圏のひとつであり、人口集中が継続しています。特に23区内のワンルームマンションは、海外投資家に人気の高いアセットクラスです。</p>
<h2>利回りの実態</h2>
<p>表面利回りは平均3〜5%、実質利回りは管理費・税金を差し引いても2〜4%程度を維持しています。これはシンガポールや香港と比較しても競争力があります。</p>
<h2>株式会社HTグローバルが提供するサポート</h2>
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
      "/assets/red/pexels-mart-production-7415041-scaled.jpg",
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
<p>パスポート、在留資格証明、資金証明（銀行残高証明）などが必要です。株式会社HTグローバルが書類準備をサポートします。</p>
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
      "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-04-01",
    readingMinutes: 5,
    tags: ["Investment", "Japan", "Market Analysis"],
    content: `
<p>Japan's real estate market stands out globally for three compelling reasons: <strong>stable cash flow, low vacancy rates, and a transparent legal framework</strong> that protects foreign investors.</p>
<h2>Tokyo Market Overview</h2>
<p>Tokyo remains one of the world's largest metropolitan areas with sustained population concentration. Studio condominiums in the 23 wards are among the most popular assets for overseas investors.</p>
<h2>Real Yield Figures</h2>
<p>Gross yields average 3–5%, with net yields of 2–4% after management fees and taxes — highly competitive compared to Singapore or Hong Kong.</p>
<h2>How 株式会社HTグローバル Supports You</h2>
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
      "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
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
      "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-04-01",
    readingMinutes: 5,
    tags: ["投资", "日本", "市场分析"],
    content: `
<p>日本房地产市场因三大优势而在全球脱颖而出：<strong>稳定的现金流、低空置率以及保护外国投资者的透明法律框架</strong>。</p>
<h2>东京市场概况</h2>
<p>东京仍是全球最大的都市圈之一，人口持续集中。23区内的单室公寓是海外投资者最受欢迎的资产类别之一。</p>
<h2>实际收益</h2>
<p>毛收益率平均3–5%，扣除管理费和税费后净收益率为2–4%，与新加坡或香港相比极具竞争力。</p>
<h2>株式会社HTグローバル 如何支持您</h2>
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
      "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-04-01",
    readingMinutes: 5,
    tags: ["Đầu tư", "Nhật Bản", "Phân tích thị trường"],
    content: `
<p>Thị trường bất động sản Nhật Bản nổi bật toàn cầu nhờ ba lý do: <strong>dòng tiền ổn định, tỷ lệ trống thấp và khung pháp lý minh bạch</strong> bảo vệ nhà đầu tư nước ngoài.</p>
<h2>Tổng quan thị trường Tokyo</h2>
<p>Tokyo vẫn là một trong những vùng đô thị lớn nhất thế giới với dân số tập trung bền vững. Căn hộ studio trong 23 quận là loại tài sản phổ biến nhất với nhà đầu tư nước ngoài.</p>
<h2>Lợi suất thực tế</h2>
<p>Lợi suất gộp trung bình 3–5%, lợi suất ròng sau phí quản lý và thuế đạt 2–4% — rất cạnh tranh so với Singapore hay Hong Kong.</p>
<h2>株式会社HTグローバル hỗ trợ bạn như thế nào</h2>
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
      "/assets/red/pexels-mart-production-7415041-scaled.jpg",
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
<p>Hộ chiếu, chứng minh tài chính (sao kê ngân hàng) và các giấy tờ liên quan. 株式会社HTグローバル hỗ trợ chuẩn bị toàn bộ hồ sơ.</p>
`,
  },
  {
    slug: "tokyo-2025-market-trends",
    lang: "en",
    title: "Tokyo Real Estate Market Trends 2025-2026",
    excerpt:
      "Latest insights on Tokyo's residential market: price movements, emerging neighborhoods, and what to expect in the coming year.",
    category: "market",
    coverImage:
      "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2026-01-15",
    readingMinutes: 7,
    tags: ["Market", "Tokyo", "Trends", "2026"],
    content: `
<p>The Tokyo real estate market enters 2026 with notable momentum. We break down the latest trends affecting residential properties and investment returns.</p>
<h2>Price Appreciation in Urban Centers</h2>
<p>Central wards (Minato, Shibuya, Chiyoda) show 2-4% year-on-year price growth, driven by limited supply and sustained foreign demand.</p>
<h2>Emerging Neighborhoods</h2>
<p>Emerging areas like Koenji and Shimokitazawa are attracting younger investors with lower entry prices and rising rental yields.</p>
<h2>Foreign Investor Participation</h2>
<p>Approximately 8-12% of Tokyo condo sales now involve foreign buyers, up from 5% five years ago. Policy remains welcoming.</p>
<h2>Interest Rate Environment</h2>
<p>With Japanese rates normalizing gradually, mortgage rates remain historically low compared to Western markets.</p>
`,
  },
  {
    slug: "managing-japan-rental-property",
    lang: "en",
    title: "Essential Tips for Managing Rental Property in Japan as a Non-Resident",
    excerpt:
      "Practical advice on property maintenance, tenant screening, communication with management companies, and legal obligations.",
    category: "guide",
    coverImage:
      "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
    publishedAt: "2026-01-05",
    readingMinutes: 9,
    tags: ["Management", "Rental", "Non-Resident", "Legal"],
    content: `
<p>Owning a rental property in Japan while living abroad requires delegation and trust. Here's how to manage it effectively.</p>
<h2>Hire a Property Management Company</h2>
<p>Most foreign landlords engage a licensed management company (kanri kaisha). They handle rent collection, maintenance coordination, and tenant communication.</p>
<h2>Legal Obligations</h2>
<p>File a tax return annually, maintain building records, and ensure property insurance is current. 株式会社HTグローバル can assist with compliance.</p>
<h2>Tenant Screening</h2>
<p>Japanese management companies typically guarantee quality tenants through strict vetting and require guarantor co-signatures.</p>
<h2>Maintenance Budget</h2>
<p>Reserve 5-8% of annual rental income for maintenance and repairs. Build a 10-year replacement fund for major systems.</p>
`,
  },
  {
    slug: "chon-lang-song-du-hoc-tokyo",
    lang: "vi",
    title: "Chọn khu vực sống lý tưởng cho du học sinh tại Tokyo",
    excerpt:
      "So sánh tiện nghi, chi phí sinh hoạt, giao thông và cộng đồng du học sinh ở các khu vực phổ biến.",
    category: "guide",
    coverImage:
      "/assets/red/pexels-marcus-herzberg-887753-scaled.jpg",
    publishedAt: "2025-02-10",
    readingMinutes: 6,
    tags: ["Du học", "Tokyo", "Khu vực sống", "Chi phí"],
    content: `
<p>Tokyo có hàng chục khu vực đáng sống, mỗi nơi có đặc tính riêng. Hãy tìm những khu vực phù hợp nhất cho bạn.</p>
<h2>Khu vực Shibuya</h2>
<p>Sôi động, trẻ trung, gần trường đại học. Chi phí cao hơn nhưng tiện nghi dồi dào. Phù hợp với những sinh viên muốn đời sống xã hội.</p>
<h2>Khu vực Shinjuku</h2>
<p>Trung tâm giao thương, công luật tốt. Chi phí trung bình. Rất tiện cho du học sinh muốn tiếp cận mọi thứ dễ dàng.</p>
<h2>Khu vực Chiyoda</h2>
<p>Yên tĩnh, có cảm giác an toàn cao. Chi phí cao hơn nhưng chất lượng sống tốt.</p>
<h2>Khu vực Nakano</h2>
<p>Giá rẻ hơn, cộng đồng du học lớn. Giao thông tốt nhưng kém sôi động so với Shibuya.</p>
`,
  },
  {
    slug: "huong-dan-thue-can-ho-tokyo",
    lang: "vi",
    title: "Hướng dẫn thuê căn hộ tại Tokyo: Quy trình & Chi phí",
    excerpt:
      "Tất cả những gì bạn cần biết để thuê căn hộ tại Tokyo, từ tìm kiếm đến ký hợp đồng.",
    category: "guide",
    coverImage:
      "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
    publishedAt: "2025-02-01",
    readingMinutes: 7,
    tags: ["Thuê nhà", "Tokyo", "Hướng dẫn", "Chi phí"],
    content: `
<p>Thuê nhà tại Tokyo khác với các nước khác. Hãy hiểu rõ quy trình để tránh bất ngờ.</p>
<h2>Chi phí khác nhau</h2>
<p><strong>Tiền cọc (Shikikin):</strong> Thường 1-2 tháng tiền thuê. Trả lại sau khi chuyển đi.<br/>
<strong>Phí môi giới (Reikin):</strong> 1 tháng tiền thuê, không hoàn lại.<br/>
<strong>Bảo hiểm:</strong> 5,000-15,000 yen mỗi năm.</p>
<h2>Quy trình</h2>
<ol><li>Tìm kiếm online (Suumo, Homes)</li><li>Liên hệ với công ty bất động sản</li><li>Xem lại căn hộ</li><li>Nộp đơn xin thuê</li><li>Xét duyệt (thường 3-5 ngày)</li><li>Ký hợp đồng và chuyển vào</li></ol>
`,
  },
  {
    slug: "tokyo-giao-tong-va-sinh-hoat",
    lang: "vi",
    title: "Giao thông & Chi phí sinh hoạt tại Tokyo trong năm 2026",
    excerpt:
      "Cập nhật chi phí thuê nhà, ăn uống, giao thông công cộng và giải trí ở Tokyo.",
    category: "market",
    coverImage:
      "/assets/red/pexels-mart-production-7415041-scaled.jpg",
    publishedAt: "2025-01-20",
    readingMinutes: 5,
    tags: ["Chi phí", "Tokyo", "Sinh hoạt", "Giao thông"],
    content: `
<p>Tokyo là thành phố đắt đỏ nhưng có nhiều cách tiết kiệm. Dưới đây là chi phí cơ bản mà bạn cần biết.</p>
<h2>Chi phí thuê nhà</h2>
<p>Studio/1 phòng: 60,000–120,000 yen/tháng (trung bình khu vực). Shinjuku/Shibuya cao hơn 50%.</p>
<h2>Ăn uống</h2>
<p>Cơm chiên/ramen: 800–1,200 yen. Nhà hàng bình dân: 1,500–3,000 yen. Cửa hàng tiện lợi: 400–800 yen.</p>
<h2>Giao thông công cộng</h2>
<p>Vé tháng IC Card: 10,000–14,000 yen (tuỳ khu vực). Taxi rất đắt, tránh nếu có thể.</p>
<h2>Giải trí</h2>
<p>Vé xem phim: 1,800 yen. Quây bar: 1,000–3,000 yen/ly. Công viên: miễn phí–500 yen.</p>
`,
  },
  {
    slug: "beijing-shanghai-housing-guide",
    lang: "zh",
    title: "北京和上海房地产投资指南",
    excerpt:
      "中国一线城市房地产市场概览、投资机会和风险评估。",
    category: "guide",
    coverImage:
      "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2025-12-15",
    readingMinutes: 8,
    tags: ["投资", "中国", "北京", "上海"],
    content: `
<p>虽然我们主要专注日本，但许多投资者也对中国市场感兴趣。以下是对北京和上海市场的简要分析。</p>
<h2>市场对比</h2>
<p>北京：政治中心，增长稳定但政策限制多。上海：金融中心，流动性强但价格高。</p>
<h2>投资回报</h2>
<p>租金回报率通常为2-3%，低于日本。但长期升值潜力仍存在。</p>
<h2>为什么日本更优</h2>
<p>日本提供更高的租金回报（3-5%）、更透明的法律框架和更低的政策风险。</p>
`,
  },
  {
    slug: "forex-investment-timing",
    lang: "zh",
    title: "日元升贬与房产投资时机",
    excerpt:
      "了解汇率波动如何影响外国投资者的日本房产回报。",
    category: "market",
    coverImage:
      "/assets/red/pexels-karolina-grabowska-8554832-scaled.jpg",
    publishedAt: "2025-11-10",
    readingMinutes: 6,
    tags: ["汇率", "日元", "投资时机", "风险管理"],
    content: `
<p>对外国投资者而言，汇率是影响实际回报率的重要因素。</p>
<h2>日元弱化的优势</h2>
<p>当日元贬值时，用美元或人民币购买日本房产变得更便宜。这是增加购买力的好时机。</p>
<h2>汇兑风险管理</h2>
<p>建议分批购入，而非一次性投入。这样可以平均购入成本。</p>
<h2>长期投资优势</h2>
<p>虽然短期汇率波动，但租金收入以日元计算稳定。长期而言，汇率风险趋于平衡。</p>
`,
  },
];


