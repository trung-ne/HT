"use client";

import HomeHeader from "@/components/home/HomeHeader";
import HomeFooter from "@/components/home/HomeFooter";
import BlogDetailPage from "./BlogDetailPage";
import { useHomePageState } from "@/hooks/useHomePageState";
import type { LanguageCode } from "@/lib/i18n";
import type { BlogPost, BlogPostMeta } from "@/features/blog/types";

type BlogDetailWrapperProps = {
  lang: LanguageCode;
  post: BlogPost;
  related: BlogPostMeta[];
};

export default function BlogDetailWrapper({ lang, post, related }: BlogDetailWrapperProps) {
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
      <main className="l-main blog-main">
        <BlogDetailPage post={post} lang={lang} related={related} />
      </main>
      <HomeFooter lang={lang} showPagetop={showPagetop} footerItems={footerItems} />
    </div>
  );
}
