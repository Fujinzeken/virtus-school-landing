import styles from './educational-directions.module.css';

export default function EducationalDirections() {
  return (
    <section id="programme" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.pill}>3 SPECIALIZED TRACKS</span>
          <h2 className={styles.title}>Educational Directions</h2>
          <p className={styles.subtitle}>
            Mathematics and English are taught in depth across all tracks, ensuring international competitiveness.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {/* Card 1 - Exact Sciences */}
          <div className={`${styles.card} ${styles.cardDark}`}>
            <span className={`${styles.bgNumber} ${styles.bgNumberDark}`}>01</span>
            <div className={`${styles.iconBox} ${styles.iconBoxDark}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="#ffffff" strokeWidth="1.5" />
                <path d="M7 7h4v4H7V7z" fill="#ffffff" opacity="0.6" />
                <path d="M15 8h-2M15 10h-2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 15l2 2m0-2l-2 2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 16h2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Exact Sciences</h3>
            <div className={styles.pills}>
              <span className={`${styles.pillTag} ${styles.pillTagDark}`}>Mathematics</span>
              <span className={`${styles.pillTag} ${styles.pillTagDark}`}>Physics</span>
              <span className={`${styles.pillTag} ${styles.pillTagDark}`}>IT</span>
            </div>
            <p className={`${styles.cardDesc} ${styles.cardDescDark}`}>
              In-depth study developing technical knowledge and analytical thinking. Graduates receive IELTS and SAT certificates with pathways to top global universities.
            </p>
            <div className={`${styles.accentLine} ${styles.accentCoral}`} />
          </div>

          {/* Card 2 - Natural Sciences */}
          <div className={`${styles.card} ${styles.cardCoral}`}>
            <span className={`${styles.bgNumber} ${styles.bgNumberCoral}`}>02</span>
            <div className={`${styles.iconBox} ${styles.iconBoxCoral}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 3v6.5L6 17a3 3 0 003 3h6a3 3 0 003-3l-3-7.5V3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3h6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 15h10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="17.5" r="1" fill="#ffffff" opacity="0.6" />
                <circle cx="13.5" cy="16" r="0.75" fill="#ffffff" opacity="0.6" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Natural Sciences</h3>
            <div className={styles.pills}>
              <span className={`${styles.pillTag} ${styles.pillTagCoral}`}>Chemistry</span>
              <span className={`${styles.pillTag} ${styles.pillTagCoral}`}>Biology</span>
              <span className={`${styles.pillTag} ${styles.pillTagCoral}`}>Geography</span>
            </div>
            <p className={`${styles.cardDesc} ${styles.cardDescCoral}`}>
              Every lesson conducted alongside laboratory exercises. Creates a solid foundation for future scientists and medical professionals.
            </p>
            <div className={`${styles.accentLine} ${styles.accentWhite}`} />
          </div>

          {/* Card 3 - Social Sciences */}
          <div className={`${styles.card} ${styles.cardLight}`}>
            <span className={`${styles.bgNumber} ${styles.bgNumberLight}`}>03</span>
            <div className={`${styles.iconBox} ${styles.iconBoxLight}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#040037" strokeWidth="1.5" />
                <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#040037" strokeWidth="1.5" />
                <path d="M3.5 9h17M3.5 15h17" stroke="#040037" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className={`${styles.cardTitle} ${styles.cardTitleLight}`}>Social Sciences</h3>
            <div className={styles.pills}>
              <span className={`${styles.pillTag} ${styles.pillTagLight}`}>History</span>
              <span className={`${styles.pillTag} ${styles.pillTagLight}`}>Law</span>
              <span className={`${styles.pillTag} ${styles.pillTagLight}`}>Economics</span>
              <span className={`${styles.pillTag} ${styles.pillTagLight}`}>Business</span>
            </div>
            <p className={`${styles.cardDesc} ${styles.cardDescLight}`}>
              Educates future lawyers, politicians and business leaders with in-depth social sciences and economic knowledge.
            </p>
            <div className={`${styles.accentLine} ${styles.accentCoral}`} />
          </div>
        </div>

        {/* Bottom Stat Strip */}
        <div className={styles.statBar}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>20-22</span>
            <span className={styles.statLabel}>Max class size</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Academic tracks</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>English taught</span>
          </div>
        </div>
      </div>
    </section>
  );
}
