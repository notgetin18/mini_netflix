/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "localhost", pathname: "**" },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
