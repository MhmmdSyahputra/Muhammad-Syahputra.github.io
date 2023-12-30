/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.discordapp.com"],
  },
  env: {
    URL_API: process.env.URL_API,
  },
};

module.exports = nextConfig;
