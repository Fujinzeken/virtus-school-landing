"use client";

import { useEffect } from "react";
import styles from "./modal.module.css";

export default function BookTourModal({ isOpen, onClose }) {
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

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Schedule a Visit</span>
          <h2 className={styles.title}>Book a Campus Tour</h2>
          <p className={styles.subtitle}>
            Experience Milestone first-hand. Fill out the form below and our
            admissions team will confirm your visit.
          </p>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
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

          {/* Phone + Email row */}
          <div className={styles.row}>
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
            <div className={styles.field}>
              <label className={styles.fieldLabel}>
                Email <span className={styles.fieldRequired}>*</span>
              </label>
              <input
                type="email"
                className={styles.input}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Child's age + Preferred date row */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Child&apos;s Age</label>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  Select age
                </option>
                {Array.from({ length: 13 }, (_, i) => i + 6).map((age) => (
                  <option key={age} value={age}>
                    {age} years old
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Preferred Date</label>
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
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
