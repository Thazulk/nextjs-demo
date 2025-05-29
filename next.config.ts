import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "www.google.com" },
      { hostname: "www.facebook.com" },
      { hostname: "www.twitter.com" },
      { hostname: "www.instagram.com" },
      { hostname: "www.linkedin.com" },
      { hostname: "www.youtube.com" },
      { hostname: "www.github.com" },
      { hostname: "scontent.fbud3-1.fna.fbcdn.net" },
    ],
  },
};

export default nextConfig;
