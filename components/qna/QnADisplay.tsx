"use client";

import { useState } from "react";
import type { LanguageCode } from "@/lib/i18n";
import { getQnAsByLang, getQnAsByCategory, getQnACategories } from "@/features/qna/repository";

type QnADisplayProps = {
  lang: LanguageCode;
  category?: string | null;
  showCategories?: boolean;
  maxItems?: number;
};

export function QnADisplay({
  lang,
  category,
  showCategories = false,
  maxItems,
}: QnADisplayProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category || null,
  );

  const allQnAs = getQnAsByLang(lang);
  const categories = getQnACategories(lang);

  const displayQnAs = selectedCategory
    ? getQnAsByCategory(lang, selectedCategory as any)
    : allQnAs;

  const limitedQnAs = maxItems ? displayQnAs.slice(0, maxItems) : displayQnAs;

  const toggleExpanded = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="qna-display">
      {showCategories && categories.length > 0 && (
        <div className="qna-categories">
          <button
            className={`qna-category-btn ${!selectedCategory ? "qna-category-btn--active" : ""}`}
            onClick={() => setSelectedCategory(null)}
          >
            {lang === "ja" ? "すべて" : lang === "en" ? "All" : lang === "zh" ? "全部" : "Tất cả"}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`qna-category-btn ${selectedCategory === cat ? "qna-category-btn--active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}

      <div className="qna-list">
        {limitedQnAs.length === 0 ? (
          <p className="qna-empty">
            {lang === "ja"
              ? "質問が見つかりません"
              : lang === "en"
                ? "No questions found"
                : lang === "zh"
                  ? "未找到问题"
                  : "Không tìm thấy câu hỏi"}
          </p>
        ) : (
          limitedQnAs.map((qna) => (
            <div
              key={qna.id}
              className={`qna-item ${expanded === qna.id ? "qna-item--open" : ""}`}
            >
              <button
                className="qna-item__question"
                onClick={() => toggleExpanded(qna.id)}
              >
                <span className="qna-item__question-text">{qna.question}</span>
                <span className="qna-item__toggle">
                  {expanded === qna.id ? "−" : "+"}
                </span>
              </button>
              {expanded === qna.id && (
                <div className="qna-item__answer">{qna.answer}</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default QnADisplay;
