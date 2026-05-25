import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

// Optional read token — only needed if the dataset is private. The Sanity
// CDN can only serve unauthenticated requests, so we disable it when a
// token is provided.
const token = process.env.SANITY_API_READ_TOKEN;

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: !token,
  token,
});

const builder = createImageUrlBuilder(client);

// Helper for resolving Sanity image references to URLs.
//   <Image src={urlFor(image).width(800).url()} … />
export const urlFor = (src) => builder.image(src);
