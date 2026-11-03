import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy multi-route site (pre-Nov 2026): map indexed URLs to the
      // single-page sections so external links and search results keep working.
      { source: "/en/services", destination: "/#services", permanent: true },
      { source: "/en/team", destination: "/#team", permanent: true },
      { source: "/en/physicians", destination: "/#physicians", permanent: true },
      { source: "/en/contact", destination: "/#contact", permanent: true },
      { source: "/en/about", destination: "/#why-tct", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/", permanent: true },
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
