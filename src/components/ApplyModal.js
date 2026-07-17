"use client";

import { useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { submitLead } from "@/lib/submitLead";
import styles from "./modal.module.css";

export default function ApplyModal({ isOpen, onClose }) {
  const t = useTranslations("ApplyModal");
  const tm = useTranslations("Modal");
  const titleId = useId();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) setSent(false);
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

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    const ok = await submitLead({
      formType: "apply",
      name: fd.get("name"),
      phone: fd.get("phone"),
      childName: fd.get("childName"),
      childAge: fd.get("childAge"),
      currentSchool: fd.get("currentSchool"),
      comment: fd.get("comment"),
      company: fd.get("company"),
    });
    setSending(false);
    if (ok) setSent(true);
    else alert(tm("error"));
  }

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
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
          <p className={styles.title} id={titleId}>
            {t("title")}
          </p>
          {!sent && <p className={styles.subtitle}>{t("subtitle")}</p>}
        </div>

        {sent ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className={styles.successTitle}>{tm("successTitle")}</h3>
            <p className={styles.successText}>{tm("success")}</p>
            <button type="button" className={styles.successBtn} onClick={onClose}>
              {tm("close")}
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Parent's name */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>
                {t("parentName")} <span className={styles.fieldRequired}>*</span>
              </label>
              <input
                type="text"
                name="name"
                className={styles.input}
                placeholder={t("parentPlaceholder")}
                required
              />
            </div>

            {/* Phone */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>
                {tm("phone")} <span className={styles.fieldRequired}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                className={styles.input}
                placeholder={tm("phonePlaceholder")}
                required
              />
            </div>

            {/* Child's name */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>
                {t("childName")} <span className={styles.fieldRequired}>*</span>
              </label>
              <input
                type="text"
                name="childName"
                className={styles.input}
                placeholder={t("childPlaceholder")}
                required
              />
            </div>

            {/* Child's age */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>{tm("childAge")}</label>
              <select name="childAge" className={styles.select} defaultValue="">
                <option value="" disabled>
                  {tm("selectAge")}
                </option>
                {Array.from({ length: 12 }, (_, i) => i + 4).map((age) => (
                  <option key={age} value={age}>
                    {tm("ageOption", { age })}
                  </option>
                ))}
              </select>
            </div>

            {/* Current school */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>{t("currentSchool")}</label>
              <input
                type="text"
                name="currentSchool"
                className={styles.input}
                placeholder={t("currentSchoolPlaceholder")}
              />
            </div>

            {/* Comment */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>{t("comment")}</label>
              <textarea
                name="comment"
                className={styles.textarea}
                placeholder={t("commentPlaceholder")}
                rows={4}
              />
            </div>

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />

            <button type="submit" className={styles.submitBtn} disabled={sending}>
              {!sending && (
                <svg className={styles.submitIcon} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {sending ? tm("sending") : t("submit")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
