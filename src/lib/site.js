import { routing } from "@/i18n/routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://virtusschool.uz";

// routing.localePrefix is "as-needed": the default locale (uz) lives at "/",
// the others at "/{locale}".
export const pathForLocale = (locale) =>
  locale === routing.defaultLocale ? "/" : `/${locale}`;

export const urlForLocale = (locale) =>
  new URL(pathForLocale(locale), siteUrl).toString();

export const languageAlternates = () =>
  Object.fromEntries(routing.locales.map((l) => [l, pathForLocale(l)]));
