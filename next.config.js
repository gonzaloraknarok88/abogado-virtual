/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: false,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
