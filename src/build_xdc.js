const zipPack = require("vite-plugin-zip-pack").default;

function defaultFilter(fileName, filePath, isDirectory) {
  return !fileName.endsWith("~");
}

// package your app as .xdc file on build
exports.buildXDC = function (opts = {}) {
  opts = Object.assign({ outDir: "dist-xdc", outFileName: "app.xdc", filter: defaultFilter }, opts);
  return zipPack(opts);
};
