import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Menginstruksikan Next.js untuk melakukan “export” statis
  output: "export",
  // (Opsional) Matikan image optimization bawaan
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
