import TagCards from "@/components/TagCards";
import shell from "./page-shell.module.css";
import styles from "./programs-page.module.css";

// Three blocks: the two IB stages, the three academic tracks, then the
// extracurricular provision. The track headings are the page's H2s, so the IB
// stage cards drop to h3 beneath their own section heading.
export default function ProgramsBody({ ib, tracks, development }) {
  return (
    <>
      <section className={styles.ib}>
        <div className={shell.container}>
          <h2 className={styles.heading}>{ib.heading}</h2>
          <p className={styles.intro}>{ib.body}</p>
          <TagCards items={ib.items} headingLevel="h3" />
        </div>
      </section>

      <section className={styles.tracks}>
        <div className={shell.container}>
          <span className={shell.sectionLabel}>{tracks.heading}</span>
          <p className={styles.tracksIntro}>{tracks.body}</p>
          <div className={styles.trackGrid}>
            {tracks.items.map((track, i) => (
              <article key={i} className={styles.trackCard}>
                <span className={styles.trackNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className={styles.trackHeading}>{track.title}</h2>
                <p className={styles.trackSubjects}>{track.subjects}</p>
                <p className={styles.trackBody}>{track.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.development}>
        <div className={shell.container}>
          <div className={styles.devPanel}>
            <div className={styles.devText}>
              <h2 className={styles.devHeading}>{development.heading}</h2>
              <p className={styles.devIntro}>{development.body}</p>
            </div>
            <ul className={styles.devList}>
              {development.items.map((item, i) => (
                <li key={i} className={styles.devItem}>
                  <span className={styles.devItemTitle}>{item.title}</span>
                  <span className={styles.devItemBody}>{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
