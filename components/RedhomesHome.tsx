"use client";

import HomeContent from "@/components/home/HomeContent";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";
import HomeHero from "@/components/home/HomeHero";
import HomeSplash from "@/components/home/HomeSplash";
import { useHomePageState } from "@/hooks/useHomePageState";
import { type LanguageCode } from "@/lib/i18n";

export default function RedhomesHome({ lang = "ja" }: { lang?: LanguageCode }) {
  const {
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
    toggleMobileMenu,
  } = useHomePageState(lang);

  return (
    <>
      <HomeSplash showSplash={showSplash} splashFading={splashFading} splashDesc={t.splashDesc} />

      <div id="site_wrap">
        <HomeHeader
          lang={lang}
          isHeaderFixed={isHeaderFixed}
          isMobileMenuOpen={isMobileMenuOpen}
          globalNav={globalNav}
          onToggleMobileMenu={toggleMobileMenu}
        />

        <main className="l-main">
          <HomeHero
            heroItems={heroItems}
            activeHero={activeHero}
            isHeaderFixed={isHeaderFixed}
            onSetActiveHero={setActiveHero}
          />

          <HomeContent
            philosophyTitle={t.philosophyTitle}
            philosophyDesc={t.philosophyDesc}
            mainSections={mainSections}
          />
        </main>

        <HomeFooter
          lang={lang}
          showPagetop={showPagetop}
          footerItems={footerItems}
        />
      </div>
    </>
  );
}
