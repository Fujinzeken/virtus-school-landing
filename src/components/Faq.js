"use client";

import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    q: "What is the International Baccalaureate (IB) programme?",
    a: "The IB is an internationally recognised educational system that teaches students independent, critical thinking, creativity and a scientific approach. Milestone offers all four IB programmes — PYP (ages 3–12), MYP (ages 11–16), the Diploma Programme (ages 16–19), and the Career-related Programme (ages 16–19). An IB diploma is one of the most widely accepted qualifications by top universities globally.",
  },
  {
    q: "How many students are in each class?",
    a: "Classes at Milestone never exceed 20–22 students. This intentionally small group size allows teachers to apply a genuinely individual approach to each student — identifying their strengths, addressing their weaknesses, and ensuring no child is overlooked.",
  },
  {
    q: "What academic tracks can my child choose from?",
    a: (
      <>
        <strong>Exact Sciences</strong> — deep study of Mathematics, Physics and
        IT, leading to IELTS & SAT certification and pathways into engineering,
        technology and data science. <strong>Natural Sciences</strong> —
        Chemistry, Biology and Geography with laboratory work every lesson,
        preparing students for medicine and research.{" "}
        <strong>Social Sciences</strong> — History, Law, Economics and Business
        Management, building future lawyers, politicians and business leaders.
        Mathematics and English are taught in depth across all three tracks.
      </>
    ),
  },
  {
    q: "How do grants and scholarships work?",
    a: "At the end of every quarter, students are ranked by academic performance using a point-based system. The top performers receive tuition grants: 1st place earns a 100% grant (full tuition), 2nd place 80%, 3rd place 50%, and 4th and 5th place each receive 30%. Grants are funded by Milestone's dedicated scholarship fund.",
  },
  {
    q: "What documents are required for admission?",
    a: (
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "1.2rem",
          marginTop: "0.5rem",
        }}
      >
        <li>Application addressed to the Director</li>
        <li>Copy of student&apos;s birth certificate (4 copies)</li>
        <li>Identity documents of parents or guardians (4 copies)</li>
        <li>
          Student&apos;s medical card & Hepatitis A vaccination certificate
        </li>
        <li>8 Color photos (3x4 cm size)</li>
        <li>School departure ticket & electronic daily password log</li>
      </ul>
    ),
  },
  {
    q: "What is the admission procedure for different grade levels?",
    a: "Milestone International School accepts students from 1st to 9th grade. Our structured admissions process includes a formal application, entrance examinations specialized by track, and a personal interview with the student to ensure they are placed in the environment where they will thrive most.",
  },
  {
    q: "How are the school entrance examinations conducted?",
    a: "Entrance exams are mandatory for students entering grades 6 through 9. These assessments are conducted in a test format covering our core educational directions: Exact Sciences, Natural Sciences, and Social Sciences & Humanities.",
  },
  {
    q: "Which universities can graduates access?",
    a: "Milestone's IB Diploma Programme is designed to prepare students for entry into the top 50 universities globally. Graduates from the Exact Sciences track also complete IELTS and SAT certification as part of their studies, significantly strengthening their international university application.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Left — sticky header */}
          <div className={styles.header}>
            <span className={styles.label}>Common Questions</span>
            <h2 className={styles.title}>
              Have a question?{" "}
              <span className={styles.titleAccent}>We have answers.</span>
            </h2>
            <p className={styles.subtitle}>
              Everything parents ask before making their decision — answered
              directly from our programme and welcome guide.
            </p>
            <a href="#admissions" className={styles.contactNudge}>
              Still unsure? Book a call
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Right — accordion */}
          <div className={styles.accordion}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={styles.item}>
                  <button
                    className={styles.question}
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                  >
                    {faq.q}
                    <span className={styles.icon}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`${styles.answer} ${isOpen ? styles.open : ""}`}
                  >
                    <div className={styles.answerInner}>{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
