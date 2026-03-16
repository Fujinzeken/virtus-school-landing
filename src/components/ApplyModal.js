"use client";

import { useEffect } from "react";
import styles from "./modal.module.css";

export default function ApplyModal({ isOpen, onClose }) {
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
          <span className={styles.label}>Enrolment</span>
          <h2 className={styles.title}>Apply Now</h2>
          <p className={styles.subtitle}>
            Start your child&apos;s journey at Virtus International. Complete
            the form and our admissions office will be in touch.
          </p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {/* Parent's name */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              Parent&apos;s Name <span className={styles.fieldRequired}>*</span>
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Full name of parent / guardian"
              required
            />
          </div>

          {/* Phone + Email */}
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

          {/* Child's name */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              Child&apos;s Name <span className={styles.fieldRequired}>*</span>
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Full name of the child"
              required
            />
          </div>

          {/* Child's age + Grade */}
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
              <label className={styles.fieldLabel}>
                Grade Applying For{" "}
                <span className={styles.fieldRequired}>*</span>
              </label>
              <select className={styles.select} defaultValue="" required>
                <option value="" disabled>
                  Select grade
                </option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
          </div>

          {/* Comment */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Comment</label>
            <textarea
              className={styles.textarea}
              placeholder="Any additional information or questions..."
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
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
