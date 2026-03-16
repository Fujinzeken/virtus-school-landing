import Image from "next/image";
import styles from "./programmes.module.css";

const levels = [
  {
    id: "primary",
    label: "Primary School",
    ages: "Ages 6–11",
    grades: "Grades 1–5",
    image: "/hero3.png",
    color: "#e8762b",
    highlights: [
      "Foundation in literacy & numeracy",
      "Inquiry-based learning",
      "Arts, music & physical education",
      "Introduction to world languages",
    ],
    description:
      "Building curiosity and confidence through a nurturing environment where young learners develop essential skills for lifelong success.",
  },
  {
    id: "middle",
    label: "Middle School",
    ages: "Ages 11–14",
    grades: "Grades 6–8",
    image: "/hero2.png",
    color: "#1b3a5c",
    highlights: [
      "Advanced academic disciplines",
      "Critical thinking & research skills",
      "Leadership & community service",
      "STEM and digital literacy",
    ],
    description:
      "Challenging students to think independently and develop the academic rigour needed for advanced study.",
  },
  {
    id: "high",
    label: "High School",
    ages: "Ages 14–18",
    grades: "Grades 9–12",
    image: "/lib.png",
    color: "#2e5a8a",
    highlights: [
      "International Diploma Programme",
      "University preparation pathway",
      "Advanced Placement courses",
      "Career counselling & guidance",
    ],
    description:
      "Preparing graduates for admission to the world\u2019s top universities with a rigorous, globally recognised diploma.",
  },
];

export default function Programmes() {
  return (
    <section className={styles.section} id="programmes">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Academic Pathway</span>
          <h2 className={styles.title}>
            Three Stages to{" "}
            <span className={styles.titleAccent}>Excellence</span>
          </h2>
          <p className={styles.subtitle}>
            A structured journey from foundation years to university
            preparation, each stage designed to unlock your child&apos;s full
            potential.
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
