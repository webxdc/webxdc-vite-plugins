const buildXDC = require("./build_xdc").buildXDC;
const eruda = require("./eruda").eruda;
const mockWebxdc = require("./mock_webxdc").mockWebxdc;
const legacy = require("./legacy").legacy;

exports.buildXDC = buildXDC;
exports.eruda = eruda;
exports.mockWebxdc = mockWebxdc;
exports.legacy = legacy;

/**
 * The recommended Vite config for a Webxdc app.
 *
 * @returns The recommended Vite config for a Webxdc app.
 */
exports.webxdcViteConfig = function (options = {}) {
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
exports.webxdcViteConfigNoLegacy = function (options = {}) {
  options = Object.assign(
    { plugins: [buildXDC(), eruda(), mockWebxdc()] },
    options,
  );
  return options;
};
