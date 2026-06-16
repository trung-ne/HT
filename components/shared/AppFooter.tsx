"use client";

import Link from "next/link";

type AppFooterProps = {
  lang: string;
};

export function AppFooter({ lang }: AppFooterProps) {
  return (
    <footer className="l-footer" style={{ background: "#343D45", color: "#ccc" }}>
      {/* Top accent line */}
      <div style={{ height: "3px", background: "#023F73" }} />

      {/* Main footer body */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "48px 40px 36px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between", alignItems: "flex-start" }}>
          {/* Brand */}
          <div>
            <Link
              href={`/${lang}`}
              className="redhome-logo-link"
              style={{ fontSize: "22px", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textDecoration: "none" }}
            >
              HTグローバル
            </Link>
            <p style={{ marginTop: "8px", fontSize: "12px", color: "#9aa0a6", letterSpacing: "0.04em" }}>
              Japanese Real Estate for Global Investors
            </p>
          </div>

          {/* Japan nav */}
          <nav aria-label="Japan navigation">
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9aa0a6", marginBottom: "12px" }}>
              Japan
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { text: "Home", href: `/${lang}` },
                { text: "About", href: `/${lang}/v-about` },
                { text: "Service", href: `/${lang}/v-service` },
                { text: "Blog", href: `/${lang}/blog` },
                { text: "Contact", href: `/${lang}/contact` },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ fontSize: "13px", color: "#9aa0a6", textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9aa0a6"; }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Vietnam nav */}
          <nav aria-label="Vietnam navigation">
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9aa0a6", marginBottom: "12px" }}>
              Vietnam · Onsen Fuji
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { text: "Projects", href: `/${lang}/vietnam/projects` },
                { text: "Contact", href: `/${lang}/vietnam/contact` },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ fontSize: "13px", color: "#9aa0a6", textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9aa0a6"; }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9aa0a6", marginBottom: "12px" }}>
              Contact
            </p>
            <a
              href="mailto:info@redhomes.jp"
              style={{ fontSize: "13px", color: "#9aa0a6", textDecoration: "none" }}
            >
              info@redhomes.jp
            </a>
            <p style={{ marginTop: "6px", fontSize: "12px", color: "#9aa0a6" }}>Tokyo, Japan</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontSize: "11px", color: "#6b7177" }}>
            © {new Date().getFullYear()} 株式会社HTグローバル. All rights reserved.
          </p>
          <Link
            href={`/${lang}/cdmmr`}
            style={{ fontSize: "11px", color: "#6b7177", textDecoration: "none" }}
          >
            特定商取引法に基づく表記
          </Link>
        </div>
      </div>
    </footer>
  );
}

