"use client";

// Sanity Studio embedded at /studio. The Studio is a client-side SPA so this
// page must be a Client Component (NextStudio uses React context internally).
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
