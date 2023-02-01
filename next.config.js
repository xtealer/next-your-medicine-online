/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
});

const rewriteConfig = nextConfig({ reactStrictMode: true, swcMinify: true });
module.exports = {
  ...rewriteConfig,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};
