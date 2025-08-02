import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/personal-site',
  assetPrefix: '/personal-site/public/',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
