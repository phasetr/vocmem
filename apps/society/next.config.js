//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// const SUB_DIRECTORY = "/service/society";
// const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
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
/*
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    fallbacks: {
      document: `${SUB_DIRECTORY}/_offline.html`
    }
  },
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  basePath:    isProd ? SUB_DIRECTORY : ""
});
*/
