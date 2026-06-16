import Link from "next/link";
import { Building2, ChevronLeft, Menu } from "lucide-react";
import { Button } from "@/components/vietnam/ui/button";
import { LanguageSwitcher } from "@/components/vietnam/language-switcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/vietnam/ui/sheet";
import { localizedPath, type Locale, t } from "@/lib/vietnam/i18n";
import { labels, navigation } from "@/features/vietnam/content/texts";

export function SiteHeader({ locale, lang }: { locale: Locale; lang: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--onsen-line)]" style={{ boxShadow: "0 1px 0 0 var(--onsen-line)" }}>
      {/* Back-to-redhomes breadcrumb bar */}
      <div className="border-b border-[var(--onsen-line)] bg-neutral-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 md:px-12">
          <a
            href={`/${lang}`}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-[var(--onsen-accent)]"
          >
            <ChevronLeft className="h-3 w-3" />
            <span className="font-semibold tracking-wide">HTグローバル</span>
            <span className="text-neutral-300">·</span>
            <span>日本不動産</span>
          </a>
          <span className="text-xs tracking-widest uppercase text-neutral-400 font-medium">
            Vietnam
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Brand */}
        <Link
          href={localizedPath(locale)}
          className="flex items-center gap-2.5 shrink-0 text-decoration-none"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-bold"
            style={{ background: "var(--onsen-accent)" }}
          >
            O
          </span>
          <span
            className="text-lg font-light tracking-wide text-[var(--onsen-ink)]"
            style={{ fontFamily: '"Times New Roman", serif', letterSpacing: "0.06em" }}
          >
            Onsen Fuji
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(locale, item.href)}
              className="relative px-4 py-1 text-sm font-medium text-neutral-600 transition-colors hover:text-[var(--onsen-accent)]"
              style={{ letterSpacing: "0.03em" }}
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <LanguageSwitcher locale={locale} variant="desktop" />
          <Link
            href={localizedPath(locale, "/contact")}
            className="inline-flex h-9 items-center px-5 text-sm font-semibold text-white transition-colors"
            style={{
              background: "var(--onsen-accent)",
              letterSpacing: "0.04em",
            }}
          >
            {t(labels.consult, locale)}
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="lg:hidden border-[var(--onsen-line)]"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-white">
            <div className="mt-8 grid gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(locale, item.href)}
                  className="border-b border-[var(--onsen-line)] pb-4 text-base font-medium text-[var(--onsen-ink)]"
                >
                  {t(item.label, locale)}
                </Link>
              ))}
              <LanguageSwitcher locale={locale} variant="mobile" />
              <a
                href={`/${lang}`}
                className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-[var(--onsen-accent)]"
              >
                <ChevronLeft className="h-4 w-4" />
                HTグローバル 日本不動産
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

