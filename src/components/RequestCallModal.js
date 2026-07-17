"use client";

import { useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { submitLead } from "@/lib/submitLead";
import styles from "./modal.module.css";

export default function RequestCallModal({ isOpen, onClose }) {
  const t = useTranslations("RequestCallModal");
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
      formType: "request-call",
      name: fd.get("name"),
      phone: fd.get("phone"),
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
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
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
