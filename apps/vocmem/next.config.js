// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  }
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
  reactStrictMode: true
});
