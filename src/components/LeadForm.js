"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { submitLead } from "@/lib/submitLead";
import styles from "./lead-form.module.css";

// Inline lead form for the Contact page. Same fields, honeypot and Form
// namespace strings as the modal forms — submitLead attaches locale, page
// path and UTM params on its own.
//
// variant "card"   — full-width stacked card (primary request form)
// variant "inline" — compact horizontal strip (secondary call-back action)
export default function LeadForm({
  formType,
  heading,
  description,
  submitLabel,
  icon,
  variant = "card",
}) {
  const tf = useTranslations("Form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSending(true);
    const ok = await submitLead({
      formType,
      name: name.trim(),
      phone: `+998 ${phone.trim()}`,
      company,
    });
    setSending(false);
    if (!ok) {
      alert(tf("error"));
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setName("");
    setPhone("");
  }

  const inline = variant === "inline";

  const fields = (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder={tf("namePlaceholder")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className={styles.phoneRow}>
        <div className={styles.phonePrefix}>
          <span role="img" aria-label={tf("flagLabel")}>
            🇺🇿
          </span>{" "}
          +998
        </div>
        <input
          className={styles.phoneInput}
          type="tel"
          placeholder={tf("phonePlaceholder")}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          opacity: 0,
        }}
      />

      <button type="submit" className={styles.submitBtn} disabled={sending}>
        {sending ? tf("sending") : submitLabel || tf("submit")}
      </button>
    </>
  );

  if (inline) {
    return (
      <div className={styles.strip}>
        <div className={styles.stripIntro}>
          {icon ? <span className={styles.stripIcon}>{icon}</span> : null}
          <div className={styles.stripText}>
            <h2 className={styles.stripHeading}>{heading}</h2>
            <p className={styles.stripDesc}>{description || tf("subtext")}</p>
          </div>
        </div>
        {submitted ? (
          <p className={styles.successMsg}>{tf("success")}</p>
        ) : (
          <form className={styles.inlineForm} onSubmit={handleSubmit}>
            {fields}
          </form>
        )}
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subtext}>{description || tf("subtext")}</p>

      {submitted ? (
        <p className={styles.successMsg}>{tf("success")}</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          {fields}
        </form>
      )}

      <p className={styles.disclaimer}>{tf("disclaimer")}</p>
    </div>
  );
}
