export type MediaAsset = {
  src: string;
  alt: string;
  source: "pdf-page" | "du-an";
  confidence: "high" | "medium" | "low";
};

export const media = {
  brandCover: {
    src: "/assets/pdf-pages/cover_1.jpg",
    alt: "Onsen Fuji corporate profile cover",
    source: "pdf-page",
    confidence: "high",
  },
  homeHero: {
    src: "/assets/projects/lynntimes-thanh-thuy/ohayo-onsen-aerial-02.jpg",
    alt: "Aerial view of Japanese-style onsen resort at Lynn Times Thanh Thuy",
    source: "du-an",
    confidence: "high",
  },
  thanhThuyTower: {
    src: "/assets/projects/lynntimes-thanh-thuy/tower-view.jpg",
    alt: "Lynn Times Thanh Thuy condotel tower",
    source: "du-an",
    confidence: "medium",
  },
  thanhThuyRender: {
    src: "/assets/projects/lynntimes-thanh-thuy/resort-render.jpg",
    alt: "Lynn Times Thanh Thuy resort rendering",
    source: "du-an",
    confidence: "medium",
  },
  dolceHero: {
    src: "/assets/pdf-pages/dolce_penisola_quang_binh_1.jpg",
    alt: "Dolce Penisola Quang Binh beachfront resort tower",
    source: "pdf-page",
    confidence: "high",
  },
  dolceAward: {
    src: "/assets/projects/dolce-penisola-quang-binh/award-card.jpg",
    alt: "Dolce Penisola Quang Binh award image",
    source: "du-an",
    confidence: "high",
  },
  culture: {
    src: "/assets/pdf-pages/culture_1.jpg",
    alt: "Onsen Fuji corporate culture",
    source: "pdf-page",
    confidence: "high",
  },
  awards: {
    src: "/assets/pdf-pages/awards_1.jpg",
    alt: "Onsen Fuji awards profile page",
    source: "pdf-page",
    confidence: "high",
  },
  csrBlood: {
    src: "/assets/csr/blood-donation.jpg",
    alt: "Onsen Fuji blood donation CSR event",
    source: "du-an",
    confidence: "high",
  },
  csrRelief: {
    src: "/assets/csr/relief-fund.jpg",
    alt: "Onsen Fuji disaster relief CSR event",
    source: "du-an",
    confidence: "high",
  },
  csrMedical: {
    src: "/assets/csr/medical-donation.jpg",
    alt: "Onsen Fuji medical donation CSR event",
    source: "du-an",
    confidence: "high",
  },
  partners: {
    src: "/assets/pdf-pages/strategic_partners_1.jpg",
    alt: "Onsen Fuji strategic partners",
    source: "pdf-page",
    confidence: "high",
  },
} satisfies Record<string, MediaAsset>;

export const assetManifest = [
  {
    originalFile: "banner_019.jpg",
    normalizedFile: "projects/lynntimes-thanh-thuy/ohayo-onsen-aerial-02.jpg",
    source: "du-an",
    pageNumber: 13,
    section: "project",
    projectSlug: "lynntimes-thanh-thuy",
    usage: "hero",
    confidence: "high",
    reason: "Aerial onsen image visually matches Thanh Thuy resort pages.",
  },
  {
    originalFile: "project_dolce_quang_binh_001.jpg",
    normalizedFile: "projects/dolce-penisola-quang-binh/award-card.jpg",
    source: "du-an",
    pageNumber: 20,
    section: "project",
    projectSlug: "dolce-penisola-quang-binh",
    usage: "gallery",
    confidence: "high",
    reason: "OCR contains Dolce and Dot Property award text.",
  },
  {
    originalFile: "csr_blood_donation_001.jpg",
    normalizedFile: "csr/blood-donation.jpg",
    source: "du-an",
    pageNumber: 11,
    section: "csr",
    usage: "gallery",
    confidence: "high",
    reason: "OCR contains blood donation event text.",
  },
] as const;
