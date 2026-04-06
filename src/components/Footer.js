import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img
          src="/logo-dark.svg"
          alt="Milestone International School"
          className={styles.logo}
        />
        <span className={styles.text}>All rights reserved 2024</span>
      </div>
    </footer>
  );
}
