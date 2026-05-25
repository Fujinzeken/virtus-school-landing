// Root layout for the Sanity Studio route group. The Studio brings its own
// styling, so we deliberately don't load the site's globals.css here.
//
// Re-exporting `metadata` and `viewport` from `next-sanity/studio` sets the
// correct title, charset, and viewport tags for the Studio SPA. These must
// live in this server-component layout because the Studio page itself is a
// client component and can't export Next's metadata API.
export { metadata, viewport } from "next-sanity/studio";

export default function StudioRootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
