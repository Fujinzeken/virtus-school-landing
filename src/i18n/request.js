import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { client } from "@/sanity/lib/client";
import { allTranslationsQuery } from "@/sanity/lib/queries";

// Tokenize a key path into a sequence of object keys and array indices.
// "Faq.items[0].q" -> ["Faq", "items", 0, "q"]
function tokenize(keyPath) {
  const tokens = [];
  let buf = "";
  for (let i = 0; i < keyPath.length; i++) {
    const c = keyPath[i];
    if (c === ".") {
      if (buf) {
        tokens.push(buf);
        buf = "";
      }
    } else if (c === "[") {
      if (buf) {
        tokens.push(buf);
        buf = "";
      }
      const close = keyPath.indexOf("]", i);
      if (close === -1) break;
      tokens.push(Number.parseInt(keyPath.slice(i + 1, close), 10));
      i = close;
    } else {
      buf += c;
    }
  }
  if (buf) tokens.push(buf);
  return tokens;
}

// Set value at a dot/bracket path, creating objects or arrays as needed.
function setDeep(target, keyPath, value) {
  const tokens = tokenize(keyPath);
  if (!tokens.length) return;
  let cur = target;
  for (let i = 0; i < tokens.length - 1; i++) {
    const k = tokens[i];
    const nextIsIndex = typeof tokens[i + 1] === "number";
    if (cur[k] === undefined || cur[k] === null) {
      cur[k] = nextIsIndex ? [] : {};
    }
    cur = cur[k];
  }
  cur[tokens[tokens.length - 1]] = value;
}

// Convert flat Sanity translation docs to a nested messages object for the
// requested locale. Empty strings are ignored so an unfilled locale falls
// back to the static JSON.
function buildSanityMessages(translations, locale) {
  const out = {};
  for (const t of translations) {
    if (!t || typeof t.key !== "string") continue;
    const value = t[locale];
    if (typeof value === "string" && value.length > 0) {
      setDeep(out, t.key, value);
    }
  }
  return out;
}

// Deep-merge with array support: arrays merge element-wise so a partial
// Sanity override (e.g. only items[0].q for the first FAQ) doesn't truncate
// the rest of the array from the static defaults.
function deepMerge(base, overrides) {
  if (overrides === undefined) return base;
  if (base === undefined) return overrides;
  if (Array.isArray(base) && Array.isArray(overrides)) {
    const out = [...base];
    overrides.forEach((v, i) => {
      out[i] = deepMerge(out[i], v);
    });
    return out;
  }
  if (
    base &&
    typeof base === "object" &&
    !Array.isArray(base) &&
    overrides &&
    typeof overrides === "object" &&
    !Array.isArray(overrides)
  ) {
    const out = { ...base };
    for (const k of Object.keys(overrides)) {
      out[k] = deepMerge(out[k], overrides[k]);
    }
    return out;
  }
  return overrides;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Static defaults — source of truth for any key not yet migrated to Sanity.
  const staticMessages = (await import(`../../messages/${locale}.json`))
    .default;

  // Sanity overrides — fetched per request but cached/revalidated.
  let sanityMessages = {};
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const translations = await client.fetch(
        allTranslationsQuery,
        {},
        { next: { revalidate: 60 } }
      );
      sanityMessages = buildSanityMessages(translations || [], locale);
    } catch (err) {
      console.warn(
        "[i18n] Sanity fetch failed, falling back to static messages:",
        err?.message || err
      );
    }
  }

  return {
    locale,
    messages: deepMerge(staticMessages, sanityMessages),
  };
});
