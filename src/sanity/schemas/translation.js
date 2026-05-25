import { defineField, defineType } from "sanity";

// Sections used to organise translations in the Studio sidebar.
// Keep in sync with the top-level namespaces in messages/*.json.
export const SECTIONS = [
  "Meta",
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
  "Form",
  "Modal",
  "ApplyModal",
  "BookTourModal",
  "RequestCallModal",
  "LanguageSwitcher",
];

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
