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
  }
}

module.exports = nextConfig
