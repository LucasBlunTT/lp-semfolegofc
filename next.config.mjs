/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.instagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
        {
        protocol: 'https',
        hostname: 'media-gru1-1.cdn.whatsapp.net',
      },
      {
        protocol: 'https',
        hostname: 'instagram.ffln2-3.fna.fbcdn.net',
      },
    ],
  },
}

export default nextConfig
