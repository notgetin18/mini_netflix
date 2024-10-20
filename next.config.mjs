/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://www.omdbapi.com/",
    // API_KEY: "fc1cc9bf",
    API_KEY: "e8e9e53f",
  },

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
