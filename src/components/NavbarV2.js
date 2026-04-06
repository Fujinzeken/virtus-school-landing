"use client";

import { useState, useEffect } from "react";
import ApplyModal from "./ApplyModal";
import styles from "./v2-navbar.module.css";

const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Educational Approach", href: "#style" },
  { label: "Our Amenities", href: "#advantage" },
  { label: "Grants and Discounts", href: "#grant" },
  { label: "FAQ", href: "#qa" },
];

export default function NavbarV2() {
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
            <img
              src="/logo.svg"
              alt="Milestone International School"
              className={styles.logoImg}
            />
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
                {link.label}
              </a>
            ))}
            <button
              className={styles.ctaMobile}
              onClick={() => {
                setMobileOpen(false);
                setIsApplyModalOpen(true);
              }}
            >
              Apply Now
            </button>
          </div>

          {/* Desktop CTA */}
          <button
            className={styles.cta}
            onClick={() => setIsApplyModalOpen(true)}
          >
            Apply Now
          </button>

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
