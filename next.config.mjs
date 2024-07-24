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
};

export default nextConfig;