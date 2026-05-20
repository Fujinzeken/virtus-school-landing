import Image from "next/image";
import styles from "./grants.module.css";

export default function Grants() {
  return (
    <section className={styles.section} id="grant">
      <div className={styles.container}>
        {/* Header */}
        <h2 className={styles.title}>Grants and discounts</h2>
        <p className={styles.subtitle}>
          Supporting talented students with tuition grants and family discounts.
        </p>

        {/* 3-column layout */}
        <div className={styles.layout}>
          {/* Left image */}
          <div className={styles.imageWrap}>
            <Image
              src="/scholarship.png"
              alt="Graduate student with diploma"
              fill
              sizes="320px"
              style={{ objectFit: "cover" }}
            />
            <div className={`${styles.logoWatermark} ${styles.logoLeft}`}>
              <Image src="/virtus-mark.png" alt="Virtus International School" width={32} height={40} />
            </div>
          </div>

          {/* Center card */}
          <div className={styles.centerCard}>
            <div className={styles.columns}>
              {/* Discounts column */}
              <div className={styles.column}>
                <div className={styles.iconCircle}>%</div>
                <h3 className={styles.colLabel}>Discounts</h3>

                <p className={styles.stat}>5%</p>
                <p className={styles.statDesc}>
                  A 5% discount will be provided for each additional child from
                  the same family.
                </p>

                <div className={styles.divider} />

                <p className={styles.stat}>10%</p>
                <p className={styles.statDesc}>
                  A 10% discount is offered on the annual fee.
                </p>
              </div>

              {/* Grants column */}
              <div className={styles.column}>
                <div className={styles.iconCircle}>$</div>
                <h3 className={styles.colLabel}>Grants</h3>

                <p className={styles.stat}>50</p>
                <p className={styles.statDesc}>
                  50 scholarships provided by the school
                </p>

                <div className={styles.divider} />

                <p className={styles.statDesc}>
                  Grants are awarded to students who demonstrate excellent
                  academic performance and achieve outstanding results in exams
                  each quarter.
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className={styles.imageWrap}>
            <Image
              src="/virtus.jpg"
              alt="Virtus International School building"
              fill
              sizes="320px"
              style={{ objectFit: "cover" }}
            />
            <div className={`${styles.logoWatermark} ${styles.logoRight}`}>
              <Image src="/virtus-mark.png" alt="Virtus International School" width={32} height={40} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <a href="#admissions" className={styles.ctaBtn}>
            <span>Submit an application</span>
            <span className={styles.arrowCircle}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
          <a
            href="/virtus-scholarship-regulations.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.regsLink}
          >
            Read the full scholarship grant regulations (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
