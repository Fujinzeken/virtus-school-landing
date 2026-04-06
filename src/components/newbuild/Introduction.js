import Image from "next/image";

export default function Introduction() {
  return (
    <section className="intro" id="about">
      <div className="intro__container">
        {/* Left — Large image */}
        <div className="intro__image-block">
          <div className="intro__image-wrapper">
            <Image
              src="/hero3.png"
              alt="Students engaged in collaborative learning at Milestone International School"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Floating accent image */}
          <div className="intro__image-accent">
            <Image
              src="/hero2.png"
              alt="Modern school campus facilities"
              fill
              sizes="240px"
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Decorative element */}
          <div className="intro__image-dots" />
        </div>

        {/* Right — Text content */}
        <div className="intro__content">
          <span className="intro__label">Our Story</span>
          <h2 className="intro__title">
            Built to Fill a Gap,{" "}
            <span className="intro__title-accent">Designed to Lead.</span>
          </h2>
          <p className="intro__text">
            Milestone International School was founded by education leaders who
            spent years analysing the gaps in Uzbekistan&apos;s education
            system. Our goal: to raise students who are not only knowledgeable,
            but independent and creative thinkers — globally competitive
            specialists ready to succeed anywhere in the world.
          </p>
          <div className="intro__highlights">
            <div className="intro__highlight">
              <div className="intro__highlight-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <strong>IB Certified Programme</strong>
                <span>International Baccalaureate system</span>
              </div>
            </div>
            <div className="intro__highlight">
              <div className="intro__highlight-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M23 21v-2a4 4 0 0 0-3-3.87"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13a4 4 0 0 1 0 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <strong>Individual Approach</strong>
                <span>Max 20–22 students per class</span>
              </div>
            </div>
          </div>
          <a href="#programmes" className="intro__cta">
            Explore the IB Curriculum
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
          </a>

          {/* Director quote */}
          <blockquote className="intro__quote">
            <p className="intro__quote-text">
              &ldquo;Our goal is to prevent students from falling prey to wrong
              methodologies at the most important stage of their lives. We aim
              to train potential leaders who can raise the honor of our nation
              worldwide.&rdquo;
            </p>
            <cite className="intro__quote-author">
              <strong>Niyozov Shahboz Shahobiddinovich</strong>
              <span>Director, Milestone International School</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
