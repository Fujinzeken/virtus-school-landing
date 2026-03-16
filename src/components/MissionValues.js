import styles from "./mission-values.module.css";

const values = [
  {
    number: "01",
    title: "Logical Thinking",
    text: "We teach students to use logical thinking and analytical approaches. Logic and analysis are the basis of any decision-making process and the key to success in life.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Creative Approach",
    text: "We teach students to approach life problems creatively and practically — using resources efficiently and developing their creative potential for new ideas.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Independent Thinking",
    text: "We teach students to think independently and follow their own life principles without being swayed by external influences — making the most effective decisions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Best Solutions",
    text: "We teach students to analyse different situations and make the most effective decisions — evaluating situations based on logic and practice, not emotions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

export default function MissionValues() {
  return (
    <section className={styles.section}>
      <div className={styles.grain} />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Our Mission &amp; Values</span>
          <h2 className={styles.title}>
            Empowering Inner Strength.{" "}
            <span className={styles.titleAccent}>
              Guiding Every Child Toward Excellence.
            </span>
          </h2>
          <p className={styles.mission}>
            Milestone International School strives for excellence. We discover
            the inner strength of every child and guide them toward their dreams
            — educating individuals who think logically, act creatively, and
            succeed on a global scale.
          </p>
        </div>

        {/* Values grid */}
        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.number} className={styles.card}>
              <span className={styles.cardNumber}>Value {v.number}</span>
              <div className={styles.iconWrap}>
                <div className={styles.icon}>{v.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardText}>{v.text}</p>
            </div>
          ))}
        </div>

        {/* Motto */}
        <div className={styles.motto}>
          <p className={styles.mottoText}>
            Our Motto:{" "}
            <span className={styles.mottoHighlight}>
              &quot;We Are Together at an Important Stage&quot;
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
