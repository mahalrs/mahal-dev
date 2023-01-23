/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  distDir: 'build',
}

module.exports = nextConfig
