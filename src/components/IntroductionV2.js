import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./v2-intro.module.css";

export default function IntroductionV2() {
  const t = useTranslations("Introduction");

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* ── TOP: Big logo left, mission text right ── */}
        <div className={styles.topRow}>
          <div className={styles.logoBlock}>
            <Image
              src="/virtus-logo-stacked.png"
              alt={t("logoAlt")}
              width={514}
              height={654}
              className={styles.logoImg}
            />
          </div>
          <div className={styles.missionBlock}>
            <p className={styles.missionText}>{t("mission")}</p>
            <p className={styles.missionAccent}>{t("missionAccent")}</p>
          </div>
        </div>

        {/* ── MIDDLE: Campus info two columns ── */}
        <div className={styles.bottomRow}>
          <div className={styles.campusCol}>
            <div className={styles.colHeading}>
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h2 className={styles.colTitle}>{t("campusTitle")}</h2>
            </div>
            <p className={styles.colText}>{t("campusText")}</p>
          </div>
          <div className={styles.classroomCol}>
            <p className={styles.classroomText}>{t("classroomText")}</p>
          </div>
        </div>

        {/* ── BOTTOM: campus photo + stat bubbles left, 3 room photos right ── */}
        <div className={styles.galleryRow}>
          {/* Left: building photo with floating stats */}
          <div className={styles.galleryMain}>
            <Image
              src="/images/real-school/hovli.png"
              alt={t("buildingAlt")}
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{ objectFit: "cover", borderRadius: "12px" }}
              priority
            />
            {/* Stat: navy circle */}
            <div className={`${styles.bubble} ${styles.bubbleNavy}`}>
              <span className={styles.bubbleStat}>{t("landStat")}</span>
              <span className={styles.bubbleLabel}>{t("landLabel")}</span>
            </div>
            {/* Stat: red/coral circle */}
            <div className={`${styles.bubble} ${styles.bubbleRed}`}>
              <span className={styles.bubbleBig}>{t("capacityStat")}</span>
              <span className={styles.bubbleLabel}>{t("capacityLabel")}</span>
            </div>
            {/* Stat: white circle */}
            <div className={`${styles.bubble} ${styles.bubbleWhite}`}>
              <span className={styles.bubbleLabelDark}>{t("buildingLabel")}</span>
            </div>
          </div>

          {/* Right: 3 stacked photos */}
          <div className={styles.galleryStack}>
            {[
              { src: "/images/real-school/comp.jpg", alt: "Computer lab" },
              { src: "/images/real-school/library.png", alt: "Library" },
              { src: "/images/real-school/gym.png", alt: "Sports" },
            ].map(({ src, alt }) => (
              <div key={src} className={styles.galleryThumb}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.thumbOverlay}>
                  <button className={styles.moreBtn}>
                    <span className={styles.morePlus}>+</span>
                    {t("moreDetails")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
