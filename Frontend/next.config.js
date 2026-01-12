/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static site for deployment
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Base path configuration (useful if deploying to subdomain/path)
  // basePath: '',
  
  // Strict mode for better development experience
  reactStrictMode: true,
  
  // Trailing slashes for consistent routing
  trailingSlash: true,
}

module.exports = nextConfig
