import { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
