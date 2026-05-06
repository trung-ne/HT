"use client";

import type { MainImageSection } from "@/features/home/content";

type HomeContentProps = {
  philosophyTitle: string;
  philosophyDesc: string;
  mainSections: MainImageSection[];
};

export default function HomeContent({
  philosophyTitle,
  philosophyDesc,
  mainSections,
}: HomeContentProps) {
  return (
    <div id="js-contents-builder">
      <section id="cb_0" className="p-content01 l-inner">
        <h2 className="p-content01__catch">{philosophyTitle}</h2>
        <div className="p-content01__desc">
          <p>{philosophyDesc}</p>
        </div>
      </section>

      {mainSections.map((section) => (
        <div
          id={section.id}
          className={`p-main-image ${section.reverse ? "p-main-image--rev" : ""}`}
          key={section.id}
        >
          <div className="p-main-image__img" style={{ backgroundImage: `url(${section.image})` }} />
          <div className="p-main-image__content p-main-image__content--overlay">
            <h2 className="p-main-image__title p-main-image__title--compact">
              {section.title}
            </h2>
            <p className="p-main-image__desc">
              {section.description.split("\n").map((line, lineIndex, lines) => (
                <span key={`${section.id}-${lineIndex}`}>
                  {line}
                  {lineIndex < lines.length - 1 ? (
                    <>
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
