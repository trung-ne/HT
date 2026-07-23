import type { LocalizedText } from "@/lib/vietnam/i18n";

export type ProjectCategory = "resort" | "industrial" | "commercial" | "city-hotel";

export type ProjectSpec = {
  label: LocalizedText;
  value: string;
};

export type ProjectNewsItem = {
  title: LocalizedText;
  url?: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  overview?: LocalizedText;
  location: LocalizedText;
  locationDescription?: LocalizedText;
  category: ProjectCategory;
  area: string;
  scale: string;
  status: LocalizedText;
  hero: string;
  gallery: string[];
  highlights: LocalizedText[];
  amenities?: LocalizedText;
  documents?: { label: LocalizedText; url: string }[];
  news?: ProjectNewsItem[];
  specs: ProjectSpec[];
  sourcePages: number[];
};

const lt = (ja: string, zhCN: string, zhTW: string, vi: string, en: string): LocalizedText => ({
  ja,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  vi,
  en,
});

const specLabel = {
  location: lt("所在地", "位置", "位置", "Vị trí", "Location"),
  area: lt("敷地面積", "面积", "面積", "Diện tích", "Area"),
  scale: lt("規模", "规模", "規模", "Quy mô", "Scale"),
  product: lt("商品構成", "产品类型", "產品類型", "Sản phẩm", "Product type"),
  units: lt("ユニット数", "套数", "戶數", "Số lượng", "Units"),
  operation: lt("運営管理", "运营管理", "營運管理", "Vận hành", "Operation"),
  contractor: lt("施工業者", "施工单位", "施工單位", "Nhà thầu", "Contractor"),
  legal: lt("法的根拠", "法律依据", "法律依據", "Pháp lý", "Legal"),
  investment: lt("投資総額", "投资总额", "投資總額", "Tổng mức đầu tư", "Investment"),
  ownership: lt("所有期間", "产权期限", "產權期限", "Thời hạn sở hữu", "Ownership term"),
  handover: lt("引渡基準", "交付标准", "交付標準", "Tiêu chuẩn bàn giao", "Handover"),
  industries: lt("誘致産業", "重点产业", "重點產業", "Ngành nghề thu hút", "Target industries"),
};

const status = {
  operating: lt("運営・販売中", "运营及销售中", "營運及銷售中", "Đang vận hành/kinh doanh", "Operating / selling"),
  selling: lt("販売中", "热销中", "熱銷中", "Đang mở bán", "On sale"),
  comingSoon: lt("近日発売", "即将开盘", "即將開盤", "Sắp mở bán", "Coming soon"),
  developing: lt("開発中", "开发中", "開發中", "Đang phát triển", "In development"),
  planning: lt("計画中", "规划中", "規劃中", "Đang quy hoạch", "Planning"),
};

const p = "/assets/projects";
const pdf = "/assets/pdf-pages";

const allProjects: Project[] = [
  {
    slug: "lynntimes-thanh-thuy",
    title: lt("Lynn Times Thanh Thuy", "Lynn Times Thanh Thuy", "Lynn Times Thanh Thuy", "Lynn Times Thanh Thủy", "Lynn Times Thanh Thuy"),
    summary: lt(
      "ハノイ中心部から約65km、ダー川沿いの希少なラドン温泉鉱床上に位置する5つ星ウェルネスリゾート複合施設。",
      "距河内市中心约65公里,坐落于沱江沿线珍稀氡温泉矿床上的五星康养度假综合体。",
      "距河內市中心約65公里,坐落於沱江沿線珍稀氡溫泉礦床上的五星康養度假綜合體。",
      "Tổ hợp nghỉ dưỡng khoáng nóng Radon 5 sao tại Thanh Thủy, cách trung tâm Hà Nội khoảng 65km.",
      "A 5-star radon hot spring wellness complex in Thanh Thuy, about 65km from central Hanoi."
    ),
    overview: lt(
      "タインタイは年平均37〜53℃のラドン温泉を有するベトナム唯一の地。温泉観光は通年運営が可能で季節変動がなく、Lynntimesタインタイはベトナム初の5つ星温泉エンターテインメント複合施設を目指します。日本文化が色鮮やかに再現された公園や施設が来訪者を魅了します。\n\nラドン温泉水は骨・関節疾患、呼吸器疾患、心血管疾患の治癒を助け、特に癌予防効果があるとされています。冬は温かい湯が楽しめ、夏は山の緑と清涼な空気の中でリラックスできる年中無休のリゾートです。週末のみならず平日も高齢者を中心とした宿泊需要が高く、旅行会社が安価なデイツアーパッケージを人気販売中です。\n\n北部ベトナムの温泉観光市場は成長著しいものの、大規模かつ体系的な投資はまだ少なく、Lynntimesはこの市場の先駆的5つ星複合施設として新たなシンボルとなることを目指しています。",
      "清水拥有越南唯一的氡温泉，水温全年维持37-53°C，温泉旅游不受季节影响。氡温泉水有助于治疗骨关节病、呼吸道疾病、心血管疾病，尤其有助于预防癌症。冬季水温暖热，夏季环境清凉，山丘绿树成荫，一年四季皆宜度假。老年客群常年有需求，旅行社廉价日游套餐热销。越南北部温泉旅游市场蓬勃但缺乏大规模同步投资，Lynntimes清水致力成为越南首家5星温泉娱乐综合体，以日本文化为底蕴，打造独特的疗愈体验。",
      "清水擁有越南唯一的氡溫泉，水溫全年維持37-53°C，溫泉旅遊不受季節影響。氡溫泉水有助於治療骨關節病、呼吸道疾病、心血管疾病，尤其有助於預防癌症。冬季水溫暖熱，夏季環境清涼，山丘綠樹成蔭，一年四季皆宜度假。老年客群常年有需求，旅行社廉價日遊套餐熱銷。越南北部溫泉旅遊市場蓬勃但缺乏大規模同步投資，Lynntimes清水致力成為越南首家5星溫泉娛樂綜合體，以日本文化為底蘊，打造獨特的療癒體驗。",
      "1. Thanh Thủy là địa phương có tiềm năng phát triển thành công mô hình nghỉ dưỡng sinh thái và suối khoáng nóng chuẩn Nhật Bản\n\nThanh Thủy là địa phương có mạch suối khoáng nóng chất lượng hàng đầu với nhiệt độ được duy trì từ 37-53 độ, được đánh giá là tương đương với chất lượng suối khoáng nóng tại Nhật Bản.\nĐặc biệt khoáng nóng Thanh Thủy là nguồn khoáng nóng duy nhất tại Việt Nam chứa chất Randon giúp chữa các bệnh về Xương khớp, đường hô hấp, các bệnh về tim mạch và đặc biệt ngừa bệnh ung thư.\n\n2. Thanh Thủy – khu du lịch nghỉ dưỡng khoáng nóng sở hữu nhiều yếu tố vận hành khác biệt\n\n– Du lịch khoáng nóng phát triển quanh năm, không ảnh hưởng bởi yếu tố mùa vụ theo quy luật của du lịch miền Bắc.\n+ Mùa đông nước vẫn duy trì ở nhiệt độ ấm nóng\n+ Mùa hè nhiệt độ môi trường mát mẻ, với địa hình đồi núi và thảm thực vật xanh mát, trong lành.\n– Du lịch khoáng nóng diễn ra xuyên suốt cả tuần, không ảnh hưởng bởi quy luật vận hành du lịch sinh thái tuân theo hành vi khách hàng chỉ có nhu cầu nghỉ dưỡng vào cuối tuần.\n– Đặc biệt: Với du lịch khoáng nóng, xuất hiện tệp khách đặc trưng là người già, người lớn tuổi, có nhiều thời gian nghỉ dưỡng và có nhu cầu nghỉ dưỡng vào mọi thời điểm trong tuần.\nHiện tại các hãng du lịch lữ hành đang bán rất chạy các gói tour trong ngày giá rẻ thu hút tệp khách này.\n\n3. Bức tranh tổng quan du lịch khoáng nóng ở miền Bắc và Thanh Thủy\n\n– Đa dạng, đang phát triển, nhưng chưa có quy mô, sự đồng bộ và đầu tư\n– Du lịch suối khoáng nóng vẫn chưa thực sự bùng nổ và trở thành một trong những xu hướng nghỉ dưỡng được nhiều du khách biết tới\n– Nghỉ dưỡng suối khoáng nóng là thị trường du lịch đầy hứa hẹn với lượng khách hàng tiềm năng lớn\nLynntimes Thanh Thủy kỳ vọng sẽ trở thành biểu tượng mới với tiêu chuẩn khu Tổ hợp vui chơi giải trí và nghỉ dưỡng suối khoáng nóng 5 sao tiên phong tại Việt Nam. Với điểm nhấn là công viên suối khoáng nóng và dấu ấn văn hóa Nhật Bản được tái hiện sống động",
      "1. Thanh Thuy has the potential to successfully develop an eco-resort and Japanese-standard hot spring destination\n\nThanh Thuy has premier hot spring water maintained at 37–53°C, assessed as equivalent in quality to Japan's hot springs. Notably, Thanh Thuy is the ONLY hot spring in Vietnam containing Radon, which helps treat bone and joint disorders, respiratory diseases, cardiovascular conditions and particularly prevents cancer.\n\n2. Thanh Thuy – a hot spring resort with distinctly different operating advantages\n\n– Hot spring tourism thrives year-round, unaffected by Northern Vietnam's seasonal tourism patterns.\n+ Winter: water stays warm and soothing\n+ Summer: cool environment with verdant hills and fresh mountain air.\n– Hot spring tourism runs throughout the entire week, unlike eco-tourism which typically sees demand only on weekends.\n– Notably: hot spring tourism attracts a distinctive segment of elderly guests who have ample leisure time and a constant need for relaxation throughout the week.\nTravel agencies are currently selling affordable day-tour packages at high volume targeting this demographic.\n\n3. Overview of hot spring tourism in Northern Vietnam and Thanh Thuy\n\n– Diverse and growing, but lacking scale, cohesion and serious investment\n– Hot spring tourism has not yet fully exploded or become widely known as a major resort trend\n– Hot spring resort tourism is a promising market with a large pool of potential visitors\nLynntimes Thanh Thuy aspires to become a new icon – pioneering Vietnam's first 5-star hot spring entertainment and resort complex, with a hot spring theme park and vivid Japanese cultural experiences as its centerpiece"
    ),
    location: lt("Phu Tho省 Thanh Thuy郡 Bao Yen", "富寿省清水县保安社", "富壽省清水縣保安社", "Xã Bảo Yên, Thanh Thủy, Phú Thọ", "Bao Yen, Thanh Thuy, Phu Tho"),
    locationDescription: lt(
      "ハノイから大通り・タンロン経由65kmに位置。鉱床はバオイエン村に約1km²広がり、ダー川に沿って伸びています。温泉水の温度は平均37〜53°C、総貯留量19,710,000m³、日量採取483m³。ナトリウム・カルシウム・マグネシウム・ラドンを含む希少な温泉（ビンチャウ温泉と同格）で入浴・健康増進・治療に最適。\n■ ハノイ市中心まで60分\n■ ベットリー市まで30分\n■ コアンサン–スオイティエン観光地まで30分\n■ ホアビン市まで45分\n■ ダオゴックサン観光地まで2分",
      "距河内65公里，经昇龙大道。矿床位于保安村，面积约1km²，沿沱江分布。温泉水温37–53°C，总储量19,710,000m³，日采量483m³。富含钠、钙、镁及罕见氡元素（与平川温泉同级），适合沐浴、养生与治疗。\n■ 河内市中心 60分钟\n■ 越池市 30分钟\n■ 矿泉绿–水仙景区 30分钟\n■ 和平市 45分钟\n■ 翠玉岛景区 2分钟",
      "距河內65公里，經昇龍大道。礦床位於保安村，面積約1km²，沿沱江分佈。溫泉水溫37–53°C，總儲量19,710,000m³，日採量483m³。富含鈉、鈣、鎂及罕見氡元素（與平川溫泉同級），適合沐浴、養生與治療。\n■ 河內市中心 60分鐘\n■ 越池市 30分鐘\n■ 礦泉綠–水仙景區 30分鐘\n■ 和平市 45分鐘\n■ 翠玉島景區 2分鐘",
      "Chỉ cách Hà Nội 65km đi xe từ đại lộ Thăng Long. Mỏ nước khoáng phân bố trên diện tích chừng 1km² tại xã Bảo Yên, kéo dài theo hướng sông Đà. Nhiệt độ trung bình 37–53°C, tổng trữ lượng 19.710.000m³, lưu lượng khai thác đạt 483m³/ngày. Chứa natri, canxi, magiê và đặc biệt Radon – loại nước quý hiếm lần đầu phát hiện ở Việt Nam cùng suối khoáng Bình Châu.\n■ Cách trung tâm TP Hà Nội 60 phút\n■ Cách TP Việt Trì 30 phút\n■ Cách khu du lịch Khoáng Xanh–Suối Tiên 30 phút\n■ Cách TP Hòa Bình 45 phút\n■ Cách khu du lịch Đảo Ngọc Xanh 2 phút",
      "Located 65km from Hanoi via Thang Long Avenue. The mineral deposit spans ~1km² in Bao Yen commune, running along the Da River. Water temperature 37–53°C, total reserve 19,710,000m³, daily extraction 483m³. Contains sodium, calcium, magnesium and rare Radon (on par with Binh Chau hot spring), ideal for bathing, wellness and therapy.\n■ 60 min to Hanoi city centre\n■ 30 min to Viet Tri city\n■ 30 min to Khoang Xanh–Suoi Tien resort\n■ 45 min to Hoa Binh city\n■ 2 min to Dao Ngoc Xanh resort"
    ),
    category: "resort",
    area: "8,837.6 m2",
    scale: "35 floors, 2200+ condotel units",
    status: status.operating,
    hero: `${p}/lynntimes-thanh-thuy/ohayo-onsen-aerial-02.jpg`,
    gallery: [
      `${p}/lynntimes-thanh-thuy/tower-aerial-01.jpg`,
      `${p}/lynntimes-thanh-thuy/ohayo-onsen-aerial-01.jpg`,
      `${p}/lynntimes-thanh-thuy/mineral-pool-01.jpg`,
      `${p}/lynntimes-thanh-thuy/hotel-lobby-01.jpg`,
      `${p}/lynntimes-thanh-thuy/condotel-room-01.jpg`,
      `${p}/lynntimes-thanh-thuy/condotel-room-02.jpg`,
      `${p}/lynntimes-thanh-thuy/hokkaido-street-01.jpg`,
      `${p}/lynntimes-thanh-thuy/hokkaido-gate-01.jpg`,
      `${pdf}/lynntimes_thanh_thuy_1.jpg`,
      `${pdf}/hokkaido_street_1.jpg`,
    ],
    highlights: [
      lt(
        "温泉水の平均温度は37°C–53°C、総湧出量は約19,710,000m³、日量採取可能量は483m³。ナトリウム・カルシウム・マグネシウムを含み、ベトナム唯一のラドン含有泉（Binh Chau温泉と同格）。ラドンは骨・関節・呼吸器・心血管疾患の治癒と癌予防に効果的とされています。",
        "温泉水平均37°C–53°C，总涌出量约19,710,000m³，日可采量483m³。含钠、钙、镁及越南唯一的氡元素（与Binh Chau温泉同级），氡有助于治疗骨关节、呼吸道、心血管疾病，尤其有助于预防癌症。",
        "溫泉水平均37°C–53°C，總湧出量約19,710,000m³，日可採量483m³。含鈉、鈣、鎂及越南唯一的氡元素（與Binh Chau溫泉同級），氡有助於治療骨關節、呼吸道、心血管疾病，尤其有助於預防癌症。",
        "Nước khoáng nóng 37°C–53°C, tổng trữ lượng ~19.710.000m³, khai thác 483m³/ngày. Chứa natri, canxi, magiê và Radon – nguồn khoáng nóng DUY NHẤT tại Việt Nam có Radon (ngang hàng khoáng nóng Bình Châu). Radon giúp chữa xương khớp, hô hấp, tim mạch và đặc biệt ngừa ung thư.",
        "Hot spring water at 37°C–53°C, total reserve ~19,710,000m³, extractable 483m³/day. Contains sodium, calcium, magnesium and Radon – Vietnam's ONLY Radon hot spring (on par with Binh Chau). Radon is known to treat bone/joint, respiratory and cardiovascular diseases and notably prevent cancer."
      ),
      lt(
        "ハノイ中心部から車で60分（大通り・タンロン経由65km）。ダー川沿い1km²の鉱床。■ 60分: ハノイ市中心部 ■ 30分: ビエッチー市 ■ 30分: コアンサン–スオイティエン観光地 ■ 45分: ホアビン市 ■ 2分: ダオゴックサン観光地",
        "距河内市中心60分钟（沿昇龙大道65公里）。矿床沿沱江分布，面积约1km²。■ 60分: 河内市中心 ■ 30分: 越池市 ■ 30分: 矿泉绿-水仙景区 ■ 45分: 和平市 ■ 2分: 翠玉岛景区",
        "距河內市中心60分鐘（沿昇龍大道65公里）。礦床沿沱江分佈，面積約1km²。■ 60分: 河內市中心 ■ 30分: 越池市 ■ 30分: 礦泉綠-水仙景區 ■ 45分: 和平市 ■ 2分: 翠玉島景區",
        "Cách Hà Nội 65km qua đại lộ Thăng Long, mỏ khoáng 1km² tại Bảo Yên chạy dọc sông Đà. ■ 60 phút đến trung tâm TP Hà Nội ■ 30 phút đến TP Việt Trì ■ 30 phút đến khu du lịch Khoáng Xanh–Suối Tiên ■ 45 phút đến TP Hòa Bình ■ 2 phút đến khu du lịch Đảo Ngọc Xanh",
        "65km from Hanoi via Thang Long Avenue; 1km² mineral deposit at Bao Yen running along the Da River. ■ 60 min to Hanoi city centre ■ 30 min to Viet Tri ■ 30 min to Khoang Xanh–Suoi Tien ■ 45 min to Hoa Binh ■ 2 min to Dao Ngoc Xanh resort"
      ),
      lt(
        "5つ星設備が充実: 屋外温泉プール、KOI池、タン・ヴィエン山を望むパノラマ滝プール、温泉足湯カフェ、コンビニ、屋外・屋内オンセン、9.7haのLynn Times遊楽公園、3haの温泉公園。",
        "五星配套设施: 室外温泉泳池、锦鲤池、可俯瞰天冠山的Panorama瀑布泳池、泡脚温泉咖啡、便利店、室内外日式温泉、9.7公顷Lynn Times娱乐公园、3公顷温泉公园。",
        "五星配套設施: 室外溫泉泳池、錦鯉池、可俯瞰天冠山的Panorama瀑布泳池、泡腳溫泉咖啡、便利店、室內外日式溫泉、9.7公頃Lynn Times娛樂公園、3公頃溫泉公園。",
        "Tiện ích 5 sao đồng bộ: Hồ bơi khoáng nóng ngoài trời, hồ cá KOI, Bể bơi Panorama thác tràn view núi Tản Viên, Coffee ngâm chân suối nóng, Cửa hàng tiện ích, Tắm Onsen ngoài trời, Tắm Onsen trong nhà, Công viên giải trí Lynn Times 9,7ha, Công viên khoáng nóng Lynn Times 3ha.",
        "Full 5-star amenities: outdoor mineral pool, KOI pond, Panorama waterfall pool overlooking Tan Vien mountain, hot spring foot-soak coffee, convenience store, outdoor & indoor Onsen baths, 9.7ha Lynn Times entertainment park, 3ha hot spring theme park."
      ),
    ],
    amenities: lt(
      "屋外温泉プール、KOI池、タン・ヴィエン山望むパノラマ滝プール、温泉足湯カフェ、コンビニ、屋外オンセン、屋内オンセン、9.7ha Lynn Times遊楽公園、3ha温泉公園",
      "室外温泉泳池、锦鲤池、Panorama瀑布泳池（俯瞰天冠山）、泡脚温泉咖啡、便利店、室外日式温泉、室内日式温泉、9.7公顷Lynn Times娱乐公园、3公顷温泉公园",
      "室外溫泉泳池、錦鯉池、Panorama瀑布泳池（俯瞰天冠山）、泡腳溫泉咖啡、便利店、室外日式溫泉、室內日式溫泉、9.7公頃Lynn Times娛樂公園、3公頃溫泉公園",
      "Hồ bơi khoáng nóng ngoài trời · Hồ cá KOI · Bể bơi Panorama thác tràn view núi Tản Viên · Coffee ngâm chân suối nóng · Cửa hàng tiện ích · Tắm Onsen ngoài trời · Tắm Onsen trong nhà · Công viên giải trí Lynn Times 9,7ha · Công viên khoáng nóng Lynn Times 3ha",
      "Outdoor mineral pool · KOI pond · Panorama infinity pool with Tan Vien mountain view · Hot spring foot-soak café · Convenience store · Outdoor Onsen bath · Indoor Onsen bath · 9.7ha Lynn Times entertainment park · 3ha hot spring theme park"
    ),
    news: [
      { title: lt("Tại sao khoáng nóng Thanh Thủy là sự lựa chọn du lịch hàng đầu?", "为什么清水温泉是首选旅游目的地？", "為什麼清水溫泉是首選旅遊目的地？", "Tại sao khoáng nóng Thanh Thủy là sự lựa chọn du lịch hàng đầu?", "Why is Thanh Thuy hot spring a top tourism choice?") },
      { title: lt("Lynn Times Thanh Thủy – Tổ hợp khoáng nóng 5 sao tiên phong", "Lynn Times清水–越南首家五星温泉综合体", "Lynn Times清水–越南首家五星溫泉綜合體", "Lynn Times Thanh Thủy – Tổ hợp khoáng nóng 5 sao tiên phong", "Lynn Times Thanh Thuy – Pioneer 5-star hot spring complex") },
      { title: lt("Radon – Khoáng chất quý hiếm và lợi ích sức khỏe tại Thanh Thủy", "氡–清水稀有矿物质与健康功效", "氡–清水稀有礦物質與健康功效", "Radon – Khoáng chất quý hiếm và lợi ích sức khỏe tại Thanh Thủy", "Radon – The rare mineral and its health benefits at Thanh Thuy") },
      { title: lt("Hokkaido Street – Trải nghiệm Nhật Bản giữa lòng Việt Nam", "北海道街–在越南体验日本风情", "北海道街–在越南體驗日本風情", "Hokkaido Street – Trải nghiệm Nhật Bản giữa lòng Việt Nam", "Hokkaido Street – Japanese experience in the heart of Vietnam") },
      { title: lt("Du lịch khoáng nóng miền Bắc: Tiềm năng và cơ hội đầu tư", "越南北部温泉旅游：潜力与投资机遇", "越南北部溫泉旅遊：潛力與投資機遇", "Du lịch khoáng nóng miền Bắc: Tiềm năng và cơ hội đầu tư", "Northern Vietnam hot spring tourism: Potential and investment opportunity") },
      { title: lt("Condotel Lynn Times Thanh Thủy – Sản phẩm đầu tư sinh lời bền vững", "Lynn Times清水公寓式酒店–可持续盈利投资产品", "Lynn Times清水公寓式酒店–可持續盈利投資產品", "Condotel Lynn Times Thanh Thủy – Sản phẩm đầu tư sinh lời bền vững", "Lynn Times Thanh Thuy Condotel – A sustainably profitable investment") },
      { title: lt("Tổng quan pháp lý dự án Lynn Times Thanh Thủy", "Lynn Times清水项目法律概览", "Lynn Times清水項目法律概覽", "Tổng quan pháp lý dự án Lynn Times Thanh Thủy", "Lynn Times Thanh Thuy project legal overview") },
      { title: lt("Lễ khai trương Công viên khoáng nóng Lynn Times", "Lynn Times温泉公园开幕典礼", "Lynn Times溫泉公園開幕典禮", "Lễ khai trương Công viên khoáng nóng Lynn Times", "Lynn Times hot spring park grand opening") },
    ],
    specs: [
      { label: specLabel.location, value: "Phu Tho, Thanh Thuy, Bao Yen; 65km from Hanoi" },
      { label: specLabel.area, value: "8,837.6 m2" },
      { label: specLabel.scale, value: "35 floors" },
      { label: specLabel.product, value: "Condotel / hotel condominium" },
      { label: specLabel.units, value: "2200+ units" },
      { label: specLabel.legal, value: "Investment certificate No. 181023000319, issued 24/11/2009" },
      { label: specLabel.operation, value: "Lynn Times Thanh Thủy" },
      { label: specLabel.contractor, value: "Ricons" },
      { label: lt("建蔽率","建筑密度","建蔽率","Mật độ xây dựng","Building density"), value: "39.88%" },
      { label: lt("竣工","竣工时间","竣工時間","Hoàn thành","Completion"), value: "Q1/2022" },
    ],
    sourcePages: [13, 14, 15, 17, 18],
  },
  {
    slug: "tokyu-retreat-thanh-thuy",
    title: lt("Tokyu Retreat Thanh Thuy", "Tokyu Retreat Thanh Thuy", "Tokyu Retreat Thanh Thuy", "Tokyu Retreat Thanh Thủy", "Tokyu Retreat Thanh Thuy"),
    summary: lt("平安時代の精神性に着想を得た、天然温泉付きプライベートヴィラと国際会議センターのリゾートエリア。", "受日本平安时代精神启发,结合私享温泉别墅与国际会议中心的度假区域。", "受日本平安時代精神啟發,結合私享溫泉別墅與國際會議中心的度假區域。", "Khu biệt thự khoáng nóng riêng và trung tâm hội nghị quốc tế lấy cảm hứng từ tinh thần thời Heian.", "A private onsen villa and international conference retreat inspired by Japan's Heian spirit."),
    overview: lt(
      "日本の黄金時代・平安時代にインスパイアされたTokyu Retreat。タインタイのラドン鉱泉水（37〜53℃）が各ヴィラのHomes Spaに直接引き込まれます。Shishinden御園、Tendou広場、TSUKIクラブハウス、Shin Bar、Kuishin Restaurant、Haru Spa & Sauna、Tennou Fitness、Toshiro Kid Club – 8つの帝王的施設が救右ないリゾート体験を提供します。",
      "以日本平安时代为灵感，Tokyu Retreat将清水Radon温泉水（37-53°C）直接引入各别墅私享Homes Spa。Shishinden御苑、Tendou广场、TSUKI月光会所等8大帝王主题设施尽显尊贵气象。",
      "以日本平安時代為靈感，Tokyu Retreat將清水Radon溫泉水（37-53°C）直接引入各別墅私享Homes Spa。Shishinden御苑、Tendou広場、TSUKI月光會所等8大皇朝主題設施盡顯尊貴氣象。",
      "Lấy cảm hứng từ Heian – thời kỳ hoàng kim Nhật Bản, Tokyu Retreat là thế giới của những điều có thể. Nước khoáng nóng Radon Thanh Thủy (37-53°C) được dẫn trực tiếp vào Homes Spa riêng của từng biệt thự. Tám không gian biểu tượng – Vườn Shishinden, Quảng trường Tendou, Clubhouse TSUKI, Shin Bar, Kuishin Restaurant, Haru Spa & Sauna, Tennou Fitness & Yoga, Toshiro Kid Club – tạo nên trải nghiệm đẳng cấp hoàng gia.",
      "Inspired by Japan's Heian period golden age, Tokyu Retreat is a world of the possible. Radon spring water at 37-53°C flows into each villa's private Homes Spa. Eight signature venues – Shishinden Garden, Tendou Plaza, TSUKI Moon Clubhouse, Shin Bar, Kuishin Restaurant, Haru Spa & Sauna, Tennou Fitness & Yoga, and Toshiro Kid Club – deliver an imperial-class resort experience."
    ),
    location: lt("Phu Tho省 Thanh Thuy郡 Bao Yen", "富寿省清水县保安社", "富壽省清水縣保安社", "Bảo Yên, Thanh Thủy, Phú Thọ", "Bao Yen, Thanh Thuy, Phu Tho"),
    category: "resort",
    area: "9.6 ha",
    scale: "32 town villas, 206 five-star hot spring villas",
    status: status.selling,
    hero: `${p}/tokyu-retreat-thanh-thuy/private-onsen-villa-01.jpg`,
    gallery: [
      `${p}/tokyu-retreat-thanh-thuy/villa-masterplan-01.jpg`,
      `${p}/tokyu-retreat-thanh-thuy/resort-room-01.jpg`,
      `${p}/tokyu-retreat-thanh-thuy/private-onsen-therapy-01.jpg`,
      `${p}/tokyu-retreat-thanh-thuy/private-pool-01.jpg`,
      `${p}/tokyu-retreat-thanh-thuy/japanese-room-01.jpg`,
      `${pdf}/tokyu_retreat_1.jpg`,
      `${pdf}/tokyu_retreat_2.jpg`,
    ],
    highlights: [
      lt("各ヴィラはプライベート・オアシスとして設計され、天然温泉、自然療法、リゾートアートを融合します。", "每栋别墅如私享绿洲,融合天然温泉、自然疗法与度假艺术。", "每棟別墅如私享綠洲,融合天然溫泉、自然療法與度假藝術。", "Mỗi biệt thự như một ốc đảo riêng, kết hợp khoáng nóng, liệu pháp tự nhiên và nghệ thuật nghỉ dưỡng.", "Each villa is designed as a private oasis combining hot springs, natural therapy and resort art."),
    ],
    specs: [
      { label: specLabel.location, value: "Bao Yen, Thanh Thuy, Phu Tho" },
      { label: specLabel.area, value: "9.6 ha" },
      { label: specLabel.product, value: "Resort villas and shoptels above Radon hot spring deposits" },
      { label: specLabel.units, value: "206 villas and shoptels" },
      { label: specLabel.operation, value: "Lynn Times Thanh Thủy" },
      { label: specLabel.contractor, value: "Ricons" },
    ],
    locationDescription: lt(
      "清水の天然ラドン鉱泉（37–53°C）上に立地。ハノイ中心部からタンロン大通り経由65km・60分。ダー川とタインサン山を望むプレミアム・ヴィラ地区。\n■ ハノイ市中心まで60分\n■ ノイバイ国際空港まで90分\n■ LynnTimes温泉複合施設に隣接",
      "坐落于清水Radon温泉矿脉（37–53°C）核心，经昇龙大道距河内65公里仅需60分钟，俯瞰沱江与清山。\n■ 河内市中心 60分钟\n■ 内排国际机场 90分钟\n■ 紧邻LynnTimes温泉综合体",
      "坐落於清水Radon溫泉礦脈（37–53°C）核心，經昇龍大道距河內65公里僅需60分鐘，俯瞰沱江與清山。\n■ 河內市中心 60分鐘\n■ 內排國際機場 90分鐘\n■ 緊鄰LynnTimes溫泉綜合體",
      "Tọa lạc trên lõi mạch khoáng Radon Thanh Thủy (37–53°C), cách Hà Nội 65km qua đại lộ Thăng Long – 60 phút lái xe. Khu biệt thự nhìn ra sông Đà và núi Thanh Sơn.\n■ Cách trung tâm TP Hà Nội 60 phút\n■ Cách sân bay Nội Bài 90 phút\n■ Liền kề tổ hợp LynnTimes Thanh Thủy",
      "Sited above Thanh Thuy's Radon hot spring deposit (37–53°C), 65km from Hanoi via Thang Long Avenue – 60 min by car. Premium villa zone overlooking the Da River and Thanh Son Mountain.\n■ 60 min to Hanoi city centre\n■ 90 min to Noi Bai International Airport\n■ Adjacent to LynnTimes Thanh Thuy complex"
    ),
    amenities: lt(
      "Shishinden御園 · Tendou広場 · TSUKIクラブハウス · Shin Bar · Kuishin Restaurant · Haru Spa & Sauna · Tennou Fitness & Yoga · Toshiro Kid Club · プライベートHomes Spa",
      "Shishinden御苑 · Tendou广场 · TSUKI月光会所 · Shin Bar · Kuishin餐厅 · Haru Spa & Sauna · Tennou健身 · Toshiro儿童俱乐部 · 私享Homes Spa",
      "Shishinden御苑 · Tendou廣場 · TSUKI月光會所 · Shin Bar · Kuishin餐廳 · Haru Spa & Sauna · Tennou健身 · Toshiro兒童俱樂部 · 私享Homes Spa",
      "Vườn Shishinden · Quảng trường Tendou · Clubhouse TSUKI · Shin Bar · Kuishin Restaurant · Haru Spa & Sauna · Tennou Fitness & Yoga · Toshiro Kid Club · Homes Spa riêng biệt",
      "Shishinden Garden · Tendou Plaza · TSUKI Moon Clubhouse · Shin Bar · Kuishin Restaurant · Haru Spa & Sauna · Tennou Fitness & Yoga · Toshiro Kid Club · Private Homes Spa"
    ),
    news: [
      { title: lt("Tokyu Retreat – 平安時代にインスパイアされた温泉ヴィラ", "Tokyu Retreat – 以平安时代为灵感的温泉别墅", "Tokyu Retreat – 以平安時代為靈感的溫泉別墅", "Tokyu Retreat – Biệt thự khoáng nóng lấy cảm hứng thời Heian", "Tokyu Retreat – Hot spring villas inspired by Japan's Heian era") },
      { title: lt("プライベートHomes Spaとラドン鉱泉の健康効果", "私享Homes Spa与氡温泉的健康功效", "私享Homes Spa與氡溫泉的健康功效", "Homes Spa riêng và công dụng sức khỏe của khoáng nóng Radon", "Private Homes Spa and the health benefits of Radon hot spring") },
      { title: lt("8つのシグネチャー施設が演出する帝王的リゾート体験", "8大标志性设施打造的帝王级度假体验", "8大標誌性設施打造的帝王級度假體驗", "8 không gian biểu tượng tạo nên trải nghiệm đẳng cấp hoàng gia", "8 signature venues delivering an imperial resort experience") },
      { title: lt("Tokyu Retreatの投資価値と賃貸収益モデル", "Tokyu Retreat投资价值与租金收益分析", "Tokyu Retreat投資價值與租金收益分析", "Giá trị đầu tư và mô hình sinh lời từ Tokyu Retreat Thanh Thủy", "Tokyu Retreat investment value and rental income model") },
      { title: lt("会議・MICE需要が高まるタインタイ温泉リゾート", "清水温泉度假区MICE需求持续升温", "清水溫泉度假區MICE需求持續升溫", "Nhu cầu MICE và hội nghị tại khu nghỉ dưỡng khoáng nóng Thanh Thủy", "Rising MICE demand at Thanh Thuy hot spring resort") },
    ],
    sourcePages: [16, 19],
  },
  // dolce-penisola-quang-binh has been rebranded → lynn-times-quang-tri below
  {
    slug: "dolce-penisola-quang-binh",
    title: lt("Dolce Penisola Quang Binh", "Dolce Penisola Quang Binh", "Dolce Penisola Quang Binh", "Dolce Penisola Quảng Bình", "Dolce Penisola Quang Binh"),
    summary: lt("Nhat Leビーチ沿い初の国際6つ星ホテルコンドミニアム複合施設。ダイヤモンド建築がQuang Binhの新たなランドマークを形成します。", "日丽海滩首个国际六星酒店式公寓综合体,以钻石建筑塑造广平新地标。", "日麗海灘首個國際六星酒店式公寓綜合體,以鑽石建築塑造廣平新地標。", "Tổ hợp căn hộ khách sạn 6 sao đầu tiên bên biển Nhật Lệ, biểu tượng kim cương của Quảng Bình.", "The first international 6-star condotel complex on Nhat Le beach, shaped as a diamond landmark for Quang Binh."),
    location: lt("Quang Binh省 Dong Hoi市 Bao Ninh半島", "广平省同海市保宁半岛", "廣平省同海市保寧半島", "Bán đảo Bảo Ninh, TP. Đồng Hới, Quảng Bình", "Bao Ninh Peninsula, Dong Hoi, Quang Binh"),
    overview: lt(
      "クアンチーの多色ダイヤモンドの輝きに着想を得た、日レ川沿い初の6つ星コンドホテル複合施設。自然の恵みと歴史の誇りを凝縮した現代的ランドマークとして登場。現在のブランド名：Lynn Times Onsen Retreat Quảng Trị。",
      "以广治多彩钻石为灵感的日丽河畔首座六星综合体。自然恩赐与历史荣耀融于现代建筑。现已更名为Lynn Times Onsen Retreat Quảng Trị。",
      "以廣治多彩鑽石為靈感的日麗河畔首座六星綜合體。自然恩賜與歷史榮耀融於現代建築。現已更名為Lynn Times Onsen Retreat Quảng Trị。",
      "Tổ hợp căn hộ khách sạn 6 sao đầu tiên bên dòng Nhật Lệ, lấy cảm hứng từ những viên kim cương đa sắc của Quảng Trị. Biểu tượng cho những giá trị cao quý, thượng lưu và trường tồn. Hiện đã đổi tên thành Lynn Times Onsen Retreat Quảng Trị.",
      "The first 6-star condotel on the Nhat Le River, inspired by Quang Tri's multi-faceted diamonds. A modern landmark fusing natural gifts and storied history. Now rebranded as Lynn Times Onsen Retreat Quang Tri."
    ),
    category: "resort",
    area: "8,237 m2",
    scale: "2 towers, 29 floors + 1 basement",
    status: status.selling,
    hero: `${p}/dolce-penisola-quang-binh/diamond-tower-01.jpg`,
    gallery: [
      `${p}/dolce-penisola-quang-binh/glass-bottom-pool-01.jpg`,
      `${p}/dolce-penisola-quang-binh/award-best-beachfront-2021.jpg`,
      `${pdf}/dolce_penisola_quang_binh_1.jpg`,
    ],
    highlights: [
      lt("ガラス張りインフィニティプール、スカイウォーク橋、スパ、スカイバーなど50種類以上のラグジュアリー施設。", "拥有玻璃底无边泳池、空中步道、Spa、Sky Bar等50余项高端设施。", "擁有玻璃底無邊泳池、空中步道、Spa、Sky Bar等50餘項高端設施。", "Hơn 50 tiện ích cao cấp: bể bơi đáy kính vô cực, cầu kính Skywalk, spa, Sky Bar.", "More than 50 luxury amenities including glass-bottom infinity pool, skywalk bridge, spa and sky bar."),
      lt("Best Beachfront Resort Apartment Vietnam 2021を受賞。", "荣获Best Beachfront Resort Apartment Vietnam 2021。", "榮獲Best Beachfront Resort Apartment Vietnam 2021。", "Đạt giải Best Beachfront Resort Apartment Vietnam 2021.", "Winner of Best Beachfront Resort Apartment Vietnam 2021."),
    ],
    specs: [
      { label: specLabel.location, value: "Bao Ninh Peninsula, Dong Hoi, Quang Binh" },
      { label: specLabel.area, value: "8,237 m2" },
      { label: specLabel.scale, value: "2 towers, 29 floors + 1 basement" },
      { label: specLabel.product, value: "Condotel hotel, commercial shops" },
      { label: specLabel.units, value: "Approx. 1,500 hotel apartments; 71 low-rise commercial shops" },
      { label: specLabel.operation, value: "Dolce Hotels & Resorts" },
      { label: specLabel.contractor, value: "Coteccons" },
    ],
    locationDescription: lt(
      "保寧半島は西をニャットレ川、東をビエン東海に挟まれた戦略的景勝地。ドンホイ市中心へ橋を渡って5分。\n■ ドンホイ市中心まで5分\n■ サン・スパリゾートまで4km\n■ ドンホイ空港まで12km\n■ 2つの18ホールゴルフコースに隣接",
      "保宁半岛东临东海、西依日丽河，地理绝佳。过桥5分钟即达同海市中心。\n■ 同海市中心 5分钟\n■ Sun Spa Resort 4公里\n■ 同海机场 12公里\n■ 紧邻两座18洞高尔夫球场",
      "保寧半島東臨東海、西依日麗河，地理絕佳。過橋5分鐘即達同海市中心。\n■ 同海市中心 5分鐘\n■ Sun Spa Resort 4公里\n■ 同海機場 12公里\n■ 緊鄰兩座18洞高爾夫球場",
      "Bán đảo Bảo Ninh nằm giữa sông Nhật Lệ và biển Đông – vị trí chiến lược hiếm có. Qua cầu 5 phút là trung tâm TP Đồng Hới.\n■ Cách trung tâm TP Đồng Hới 5 phút\n■ Cách Sun Spa Resort 4km\n■ Cách sân bay Đồng Hới 12km\n■ Kề 2 sân golf 18 hố",
      "Bao Ninh Peninsula sits between the Nhat Le River and the East Sea – a rare strategic location. Cross the bridge and you're 5 minutes from Dong Hoi city centre.\n■ 5 min to Dong Hoi city centre\n■ 4km to Sun Spa Resort\n■ 12km to Dong Hoi Airport\n■ Adjacent to two 18-hole golf courses"
    ),
    amenities: lt(
      "ガラス底インフィニティプール · スカイウォーク橋 · スパ · スカイバー · オンセン · ジム・ヨガ · 会議センター · ショッピングモール · スーパーマーケット · 吊り庭園",
      "玻璃底无边泳池 · 空中步道 · 水疗中心 · Sky Bar · 日式温泉 · 健身瑜伽 · 会议中心 · 购物中心 · 超市 · 空中花园",
      "玻璃底無邊泳池 · 空中步道 · 水療中心 · Sky Bar · 日式溫泉 · 健身瑜伽 · 會議中心 · 購物中心 · 超市 · 空中花園",
      "Bể bơi đáy kính vô cực · Cầu kính Skywalk · Spa · Sky Bar · Onsen · Gym & Yoga · Trung tâm hội nghị · TTTM · Siêu thị · Vườn treo",
      "Glass-bottom infinity pool · Skywalk bridge · Spa · Sky Bar · Onsen · Gym & Yoga · Conference centre · Shopping mall · Supermarket · Hanging garden"
    ),
    news: [
      { title: lt("Dolce Penisola – ニャットレ川沿い初の6つ星コンドテル", "Dolce Penisola – 日丽河畔首座六星公寓酒店", "Dolce Penisola – 日麗河畔首座六星公寓酒店", "Dolce Penisola – Tổ hợp condotel 6 sao đầu tiên bên sông Nhật Lệ", "Dolce Penisola – The first 6-star condotel on the Nhat Le River") },
      { title: lt("Best Beachfront Resort Apartment Vietnam 2021受賞", "荣获Best Beachfront Resort Apartment Vietnam 2021", "榮獲Best Beachfront Resort Apartment Vietnam 2021", "Đạt giải Best Beachfront Resort Apartment Vietnam 2021", "Winner: Best Beachfront Resort Apartment Vietnam 2021") },
      { title: lt("50種類超のラグジュアリー施設が揃うプレミアムリゾート", "逾50项豪华设施尽显顶级度假风范", "逾50項豪華設施盡顯頂級度假風範", "Hơn 50 tiện ích quốc tế tạo nên đẳng cấp nghỉ dưỡng 6 sao", "50+ international luxury amenities define the 6-star resort experience") },
      { title: lt("クアンビン観光市場の急成長と投資機会", "广平旅游市场快速增长与投资机遇", "廣平旅遊市場快速增長與投資機遇", "Thị trường du lịch Quảng Bình tăng trưởng mạnh và cơ hội đầu tư", "Quang Binh tourism boom and investment opportunity") },
    ],
    sourcePages: [20],
  },
  {
    slug: "lynn-times-duyen-hai",
    title: lt("Lynn Times Onsen Retreat Hung Yen", "Lynn Times Onsen Retreat 兴安", "Lynn Times Onsen Retreat 興安", "Lynn Times Onsen Retreat Hưng Yên", "Lynn Times Onsen Retreat Hung Yen"),
    summary: lt("ハノイから90分の圏内、紅河デルタ地域の中心に位置する48haの大規模5星温泉リゾート。屋内外オンセン、泥浴、ウォーターパーク、商業施設を完備。", "距河内90分钟车程,坐落于红河三角洲中心的48公顷大型五星温泉度假村,配备室内外日式温泉、泥浴、水上乐园及商业设施。", "距河內90分鐘車程,坐落於紅河三角洲中心的48公頃大型五星溫泉度假村,配備室內外日式溫泉、泥浴、水上樂園及商業設施。", "Khu nghỉ dưỡng khoáng nóng 5 sao quy mô 48ha tại vùng đồng bằng sông Hồng, cách Hà Nội 90 phút, với hệ tiện ích onsen, bùn khoáng, công viên nước và thương mại.", "A 48ha 5-star hot spring resort in the Red River Delta, 90 minutes from Hanoi, with indoor/outdoor onsen, mud spa, water park and commercial facilities."),
    overview: lt(
      "ベトナム北部の温泉リゾート市場は急成長中だが大規模な一体形施設が不足しています。Lynn Times Onsen Retreat Hưng Yênはその空白を埋める存在。オンセン・泥浴・ウォーターパーク等5つ星施設を完備し、ハノイと北部平野を結ぶ戦略的立地で通年の癒し体験を提供します。",
      "越南北部温泉度假市场快速增长但缺乏大规模一体化设施。Lynn Times Onsen Retreat兴安填补这一空白，配备温泉、泥浴、水上乐园等5星设施，坐守连接河内与北部平原的战略要地。",
      "越南北部溫泉度假市場快速增長但缺乏大規模一體化設施。Lynn Times Onsen Retreat興安填補這一空白，配備溫泉、泥浴、水上樂園等5星設施，坐守連接河內與北部平原的戰略要地。",
      "Du lịch khoáng nóng miền Bắc đang bùng nổ nhưng thiếu vắng các tổ hợp quy mô lớn, đầu tư đồng bộ. Lynn Times Onsen Retreat Hưng Yên lấp đầy khoảng trống đó: hệ tiện ích 5 sao toàn diện từ trị liệu khoáng nóng, giải trí đến thương mại, tại vị trí chiến lược kết nối Hà Nội với các tỉnh đồng bằng sông Hồng trong bán kính 90 phút, 100% đường cao tốc.",
      "Northern Vietnam's hot spring tourism is booming but lacks large-scale integrated resorts. Lynn Times Onsen Retreat Hung Yen fills that gap: comprehensive 5-star amenities from thermal therapy to entertainment and commerce, at a strategic location connecting Hanoi to Red River Delta provinces within 90 minutes via 100% expressway."
    ),
    location: lt("Hung Yen省 Dien Haコミューン", "兴安省田河社", "興安省田河社", "Xã Diên Hà, Hưng Yên", "Dien Ha Commune, Hung Yen"),
    category: "resort",
    area: "48 ha",
    scale: "3,000+ products: 232 shophouse townhouses (3 floors), 700 hot spring apartments (12 floors)",
    status: status.comingSoon,
    hero: `${p}/lynn-times-duyen-hai/duyen-hai-aerial-01.jpg`,
    gallery: [`${pdf}/lynn_times_duyen_hai_1.jpg`, `${pdf}/project_list_1.jpg`],
    highlights: [
      lt("屋内外オンセン、泥浴・泥フィールド、砂埋め、水圧浴、足湯コーヒー、ウォーターパーク、プール等50種類以上の5星施設。", "室内外温泉、泥浴场、水压浴、足浴咖啡、水上乐园、泳池等50余项五星设施。", "室內外溫泉、泥浴場、水壓浴、足浴咖啡、水上樂園、泳池等50餘項五星設施。", "Hơn 50 tiện ích 5 sao: tắm onsen trong/ngoài trời, tắm bùn, đấu trường bùn, bể khoáng, ngâm chân suối nóng, công viên nước, food court.", "50+ 5-star amenities including indoor/outdoor onsen baths, mud spa, mud arena, mineral pools, foot-soak coffee, water park, food court."),
      lt("100%高速道路でハノイ・紅河デルタ各省と接続。90分圏内5大都市をカバー。", "100%高速公路连接河内及红河三角洲各省,90分钟覆盖周边5大城市。", "100%高速公路連接河內及紅河三角洲各省,90分鐘覆蓋周邊5大城市。", "Kết nối 100% cao tốc tới Hà Nội và các tỉnh ĐBSH trong bán kính 90 phút di chuyển.", "100% expressway connections to Hanoi and Red River Delta provinces within a 90-minute radius."),
    ],
    specs: [
      { label: specLabel.location, value: "Dien Ha Commune, Hung Yen" },
      { label: specLabel.area, value: "48 ha" },
      { label: specLabel.units, value: "3,000+ units: 232 shophouse townhouses (3F) + 700 hot spring apartments (12F)" },
      { label: lt("建蔽率","建筑密度","建蔽率","Mật độ xây dựng","Building density"), value: "50.64%" },
      { label: specLabel.investment, value: "Công ty Cổ phần Tập đoàn ONSEN FUJI" },
    ],
    locationDescription: lt(
      "ハノイから100%高速道路で90分以内。紅河デルタ中心部に位置し、5大都市（ハノイ・フンイエン・ナムディン・ハイズオン・タイビン）を60分圏で結ぶ流通ハブ。\n■ ハノイ市中心まで90分\n■ フンイエン省中心まで20分\n■ 高速道路直接アクセス",
      "距河内90分钟全程高速，位于红河三角洲中心，60分钟覆盖5大城市（河内、兴安、南定、海阳、太平）。\n■ 河内市中心 90分钟\n■ 兴安省中心 20分钟\n■ 全程高速接驳",
      "距河內90分鐘全程高速，位於紅河三角洲中心，60分鐘覆蓋5大城市（河內、興安、南定、海陽、太平）。\n■ 河內市中心 90分鐘\n■ 興安省中心 20分鐘\n■ 全程高速接駁",
      "Cách Hà Nội 90 phút, 100% cao tốc. Tọa lạc tại tâm điểm đồng bằng sông Hồng – bán kính 60 phút kết nối 5 thành phố lớn (Hà Nội, Hưng Yên, Nam Định, Hải Dương, Thái Bình).\n■ Cách trung tâm TP Hà Nội 90 phút\n■ Cách trung tâm tỉnh Hưng Yên 20 phút\n■ Tiếp cận trực tiếp cao tốc",
      "90 minutes from Hanoi via 100% expressway. Located at the heart of the Red River Delta, within a 60-minute radius of five major cities (Hanoi, Hung Yen, Nam Dinh, Hai Duong, Thai Binh).\n■ 90 min to Hanoi city centre\n■ 20 min to Hung Yen province centre\n■ Direct expressway access"
    ),
    amenities: lt(
      "屋外・屋内オンセン · 泥浴 · 泥フィールド · ウォーターパーク · 鉱泉プール · 足湯カフェ · フードコート · 商業ゾーン · キッズプレイグラウンド · イベントスペース",
      "室外及室内温泉 · 泥浴 · 泥场 · 水上乐园 · 矿泉泳池 · 足浴咖啡 · 美食广场 · 商业区 · 儿童乐园 · 活动空间",
      "室外及室內溫泉 · 泥浴 · 泥場 · 水上樂園 · 礦泉泳池 · 足浴咖啡 · 美食廣場 · 商業區 · 兒童樂園 · 活動空間",
      "Tắm onsen ngoài/trong trời · Tắm bùn · Đấu trường bùn · Công viên nước · Bể khoáng · Coffee ngâm chân · Food court · Khu thương mại · Khu vui chơi trẻ em · Không gian sự kiện",
      "Outdoor & indoor onsen · Mud spa · Mud arena · Water park · Mineral pools · Foot-soak café · Food court · Commercial zone · Kids playground · Event space"
    ),
    news: [
      { title: lt("Lynn Times Onsen Retreat Hưng Yên – 紅河デルタ初の大規模温泉リゾート", "Lynn Times Onsen Retreat兴安–红河三角洲首家大规模温泉度假区", "Lynn Times Onsen Retreat興安–紅河三角洲首家大規模溫泉度假區", "Lynn Times Onsen Retreat Hưng Yên – Khu nghỉ dưỡng khoáng nóng quy mô lớn đầu tiên tại ĐBSH", "Lynn Times Onsen Retreat Hung Yen – The first large-scale hot spring resort in the Red River Delta") },
      { title: lt("ウォーターパーク×温泉×商業施設が一体となった新たなリゾートモデル", "水上乐园×温泉×商业一体化的全新度假模式", "水上樂園×溫泉×商業一體化的全新度假模式", "Mô hình nghỉ dưỡng mới: Công viên nước × Onsen × Thương mại tích hợp", "New resort model: Water park × Onsen × Commercial integrated complex") },
      { title: lt("50種類以上の5つ星施設で通年需要を確保", "逾50项五星设施确保全年稳定客源", "逾50項五星設施確保全年穩定客源", "Hơn 50 tiện ích 5 sao đảm bảo khách lưu trú quanh năm", "50+ five-star amenities securing year-round occupancy") },
      { title: lt("Shophouse・コンドテル投資の収益性と流動性", "商铺及公寓酒店投资的收益性与流动性", "商鋪及公寓酒店投資的收益性與流動性", "Tính sinh lời và thanh khoản của shophouse & condotel tại Hưng Yên", "Shophouse and condotel investment returns and liquidity in Hung Yen") },
    ],
    sourcePages: [21],
  },
  {
    slug: "lynntimes-onsen-retreat-ha-nam",
    title: lt("Lynn Times Onsen Retreat Nam Ha Noi", "Lynn Times Onsen Retreat 南河内", "Lynn Times Onsen Retreat 南河內", "Lynn Times Onsen Retreat Nam Hà Nội", "Lynn Times Onsen Retreat Nam Ha Noi"),
    summary: lt("ハノイ南部、医療ハブ地域に位置する5.9haの温泉トリートメントヴィレッジ。ヴィラ、Shophouse、1,160戸のコンドテルを組み合わせた高級リゾート。", "位于河内南部医疗枢纽地区的5.9公顷温泉疗愈村落,融合别墅、商铺与1,160套公寓式酒店。", "位於河內南部醫療樞紐地區的5.9公頃溫泉療癒村落,融合別墅、商鋪與1,160套公寓式酒店。", "Làng trị liệu khoáng nóng 5,9ha tại vùng y tế Nam Hà Nội, gồm biệt thự, shophouse và 1.160 căn hộ khách sạn.", "A 5.9ha hot spring healing village in the medical hub south of Hanoi, combining villas, shophouses and 1,160 condotel units."),
    overview: lt(
      "ハノイ南部の医療ハブに隣接する温泉ヒーリングヴィレッジ。鉱泉の温もり、自然の光と空気が活力を与え、身体・心・魂のバランスを回復させます。Lynn Times Onsen Retreat Nam Hà Nộiは単なる宿泊施設を超えた、真の癒しと再生の場です。",
      "毗邻河内南部医疗枢纽的温泉疗愈村落。矿泉温热、自然光线与纯净空気共同滋养身心。不仅仅是住宿之所，更是真正的疗愈与再生之地。",
      "毗鄰河內南部醫療樞紐的溫泉療癒村落。礦泉溫熱、自然光線與純淨空氣共同滋養身心。不僅就是住宿之所，更是真正的療癒與再生之地。",
      "Làng trị liệu giữa vùng trung tâm y tế Nam Hà Nội. Hơi ấm khoáng chất, ánh sáng tự nhiên và không khí trong lành lan tỏa như nguồn năng lượng tái sinh. Lynn Times Onsen Retreat Nam Hà Nội không chỉ là nơi lưu trú – đây là điểm chạm cảm xúc, nơi con người tìm về sự cân bằng, tĩnh tại và nguồn sinh lực mới từ tinh túy của tự nhiên.",
      "A hot spring healing village in the medical hub south of Hanoi. Mineral warmth, natural light and clean air combine as a regenerative energy source. Lynn Times Onsen Retreat Nam Ha Noi is more than accommodation – it is an emotional sanctuary where visitors rediscover balance, stillness and vitality drawn from nature's essence."
    ),
    location: lt("Ninh Binh省 Liem Haコミューン", "宁平省廉河社", "寧平省廉河社", "Xã Liêm Hà, Ninh Bình", "Liem Ha Commune, Ninh Binh"),
    category: "resort",
    area: "5.9 ha",
    scale: "1,200+ products: villas, shophouses, 1,160 condotel units, 60 shop kiosks",
    status: status.comingSoon,
    hero: `${p}/lynntimes-onsen-retreat-ha-nam/masterplan-aerial-01.jpg`,
    gallery: [
      `${p}/lynntimes-onsen-retreat-ha-nam/shophouse-facade-01.jpg`,
      `${p}/lynntimes-onsen-retreat-ha-nam/villa-row-01.jpg`,
      `${p}/lynntimes-onsen-retreat-ha-nam/masterplan-top-01.jpg`,
      `${pdf}/lynntimes_onsen_retreat_1.jpg`,
      `${pdf}/lynntimes_onsen_retreat_2.jpg`,
    ],
    highlights: [
      lt("屋内外オンセン、泥浴、ウォーターパーク、足湯カフェ、食のコート、川沿い展望デッキなど充実したウェルネス施設。", "室内外温泉、泥浴、水上乐园、足浴咖啡、美食广场、滨河观景台等健康设施一应俱全。", "室內外溫泉、泥浴、水上樂園、足浴咖啡、美食廣場、濱河觀景台等健康設施一應俱全。", "Tiện ích wellness đầy đủ: onsen trong/ngoài trời, tắm bùn, công viên nước, ngâm chân cà phê, food court, cầu dạo ven sông.", "Full wellness facilities: indoor/outdoor onsen, mud spa, water park, foot-soak cafe, food court, riverside promenade."),
      lt("双子タワー2棟のコンドテルに加え、2階建てヴィラ、Shophouse、ショップキオスクの低層エリアを備えた複合開発。", "含双塔公寓式酒店与低层别墅、商铺、商亭区的综合开发。", "含雙塔公寓式酒店與低層別墅、商鋪、商亭區的綜合開發。", "Khu hỗn hợp gồm tháp cao condotel và khu thấp tầng biệt thự song lập, liền kề, shophouse thương mại.", "Mixed-use development with high-rise condotel towers plus low-rise twin villas, terraced villas and commercial shophouses."),
    ],
    specs: [
      { label: specLabel.location, value: "Liem Ha Commune, Ninh Binh" },
      { label: specLabel.area, value: "5.9 ha" },
      { label: specLabel.product, value: "Condotel, shophouses, twin villas, terraced villas" },
      { label: specLabel.units, value: "54 twin villas (120m²) + 12 twin villas (170m²) + 28 terraced villas + 36 shophouses + 1,160 condotel + 60 shop kiosks" },
      { label: lt("建蔽率","建筑密度","建蔽率","Mật độ xây dựng","Building density"), value: "35.7%" },
    ],
    locationDescription: lt(
      "ハノイ南部の医療ハブに隣接するニンビン省リエム・ハ村。首都医療圏の主要病院群から近く、治療後のリハビリ・回復リゾートとして最適。\n■ ハノイ市中心まで約60分\n■ ニンビン省中心まで20分\n■ 医療ハブ（バッチマイ、ビエットドック等）に近接",
      "毗邻河内南部医疗枢纽，位于宁平省廉河社。紧邻首都核心医院区，是治疗后康复疗养的理想之所。\n■ 距河内市中心约60分钟\n■ 距宁平省中心20分钟\n■ 毗邻医疗枢纽（白迈、越德等医院）",
      "毗鄰河內南部醫療樞紐，位於寧平省廉河社。緊鄰首都核心醫院區，是治療後康復療養的理想之所。\n■ 距河內市中心約60分鐘\n■ 距寧平省中心20分鐘\n■ 毗鄰醫療樞紐（白梅、越德等醫院）",
      "Nằm tại xã Liêm Hà, Ninh Bình – vùng y tế trọng điểm phía Nam Hà Nội. Gần các bệnh viện lớn của thủ đô, là điểm phục hồi lý tưởng sau điều trị.\n■ Cách trung tâm TP Hà Nội khoảng 60 phút\n■ Cách trung tâm tỉnh Ninh Bình 20 phút\n■ Gần cụm y tế trọng điểm (BV Bạch Mai, Việt Đức...)",
      "Located in Liem Ha commune, Ninh Binh – the medical hub zone south of Hanoi. Close to the capital's major hospitals, making it an ideal recovery and rehabilitation resort.\n■ ~60 min to Hanoi city centre\n■ 20 min to Ninh Binh province centre\n■ Near key medical facilities (Bach Mai, Viet Duc hospitals)"
    ),
    amenities: lt(
      "屋外・屋内オンセン · 泥浴 · ウォーターパーク · 足湯カフェ · フードコート · 川沿い展望デッキ · ヴィラ温泉プール · スパ · キッズゾーン · ジム",
      "室外及室内温泉 · 泥浴 · 水上乐园 · 足浴咖啡 · 美食广场 · 滨河观景台 · 别墅泳池 · Spa · 儿童区 · 健身房",
      "室外及室內溫泉 · 泥浴 · 水上樂園 · 足浴咖啡 · 美食廣場 · 濱河觀景台 · 別墅泳池 · Spa · 兒童區 · 健身房",
      "Tắm onsen ngoài/trong trời · Tắm bùn · Công viên nước · Coffee ngâm chân · Food court · Cầu dạo ven sông · Hồ bơi biệt thự · Spa · Kidzone · Gym",
      "Outdoor & indoor onsen · Mud spa · Water park · Foot-soak café · Food court · Riverside promenade · Villa pool · Spa · Kidzone · Gym"
    ),
    news: [
      { title: lt("Lynn Times Onsen Retreat Nam Hà Nội – 治癒と再生の温泉ヴィレッジ", "Lynn Times Onsen Retreat南河内–疗愈与再生的温泉村落", "Lynn Times Onsen Retreat南河內–療癒與再生的溫泉村落", "Lynn Times Onsen Retreat Nam Hà Nội – Làng trị liệu tái sinh", "Lynn Times Onsen Retreat Nam Ha Noi – A healing and regenerative hot spring village") },
      { title: lt("医療ハブ隣接立地が生む通年需要と安定収益", "毗邻医疗枢纽带来全年稳定需求与收益", "毗鄰醫療樞紐帶來全年穩定需求與收益", "Vị trí cạnh trung tâm y tế tạo nhu cầu ổn định quanh năm", "Medical hub adjacency drives year-round stable demand") },
      { title: lt("双子ヴィラ・テラスヴィラ・コンドテルの投資比較", "联排别墅、叠拼别墅与公寓酒店投资对比分析", "聯排別墅、疊拼別墅與公寓酒店投資對比分析", "So sánh đầu tư: biệt thự song lập, biệt thự liền kề và condotel", "Investment comparison: twin villas, terraced villas and condotels") },
      { title: lt("鉱泉療法が拓く健康保養ツーリズムの未来", "矿泉疗法开创健康养生旅游新格局", "礦泉療法開創健康養生旅遊新格局", "Liệu pháp khoáng nóng mở ra tương lai du lịch sức khỏe", "Mineral therapy shaping the future of health tourism") },
    ],
    sourcePages: [22, 23],
  },
  {
    slug: "lynntimes-dak-lak-the-coffee-town",
    title: lt("Lynn Times Phu Yen", "Lynn Times 富安", "Lynn Times 富安", "Lynn Times Phú Yên", "Lynn Times Phu Yen"),
    summary: lt("Da Rang川南岸の都市中心部に位置するベトナム初の商業・リゾート複合施設。ショップ、City Hotel、コンドテルが一体となりベトナム最長のプールが目玉。", "位于Da Rang河南岸城市核心区,越南首创商业度假综合体,集Shop、城市酒店与公寓式酒店于一体,坐拥越南最长超级泳池。", "位於Da Rang河南岸城市核心區,越南首創商業度假綜合體,集Shop、城市酒店與公寓式酒店於一體,坐擁越南最長超級泳池。", "Tổ hợp thương mại nghỉ dưỡng đầu tiên tại trung tâm Phú Yên, kết hợp Shop – City Hotel – Căn hộ khách sạn với siêu bể bơi dài bậc nhất Việt Nam.", "Vietnam's first commercial resort complex in central Phu Yen, combining shops, city hotels and condotels with Vietnam's longest pool."),
    overview: lt(
      "ダーラン川南岸のプライムロケーションに立つ、ベトナム初のショップ・シティホテル・コンドテル一体型商業リゾート。ベトナム最長の超巨大プールを目玉に、インターナショナルレベルの買い物と高級寿泊が融合します。",
      "坐落于Da Rang河南岸黄金地家，越南首创集Shop、城市酒店与公寓式酒店于一体的商业度假综合体。以越南最长超级泳池为核心，带动全新购物与生活方式体验。",
      "坐落於Da Rang河南岸黄金地家，越南首創集Shop、城市酒店與公寓式酒店於一體的商業度假綜合體。以越南最長超級泳池為核心，帶動全新購物與生活方式體驗。",
      "Sở hữu vị trí kim cương bờ Nam sông Đà Rằng, lõi trung tâm khu đô thị, Lynn Times Phú Yên là kiệt tác thương mại nghỉ dưỡng đầu tiên tại Việt Nam kết hợp Shop – City Hotel – Căn hộ khách sạn trong một tổng thể đa chiều. Điểm nhấn là siêu bể bơi dài bậc nhất Việt Nam – sức hút mua sắm và trải nghiệm chưa từng có, bừng sáng cả một vùng đất Phú trời Yên.",
      "On the prime south bank of the Da Rang River at the heart of the urban zone, Lynn Times Phu Yen is Vietnam's first combined Shop–City Hotel–Condotel commercial resort. Its centerpiece – Vietnam's longest super pool – anchors a shopping and lifestyle experience, illuminating the Phu Yen cityscape."
    ),
    location: lt("Phu Yen省 Tuy Hoa市 Phu Dong、Da Rang川南岸", "富安省绥和市富东,Da Rang河南岸", "富安省綏和市富東,Da Rang河南岸", "Phú Đông, TP. Tuy Hòa, Phú Yên, bờ Nam sông Đà Rằng", "Phu Dong, Tuy Hoa, Phu Yen, south bank of Da Rang River"),
    category: "commercial",
    area: "City center prime location",
    scale: "158 shophouses (5F), 10 City Hotel towers, 336 condotel units",
    status: status.selling,
    hero: `${pdf}/lynntimes_dak_lak_the_coffee_town_1.jpg`,
    gallery: [`${pdf}/lynntimes_dak_lak_the_coffee_town_1.jpg`],
    highlights: [
      lt("ベトナム最長のスーパープール、マリーナ、高級スパ、スカイバー、無限プール、5つ星レストランを備えた世界水準の複合施設。", "配备越南最长超级泳池、游艇码头、高端Spa、Sky Bar、无限泳池和五星餐厅。", "配備越南最長超級泳池、遊艇碼頭、高端Spa、Sky Bar、無限泳池和五星餐廳。", "Siêu bể bơi dài bậc nhất VN, bến du thuyền, Luxury Spa, Sky Bar, bể bơi vô cực, nhà hàng 5 sao quốc tế.", "Vietnam's longest super pool, marina, luxury spa, sky bar, infinity pool and 5-star international restaurants."),
      lt("大通りPhan Chu Trinhと都市開発地区のダブルフロンテージ。タップ・ニャン塔・ディエン・ホン公園から3分。空港・駅から5分圏内。", "临大道Phan Chu Trinh与城市开发区双路口,距塔塔、公园3分钟,距机场、火车站5分钟。", "臨大道Phan Chu Trinh與城市開發區雙路口,距塔塔、公園3分鐘,距機場、火車站5分鐘。", "Mặt tiền đại lộ Phan Chu Trinh & KĐT. 3 phút đến Tháp Nhạn; 5 phút đến sân bay, ga Tuy Hòa.", "Double frontage on Phan Chu Trinh Avenue and urban development zone. 3 min to Nhan Tower; 5 min to airport and station."),
    ],
    specs: [
      { label: specLabel.location, value: "Phu Dong Ward, Tuy Hoa, Phu Yen" },
      { label: specLabel.product, value: "Commercial shops (5F), City Hotel, condotel hotel apartments" },
      { label: specLabel.units, value: "158 shophouses + 10 City Hotels + 336 condotel units" },
      { label: specLabel.operation, value: "5-star international hotel brand" },
      { label: specLabel.ownership, value: "50 years" },
      { label: specLabel.handover, value: "Exterior finished, interior shell handover" },
    ],
    locationDescription: lt(
      "ダーラン川南岸の都市中心部ゴールドポジション。ファン・チュー・チン大通りと都市開発区のダブルフロンテージ。\n■ タップ・ニャン塔まで3分\n■ ホア空港まで5分\n■ トイホア駅まで5分\n■ ビーチまで徒歩10分",
      "坐拥Da Rang河南岸城市核心钻石地段，临大道Phan Chu Trinh及城市开发区双路口。\n■ 距塔塔3分钟\n■ 距机场5分钟\n■ 距绥和火车站5分钟\n■ 步行10分钟至海滩",
      "坐擁Da Rang河南岸城市核心鑽石地段，臨大道Phan Chu Trinh及城市開發區雙路口。\n■ 距塔塔3分鐘\n■ 距機場5分鐘\n■ 距綏和火車站5分鐘\n■ 步行10分鐘至海灘",
      "Vị trí kim cương bờ Nam sông Đà Rằng, lõi trung tâm khu đô thị. Mặt tiền đại lộ Phan Chu Trinh & khu đô thị mới.\n■ 3 phút đến Tháp Nhạn\n■ 5 phút đến sân bay Tuy Hòa\n■ 5 phút đến ga Tuy Hòa\n■ 10 phút đi bộ ra biển",
      "Diamond location on the south bank of the Da Rang River, at the heart of the urban zone. Double frontage on Phan Chu Trinh Avenue and the new urban development area.\n■ 3 min to Nhan Tower\n■ 5 min to Tuy Hoa Airport\n■ 5 min to Tuy Hoa Station\n■ 10-min walk to the beach"
    ),
    amenities: lt(
      "ベトナム最長スーパープール · マリーナ · ラグジュアリースパ · スカイバー · インフィニティプール · 5つ星レストラン · ショッピングセンター · ジム · キッズゾーン · イベントホール",
      "越南最长超级泳池 · 游艇码头 · 豪华Spa · Sky Bar · 无限泳池 · 五星餐厅 · 购物中心 · 健身房 · 儿童区 · 活动大厅",
      "越南最長超級泳池 · 遊艇碼頭 · 豪華Spa · Sky Bar · 無限泳池 · 五星餐廳 · 購物中心 · 健身房 · 兒童區 · 活動大廳",
      "Siêu bể bơi dài bậc nhất VN · Bến du thuyền · Luxury Spa · Sky Bar · Bể bơi vô cực · Nhà hàng 5 sao · TTTM · Gym · Kidzone · Hội trường sự kiện",
      "Vietnam's longest super pool · Marina · Luxury Spa · Sky Bar · Infinity pool · 5-star restaurant · Shopping centre · Gym · Kidzone · Event hall"
    ),
    news: [
      { title: lt("Lynn Times Phú Yên – ベトナム初のショップ・シティホテル・コンドテル複合体", "Lynn Times富安–越南首创Shop-城市酒店-公寓酒店综合体", "Lynn Times富安–越南首創Shop-城市酒店-公寓酒店綜合體", "Lynn Times Phú Yên – Tổ hợp Shop-City Hotel-Condotel đầu tiên tại Việt Nam", "Lynn Times Phu Yen – Vietnam's first Shop-City Hotel-Condotel complex") },
      { title: lt("ベトナム最長スーパープールがもたらす観光集客効果", "越南最长超级泳池带来的旅游吸引力分析", "越南最長超級泳池帶來的旅遊吸引力分析", "Siêu bể bơi dài bậc nhất Việt Nam – sức hút du lịch chưa từng có", "Vietnam's longest super pool – an unprecedented tourism draw") },
      { title: lt("フーイエン観光市場の高成長と将来性", "富安旅游市场高速增长与未来潜力", "富安旅遊市場高速增長與未來潛力", "Thị trường du lịch Phú Yên tăng trưởng cao và tiềm năng tương lai", "Phu Yen's fast-growing tourism market and future potential") },
      { title: lt("Shophouse投資: 158区画の商業フロンテージ価値", "商铺投资：158个商业门面单元的价值分析", "商鋪投資：158個商業門面單元的價值分析", "Đầu tư shophouse: giá trị 158 ô mặt tiền thương mại tại Phú Yên", "Shophouse investment: the value of 158 commercial frontage units in Phu Yen") },
    ],
    sourcePages: [25],
  },
  {
    slug: "quang-chu",
    title: lt("Quang Chu Industrial Park", "Quang Chu 工业园", "Quang Chu 工業園", "Khu công nghiệp Quảng Chư", "Quang Chu Industrial Park"),
    summary: lt("Bac Kan省Cho Moi郡Quang Chuコミューンの74.4ha工業団地。280工業区画と19サービス区画を計画。", "北𣴓省初买县广朱社74.4公顷工业园,规划280个工业地块和19个服务地块。", "北𣴓省初買縣廣朱社74.4公頃工業園,規劃280個工業地塊和19個服務地塊。", "Khu công nghiệp Quảng Chư 74,4ha tại Chợ Mới, Bắc Kạn, gồm 280 lô công nghiệp và 19 lô dịch vụ.", "A 74.4ha industrial park in Quang Chu, Cho Moi, Bac Kan with 280 industrial lots and 19 service lots."),
    overview: lt(
      "バックカン省の玄関口、世界トップクラスの工業中心から50km圏内に位置するCCNクアンチュー。安定した電力供給、2.5万m³/日の浄水、国際水準の通信インフラを完備。内外投資家の工場立地として2073年まで50年間の操業が保証されています。",
      "位于北𣴓省门户要冲，距世界顶级工业中心约50公里。CCN广朱具备稳定电力、2.5万m³/日净水、国际电信标准等完善基础设施，至2073年享有50年运营保障。",
      "位於北𣴓省門戶要衝，距世界頂級工業中心約50公里。CCN廣朱具備穩定電力、2.5萬 m³/日淨水、國際電信標準等完善基礎設施，至2073年享有50年營運保障。",
      "Nằm ở cửa ngõ tỉnh Bắc Kạn, cách các nhà máy sản xuất hàng đầu thế giới chỉ hơn 50km, CCN Quảng Chư có lợi thế trở thành địa điểm lý tưởng để xây dựng nhà máy cho nhà đầu tư trong và ngoài nước. Hạ tầng đồng bộ: điện liên tục 110/35Kv, nước sạch 25.000m³/ngày, xử lý nước thải 1.400m³/ngày công nghệ sinh học. Hoạt động 50 năm đến ngày 18/08/2073.",
      "Located at Bac Kan province's gateway, just over 50km from world-class manufacturing hubs, Quang Chu Industrial Cluster is the ideal factory site for domestic and foreign investors. Full infrastructure: continuous 110/35Kv power, 25,000m³/day clean water, 1,400m³/day biological wastewater treatment, international telecoms. 50-year license to 18/08/2073."
    ),
    location: lt("Bac Kan省 Cho Moi郡 Quang Chuコミューン", "北𣴓省初买县广朱社", "北𣴓省初買縣廣朱社", "Xã Quảng Chư, Chợ Mới, Bắc Kạn", "Quang Chu Commune, Cho Moi, Bac Kan"),
    category: "industrial",
    area: "74.4 ha",
    scale: "280 industrial lots, 19 service lots",
    status: status.selling,
    hero: `${p}/quang-chu/industrial-park-render-01.jpg`,
    gallery: [`${p}/quang-chu/industrial-park-render-02.jpg`, `${p}/quang-chu/siteplan.jpg`, `${pdf}/quang_chu_1.jpg`],
    highlights: [
      lt("工業区画は各1,500-2,000m2、サービス区画は各約1,500m2。", "工业地块每块1,500-2,000平方米,服务地块每块约1,500平方米。", "工業地塊每塊1,500-2,000平方米,服務地塊每塊約1,500平方米。", "Lô công nghiệp 1.500-2.000m2/lô, lô dịch vụ khoảng 1.500m2/lô.", "Industrial lots are 1,500-2,000m2 each; service lots are about 1,500m2 each."),
    ],
    specs: [
      { label: specLabel.location, value: "Quang Chu Commune, Cho Moi, Bac Kan" },
      { label: specLabel.area, value: "74.4 ha" },
      { label: specLabel.units, value: "280 industrial lots, 19 service lots" },
      { label: specLabel.industries, value: "Wood and bamboo processing; electronics, computers and optical equipment; metal products; food processing; paper products; chemicals" },
    ],
    locationDescription: lt(
      "バックカン省チョーモイ郡クアンチュー村。世界トップクラスの工業中心から50km以内。ハノイ・バックニン・タイグエン・バックザン・ランソン各省への幹線道路アクセス良好。\n■ ハノイ市中心まで約150km\n■ バックカン省中心まで30km\n■ タイグエン市まで50km",
      "位于北𣴓省初买县广朱社，距世界顶级工业中心约50公里。公路通达河内、北宁、太原、北江、谅山各省。\n■ 距河内市中心约150公里\n■ 距北𣴓省中心30公里\n■ 距太原市50公里",
      "位於北𣴓省初買縣廣朱社，距世界頂級工業中心約50公里。公路通達河內、北寧、太原、北江、諒山各省。\n■ 距河內市中心約150公里\n■ 距北𣴓省中心30公里\n■ 距太原市50公里",
      "Xã Quảng Chư, Chợ Mới, Bắc Kạn – cách các nhà máy hàng đầu thế giới chỉ hơn 50km. Kết nối thuận tiện tới Hà Nội, Bắc Ninh, Thái Nguyên, Bắc Giang, Lạng Sơn.\n■ Cách trung tâm TP Hà Nội khoảng 150km\n■ Cách trung tâm tỉnh Bắc Kạn 30km\n■ Cách TP Thái Nguyên 50km",
      "Quang Chu commune, Cho Moi, Bac Kan – within 50km of world-class manufacturing hubs. Road connections to Hanoi, Bac Ninh, Thai Nguyen, Bac Giang and Lang Son.\n■ ~150km from Hanoi city centre\n■ 30km from Bac Kan province centre\n■ 50km from Thai Nguyen city"
    ),
    amenities: lt(
      "電力110/35Kv連続供給 · 浄水25,000m³/日 · 生物処理排水1,400m³/日 · 国際通信インフラ · 道路・排水・街灯完備 · 50年操業ライセンス（〜2073年）",
      "110/35Kv持续供电 · 净水25,000m³/日 · 生物处理污水1,400m³/日 · 国际电信基础设施 · 道路排水路灯齐备 · 50年运营许可（至2073年）",
      "110/35Kv持續供電 · 淨水25,000m³/日 · 生物處理污水1,400m³/日 · 國際電信基礎設施 · 道路排水路燈齊備 · 50年營運許可（至2073年）",
      "Điện liên tục 110/35Kv · Nước sạch 25.000m³/ngày · Xử lý nước thải 1.400m³/ngày công nghệ sinh học · Hạ tầng viễn thông quốc tế · Đường, thoát nước, đèn đường đồng bộ · Giấy phép hoạt động 50 năm (đến 2073)",
      "Continuous 110/35Kv power · 25,000m³/day clean water · 1,400m³/day biological wastewater treatment · International telecoms · Full roads, drainage and street lighting · 50-year operating licence (to 2073)"
    ),
    news: [
      { title: lt("CCNクアンチュー – バックカン省の新しい工業投資拠点", "CCN广朱–北𣴓省全新工业投资中心", "CCN廣朱–北𣴓省全新工業投資中心", "CCN Quảng Chư – Điểm đầu tư công nghiệp mới tại Bắc Kạn", "CCN Quang Chu – Bac Kan's new industrial investment hub") },
      { title: lt("整備されたインフラで外資工場誘致を加速", "完善基础设施加速吸引外资工厂入驻", "完善基礎設施加速吸引外資工廠入駐", "Hạ tầng đồng bộ thúc đẩy thu hút nhà máy FDI", "Comprehensive infrastructure accelerates FDI factory attraction") },
      { title: lt("木材・電子・食品加工6業種の優先誘致政策", "木材、电子、食品加工等6大行业优先招商政策", "木材、電子、食品加工等6大行業優先招商政策", "Chính sách ưu tiên thu hút 6 ngành: gỗ, điện tử, thực phẩm, kim loại, hóa chất, giấy", "Priority attraction policy for 6 industries: wood, electronics, food, metal, chemicals, paper") },
      { title: lt("50年ライセンスが保証する長期的投資安全性", "50年运营许可保障长期投资安全性", "50年營運許可保障長期投資安全性", "Giấy phép 50 năm đảm bảo an toàn đầu tư dài hạn tại Quảng Chư", "50-year licence ensures long-term investment security at Quang Chu") },
    ],
    sourcePages: [28],
  },
  {
    slug: "tokyu-retreat-can-ho",
    title: lt("Tokyu Retreat – Thera Home", "Tokyu Retreat – Thera Home", "Tokyu Retreat – Thera Home", "Tokyu Retreat – Căn hộ Thera Home", "Tokyu Retreat – Thera Home Apartments"),
    summary: lt("タンティ郡の天然ラドン鉱泉地上に建つ26階・926戸のウェルネスアパートメント。四季を通じて鉱泉プールを楽しめるトリートメントレジデンス。", "坐落于氡温泉矿脉上的26层926套健康公寓,四季开放矿泉泳池的疗愈住宅。", "坐落於氡溫泉礦脈上的26層926套健康公寓,四季開放礦泉泳池的療癒住宅。", "Căn hộ trị liệu Thera Home 26 tầng, 926 căn, xây trên mỏ khoáng nóng Radon Thanh Thủy. Bể bơi khoáng nóng 4 mùa và tiện ích wellness đầy đủ.", "A 26-floor, 926-unit wellness apartment built above the Radon hot spring deposit in Thanh Thuy, with year-round mineral pools and full wellness amenities."),
    overview: lt(
      "タインタイ温泉の核心部に建つTokyu Retreatのコンドテルタワー。ダー川とタインサン山に抱かれた幎水的優良地に位置し、首都圏の治癒拠点として四季を通じた鉱泉プールと完備されたウェルネス施設が整います。ハノイ60分・ノイバイ空港90分の好アクセス。",
      "坐落于清水温泉矿脉核心的Tokyu Retreat公寓塔，背靠清山，面朝沱江，地处绝佳风水宝地。四季矿泉游泳池与完善的健康设施，距河内60分钟、内排机场90分钟。",
      "坐落於清水溫泉礦脈核心的Tokyu Retreat公寓塔，背靠清山，面朝沱江，地處絕佳風水寶地。四季礦泉游泳池與完善的健康設施，距河內60分鐘、內排機場90分鐘。",
      "Tọa lạc trên lõi mạch khoáng nóng Thanh Thủy, bao quanh bởi dòng Đà Giang và núi Thanh Sơn, Tokyu Retreat Thera Home hiện lên như viên ngọc sáng giữa vùng đất 'hội sơn – tụ thủy – tích phúc'. Dấu mốc của cửa ngõ trị liệu vùng Thủ đô – chốn an trú lý tưởng để hồi phục, tái tạo thân – tâm – trí giữa thiên nhiên nguyên bản.",
      "Situated above Thanh Thuy's Radon hot spring core, flanked by the Da River and Thanh Son Mountain, Tokyu Retreat Thera Home rises in a land of auspicious feng shui. This wellness gateway to the capital region offers year-round mineral pools and full amenities – an ideal sanctuary to restore body, mind and spirit amid pristine nature."
    ),
    location: lt("Phu Tho省 Thanh Thuy郡 区2", "富寿省清水县第2区", "富壽省清水縣第2區", "Khu 2, Thanh Thủy, Phú Thọ", "Zone 2, Thanh Thuy, Phu Tho"),
    category: "resort",
    area: "Part of Tokyu Retreat complex, 9.6 ha",
    scale: "1 tower, 26 floors, 926 units",
    status: status.comingSoon,
    hero: `${p}/tokyu-retreat-thanh-thuy/private-onsen-villa-01.jpg`,
    gallery: [
      `${p}/tokyu-retreat-thanh-thuy/private-onsen-therapy-01.jpg`,
      `${p}/tokyu-retreat-thanh-thuy/private-pool-01.jpg`,
    ],
    highlights: [
      lt("グランドロビー、四季対応鉱泉プール、ジム＆ロッカー、キッズゾーン、会議場・バンケット、スカイラウンジ等の充実した共用施設。", "配备大堂、四季矿泉泳池、健身房更衣室、儿童乐园、会议宴会厅及空中休息室等完善配套。", "配備大堂、四季礦泉泳池、健身房更衣室、兒童樂園、會議宴會廳及空中休息室等完善配套。", "Tiện ích đầy đủ: Grand Lobby, bể bơi khoáng nóng 4 mùa, gym & locker, Kidzone, hội nghị & ballroom, Sky lounge, vườn cảnh quan.", "Full amenities: Grand Lobby, year-round mineral pool, gym & lockers, Kidzone, conference & ballroom, sky lounge, landscape gardens."),
      lt("ハノイから60分、ラドン鉱泉直上の立地。Da川、Thanh Son山を望む風水的優良地に位置。", "距河内60分钟,坐落于氡温泉矿床之上,背靠青山,面朝沱江,风水绝佳。", "距河內60分鐘,坐落於氡溫泉礦床之上,背靠青山,面朝沱江,風水絕佳。", "Cách Hà Nội 60 phút, tọa lạc trên lõi mạch khoáng Radon, lưng tựa núi Thanh Sơn, mặt hướng sông Đà.", "60 minutes from Hanoi, sited directly above the Radon hot spring deposit, backed by Thanh Son mountain and facing the Da River."),
    ],
    specs: [
      { label: specLabel.location, value: "Zone 2, Thanh Thuy, Phu Tho" },
      { label: specLabel.scale, value: "1 tower, 26 floors" },
      { label: specLabel.units, value: "926 apartments (Thera Home condotel)" },
      { label: specLabel.investment, value: "Công ty Cổ phần Tập đoàn ONSEN FUJI" },
    ],
    locationDescription: lt(
      "タインタイ温泉鉱区2区、ラドン鉱泉直上。ダー川とタインサン山に囲まれた風水的優良地。ハノイから60分、ノイバイ空港から90分。\n■ ハノイ市中心まで60分\n■ ノイバイ国際空港まで90分\n■ LynnTimes温泉複合施設に直結",
      "位于清水温泉2区，坐落于氡温泉矿脉之上，背靠青山，面朝沱江，风水绝佳。距河内60分钟，内排机场90分钟。\n■ 河内市中心 60分钟\n■ 内排国际机场 90分钟\n■ 直连LynnTimes温泉综合体",
      "位於清水溫泉2區，坐落於氡溫泉礦脈之上，背靠青山，面朝沱江，風水絕佳。距河內60分鐘，內排機場90分鐘。\n■ 河內市中心 60分鐘\n■ 內排國際機場 90分鐘\n■ 直連LynnTimes溫泉綜合體",
      "Khu 2, Thanh Thủy – tọa lạc trên lõi mạch khoáng Radon, lưng tựa núi Thanh Sơn, mặt hướng sông Đà. Cách Hà Nội 60 phút, sân bay Nội Bài 90 phút.\n■ Cách trung tâm TP Hà Nội 60 phút\n■ Cách sân bay quốc tế Nội Bài 90 phút\n■ Kết nối trực tiếp tổ hợp LynnTimes Thanh Thủy",
      "Zone 2, Thanh Thuy – sited directly above the Radon hot spring deposit, backed by Thanh Son mountain and facing the Da River. 60 min from Hanoi, 90 min from Noi Bai Airport.\n■ 60 min to Hanoi city centre\n■ 90 min to Noi Bai International Airport\n■ Direct connection to LynnTimes Thanh Thuy complex"
    ),
    amenities: lt(
      "グランドロビー · 四季対応鉱泉プール · ジム＆ロッカー · キッズゾーン · 会議場＆バンケット · スカイラウンジ · 景観庭園 · 屋外オンセン · 温泉足湯",
      "Grand Lobby · 四季矿泉泳池 · 健身更衣室 · 儿童区 · 会议宴会厅 · 空中休息室 · 景观花园 · 室外温泉 · 足浴池",
      "Grand Lobby · 四季礦泉泳池 · 健身更衣室 · 兒童區 · 會議宴會廳 · 空中休息室 · 景觀花園 · 室外溫泉 · 足浴池",
      "Grand Lobby · Bể bơi khoáng nóng 4 mùa · Gym & Locker · Kidzone · Hội nghị & Ballroom · Sky Lounge · Vườn cảnh quan · Tắm onsen ngoài trời · Ngâm chân khoáng nóng",
      "Grand Lobby · Year-round mineral pool · Gym & Lockers · Kidzone · Conference & Ballroom · Sky Lounge · Landscape garden · Outdoor Onsen bath · Hot spring foot soak"
    ),
    news: [
      { title: lt("Thera Home – ラドン鉱泉の上に立つウェルネスアパートメント", "Thera Home–坐落于氡温泉矿床上的健康公寓", "Thera Home–坐落於氡溫泉礦床上的健康公寓", "Thera Home – Căn hộ wellness tọa lạc trên mỏ khoáng Radon", "Thera Home – Wellness apartments built above the Radon hot spring deposit") },
      { title: lt("四季対応鉱泉プールと治癒生活の提案", "四季矿泉泳池与疗愈生活方式的重新定义", "四季礦泉泳池與療癒生活方式的重新定義", "Bể bơi khoáng nóng 4 mùa – định nghĩa lại lối sống trị liệu", "Year-round mineral pool – redefining the therapeutic lifestyle") },
      { title: lt("926戸のコンドテルが生む賃貸市場と収益性", "926套公寓酒店的租赁市场与收益分析", "926套公寓酒店的租賃市場與收益分析", "926 căn condotel và thị trường cho thuê nghỉ dưỡng tại Thanh Thủy", "926-unit condotel and the resort rental market in Thanh Thuy") },
      { title: lt("Tokyu Retreat複合施設内の居住型投資の優位性", "Tokyu Retreat综合体内居住型投资的优势", "Tokyu Retreat綜合體內居住型投資的優勢", "Ưu thế đầu tư căn hộ lưu trú trong tổ hợp Tokyu Retreat", "The advantage of residential investment within the Tokyu Retreat complex") },
    ],
    sourcePages: [],
  },
  {
    slug: "lynn-times-quang-tri",
    title: lt("Lynn Times Onsen Retreat Quang Tri", "Lynn Times Onsen Retreat 广治", "Lynn Times Onsen Retreat 廣治", "Lynn Times Onsen Retreat Quảng Trị", "Lynn Times Onsen Retreat Quang Tri"),
    summary: lt("日レ川沿い初の6つ星ホテルコンドミニアム。ガラス底プール、空中橋、オンセン、ジンベ、クラブ等50種類超の施設を備えるプレミアムリゾート。", "日丽河畔首座六星酒店公寓,配备玻璃底泳池、空中天桥、温泉、韩式汗蒸、雪茄酒吧等50余项顶级设施。", "日麗河畔首座六星酒店公寓,配備玻璃底泳池、空中天橋、溫泉、韓式汗蒸、雪茄酒吧等50餘項頂級設施。", "Tổ hợp căn hộ khách sạn 6 sao đầu tiên bên sông Nhật Lệ với hơn 50 tiện ích quốc tế: bể bơi đáy kính, cầu kính Skywalk, Onsen & Jimjibang, Sky bar.", "The first 6-star condotel on the Nhat Le River with 50+ international amenities: glass-bottom pool, skywalk bridge, onsen & jimjibang, sky bar."),
    location: lt("Quang Binh省 Dong Hoi市 Bao Ninh半島", "广平省同海市保宁半岛", "廣平省同海市保寧半島", "Bảo Ninh, Đồng Hới, Quảng Bình", "Bao Ninh Peninsula, Dong Hoi, Quang Binh"),
    overview: lt(
      "クアンチーの多色ダイヤモンドの輝きに着想を得た、日レ川沿い初の6つ星コンドホテル複合施設。自然の恵みと歴史の誇りを凝縮した現代的ランドマークとして5以上の国際6つ星施設がクアンチーに新たな輝きをもたらします。",
      "以广治多彩钻石为灵感，日丽河畔首座六星酒店公寓综合体闪耀登场。凝聚自然恩赐与历史荣耀，50余项国际标准设施为广治书写新传奇。",
      "以廣治多彩鑽石為靈感，日麗河畔首座六星酒店公寓綜合體閃耀登場。凝聚自然恩賜與歷史榮耀，50餘項國際標準設施為廣治書寫新傳奇。",
      "Tổ hợp căn hộ khách sạn 6 sao đầu tiên bên dòng Nhật Lệ, lấy cảm hứng từ những viên kim cương đa sắc của Quảng Trị. Xuất hiện như một tuyệt tác BĐS nghỉ dưỡng kinh điển, Lynn Times Onsen Retreat Quảng Trị tỏa sáng tình yêu và niềm tự hào xứ sở. Sở hữu hơn 50 tiện ích 6 sao quốc tế: bể bơi đáy kính, cầu kính Skywalk, Onsen & Jimjibang, club xì gà, Skybar và Quảng trường biển.",
      "The first 6-star condotel complex on the Nhat Le River, inspired by Quang Tri's multi-faceted diamonds. Lynn Times Onsen Retreat Quang Tri emerges as a timeless resort masterpiece radiating local pride. Over 50 international 6-star amenities: glass-bottom pool, skywalk bridge, onsen & jimjibang, cigar club, sky bar and a beachside plaza."
    ),
    category: "resort",
    area: "8,236 m2",
    scale: "2 towers, 27 floors",
    status: status.selling,
    hero: `${p}/dolce-penisola-quang-binh/diamond-tower-01.jpg`,
    gallery: [
      `${p}/dolce-penisola-quang-binh/glass-bottom-pool-01.jpg`,
    ],
    highlights: [
      lt("50以上のリゾート施設：ガラス底プール、スカイウォーク橋、スパ、ジム、ヨガ、会議センター、商業施設、スーパーマーケット、オンセン、ジンベ、スカイバー等。", "50余项度假设施：玻璃底泳池、空中步道、Spa、健身、瑜伽、会议中心、商场、超市、温泉、汗蒸、Skybar等。", "50餘項度假設施：玻璃底泳池、空中步道、Spa、健身、瑜伽、會議中心、商場、超市、溫泉、汗蒸、Skybar等。", "Hơn 50 tiện ích: bể bơi đáy kính, Skywalk, Spa, Gym, Yoga, TTTM, siêu thị, Onsen & Jimjibang, club xì gà, khu vui chơi, Sky bar, vườn treo.", "50+ amenities: glass-bottom pool, skywalk bridge, spa, gym, yoga, conference center, shopping mall, supermarket, onsen & jimjibang, cigar club, amusement zone, sky bar, hanging garden."),
      lt("2つの18ホールゴルフコース隣接、日レ橋II直近。サン・スパリゾートへ4km、空港へ12km。", "紧邻两座18洞高尔夫球场及日丽桥II,距Sun Spa Resort 4公里,距机场12公里。", "緊鄰兩座18洞高爾夫球場及日麗橋II,距Sun Spa Resort 4公里,距機場12公里。", "Kế 2 sân Golf 18 hố, cầu Nhật Lệ II. Cách Sun Spa Resort 4km, sân bay Đồng Hới 12km.", "Adjacent to two 18-hole golf courses and Nhat Le II Bridge. 4km to Sun Spa Resort, 12km to Dong Hoi Airport."),
    ],
    specs: [
      { label: specLabel.location, value: "Bao Ninh, Dong Hoi, Quang Binh" },
      { label: specLabel.area, value: "8,236 m2" },
      { label: specLabel.scale, value: "2 towers, 27 floors" },
      { label: specLabel.product, value: "6-star condotel hotel, commercial shops" },
      { label: specLabel.contractor, value: "Coteccons" },
      { label: specLabel.investment, value: "Tập đoàn Onsen Fuji" },
    ],
    locationDescription: lt(
      "保寧半島は西をニャットレ川、東をビエン東海に挟まれた景勝地。ドンホイ市中心へ橋を渡って5分。\n■ ドンホイ市中心まで5分\n■ サン・スパリゾートまで4km\n■ ドンホイ空港まで12km\n■ 2つの18ホールゴルフコースに隣接",
      "保宁半岛坐落于日丽河与东海之间，过桥5分钟即达同海市中心。\n■ 同海市中心 5分钟\n■ Sun Spa Resort 4公里\n■ 同海机场 12公里\n■ 紧邻两座18洞高尔夫球场",
      "保寧半島坐落於日麗河與東海之間，過橋5分鐘即達同海市中心。\n■ 同海市中心 5分鐘\n■ Sun Spa Resort 4公里\n■ 同海機場 12公里\n■ 緊鄰兩座18洞高爾夫球場",
      "Bán đảo Bảo Ninh nằm giữa sông Nhật Lệ và biển Đông. Qua cầu 5 phút là trung tâm TP Đồng Hới.\n■ Cách trung tâm TP Đồng Hới 5 phút\n■ Cách Sun Spa Resort 4km\n■ Cách sân bay Đồng Hới 12km\n■ Kế 2 sân Golf 18 hố",
      "Bao Ninh Peninsula between the Nhat Le River and the East Sea. Cross the bridge and you're 5 minutes from Dong Hoi city centre.\n■ 5 min to Dong Hoi city centre\n■ 4km to Sun Spa Resort\n■ 12km to Dong Hoi Airport\n■ Adjacent to two 18-hole golf courses"
    ),
    amenities: lt(
      "ガラス底インフィニティプール · スカイウォーク橋 · スパ · ジム · ヨガ · 会議センター · ショッピングモール · スーパーマーケット · オンセン · ジンベ · シガークラブ · スカイバー · 吊り庭園 · ビーチサイド広場",
      "玻璃底无边泳池 · 空中步道 · Spa · 健身 · 瑜伽 · 会议中心 · 购物中心 · 超市 · 温泉 · 韩式汗蒸 · 雪茄酒吧 · Sky Bar · 空中花园 · 海滨广场",
      "玻璃底無邊泳池 · 空中步道 · Spa · 健身 · 瑜伽 · 會議中心 · 購物中心 · 超市 · 溫泉 · 韓式汗蒸 · 雪茄酒吧 · Sky Bar · 空中花園 · 海濱廣場",
      "Bể bơi đáy kính vô cực · Cầu kính Skywalk · Spa · Gym · Yoga · Trung tâm hội nghị · TTTM · Siêu thị · Onsen · Jimjibang · Club xì gà · Sky Bar · Vườn treo · Quảng trường biển",
      "Glass-bottom infinity pool · Skywalk bridge · Spa · Gym · Yoga · Conference centre · Shopping mall · Supermarket · Onsen · Jimjibang · Cigar club · Sky Bar · Hanging garden · Beachside plaza"
    ),
    news: [
      { title: lt("Lynn Times Onsen Retreat Quảng Trị – クアンチーの誇りを体現する6つ星コンドテル", "Lynn Times Quảng Trị–承载广治自豪的六星公寓酒店", "Lynn Times Quảng Trị–承載廣治自豪的六星公寓酒店", "Lynn Times Onsen Retreat Quảng Trị – Tổ hợp 6 sao tỏa sáng tình yêu xứ sở", "Lynn Times Onsen Retreat Quang Tri – A 6-star complex radiating local pride") },
      { title: lt("ガラス底プールとスカイウォーク橋が作るランドマーク体験", "玻璃底泳池与空中步道打造标志性体验", "玻璃底泳池與空中步道打造標誌性體驗", "Bể bơi đáy kính và cầu kính Skywalk tạo nên trải nghiệm biểu tượng", "Glass-bottom pool and skywalk bridge creating an iconic landmark experience") },
      { title: lt("50以上の6つ星施設が生む年間観光客誘致力", "逾50项六星设施带来的年度旅游吸引力", "逾50項六星設施帶來的年度旅遊吸引力", "Hơn 50 tiện ích 6 sao – sức hút du khách quanh năm", "50+ 6-star amenities – year-round tourist appeal") },
      { title: lt("クアンビン・クアンチー2省をつなぐ観光回廊の形成", "连接广平、广治两省的旅游走廊形成", "連接廣平、廣治兩省的旅遊走廊形成", "Hành lang du lịch kết nối Quảng Bình – Quảng Trị", "The forming tourism corridor linking Quang Binh and Quang Tri") },
      { title: lt("コテコンス施工による品質保証とブランド価値", "科技康斯施工的品质保证与品牌价值", "科技康斯施工的品質保證與品牌價值", "Chất lượng xây dựng Coteccons và giá trị thương hiệu dự án", "Coteccons construction quality assurance and project brand value") },
    ],
    sourcePages: [],
  },
  {
    slug: "lynn-times-thai-nguyen",
    title: lt("Lynn Times Thai Nguyen Commercial Center", "Lynn Times 太原商业中心", "Lynn Times 太原商業中心", "Lynn Times Thái Nguyên – Chợ thương mại KCN", "Lynn Times Thai Nguyen Commercial Center"),
    summary: lt("サムスンを含む主要工業団地労働者30万人に直接サービスを提供するタイグエン3産業拠点の中心に位置する商業キオスク開発。", "服务于泰原三大工业极点核心区、含三星等主要工厂30万工人的商业亭开发项目。", "服務於太原三大工業極點核心區、含三星等主要工廠30萬工人的商業亭開發項目。", "Phát triển kiot thương mại tại tâm điểm 3 cực công nghiệp Thái Nguyên, phục vụ trực tiếp 300.000 công nhân KCN bao gồm Samsung.", "Commercial kiosk development at the nexus of Thai Nguyen's three industrial zones, directly serving 300,000 workers including Samsung factories."),
    overview: lt(
      "タイグエン三大工業拠点の交点に位置する商業キオスクセンター。サムスンを含む30万人の工業団地労働者、100ha以上の大型居住エリアに日用品・料飲・雑貨を提供。ハノイ・タイグエン・バックニン・バックザン・ビンイエン60分圏の流通ハブです。",
      "位于太原三大工业极点核心的商业中心，服务于含三星在内的30万KCN工人及超过100公顷居住区居民。连接河内、太原、北宁、北江、永安5大城市60分钟流通圈。",
      "位於太原三大工業極點核心的商業中心，服務於含三星在內的30萬KCN工人及超過100公頃居住區居民。連接河內、太原、北寧、北江、永安5大城市60分鐘流通圈。",
      "3 lý do chủ chốt đầu tư: (1) Ki ốt thương mại phục vụ 300.000 công nhân KCN; (2) Kề đại quần thể cư dân – KĐT Yên Bình 100ha và khu dân cư Hồng Tiến 20ha; (3) Tâm điểm kết nối 5 thành phố lớn (Hà Nội, Thái Nguyên, Bắc Ninh, Bắc Giang, Vĩnh Yên) trong bán kính 60 phút. Nguồn cung hàng hóa và nhân lực đa dạng, tối ưu thời gian và chi phí.",
      "Three compelling investment reasons: (1) commercial kiosks serving 300,000 industrial zone workers; (2) adjacent to Yen Binh 100ha urban zone and Hong Tien 20ha residential area; (3) nexus connecting five major cities within 60 minutes. Optimised supply chain and diverse labour pool."
    ),
    location: lt("Thai Nguyen省 Pho Yen郡 Yen Binh工業団地前", "泰原省普安县,对面燕平工业区", "太原省普安縣,對面燕平工業區", "Đối diện KCN Yên Bình, Phổ Yên, Thái Nguyên", "Opposite Yen Binh Industrial Zone, Pho Yen, Thai Nguyen"),
    category: "commercial",
    area: "2,800 m2",
    scale: "Multi-floor commercial kiosk center: 8 floors",
    status: status.selling,
    hero: `${p}/quang-chu/industrial-park-render-01.jpg`,
    gallery: [`${p}/quang-chu/industrial-park-render-02.jpg`],
    highlights: [
      lt("ハノイ-タイグエン-バックカン-カオバン高速道路(CT07)から300mの立地。サムスン・フォイエン工業団地まで1km。", "距河内-太原-北𣴓-高平高速(CT07)300米,距三星普安工业区1公里。", "距河內-太原-北𣴓-高平高速(CT07)300米,距三星普安工業區1公里。", "Cách cao tốc Hà Nội – Thái Nguyên – Bắc Kạn – Cao Bằng (CT07) 300m, cách KCN Samsung Phổ Yên 1km.", "300m from Hanoi–Thai Nguyen–Bac Kan–Cao Bang expressway (CT07); 1km from Samsung Pho Yen industrial zone."),
      lt("消費・ファッション・家電・食品・コスメ・薬局・医療機器が揃う8階建て複合商業施設。最上層(5〜8F)は24時間営業のフードコート。", "8层综合商业中心,含消费、时装、家电、食品、美妆、药店、医疗器械,高层(5-8楼)为24小时美食广场。", "8層綜合商業中心,含消費、時裝、家電、食品、美妝、藥店、醫療器械,高層(5-8樓)為24小時美食廣場。", "Trung tâm thương mại 8 tầng: tiêu dùng, thời trang, gia dụng, thực phẩm, mỹ phẩm, nhà thuốc, thiết bị y tế. Tầng 5-8 là khu ẩm thực 24/7.", "8-floor commercial center: consumer goods, fashion, appliances, food, cosmetics, pharmacy, medical devices. Floors 5-8 are 24/7 food halls."),
    ],
    specs: [
      { label: specLabel.location, value: "Opposite Yen Binh Industrial Zone, Pho Yen, Thai Nguyen" },
      { label: specLabel.area, value: "2,800 m2" },
      { label: specLabel.product, value: "Commercial kiosks (kiot bán hàng)" },
      { label: specLabel.investment, value: "Công ty Cổ phần Tập đoàn Onsen Fuji" },
    ],
    locationDescription: lt(
      "ハノイ−タイグエン−バックカン−カオバン高速(CT07)から300m。サムスン・フォイエン工業団地まで1km。ファンイエン省、イエンビン100ha都市区、ホンティエン20ha居住区に隣接。\n■ ハノイ市中心まで60分\n■ タイグエン市まで15分\n■ サムスン工業団地まで1km\n■ 高速道路まで300m",
      "距河内-太原-北𣴓-高平高速(CT07)300米，距三星普安工业区1公里，紧邻燕平100公顷城市区及鸿进20公顷居民区。\n■ 距河内市中心60分钟\n■ 距太原市15分钟\n■ 距三星工业区1公里\n■ 距高速公路300米",
      "距河內-太原-北𣴓-高平高速(CT07)300米，距三星普安工業區1公里，緊鄰燕平100公頃城市區及鴻進20公頃居民區。\n■ 距河內市中心60分鐘\n■ 距太原市15分鐘\n■ 距三星工業區1公里\n■ 距高速公路300米",
      "Cách cao tốc Hà Nội–Thái Nguyên–Bắc Kạn–Cao Bằng (CT07) 300m, cách KCN Samsung Phổ Yên 1km. Kề KĐT Yên Bình 100ha và khu dân cư Hồng Tiến 20ha.\n■ Cách trung tâm TP Hà Nội 60 phút\n■ Cách TP Thái Nguyên 15 phút\n■ Cách KCN Samsung 1km\n■ Cách cao tốc 300m",
      "300m from the Hanoi–Thai Nguyen–Bac Kan–Cao Bang expressway (CT07), 1km from Samsung Pho Yen industrial zone. Adjacent to Yen Binh 100ha urban zone and Hong Tien 20ha residential area.\n■ 60 min to Hanoi city centre\n■ 15 min to Thai Nguyen city\n■ 1km from Samsung industrial zone\n■ 300m from the expressway"
    ),
    amenities: lt(
      "消費・ファッション・家電 · 食品・飲料 · コスメ · 薬局 · 医療機器 · 24時間フードコート(5〜8F) · 駐車場 · エレベーター完備 · 防犯セキュリティ",
      "消费 · 时装 · 家电 · 食品饮料 · 美妆 · 药店 · 医疗器械 · 24小时美食广场(5-8楼) · 停车场 · 电梯 · 安防系统",
      "消費 · 時裝 · 家電 · 食品飲料 · 美妝 · 藥店 · 醫療器械 · 24小時美食廣場(5-8樓) · 停車場 · 電梯 · 安防系統",
      "Tiêu dùng · Thời trang · Gia dụng · Thực phẩm & đồ uống · Mỹ phẩm · Nhà thuốc · Thiết bị y tế · Khu ẩm thực 24/7 (tầng 5-8) · Bãi đỗ xe · Thang máy · Hệ thống an ninh",
      "Consumer goods · Fashion · Appliances · Food & beverages · Cosmetics · Pharmacy · Medical devices · 24/7 food hall (floors 5-8) · Parking · Lifts · Security system"
    ),
    news: [
      { title: lt("タイグエン工業ゾーン30万人労働者の消費需要を取り込む", "把握太原工业区30万工人的消费需求", "把握太原工業區30萬工人的消費需求", "Nắm bắt nhu cầu tiêu dùng của 300.000 công nhân KCN Thái Nguyên", "Capturing the consumer demand of 300,000 Thai Nguyen industrial workers") },
      { title: lt("サムスン工業団地1km圏の商業不動産投資優位性", "距三星工业区1公里的商业地产投资优势", "距三星工業區1公里的商業地產投資優勢", "Ưu thế đầu tư BĐS thương mại cách KCN Samsung 1km", "Commercial real estate investment advantage 1km from Samsung industrial zone") },
      { title: lt("24時間フードコートが生む安定したキャッシュフロー", "24小时美食广场带来稳定现金流", "24小時美食廣場帶來穩定現金流", "Khu ẩm thực 24/7 tạo dòng tiền ổn định từ kiốt thương mại", "24/7 food hall generating stable cash flow from commercial kiosks") },
      { title: lt("イエンビン都市区の急成長と商業需要の拡大", "燕平城市区快速发展与商业需求扩大", "燕平城市區快速發展與商業需求擴大", "Tăng trưởng nhanh của KĐT Yên Bình và sự mở rộng nhu cầu thương mại", "Yen Binh urban zone's rapid growth and expanding commercial demand") },
    ],
    sourcePages: [],
  },
];

export const projects: Project[] = allProjects.filter((project) =>
  [
    "lynntimes-thanh-thuy",
    "lynn-times-duyen-hai",
    "lynntimes-onsen-retreat-ha-nam",
    "lynn-times-quang-tri",
  ].includes(project.slug)
);

export function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

