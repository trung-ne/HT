import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, description, action, center }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <div className={center ? "inline-block text-left" : ""}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--onsen-accent)]">
            {eyebrow}
          </p>
        ) : null}

        {/* Daiwa-style ashirai: serif heading with double-border underline */}
        <div className="inline-block pb-5 relative">
          <h2
            className="text-3xl font-light leading-snug text-[var(--onsen-ink)] md:text-4xl"
            style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif', letterSpacing: "0.04em" }}
          >
            {title}
          </h2>
          {/* Double border: full gray + partial navy overlay */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 block h-px bg-[var(--onsen-line)]"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 block h-0.5 w-1/4 bg-[var(--onsen-accent)]"
          />
        </div>

        {description ? (
          <p className="mt-5 text-sm leading-7 text-[var(--onsen-muted)] max-w-2xl">
            {description}
          </p>
        ) : null}
      </div>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

