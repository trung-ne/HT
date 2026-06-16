"use client";

import Link from "next/link";
import { withLang, type LanguageCode } from "@/lib/i18n";

type FooterItem = {
  text: string;
  href: string;
};

type HomeFooterProps = {
  lang: LanguageCode;
  showPagetop: boolean;
  footerItems: FooterItem[];
};

export default function HomeFooter({ lang, showPagetop, footerItems }: HomeFooterProps) {
  const commerceItem = footerItems[footerItems.length - 1];

  return (
    <footer className="l-footer">
      {/* Back to top */}
      <div id="js-pagetop" className={`p-pagetop ${showPagetop ? "is-active" : ""}`}>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Back to top"
        />
      </div>

      {/* Main footer body */}
      <div className="footer-body">
        <div className="l-inner footer-body__inner">
          {/* Brand column */}
          <div className="footer-brand">
            <Link href={withLang(lang, "/")} className="redhome-logo-link footer-brand__logo">
              HTグローバル
            </Link>
            <p className="footer-brand__tagline">
              Japanese Real Estate for Global Investors
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-nav__list">
              {footerItems.slice(0, -1).map((item) => (
                <li key={item.text} className="footer-nav__item">
                  <Link href={item.href} className="footer-nav__link">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div className="footer-contact">
            <p className="footer-contact__label">Contact</p>
            <a href="mailto:info@redhomes.jp" className="footer-contact__email">
              info@redhomes.jp
            </a>
            <p className="footer-contact__location">Tokyo, Japan</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="l-inner footer-bottom__inner">
          <p className="p-copyright">
            <small>© {new Date().getFullYear()} 株式会社HTグローバル. All rights reserved.</small>
          </p>
          {commerceItem && (
            <Link href={commerceItem.href} className="footer-bottom__commerce">
              {commerceItem.text}
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}

