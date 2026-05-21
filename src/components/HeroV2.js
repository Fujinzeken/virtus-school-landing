"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import BookTourModal from "./BookTourModal";
import { useState } from "react";
import styles from "./v2-hero.module.css";

export default function HeroV2() {
  const t = useTranslations("Hero");
  const stats = t.raw("stats");
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <>
      <section className={styles.hero} id="hero">
        <div className={styles.inner}>
          {/* ── Full-width image container with overlay ── */}
          <div className={styles.imageContainer}>
            <Image
              src="/virtus-banner.jpg"
              alt="Virtus International School"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Dark overlay */}
            <div className={styles.overlay} />

            {/* ── Content on top of overlay ── */}
            <div className={styles.content}>
              {/* Badge pill */}
              <div className={styles.badge}>
                <svg
                  className={styles.badgeIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                {t("badge")}
              </div>

              {/* Headline */}
              <h1 className={styles.title}>{t("title")}</h1>

              {/* Subtitle */}
              <p className={styles.subtitle}>{t("subtitle")}</p>

              {/* CTA row */}
              <div className={styles.ctaRow}>
                <button
                  className={styles.cta}
                  onClick={() => setTourOpen(true)}
                >
                  <span className={styles.ctaText}>{t("cta")}</span>
                  <span className={styles.ctaArrow}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </button>
              </div>

              <span className={styles.ctaNote}>{t("note")}</span>
            </div>

            {/* ── Play button — opens YouTube ── */}
            <a
              href="https://www.youtube.com/@virtusschool"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.playBtn}
              aria-label="Watch school video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                <polygon points="8,5 20,12 8,19" />
              </svg>
            </a>

            {/* ── Stats bar at bottom ── */}
            <div className={styles.stats}>
              {stats.map((s, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookTourModal isOpen={tourOpen} onClose={() => setTourOpen(false)} />
    </>
  );
}
