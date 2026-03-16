"use client";

import Image from "next/image";

const marqueeTopImages = [
  { src: "/lib.png", alt: "Library and study spaces" },
  { src: "/hero2.png", alt: "Science laboratory" },
  { src: "/sports.png", alt: "Sports facilities" },
  { src: "/art.png", alt: "Art studio" },
  { src: "/award.png", alt: "School events" },
  { src: "/hero3.png", alt: "Campus grounds" },
];

const marqueeBottomImages = [
  { src: "/art.png", alt: "Creative workshops" },
  { src: "/hero3.png", alt: "Outdoor spaces" },
  { src: "/lib.png", alt: "Study areas" },
  { src: "/sports.png", alt: "Athletics" },
  { src: "/award.png", alt: "Performances" },
  { src: "/hero2.png", alt: "Labs" },
];

export default function CampusGallery() {
  return (
    <section className="campus" id="campus">
      {/* Section header */}
      <div className="campus__header">
        <span className="campus__label">Campus Life</span>
        <h2 className="campus__title">
          A Place Built for{" "}
          <span className="campus__title-accent">Exploration</span>
        </h2>
      </div>

      {/* Featured hero image */}
      <div className="campus__featured">
        <Image
          src="/campus.png"
          alt="Panoramic view of Milestone International School campus"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div className="campus__featured-overlay" />
        <div className="campus__featured-content">
          <div className="campus__featured-stats">
            <div className="campus__stat">
              <span className="campus__stat-number">600</span>
              <span className="campus__stat-label">Seat Dining Hall</span>
            </div>
            <div className="campus__stat-divider" />
            <div className="campus__stat">
              <span className="campus__stat-number">4</span>
              <span className="campus__stat-label">Specialist Labs</span>
            </div>
            <div className="campus__stat-divider" />
            <div className="campus__stat">
              <span className="campus__stat-number">Oxford</span>
              <span className="campus__stat-label">E-Book Library</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling marquee — row 1 (left to right) */}
      <div className="campus__marquee">
        <div className="campus__marquee-track campus__marquee-track--left">
          {[...marqueeTopImages, ...marqueeTopImages].map((img, i) => (
            <div key={i} className="campus__marquee-item">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="400px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling marquee — row 2 (right to left) */}
      <div className="campus__marquee">
        <div className="campus__marquee-track campus__marquee-track--right">
          {[...marqueeBottomImages, ...marqueeBottomImages].map((img, i) => (
            <div key={i} className="campus__marquee-item">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="400px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
