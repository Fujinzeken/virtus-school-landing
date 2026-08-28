import { CheckIcon } from "@/components/icons";
import StepList from "@/components/StepList";
import shell from "./page-shell.module.css";
import styles from "./grants-page.module.css";

// The four sections the content spec asks for, in the order its H2 list gives
// them: what a grant is, family discounts, how to apply, how to keep it.
export default function GrantsBody({ label, sections }) {
  const { grants, family, how, retention } = sections;

  return (
    <>
      {/* 1 — Tuition grants */}
      <section className={shell.prose}>
        <div className={shell.container}>
          <div className={shell.proseGrid}>
            <div className={shell.proseAside}>
              <span className={shell.sectionLabel}>{label}</span>
              <h2 className={shell.sectionHeading}>{grants.heading}</h2>
            </div>
            <div className={shell.proseBody}>
              <p className={shell.paragraph}>{grants.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Family discounts */}
      <section className={styles.discounts}>
        <div className={shell.container}>
          <h2 className={styles.heading}>{family.heading}</h2>
          <p className={styles.intro}>{family.body}</p>
          <div className={styles.discountGrid}>
            {family.items.map((item, i) => (
              <div key={i} className={styles.discountCard}>
                <span className={styles.discountStat}>{item.stat}</span>
                <p className={styles.discountDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — How to get a grant */}
      <section className={styles.steps}>
        <div className={shell.container}>
          <h2 className={styles.heading}>{how.heading}</h2>
          <p className={styles.intro}>{how.body}</p>
          <StepList steps={how.steps} />
        </div>
      </section>

      {/* 4 — Retention conditions */}
      <section className={styles.retention}>
        <div className={shell.container}>
          <div className={styles.retentionPanel}>
            <div className={styles.retentionText}>
              <h2 className={styles.retentionHeading}>{retention.heading}</h2>
              <p className={styles.retentionIntro}>{retention.body}</p>
            </div>
            <ul className={styles.checkList}>
              {retention.items.map((item, i) => (
                <li key={i} className={styles.checkItem}>
                  <span className={styles.checkIcon}>
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
