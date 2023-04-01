const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


// filters
const htmlDateString = require("./src/_11ty/filters/date.js").htmlDateString;
const head = require("./src/_11ty/filters/head.js");

// collections
const post = require("./src/_11ty/collections/post.js");
const postDescending = require("./src/_11ty/collections/postDescending.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("head", head);

  eleventyConfig.addCollection("post", post);
  eleventyConfig.addCollection("postDescending", postDescending);

  eleventyConfig.setDataDeepMerge(true);

  // 	--------------------- Passthrough File Copy -----------------------
  // especially for favion, maybe for a robots.txt and a .htaccess
  eleventyConfig.addPassthroughCopy({"./src/static/":"/"});

  eleventyConfig.addPassthroughCopy({"./src/assets/img": "assets/img"});
  eleventyConfig.addPassthroughCopy({"./src/assets/js": "assets/js"});
  // eleventyConfig.addPassthroughCopy({"./src/assets/fonts": "assets/fonts"});

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });

  eleventyConfig.setServerOptions({
    showAllHosts: true,
    showVersion: true
  });

  return {
    templateFormats: [
      "html",
      "md",
      "njk",
      "liquid"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
