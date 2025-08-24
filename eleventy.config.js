import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    outputDir: "./_site/img/",
    urlPath: "/img/",
  });

  eleventyConfig.addCollection("shrines", (collectionAPI) => {
    return collectionAPI.getFilteredByGlob("shrines/*/index.html");
  });
}
