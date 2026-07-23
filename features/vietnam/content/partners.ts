import type { LocalizedText } from "@/lib/vietnam/i18n";
import { lt } from "@/features/vietnam/content/texts";

export type PartnerGroup = "management" | "construction" | "engineering";

export type Partner = {
  slug: string;
  name: string;
  group: PartnerGroup;
  logo: string;
  website?: string;
  summary: LocalizedText;
  companyOverview: LocalizedText;
  details: LocalizedText[];
  cooperation: LocalizedText;
  sources: Array<{ label: string; url: string }>;
};

export const partners: Partner[] = [
  {
    slug: "dolce-hotels-resorts-wyndham",
    name: "Dolce Hotels & Resorts by Wyndham",
    group: "management",
    logo: "/assets/pdf-pages/strategic_partners_1.jpg",
    website: "https://www.wyndhamhotels.com/dolce",
    summary: lt(
      "Dolce Penisola Quang Binhを支える国際ホテル運営ブランド。",
      "支持 Dolce Penisola Quang Binh 的国际酒店运营品牌。",
      "支持 Dolce Penisola Quang Binh 的國際飯店營運品牌。",
      "Thương hiệu vận hành khách sạn quốc tế gắn với Dolce Penisola Quảng Bình.",
      "International hospitality operating brand associated with Dolce Penisola Quang Binh.",
    ),
    companyOverview: lt(
      "Dolce Hotels & Resorts by WyndhamはWyndham Hotels & Resorts傘下の上級ホテルブランドで、会議、イベント、リゾート滞在、洗練された飲食体験を重視します。",
      "Dolce Hotels & Resorts by Wyndham 是 Wyndham Hotels & Resorts 旗下的高端酒店品牌,重点覆盖会议活动、度假住宿与精致餐饮体验。",
      "Dolce Hotels & Resorts by Wyndham 是 Wyndham Hotels & Resorts 旗下的高端飯店品牌,重點涵蓋會議活動、度假住宿與精緻餐飲體驗。",
      "Dolce Hotels & Resorts by Wyndham là thương hiệu khách sạn cao cấp thuộc Wyndham Hotels & Resorts, tập trung vào hội nghị, sự kiện, nghỉ dưỡng và trải nghiệm ẩm thực tinh tế.",
      "Dolce Hotels & Resorts by Wyndham is an upper-upscale Wyndham Hotels & Resorts brand focused on meetings, events, resort stays and refined food and beverage experiences.",
    ),
    details: [
      lt(
        "Onsen Fujiの公開資料では、Dolce Penisolaは同ブランドによる運営予定プロジェクトとして紹介されています。",
        "Onsen Fuji 公开资料将 Dolce Penisola 介绍为由该品牌参与运营的项目。",
        "Onsen Fuji 公開資料將 Dolce Penisola 介紹為由該品牌參與營運的項目。",
        "Tài liệu công khai của Onsen Fuji giới thiệu Dolce Penisola là dự án có định hướng vận hành bởi thương hiệu này.",
        "Onsen Fuji public materials present Dolce Penisola as a project positioned for operation by this brand.",
      ),
      lt(
        "海辺の6つ星ホテルレジデンスに、国際的なサービス基準とリゾート運営ノウハウを補完します。",
        "为海滨六星级酒店式公寓补充国际服务标准与度假运营经验。",
        "為海濱六星級飯店式公寓補充國際服務標準與度假營運經驗。",
        "Bổ sung tiêu chuẩn dịch vụ quốc tế và năng lực vận hành nghỉ dưỡng cho tổ hợp căn hộ khách sạn 6 sao ven biển.",
        "Adds international service standards and resort operating know-how to the 6-star beachfront hotel apartment concept.",
      ),
    ],
    cooperation: lt(
      "6つ星基準のホテルレジデンス運営価値を支えるパートナー。",
      "支撑六星级酒店式公寓运营价值的合作伙伴。",
      "支撐六星級飯店式公寓營運價值的合作夥伴。",
      "Đối tác hỗ trợ giá trị vận hành căn hộ khách sạn tiêu chuẩn 6 sao.",
      "Partner supporting the 6-star hotel apartment operating proposition.",
    ),
    sources: [
      { label: "Onsen Fuji - Dolce Hotels & Resorts by Wyndham", url: "https://onsenfuji.com.vn/dolce-hotels-resorts-by-wyndham-bao-chung-van-hanh-tu-thuong-hieu-quoc-te-hang-dau/" },
      { label: "Wyndham Hotels - Dolce", url: "https://www.wyndhamhotels.com/dolce" },
    ],
  },
  {
    slug: "lynntimes-hospitality-management",
    name: "Lynntimes Hospitality Management",
    group: "management",
    logo: "/assets/pdf-pages/strategic_partners_2.jpg",
    summary: lt(
      "Onsen Fujiエコシステムの温泉・ホテル運営専門ユニット。",
      "Onsen Fuji 生态系统内的温泉与酒店运营专业单位。",
      "Onsen Fuji 生態系統內的溫泉與飯店營運專業單位。",
      "Đơn vị chuyên trách vận hành khoáng nóng và khách sạn trong hệ sinh thái Onsen Fuji.",
      "Specialist hot spring and hospitality operations unit in the Onsen Fuji ecosystem.",
    ),
    companyOverview: lt(
      "Lynntimes Hospitality Managementは、温泉技術、ホテルサービス、顧客体験管理を統合するOnsen Fujiの運営機能です。",
      "Lynntimes Hospitality Management 是 Onsen Fuji 的运营能力,整合温泉技术、酒店服务与客户体验管理。",
      "Lynntimes Hospitality Management 是 Onsen Fuji 的營運能力,整合溫泉技術、飯店服務與客戶體驗管理。",
      "Lynntimes Hospitality Management là năng lực vận hành của Onsen Fuji, tích hợp kỹ thuật khoáng nóng, dịch vụ khách sạn và quản trị trải nghiệm khách hàng.",
      "Lynntimes Hospitality Management is Onsen Fuji's operating capability, integrating mineral spring systems, hospitality service and guest experience management.",
    ),
    details: [
      lt(
        "LHMは温泉設備、5つ星ホテルサービス、資産価値最適化をつなぐ内部運営パートナーです。",
        "LHM 是连接温泉设备、五星级酒店服务与资产价值优化的内部运营伙伴。",
        "LHM 是連接溫泉設備、五星級飯店服務與資產價值優化的內部營運夥伴。",
        "LHM là đối tác vận hành nội bộ kết nối thiết bị khoáng nóng, dịch vụ khách sạn 5 sao và tối ưu giá trị tài sản.",
        "LHM is an internal operating partner connecting hot spring equipment, 5-star hospitality and asset value optimization.",
      ),
      lt(
        "PDFではThanh Thuyの温泉リゾート運営体制の主要パートナーとして記載されています。",
        "PDF 将其列为 Thanh Thuy 温泉度假运营体系的重要伙伴。",
        "PDF 將其列為 Thanh Thuy 溫泉度假營運體系的重要夥伴。",
        "Profile PDF ghi nhận LHM là đối tác vận hành chính trong hệ thống nghỉ dưỡng khoáng nóng Thanh Thủy.",
        "The PDF profile lists LHM as a key operating partner for the Thanh Thuy hot spring resort system.",
      ),
    ],
    cooperation: lt(
      "温泉技術とホテル運営を統合し、顧客体験と資産価値を支えます。",
      "整合温泉技术与酒店运营,支撑客户体验和资产价值。",
      "整合溫泉技術與飯店營運,支撐客戶體驗和資產價值。",
      "Tích hợp kỹ thuật khoáng nóng và vận hành khách sạn để hỗ trợ trải nghiệm khách hàng và giá trị tài sản.",
      "Integrates hot spring technology and hospitality operations to support guest experience and asset value.",
    ),
    sources: [{ label: "Onsen Fuji Profile PDF 2025", url: "/assets/pdf-pages/strategic_partners_2.jpg" }],
  },
  {
    slug: "ricons",
    name: "Ricons",
    group: "construction",
    logo: "/assets/partners/ricons.jpg",
    website: "https://www.ricons.vn/",
    summary: lt(
      "Lynn Times Thanh Thuyに関わる建設パートナー。",
      "参与 Lynn Times Thanh Thuy 的建设合作伙伴。",
      "參與 Lynn Times Thanh Thuy 的建設合作夥伴。",
      "Đối tác xây dựng gắn với Lynn Times Thanh Thủy.",
      "Construction partner associated with Lynn Times Thanh Thuy.",
    ),
    companyOverview: lt(
      "Riconsは2004年設立のベトナム建設企業で、高層ビル、ホテル、リゾート、工場、インフラなど幅広いプロジェクトを手がけています。",
      "Ricons 成立于 2004 年,是越南建筑企业,业务覆盖高层建筑、酒店、度假村、工厂与基础设施项目。",
      "Ricons 成立於 2004 年,是越南建築企業,業務涵蓋高層建築、飯店、度假村、工廠與基礎設施項目。",
      "Ricons thành lập năm 2004, là doanh nghiệp xây dựng Việt Nam với kinh nghiệm ở cao ốc, khách sạn, nghỉ dưỡng, nhà máy và hạ tầng.",
      "Ricons was established in 2004 and is a Vietnamese construction company with experience across high-rise buildings, hotels, resorts, factories and infrastructure.",
    ),
    details: [
      lt(
        "PDFではLynn Times Thanh Thuyの請負・運営情報にRiconsが記載されています。",
        "PDF 在 Lynn Times Thanh Thuy 的承包与运营信息中列出 Ricons。",
        "PDF 在 Lynn Times Thanh Thuy 的承包與營運資訊中列出 Ricons。",
        "Profile PDF liệt kê Ricons trong thông tin nhà thầu và vận hành của Lynn Times Thanh Thủy.",
        "The PDF profile lists Ricons in contractor and operations information for Lynn Times Thanh Thuy.",
      ),
      lt(
        "高層温泉コンドテル、商業、リゾート施設における施工品質を支える役割です。",
        "其角色是支撑高层温泉公寓酒店、商业与度假设施的施工质量。",
        "其角色是支撐高層溫泉公寓飯店、商業與度假設施的施工品質。",
        "Vai trò là bảo đảm chất lượng thi công cho tổ hợp condotel khoáng nóng cao tầng, thương mại và nghỉ dưỡng.",
        "Its role is to support construction quality for high-rise hot spring condotel, commercial and resort facilities.",
      ),
    ],
    cooperation: lt(
      "Thanh Thuyの大規模温泉コンドテル開発を支える施工パートナー。",
      "支撑 Thanh Thuy 大规模温泉公寓酒店开发的施工伙伴。",
      "支撐 Thanh Thuy 大規模溫泉公寓飯店開發的施工夥伴。",
      "Đối tác thi công hỗ trợ phát triển condotel khoáng nóng quy mô lớn tại Thanh Thủy.",
      "Construction partner supporting large-scale hot spring condotel development in Thanh Thuy.",
    ),
    sources: [{ label: "Onsen Fuji Profile PDF 2025", url: "/assets/pdf-pages/lynntimes_thanh_thuy_1.jpg" }],
  },
  {
    slug: "coteccons",
    name: "Coteccons",
    group: "construction",
    logo: "/assets/partners/coteccons.jpg",
    website: "https://www.coteccons.vn/",
    summary: lt(
      "Dolce Penisola Quang Binhの総施工パートナー。",
      "Dolce Penisola Quang Binh 的总承包施工伙伴。",
      "Dolce Penisola Quang Binh 的總承包施工夥伴。",
      "Tổng thầu thi công của Dolce Penisola Quảng Bình.",
      "General construction contractor for Dolce Penisola Quang Binh.",
    ),
    companyOverview: lt(
      "Cotecconsは2004年から大規模で複雑な建設プロジェクトを実行してきたベトナムの主要建設会社で、施工、技術、安全、品質管理に強みがあります。",
      "Coteccons 是越南领先建筑企业,自 2004 年以来交付大量大型复杂项目,优势包括施工、技术、安全与质量管理。",
      "Coteccons 是越南領先建築企業,自 2004 年以來交付大量大型複雜項目,優勢包括施工、技術、安全與品質管理。",
      "Coteccons là một trong những công ty xây dựng hàng đầu Việt Nam, từ năm 2004 đã triển khai nhiều dự án quy mô lớn và phức tạp với thế mạnh về thi công, kỹ thuật, an toàn và quản lý chất lượng.",
      "Coteccons is one of Vietnam's leading construction companies, delivering large-scale and complex projects since 2004 with strengths in construction, engineering, safety and quality management.",
    ),
    details: [
      lt(
        "Onsen Fujiのプロジェクトページでは、Dolce Penisolaの総施工にCotecconsが記載されています。",
        "Onsen Fuji 项目页面列明 Coteccons 为 Dolce Penisola 的总承包施工单位。",
        "Onsen Fuji 項目頁面列明 Coteccons 為 Dolce Penisola 的總承包施工單位。",
        "Trang dự án của Onsen Fuji ghi Coteccons là tổng thầu thi công Dolce Penisola.",
        "Onsen Fuji's project page identifies Coteccons as the construction contractor for Dolce Penisola.",
      ),
      lt(
        "Cotecconsの公開資料にも、Onsen Fuji GroupのDolce Penisola Quang Binhプロジェクトが掲載されています。",
        "Coteccons 公开资料也列出 Onsen Fuji Group 的 Dolce Penisola Quang Binh 项目。",
        "Coteccons 公開資料也列出 Onsen Fuji Group 的 Dolce Penisola Quang Binh 項目。",
        "Tài liệu công khai của Coteccons cũng ghi nhận dự án Dolce Penisola Quảng Bình của Onsen Fuji Group.",
        "Coteccons public materials also list the Dolce Penisola Quang Binh project by Onsen Fuji Group.",
      ),
    ],
    cooperation: lt(
      "海岸部の6つ星ホテルコンドミニアム品質を支える建設パートナー。",
      "支撑滨海六星级酒店式公寓品质的建设伙伴。",
      "支撐濱海六星級飯店式公寓品質的建設夥伴。",
      "Đối tác xây dựng bảo chứng chất lượng cho tổ hợp căn hộ khách sạn 6 sao ven biển.",
      "Construction partner supporting the quality of the 6-star beachfront hotel apartment complex.",
    ),
    sources: [
      { label: "Onsen Fuji - Dolce Penisola", url: "https://onsenfuji.com.vn/du-an/dolce-penisola-quang-binh/" },
      { label: "Coteccons", url: "https://www.coteccons.vn/" },
    ],
  },
  {
    slug: "bm-windows",
    name: "BM Windows",
    group: "engineering",
    logo: "/assets/partners/bm-windows.jpg",
    website: "https://bmwindows.vn/",
    summary: lt(
      "Dolce Penisola Quang Binhに関わるファサード技術パートナー。",
      "参与 Dolce Penisola Quang Binh 的幕墙与外立面技术伙伴。",
      "參與 Dolce Penisola Quang Binh 的帷幕牆與外立面技術夥伴。",
      "Đối tác kỹ thuật mặt dựng liên quan đến Dolce Penisola Quảng Bình.",
      "Facade and envelope engineering partner associated with Dolce Penisola Quang Binh.",
    ),
    companyOverview: lt(
      "BM Windowsはベトナムのファサードエンジニアリングおよびアルミ・ガラスソリューション企業で、設計、材料、製造、施工、メンテナンスまで対応します。",
      "BM Windows 是越南幕墙工程与铝玻璃解决方案企业,覆盖设计、材料、制造、安装与维护。",
      "BM Windows 是越南帷幕牆工程與鋁玻璃解決方案企業,涵蓋設計、材料、製造、安裝與維護。",
      "BM Windows là doanh nghiệp giải pháp nhôm kính và kỹ thuật mặt dựng tại Việt Nam, cung cấp từ tư vấn thiết kế, vật liệu, sản xuất, lắp đặt đến bảo trì.",
      "BM Windows is a Vietnamese facade engineering and aluminum-glass solutions company covering design, material solutions, manufacturing, installation and maintenance.",
    ),
    details: [
      lt(
        "BM Windowsの公開プロジェクトリストにはDolce Penisola Quang Binhが掲載されています。",
        "BM Windows 公开项目列表中列有 Dolce Penisola Quang Binh。",
        "BM Windows 公開項目列表中列有 Dolce Penisola Quang Binh。",
        "Danh mục dự án công khai của BM Windows có Dolce Penisola Quảng Bình.",
        "BM Windows' public project portfolio lists Dolce Penisola Quang Binh.",
      ),
      lt(
        "ダイヤモンド形状の建築表現では、外装とファサードの施工精度がブランド体験に直結します。",
        "钻石建筑语言要求外立面与幕墙精度直接支撑品牌体验。",
        "鑽石建築語言要求外立面與帷幕牆精度直接支撐品牌體驗。",
        "Ngôn ngữ kiến trúc kim cương đòi hỏi độ chính xác mặt dựng gắn trực tiếp với trải nghiệm thương hiệu.",
        "The diamond architectural language makes facade precision directly tied to the brand experience.",
      ),
    ],
    cooperation: lt(
      "Dolce Penisolaの外装品質を支える技術パートナー。",
      "支撑 Dolce Penisola 外立面品质的技术伙伴。",
      "支撐 Dolce Penisola 外立面品質的技術夥伴。",
      "Đối tác kỹ thuật hỗ trợ chất lượng mặt dựng Dolce Penisola.",
      "Technical partner supporting Dolce Penisola facade quality.",
    ),
    sources: [{ label: "BM Windows", url: "https://bmwindows.vn/" }],
  },
  {
    slug: "sigma-engineering",
    name: "Sigma Engineering",
    group: "engineering",
    logo: "/assets/partners/sigma-engineering.jpg",
    website: "https://sigma.net.vn/",
    summary: lt(
      "建築設備・技術システムのパートナー。",
      "机电与技术系统合作伙伴。",
      "機電與技術系統合作夥伴。",
      "Đối tác cơ điện và hệ thống kỹ thuật.",
      "MEP and technical systems partner.",
    ),
    companyOverview: lt(
      "Sigma Engineering JSCは2005年設立のベトナムM&E専門企業で、工場、商業・住宅ビル、病院、発電所、空港など多様な施設にサービスを提供しています。",
      "Sigma Engineering JSC 成立于 2005 年,是越南本土 M&E 专业企业,服务工厂、商业住宅楼、医院、发电厂与机场等项目。",
      "Sigma Engineering JSC 成立於 2005 年,是越南本土 M&E 專業企業,服務工廠、商業住宅樓、醫院、發電廠與機場等項目。",
      "Sigma Engineering JSC thành lập năm 2005, là doanh nghiệp M&E Việt Nam phục vụ nhà máy, công trình thương mại - dân dụng, bệnh viện, nhà máy điện và sân bay.",
      "Sigma Engineering JSC was founded in 2005 and is a Vietnamese M&E specialist serving factories, commercial and residential buildings, hospitals, power plants and airports.",
    ),
    details: [
      lt(
        "PDFのパートナー一覧では、Onsen Fujiの技術・施工エコシステムを支える企業として掲載されています。",
        "PDF 合作伙伴列表将其列为支持 Onsen Fuji 技术与施工生态的企业。",
        "PDF 合作夥伴列表將其列為支撐 Onsen Fuji 技術與施工生態的企業。",
        "Danh sách đối tác trong PDF ghi nhận Sigma Engineering trong hệ sinh thái kỹ thuật và thi công của Onsen Fuji.",
        "The PDF partner list places Sigma Engineering in Onsen Fuji's technical and construction ecosystem.",
      ),
      lt(
        "温泉施設、ホテル、商業施設ではMEPシステムの安定性が運用品質を左右します。",
        "温泉、酒店与商业设施中,MEP 系统稳定性直接影响运营品质。",
        "溫泉、飯店與商業設施中,MEP 系統穩定性直接影響營運品質。",
        "Với công trình khoáng nóng, khách sạn và thương mại, độ ổn định MEP ảnh hưởng trực tiếp tới chất lượng vận hành.",
        "For hot spring, hotel and commercial facilities, MEP stability directly affects operating quality.",
      ),
    ],
    cooperation: lt(
      "複合施設の技術運営を支えるMEPパートナー。",
      "支撑综合体技术运营的 MEP 伙伴。",
      "支撐綜合體技術營運的 MEP 夥伴。",
      "Đối tác MEP hỗ trợ vận hành kỹ thuật cho tổ hợp phức hợp.",
      "MEP partner supporting technical operations for mixed-use complexes.",
    ),
    sources: [{ label: "Sigma Engineering", url: "https://sigma.net.vn/" }],
  },
  {
    slug: "udic",
    name: "UDIC",
    group: "engineering",
    logo: "/assets/partners/udic.jpg",
    website: "https://udic.com.vn/",
    summary: lt(
      "建設・都市インフラ領域のパートナー。",
      "建设与城市基础设施领域伙伴。",
      "建設與城市基礎設施領域夥伴。",
      "Đối tác trong lĩnh vực xây dựng và hạ tầng đô thị.",
      "Partner in construction and urban infrastructure.",
    ),
    companyOverview: lt(
      "UDICは都市インフラ開発・建設分野に関わるベトナム企業グループで、都市型プロジェクト、住宅、インフラ関連開発に知見を持ちます。",
      "UDIC 是越南城市基础设施开发与建设领域企业,具备城市项目、住宅与基础设施相关开发经验。",
      "UDIC 是越南城市基礎設施開發與建設領域企業,具備城市項目、住宅與基礎設施相關開發經驗。",
      "UDIC là doanh nghiệp Việt Nam trong lĩnh vực đầu tư phát triển hạ tầng đô thị và xây dựng, có kinh nghiệm ở dự án đô thị, nhà ở và hạ tầng.",
      "UDIC is a Vietnamese urban infrastructure development and construction enterprise with experience in urban projects, housing and infrastructure-related development.",
    ),
    details: [
      lt(
        "PDFのパートナー一覧に掲載され、Onsen Fujiの建設・技術ネットワークの一部を形成します。",
        "列于 PDF 合作伙伴页面,是 Onsen Fuji 建设与技术网络的一部分。",
        "列於 PDF 合作夥伴頁面,是 Onsen Fuji 建設與技術網絡的一部分。",
        "Được liệt kê trong trang đối tác của PDF, là một phần mạng lưới xây dựng và kỹ thuật của Onsen Fuji.",
        "Listed in the PDF partner page as part of Onsen Fuji's construction and technical network.",
      ),
      lt(
        "複合不動産では都市インフラと施工管理の知見がプロジェクト実装に重要です。",
        "综合地产项目需要城市基础设施与施工管理经验支撑落地。",
        "綜合地產項目需要城市基礎設施與施工管理經驗支撐落地。",
        "Các dự án phức hợp cần kinh nghiệm hạ tầng đô thị và quản lý thi công để triển khai hiệu quả.",
        "Mixed-use real estate projects require urban infrastructure and construction management experience for delivery.",
      ),
    ],
    cooperation: lt(
      "都市型・複合型プロジェクトを支える建設ネットワークパートナー。",
      "支撑城市型与综合型项目的建设网络伙伴。",
      "支撐城市型與綜合型項目的建設網絡夥伴。",
      "Đối tác mạng lưới xây dựng hỗ trợ dự án đô thị và phức hợp.",
      "Construction network partner supporting urban and mixed-use projects.",
    ),
    sources: [{ label: "UDIC", url: "https://udic.com.vn/" }],
  },
  {
    slug: "coninco",
    name: "CONINCO",
    group: "engineering",
    logo: "/assets/partners/coninco.jpg",
    website: "https://www.coninco.com.vn/",
    summary: lt(
      "Dolce Penisola Quang Binhに関わる建設監理パートナー。",
      "参与 Dolce Penisola Quang Binh 的建设监理伙伴。",
      "參與 Dolce Penisola Quang Binh 的建設監理夥伴。",
      "Đối tác tư vấn giám sát xây dựng liên quan đến Dolce Penisola Quảng Bình.",
      "Construction supervision partner associated with Dolce Penisola Quang Binh.",
    ),
    companyOverview: lt(
      "CONINCOは1979年に前身組織から発展したベトナムの建設コンサルティング企業で、監理、検査、プロジェクト管理分野で長年の実績があります。",
      "CONINCO 起源于 1979 年,是越南建设咨询企业,在监理、检验与项目管理领域拥有长期经验。",
      "CONINCO 起源於 1979 年,是越南建設諮詢企業,在監理、檢驗與項目管理領域擁有長期經驗。",
      "CONINCO có tiền thân từ năm 1979, là doanh nghiệp tư vấn xây dựng Việt Nam với kinh nghiệm lâu năm trong giám sát, kiểm định và quản lý dự án.",
      "CONINCO traces its origins to 1979 and is a Vietnamese construction consulting company with long experience in supervision, inspection and project management.",
    ),
    details: [
      lt(
        "CONINCO 3CはDolce Penisola Quang Binhの建設監理に関する公開記事を掲載しています。",
        "CONINCO 3C 发布了关于 Dolce Penisola Quang Binh 建设监理的公开文章。",
        "CONINCO 3C 發布了關於 Dolce Penisola Quang Binh 建設監理的公開文章。",
        "CONINCO 3C có bài viết công khai về công tác tư vấn giám sát xây dựng Dolce Penisola Quảng Bình.",
        "CONINCO 3C has published information about construction supervision for Dolce Penisola Quang Binh.",
      ),
      lt(
        "高層・海岸部プロジェクトでは、監理品質が安全性、進度、仕上げ品質を支えます。",
        "高层滨海项目中,监理质量支撑安全、进度与完成品质。",
        "高層濱海項目中,監理品質支撐安全、進度與完成品質。",
        "Với dự án cao tầng ven biển, chất lượng giám sát hỗ trợ an toàn, tiến độ và chất lượng hoàn thiện.",
        "For high-rise beachfront projects, supervision quality supports safety, schedule and finishing quality.",
      ),
    ],
    cooperation: lt(
      "Dolce Penisolaの品質管理を支える監理パートナー。",
      "支撑 Dolce Penisola 质量管理的监理伙伴。",
      "支撐 Dolce Penisola 品質管理的監理夥伴。",
      "Đối tác giám sát hỗ trợ quản lý chất lượng Dolce Penisola.",
      "Supervision partner supporting quality management for Dolce Penisola.",
    ),
    sources: [{ label: "CONINCO", url: "https://www.coninco.com.vn/" }],
  },
];

export function getPartner(slug: string) {
  return partners.find((partner) => partner.slug === slug);
}

