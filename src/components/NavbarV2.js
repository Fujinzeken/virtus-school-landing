"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import ApplyModal from "./ApplyModal";
import VirtusLogo from "./VirtusLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./v2-navbar.module.css";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "approach", href: "#style" },
  { key: "amenities", href: "#advantage" },
  { key: "grants", href: "#grant" },
  { key: "faq", href: "#qa" },
];

export default function NavbarV2() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <VirtusLogo dark birdHeight={52} priority />
          </a>

          {/* Desktop & mobile expanded links */}
          <div className={`${styles.links} ${mobileOpen ? styles.open : ""}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.link}
                onClick={() => setMobileOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <button
              className={styles.ctaMobile}
              onClick={() => {
                setMobileOpen(false);
                setIsApplyModalOpen(true);
              }}
            >
              {t("apply")}
            </button>
          </div>

          {/* Language switcher + Desktop CTA */}
          <div className={styles.actions}>
            <LanguageSwitcher />
            <button
              className={styles.cta}
              onClick={() => setIsApplyModalOpen(true)}
            >
              {t("apply")}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  );
}
