import styles from "./page-shell.module.css";

// Numbered process list. Shared by Grants ("how to get a grant") and
// Admissions ("admission stages") — both are ordered procedures, so both
// render an <ol>.
export default function StepList({ steps }) {
  return (
    <ol className={styles.stepList}>
      {steps.map((step, i) => (
        <li key={i} className={styles.step}>
          <span className={styles.stepNum} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className={styles.stepText}>{step}</span>
        </li>
      ))}
    </ol>
  );
}
