import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pathForLocale, languageAlternates } from "@/lib/site";
import { aboutSchema, NAP } from "@/lib/schema";
import NavbarV2 from "@/components/NavbarV2";
import PageHero from "@/components/PageHero";
import { BookIcon } from "@/components/icons";
import IntroductionV2 from "@/components/IntroductionV2";
import FourPillarsV2 from "@/components/FourPillarsV2";
import AmenitiesV2 from "@/components/AmenitiesV2";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import styles from "@/components/page-shell.module.css";

const ogLocales = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.meta" });
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: pathForLocale(locale, "about"),
      languages: languageAlternates("about"),
    },
    openGraph: {
      type: "website",
      siteName: "Virtus International School",
      title,
      description,
      url: pathForLocale(locale, "about"),
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

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "About" });
  const th = await getTranslations({ locale, namespace: "Hero" });
  const ti = await getTranslations({ locale, namespace: "Introduction" });
  const schema = aboutSchema({ locale, description: t("meta.description") });

  return (
    <>
      <NavbarV2 />
      <main>
        <PageHero
          image="/campus.png"
          alt={ti("buildingAlt")}
          badge={th("badge")}
          badgeIcon={<BookIcon />}
          title={t("h1")}
          lead={t("lead")}
          stats={th.raw("stats")}
        />

        <section className={styles.prose}>
          <div className={styles.container}>
            <div className={styles.proseGrid}>
              <div className={styles.proseAside}>
                <span className={styles.sectionLabel}>{NAP.name}</span>
                <h2 className={styles.sectionHeading}>{t("bodyHeading")}</h2>
              </div>
              <div className={styles.proseBody}>
                {t.raw("body").map((paragraph, i) => (
                  <p key={i} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <IntroductionV2 />
        <FourPillarsV2 />
        <AmenitiesV2 />
        <CtaBanner />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
