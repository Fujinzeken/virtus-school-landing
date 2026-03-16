"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import BookTourModal from "./BookTourModal";
import ApplyModal from "./ApplyModal";

const slides = [
  {
    image: "/hero.jpg",
    badge: "International Education Since 2025",
    titleTop: "Shaping",
    titleBottom: "Tomorrow's",
    titleAccent: "Global Leaders.",
    subtitle:
      "A world-class international education in the heart of Tashkent. Preparing students for top universities worldwide,",
    subtitleBold: "one student at a time.",
  },
  {
    image: "/hero2.png",
    badge: "Nurturing Potential Every Day",
    titleTop: "Where Every",
    titleBottom: "Student",
    titleAccent: "Thrives.",
    subtitle:
      "From sports to the arts, our vibrant campus life helps every child discover their passion and",
    subtitleBold: "grow beyond the classroom.",
  },
  {
    image: "/hero3.png",
    badge: "Your Future Starts Here",
    titleTop: "Your Path to",
    titleBottom: "World-Class",
    titleAccent: "Universities.",
    subtitle:
      "Our internationally recognized programmes open doors to the world's leading universities.",
    subtitleBold: "98% placement rate.",
  },
];

const SLIDE_INTERVAL = 6000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const goToSlide = useCallback(
    (index) => {
      if (index === currentSlide || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 500);
    },
    [currentSlide, isTransitioning],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      goToSlide(nextSlide);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [currentSlide, goToSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="hero" id="hero">
      {/* Background images — all preloaded, active one shown */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero__background ${i === currentSlide ? "active" : ""} ${isTransitioning ? "transitioning" : ""}`}
        >
          <Image
            src={s.image}
            alt="Virtus International School campus"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="hero__overlay" />

      {/* Main content */}
      <div className="hero__content">
        <div className="container">
          <div
            className={`hero__text ${isTransitioning ? "hero__text--fading" : ""}`}
          >
            <div className="hero__badge fade-in-up">
              <span className="hero__badge-dot" />
              {slide.badge}
            </div>

            <h1 className="hero__title fade-in-up">
              {slide.titleTop}
              <br />
              {slide.titleBottom}{" "}
              <span className="hero__title-accent">{slide.titleAccent}</span>
            </h1>

            <p className="hero__subtitle fade-in-up">
              {slide.subtitle} <strong>{slide.subtitleBold}</strong>
            </p>

            <div className="hero__cta-group fade-in-up">
              <button
                type="button"
                className="hero__cta-primary"
                onClick={() => setIsTourModalOpen(true)}
              >
                Book a Tour
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hero__cta-secondary"
                onClick={() => setIsApplyModalOpen(true)}
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="hero__indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero__indicator ${i === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse" />
        <span>Scroll</span>
      </div>

      {/* Book a Tour Modal */}
      <BookTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </section>
  );
}
