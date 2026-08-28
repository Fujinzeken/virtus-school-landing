import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pathForLocale, languageAlternates } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import NavbarV2 from "@/components/NavbarV2";
import PageHero from "@/components/PageHero";
import { BookIcon } from "@/components/icons";
import FaqList from "@/components/FaqList";
import RelatedLinks from "@/components/RelatedLinks";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const ogLocales = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

// The spec wants these pointing at /admissions, /grants and /programs. Those
// pages don't exist yet, so they aim at the equivalent homepage sections for
// now — swap each href when the dedicated page lands.
const RELATED = [
  { key: "admissions", href: "/admissions" },
  { key: "grants", href: "/grants" },
  { key: "programs", href: "/programs" },
];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Faq.meta" });
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: pathForLocale(locale, "faq"),
      languages: languageAlternates("faq"),
    },
    openGraph: {
      type: "website",
      siteName: "Virtus International School",
      title,
      description,
      url: pathForLocale(locale, "faq"),
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

export default async function FaqPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Faq" });
  const th = await getTranslations({ locale, namespace: "Hero" });

  const items = t.raw("items");
  const schema = faqSchema({ locale, items });

  return (
    <>
      <NavbarV2 />
      <main>
        <PageHero
          image="/images/real-school/karidor1.jpg"
          alt={t("heroAlt")}
          badge={th("badge")}
          badgeIcon={<BookIcon />}
          title={t("h1")}
          lead={t("lead")}
        />

        <FaqList
          items={items}
          aside={{
            label: t("asideLabel"),
            heading: t("asideHeading"),
            note: t("asideNote"),
            cta: t("asideCta"),
          }}
        />

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
