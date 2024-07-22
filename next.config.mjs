/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    
    // Rewrite rule for homepage
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/home-dark-animation',
        },
      ];
    },
  
    // Compression for faster page loads
    compress: true,
  
    // Optimizing fonts
    optimizeFonts: true,
  
    // Enable HTTP/2 server push
    experimental: {
      http2: true,
    },
  
    // Webpack configuration for performance
    webpack: (config, { dev, isServer }) => {
      // Optimize CSS
      if (!dev && !isServer) {
        config.optimization.splitChunks.cacheGroups.styles = {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true,
        };
      }
  
      return config;
    },
  
    // Headers to improve security and performance
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
  
    // Powered by header
    poweredByHeader: false,
  
    // Enable source maps in production for better error tracking
    productionBrowserSourceMaps: true,
  };
  
  module.exports = nextConfig;