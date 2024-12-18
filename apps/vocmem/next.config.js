// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// const SUB_DIRECTORY = "/service/vocmem";
// const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  }
};

module.exports = withNx(nextConfig);
/*
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    fallbacks: {
      document: '/service/vocmem/_offline.html'
    }
  },
  buildExcludes: [/.*\.js\.map/],
  assetPrefix: isProd ? SUB_DIRECTORY : "", // 適宜修正
  basePath:    isProd ? SUB_DIRECTORY : ""  // 適宜修正
});
*/
