/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
});

const pwaNextConfig = nextConfig({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    mdxRs: true,
    nextScriptWorkers: true,
  },
});

const withMDX = require("@next/mdx")();
module.exports = withMDX(pwaNextConfig);
