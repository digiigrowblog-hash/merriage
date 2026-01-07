/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
  // Disable static optimization for pages that use searchParams
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

export default nextConfig;
