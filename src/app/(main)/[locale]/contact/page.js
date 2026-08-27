import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pathForLocale, languageAlternates } from "@/lib/site";
import { contactSchema, NAP, SOCIAL_LINKS, MAP_URL } from "@/lib/schema";
import NavbarV2 from "@/components/NavbarV2";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  PinIcon,
  ArrowUpRight,
  SOCIAL_ICONS,
} from "@/components/icons";
import Footer from "@/components/Footer";
import styles from "@/components/page-shell.module.css";

const ogLocales = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact.meta" });
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: pathForLocale(locale, "contact"),
      languages: languageAlternates("contact"),
    },
    openGraph: {
      type: "website",
      siteName: "Virtus International School",
      title,
      description,
      url: pathForLocale(locale, "contact"),
      locale: ogLocales[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
      images: [
        { url: "/virtus-banner.jpg", width: 2400, height: 875, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/virtus-banner.jpg"],
    },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Contact" });
  const ti = await getTranslations({ locale, namespace: "ContactInfo" });
  const tc = await getTranslations({ locale, namespace: "RequestCallModal" });
  const schema = contactSchema({ locale });

  return (
    <>
      <NavbarV2 />
      <main>
        <PageHero
          image="/images/real-school/reception.jpg"
          alt={t("h1")}
          badge={ti("hours")}
          badgeIcon={<ClockIcon />}
          title={t("h1")}
          lead={t("lead")}
        />

        {/* Details and the request form sit side by side, so a visitor who
            wants to call and one who wants to write both land on their path
            immediately. NAP values come from lib/schema, so the page text and
            the JSON-LD cannot drift apart; the map stays an outbound link. */}
        <section className={styles.block}>
          <div className={styles.container}>
            <div className={styles.splitGrid}>
              <div className={styles.detailPanel}>
                <span className={styles.panelLabel}>
                  {ti("title").replace(/[:!\s]+$/, "")}
                </span>
                <h2 className={styles.panelHeading}>
                  {t("sections.addressMap")}
                </h2>

                <ul className={styles.detailList}>
                  <li className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <PhoneIcon />
                    </span>
                    <span className={styles.detailText}>
                      <span className={styles.detailLabel}>
                        {ti("phoneLabel")}
                      </span>
                      <a
                        href={"tel:" + NAP.telephone}
                        className={styles.detailValue}
                      >
                        +998 555 886 555
                      </a>
                    </span>
                  </li>

                  <li className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <MailIcon />
                    </span>
                    <span className={styles.detailText}>
                      <span className={styles.detailLabel}>
                        {ti("emailLabel")}
                      </span>
                      <a
                        href={"mailto:" + NAP.email}
                        className={styles.detailValue}
                      >
                        {NAP.email}
                      </a>
                    </span>
                  </li>

                  <li className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <PinIcon />
                    </span>
                    <span className={styles.detailText}>
                      <span className={styles.detailLabel}>
                        {ti("addressLabel")}
                      </span>
                      <span className={styles.detailValue}>
                        {ti("address")}
                      </span>
                    </span>
                  </li>

                  <li className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <ClockIcon />
                    </span>
                    <span className={styles.detailText}>
                      <span className={styles.detailLabel}>
                        {ti("hoursLabel")}
                      </span>
                      <span className={styles.detailValue}>{ti("hours")}</span>
                    </span>
                  </li>
                </ul>

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapBtn}
                >
                  <PinIcon />
                  {t("mapCta")}
                  <ArrowUpRight />
                </a>

                <div className={styles.panelSocials}>
                  <h2 className={styles.panelLabel}>
                    {t("sections.social")}
                  </h2>
                  <div className={styles.socialRow}>
                    {SOCIAL_LINKS.map((s) => {
                      const Icon = SOCIAL_ICONS[s.label];
                      return (
                        <a
                          key={s.url}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialDot}
                          aria-label={s.label}
                        >
                          {Icon ? <Icon /> : null}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <LeadForm
                formType="contact-request"
                heading={t("sections.leaveRequest")}
              />
            </div>
          </div>
        </section>

        {/* Lighter secondary action — name and phone only, matching what the
            existing Request a Call modal collects. */}
        <section className={styles.blockAlt}>
          <div className={styles.container}>
            <LeadForm
              variant="inline"
              formType="contact-call"
              heading={t("sections.requestCall")}
              description={tc("subtitle")}
              icon={<PhoneIcon />}
              submitLabel={tc("submit")}
            />
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
