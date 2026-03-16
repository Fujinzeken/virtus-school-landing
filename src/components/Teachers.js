import Image from "next/image";
import styles from "./teachers.module.css";

const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Head of Science Department",
    subject: "Physics & Chemistry",
    experience: "12 years",
    image: "/images/teachers/sarah1.jpg",
    objectPosition: "30% top",
  },
  {
    id: 2,
    name: "James Okonkwo",
    role: "Senior Mathematics Teacher",
    subject: "Mathematics",
    experience: "9 years",
    image: "/images/teachers/james.jpg",
  },
  {
    id: 3,
    name: "Elena Petrova",
    role: "Head of Languages",
    subject: "English & Russian",
    experience: "15 years",
    image: "/images/teachers/elena.jpg",
  },
  {
    id: 4,
    name: "David Park",
    role: "Sports & Wellbeing Lead",
    subject: "Physical Education",
    experience: "8 years",
    image: "/images/teachers/david1.jpg",
  },
];

export default function Teachers() {
  return (
    <section className={styles.section} id="teachers">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Our Faculty</span>
          <h2 className={styles.title}>
            Meet the <span className={styles.titleAccent}>Educators</span>
          </h2>
          <p className={styles.subtitle}>
            World-class teachers from over 12 countries, handpicked for their
            expertise, passion, and commitment to student success.
          </p>
        </div>

        {/* Teacher cards */}
        <div className={styles.grid}>
          {teachers.map((t) => (
            <div key={t.id} className={styles.card}>
              {/* Photo */}
              <div className={styles.photoWrap}>
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: t.objectPosition || "center center",
                  }}
                />
                <div className={styles.photoOverlay} />
                <span className={styles.subjectBadge}>{t.subject}</span>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <h3 className={styles.name}>{t.name}</h3>
                <p className={styles.role}>{t.role}</p>
                <div className={styles.experience}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{t.experience} experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className={styles.ctaRow}>
          <a href="/teachers" className={styles.ctaBtn}>
            <span>View All Teachers</span>
            <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
