import Image from "next/image";
import styles from "./virtus-logo.module.css";

/**
 * Virtus lockup built from separate pieces so the "INTERNATIONAL SCHOOL"
 * tagline stays readable at small sizes: the bird + VIRTUS wordmark are
 * crisp images, the tagline is live text sized independently.
 *
 * @param {boolean} dark      true when placed on a dark background (whitens logo)
 * @param {number}  birdHeight rendered height of the bird emblem, in px
 */
export default function VirtusLogo({ dark = false, birdHeight = 54, priority = false }) {
  const wordHeight = Math.round(birdHeight * 0.3);
  const tagSize = Math.max(6, Math.round(birdHeight * 0.105));

  return (
    <span className={`${styles.lockup} ${dark ? styles.dark : ""}`}>
      <Image
        src="/virtus-bird.png"
        alt=""
        width={238}
        height={306}
        className={styles.bird}
        style={{ height: birdHeight, width: "auto" }}
        priority={priority}
      />
      <span className={styles.col}>
        <Image
          src="/virtus-word.png"
          alt="Virtus International School"
          width={488}
          height={91}
          className={styles.word}
          style={{ height: wordHeight, width: "auto" }}
          priority={priority}
        />
        <span className={styles.tag} style={{ fontSize: tagSize }}>
          INTERNATIONAL SCHOOL
        </span>
      </span>
    </span>
  );
}
