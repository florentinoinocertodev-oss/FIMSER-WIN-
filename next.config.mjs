/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "100.71.144.21",
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
