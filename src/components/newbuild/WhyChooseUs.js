"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./why.module.css";

const WHY_ITEMS = [
  {
    id: 1,
    stat: "Top 50",
    statLabel: "University Access",
    title: "International Baccalaureate (IB)",
    body: "Our IB Diploma Programme gives students direct access to the world\u2019s top universities. All subjects taught in English ensure global competitiveness from day one.",
    image: "/images/why/curriculum1.png",
  },
  {
    id: 2,
    stat: "Oxford",
    statLabel: "E-Book Database",
    title: "World-Class Library & Resources",
    body: "Students access the University of Oxford electronic book database alongside a rich physical library and coworking area — resources most schools can only dream of.",
    image: "/images/why/faculty1.png",
  },
  {
    id: 3,
    stat: "20–22",
    statLabel: "Max Per Class",
    title: "Small Classes, Personal Attention",
    body: "Every student gets an individual approach. Small groups let teachers identify strengths and address weaknesses, supported by a dedicated mentor for every 40–50 students.",
    image: "/hero.jpg",
  },
  {
    id: 4,
    stat: "600",
    statLabel: "Seat Dining Hall",
    title: "State-of-the-Art Campus",
    body: "Chemistry, biology, physics and robotics labs. Sports facilities, creative studios, and a 600-seat HACCP-certified canteen with nutritionist-supervised meals.",
    image: "/images/why/campus1.png",
  },
  {
    id: 5,
    stat: "100%",
    statLabel: "Grants Available",
    title: "Performance-Based Grants",
    body: "Top-performing students earn quarterly grants — from 30% up to a full 100% scholarship. Your child\u2019s hard work is recognised and rewarded every step of the way.",
    image: "/images/why/placement1.png",
  },
];

const AUTO_INTERVAL = 5000;

export default function WhyChooseUs() {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const timerRef = useRef(null);

  const goTo = useCallback(
    (index, dir = "next") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 600);
    },
    [isAnimating],
  );

  const next = useCallback(() => {
    goTo((activeIndex + 1) % WHY_ITEMS.length, "next");
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + WHY_ITEMS.length) % WHY_ITEMS.length, "prev");
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (!expanded) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [expanded, next]);

  const manualNext = () => {
    clearInterval(timerRef.current);
    next();
    if (expanded) {
      timerRef.current = setInterval(next, AUTO_INTERVAL);
    }
  };

  const manualPrev = () => {
    clearInterval(timerRef.current);
    prev();
    if (expanded) {
      timerRef.current = setInterval(next, AUTO_INTERVAL);
    }
  };

  const handleExpand = () => setExpanded(true);
  const handleCollapse = () => {
    setExpanded(false);
    clearInterval(timerRef.current);
  };

  const active = WHY_ITEMS[activeIndex];

  return (
    <section
      className={`${styles.section} ${expanded ? styles.sectionExpanded : ""}`}
    >
      <div className={styles.grain} />

      {/* ─── Collapsed / Entry State ─── */}
      <div
        className={`${styles.entry} ${expanded ? styles.entryHidden : styles.entryVisible}`}
        aria-hidden={expanded}
      >
        <div className={styles.entryInner}>
          <div className={styles.circleWrap}>
            <div className={styles.circleRing} />
            <div className={styles.circleImg}>
              <Image
                src={WHY_ITEMS[0].image}
                alt="Milestone students"
                fill
                className={styles.circlePhoto}
                style={{ objectFit: "cover" }}
              />
              <div className={styles.floatStat}>
                <span className={styles.floatStatNum}>{WHY_ITEMS[0].stat}</span>
                <span className={styles.floatStatLabel}>
                  {WHY_ITEMS[0].statLabel}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.entryCopy}>
            <p className={styles.eyebrow}>Why Choose Us</p>
            <h2 className={styles.heading}>
              The Milestone <em className={styles.headingAccent}>Difference</em>
            </h2>
            <p className={styles.entryBody}>
              Every choice a family makes about education shapes a lifetime. At
              Milestone International, we build the foundation that top
              universities — and the world — actually reward.
            </p>

            <div className={styles.pillRow}>
              {WHY_ITEMS.map((item) => (
                <span key={item.id} className={styles.pill}>
                  {item.title}
                </span>
              ))}
            </div>

            <button
              className={styles.seeMoreBtn}
              onClick={handleExpand}
              aria-label="Explore all five reasons"
            >
              <span>Explore the Five Reasons</span>
              <svg
                className={styles.seeMoreIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ─── Expanded / Fullscreen Carousel State ─── */}
      <div
        className={`${styles.carousel} ${expanded ? styles.carouselVisible : styles.carouselHidden}`}
        aria-hidden={!expanded}
      >
        {/* All images pre-rendered, stacked — visibility controlled by CSS opacity only, no remounting */}
        <div className={styles.carouselBg}>
          {WHY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`${styles.carouselImgWrap} ${
                i === activeIndex ? styles.carouselImgActive : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
                loading="eager"
              />
            </div>
          ))}
          <div className={styles.carouselOverlay} />
        </div>

        {/* Content panel */}
        <div
          className={`${styles.carouselContent} ${isAnimating ? styles.contentFade : styles.contentVisible}`}
        >
          <p className={styles.carouselEyebrow}>
            0{activeIndex + 1} / 0{WHY_ITEMS.length}
          </p>
          <h2 className={styles.carouselTitle}>{active.title}</h2>
          <div className={styles.carouselStatRow}>
            <span className={styles.carouselStat}>{active.stat}</span>
            <span className={styles.carouselStatLabel}>{active.statLabel}</span>
          </div>
          <p className={styles.carouselBody}>{active.body}</p>
        </div>

        {/* Dot nav */}
        <div className={styles.dotNav}>
          {WHY_ITEMS.map((item, i) => (
            <button
              key={item.id}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => {
                clearInterval(timerRef.current);
                goTo(i, i > activeIndex ? "next" : "prev");
                timerRef.current = setInterval(next, AUTO_INTERVAL);
              }}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div
            key={`progress-${activeIndex}`}
            className={styles.progressFill}
          />
        </div>

        {/* Arrow controls */}
        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={manualPrev}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M11 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={manualNext}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Close / collapse */}
        <button
          className={styles.closeBtn}
          onClick={handleCollapse}
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
