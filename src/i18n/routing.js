import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Uzbek is the default; English and Russian are also supported.
  locales: ["uz", "ru", "en"],
  defaultLocale: "uz",
  // Default locale (uz) has no prefix ("/"); others are "/ru", "/en".
  localePrefix: "as-needed",
  // Always land on the default (uz); don't auto-switch by browser language.
  localeDetection: false,
});
