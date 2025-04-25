/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Add other Next.js config options here
});

export default nextConfig;