"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import styles from "./modal.module.css";

export default function BookTourModal({ isOpen, onClose }) {
  const t = useTranslations("BookTourModal");
  const tm = useTranslations("Modal");

  // Lock body scroll when modal is open
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

  // Close on Escape key
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
        {/* Close button */}
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

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>{t("label")}</span>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              {tm("fullName")} <span className={styles.fieldRequired}>*</span>
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder={tm("namePlaceholder")}
              required
            />
          </div>

          {/* Phone + Email row */}
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

          {/* Child's age + Preferred date row */}
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
              <label className={styles.fieldLabel}>{t("preferredDate")}</label>
              <input type="date" className={styles.input} />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            <svg className={styles.submitIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
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
