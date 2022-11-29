/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['ptbr', 'en'],
    defaultLocale: 'ptbr',
    localeDetection: false
  },
}

module.exports = nextConfig
