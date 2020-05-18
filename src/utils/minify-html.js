const htmlmin = require('html-minifier-terser')

module.exports = function (content, outputPath) {
  if (outputPath.endsWith('.html')) {
    const minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    })
    return minified
  }
  return content
}
