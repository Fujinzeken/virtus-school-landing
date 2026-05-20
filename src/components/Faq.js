"use client";

import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    q: "What ages does Virtus International School accept?",
    a: "Virtus International School enrolls children aged 4 to 19. New students are admitted from age 4 up to age 15. Each class has a maximum of 20-22 students, ensuring an individual approach and effective learning for every child. Small class sizes allow teachers to better identify each student's needs and abilities.",
  },
  {
    q: "What educational directions are available?",
    a: "We offer three specialized tracks: Exact Sciences (mathematics, physics, IT), Natural Sciences (chemistry, biology, geography), and Social Sciences (history, law, economics, business management). Mathematics and English are taught in depth across all directions, ensuring students are internationally competitive.",
  },
  {
    q: "How do scholarship grants work?",
    a: "Grants are awarded as tuition discounts ranging from 5% to 100%, based on competitive entrance examinations. The number of full (100%) grants is limited to 50 places. Grants are awarded for one academic quarter and reviewed each quarter — to keep a grant, a student must remain within the Top 5 of their grade and uphold the school's IB disciplinary standards.",
  },
  {
    q: "Who can apply for a grant, and how are candidates assessed?",
    a: "Candidates aged 11–15 (MYP) sit written exams in three tracks — Exact Sciences (mathematics, physics, computer science), Natural Sciences (chemistry, biology), and Humanities (history, law, etc.). Exams are held on campus and conducted in English. Children aged 4–10 (PYP) take part in an interview with a psychologist, alongside an assessment of the family's social profile.",
  },
  {
    q: "How long is the academic year?",
    a: "The course lasts 10 months, from September 2nd to June 30th.",
  },
  {
    q: "Do you offer a summer program?",
    a: "Yes — we offer a summer program to help children prepare for our school's entrance exams.",
  },
  {
    q: "How does the school support students' well-being?",
    a: "Every 40-50 students are assigned a personal mentor who monitors academic and disciplinary development and maintains daily communication with parents. Professional psychologists support students' emotional well-being, and special adaptation programs help new students adjust to the school environment. All progress is tracked via our Telegram bot system.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className={styles.section} id="qa">
      <div className={styles.container}>
        <h2 className={styles.title}>FAQ</h2>
        <div className={styles.accordion}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={styles.item}>
                <button
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.questionText}>{faq.q}</span>
                  <span
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <p className={styles.answerText}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
