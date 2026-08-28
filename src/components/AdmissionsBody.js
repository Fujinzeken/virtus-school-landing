import StepList from "@/components/StepList";
import TagCards from "@/components/TagCards";
import shell from "./page-shell.module.css";
import styles from "./admissions-page.module.css";

// The five sections the content spec asks for. MYP and PYP sit side by side
// because they are parallel routes through the same stage — a candidate takes
// one or the other depending on age.
export default function AdmissionsBody({ sections }) {
  const { stages, who, myp, pyp, year } = sections;

  return (
    <>
      {/* 1 — Admission stages */}
      <section className={styles.stages}>
        <div className={shell.container}>
          <h2 className={styles.heading}>{stages.heading}</h2>
          <p className={styles.intro}>{stages.body}</p>
          <StepList steps={stages.steps} />
        </div>
      </section>

      {/* 2 — Who we accept */}
      <section className={styles.who}>
        <div className={shell.container}>
          <div className={shell.proseGrid}>
            <div className={shell.proseAside}>
              <h2 className={shell.sectionHeading}>{who.heading}</h2>
            </div>
            <div className={shell.proseBody}>
              <p className={shell.paragraph}>{who.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 + 4 — the two assessment routes, in parallel */}
      <section className={styles.routes}>
        <div className={shell.container}>
          <TagCards
            items={[myp, pyp].map((r) => ({
              tag: r.tag,
              title: r.heading,
              body: r.body,
            }))}
          />
        </div>
      </section>

      {/* 5 — Academic year and class size */}
      <section className={styles.year}>
        <div className={shell.container}>
          <div className={styles.yearPanel}>
            <div>
              <h2 className={styles.yearHeading}>{year.heading}</h2>
              <p className={styles.yearBody}>{year.body}</p>
            </div>
            <p className={styles.yearNote}>{year.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
