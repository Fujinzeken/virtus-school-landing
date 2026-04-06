"use client";

import { useState } from "react";
import styles from "./admission-stages.module.css";

const steps = [
  "Submit your information and register on our website",
  "Our specialist will contact you to schedule an interview",
  "You will have an interview with the director",
  "After the interview and tests, receive admission decision",
  "Complete necessary documentation and make registration payment",
];

export default function AdmissionStages() {
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
            <h2 className={styles.heading}>
              Admissions for the 2024-2025 academic year have begun.
            </h2>

            <h3 className={styles.stagesLabel}>Admission stages:</h3>

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
            <h3 className={styles.formHeading}>
              Leave your information so we can contact you
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
