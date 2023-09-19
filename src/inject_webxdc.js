import { readFileSync } from "node:fs";

// inject a webxdc.js emulator in development mode to fake webxdc API in your browser
export default function webxdcJS(path = "./node_modules/webxdc-vite-plugins/emulator/webxdc.js") {
  const scriptSrc = readFileSync(path, "utf-8");
  return {
    name: "vite-plugin-webxdc-js",
    apply: "serve",
    transformIndexHtml(html) {
      return html.replace(/<script src="webxdc.js"><\/script>/, `<script>${scriptSrc}</script>`);
    },
  };
}
