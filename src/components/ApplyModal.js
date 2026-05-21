"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import styles from "./modal.module.css";

export default function ApplyModal({ isOpen, onClose }) {
  const t = useTranslations("ApplyModal");
  const tm = useTranslations("Modal");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.panel} role="dialog" aria-modal="true">
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label={tm("close")}
        >
          <svg className={styles.closeIcon} viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.header}>
          <span className={styles.label}>{t("label")}</span>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {/* Parent's name */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              {t("parentName")} <span className={styles.fieldRequired}>*</span>
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder={t("parentPlaceholder")}
              required
            />
          </div>

          {/* Phone + Email */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>
                {tm("phone")} <span className={styles.fieldRequired}>*</span>
              </label>
              <input
                type="tel"
                className={styles.input}
                placeholder={tm("phonePlaceholder")}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>
                {tm("email")} <span className={styles.fieldRequired}>*</span>
              </label>
              <input
                type="email"
                className={styles.input}
                placeholder={tm("emailPlaceholder")}
                required
              />
            </div>
          </div>

          {/* Child's name */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              {t("childName")} <span className={styles.fieldRequired}>*</span>
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder={t("childPlaceholder")}
              required
            />
          </div>

          {/* Child's age + Grade */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>{tm("childAge")}</label>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  {tm("selectAge")}
                </option>
                {Array.from({ length: 13 }, (_, i) => i + 6).map((age) => (
                  <option key={age} value={age}>
                    {tm("ageOption", { age })}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>
                {t("grade")} <span className={styles.fieldRequired}>*</span>
              </label>
              <select className={styles.select} defaultValue="" required>
                <option value="" disabled>
                  {t("selectGrade")}
                </option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                  <option key={grade} value={grade}>
                    {t("gradeOption", { grade })}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comment */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>{t("comment")}</label>
            <textarea
              className={styles.textarea}
              placeholder={t("commentPlaceholder")}
              rows={4}
            />
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            <svg className={styles.submitIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
