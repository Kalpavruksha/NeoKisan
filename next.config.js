/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com'],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize bundle size
  swcMinify: true,
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig

