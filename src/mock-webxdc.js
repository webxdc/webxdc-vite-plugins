import { readFileSync } from "node:fs";

// serve a mock webxdc.js file in development mode to fake webxdc API while developing in the browser
export function mockWebxdc(
  path = "./node_modules/@webxdc/vite-plugins/src/webxdc.js",
) {
  const scriptSrc = readFileSync(path, "utf-8");
  return {
    name: "vite-plugin-mock-webxdc",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/webxdc.js") {
          res.end(scriptSrc);
        } else {
          next();
        }
      });
    },
  };
}
