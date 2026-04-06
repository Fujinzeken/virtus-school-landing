"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./cta.module.css";
import RequestCallModal from "./RequestCallModal";

export default function CtaBanner() {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <Image
            src="/images/real-school/karidor.jpg"
            alt="School corridor"
            fill
            style={{ objectFit: "cover" }}
            priority={false}
          />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Did you not find answers to your questions?
            </h2>
            <div className={styles.right}>
              <p className={styles.note}>
                *Contact us and we will provide detailed information
              </p>
              <button
                type="button"
                className={styles.button}
                onClick={() => setCallOpen(true)}
              >
                Ask a question
              </button>
            </div>
          </div>
        </div>
      </div>

      <RequestCallModal isOpen={callOpen} onClose={() => setCallOpen(false)} />
    </section>
  );
}
