import Image from "next/image";
import styles from "./grants.module.css";

const tiers = [
  {
    rank: "1st",
    label: "Full Tuition Covered",
    sublabel: "Complete education expenses — on us.",
    percent: "100%",
  },
  {
    rank: "2nd",
    label: "Major Investment Covered",
    sublabel: "The largest part of your fees, paid by Milestone.",
    percent: "80%",
  },
  {
    rank: "3rd",
    label: "Half Tuition Covered",
    sublabel: "Half of your child's education on our shoulders.",
    percent: "50%",
  },
  {
    rank: "4th",
    label: "Additional Support",
    sublabel: "4th place quarterly ranking.",
    percent: "30%",
  },
  {
    rank: "5th",
    label: "Incentive Grant",
    sublabel: "5th place quarterly ranking.",
    percent: "30%",
  },
];

export default function Grants() {
  return (
    <section className={styles.section} id="grants">
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Left — Visual */}
          <div className={styles.visual}>
            <div className={styles.accentDot} />
            <div className={styles.imageWrap}>
              <Image
                src="/award.png"
                alt="Milestone International School grants and scholarships"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.imageBadge}>
                <span className={styles.imageBadgeNum}>100%</span>
                <span className={styles.imageBadgeText}>
                  Full grant for top quarterly performers
                </span>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className={styles.content}>
            <span className={styles.label}>Grants & Scholarships</span>
            <h2 className={styles.title}>
              Excellence Earns{" "}
              <span className={styles.titleAccent}>Real Rewards</span>
            </h2>
            <p className={styles.subtitle}>
              Every quarter, Milestone's highest-performing students are
              rewarded through a structured grant programme — funded by a
              dedicated scholarship fund and tracked transparently via our
              Telegram monitoring system.
            </p>

            <div className={styles.tiers}>
              {tiers.map((tier) => (
                <div key={tier.rank} className={styles.tier}>
                  <div className={styles.tierRank}>{tier.rank}</div>
                  <div className={styles.tierLabel}>
                    {tier.label}
                    <strong>{tier.sublabel}</strong>
                  </div>
                  <span className={styles.tierPercent}>{tier.percent}</span>
                </div>
              ))}
            </div>

            <p className={styles.note}>
              <strong>How it works:</strong> Results are evaluated every quarter
              using a point-based system tracked via Telegram. Grants are
              awarded based on academic performance and are funded by
              Milestone's special scholarship fund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
