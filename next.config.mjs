/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'standalone',
  // Disable experimental CSS optimization for OpenNext Cloudflare builds.
  // The current OpenNext bundle step expects a .next/static/css directory that
  // Next 16 may no longer emit with this experimental feature enabled.
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
