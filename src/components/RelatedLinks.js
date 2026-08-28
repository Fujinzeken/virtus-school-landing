import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "@/components/icons";
import styles from "./page-shell.module.css";

// Internal cross-links between the info pages, required by the content spec.
// Shared by FAQ / Admissions / Grants / Programs — each passes its own set.
export default function RelatedLinks({ heading, items }) {
  return (
    <section className={styles.related}>
      <div className={styles.container}>
        <h2 className={styles.relatedHeading}>{heading}</h2>
        <div className={styles.relatedGrid}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={styles.relatedCard}>
              <span className={styles.relatedTitle}>
                {item.title}
                <ArrowUpRight />
              </span>
              <span className={styles.relatedDesc}>{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
