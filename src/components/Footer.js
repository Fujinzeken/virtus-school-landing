import { useTranslations } from "next-intl";
import VirtusLogo from "./VirtusLogo";
import styles from "./footer.module.css";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <VirtusLogo dark birdHeight={54} />
        <span className={styles.text}>{t("rights")}</span>
      </div>
    </footer>
  );
}
