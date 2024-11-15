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
  options = Object.assign(
    { plugins: [buildXDC(), eruda(), legacy(), mockWebxdc()] },
    options,
  );
  return options;
};

/**
 * The recommended Vite config for a Webxdc app without legacy browser support.
 *
 * @returns Vite config for a Webxdc app.
 */
export const webxdcViteConfigNoLegacy = function (options = {}) {
  options = Object.assign(
    { plugins: [buildXDC(), eruda(), mockWebxdc()] },
    options,
  );
  return options;
};

export { buildXDC, eruda, mockWebxdc, legacy };
