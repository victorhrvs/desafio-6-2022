const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
})

module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
