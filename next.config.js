/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bigseventravel.com"],
  },
};

module.exports = nextConfig;
