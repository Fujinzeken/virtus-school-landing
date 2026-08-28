import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pathForLocale, languageAlternates } from "@/lib/site";
import { pageSchema } from "@/lib/schema";
import NavbarV2 from "@/components/NavbarV2";
import PageHero from "@/components/PageHero";
import { BookIcon } from "@/components/icons";
import StatBand from "@/components/StatBand";
import GrantsBody from "@/components/GrantsBody";
import RelatedLinks from "@/components/RelatedLinks";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const ogLocales = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

// /admissions and /programs aren't built yet, so those two still point at the
// matching homepage sections. Swap each href when its page lands.
const RELATED = [
  { key: "admissions", href: "/admissions" },
  { key: "programs", href: "/programs" },
  { key: "faq", href: "/faq" },
];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Grants.meta" });
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: pathForLocale(locale, "grants"),
      languages: languageAlternates("grants"),
    },
    openGraph: {
      type: "website",
      siteName: "Virtus International School",
      title,
      description,
      url: pathForLocale(locale, "grants"),
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

export default async function GrantsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Grants" });
  const th = await getTranslations({ locale, namespace: "Hero" });

  const schema = pageSchema({
    locale,
    path: "grants",
    name: t("meta.title"),
    description: t("meta.description"),
  });

  return (
    <>
      <NavbarV2 />
      <main>
        <PageHero
          image="/images/real-school/sinf 01.jpg"
          alt={t("heroAlt")}
          badge={th("badge")}
          badgeIcon={<BookIcon />}
          title={t("h1")}
          lead={t("lead")}
        />

        <StatBand items={t.raw("stats")} />

        <GrantsBody label={t("title")} sections={t.raw("sections")} />

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
