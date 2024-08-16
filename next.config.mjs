/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    /**
     * ppr is causing vercel build to fail, so
     * commenting it for now 
     */
    //ppr: 'incremental',
  }
};

export default nextConfig;
