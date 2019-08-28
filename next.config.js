const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  distDir: "build",
  buildId: "js",
  generateBuildId: async () => {
    return "js";
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
};

module.exports = withPlugins([withFonts, withImages, withCSS], nextConfig);
