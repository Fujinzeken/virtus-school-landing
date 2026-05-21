import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./v2-classroom-features.module.css";

const featureMeta = [
  {
    image: "/images/real-school/oshxona1.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
  {
    image: "/images/real-school/sinf 05.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    image: "/images/real-school/sinf 01.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    image: "/images/real-school/sinf01.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    ),
  },
];

export default function ClassroomFeaturesV2() {
  const t = useTranslations("ClassroomFeatures");
  const items = t.raw("items");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {featureMeta.map((f, i) => (
          <div key={i} className={styles.card}>
            {/* Image with icon badge */}
            <div className={styles.cardImageWrap}>
              <Image
                src={f.image}
                alt={items[i].title}
                fill
                sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.iconBadge}>{f.icon}</div>
            </div>
            {/* Text content */}
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{items[i].title}</h3>
              <p className={styles.cardText}>{items[i].text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
