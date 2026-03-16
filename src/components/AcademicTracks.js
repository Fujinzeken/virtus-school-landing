import styles from "./academic-tracks.module.css";

const tracks = [
  {
    color: "#e8762b",
    badge: "Track A",
    title: "Exact Sciences",
    description:
      "Deep focus on mathematics, physics and information technologies, developing technical knowledge and analytical thinking skills that power careers in engineering, tech and data science.",
    subjects: ["Mathematics", "Physics", "IT", "SAT Prep"],
    outcome: "Future engineers, developers and data scientists",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    color: "#2e8a5a",
    badge: "Track B",
    title: "Natural Sciences",
    description:
      "Chemistry, biology and geography taught in depth with laboratory exercises every lesson. A solid foundation for future scientists, doctors and healthcare professionals.",
    subjects: ["Chemistry", "Biology", "Geography", "Lab Work"],
    outcome: "Future doctors, scientists and researchers",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    color: "#1b3a5c",
    badge: "Track C",
    title: "Social Sciences",
    description:
      "History, law, economics and business management studied in depth, equipping students with social and economic knowledge to become future leaders and decision-makers.",
    subjects: ["History", "Law", "Economics", "Business"],
    outcome: "Future lawyers, politicians and business leaders",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

export default function AcademicTracks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Choose Your Direction</span>
          <h2 className={styles.title}>
            3 Specialised{" "}
            <span className={styles.titleAccent}>Academic Tracks</span>
          </h2>
          <p className={styles.subtitle}>
            Every student chooses a direction that fits their strengths and
            career ambitions. Each track goes deep — preparing graduates not
            just for university, but for the career beyond it.
          </p>
        </div>

        {/* Track cards */}
        <div className={styles.grid}>
          {tracks.map((track, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ "--track-color": track.color }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <div className={styles.icon}>{track.icon}</div>
                </div>
                <span className={styles.badge}>{track.badge}</span>
              </div>

              <h3 className={styles.cardTitle}>{track.title}</h3>
              <p className={styles.cardDesc}>{track.description}</p>

              <div className={styles.subjects}>
                {track.subjects.map((s, j) => (
                  <span key={j} className={styles.subject}>
                    {s}
                  </span>
                ))}
              </div>

              <div className={styles.outcome}>
                <svg
                  className={styles.outcomeIcon}
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
                <span className={styles.outcomeText}>
                  <strong>Career path:</strong> {track.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note bar */}
        <div className={styles.note}>
          <div className={styles.noteItem}>
            <span className={styles.noteDot} />
            <span>
              <strong>Mathematics</strong> taught in depth across all tracks
            </span>
          </div>
          <div className={styles.noteItem}>
            <span className={styles.noteDot} />
            <span>
              <strong>English</strong> is the primary language of instruction
            </span>
          </div>
          <div className={styles.noteItem}>
            <span className={styles.noteDot} />
            <span>
              <strong>IELTS &amp; SAT</strong> certification for Exact Sciences
              graduates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
