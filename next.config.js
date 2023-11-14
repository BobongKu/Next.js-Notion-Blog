/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
    ]
  },
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
}

module.exports = nextConfig
