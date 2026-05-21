"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import VirtusLogo from "./VirtusLogo";
import styles from "./footer.module.css";

export default function Footer() {
  const t = useTranslations("Footer");
  // Current year, computed client-side at load — not baked in at build time.
  const [year, setYear] = useState("");
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <VirtusLogo dark birdHeight={54} />
        <span className={styles.text}>
          {t("rights")} {year}
        </span>
      </div>
    </footer>
  );
}
