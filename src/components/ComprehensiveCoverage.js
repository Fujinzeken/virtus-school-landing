import Image from "next/image";
import styles from "./comprehensive-coverage.module.css";

const pills = [
  "Creativity",
  "Intelligence",
  "Emotions",
  "Culture",
  "Logic",
  "Mindset",
  "Languages",
];

const cards = [
  {
    image: "/images/real-school/comp.jpg",
    category: "Intelligence",
    title: "Programming and robotics",
    description:
      "Students learn the fundamentals of programming, participate in robotics competitions and hackathons, and develop computational thinking skills for the digital age.",
  },
  {
    image: "/images/real-school/gym.png",
    category: "Sport",
    title: "Team sports",
    description:
      "Football, basketball and volleyball training develops teamwork, discipline and physical fitness. Students compete in inter-school tournaments and regional championships.",
  },
  {
    image: "/images/real-school/martial-arts.png",
    category: "Sport",
    title: "Martial arts",
    description:
      "Karate, judo and self-defense classes build confidence, physical coordination and mental discipline. Students train under certified instructors.",
  },
  {
    image: "/images/real-school/science.png",
    category: "Intelligence",
    title: "Scientific clubs",
    description:
      "Hands-on physics, chemistry and biology experiments develop scientific thinking. Students work on research projects and participate in science olympiads.",
  },
];

export default function ComprehensiveCoverage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top row: title + description card */}
        <div className={styles.topRow}>
          <h2 className={styles.title}>
            Comprehensive coverage of all aspects
          </h2>
          <div className={styles.descCard}>
            <p className={styles.descText}>
              You no longer need to enroll your child in various extracurricular
              activities and tutors. We will take care of the comprehensive
              development of your child.
            </p>
          </div>
        </div>

        {/* Tag pills */}
        <div className={styles.pills}>
          {pills.map((pill) => (
            <span key={pill} className={styles.pill}>
              {pill}
            </span>
          ))}
        </div>

        {/* Extracurricular cards */}
        <div className={styles.cardGrid}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.categoryTag}>{card.category}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
