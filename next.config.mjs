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
  };
  
  export default nextConfig;