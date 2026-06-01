import Image from "next/image";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";
import styles from "./v2-amenities.module.css";

const facilityImages = [
  "/images/real-school/sinf01.png",
  "/images/real-school/gym.png",
  "/images/real-school/oshxona1.jpg",
  "/images/real-school/library.png",
];

const tutorAvatars = [
  "/images/teachers/sarah1.jpg",
  "/images/teachers/james.jpg",
  "/images/teachers/elena.jpg",
  "/images/teachers/david1.jpg",
];

export default function AmenitiesV2() {
  const t = useTranslations("Amenities");
  const facilities = t.raw("facilities");
  const staffTop = t.raw("staffTop");

  return (
    <section className={styles.section} id="advantage">
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <div className={styles.pillIcon}>
            <svg
              width="15"
              height="15"
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
          <h2 className={styles.title}>{t("title")}</h2>
        </div>

        {/* Facility cards — seamless auto-scroll via react-fast-marquee */}
        <div className={styles.facilityScrollOuter}>
          <Marquee speed={40} pauseOnHover autoFill>
            {facilities.map((f, i) => (
              <div key={i} className={styles.facilityCard}>
                <div className={styles.facilityImgWrap}>
                  <Image
                    src={facilityImages[i % facilityImages.length]}
                    alt={f.title}
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover" }}
                    loading="eager"
                  />
                  <div className={styles.facilityBanner}>
                    <p className={styles.facilityBannerText}>{f.title}</p>
                  </div>
                </div>
                <p className={styles.facilityDesc}>{f.desc}</p>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Staff cards -- top row (3 columns) */}
        <div className={styles.staffGrid}>
          {staffTop.map((s, i) => (
            <div key={i} className={styles.staffCard}>
              <Image
                src="/virtus-logo.png"
                alt={t("logoAlt")}
                width={754}
                height={339}
                className={styles.staffLogo}
              />
              <h3 className={styles.staffTitle}>{s.title}</h3>
              <p className={styles.staffText}>{s.text}</p>
            </div>
          ))}
        </div>

        {/* Staff cards -- bottom row (tutor + wide faculty card) */}
        <div className={styles.staffGridBottom}>
          <div className={styles.staffCard}>
            <Image src="/virtus-logo.png" alt={t("logoAlt")} width={754} height={339} className={styles.staffLogo} />
            <h3 className={styles.staffTitle}>{t("tutorTitle")}</h3>
            <p className={styles.staffText}>{t("tutorText")}</p>
            {/* Tutor avatar stack */}
            <div className={styles.avatarRow}>
              {tutorAvatars.map((src, i) => (
                <div key={i} className={styles.avatar}>
                  <Image
                    src={src}
                    alt={t("tutorAlt")}
                    fill
                    sizes="48px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
              <div className={styles.avatarCount}>+15</div>
            </div>
          </div>

          <div className={styles.staffCardWide}>
            <div className={styles.wideContent}>
              <h3 className={styles.staffTitle}>{t("facultyTitle")}</h3>
              <p className={styles.staffText}>{t("facultyText")}</p>
            </div>
            <div className={styles.wideImgWrap}>
              <Image
                src="/images/why/curriculum1.png"
                alt={t("facultyAlt")}
                fill
                sizes="160px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
