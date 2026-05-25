import { defineField, defineType } from "sanity";

// Sections shown in the Studio sidebar. 14 page sections + 3 modals + 1
// catch-all "Shared" group for utility namespaces (Form, Modal, Meta,
// LanguageSwitcher) — keeps the sidebar concise for non-technical editors.
export const SECTIONS = [
  "Navbar",
  "Hero",
  "Introduction",
  "ClassroomFeatures",
  "FourPillars",
  "Enrollment",
  "Amenities",
  "ComprehensiveCoverage",
  "AdmissionStages",
  "Grants",
  "Faq",
  "Cta",
  "ContactInfo",
  "Footer",
  "ApplyModal",
  "BookTourModal",
  "RequestCallModal",
  "Shared",
];

// Maps a translation key's top-level namespace to its Studio section.
// Utility namespaces collapse into "Shared".
const SECTION_OVERRIDES = {
  Form: "Shared",
  Modal: "Shared",
  Meta: "Shared",
  LanguageSwitcher: "Shared",
};

export function sectionFor(key) {
  const top = String(key).split(".")[0].split("[")[0];
  return SECTION_OVERRIDES[top] || top;
}

// One document per translation key. The `key` is the full dot-path used in
// the code (e.g. "Hero.title"); the `section` matches its top-level
// namespace and is what we group by in the Studio sidebar.
export default defineType({
  name: "translation",
  title: "Translation",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Key",
      type: "string",
      description:
        "Full dot-path used in code (e.g. Hero.headline, Apply.directions.ai). Don't edit — code references it.",
      readOnly: ({ document }) => Boolean(document?._id && !document._id.startsWith("drafts.")),
      validation: (R) => R.required(),
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      description: "Top-level group used for organising the Studio sidebar.",
      options: { list: SECTIONS },
      validation: (R) => R.required(),
    }),
    defineField({ name: "en", title: "English", type: "text", rows: 2 }),
    defineField({ name: "ru", title: "Русский", type: "text", rows: 2 }),
    defineField({ name: "uz", title: "Oʻzbekcha", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "key", subtitle: "en" },
  },
});
