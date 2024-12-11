import secureContext from "@vitejs/plugin-basic-ssl";
import { buildXDC } from "./build-xdc.js";
import { eruda } from "./eruda.js";
import { mockWebxdc } from "./mock-webxdc.js";
import { legacy } from "./legacy.js";

/**
 * The recommended Vite config for a Webxdc app.
 *
 * @returns The recommended Vite config for a Webxdc app.
 */
export const webxdcViteConfig = function (options = {}) {
  if (!options.plugins) {
    options.plugins = [];
  }
  options.plugins.push(
    buildXDC(),
    eruda(),
    legacy(),
    mockWebxdc(),
    secureContext(),
  );
  return options;
};

/**
 * The recommended Vite config for a Webxdc app without legacy browser support.
 *
 * @returns Vite config for a Webxdc app.
 */
export const webxdcViteConfigNoLegacy = function (options = {}) {
  if (!options.plugins) {
    options.plugins = [];
  }
  options.plugins.push(buildXDC(), eruda(), mockWebxdc(), secureContext());
  return options;
};

export { buildXDC, eruda, mockWebxdc, legacy, secureContext };
