import Image from "next/image";
import styles from "./v2-four-pillars.module.css";

const pillars = [
  {
    num: "01",
    title: "Logical thinking:",
    text: "MIS places great importance on developing students\u2019 logical thinking and analytical approach. Logic and analysis are the foundation of any decision-making process and are key to the students\u2019 success in life.",
  },
  {
    num: "02",
    title: "Creative approach:",
    text: "We teach our students to approach real-life problems creatively and practically. This approach helps them avoid unproductive solutions and use resources efficiently.",
  },
  {
    num: "03",
    title: "Independent thinking:",
    text: "MIS teaches students to think independently and adhere to their life principles without succumbing to external influences. This enables them to benefit from various situations and make the most effective decisions.",
  },
  {
    num: "04",
    title: "Finding the best solutions in various situations:",
    text: "We teach our students to analyze various situations and make the most beneficial decisions for themselves. They learn to act effectively without being distracted by unproductive details or emotions.",
  },
];

export default function FourPillarsV2() {
  return (
    <section className={styles.section} id="style">
      <div className={styles.imageWrap}>
        <Image
          src="/school.png"
          alt="Milestone International School campus"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />

        {/* Title overlay — top left, on the image */}
        <div className={styles.header}>
          <span className={styles.bigNumber}>4</span>
          <h2 className={styles.headerTitle}>
            The four pillars of
            <br />
            our educational
            <br />
            approach
          </h2>
        </div>

        {/* Staggered pillar cards over the image */}
        <div className={styles.cards}>
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`${styles.card} ${styles[`card${i + 1}`]}`}
            >
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.text}</p>
              <span className={styles.cardNum}>{p.num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
