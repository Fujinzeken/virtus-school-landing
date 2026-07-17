"use client";

import { useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { submitLead } from "@/lib/submitLead";
import styles from "./modal.module.css";

export default function BookTourModal({ isOpen, onClose }) {
  const t = useTranslations("BookTourModal");
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
      formType: "tour",
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      childAge: fd.get("childAge"),
      preferredDate: fd.get("preferredDate"),
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
            {/* Name */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>
                {tm("fullName")} <span className={styles.fieldRequired}>*</span>
              </label>
              <input
                type="text"
                name="name"
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
                  name="phone"
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
                  name="email"
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
                <select name="childAge" className={styles.select} defaultValue="">
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
                <input type="date" name="preferredDate" className={styles.input} />
              </div>
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
                    d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
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
