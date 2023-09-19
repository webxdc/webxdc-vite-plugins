const readFileSync = require("node:fs").readFileSync;

// inject webxdc-scores lib if a tag with src="webxdc-scores.js" is present in index.html
exports.webxdcScores = function() {
  const scriptSrc = readFileSync(require.resolve('webxdc-scores'), "utf-8");
  return {
    name: "vite-plugin-webxdc-scores",
    apply: "serve",
    transformIndexHtml(html) {
      return html.replace(/<script src="webxdc-scores.js"><\/script>/, `<script>${scriptSrc}</script>`);
    },
  };
}
