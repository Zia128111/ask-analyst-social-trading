/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avatars and marks are local files in /public, sized in CSS — the loader
  // would add nothing here.
  images: { unoptimized: true }
};
export default nextConfig;
