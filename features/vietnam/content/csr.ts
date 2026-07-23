import type { LocalizedText } from "@/lib/vietnam/i18n";
import { lt } from "@/features/vietnam/content/texts";

export type DetailSource = { label: string; url: string };

export type CsrStory = {
  slug: string;
  title: LocalizedText;
  body: LocalizedText;
  image: string;
  year: string;
  location: LocalizedText;
  details: LocalizedText[];
  sources: DetailSource[];
};

export type Award = {
  slug: string;
  title: LocalizedText;
  year: string;
  organization: string;
  image: string;
  summary: LocalizedText;
  details: LocalizedText[];
  sources: DetailSource[];
};

export const csrStories: CsrStory[] = [
  {
    slug: "red-sunday-blood-donation",
    title: lt("赤い日曜日の献血活動", "红色星期日献血活动", "紅色星期日捐血活動", "Chủ Nhật Đỏ", "Red Sunday blood donation"),
    body: lt("Lynn Times Thanh Thủyで2年連続開催された人道的献血活動。", "在 Lynn Times Thanh Thủy 连续两年举办的人道献血活动。", "在 Lynn Times Thanh Thủy 連續兩年舉辦的人道捐血活動。", "Hiến máu nhân đạo tại Lynn Times Thanh Thủy trong 2 năm liên tiếp 2024-2025.", "A humanitarian blood donation event at Lynn Times Thanh Thủy for two consecutive years."),
    image: "/assets/csr/blood-donation.jpg",
    year: "2024-2025",
    location: lt("Lynn Times Thanh Thủy, Phú Thọ", "Lynn Times Thanh Thủy,富寿", "Lynn Times Thanh Thủy,富壽", "Lynn Times Thanh Thủy, Phú Thọ", "Lynn Times Thanh Thủy, Phú Thọ"),
    details: [
      lt("地域住民、スタッフ、パートナーが参加できるコミュニティプログラムとして設計されています。", "该活动被设计为当地居民、员工与合作伙伴共同参与的社区项目。", "該活動被設計為當地居民、員工與合作夥伴共同參與的社區項目。", "Hoạt động được thiết kế như một chương trình cộng đồng để cư dân, nhân sự và đối tác cùng tham gia.", "The activity is designed as a community program where residents, staff and partners can participate."),
      lt("観光・不動産開発と地域社会への貢献を同時に進めるOnsen FujiのCSR方針を示します。", "体现 Onsen Fuji 将旅游地产开发与社区贡献并行推进的 CSR 方向。", "體現 Onsen Fuji 將旅遊地產開發與社區貢獻並行推進的 CSR 方向。", "Thể hiện định hướng CSR của Onsen Fuji: phát triển du lịch bất động sản song hành với đóng góp cộng đồng.", "It reflects Onsen Fuji's CSR approach of linking tourism real estate development with community contribution."),
    ],
    sources: [{ label: "Onsen Fuji Profile PDF 2025", url: "/assets/pdf-pages/csr_1.jpg" }],
  },
  {
    slug: "typhoon-yagi-relief",
    title: lt("災害救援", "灾害救援", "災害救援", "Cứu trợ thiên tai", "Disaster relief"),
    body: lt("台風Yagi被災地域へ緊急物資を提供した支援活動。", "向 Yagi 台风受灾地区提供紧急物资的援助活动。", "向 Yagi 颱風受災地區提供緊急物資的援助活動。", "Hỗ trợ khẩn cấp nhu yếu phẩm cho đồng bào vùng bão Yagi.", "Emergency necessities and support for communities affected by Typhoon Yagi."),
    image: "/assets/csr/relief-fund.jpg",
    year: "2024",
    location: lt("Yagi台風被災地域", "Yagi 台风受灾地区", "Yagi 颱風受災地區", "Khu vực chịu ảnh hưởng bão Yagi", "Typhoon Yagi affected communities"),
    details: [
      lt("支援は生活必需品を中心に、被災後の初期回復を支える目的で実施されました。", "援助以生活必需品为核心,支持灾后初期恢复。", "援助以生活必需品為核心,支持災後初期恢復。", "Hoạt động tập trung vào nhu yếu phẩm, hỗ trợ giai đoạn phục hồi ban đầu sau thiên tai.", "The relief focused on necessities and early recovery support after the disaster."),
      lt("プロジェクト所在地に限らず、広い社会課題に対応する企業姿勢を示します。", "该活动体现企业不仅关注项目所在地,也回应更广泛的社会需求。", "該活動體現企業不僅關注項目所在地,也回應更廣泛的社會需求。", "Hoạt động thể hiện trách nhiệm của doanh nghiệp với các nhu cầu xã hội rộng hơn ngoài phạm vi dự án.", "The activity shows the company's response to wider social needs beyond project locations."),
    ],
    sources: [{ label: "Onsen Fuji Profile PDF 2025", url: "/assets/pdf-pages/csr_1.jpg" }],
  },
  {
    slug: "education-healthcare-support",
    title: lt("医療・教育支援", "医疗与教育支持", "醫療與教育支持", "Giáo dục & Y tế", "Education and healthcare"),
    body: lt("医療物資の寄贈と地域児童向け無料水泳教室。", "医疗物资捐赠与当地儿童免费游泳课程。", "醫療物資捐贈與當地兒童免費游泳課程。", "Tặng vật tư y tế và tổ chức lớp học bơi miễn phí cho trẻ em địa phương.", "Medical donations and free swimming classes for local children."),
    image: "/assets/csr/medical-donation.jpg",
    year: "2024-2025",
    location: lt("Hà Nội / Thanh Thủy", "河内 / Thanh Thủy", "河內 / Thanh Thủy", "Hà Nội / Thanh Thủy", "Hanoi / Thanh Thủy"),
    details: [
      lt("医療支援は病院への物資寄贈を通じて、現場のケア能力を補完します。", "医疗支持通过向医院捐赠物资,补充一线医疗照护能力。", "醫療支持透過向醫院捐贈物資,補充第一線醫療照護能力。", "Hỗ trợ y tế thông qua tặng vật tư cho bệnh viện, bổ sung năng lực chăm sóc tuyến đầu.", "Healthcare support contributes medical supplies to hospitals and complements frontline care capacity."),
      lt("無料水泳教室は、夏季の安全教育と子どもの健康づくりを目的とします。", "免费游泳课程面向暑期安全教育与儿童健康成长。", "免費游泳課程面向暑期安全教育與兒童健康成長。", "Lớp học bơi miễn phí hướng tới an toàn mùa hè và sức khỏe trẻ em địa phương.", "Free swimming classes support summer safety education and local children's health."),
    ],
    sources: [
      { label: "Onsen Fuji search/news archive", url: "https://onsenfuji.co.jp/ket-qua-tim-kiem/?trang=1" },
      { label: "Onsen Fuji Profile PDF 2025", url: "/assets/pdf-pages/csr_1.jpg" },
    ],
  },
];

export const awards: Award[] = [
  {
    slug: "best-tourism-resort-development-southeast-asia-2020",
    title: lt("Best Tourism and Resort Development Southeast Asia 2020", "2020 东南亚最佳旅游与度假开发项目", "2020 東南亞最佳旅遊與度假開發項目", "Best Tourism and Resort Development Southeast Asia 2020", "Best Tourism and Resort Development Southeast Asia 2020"),
    year: "2020",
    organization: "Dot Property Southeast Asia Awards",
    image: "/assets/pdf-pages/awards_1.jpg",
    summary: lt("Wyndham Lynn Times Thanh Thủy by Onsen Fujiが東南アジアレベルで評価されました。", "Onsen Fuji 的 Wyndham Lynn Times Thanh Thủy 获得东南亚级别认可。", "Onsen Fuji 的 Wyndham Lynn Times Thanh Thủy 獲得東南亞級別認可。", "Wyndham Lynn Times Thanh Thủy by Onsen Fuji được ghi nhận ở cấp Đông Nam Á.", "Wyndham Lynn Times Thanh Thủy by Onsen Fuji received Southeast Asia recognition."),
    details: [
      lt("Dot Property の Southeast Asia Awards 2020 では、Wyndham Lynn Times Thanh Thủy が東南アジア規模で評価されました。", "在 Dot Property Southeast Asia Awards 2020 中,Wyndham Lynn Times Thanh Thủy 获得了东南亚级别认可。", "在 Dot Property Southeast Asia Awards 2020 中,Wyndham Lynn Times Thanh Thủy 獲得了東南亞級別認可。", "Tại Dot Property Southeast Asia Awards 2020, Wyndham Lynn Times Thanh Thủy được ghi nhận ở tầm khu vực Đông Nam Á.", "At the Dot Property Southeast Asia Awards 2020, Wyndham Lynn Times Thanh Thủy was recognized at a Southeast Asia level."),
      lt("記事は、温泉・ウェルネス・リゾート型の開発価値が評価された点を強調しており、地域の観光目的地としての可能性を示しています。", "文章强调该项目作为温泉、康养与度假型开发所具备的价值,体现其作为旅游目的地的潜力。", "文章強調該項目作為溫泉、康養與度假型開發所具備的價值,體現其作為旅遊目的地的潛力。", "Bài viết nhấn mạnh giá trị phát triển theo mô hình suối khoáng – wellness – nghỉ dưỡng, thể hiện tiềm năng trở thành điểm đến du lịch của địa phương.", "The article highlights the value of a hot-spring, wellness and resort model, underscoring its potential as a tourism destination."),
    ],
    sources: [{ label: "Dot Property Magazine - Southeast Asia Awards 2020", url: "https://magazine.thailand-property.com/DP-Mag-033-OnlineVersion-For-DPwebsite.pdf" }],
  },
  {
    slug: "best-commercial-developer-vietnam-2021",
    title: lt("Best Commercial Developer Vietnam 2021", "2021 越南最佳商业地产开发商", "2021 越南最佳商業地產開發商", "Best Commercial Developer Vietnam 2021", "Best Commercial Developer Vietnam 2021"),
    year: "2021",
    organization: "Dot Property Vietnam Awards",
    image: "/assets/pdf-pages/awards_1.jpg",
    summary: lt("Onsen Fujiは商業不動産開発企業として表彰されました。", "Onsen Fuji 作为商业地产开发企业获奖。", "Onsen Fuji 作為商業地產開發企業獲獎。", "Onsen Fuji được vinh danh ở hạng mục nhà phát triển BĐS thương mại.", "Onsen Fuji was honored as a commercial real estate developer."),
    details: [
      lt("Onsen Fuji 公式記事は、同社が Dot Property Vietnam Awards 2021 で Best Commercial Developer Vietnam を含む複数の評価を獲得したと伝えています。", "Onsen Fuji 官方文章称,公司在 Dot Property Vietnam Awards 2021 中获得了包括 Best Commercial Developer Vietnam 在内的多项认可。", "Onsen Fuji 官方文章稱,公司在 Dot Property Vietnam Awards 2021 中獲得了包括 Best Commercial Developer Vietnam 在內的多項認可。", "Bài viết chính thức của Onsen Fuji cho biết doanh nghiệp được vinh danh tại Dot Property Vietnam Awards 2021 với Best Commercial Developer Vietnam và các ghi nhận liên quan.", "Onsen Fuji's official article says the company was honored at the Dot Property Vietnam Awards 2021 with Best Commercial Developer Vietnam and related recognition."),
      lt("受賞理由として、国際ブランドと結びついた上質な商業不動産開発、地域経済への寄与、そして持続可能な価値創出の姿勢が挙げられています。", "获奖理由包括与国际品牌结合的高品质商业地产开发、对地方经济的贡献以及持续创造价值的理念。", "獲獎理由包括與國際品牌結合的高品質商業地產開發、對地方經濟的貢獻以及持續創造價值的理念。", "Lý do được ghi nhận là năng lực phát triển BĐS thương mại gắn với thương hiệu quốc tế, đóng góp cho kinh tế địa phương và định hướng tạo giá trị bền vững.", "The recognition reflects premium commercial development tied to international brands, contribution to the local economy, and a commitment to sustainable value creation."),
    ],
    sources: [
      { label: "Onsen Fuji - Dot Property Vietnam Awards 2021", url: "https://onsenfuji.com.vn/onsen-fuji-lap-cu-dup-giai-thuong-tai-dot-property-vietnam-awards-2021/" },
      { label: "Dot Property Vietnam Awards 2021 winners", url: "https://www.dotproperty.com.vn/en/blog/dot-property-vietnam-awards-2021-celebrate-winners-inspire-sustainable-growth-real-estate" },
    ],
  },
  {
    slug: "best-beachfront-resort-apartment-vietnam-2021",
    title: lt("Best Beachfront Resort Apartment Vietnam 2021", "2021 越南最佳海滨度假公寓", "2021 越南最佳海濱度假公寓", "Best Beachfront Resort Apartment Vietnam 2021", "Best Beachfront Resort Apartment Vietnam 2021"),
    year: "2021",
    organization: "Dot Property Vietnam Awards",
    image: "/assets/projects/dolce-penisola-quang-binh/award-best-beachfront-2021.jpg",
    summary: lt("Dolce Penisola Quảng Bìnhが海岸リゾートアパートメントとして評価されました。", "Dolce Penisola Quảng Bình 作为海滨度假公寓项目获得认可。", "Dolce Penisola Quảng Bình 作為海濱度假公寓項目獲得認可。", "Dolce Penisola Quảng Bình được ghi nhận ở hạng mục căn hộ nghỉ dưỡng ven biển.", "Dolce Penisola Quảng Bình was recognized as a beachfront resort apartment project."),
    details: [
      lt("Dolce Penisola Quảng Bình は、Đồng Hới / Bảo Ninh に位置する 6 つ星級のリゾートコンドテルとして紹介され、Best Beachfront Resort Apartment Vietnam 2021 を受賞しました。", "Dolce Penisola Quảng Bình 被介绍为位于 Đồng Hới / Bảo Ninh 的 6 星级度假公寓,并获得了 Best Beachfront Resort Apartment Vietnam 2021。", "Dolce Penisola Quảng Bình 被介紹為位於 Đồng Hới / Bảo Ninh 的 6 星級度假公寓,並獲得了 Best Beachfront Resort Apartment Vietnam 2021。", "Dolce Penisola Quảng Bình được giới thiệu là tổ hợp căn hộ khách sạn 6 sao tại Đồng Hới / Bảo Ninh và giành giải Best Beachfront Resort Apartment Vietnam 2021.", "Dolce Penisola Quảng Bình is presented as a 6-star resort apartment complex in Đồng Hới / Bảo Ninh and won Best Beachfront Resort Apartment Vietnam 2021."),
      lt("記事では、海に面した立地、360 度の眺望、Low-E ガラス、ゴールドを用いたロビー、100m の空中ガラス橋、ヨットマリーナ、レストラン、スカイバーなどの 6 つ星仕様が紹介されています。", "文章提到项目临海位置、360 度景观、Low-E 玻璃、金色大堂、100 米空中玻璃桥、游艇码头、餐厅和天空酒吧等 6 星级配置。", "文章提到項目臨海位置、360 度景觀、Low-E 玻璃、金色大廳、100 米空中玻璃橋、遊艇碼頭、餐廳和天空酒吧等 6 星級配置。", "Bài viết mô tả các tiện ích 6 sao như vị trí sát biển, tầm nhìn 360 độ, kính Low-E, sảnh dát vàng, cầu kính trên cao 100m, bến du thuyền, nhà hàng và skybar.", "The article describes 6-star features such as a beachfront location, 360-degree views, Low-E glass, a gold-accented lobby, a 100m sky bridge, yacht marina, restaurant and skybar."),
      lt("Onsen Fuji は、このプロジェクトを Quảng Bình の観光・経済価値を押し上げる象徴的な開発として位置づけています。", "Onsen Fuji 将该项目定位为提升 Quảng Bình 旅游与经济价值的标志性开发。", "Onsen Fuji 將該項目定位為提升 Quảng Bình 旅遊與經濟價值的標誌性開發。", "Onsen Fuji xem đây là dự án biểu tượng góp phần nâng tầm giá trị du lịch và kinh tế của Quảng Bình.", "Onsen Fuji positions the project as an iconic development that contributes to Quảng Bình's tourism and economic value."),
    ],
    sources: [{ label: "Onsen Fuji - Dolce Penisola award", url: "https://onsenfuji.com.vn/khach-san-6-sao-quang-binh-gianh-chien-thang-tai-dot-property-vietnam-awards-2021/" }],
  },
  {
    slug: "best-public-service-architecture-vietnam-2023-2024",
    title: lt("Best Public Service Architecture Vietnam 2023-2024", "2023-2024 越南最佳公共服务建筑", "2023-2024 越南最佳公共服務建築", "Best Public Service Architecture Vietnam 2023-2024", "Best Public Service Architecture Vietnam 2023-2024"),
    year: "2023-2024",
    organization: "Asia Pacific Property Awards",
    image: "/assets/projects/lynntimes-thanh-thuy/ohayo-onsen-aerial-01.jpg",
    summary: lt("Ohayo Onsen & Spaの建築・公共サービス価値が評価されました。", "Ohayo Onsen & Spa 的建筑与公共服务价值获得认可。", "Ohayo Onsen & Spa 的建築與公共服務價值獲得認可。", "Ohayo Onsen & Spa được ghi nhận về giá trị kiến trúc và dịch vụ công cộng.", "Ohayo Onsen & Spa was recognized for architectural and public service value."),
    details: [
      lt("Ohayo Onsen & Spa は、Asia Pacific Property Awards 2023 で Best Public Service Architecture Vietnam を受賞した施設として紹介されています。", "Ohayo Onsen & Spa 被介绍为在 Asia Pacific Property Awards 2023 中获得 Best Public Service Architecture Vietnam 的项目。", "Ohayo Onsen & Spa 被介紹為在 Asia Pacific Property Awards 2023 中獲得 Best Public Service Architecture Vietnam 的項目。", "Ohayo Onsen & Spa được giới thiệu là công trình đoạt Best Public Service Architecture Vietnam tại Asia Pacific Property Awards 2023.", "Ohayo Onsen & Spa is presented as the project that won Best Public Service Architecture Vietnam at the Asia Pacific Property Awards 2023."),
      lt("Bamboo Ali の施工記事では、温泉施設向けに耐水性の高い竹材を採用し、給水ボックス、門柱、屋外デッキなどを完成させたことが説明されています。", "Bamboo Ali 的施工文章说明,该项目采用高耐水性的竹材,并完成了水池回水箱、门柱、户外平台等构件。", "Bamboo Ali 的施工文章說明,該項目採用高耐水性的竹材,並完成了回水盒、門柱、戶外平台等構件。", "Bài viết của Bamboo Ali cho biết dự án sử dụng vật liệu tre có khả năng chịu nước cao và hoàn thiện các hạng mục như hộp trả nước, cổng, cột và sàn ngoài trời.", "Bamboo Ali's article explains that the project used highly water-resistant bamboo materials and completed items such as a water return box, gates, posts and outdoor decking."),
      lt("難易度の高い曲線スパンや高湿度環境への対応が評価され、建築と公共サービス機能の両面で高い完成度を示したとされています。", "项目在弧形结构和高湿度环境应对方面的难度被强调,体现出建筑与公共服务功能上的高完成度。", "項目在弧形結構和高濕度環境應對方面的難度被強調,體現出建築與公共服務功能上的高完成度。", "Dự án được nhấn mạnh ở độ khó của các cấu kiện cong và khả năng thích ứng với môi trường ẩm cao, thể hiện mức hoàn thiện cao ở cả kiến trúc lẫn chức năng dịch vụ công cộng.", "The project is noted for its curved structural challenges and adaptation to a high-humidity environment, showing a high degree of completion in both architecture and public-service function."),
    ],
    sources: [
      { label: "Zoo Studio - Ohayo Onsen & Spa", url: "https://zoostudio-asia.com/project/ohayo-onsen-spa" },
      { label: "ALI Vietnam - Ohayo Onsen & Spa award note", url: "https://alivietnam.vn/ohayo-onsen-spa-7684/" },
    ],
  },
];

export function getCsrStory(slug: string) {
  return csrStories.find((story) => story.slug === slug);
}

export function getAward(slug: string) {
  return awards.find((award) => award.slug === slug);
}

