import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pathForLocale, languageAlternates } from "@/lib/site";
import { pageSchema } from "@/lib/schema";
import NavbarV2 from "@/components/NavbarV2";
import PageHero from "@/components/PageHero";
import { BookIcon } from "@/components/icons";
import StatBand from "@/components/StatBand";
import AdmissionsBody from "@/components/AdmissionsBody";
import EnrollmentV2 from "@/components/EnrollmentV2";
import RelatedLinks from "@/components/RelatedLinks";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const ogLocales = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

// /programs is the last page still unbuilt — it points at the matching
// homepage section until then.
const RELATED = [
  { key: "grants", href: "/grants" },
  { key: "programs", href: "/programs" },
  { key: "faq", href: "/faq" },
];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AdmissionStages.meta" });
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: pathForLocale(locale, "admissions"),
      languages: languageAlternates("admissions"),
    },
    openGraph: {
      type: "website",
      siteName: "Virtus International School",
      title,
      description,
      url: pathForLocale(locale, "admissions"),
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

export default async function AdmissionsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "AdmissionStages" });
  const th = await getTranslations({ locale, namespace: "Hero" });

  const schema = pageSchema({
    locale,
    path: "admissions",
    name: t("meta.title"),
    description: t("meta.description"),
  });

  return (
    <>
      <NavbarV2 />
      <main>
        <PageHero
          image="/images/real-school/reception.jpg"
          alt={t("heroAlt")}
          badge={th("badge")}
          badgeIcon={<BookIcon />}
          title={t("h1")}
          lead={t("lead")}
        />

        <StatBand items={t.raw("stats")} />

        <AdmissionsBody sections={t.raw("sections")} />

        <EnrollmentV2 />

        <RelatedLinks
          heading={t("related.heading")}
          items={RELATED.map(({ key, href }) => ({
            href,
            title: t(`related.${key}.title`),
            desc: t(`related.${key}.desc`),
          }))}
        />

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
