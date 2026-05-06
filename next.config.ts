import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "molaholdings.com",
      },
    ],
  },
};

export default nextConfig;
