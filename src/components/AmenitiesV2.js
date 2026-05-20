import Image from "next/image";
import styles from "./v2-amenities.module.css";

const facilities = [
  {
    img: "/images/real-school/sinf01.png",
    title: "Laboratories and practical rooms",
    desc: "The private school's laboratory and hands-on classrooms provide students with unique opportunities to experiment and apply theoretical knowledge into practice. The rooms are equipped with modern equipment that serves to develop deep learning of sciences and scientific thinking.",
  },
  {
    img: "/images/real-school/gym.png",
    title: "Year-round sports halls",
    desc: "Winter sports hall \u2013 12\u00d730 meters, equipped with changing rooms and showers. Sports field \u2013 16\u00d732 meters, suitable for volleyball, tennis, football and basketball. Hall for gymnastics, karate, wrestling and other sports clubs.",
  },
  {
    img: "/images/real-school/oshxona1.jpg",
    title: "A cafeteria with a capacity of 600 seats",
    desc: "The large cafeteria provides convenience for students during lunch breaks. The spacious area allows all students to dine without lines or crowds. The ample dining space encourages interaction and a friendly atmosphere, strengthening the school community.",
  },
  {
    img: "/images/real-school/library.png",
    title: "Library with a capacity of 50 students",
    desc: "The library provides students with a wide range of academic resources, enhancing their knowledge and love for reading. It offers comfortable space for independent study with librarians available to assist based on students\u2019 needs.",
  },
];

const staffTop = [
  {
    title: "Experienced teachers",
    text: "Our qualified and experienced teachers use modern educational methods to provide an individual approach to each student, helping them unlock their potential.",
  },
  {
    title: "Professional psychologists",
    text: "School psychologists support students\u2019 emotional well-being, provide counseling, and create a conducive environment for their development.",
  },
  {
    title: "Strict supervision",
    text: "We strictly monitor students\u2019 discipline and academic performance, maintaining high educational standards.",
  },
];

export default function AmenitiesV2() {
  return (
    <section className={styles.section} id="advantage">
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <div className={styles.pillIcon}>
            <svg
              width="15"
              height="15"
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
          <h2 className={styles.title}>
            All the amenities for
            <br />
            effective learning
          </h2>
        </div>

        {/* Facility cards -- marquee auto-scroll */}
        <div className={styles.facilityScrollOuter}>
          <div className={styles.facilityScroll}>
            {/* Duplicate the cards for seamless infinite loop */}
            {[...facilities, ...facilities].map((f, i) => (
              <div key={`${f.title}-${i}`} className={styles.facilityCard}>
                <div className={styles.facilityImgWrap}>
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.facilityBanner}>
                    <p className={styles.facilityBannerText}>{f.title}</p>
                  </div>
                </div>
                <p className={styles.facilityDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff cards -- top row (3 columns) */}
        <div className={styles.staffGrid}>
          {staffTop.map((s) => (
            <div key={s.title} className={styles.staffCard}>
              <Image
                src="/virtus-logo.png"
                alt="Virtus International School"
                width={754}
                height={339}
                className={styles.staffLogo}
              />
              <h3 className={styles.staffTitle}>{s.title}</h3>
              <p className={styles.staffText}>{s.text}</p>
            </div>
          ))}
        </div>

        {/* Staff cards -- bottom row (tutor + wide faculty card) */}
        <div className={styles.staffGridBottom}>
          <div className={styles.staffCard}>
            <Image src="/virtus-logo.png" alt="Virtus International School" width={754} height={339} className={styles.staffLogo} />
            <h3 className={styles.staffTitle}>Tutors</h3>
            <p className={styles.staffText}>
              Each student is assigned a personal tutor who monitors their
              academic and disciplinary development, maintains daily
              communication with parents, and holds meetings every quarter.
            </p>
            {/* Tutor avatar stack */}
            <div className={styles.avatarRow}>
              {[
                { src: "/images/teachers/sarah1.jpg", alt: "Tutor" },
                { src: "/images/teachers/james.jpg", alt: "Tutor" },
                { src: "/images/teachers/elena.jpg", alt: "Tutor" },
                { src: "/images/teachers/david1.jpg", alt: "Tutor" },
              ].map((t, i) => (
                <div key={i} className={styles.avatar}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="48px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
              <div className={styles.avatarCount}>+15</div>
            </div>
          </div>

          <div className={styles.staffCardWide}>
            <div className={styles.wideContent}>
              <h3 className={styles.staffTitle}>
                Faculty from the world&apos;s top 100 universities
              </h3>
              <p className={styles.staffText}>
                Experts from leading universities around the world conduct
                lectures and masterclasses, preparing students for admission to
                the best higher education institutions.
              </p>
            </div>
            <div className={styles.wideImgWrap}>
              <Image
                src="/images/why/curriculum1.png"
                alt="Online faculty session"
                fill
                sizes="160px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
