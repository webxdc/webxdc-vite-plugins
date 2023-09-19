const zipPack = require("vite-plugin-zip-pack").default;

// package your app as .xdc file on build
exports.buildXDC = function (opts = {}) {
  opts = Object.assign({ outDir: "dist-xdc", outFileName: "app.xdc" }, opts);
  return zipPack(opts);
};
