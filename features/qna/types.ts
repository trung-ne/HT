import type { LanguageCode } from "@/lib/i18n";

export type QnAItem = {
  id: string;
  lang: LanguageCode;
  question: string;
  answer: string; // HTML or plain text
  category?: string; // "investment", "legal", "process", "general"
  displayOrder: number;
};

export type QnACategory = "investment" | "legal" | "process" | "general";
