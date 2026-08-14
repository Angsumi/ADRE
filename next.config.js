/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/ADRE',
  assetPrefix: '/ADRE/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


