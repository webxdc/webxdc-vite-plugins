import { readFileSync } from "node:fs";

// inject webxdc-scores lib if a tag with src="webxdc-scores.js" is present in index.html
export default function webxdcScores() {
  const scriptSrc = readFileSync("./node_modules/webxdc-scores/dist/webxdc-scores.umd.js", "utf-8");
  return {
    name: "vite-plugin-webxdc-scores",
    apply: "serve",
    transformIndexHtml(html) {
      return html.replace(/<script src="webxdc-scores.js"><\/script>/, `<script>${scriptSrc}</script>`);
    },
  };
}
