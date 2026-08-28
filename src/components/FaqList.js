import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "@/components/icons";
import styles from "./faq-page.module.css";

const num = (i) => String(i + 1).padStart(2, "0");

// Dedicated FAQ page body. Unlike the homepage accordion, every answer is
// rendered open: this page exists to be read and extracted, so nothing is
// hidden behind a click. The H2 set is exactly the seven questions, which is
// what the content spec asks for.
export default function FaqList({ items, aside }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <aside className={styles.aside}>
            <div className={styles.panel}>
              <span className={styles.panelLabel}>{aside.label}</span>
              {/* Not an H2 — the page's H2s are reserved for the questions. */}
              <p className={styles.panelHeading}>{aside.heading}</p>

              <ol className={styles.jumpList}>
                {items.map((item, i) => (
                  <li key={i}>
                    <a className={styles.jumpLink} href={`#q${num(i)}`}>
                      <span className={styles.jumpNum}>{num(i)}</span>
                      <span className={styles.jumpText}>{item.q}</span>
                    </a>
                  </li>
                ))}
              </ol>

              <p className={styles.panelNote}>{aside.note}</p>
              <Link className={styles.panelCta} href="/contact">
                {aside.cta}
                <ArrowUpRight />
              </Link>
            </div>
          </aside>

          <div className={styles.list}>
            {items.map((item, i) => (
              <article key={i} id={`q${num(i)}`} className={styles.card}>
                <span className={styles.cardNum} aria-hidden="true">
                  {num(i)}
                </span>
                <div className={styles.cardBody}>
                  <h2 className={styles.question}>{item.q}</h2>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
