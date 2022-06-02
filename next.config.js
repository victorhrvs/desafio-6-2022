const withImages = require('next-images');

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
});


module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}