import styles from "./page-shell.module.css";

// Row of cards each carrying a small tag (an age range, a stage). Used for the
// MYP / PYP pair on Admissions and Programs. `headingLevel` lets the caller
// choose h2 or h3 depending on whether the cards are the section's own
// headings or sit beneath one.
export default function TagCards({ items, headingLevel = "h2" }) {
  const Heading = headingLevel;
  return (
    <div className={styles.routeGrid}>
      {items.map((item, i) => (
        <article key={i} className={styles.routeCard}>
          {item.tag ? <span className={styles.routeTag}>{item.tag}</span> : null}
          <Heading className={styles.routeHeading}>{item.title}</Heading>
          <p className={styles.routeBody}>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
