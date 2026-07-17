import { routing } from "@/i18n/routing";
import { urlForLocale } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  return routing.locales.map((locale) => ({
    url: urlForLocale(locale),
    lastModified,
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, urlForLocale(l)])
      ),
    },
  }));
}
