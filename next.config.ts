import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
