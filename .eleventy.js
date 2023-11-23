var dateFilter = require('nunjucks-date-filter');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addFilter('date', dateFilter);
};
