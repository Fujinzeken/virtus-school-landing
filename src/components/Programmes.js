import Image from "next/image";
import styles from "./programmes.module.css";

const levels = [
  {
    id: "primary",
    label: "Primary Years (PYP)",
    ages: "Ages 3–12",
    grades: "Grades 1–5",
    image: "/hero3.png",
    color: "#e8762b",
    highlights: [
      "Inquiry-based learning approach",
      "Transdisciplinary curriculum",
      "Foundation in literacy & numeracy",
      "Natural curiosity & enthusiasm nurtured",
    ],
    description:
      "The IB Primary Years Programme sparks curiosity through inquiry-based learning, supporting children\u2019s natural interests across a transdisciplinary curriculum.",
  },
  {
    id: "middle",
    label: "Middle Years (MYP)",
    ages: "Ages 11–16",
    grades: "Grades 6–8",
    image: "/hero2.png",
    color: "#1b3a5c",
    highlights: [
      "Interdisciplinary learning",
      "Personal project development",
      "Self-awareness & social responsibility",
      "Critical analysis & independent thinking",
    ],
    description:
      "The MYP develops self-awareness, social responsibility and independent thinking, connecting different subjects through interdisciplinary learning.",
  },
  {
    id: "high",
    label: "Diploma Programme (DP)",
    ages: "Ages 16–19",
    grades: "Grades 9–12",
    image: "/lib.png",
    color: "#2e5a8a",
    highlights: [
      "Extended Essay & Theory of Knowledge",
      "Creativity, Activity, Service (CAS)",
      "3 tracks: Exact, Natural & Social Sciences",
      "IELTS & SAT certification pathway",
    ],
    description:
      "The IB Diploma prepares students for top 50 world universities through deep research, comprehensive curriculum and professional career guidance.",
  },
  {
    id: "career",
    label: "Career-related Programme (CP)",
    ages: "Ages 16–19",
    grades: "Career Track",
    image: "/campus.png",
    color: "#e8762b",
    highlights: [
      "Industry-relevant practical skills",
      "Real-world career preparation",
      "Combination of DP courses & training",
      "Professional certifications & pathways",
    ],
    description:
      "The IB Career-related Programme bridges academic study with career-focused learning — equipping students with practical skills, industry certifications, and direct pathways to professional success.",
  },
];

export default function Programmes() {
  return (
    <section className={styles.section} id="programmes">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>IB Curriculum</span>
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

        {/* Panels */}
        <div className={styles.panels}>
          {levels.map((level) => (
            <div
              key={level.id}
              className={styles.panel}
              style={{ "--panel-color": level.color }}
            >
              {/* Background image */}
              <div className={styles.panelBg}>
                <Image
                  src={level.image}
                  alt={level.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.panelOverlay} />
              </div>

              {/* Content */}
              <div className={styles.panelContent}>
                {/* Badges */}
                <div className={styles.panelBadges}>
                  <span className={styles.panelAge}>{level.ages}</span>
                  <span className={styles.panelGrade}>{level.grades}</span>
                </div>

                {/* Title */}
                <h3 className={styles.panelTitle}>{level.label}</h3>

                {/* Description (visible on hover) */}
                <p className={styles.panelDesc}>{level.description}</p>

                {/* Highlights */}
                <ul className={styles.panelHighlights}>
                  {level.highlights.map((h, i) => (
                    <li key={i} className={styles.panelHighlight}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#" className={styles.panelCta}>
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
