"use client";

import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    q: "What grades does Milestone International School accept?",
    a: "Milestone International School accepts students from 1st to 9th grade. Each class has a maximum of 20-22 students, ensuring an individual approach and effective learning for every child. Small class sizes allow teachers to better identify each student's needs and abilities.",
  },
  {
    q: "What educational directions are available?",
    a: "We offer three specialized tracks: Exact Sciences (mathematics, physics, IT), Natural Sciences (chemistry, biology, geography), and Social Sciences (history, law, economics, business management). Mathematics and English are taught in depth across all directions, ensuring students are internationally competitive.",
  },
  {
    q: "What grants and financial aid are available?",
    a: "Students who demonstrate excellent results in quarterly exams are eligible for grants: 1st place receives a 100% grant, 2nd place 80%, 3rd place 50%, and 4th-5th places 30%. Student progress is monitored through a Telegram bot point system, and additional financial aid is available based on academic performance and financial status.",
  },
  {
    q: "What is the daily schedule for dormitory students?",
    a: "The day begins at 6:00 AM with self-study from 7:00-8:00 AM, followed by breakfast at 8:00 AM. Lessons run from 8:35 AM to 4:05 PM in focused 40-minute segments with short breaks. Lunch is served at 1:10 PM. Additional clubs and activities take place from 4:30-6:30 PM, with evening self-study from 7:00-9:00 PM.",
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
