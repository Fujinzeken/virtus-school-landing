"use client";

import { useEffect } from "react";
import styles from "./modal.module.css";

export default function RequestCallModal({ isOpen, onClose }) {
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
          aria-label="Close"
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
          <span className={styles.label}>Get in Touch</span>
          <h2 className={styles.title}>Request a Call</h2>
          <p className={styles.subtitle}>
            Leave your details and our admissions team will call you back within
            one business day.
          </p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              Full Name <span className={styles.fieldRequired}>*</span>
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Your full name"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              Phone <span className={styles.fieldRequired}>*</span>
            </label>
            <input
              type="tel"
              className={styles.input}
              placeholder="+998 __ ___ __ __"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            <svg className={styles.submitIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Request a Call
          </button>
        </form>
      </div>
    </div>
  );
}
