import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A self-contained server (.next/standalone) for the Docker image that runs on AWS Lambda.
  // The deployment id comes from the NEXT_DEPLOYMENT_ID env var at build time (the git commit)
  output: "standalone",
  experimental: {
    // Behind CloudFront the server sees its own address, these are the real ones (form submits)
    serverActions: {
      allowedOrigins: ["amethystandashcoaching.com", "www.amethystandashcoaching.com"],
    },
    // Lambda's disk is read-only, so keep refreshed pages in memory instead of writing them
    isrFlushToDisk: false,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
