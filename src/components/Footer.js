import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        {/* ── Grid: brand + links + contact ── */}
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <span className={styles.logoMark}>VIS</span>
              <span className={styles.logoText}>Virtus International</span>
            </div>
            <p className={styles.brandDesc}>
              Shaping tomorrow&apos;s global leaders through a rigorous
              international education rooted in Tashkent.
            </p>

            {/* Social icons */}
            <div className={styles.socials}>
              {/* Instagram */}
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg
                  className={styles.socialIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg
                  className={styles.socialIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {/* Telegram */}
              <a href="#" className={styles.socialLink} aria-label="Telegram">
                <svg
                  className={styles.socialIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <svg
                  className={styles.socialIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polygon
                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkColTitle}>Quick Links</h4>
            <a href="#about" className={styles.linkItem}>
              About Us
            </a>
            <a href="#programmes" className={styles.linkItem}>
              Programmes
            </a>
            <a href="#teachers" className={styles.linkItem}>
              Teachers
            </a>
            <a href="#campus" className={styles.linkItem}>
              Campus Life
            </a>
            <a href="#" className={styles.linkItem}>
              Admissions
            </a>
            <a href="#news" className={styles.linkItem}>
              News &amp; Events
            </a>
          </div>

          {/* Resources */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkColTitle}>Resources</h4>
            <a href="#" className={styles.linkItem}>
              Apply Online
            </a>
            <a href="#" className={styles.linkItem}>
              Book a Tour
            </a>
            <a href="#" className={styles.linkItem}>
              Fee Structure
            </a>
            <a href="#" className={styles.linkItem}>
              Academic Calendar
            </a>
            <a href="#" className={styles.linkItem}>
              Parent Portal
            </a>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4 className={styles.linkColTitle}>Contact Us</h4>

            {/* Address */}
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
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
              <span>
                Arnasoy ko&apos;chasi, 1-uyuy,
                <br />
                Qozirobod MFY, Chilonzor tumani,
                <br />
                Toshkent, Uzbekistan
              </span>
            </div>

            {/* Phone */}
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="tel:+998901234567" className={styles.contactLink}>
                +998 90 123 45 67
              </a>
            </div>

            {/* Email */}
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="22,6 12,13 2,6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a
                href="mailto:info@virtusschool.uz"
                className={styles.contactLink}
              >
                info@virtusschool.uz
              </a>
            </div>

            {/* Working hours */}
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polyline
                  points="12 6 12 12 16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Mon – Fri: 8:00 – 17:00</span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Virtus International School. All
            rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.bottomLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
