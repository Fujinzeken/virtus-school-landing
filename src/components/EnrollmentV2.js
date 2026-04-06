"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./v2-enrollment.module.css";

export default function EnrollmentV2() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setName("");
    setPhone("");
  }

  return (
    <section className={styles.section} id="admissions">
      <div className={styles.outer}>
        <div className={styles.wrapper}>
          {/* ── Left side: text + CEO cutout + quote ── */}
          <div className={styles.left}>
            {/* Heading */}
            <div className={styles.headingRow}>
              <div className={styles.pillIcon}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h2 className={styles.heading}>
                2024-2025 Academic Year
                <br />
                Enrollment is Now Open
              </h2>
            </div>

            <p className={styles.subtext}>
              Hurry to apply for the best educational opportunities at Milestone
              International School!
            </p>

            {/* Quote banner at bottom */}
            <div className={styles.quoteBanner}>
              <p className={styles.quoteText}>
                Milestone International School&apos;s mission is to strive for
                excellence!
              </p>
              <cite className={styles.quoteAuthor}>
                <strong>&mdash; Niyozov Shahboz</strong>
                <span>MIS Director &amp; Founder</span>
              </cite>
            </div>

          </div>

          {/* CEO cutout image — anchored to wrapper, between columns */}
          <div className={styles.ceoWrap}>
            <Image
              src="/ceo.webp"
              alt="Niyozov Shahboz — MIS Director & Founder"
              fill
              sizes="(max-width: 800px) 50vw, 380px"
              style={{
                objectFit: "contain",
                objectPosition: "bottom center",
              }}
              priority
            />
          </div>

          {/* ── Right side: form ── */}
          <div className={styles.right}>
            <h3 className={styles.formHeading}>
              Fill out the form and we will contact you.
            </h3>
            <p className={styles.formSubtext}>
              After filling out the form, our personal manager will call you.
            </p>

            {submitted ? (
              <p className={styles.successMsg}>
                Thank you! We will contact you shortly.
              </p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <div className={styles.phoneRow}>
                  <div className={styles.phonePrefix}>
                    <span role="img" aria-label="Uzbekistan flag">
                      🇺🇿
                    </span>{" "}
                    +998
                  </div>
                  <input
                    className={styles.phoneInput}
                    type="tel"
                    placeholder="00-000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit an application
                </button>
              </form>
            )}

            <p className={styles.disclaimer}>
              *Your information will not be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
