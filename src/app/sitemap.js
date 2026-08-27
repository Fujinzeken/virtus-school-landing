import { routing } from "@/i18n/routing";
import { urlForLocale } from "@/lib/site";

// Every page, in every locale. Priority is for the default locale; the others
// step down one notch.
const PAGES = [
  { path: "", priority: 1 },
  { path: "about", priority: 0.8 },
  { path: "contact", priority: 0.8 },
];

export default function sitemap() {
  const lastModified = new Date();

  return PAGES.flatMap(({ path, priority }) =>
    routing.locales.map((locale) => ({
      url: urlForLocale(locale, path),
      lastModified,
      changeFrequency: "monthly",
      priority:
        locale === routing.defaultLocale
          ? priority
          : Math.round((priority - 0.2) * 10) / 10,
      alternates: {
        languages: {
          ...Object.fromEntries(
            routing.locales.map((l) => [l, urlForLocale(l, path)])
          ),
          "x-default": urlForLocale(routing.defaultLocale, path),
        },
      },
    }))
  );
}
