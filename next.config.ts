// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "export",
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This indicates you want to do static exports
  output: 'standalone',
  
  // Required for GitHub Pages deployment
  basePath: '/software-engineering-experience2024',
  
  // Required when deploying to GitHub Pages
  images: {
    unoptimized: true,
  },
  
  // Required for GitHub Pages deployment
  assetPrefix: '/software-engineering-experience2024/',
  
  // Disable server components for static export
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig

