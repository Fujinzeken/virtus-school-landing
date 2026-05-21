"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { submitLead } from "@/lib/submitLead";
import styles from "./v2-enrollment.module.css";

export default function EnrollmentV2() {
  const t = useTranslations("Enrollment");
  const tf = useTranslations("Form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSending(true);
    const ok = await submitLead({
      formType: "enrollment",
      name: name.trim(),
      phone: `+998 ${phone.trim()}`,
      company,
    });
    setSending(false);
    if (!ok) {
      alert(tf("error"));
      return;
    }
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
              <h2 className={styles.heading}>{t("heading")}</h2>
            </div>

            <p className={styles.subtext}>{t("subtext")}</p>

            {/* Quote banner at bottom */}
            <div className={styles.quoteBanner}>
              <p className={styles.quoteText}>{t("quoteText")}</p>
              <cite className={styles.quoteAuthor}>
                <strong>{t("quoteAuthor")}</strong>
                <span>{t("quoteRole")}</span>
              </cite>
            </div>
          </div>

          {/* CEO cutout image — anchored to wrapper, between columns */}
          <div className={styles.ceoWrap}>
            <Image
              src="/ceo.webp"
              alt={t("ceoAlt")}
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
            <h3 className={styles.formHeading}>{t("formHeading")}</h3>
            <p className={styles.formSubtext}>{tf("subtext")}</p>

            {submitted ? (
              <p className={styles.successMsg}>{tf("success")}</p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={tf("namePlaceholder")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <div className={styles.phoneRow}>
                  <div className={styles.phonePrefix}>
                    <span role="img" aria-label={tf("flagLabel")}>
                      🇺🇿
                    </span>{" "}
                    +998
                  </div>
                  <input
                    className={styles.phoneInput}
                    type="tel"
                    placeholder={tf("phonePlaceholder")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                />

                <button type="submit" className={styles.submitBtn} disabled={sending}>
                  {sending ? tf("sending") : tf("submit")}
                </button>
              </form>
            )}

            <p className={styles.disclaimer}>{tf("disclaimer")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
