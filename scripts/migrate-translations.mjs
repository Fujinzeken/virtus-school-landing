// Reads messages/en.json + ru.json + uz.json and emits a single NDJSON file
// you can import into Sanity in one command:
//
//   npx sanity dataset import scripts/translations.ndjson production --replace
//
// Re-run any time you want to seed/refresh: docs use deterministic _ids
// (derived from the key) so re-imports upsert without duplicates.
//
// Supports arrays via bracket-index keys (e.g. "Faq.items[0].q"), and
// consolidates utility namespaces (Form, Modal, Meta, LanguageSwitcher)
// into a single "Shared" section to keep the Studio sidebar concise.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const msgDir = path.join(root, "messages");

const LOCALES = ["en", "ru", "uz"];

const SECTION_OVERRIDES = {
  Form: "Shared",
  Modal: "Shared",
  Meta: "Shared",
  LanguageSwitcher: "Shared",
};
function sectionFor(key) {
  const top = String(key).split(".")[0].split("[")[0];
  return SECTION_OVERRIDES[top] || top;
}

function loadJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

// Walk a nested value and emit (dot-key, value) pairs for every leaf string.
// Arrays are walked with bracket indices: Faq.items[0].q, ComprehensiveCoverage.pills[0]
function* leafStrings(value, prefix = "") {
  if (typeof value === "string") {
    if (prefix) yield [prefix, value];
    return;
  }
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      yield* leafStrings(value[i], `${prefix}[${i}]`);
    }
    return;
  }
  if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      const next = prefix ? `${prefix}.${k}` : k;
      yield* leafStrings(v, next);
    }
  }
}

function collect(locale) {
  const map = new Map();
  for (const [k, v] of leafStrings(loadJson(path.join(msgDir, `${locale}.json`)))) {
    map.set(k, v);
  }
  return map;
}

// _id-safe slug: Sanity _ids can't contain dots; replace . and [ ] with _.
function idFor(key) {
  return "translation-" + key.replace(/\./g, "_").replace(/\[/g, "_").replace(/\]/g, "");
}

const perLocale = Object.fromEntries(LOCALES.map((l) => [l, collect(l)]));
const allKeys = new Set();
for (const m of Object.values(perLocale)) for (const k of m.keys()) allKeys.add(k);

const docs = [];
for (const key of [...allKeys].sort()) {
  const doc = {
    _type: "translation",
    _id: idFor(key),
    key,
    section: sectionFor(key),
  };
  for (const l of LOCALES) {
    const v = perLocale[l].get(key);
    if (typeof v === "string") doc[l] = v;
  }
  docs.push(doc);
}

const outPath = path.join(root, "scripts", "translations.ndjson");
fs.writeFileSync(outPath, docs.map((d) => JSON.stringify(d)).join("\n") + "\n", "utf8");

const sectionCounts = docs.reduce((acc, d) => {
  acc[d.section] = (acc[d.section] || 0) + 1;
  return acc;
}, {});

console.log(`Wrote ${docs.length} translation docs to ${path.relative(root, outPath)}`);
console.log("Per-section counts:");
for (const [s, n] of Object.entries(sectionCounts).sort()) {
  console.log(`  ${s.padEnd(24)} ${n}`);
}
console.log(`\nImport with:`);
console.log(`  npx sanity dataset import scripts/translations.ndjson production --replace`);
