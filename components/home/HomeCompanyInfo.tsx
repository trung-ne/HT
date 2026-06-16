import Link from "next/link";
import type { LanguageCode } from "@/lib/i18n";
import { withLang } from "@/lib/i18n";
import { useT } from "@/lib/ui-strings";

type CompanyInfo = {
  name: string;
  founded: string;
  capital: string;
  representative: string;
  address: string;
  businessContent: string;
  ctaLabel: string;
};

type HomeCompanyInfoProps = {
  lang: LanguageCode;
  title: string;
  info: CompanyInfo;
};

export default function HomeCompanyInfo({ lang, title, info }: HomeCompanyInfoProps) {
  const t = useT(lang);
  const rows: { key: keyof typeof t.companyFieldLabels; value: string }[] = [
    { key: "name", value: info.name },
    { key: "founded", value: info.founded },
    { key: "capital", value: info.capital },
    { key: "representative", value: info.representative },
    { key: "address", value: info.address },
    { key: "businessContent", value: info.businessContent },
  ];

  return (
    <section className="home-company">
      <div className="home-company__inner">
        <h2 className="home-company__title">{title}</h2>
        <dl className="home-company__table">
          {rows.map(({ key, value }) => (
            <div key={key} className="home-company__row">
              <dt className="home-company__label">{t.companyFieldLabels[key]}</dt>
              <dd className="home-company__value">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="home-company__cta">
          <Link href={withLang(lang, "/contact")} className="home-company__cta-btn">
            {info.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

