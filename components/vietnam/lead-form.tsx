"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/vietnam/ui/button";
import { Input } from "@/components/vietnam/ui/input";
import { projects } from "@/features/vietnam/content/projects";
import { Textarea } from "@/components/vietnam/ui/textarea";
import { uiCopy } from "@/features/vietnam/content/texts";
import type { Locale } from "@/lib/vietnam/i18n";
import { t } from "@/lib/vietnam/i18n";

function encodeFormData(formData: FormData) {
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    if (typeof value === "string") {
      params.append(key, value);
    }
  });

  return params.toString();
}

export function LeadForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const fieldClassName = "h-11 rounded-md border-[var(--onsen-line)] bg-white px-3 text-sm shadow-none";
  const selectClassName = "h-11 w-full rounded-md border border-[var(--onsen-line)] bg-white px-3 text-sm text-[var(--onsen-ink)] shadow-none outline-none transition-colors focus:border-[var(--onsen-orange)] focus:ring-2 focus:ring-[var(--onsen-orange)]/15";

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData),
      });

      setStatus(response.ok ? "sent" : "error");
      if (response.ok) {
        event.currentTarget.reset();
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={submit}
      className="grid gap-5 rounded-lg border border-[var(--onsen-line)] bg-white p-5 md:p-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="locale" value={locale} />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="sr-only">{t(uiCopy.form.name, locale)}</label>
          <Input id="lead-name" required name="name" placeholder={t(uiCopy.form.name, locale)} className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="lead-phone" className="sr-only">{t(uiCopy.form.phone, locale)}</label>
          <Input id="lead-phone" required name="phone" placeholder={t(uiCopy.form.phone, locale)} className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="lead-email" className="sr-only">{t(uiCopy.form.email, locale)}</label>
          <Input id="lead-email" name="email" type="email" placeholder={t(uiCopy.form.email, locale)} className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="lead-country" className="sr-only">{t(uiCopy.form.country, locale)}</label>
          <Input id="lead-country" name="country" placeholder={t(uiCopy.form.country, locale)} className={fieldClassName} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="lead-language" className="sr-only">{t(uiCopy.form.preferredLanguage, locale)}</label>
          <select id="lead-language" name="language" defaultValue={locale} className={selectClassName}>
          <option value="ja">{t(uiCopy.form.languageOptions.ja, locale)}</option>
          <option value="zh-CN">{t(uiCopy.form.languageOptions["zh-CN"], locale)}</option>
          <option value="zh-TW">{t(uiCopy.form.languageOptions["zh-TW"], locale)}</option>
          <option value="vi">{t(uiCopy.form.languageOptions.vi, locale)}</option>
          <option value="en">{t(uiCopy.form.languageOptions.en, locale)}</option>
          </select>
        </div>
        <div>
          <label htmlFor="lead-demand" className="sr-only">{t(uiCopy.form.demandType, locale)}</label>
          <select id="lead-demand" name="demand" defaultValue="investment" className={selectClassName}>
          <option value="investment">{t(uiCopy.form.demand.investment, locale)}</option>
          <option value="apartment-purchase">{t(uiCopy.form.demand["apartment-purchase"], locale)}</option>
          <option value="industrial-land">{t(uiCopy.form.demand["industrial-land"], locale)}</option>
          <option value="partnership">{t(uiCopy.form.demand.partnership, locale)}</option>
          <option value="other">{t(uiCopy.form.demand.other, locale)}</option>
          </select>
        </div>
      </div>
      <label htmlFor="lead-project" className="sr-only">{t(uiCopy.form.interestedProject, locale)}</label>
      <select id="lead-project" name="project" defaultValue="" className={selectClassName}>
        <option value="" disabled>{t(uiCopy.form.interestedProject, locale)}</option>
        {projects.map((project) => (
          <option key={project.slug} value={project.slug}>{t(project.title, locale)}</option>
        ))}
      </select>
      <label htmlFor="lead-message" className="sr-only">{t(uiCopy.form.message, locale)}</label>
      <Textarea id="lead-message" name="message" placeholder={t(uiCopy.form.message, locale)} rows={4} className="min-h-32 rounded-md border-[var(--onsen-line)] bg-white px-3 py-3 text-sm shadow-none" />
      <Button disabled={status === "sending"} className="rounded-md bg-[var(--onsen-orange)] hover:bg-[#d93624]">
        <Send className="mr-2 h-4 w-4" />
        {status === "sending" ? t(uiCopy.form.sending, locale) : t(uiCopy.form.submit, locale)}
      </Button>
      <div aria-live="polite">
        {status === "sent" ? <p className="text-sm text-green-700">{t(uiCopy.form.sent, locale)}</p> : null}
        {status === "error" ? <p className="text-sm text-red-700">{t(uiCopy.form.error, locale)}</p> : null}
      </div>
    </form>
  );
}


