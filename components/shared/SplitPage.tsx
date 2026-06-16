import { splitPageContent, type SplitPageKey } from "@/features/home/page-content";
import type { LanguageCode } from "@/lib/i18n";

type SplitPageProps = {
  lang: LanguageCode;
  pageKey: SplitPageKey;
};

export default function SplitPage({ lang, pageKey }: SplitPageProps) {
  const content = splitPageContent[lang][pageKey];
  const heroImage = content.heroImage ?? content.sections?.[0]?.image;

  const renderParagraph = (paragraph: string) => {
    const match = paragraph.match(/^\[(.+?)\]\s*(.*)$/);
    if (!match) {
      return paragraph;
    }

    const [, label, rest] = match;
    return (
      <>
        <strong>{label}</strong> {rest}
      </>
    );
  };

  return (
    <main className="l-main split-page">
      {heroImage ? (
        <div className="split-page__hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt={content.title} className="split-page__hero-img" />
          <div className="split-page__hero-overlay">
            <div>
              <p className="page-hero__eyebrow">REDHOMES</p>
              <h1 className="split-page__hero-title">{content.title}</h1>
            </div>
          </div>
        </div>
      ) : null}

      <div className="split-page__inner">
        {heroImage ? null : <h1 className="split-page__title">{content.title}</h1>}
        <div className="split-page__body">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="split-page__paragraph">
              {renderParagraph(paragraph)}
            </p>
          ))}
        </div>
      </div>

      {content.sections?.length ? (
        <div className="split-page__sections">
          {content.sections.map((section, index) => (
            <div
              key={`${section.heading}-${index}`}
              className={`split-page__section ${section.reverse ? "split-page__section--reverse" : ""}`}
            >
              {section.image ? (
                <div className="split-page__section-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={section.image} alt={section.heading} />
                </div>
              ) : null}
              <div className="split-page__section-body">
                <h2 className="split-page__section-heading">{section.heading}</h2>
                <p className="split-page__section-text">{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}

