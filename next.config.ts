import type { NextConfig } from 'next';
import unpluginIcons from 'unplugin-icons/webpack';

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'development' ? '' : '/personal-site',
  assetPrefix: process.env.NODE_ENV === 'development' ? '/' : '/personal-site/',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.plugins.push(
      unpluginIcons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    );

    return config;
  },
  /* config options here */
};

export default nextConfig;
