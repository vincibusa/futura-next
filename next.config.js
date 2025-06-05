/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'firebasestorage.googleapis.com'],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig; 