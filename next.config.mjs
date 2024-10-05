/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home-dark-animation',
      },
    ];
  },
  env: {
    MEDIUM_ACCESS_TOKEN: process.env.MEDIUM_ACCESS_TOKEN,
  },
  transpilePackages: ['@n8n/chat'],
};

export default nextConfig;