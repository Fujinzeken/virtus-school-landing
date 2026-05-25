import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { SECTIONS } from "./schemas/translation";

export default defineConfig({
  name: "default",
  title: "Virtus International School",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Translations")
              .id("translations")
              .child(
                S.list()
                  .title("By section")
                  .items([
                    // One drill-down per section: shows all translation docs
                    // whose `section` field matches.
                    ...SECTIONS.map((section) =>
                      S.listItem()
                        .title(section)
                        .id(section)
                        .child(
                          S.documentList()
                            .title(`${section} translations`)
                            .filter('_type == "translation" && section == $section')
                            .params({ section })
                            .defaultOrdering([{ field: "key", direction: "asc" }])
                        )
                    ),
                    S.divider(),
                    S.listItem()
                      .title("All translations")
                      .id("all")
                      .child(
                        S.documentList()
                          .title("All translations")
                          .filter('_type == "translation"')
                          .defaultOrdering([
                            { field: "section", direction: "asc" },
                            { field: "key", direction: "asc" },
                          ])
                      ),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],
});
