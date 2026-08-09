import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repoName.endsWith(".github.io");
const shouldUseBasePath = Boolean(process.env.GITHUB_ACTIONS) && repoName && !isUserSite;
const basePath = shouldUseBasePath ? `/` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
