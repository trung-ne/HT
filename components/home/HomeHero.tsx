"use client";

import Link from "next/link";

type HeroItem = {
  title: string;
  href: string;
  target: string;
  image: string;
};

type HomeHeroProps = {
  heroItems: HeroItem[];
  activeHero: string;
  isHeaderFixed: boolean;
  onSetActiveHero: (target: string) => void;
};

export default function HomeHero({
  heroItems,
  activeHero,
  isHeaderFixed,
  onSetActiveHero,
}: HomeHeroProps) {
  return (
    <div id="js-hero-header" className="p-hero-header">
      <ul className="p-hero-header__nav u-clearfix">
        {heroItems.map((item) => (
          <li
            key={item.target}
            className={`p-hero-header__nav-item ${activeHero === item.target ? "is-active" : ""}`}
          >
            <Link
              href={item.href}
              data-target={`#js-hero-header__${item.target}`}
              onMouseEnter={() => onSetActiveHero(item.target)}
              onFocus={() => onSetActiveHero(item.target)}
            >
              <span className="p-hero-header__nav-item-title">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {heroItems.map((item) => (
        <div
          key={item.target}
          id={`js-hero-header__${item.target}`}
          className={`p-hero-header__content ${activeHero === item.target ? "is-active" : ""}`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
      ))}

      <a
        id="js-hero-header__link"
        href="#js-contents-builder"
        className="p-hero-header__link"
        onClick={(event) => {
          event.preventDefault();
          const target = document.getElementById("js-contents-builder");
          if (!target) return;
          const offset = isHeaderFixed ? 70 : 0;
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }}
      />
    </div>
  );
}
