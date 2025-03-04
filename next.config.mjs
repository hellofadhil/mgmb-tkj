/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/404',
        destination: '/custom-404', // Arahkan ke halaman 404 yang diinginkan
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.eventyup.com',
      },
      {
        protocol: 'https',
        hostname: 'k31kdl3eukazsfrf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'bazma.org',
      },
      {
        protocol: 'https',
        hostname: 'aksikebaikan.greatedunesia.net',
      },
      {
        protocol: 'https',
        hostname: 'w1.pngwing.com',
      },
    ],
  },
};

export default nextConfig;
