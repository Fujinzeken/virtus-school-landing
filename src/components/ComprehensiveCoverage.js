import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./comprehensive-coverage.module.css";

const cardImages = [
  "/images/real-school/comp.jpg",
  "/images/real-school/gym.png",
  "/images/real-school/martial-arts.png",
  "/images/real-school/science.png",
];

export default function ComprehensiveCoverage() {
  const t = useTranslations("ComprehensiveCoverage");
  const pills = t.raw("pills");
  const cards = t.raw("cards");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top row: title + description card */}
        <div className={styles.topRow}>
          <h2 className={styles.title}>{t("title")}</h2>
          <div className={styles.descCard}>
            <p className={styles.descText}>{t("descText")}</p>
          </div>
        </div>

        {/* Tag pills */}
        <div className={styles.pills}>
          {pills.map((pill) => (
            <span key={pill} className={styles.pill}>
              {pill}
            </span>
          ))}
        </div>

        {/* Extracurricular cards */}
        <div className={styles.cardGrid}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={cardImages[i]}
                  alt={card.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.categoryTag}>{card.category}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
