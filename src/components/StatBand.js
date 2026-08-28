import styles from "./page-shell.module.css";

// Key-figures strip under a page hero. Reusable across the info pages —
// Grants uses it for grant counts and discount ranges.
export default function StatBand({ items }) {
  return (
    <section className={styles.statBand}>
      <div className={styles.container}>
        <div className={styles.statRow}>
          {items.map((s, i) => (
            <div key={i} className={styles.statCell}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
