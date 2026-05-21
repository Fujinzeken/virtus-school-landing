"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./faq.module.css";

export default function Faq() {
  const t = useTranslations("Faq");
  const faqs = t.raw("items");
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className={styles.section} id="qa">
      <div className={styles.container}>
        <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.accordion}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={styles.item}>
                <button
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.questionText}>{faq.q}</span>
                  <span
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <p className={styles.answerText}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
