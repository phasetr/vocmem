// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  reactStrictMode: true,
  trailingSlash: true
};

module.exports = withNx(nextConfig);
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching
  },
  assetPrefix: "/service/phys-gallery",
  basePath: "/service/phys-gallery"
});
