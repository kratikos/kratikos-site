/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kratikos.com.br',
          },
        ],
        destination: 'https://kratikos.com.br/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
