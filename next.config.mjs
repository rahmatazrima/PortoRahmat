import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? "export" : undefined,
  basePath,
  images: {
    unoptimized: isGitHubPages,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
