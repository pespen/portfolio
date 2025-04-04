import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  // Enable importing JSON files
  webpack(config) {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });
    return config;
  },
};

export default nextConfig;
