"use client";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";
import { useHomePageState } from "@/hooks/useHomePageState";
import type { LanguageCode } from "@/lib/i18n";
import type { ReactNode } from "react";

export default function PageWrapper({ lang, children }: { lang: LanguageCode; children: ReactNode }) {
  const { globalNav, footerItems, isMobileMenuOpen, isHeaderFixed, showPagetop, toggleMobileMenu } =
    useHomePageState(lang, { enableSplash: false });
  return (
    <div id="site_wrap">
      <HomeHeader
        lang={lang}
        isHeaderFixed={isHeaderFixed}
        isMobileMenuOpen={isMobileMenuOpen}
        globalNav={globalNav}
        onToggleMobileMenu={toggleMobileMenu}
      />
      <main className="l-main" style={{ paddingTop: "80px" }}>
        {children}
      </main>
      <HomeFooter lang={lang} showPagetop={showPagetop} footerItems={footerItems} />
    </div>
  );
}

