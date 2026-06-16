"use client";

import { useEffect, useMemo, useState } from "react";
import { sectionImageMeta, translations, type MainImageSection } from "@/features/home/content";
import { type LanguageCode, withLang } from "@/lib/i18n";

const NAV_LABELS: Record<string, { home: string; service: string; about: string; domestic: string; blog: string; overseas: string; contact: string }> = {
  ja: { home: "ホーム", service: "事業内容", about: "会社案内", domestic: "国内不動産", blog: "BLOG", overseas: "海外不動産", contact: "お問合せ" },
  en: { home: "Home", service: "Services", about: "About", domestic: "Domestic RE", blog: "Blog", overseas: "Overseas", contact: "Contact" },
  zh: { home: "首页", service: "业务内容", about: "关于我们", domestic: "国内房产", blog: "博客", overseas: "海外不動産", contact: "联系我们" },
  vi: { home: "Trang chủ", service: "Dịch vụ", about: "Giới thiệu", domestic: "BĐS trong nước", blog: "Blog", overseas: "Bất động sản nước ngoài", contact: "Liên hệ" },
};

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type FooterItem = {
  text: string;
  href: string;
};

export function useHomePageState(lang: LanguageCode, _options?: { enableSplash?: boolean }) {
  const [activeHero, setActiveHero] = useState("content1");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [showPagetop, setShowPagetop] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);

  const t = translations[lang];

  const heroItems = useMemo(
    () => [
      {
        title: t.navAbout,
        href: withLang(lang, "/v-about"),
        target: "content1",
        image:
          "/assets/red/s_shutterstock_475080787-min.jpg",
      },
      {
        title: "SERVICE",
        href: withLang(lang, "/v-service"),
        target: "content2",
        image:
          "/assets/red/s_shutterstock_267766277-min.jpg",
      },
      {
        title: "BLOG",
        href: withLang(lang, "/blog"),
        target: "content3",
        image:
          "/assets/red/pexels-max-vakhtbovych-7060815-scaled.jpg",
      },
      {
        title: "CONTACT",
        href: withLang(lang, "/contact"),
        target: "content4",
        image:
          "/assets/red/pexels-roman-pohorecki-230557-1-scaled.jpg",
      },
    ],
    [lang, t.navAbout],
  );

  const mainSections: MainImageSection[] = useMemo(
    () =>
      sectionImageMeta.map((meta, index) => ({
        ...meta,
        title: t.sections[index].title,
        description: t.sections[index].description,
      })),
    [t.sections],
  );

  const nl = NAV_LABELS[lang] ?? NAV_LABELS.ja;

  const globalNav: NavItem[] = useMemo(
    () => [
      { label: nl.home, href: withLang(lang, "/") },
      { label: nl.service, href: withLang(lang, "/v-service") },
      { label: nl.about, href: withLang(lang, "/v-about") },
      { label: nl.domestic, href: withLang(lang, "/domestic") },
      {
        label: nl.overseas,
        href: withLang(lang, "/vietnam/projects"),
        children: [
          {
            label: lang === "ja" ? "ベトナム" : lang === "zh" ? "越南" : lang === "vi" ? "Việt Nam" : "Vietnam",
            href: withLang(lang, "/vietnam/projects"),
          },
        ],
      },
    ],
    [lang, nl],
  );

  const footerItems: FooterItem[] = useMemo(
    () => [
      { text: nl.home, href: withLang(lang, "/") },
      { text: nl.about, href: withLang(lang, "/v-about") },
      { text: nl.service, href: withLang(lang, "/v-service") },
      { text: nl.domestic, href: withLang(lang, "/domestic") },
      { text: nl.blog, href: withLang(lang, "/blog") },
      { text: nl.contact, href: withLang(lang, "/contact") },
      { text: t.footerCommerce, href: withLang(lang, "/cdmmr") },
      { text: nl.overseas, href: withLang(lang, "/vietnam/projects") },
    ],
    [lang, nl, t.footerCommerce],
  );

  useEffect(() => {
    const onScroll = () => {
      const over = window.scrollY > 100;
      setIsHeaderFixed(over);
      setShowPagetop(over);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const splashTimer = window.setTimeout(() => {
      setSplashFading(true);
      window.setTimeout(() => setShowSplash(false), 600);
    }, 3600);

    const onResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(splashTimer);
    };
  }, []);

  return {
    t,
    heroItems,
    mainSections,
    globalNav,
    footerItems,
    activeHero,
    isMobileMenuOpen,
    isHeaderFixed,
    showPagetop,
    showSplash,
    splashFading,
    setActiveHero,
    toggleMobileMenu: () => setIsMobileMenuOpen((prev) => !prev),
  };
}
