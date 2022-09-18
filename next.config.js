/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  assetPrefix: '/',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
