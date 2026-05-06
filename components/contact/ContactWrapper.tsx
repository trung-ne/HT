"use client";

import HomeHeader from "@/components/home/HomeHeader";
import HomeFooter from "@/components/home/HomeFooter";
import ContactForm from "@/components/contact/ContactForm";
import { useHomePageState } from "@/hooks/useHomePageState";
import type { LanguageCode } from "@/lib/i18n";
import { useT } from "@/lib/ui-strings";

export default function ContactWrapper({ lang }: { lang: LanguageCode }) {
  const t = useT(lang);
  const {
    globalNav,
    footerItems,
    isMobileMenuOpen,
    isHeaderFixed,
    showPagetop,
    toggleMobileMenu,
  } = useHomePageState(lang);

  return (
    <div id="site_wrap">
      <HomeHeader
        lang={lang}
        isHeaderFixed={isHeaderFixed}
        isMobileMenuOpen={isMobileMenuOpen}
        globalNav={globalNav}
        onToggleMobileMenu={toggleMobileMenu}
      />
      <main className="l-main contact-main">
        <div className="contact-page">
          <div className="contact-page__header">
            <h1 className="contact-page__title">{t.contactPageTitle}</h1>
            <p className="contact-page__subtitle">{t.contactPageSubtitle}</p>
          </div>
          <div className="contact-page__body">
            <ContactForm lang={lang} />
          </div>
        </div>
      </main>
      <HomeFooter lang={lang} showPagetop={showPagetop} footerItems={footerItems} />
    </div>
  );
}
