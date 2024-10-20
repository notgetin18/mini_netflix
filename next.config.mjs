/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://www.omdbapi.com/",
    // API_KEY: "fc1cc9bf",
    API_KEY: "e8e9e53f",
  },

  images: {
    domains: ["m.media-amazon.com"], 
  },
};

export default nextConfig;
