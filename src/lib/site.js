import { routing } from "@/i18n/routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://virtusschool.uz";

// Strip surrounding slashes so callers can pass "about", "/about" or "/about/".
const normalize = (path) => String(path ?? "").replace(/^\/+|\/+$/g, "");

// routing.localePrefix is "as-needed": the default locale (uz) is unprefixed
// ("/", "/about"), the others carry their code ("/ru", "/ru/about").
export const pathForLocale = (locale, path = "") => {
  const segment = normalize(path);
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}${segment ? `/${segment}` : ""}` || "/";
};

export const urlForLocale = (locale, path = "") =>
  new URL(pathForLocale(locale, path), siteUrl).toString();

// Reciprocal hreflang set for one page, plus x-default pointing at the
// default locale (uz) as required by the About/Contact spec.
export const languageAlternates = (path = "") => ({
  ...Object.fromEntries(
    routing.locales.map((l) => [l, pathForLocale(l, path)])
  ),
  "x-default": pathForLocale(routing.defaultLocale, path),
});
