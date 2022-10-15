/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },

  images: {},

  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true
    }
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Transactions',
        permanent: false
      }
    ]
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(nextConfig)
