"use client";

import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";
import { useHomePageState } from "@/hooks/useHomePageState";
import type { LanguageCode } from "@/lib/i18n";
import { useEffect, useRef } from "react";

type ProxyWithLayoutProps = {
  lang: LanguageCode;
  slug: string[];
};

export default function ProxyWithLayout({ lang, slug }: ProxyWithLayoutProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.type === "iframe-height" && iframeRef.current) {
        iframeRef.current.style.height = `${e.data.height}px`;
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const {
    globalNav,
    footerItems,
    isMobileMenuOpen,
    isHeaderFixed,
    showPagetop,
    toggleMobileMenu,
  } = useHomePageState(lang);

  const joinedPath = slug.join("/");
  const proxyUrl = joinedPath
    ? `/proxy/${joinedPath}?lang=${lang}&embedded=1`
    : `/proxy?lang=${lang}&embedded=1`;

  return (
    <div id="site_wrap">
      <HomeHeader
        lang={lang}
        isHeaderFixed={isHeaderFixed}
        isMobileMenuOpen={isMobileMenuOpen}
        globalNav={globalNav}
        onToggleMobileMenu={toggleMobileMenu}
      />
      <main className="l-main">
        <iframe
          ref={iframeRef}
          key={`${lang}-${joinedPath}`}
          src={proxyUrl}
          className="clone-page-frame"
          title={`redhomes ${joinedPath}`}
          scrolling="no"
          style={{ border: "none", width: "100%", height: "100vh", display: "block" }}
        />
      </main>
      <HomeFooter
        lang={lang}
        showPagetop={showPagetop}
        footerItems={footerItems}
      />
    </div>
  );
}