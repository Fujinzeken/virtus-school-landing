"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./cta.module.css";
import RequestCallModal from "./RequestCallModal";

export default function CtaBanner() {
  const [callOpen, setCallOpen] = useState(false);
  const t = useTranslations("Cta");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <Image
            src="/images/real-school/karidor.jpg"
            alt={t("imageAlt")}
            fill
            style={{ objectFit: "cover" }}
            priority={false}
          />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h2 className={styles.heading}>{t("heading")}</h2>
            <div className={styles.right}>
              <p className={styles.note}>{t("note")}</p>
              <button
                type="button"
                className={styles.button}
                onClick={() => setCallOpen(true)}
              >
                {t("button")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <RequestCallModal isOpen={callOpen} onClose={() => setCallOpen(false)} />
    </section>
  );
}
