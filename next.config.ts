import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "htglobal.jp",
      },
    ],
  },
};

export default nextConfig;
