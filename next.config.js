/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true,
  poweredByHeader: false,
}

const withMDX = require('@next/mdx')()

module.exports = withMDX(nextConfig)
