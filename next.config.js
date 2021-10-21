const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {});

// use this config for the setting up the react-router in next js application
// module.exports = withPlugins([], {
//   rewrites: async () => {
//       return [
//           // Rewrite everything else to use `pages/index` https://colinhacks.com/essays/building-a-spa-with-nextjs
//           {
//               source: "/:path*",
//               destination: "/",
//           },
//       ];
//   },
// });
