"use client";

import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";
import { useHomePageState } from "@/hooks/useHomePageState";
import type { LanguageCode } from "@/lib/i18n";
import SplitPage from "@/components/shared/SplitPage";
import type { SplitPageKey } from "@/features/home/page-content";

type SplitPageWrapperProps = {
  lang: LanguageCode;
  pageKey: SplitPageKey;
};

export default function SplitPageWrapper({ lang, pageKey }: SplitPageWrapperProps) {
  const {
    globalNav,
    footerItems,
    isMobileMenuOpen,
    isHeaderFixed,
    showPagetop,
    toggleMobileMenu,
  } = useHomePageState(lang, { enableSplash: false });

  return (
    <div id="site_wrap">
      <HomeHeader
        lang={lang}
        isHeaderFixed={isHeaderFixed}
        isMobileMenuOpen={isMobileMenuOpen}
        globalNav={globalNav}
        onToggleMobileMenu={toggleMobileMenu}
      />
      <SplitPage lang={lang} pageKey={pageKey} />
      <HomeFooter lang={lang} showPagetop={showPagetop} footerItems={footerItems} />
    </div>
  );
}
