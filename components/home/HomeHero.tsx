"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import type { LanguageCode } from "@/lib/i18n";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

const SLIDES: Record<LanguageCode, Slide[]> = {
  ja: [
    {
      image: "/assets/red/s_shutterstock_475080787-min.jpg",
      eyebrow: "Japanese Real Estate",
      title: "日本不動産への\n確かな一歩を",
      subtitle: "安心・透明・長期的価値を軸に、世界中の投資家が日本市場に自信を持って参入できるよう支援します。",
      ctaLabel: "会社案内を見る",
      ctaHref: "/ja/v-about",
    },
    {
      image: "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
      eyebrow: "One-Stop Service",
      title: "多言語対応\nワンストップサービス",
      subtitle: "日本語・英語・中国語・ベトナム語に対応した専門チームが、物件探索から管理まで全プロセスをサポート。",
      ctaLabel: "事業内容を見る",
      ctaHref: "/ja/v-service",
    },
    {
      image: "/assets/red/s_shutterstock_267766277-min.jpg",
      eyebrow: "Overseas Real Estate",
      title: "ベトナム不動産\n投資の新たな扉",
      subtitle: "戦略パートナー「Onsen Fuji」との提携で、ウェルネスリゾート・産業不動産など高収益ベトナム物件を提供。",
      ctaLabel: "プロジェクトを見る",
      ctaHref: "/ja/vietnam/projects",
    },
  ],
  en: [
    {
      image: "/assets/red/s_shutterstock_475080787-min.jpg",
      eyebrow: "Japanese Real Estate",
      title: "Your Trusted Gateway\nto Japan Real Estate",
      subtitle: "Built on safety, transparency and long-term value — empowering global investors to enter the Japanese market with confidence.",
      ctaLabel: "About HT Global Holdings",
      ctaHref: "/en/v-about",
    },
    {
      image: "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
      eyebrow: "One-Stop Service",
      title: "Multilingual\nOne-Stop Support",
      subtitle: "Our expert team speaks Japanese, English, Chinese and Vietnamese — guiding you through every step of your investment.",
      ctaLabel: "Our Services",
      ctaHref: "/en/v-service",
    },
    {
      image: "/assets/red/s_shutterstock_267766277-min.jpg",
      eyebrow: "Overseas Real Estate",
      title: "Vietnam Real Estate\nOpportunities",
      subtitle: "Through our partner Onsen Fuji, we offer premier wellness resort, condotel and industrial real estate in Vietnam.",
      ctaLabel: "View Projects",
      ctaHref: "/en/vietnam/projects",
    },
  ],
  zh: [
    {
      image: "/assets/red/s_shutterstock_475080787-min.jpg",
      eyebrow: "日本不动产",
      title: "迈向日本不动产\n投资的可靠一步",
      subtitle: "以安心、透明与长期价值为核心，助力全球投资者自信进入日本房地产市场。",
      ctaLabel: "了解公司",
      ctaHref: "/zh/v-about",
    },
    {
      image: "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
      eyebrow: "一站式服务",
      title: "多语言\n一站式服务",
      subtitle: "我们的专业团队支持日语、英语、中文与越南语，全程陪伴您的投资之旅。",
      ctaLabel: "业务内容",
      ctaHref: "/zh/v-service",
    },
    {
      image: "/assets/red/s_shutterstock_267766277-min.jpg",
      eyebrow: "海外不动产",
      title: "越南不动产\n投资新机遇",
      subtitle: "通过战略合作伙伴Onsen Fuji，提供温泉度假、公寓酒店及工业地产等优质越南物件。",
      ctaLabel: "查看项目",
      ctaHref: "/zh/vietnam/projects",
    },
  ],
  vi: [
    {
      image: "/assets/red/s_shutterstock_475080787-min.jpg",
      eyebrow: "Bất động sản Nhật Bản",
      title: "Bước đầu vững chắc\nvào thị trường BĐS Nhật",
      subtitle: "Xây dựng trên nền tảng an toàn, minh bạch và giá trị dài hạn — hỗ trợ nhà đầu tư toàn cầu tiếp cận thị trường Nhật Bản.",
      ctaLabel: "Giới thiệu công ty",
      ctaHref: "/vi/v-about",
    },
    {
      image: "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
      eyebrow: "Dịch vụ toàn diện",
      title: "Dịch vụ đa ngôn ngữ\nmột điểm dừng",
      subtitle: "Đội ngũ chuyên gia hỗ trợ tiếng Nhật, Anh, Trung, Việt — đồng hành từ tìm kiếm bất động sản đến quản lý tài sản.",
      ctaLabel: "Dịch vụ của chúng tôi",
      ctaHref: "/vi/v-service",
    },
    {
      image: "/assets/red/s_shutterstock_267766277-min.jpg",
      eyebrow: "BĐS nước ngoài",
      title: "Cơ hội đầu tư\nBĐS Việt Nam",
      subtitle: "Qua đối tác Onsen Fuji, chúng tôi cung cấp các dự án nghỉ dưỡng wellness, condotel và BĐS công nghiệp tại Việt Nam.",
      ctaLabel: "Xem dự án",
      ctaHref: "/vi/vietnam/projects",
    },
  ],
};

const INTERVAL = 5500;

export default function HomeHero({ lang }: { lang: LanguageCode }) {
  const slides = SLIDES[lang] ?? SLIDES.ja;
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  useEffect(() => {
    const tick = 50;
    const steps = INTERVAL / tick;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setProgress((step / steps) * 100);
      if (step >= steps) {
        step = 0;
        next();
      }
    }, tick);
    return () => clearInterval(timer);
  }, [next, active]);

  const slide = slides[active];

  return (
    <div className="p-hero-carousel">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`p-hero-carousel__slide${i === active ? " is-active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={i !== active}
        />
      ))}

      {/* Overlay */}
      <div className="p-hero-carousel__overlay" />

      {/* Content */}
      <div className="p-hero-carousel__content">
        <div className="p-hero-carousel__inner l-inner">
          <p className="p-hero-carousel__eyebrow">{slide.eyebrow}</p>
          <h1 className="p-hero-carousel__title">
            {slide.title.split("\n").map((line, i) => (
              <span key={i} className="p-hero-carousel__title-line">{line}</span>
            ))}
          </h1>
          <p className="p-hero-carousel__subtitle">{slide.subtitle}</p>
          <div className="p-hero-carousel__actions">
            <Link href={slide.ctaHref.replace("/ja/", `/${lang}/`).replace("/en/", `/${lang}/`).replace("/zh/", `/${lang}/`).replace("/vi/", `/${lang}/`)} className="p-hero-carousel__cta">
              {slide.ctaLabel}
            </Link>
            <Link href={`/${lang}/contact`} className="p-hero-carousel__cta p-hero-carousel__cta--outline">
              {lang === "ja" ? "お問合せ" : lang === "zh" ? "联系我们" : lang === "vi" ? "Liên hệ" : "Contact"}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar: indicators + scroll hint */}
      <div className="p-hero-carousel__bar">
        <div className="p-hero-carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`p-hero-carousel__dot${i === active ? " is-active" : ""}`}
              onClick={() => { setActive(i); setProgress(0); }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="p-hero-carousel__progress">
          <div className="p-hero-carousel__progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <a
          href="#js-contents-builder"
          className="p-hero-carousel__scroll"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("js-contents-builder")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="p-hero-carousel__scroll-label">SCROLL</span>
          <span className="p-hero-carousel__scroll-arrow" />
        </a>
      </div>
    </div>
  );
}

