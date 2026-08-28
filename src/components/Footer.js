"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import VirtusLogo from "./VirtusLogo";
import { NAP, SOCIAL_LINKS, MAP_URL } from "@/lib/schema";
import { SOCIAL_ICONS } from "./icons";
import styles from "./footer.module.css";

// Same set as the navbar, so the footer mirrors the site's own structure
// rather than inventing a second information architecture.
const navLinks = [
  { key: "about", href: "/about" },
  { key: "approach", href: "/#style" },
  { key: "amenities", href: "/#advantage" },
  { key: "grants", href: "/grants" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const tn = useTranslations("Navbar");
  const ti = useTranslations("ContactInfo");
  const tc = useTranslations("Contact");

  // Current year, computed client-side at load — not baked in at build time.
  const [year, setYear] = useState("");
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <VirtusLogo dark birdHeight={54} />
            <p className={styles.tagline}>{t("tagline")}</p>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.social}
                    aria-label={s.label}
                  >
                    {Icon ? <Icon /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <nav className={styles.col}>
            <span className={styles.colTitle}>{t("navHeading")}</span>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {tn(l.key)}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className={styles.col}>
            <span className={styles.colTitle}>{t("contactHeading")}</span>
            <a href={"tel:" + NAP.telephone} className={styles.link}>
              +998 555 886 555
            </a>
            <a href={"mailto:" + NAP.email} className={styles.link}>
              {NAP.email}
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {ti("address")}
            </a>
            <span className={styles.muted}>{ti("hours")}</span>
          </div>

          {/* Apply */}
          <div className={styles.col}>
            <span className={styles.colTitle}>{tc("sections.leaveRequest")}</span>
            <p className={styles.muted}>{ti("note").replace(/^\*+\s*/, "")}</p>
            <Link href="/contact" className={styles.cta}>
              {tn("apply")}
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.text}>
            {t("rights")} {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
