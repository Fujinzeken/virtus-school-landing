import styles from "./v2-programmes.module.css";

const programmes = [
  {
    color: "#e8622a",
    ages: "Ages 3–12 · Grades 1–5",
    title: "Primary Years Programme (PYP)",
    desc: "Sparks curiosity through inquiry-based learning, supporting children's natural interests across a transdisciplinary curriculum.",
    highlights: [
      "Inquiry-based learning approach",
      "Transdisciplinary curriculum",
      "Foundation in literacy & numeracy",
      "Natural curiosity & enthusiasm nurtured",
    ],
  },
  {
    color: "#1b3a5c",
    ages: "Ages 11–16 · Grades 6–8",
    title: "Middle Years Programme (MYP)",
    desc: "Develops self-awareness, social responsibility and independent thinking, connecting subjects through interdisciplinary learning.",
    highlights: [
      "Interdisciplinary learning",
      "Personal project development",
      "Self-awareness & social responsibility",
      "Critical analysis & independent thinking",
    ],
  },
  {
    color: "#2e5a8a",
    ages: "Ages 16–19 · Grades 9–12",
    title: "Diploma Programme (DP)",
    desc: "Prepares students for top 100 world universities through deep research, a comprehensive curriculum and professional career guidance.",
    highlights: [
      "3 tracks: Exact, Natural & Social Sciences",
      "Extended Essay & Theory of Knowledge",
      "Creativity, Activity, Service (CAS)",
      "IELTS & SAT certification pathway",
    ],
  },
  {
    color: "#e8622a",
    ages: "Ages 16–19 · Career Track",
    title: "Career-related Programme (CP)",
    desc: "Bridges academic study with career-focused learning — equipping students with practical skills, industry certifications and direct pathways to professional success.",
    highlights: [
      "Industry-relevant practical skills",
      "Real-world career preparation",
      "Combination of DP courses & training",
      "Professional certifications & pathways",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className={styles.checkIcon}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e8622a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ProgrammesV2() {
  return (
    <section className={styles.section} id="programmes">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.labelDot}>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              </svg>
            </span>
            IB Curriculum
          </div>
          <h2 className={styles.title}>
            Four Stages to{" "}
            <span className={styles.titleAccent}>Excellence</span>
          </h2>
          <p className={styles.subtitle}>
            Our International Baccalaureate programme guides students from early
            discovery through to career-ready graduates, with three specialised
            academic tracks and a career pathway.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {programmes.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardBar} style={{ background: p.color }} />
              <div className={styles.cardBody}>
                <span className={styles.cardAge}>{p.ages}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <ul className={styles.cardList}>
                  {p.highlights.map((h) => (
                    <li key={h}>
                      <CheckIcon />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
