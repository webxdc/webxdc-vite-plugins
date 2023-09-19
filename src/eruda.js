import { readFileSync } from "node:fs";

// inject eruda dev tools in your app for debugging in end devices if NODE_ENV=debug is set
export default function eruda(debug = undefined) {
  const erudaSrc = readFileSync("./node_modules/eruda/eruda.js", "utf-8");
  return {
    name: "vite-plugin-eruda",
    apply: "build",
    transformIndexHtml(html) {
      const tags = [
        {
          tag: "script",
          children: erudaSrc,
          injectTo: "head",
        },
        {
          tag: "script",
          children: "eruda.init();",
          injectTo: "head",
        },
      ];
      if (debug === true) {
        return {
          html,
          tags,
        };
      } else if (debug === false) {
        return html;
      }
      // @ts-ignore
      if (process.env.NODE_ENV !== "production") {
        return {
          html,
          tags,
        };
      } else {
        return html;
      }
    },
  };
}
