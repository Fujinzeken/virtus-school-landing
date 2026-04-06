import styles from "./contact-info.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.darkCard}>
          <h2 className={styles.title}>Contact information:</h2>
          <p className={styles.note}>
            *Contact us using any convenient method or visit our office.
          </p>

          <div className={styles.grid}>
            {/* Card 1 - Phone */}
            <div className={styles.card}>
              <span className={styles.label}>Phone</span>
              <p className={styles.phone}>+998 78 555 55 77</p>
              <a href="tel:+998785555577" className={styles.callBtn}>
                Call us
              </a>
            </div>

            {/* Card 2 - Email & Address */}
            <div className={styles.card}>
              <span className={styles.label}>Email</span>
              <p className={styles.value}>mileston@school.com</p>
              <div className={styles.divider} />
              <span className={styles.label}>Address</span>
              <p className={styles.address}>
                334 Karasaroy Street, Almazor District, Tashkent City
              </p>
            </div>

            {/* Card 3 - Social & Hours */}
            <div className={styles.card}>
              <div className={styles.socialRow}>
                {/* Telegram */}
                <a href="https://t.me/milestone_school" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Telegram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#040037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/milestone_uz" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#040037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="#040037" stroke="none" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@milestone_uz" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#040037">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://x.com/Milestone_uz" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#040037">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
              <div className={styles.divider} />
              <span className={styles.label}>Working hours</span>
              <p className={styles.value}>Mon-Sat: 8:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
