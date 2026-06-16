import Link from "next/link";
import { siteConfig } from "@/features/vietnam/content/site";
import { navigation } from "@/features/vietnam/content/texts";
import { localizedPath, type Locale, t } from "@/lib/vietnam/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-auto" style={{ background: "#343D45", color: "#ccc" }}>
      {/* Top accent line */}
      <div className="h-1" style={{ background: "var(--onsen-accent)" }} />

      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="md:max-w-xs">
            <p
              className="mb-3 text-xl font-light text-white"
              style={{ fontFamily: '"Times New Roman", serif', letterSpacing: "0.08em" }}
            >
              Onsen Fuji
            </p>
            <p className="text-sm leading-7 text-neutral-400">{siteConfig.company.name}</p>
            <p className="mt-1 text-sm leading-7 text-neutral-400">{siteConfig.company.address}</p>
            {siteConfig.company.website && (
              <a
                href={siteConfig.company.website}
                className="mt-3 inline-block text-xs text-neutral-500 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.company.website.replace("https://", "")}
              </a>
            )}
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex-1 md:max-w-md">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localizedPath(locale, item.href)}
                    className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    <span className="inline-block h-px w-4 flex-shrink-0" style={{ background: "var(--onsen-accent)" }} />
                    {t(item.label, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-600">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Onsen Fuji Group. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Powered by{" "}
            <a href="/" className="text-neutral-400 hover:text-white transition-colors">
              HTグローバル
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

