import styles from "./cta.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Left: copy */}
          <div className={styles.content}>
            <span className={styles.label}>Start the Journey</span>
            <h2 className={styles.title}>
              Give Your Child the Future They Deserve
            </h2>
            <p className={styles.subtitle}>
              Join the Virtus International family. Limited seats are available
              for the upcoming academic year — take the first step today.
            </p>
          </div>

          {/* Right: action buttons */}
          <div className={styles.actions}>
            {/* Primary CTA */}
            <a href="#apply" className={`${styles.btn} ${styles.btnPrimary}`}>
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Apply Now
            </a>

            {/* Secondary CTAs */}
            <a href="#tour" className={`${styles.btn} ${styles.btnSecondary}`}>
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              Book a Tour
            </a>

            <a
              href="#callback"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Request a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
