module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");   
  eleventyConfig.addPassthroughCopy("media");   
  eleventyConfig.addPassthroughCopy("main");
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./projects/*.md");
  });
  return {
    dir: {
      output: "build"
    }
  };
};