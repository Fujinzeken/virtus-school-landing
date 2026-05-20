import VirtusLogo from "./VirtusLogo";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <VirtusLogo dark birdHeight={54} />
        <span className={styles.text}>All rights reserved 2024</span>
      </div>
    </footer>
  );
}
