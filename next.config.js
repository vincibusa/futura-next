/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'images.unsplash.com', 
      'plus.unsplash.com', 
      'firebasestorage.googleapis.com', 
      'www.donnafugata.it', 
      'us.store.sanpellegrino.com',
      'winearound.imgix.net',
      'www.ricocrem.it',
      'www.goutristorazione.it',
      'www.kepalle.it',
      'www.igppachino.it',
      'upload.wikimedia.org',
      'siciliadoc.wine',
      'www.winerytastingsicily.com',
      'palermomediterranea.it',
      'www.millesuoli.it',
      'www.tenutenicosia.it',
      'taobuk-it.cdn-immedia.net',
      'wallinone.tv',
      'encrypted-tbn0.gstatic.com',
      'www.menu.it',
      'www.consorziodos.it',
      'interactiveanddesign.com',
      'www.lebontadivilladafne.it',
      'bigageniofarina.it',
      'www.magatama.it',
      'www.ammodopizzeria.it',
      'www.fiasconaro.com',
      'www.stradadelvinodelletna.it',
      'www.ilpost.it',
      'cdn.formazionecommercialisti.org',
      'cdn.prod.website-files.com',
      'emporiosicilia.it',
      'www.territorioeturismo.it',
      'loghi-famosi.com',
      'www.feedback.it'
    ],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  reactStrictMode: true,
  experimental: {
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.splitChunks.cacheGroups = {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
        },
      };
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
        ],
      },
      {
        source: '/images/(.*)',
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

module.exports = nextConfig; 