"use client";

import { useState } from "react";
import type { LanguageCode } from "@/lib/i18n";
import { useT } from "@/lib/ui-strings";

type FormErrors = { name?: string; email?: string; message?: string };

export default function ContactForm({ lang }: { lang: LanguageCode }) {
  const t = useT(lang).contactForm;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(data: FormData): FormErrors {
    const errs: FormErrors = {};
    if (!String(data.get("name") ?? "").trim()) errs.name = t.nameRequired;
    const email = String(data.get("email") ?? "").trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.emailRequired;
    if (!String(data.get("message") ?? "").trim()) errs.message = t.messageRequired;
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      // fallback: still show success (Netlify may have processed it)
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">OK</div>
        <h3 className="contact-form__success-title">{t.successTitle}</h3>
        <p className="contact-form__success-body">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      name="consultation"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="consultation" />
      <input type="hidden" name="lang" value={lang} />
      <p className="contact-form__honeypot">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </p>

      <div className="contact-form__field">
        <label className="contact-form__label">
          {t.name} <span className="contact-form__required">{t.required}</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder={t.namePlaceholder}
          className={`contact-form__input${errors.name ? " contact-form__input--error" : ""}`}
          autoComplete="name"
        />
        {errors.name && <span className="contact-form__error">{errors.name}</span>}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label">
          {t.email} <span className="contact-form__required">{t.required}</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder={t.emailPlaceholder}
          className={`contact-form__input${errors.email ? " contact-form__input--error" : ""}`}
          autoComplete="email"
        />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label">{t.phone}</label>
        <input
          type="tel"
          name="phone"
          placeholder={t.phonePlaceholder}
          className="contact-form__input"
          autoComplete="tel"
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label">{t.budget}</label>
        <select name="budget" className="contact-form__select">
          {t.budgetOptions.map((opt: string) => (
            <option key={opt} value={opt === t.budgetOptions[0] ? "" : opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label">
          {t.message} <span className="contact-form__required">{t.required}</span>
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder={t.messagePlaceholder}
          className={`contact-form__textarea${errors.message ? " contact-form__input--error" : ""}`}
        />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>

      <button type="submit" className="contact-form__submit" disabled={submitting}>
        {submitting ? t.submitting : t.submit}
      </button>
    </form>
  );
}

