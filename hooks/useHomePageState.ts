"use client";

import { useEffect, useMemo, useState } from "react";
import { sectionImageMeta, translations, type MainImageSection } from "@/features/home/content";
import { type LanguageCode, withLang } from "@/lib/i18n";

type NavItem = {
  label: string;
  href: string;
};

type FooterItem = {
  text: string;
  href: string;
};

export function useHomePageState(lang: LanguageCode) {
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
          "http://molaholdings.com/jp/wp/wp-content/uploads/2016/10/s_shutterstock_475080787-min.jpg",
      },
      {
        title: "SERVICE",
        href: withLang(lang, "/v-service"),
        target: "content2",
        image:
          "http://molaholdings.com/jp/wp/wp-content/uploads/2016/10/s_shutterstock_267766277-min.jpg",
      },
      {
        title: "BLOG",
        href: withLang(lang, "/blog"),
        target: "content3",
        image:
          "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-max-vakhtbovych-7060815-scaled.jpg",
      },
      {
        title: "CONTACT",
        href: withLang(lang, "/contact"),
        target: "content4",
        image:
          "http://molaholdings.com/jp/wp/wp-content/uploads/2021/08/pexels-roman-pohorecki-230557-1-scaled.jpg",
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

  const globalNav: NavItem[] = useMemo(
    () => [
      { label: "HOME", href: withLang(lang, "/") },
      { label: t.navAbout, href: withLang(lang, "/v-about") },
      { label: "SERVICE", href: withLang(lang, "/v-service") },
      { label: "BLOG", href: withLang(lang, "/blog") },
      { label: "CONTACT", href: withLang(lang, "/contact") },
    ],
    [lang, t.navAbout],
  );

  const footerItems: FooterItem[] = useMemo(
    () => [
      { text: "HOME", href: withLang(lang, "/") },
      { text: t.navAbout, href: withLang(lang, "/v-about") },
      { text: "SERVICE", href: withLang(lang, "/v-service") },
      { text: "BLOG", href: withLang(lang, "/blog") },
      { text: "CONTACT", href: withLang(lang, "/contact") },
      { text: t.footerCommerce, href: withLang(lang, "/cdmmr") },
    ],
    [lang, t.footerCommerce, t.navAbout],
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
      window.setTimeout(() => setShowSplash(false), 800);
    }, 6500);

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
