"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { LanguageCode } from "@/lib/i18n";

type NavItem = {
  label: string;
  href: string;
};

type HomeHeaderProps = {
  lang: LanguageCode;
  isHeaderFixed: boolean;
  isMobileMenuOpen: boolean;
  globalNav: NavItem[];
  onToggleMobileMenu: () => void;
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

  return (
    <header id="js-header" className={`l-header ${isHeaderFixed ? "l-header--fixed" : ""}`}>
      <div className="l-header__inner">
        <h1 className="l-header__logo c-logo">
          <Link href={`/${lang}`} className="redhome-logo-link">
            redhomes
          </Link>
        </h1>

        <div className="language-switcher">
          <label className="language-switcher__label" htmlFor="language-switcher">
            Language
          </label>
          <select
            id="language-switcher"
            className="language-switcher__select"
            value={lang}
            onChange={(event) => {
              router.push(buildLanguageHref(event.target.value as LanguageCode));
            }}
            aria-label="Select language"
          >
            {languages.map((language) => (
              <option key={language} value={language}>
                {language.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <a
          href="#"
          id="js-menu-button"
          className={`p-menu-button c-menu-button ${isMobileMenuOpen ? "is-active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            onToggleMobileMenu();
          }}
          aria-label="Toggle menu"
        />

        <nav className="menu-globalmenu-container">
          <ul
            id="js-global-nav"
            className={`p-global-nav u-clearfix ${isMobileMenuOpen ? "is-open" : ""}`}
          >
            {globalNav.map((item, index) => (
              <li
                key={item.label}
                className={index === 0 ? "menu-item current-menu-item" : "menu-item"}
              >
                <Link href={item.href}>
                  {item.label}
                  <span />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
