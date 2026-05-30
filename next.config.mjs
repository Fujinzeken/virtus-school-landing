import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone', // Docker uchun optimallashtirilgan
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

export default withNextIntl(nextConfig);
