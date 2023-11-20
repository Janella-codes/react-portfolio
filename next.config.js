/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'unsplash.com',
        },
        {
            protocol: "https",
            hostname: "pixabay.com",
          },
        {
            protocol: "http",
            hostname: "localhost",
          },
      ],
    },
    experimental: {
      serverActions: true,
  }
};

  module.exports = nextConfig