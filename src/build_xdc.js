import zipPack from "vite-plugin-zip-pack";

// package your app as .xdc file on build
export default function buildXDC(opts = {}) {
  opts = Object.assign({ outDir: "dist-xdc", outFileName: "app.xdc" }, opts);
  return zipPack(opts);
}
