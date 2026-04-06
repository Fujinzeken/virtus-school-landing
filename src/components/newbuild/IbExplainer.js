import styles from "./ib-explainer.module.css";

const features = [
  {
    title: "Globally Recognized",
    text: "Accepted by universities in 150+ countries worldwide",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Critical Thinking",
    text: "Teaches independent, analytical and creative reasoning",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Complete Development",
    text: "Intellectual, personal, emotional and social growth",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: "University Doors Open",
    text: "IB Diploma holders access the world's top 50 universities",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function IbExplainer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Left — explanation */}
          <div className={styles.content}>
            <span className={styles.label}>
              <span className={styles.labelDot} />
              For Parents
            </span>
            <h2 className={styles.title}>
              What is the{" "}
              <span className={styles.titleAccent}>
                International Baccalaureate?
              </span>
            </h2>
            <p className={styles.text}>
              The <strong>IB (International Baccalaureate)</strong> is a
              globally recognised education system used in over 5,000 schools
              across 150+ countries. Unlike traditional curricula, the IB
              teaches students <strong>how to think</strong> — not just what to
              memorise.
            </p>
            <p className={styles.text}>
              At Milestone, the IB programme develops your child&apos;s
              <strong> logical thinking, creativity and independence</strong>,
              preparing them not just for exams, but for life. All subjects are
              taught in English, giving graduates a competitive edge at the
              world&apos;s best universities.
            </p>
          </div>

          {/* Right — feature pills */}
          <div className={styles.features}>
            {features.map((f, i) => (
              <div key={i} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureInfo}>
                  <span className={styles.featureTitle}>{f.title}</span>
                  <span className={styles.featureText}>{f.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
