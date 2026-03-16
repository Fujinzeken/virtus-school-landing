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
            Highly qualified educators using modern methods, each chosen for
            their expertise, passion, and commitment to every student&apos;s
            success.
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

        {/* The Milestone Support Ecosystem */}
        <div className={styles.ecosystem}>
          <div className={styles.ecosystemHeader}>
            <span className={styles.ecosystemLabel}>Student Wellbeing</span>
            <h3 className={styles.ecosystemTitle}>
              An Integrated Support Ecosystem
            </h3>
            <p className={styles.ecosystemSubtitle}>
              At Milestone, we believe academic success is only possible when a
              child feels seen, supported, and connected. Our system ensures no
              student is ever just a number.
            </p>
          </div>

          <div className={styles.ecosystemGrid}>
            {/* Mentorship */}
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M9 21v-2a4 4 0 0 1 4-4" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className={styles.pillarTitle}>Personalised Mentorship</h4>
              <p className={styles.pillarText}>
                Dedicated mentors guide groups of 40–50 students, knowing each
                child&apos;s strengths and acting as a vital bridge between
                school and home life.
              </p>
              <ul className={styles.pillarList}>
                <li>Daily academic & disciplinary updates</li>
                <li>Individual progress tracking</li>
                <li>Quarterly parent strategy sessions</li>
              </ul>
            </div>

            {/* Psychological Support */}
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <h4 className={styles.pillarTitle}>Wellbeing & Adaptation</h4>
              <p className={styles.pillarText}>
                Professional psychologists oversee student wellbeing, managing
                transition programs and providing a safe, supportive space for
                emotional growth.
              </p>
              <ul className={styles.pillarList}>
                <li>Specialized adaptation for new students</li>
                <li>Weekly &quot;School of Mothers&quot; sessions</li>
                <li>Private individual & group counseling</li>
              </ul>
            </div>

            {/* Telegram Bot */}
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </div>
              <h4 className={styles.pillarTitle}>Digital Transparency</h4>
              <p className={styles.pillarText}>
                Our custom Telegram bot ensures real-time transparency,
                providing parents with instant access to academic achievements
                and disciplinary logs.
              </p>
              <ul className={styles.pillarList}>
                <li>Instant attendance & conduct alerts</li>
                <li>Real-time academic achievement logs</li>
                <li>Direct one-tap mentor communication</li>
              </ul>
            </div>
          </div>
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
