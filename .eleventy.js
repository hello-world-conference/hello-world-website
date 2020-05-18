const { DateTime } = require('luxon')
const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform(
      'htmlmin',
      require('./src/utils/minify-html.js')
    )
  }
  eleventyConfig.setTemplateFormats(['njk'])
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/.htaccess')
}
