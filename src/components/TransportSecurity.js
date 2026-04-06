import Image from "next/image";
import styles from "./transport-security.module.css";

const transportBullets = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    text: "We have two Isuzu buses",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Each bus is comfortably equipped with 30 seats",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
      </svg>
    ),
    text: "They provide transportation to and from the Paxtakor metro station",
  },
];

const securityBullets = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "9 security guards working in 3 shifts",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      </svg>
    ),
    text: "Turnstile system and Telegram group monitoring",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    text: "Additional supervision by tutors and mentors",
  },
];

export default function TransportSecurity() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Free transportation and security system
        </h2>
        <p className={styles.subtitle}>
          Your children will be in safe hands throughout the day.
        </p>

        <div className={styles.grid}>
          {/* Left card -- Transportation */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Free, convenient, and safe transportation
            </h3>

            <ul className={styles.bulletList}>
              {transportBullets.map((b) => (
                <li key={b.text} className={styles.bulletItem}>
                  <div className={styles.bulletIcon}>{b.icon}</div>
                  <span className={styles.bulletText}>{b.text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.cardImage}>
              <Image
                src="/images/real-school/hovli.png"
                alt="School transportation"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right card -- Security */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Safety at school is our top priority
            </h3>

            <ul className={styles.bulletList}>
              {securityBullets.map((b) => (
                <li key={b.text} className={styles.bulletItem}>
                  <div className={styles.bulletIcon}>{b.icon}</div>
                  <span className={styles.bulletText}>{b.text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.cardImage}>
              <Image
                src="/images/real-school/reception.jpg"
                alt="School security"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
