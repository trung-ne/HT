import Link from "next/link";
import { splitPageContent, type SplitPageKey } from "@/features/home/page-content";
import type { LanguageCode } from "@/lib/i18n";

type SplitPageProps = {
  lang: LanguageCode;
  pageKey: SplitPageKey;
};

export default function SplitPage({ lang, pageKey }: SplitPageProps) {
  const content = splitPageContent[lang][pageKey];

  return (
    <main className="l-main" style={{ minHeight: "100vh", padding: "120px 0 80px" }}>
      <section className="l-inner" style={{ lineHeight: 1.7 }}>
        <h1 style={{ fontSize: "40px", marginBottom: "24px" }}>{content.title}</h1>

        <div style={{ fontSize: "16px", display: "grid", gap: "12px", marginBottom: "36px" }}>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <Link href={`/${lang}`} style={{ textDecoration: "underline" }}>
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
