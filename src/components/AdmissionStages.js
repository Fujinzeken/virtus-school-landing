"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./admission-stages.module.css";

export default function AdmissionStages() {
  const t = useTranslations("AdmissionStages");
  const tf = useTranslations("Form");
  const steps = t.raw("steps");
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
    <section className={styles.section} id="admission-stages">
      <div className={styles.outer}>
        <div className={styles.wrapper}>
          {/* Left side: stages */}
          <div className={styles.left}>
            <h2 className={styles.heading}>{t("heading")}</h2>

            <h3 className={styles.stagesLabel}>{t("stagesLabel")}</h3>

            <div className={styles.steps}>
              {steps.map((step, i) => (
                <div key={i} className={styles.step}>
                  <div className={styles.stepNumber}>{i + 1}</div>
                  <p className={styles.stepText}>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: form */}
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

                <button type="submit" className={styles.submitBtn}>
                  {tf("submit")}
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
