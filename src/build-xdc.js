import zipPack from "vite-plugin-zip-pack";

function defaultFilter(fileName, filePath, isDirectory) {
  return !fileName.endsWith("~");
}

// package your app as .xdc file on build
export function buildXDC(opts = {}) {
  opts = Object.assign(
    { outDir: "dist-xdc", outFileName: "app.xdc", filter: defaultFilter },
    opts,
  );
  return zipPack(opts);
}
