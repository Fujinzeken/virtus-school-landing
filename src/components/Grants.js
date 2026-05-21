import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./grants.module.css";

export default function Grants() {
  const t = useTranslations("Grants");

  return (
    <section className={styles.section} id="grant">
      <div className={styles.container}>
        {/* Header */}
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.subtitle}>{t("subtitle")}</p>

        {/* 3-column layout */}
        <div className={styles.layout}>
          {/* Left image */}
          <div className={styles.imageWrap}>
            <Image
              src="/scholarship.png"
              alt={t("imgLeftAlt")}
              fill
              sizes="320px"
              style={{ objectFit: "cover" }}
            />
            <div className={`${styles.logoWatermark} ${styles.logoLeft}`}>
              <Image src="/virtus-mark.png" alt={t("logoAlt")} width={32} height={40} />
            </div>
          </div>

          {/* Center card */}
          <div className={styles.centerCard}>
            <div className={styles.columns}>
              {/* Discounts column */}
              <div className={styles.column}>
                <div className={styles.iconCircle}>%</div>
                <h3 className={styles.colLabel}>{t("discountsLabel")}</h3>

                <p className={styles.stat}>{t("discount1Stat")}</p>
                <p className={styles.statDesc}>{t("discount1Desc")}</p>

                <div className={styles.divider} />

                <p className={styles.stat}>{t("discount2Stat")}</p>
                <p className={styles.statDesc}>{t("discount2Desc")}</p>
              </div>

              {/* Grants column */}
              <div className={styles.column}>
                <div className={styles.iconCircle}>$</div>
                <h3 className={styles.colLabel}>{t("grantsLabel")}</h3>

                <p className={styles.stat}>{t("grantsStat")}</p>
                <p className={styles.statDesc}>{t("grantsStatDesc")}</p>

                <div className={styles.divider} />

                <p className={styles.statDesc}>{t("grantsDesc")}</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className={styles.imageWrap}>
            <Image
              src="/virtus.jpg"
              alt={t("imgRightAlt")}
              fill
              sizes="320px"
              style={{ objectFit: "cover" }}
            />
            <div className={`${styles.logoWatermark} ${styles.logoRight}`}>
              <Image src="/virtus-mark.png" alt={t("logoAlt")} width={32} height={40} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <a href="#admissions" className={styles.ctaBtn}>
            <span>{t("cta")}</span>
            <span className={styles.arrowCircle}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
