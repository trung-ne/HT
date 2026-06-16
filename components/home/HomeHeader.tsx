"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { LanguageCode } from "@/lib/i18n";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type HomeHeaderProps = {
  lang: LanguageCode;
  isHeaderFixed: boolean;
  isMobileMenuOpen: boolean;
  globalNav: NavItem[];
  onToggleMobileMenu: () => void;
};

const CTA_LABELS: Record<string, string> = {
  ja: "お問合せ",
  en: "Contact",
  zh: "联系",
  vi: "Liên hệ",
};

export default function HomeHeader({
  lang,
  isHeaderFixed,
  isMobileMenuOpen,
  globalNav,
  onToggleMobileMenu,
}: HomeHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const languages: LanguageCode[] = ["ja", "en", "zh", "vi"];
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const buildLanguageHref = (targetLang: LanguageCode) => {
    if (!pathname || pathname === "/") return `/${targetLang}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLang}`;
    if (languages.includes(segments[0] as LanguageCode)) {
      segments[0] = targetLang;
      return `/${segments.join("/")}`;
    }
    return `/${targetLang}/${segments.join("/")}`;
  };

  const ctaLabel = CTA_LABELS[lang] ?? "Contact";

  return (
    <header
      id="js-header"
      className={`l-header${isHeaderFixed ? " l-header--fixed" : ""}`}
    >
      <div className="l-header__inner">
        {/* Logo */}
        <div className="l-header__brand">
          <Link href={`/${lang}`} className="l-header__logo-link">
            <span className="l-header__logo-mark">HT</span>
            <span className="l-header__logo-text">HTグローバル</span>
          </Link>
        </div>

        {/* Global nav */}
        <nav className={`l-header__nav-wrap${isMobileMenuOpen ? " is-open" : ""}`}>
          <ul id="js-global-nav" className="p-global-nav">
            {globalNav.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openDropdown === item.label;
              return (
                <li
                  key={item.label}
                  className={`p-global-nav__item${hasChildren ? " p-global-nav__item--has-dropdown" : ""}${isOpen ? " is-open" : ""}`}
                  onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                >
                  <Link href={item.href} className="p-global-nav__link">
                    {item.label}
                    {hasChildren && (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                  {hasChildren && (
                    <ul className={`p-header-dropdown${isOpen ? " is-open" : ""}`}>
                      {item.children!.map((child) => (
                        <li key={child.href} className="p-header-dropdown__item">
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Language switcher + CTA */}
        <div className="l-header__actions">
          <div className="language-switcher">
            <select
              id="language-switcher"
              className="language-switcher__select"
              value={lang}
              onChange={(e) =>
                router.push(buildLanguageHref(e.target.value as LanguageCode))
              }
              aria-label="Select language"
            >
              {languages.map((l) => (
                <option key={l} value={l}>
                  {l.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <Link href={`/${lang}/contact`} className="l-header__cta">
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          id="js-menu-button"
          className={`p-menu-button${isMobileMenuOpen ? " is-active" : ""}`}
          onClick={onToggleMobileMenu}
          aria-label="Toggle menu"
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

