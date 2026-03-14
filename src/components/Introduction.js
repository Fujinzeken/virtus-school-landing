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
              alt="Students engaged in collaborative learning at Virtus International School"
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
          <span className="intro__label">Who We Are</span>
          <h2 className="intro__title">
            An International Education,{" "}
            <span className="intro__title-accent">Rooted in Tashkent.</span>
          </h2>
          <p className="intro__text">
            Virtus International School delivers a globally recognized
            curriculum designed to develop critical thinking, creativity, and
            leadership in every student — preparing them for admission to the
            world&apos;s top universities.
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
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <strong>Internationally Accredited</strong>
                <span>Globally recognized programmes</span>
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
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <strong>Multicultural Environment</strong>
                <span>15+ nationalities on campus</span>
              </div>
            </div>
          </div>
          <a href="#programmes" className="intro__cta">
            Explore Our Programmes
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
        </div>
      </div>
    </section>
  );
}
