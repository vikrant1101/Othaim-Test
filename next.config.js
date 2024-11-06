/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`images.ctfassets.net`, `scontent-yyz1-1.cdninstagram.com`,`othaimcdn.azureedge.net`,'stothaimcdn001.blob.core.windows.net'],
  },
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
