import { groq } from "next-sanity";

// All translation entries for every section. Fetched once and merged with
// the static messages/*.json defaults at request time. Empty/missing values
// fall back to the static JSON so we can migrate sections incrementally.
export const allTranslationsQuery = groq`
  *[_type == "translation"] {
    key, section, en, ru, uz
  }
`;
