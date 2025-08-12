// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // output: 'export',
//   images: {
//     unoptimized: true
//   },
// };

// module.exports = nextConfig;


import type { NextConfig } from "next";

// Bundle analyzer for debugging large files
const withBundleAnalyzer = process.env.ANALYZE === 'true' ? 
  require('@next/bundle-analyzer')({
    enabled: true,
  }) : (config: NextConfig) => config;

const nextConfig: NextConfig = {
  // Removed output: 'export' as it's incompatible with middleware
  // For Cloudflare deployment with middleware, we need server-side functionality
  
  // Temporarily disable TypeScript checking for build analysis
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enable compression
  compress: true,
  
  // Optimize for production builds
  ...(process.env.NODE_ENV === 'production' && {
    experimental: {
      // Enable CSS optimization - disabled temporarily due to critters error
      // optimizeCss: true,
    },
  }),
  
  // Webpack optimization for smaller bundles
  webpack: (config, { dev, isServer }) => {
    // Optimize for production builds only
    if (!dev && !isServer) {
      // Configure chunk splitting for Cloudflare's 25MB limit
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxSize: 20 * 1024 * 1024, // 20MB max chunk size
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              maxSize: 15 * 1024 * 1024, // 15MB for vendor chunks
            },
            // Split large components
            components: {
              test: /[\\/]src[\\/]components[\\/]/,
              name: 'components',
              chunks: 'all',
              maxSize: 5 * 1024 * 1024, // 5MB for components
            },
          },
        },
      };
      
      // Optimize imports and reduce bundle size
      config.resolve.alias = {
        ...config.resolve.alias,
        // Tree shake lodash if used
        'lodash': 'lodash-es',
      };
    }
    
    return config;
  },
  
  images: {
    unoptimized: true
  },
  
  // Configure for static assets and better performance
  trailingSlash: false,
  
  // Optional: Configure headers for API routes
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
        ],
      },
      // Cache static assets more aggressively
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
