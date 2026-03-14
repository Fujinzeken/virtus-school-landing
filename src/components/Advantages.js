export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="advantages__container">
        {/* Section header */}
        <div className="advantages__header">
          <span className="advantages__label">Why Choose Us</span>
          <h2 className="advantages__title">
            The Virtus{" "}
            <span className="advantages__title-accent">Difference</span>
          </h2>
        </div>

        {/* Bento-style advantage blocks */}
        <div className="advantages__bento">
          {/* Large featured card */}
          <div className="advantages__card advantages__card--featured">
            <span className="advantages__card-number">01</span>
            <div className="advantages__card-content">
              <div className="advantages__icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="advantages__card-title">
                Globally Recognized Curriculum
              </h3>
              <p className="advantages__card-text">
                Internationally accredited programmes that are recognized by top
                universities in the US, UK, Europe, and beyond.
              </p>
            </div>
            <div className="advantages__card-stat">
              <span className="advantages__card-stat-number">150+</span>
              <span className="advantages__card-stat-label">
                Partner Universities
              </span>
            </div>
          </div>

          {/* Regular cards */}
          <div className="advantages__card">
            <span className="advantages__card-number">02</span>
            <div className="advantages__card-content">
              <div className="advantages__icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="advantages__card-title">
                Expert International Faculty
              </h3>
              <p className="advantages__card-text">
                Qualified educators from across the globe with proven track
                records.
              </p>
            </div>
          </div>

          <div className="advantages__card">
            <span className="advantages__card-number">03</span>
            <div className="advantages__card-content">
              <div className="advantages__icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="advantages__card-title">
                15:1 Student-Teacher Ratio
              </h3>
              <p className="advantages__card-text">
                Personalized learning with small class sizes.
              </p>
            </div>
          </div>

          <div className="advantages__card">
            <span className="advantages__card-number">04</span>
            <div className="advantages__card-content">
              <div className="advantages__icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="advantages__card-title">
                Modern Campus & Facilities
              </h3>
              <p className="advantages__card-text">
                Science labs, sports centres, and creative studios.
              </p>
            </div>
          </div>

          {/* Large stat card */}
          <div className="advantages__card advantages__card--stat-block">
            <span className="advantages__card-number">05</span>
            <div className="advantages__card-content">
              <div className="advantages__icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="advantages__card-title">
                University Placement Record
              </h3>
              <p className="advantages__card-text">
                Our graduates earn admission to the world&apos;s best
                institutions year after year.
              </p>
            </div>
            <div className="advantages__card-stat">
              <span className="advantages__card-stat-number">98%</span>
              <span className="advantages__card-stat-label">
                Acceptance Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
