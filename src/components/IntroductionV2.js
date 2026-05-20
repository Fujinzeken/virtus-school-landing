import Image from "next/image";
import styles from "./v2-intro.module.css";

export default function IntroductionV2() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* ── TOP: Big logo left, mission text right ── */}
        <div className={styles.topRow}>
          <div className={styles.logoBlock}>
            <Image
              src="/virtus-logo-stacked.png"
              alt="Virtus International School"
              width={514}
              height={654}
              className={styles.logoImg}
            />
          </div>
          <div className={styles.missionBlock}>
            <p className={styles.missionText}>
              Virtus International School educates children according to the
              standards required for admission to the world&apos;s most
              prestigious &ldquo;Top 100&rdquo; universities and fully supports
              them in preparing for these entrance exams.
            </p>
            <p className={styles.missionAccent}>
              This educational process provides our students with the
              opportunity to receive a high-quality education on an
              international scale.
            </p>
          </div>
        </div>

        {/* ── MIDDLE: Campus info two columns ── */}
        <div className={styles.bottomRow}>
          <div className={styles.campusCol}>
            <div className={styles.colHeading}>
              <div className={styles.pillIcon}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h2 className={styles.colTitle}>VIS campus</h2>
            </div>
            <p className={styles.colText}>
              The VIS building stands out with its spacious and modern
              infrastructure. The school is equipped with all the necessary
              amenities, providing an ideal environment for students to receive
              an effective education.
            </p>
          </div>
          <div className={styles.classroomCol}>
            <p className={styles.classroomText}>
              The classrooms at Virtus International School are specially
              designed to provide students with the most comfortable and
              effective learning environment possible.
            </p>
          </div>
        </div>

        {/* ── BOTTOM: campus photo + stat bubbles left, 3 room photos right ── */}
        <div className={styles.galleryRow}>
          {/* Left: building photo with floating stats */}
          <div className={styles.galleryMain}>
            <Image
              src="/images/real-school/hovli.png"
              alt="VIS school campus building"
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{ objectFit: "cover", borderRadius: "12px" }}
              priority
            />
            {/* Stat: navy circle */}
            <div className={`${styles.bubble} ${styles.bubbleNavy}`}>
              <span className={styles.bubbleStat}>7,000 м²</span>
              <span className={styles.bubbleLabel}>
                The total land area of the school
              </span>
            </div>
            {/* Stat: red/coral circle */}
            <div className={`${styles.bubble} ${styles.bubbleRed}`}>
              <span className={styles.bubbleBig}>700</span>
              <span className={styles.bubbleLabel}>
                The capacity to accommodate 700 students at once
              </span>
            </div>
            {/* Stat: white circle */}
            <div className={`${styles.bubble} ${styles.bubbleWhite}`}>
              <span className={styles.bubbleLabelDark}>
                A modern four-story school building
              </span>
            </div>
          </div>

          {/* Right: 3 stacked photos */}
          <div className={styles.galleryStack}>
            {[
              { src: "/images/real-school/comp.jpg", alt: "Computer lab" },
              { src: "/images/real-school/library.png", alt: "Library" },
              { src: "/images/real-school/gym.png", alt: "Sports" },
            ].map(({ src, alt }) => (
              <div key={src} className={styles.galleryThumb}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.thumbOverlay}>
                  <button className={styles.moreBtn}>
                    <span className={styles.morePlus}>+</span>
                    More details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
