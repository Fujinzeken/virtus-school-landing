import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./v2-four-pillars.module.css";

export default function FourPillarsV2() {
  const t = useTranslations("FourPillars");
  const pillars = t.raw("items");

  return (
    <section className={styles.section} id="style">
      <div className={styles.imageWrap}>
        <Image
          src="/front.jpg"
          alt={t("imageAlt")}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />

        {/* Title overlay — top left, on the image */}
        <div className={styles.header}>
          <span className={styles.bigNumber}>4</span>
          <h2 className={styles.headerTitle}>{t("heading")}</h2>
        </div>

        {/* Staggered pillar cards over the image */}
        <div className={styles.cards}>
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`${styles.card} ${styles[`card${i + 1}`]}`}
            >
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.text}</p>
              <span className={styles.cardNum}>{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
