import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Required to support dynamic server-side features (DB, Auth)
  output: "standalone",
};

export default nextConfig;
