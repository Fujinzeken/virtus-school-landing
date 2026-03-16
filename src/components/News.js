import Image from "next/image";
import styles from "./news.module.css";

const articles = [
  {
    id: 1,
    category: "News",
    date: "March 10, 2026",
    title:
      "Virtus Students Win Regional Science Olympiad for Third Consecutive Year",
    excerpt:
      "Our Year 11 team swept three gold medals and the overall championship at the Central Asia Science Olympiad, cementing Virtus's position as the region's top-performing STEM school.",
    image: "/award.png",
    slug: "/news/science-olympiad-2026",
  },
  {
    id: 2,
    category: "Event",
    date: "April 5, 2026",
    title: "Open Day — Experience Virtus First-Hand",
    excerpt:
      "Join us for a guided campus tour, meet our faculty, and discover the programmes shaping tomorrow's leaders.",
    image: "/campus.png",
    slug: "/news/open-day-april",
  },
  {
    id: 3,
    category: "News",
    date: "February 22, 2026",
    title: "New State-of-the-Art STEM Lab Opens This Semester",
    excerpt:
      "A 200m² facility with robotics workstations, 3D printers, and dedicated research spaces.",
    image: "/lib.png",
    slug: "/news/new-stem-lab",
  },
];

export default function News() {
  const featured = articles[0];
  const side = articles.slice(1);

  return (
    <section className={styles.section} id="news">
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <span className={styles.label}>Latest Updates</span>
            <h2 className={styles.title}>
              News &amp; <span className={styles.titleAccent}>Events</span>
            </h2>
          </div>

          <a href="/news" className={styles.viewAll}>
            <span>View All Articles</span>
            <svg className={styles.viewAllIcon} viewBox="0 0 24 24" fill="none">
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

        {/* Editorial layout */}
        <div className={styles.layout}>
          {/* Featured article */}
          <a
            href={featured.slug}
            className={`${styles.card} ${styles.featured}`}
          >
            <div className={styles.featuredImgWrap}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.cardMeta}>
                <span className={styles.cardCategory}>{featured.category}</span>
                <span className={styles.cardDate}>{featured.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{featured.title}</h3>
              <p className={styles.cardExcerpt}>{featured.excerpt}</p>
              <span className={styles.readMore}>
                Read Article
                <svg
                  className={styles.readMoreIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </a>

          {/* Side cards */}
          <div className={styles.sideGrid}>
            {side.map((article) => (
              <a
                key={article.id}
                href={article.slug}
                className={`${styles.card} ${styles.sideCard}`}
              >
                <div className={styles.sideImgWrap}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 200px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.sideBody}>
                  <div className={styles.cardMeta}>
                    <span
                      className={`${styles.cardCategory} ${
                        article.category === "Event"
                          ? styles.cardCategoryEvent
                          : ""
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className={styles.cardDate}>{article.date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <span className={styles.readMore}>
                    Read More
                    <svg
                      className={styles.readMoreIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
