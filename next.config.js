/** @type {import('next').NextConfig} */

module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/", // Notice the slash at the end
        destination: "/ViaHome",
        permanent: false,
      },
    ];
  },
};

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
