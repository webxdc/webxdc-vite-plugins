const readFileSync = require("node:fs").readFileSync;

// inject a webxdc.js emulator in development mode to fake webxdc API in your browser
exports.injectWebxdc = function(path = "./node_modules/webxdc-vite-plugins/emulator/webxdc.js") {
  const scriptSrc = readFileSync(path, "utf-8");
  return {
    name: "vite-plugin-webxdc-js",
    apply: "serve",
    transformIndexHtml(html) {
      return html.replace(/<script src="webxdc.js"><\/script>/, `<script>${scriptSrc}</script>`);
    },
  };
}
