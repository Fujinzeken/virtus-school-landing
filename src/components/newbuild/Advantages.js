export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="advantages__container">
        {/* Section header */}
        <div className="advantages__header">
          <span className="advantages__label">The Milestone Edge</span>
          <h2 className="advantages__title">
            Why <span className="advantages__title-accent">Milestone?</span>
          </h2>
        </div>

        {/* Bento-style advantage blocks */}
        <div className="advantages__bento">
          {/* Large featured card — IB Programme */}
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
                International Baccalaureate (IB)
              </h3>
              <p className="advantages__card-text">
                Our IB Diploma gives students direct access to the world&apos;s
                top 50 universities. All subjects taught in English ensure
                international competitiveness.
              </p>
            </div>
            <div className="advantages__card-stat">
              <span className="advantages__card-stat-number">Top 50</span>
              <span className="advantages__card-stat-label">
                University Access
              </span>
            </div>
          </div>

          {/* Small class sizes */}
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
              <h3 className="advantages__card-title">Max 20–22 Per Class</h3>
              <p className="advantages__card-text">
                Individual attention for every student. Small groups allow
                teachers to identify strengths and address weaknesses.
              </p>
            </div>
          </div>

          {/* Oxford E-Library */}
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
              <h3 className="advantages__card-title">Oxford E-Book Library</h3>
              <p className="advantages__card-text">
                Access to the University of Oxford electronic book database,
                plus a rich physical library and coworking area.
              </p>
            </div>
          </div>

          {/* 3 Academic Tracks */}
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="advantages__card-title">3 Specialized Tracks</h3>
              <p className="advantages__card-text">
                Exact Sciences, Natural Sciences, and Social Sciences — each
                with deep subject focus and career preparation.
              </p>
            </div>
          </div>

          {/* All-in-One Campus */}
          <div className="advantages__card">
            <span className="advantages__card-number">05</span>
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
              <h3 className="advantages__card-title">All-in-One Campus</h3>
              <p className="advantages__card-text">
                Clubs, extra lessons and homework prep all happen on campus. No
                need to look elsewhere — saving parents time and money.
              </p>
            </div>
          </div>

          {/* Large stat card — Grants */}
          <div className="advantages__card advantages__card--stat-block">
            <span className="advantages__card-number">06</span>
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="advantages__card-title">
                Performance-Based Grants
              </h3>
              <p className="advantages__card-text">
                Top-performing students earn grants every quarter — from 30% up
                to a full 100% scholarship covering all education expenses.
              </p>
            </div>
            <div className="advantages__card-stat">
              <span className="advantages__card-stat-number">100%</span>
              <span className="advantages__card-stat-label">
                Grant Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
