import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pathForLocale, languageAlternates } from "@/lib/site";
import { pageSchema } from "@/lib/schema";
import NavbarV2 from "@/components/NavbarV2";
import PageHero from "@/components/PageHero";
import { BookIcon } from "@/components/icons";
import StatBand from "@/components/StatBand";
import ProgramsBody from "@/components/ProgramsBody";
import RelatedLinks from "@/components/RelatedLinks";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const ogLocales = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

const RELATED = [
  { key: "admissions", href: "/admissions" },
  { key: "grants", href: "/grants" },
  { key: "faq", href: "/faq" },
];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Programs.meta" });
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: pathForLocale(locale, "programs"),
      languages: languageAlternates("programs"),
    },
    openGraph: {
      type: "website",
      siteName: "Virtus International School",
      title,
      description,
      url: pathForLocale(locale, "programs"),
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

export default async function ProgramsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Programs" });
  const th = await getTranslations({ locale, namespace: "Hero" });

  const schema = pageSchema({
    locale,
    path: "programs",
    name: t("meta.title"),
    description: t("meta.description"),
  });

  return (
    <>
      <NavbarV2 />
      <main>
        <PageHero
          image="/images/real-school/comp.jpg"
          alt={t("heroAlt")}
          badge={th("badge")}
          badgeIcon={<BookIcon />}
          title={t("h1")}
          lead={t("lead")}
        />

        <StatBand items={t.raw("stats")} />

        <ProgramsBody
          ib={t.raw("ib")}
          tracks={t.raw("tracks")}
          development={t.raw("development")}
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
