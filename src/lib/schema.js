import { siteUrl, urlForLocale } from "@/lib/site";

// Single source of NAP truth. The About/Contact spec requires the name,
// address and phone to be identical on the page and in every JSON-LD block,
// with the phone in E.164 form.
export const SOCIAL_LINKS = [
  { label: "Telegram", url: "https://t.me/virtusschool" },
  { label: "Instagram", url: "https://www.instagram.com/virtusschool" },
  { label: "YouTube", url: "https://www.youtube.com/@virtusschool" },
  { label: "X", url: "https://x.com/virtusschooluz" },
];

export const NAP = {
  name: "Virtus International School",
  alternateName: "VIS",
  telephone: "+998555886555",
  email: "ibprivateschool@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1d Arnasay Street",
    addressLocality: "Tashkent",
    addressRegion: "Chilanzar District",
    addressCountry: "UZ",
  },
  sameAs: SOCIAL_LINKS.map((s) => s.url),
};

// Google Maps link used by the Contact page and ContactInfo — the spec keeps
// the map as an outbound link rather than an embedded iframe.
export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=1d%20Arnasay%20Street%2C%20Chilanzar%20District%2C%20Tashkent%20City";

// About and Contact describe the same organisation. A shared @id ties the two
// JSON-LD blocks to one entity rather than letting them read as two.
const organizationId = `${siteUrl}/#organization`;

// About -> EducationalOrganization. `description` is the locale's own meta
// description, so the entity is described in the language of the page.
export function aboutSchema({ locale, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": organizationId,
    name: NAP.name,
    alternateName: NAP.alternateName,
    url: urlForLocale(locale, "about"),
    inLanguage: locale,
    description,
    foundingLocation: "Tashkent, Uzbekistan",
    address: NAP.address,
    telephone: NAP.telephone,
    email: NAP.email,
    sameAs: NAP.sameAs,
  };
}

// Contact -> School + ContactPoint, with machine-readable opening hours.
export function contactSchema({ locale }) {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": organizationId,
    name: NAP.name,
    url: urlForLocale(locale, "contact"),
    inLanguage: locale,
    image: `${siteUrl}/virtus-banner.jpg`,
    address: NAP.address,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: NAP.telephone,
      email: NAP.email,
      contactType: "admissions",
      availableLanguage: ["uz", "ru", "en"],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    sameAs: NAP.sameAs,
  };
}

// FAQ -> FAQPage. Every Q&A is rendered in the HTML, so the markup mirrors
// exactly what a reader sees. `about` points at the shared organisation @id
// so this page attaches to the same entity as About and Contact.
export function faqSchema({ locale, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${urlForLocale(locale, "faq")}#faq`,
    url: urlForLocale(locale, "faq"),
    inLanguage: locale,
    about: { "@id": organizationId },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

// Generic page node for the info pages that have no richer type of their own.
// `about` ties the page to the same organisation entity as About and Contact,
// so the info pages read as one site rather than unrelated documents.
export function pageSchema({ locale, path, name, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${urlForLocale(locale, path)}#webpage`,
    url: urlForLocale(locale, path),
    name,
    description,
    inLanguage: locale,
    about: { "@id": organizationId },
  };
}
