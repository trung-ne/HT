"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type AppHeaderProps = {
  lang: string;
};

const LANGUAGES: { code: string; label: string }[] = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "vi", label: "Tiếng Việt" },
];

const NAV_LABELS: Record<string, { home: string; service: string; about: string; domestic: string; blog: string; overseas: string; contact: string }> = {
  ja: { home: "ホーム", service: "事業内容", about: "会社案内", domestic: "国内不動産", blog: "BLOG", overseas: "海外不動産", contact: "お問合せ" },
  en: { home: "Home", service: "Services", about: "About", domestic: "Domestic RE", blog: "Blog", overseas: "Overseas", contact: "Contact" },
  zh: { home: "首页", service: "业务内容", about: "关于我们", domestic: "国内房产", blog: "博客", overseas: "海外不動産", contact: "联系" },
  vi: { home: "Trang chủ", service: "Dịch vụ", about: "Giới thiệu", domestic: "BĐS trong nước", blog: "Blog", overseas: "Bất động sản nước ngoài", contact: "Liên hệ" },
};

export function AppHeader({ lang }: AppHeaderProps) {
  const pathname = usePathname() ?? "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverseasOpen, setIsOverseasOpen] = useState(false);

  const nl = NAV_LABELS[lang] ?? NAV_LABELS.ja;

  const navItems = [
    { label: nl.home, href: `/${lang}` },
    { label: nl.service, href: `/${lang}/v-service` },
    { label: nl.about, href: `/${lang}/v-about` },
    { label: nl.domestic, href: `/${lang}/domestic` },
  ];

  const overseasLabel = lang === "ja" ? "ベトナム" : lang === "zh" ? "越南" : lang === "vi" ? "Việt Nam" : "Vietnam";

  return (
    <header
      className="l-header l-header--fixed"
      style={{ position: "fixed", top: 0, zIndex: 1000, width: "100%", height: "80px", background: "#fff", borderBottom: "1px solid #e8e8e8", boxShadow: "0 1px 0 0 #e8e8e8" }}
    >
      <div className="l-header__inner">
        {/* Brand */}
        <div className="l-header__brand">
          <Link href={`/${lang}`} className="l-header__logo-link" style={{ textDecoration: "none" }}>
            <span className="l-header__logo-mark">HT</span>
            <span className="l-header__logo-text">HTグローバル</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className={`l-header__nav-wrap${isMobileMenuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <ul className="p-global-nav">
            {navItems.map((item) => (
              <li key={item.href} className="p-global-nav__item">
                <Link
                  href={item.href}
                  className={`p-global-nav__link${pathname === item.href ? " is-active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Overseas dropdown */}
            <li
              className={`p-global-nav__item p-global-nav__item--has-dropdown${isOverseasOpen ? " is-open" : ""}`}
              onMouseEnter={() => setIsOverseasOpen(true)}
              onMouseLeave={() => setIsOverseasOpen(false)}
            >
              <Link
                href={`/${lang}/vietnam/projects`}
                className={`p-global-nav__link${pathname.includes("/vietnam") ? " is-active" : ""}`}
              >
                {nl.overseas}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <ul className={`p-header-dropdown${isOverseasOpen ? " is-open" : ""}`}>
                <li className="p-header-dropdown__item">
                  <Link href={`/${lang}/vietnam/projects`}>{overseasLabel}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="l-header__actions">
          <div className="language-switcher">
            <select
              value={lang}
              onChange={(e) => {
                const newLang = e.target.value;
                const pathWithoutLang = pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, "");
                window.location.href = `/${newLang}${pathWithoutLang}`;
              }}
              style={{
                fontSize: "12px",
                border: "1px solid #e0e0e0",
                padding: "4px 8px",
                background: "transparent",
                color: "#555",
                cursor: "pointer",
              }}
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <Link href={`/${lang}/contact`} className="l-header__cta">
            {nl.contact}
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`p-menu-button${isMobileMenuOpen ? " is-active" : ""}`}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

