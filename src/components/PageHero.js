import Image from "next/image";
import styles from "./page-hero.module.css";

// Shared hero band for the standalone pages (About, Contact). Mirrors the
// homepage hero's language — rounded image card, dark gradient, content
// bottom-left — but shorter, since these are subpages.
export default function PageHero({
  image,
  alt,
  badge,
  badgeIcon,
  title,
  lead,
  stats,
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 1400px"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.overlay} />

          <div className={styles.content}>
            {badge ? (
              <div className={styles.badge}>
                {badgeIcon}
                {badge}
              </div>
            ) : null}

            <h1 className={styles.title}>{title}</h1>
            {lead ? <p className={styles.lead}>{lead}</p> : null}

            {stats?.length ? (
              <div className={styles.stats}>
                {stats.map((s, i) => (
                  <div key={i} className={styles.stat}>
                    <span className={styles.statNum}>{s.num}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
