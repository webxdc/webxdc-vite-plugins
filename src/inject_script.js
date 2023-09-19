import { readFileSync } from "node:fs";

// given a path to script file, inject it in the index.html.
// apply can be "serve" or "build" if you want to only inject in build or development stage
export default function injectScript(path, apply = null) {
    const scriptSrc = readFileSync(path, "utf-8");
    const plugin = {
        name: "vite-plugin-inject-script",
        transformIndexHtml(html) {
            const tags = [
                {
                    tag: "script",
                    children: scriptSrc,
                    injectTo: "head",
                }
            ];
            return {
                html,
                tags,
            };
        },
    };
    if (apply) {
        plugin["apply"]= apply;
    }
    return plugin;
}
