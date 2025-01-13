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
      ],
    },
  };
  
  export default nextConfig;
  