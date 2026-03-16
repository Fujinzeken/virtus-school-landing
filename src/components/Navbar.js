"use client";

import { useState, useEffect } from "react";
import ApplyModal from "./ApplyModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <a href="/" className="navbar__logo">
          <div className="navbar__logo-icon">MIS</div>
          <span>Milestone International</span>
        </a>

        <div className={`navbar__links${mobileOpen ? " open" : ""}`}>
          <a
            href="#about"
            className="navbar__link"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="#programmes"
            className="navbar__link"
            onClick={() => setMobileOpen(false)}
          >
            Programmes
          </a>
          <a
            href="#campus"
            className="navbar__link"
            onClick={() => setMobileOpen(false)}
          >
            Campus Life
          </a>
          <a
            href="#teachers"
            className="navbar__link"
            onClick={() => setMobileOpen(false)}
          >
            Teachers
          </a>
          <a
            href="#admissions"
            className="navbar__link"
            onClick={() => setMobileOpen(false)}
          >
            Admissions
          </a>
          <a
            href="#contact"
            className="navbar__link"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
          <button
            className="navbar__cta"
            onClick={() => {
              setMobileOpen(false);
              setIsApplyModalOpen(true);
            }}
          >
            Apply Now <span className="navbar__cta-arrow">→</span>
          </button>
        </div>

        <button
          className={`navbar__mobile-toggle${mobileOpen ? " active" : ""}`}
          onClick={toggleMobile}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </nav>
  );
}
