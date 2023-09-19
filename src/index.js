const buildXDC = require("./build_xdc").buildXDC;
const eruda = require("./eruda").eruda;
const injectScript = require("./inject_script").injectScript;
const injectWebxdc = require("./inject_webxdc").injectWebxdc;
const legacy = require("./legacy").legacy;
const webxdcScores = require("./webxdc_scores").webxdcScores;

exports.buildXDC = buildXDC;
exports.eruda = eruda;
exports.injectScript = injectScript;
exports.injectWebxdc = injectWebxdc;
exports.legacy = legacy;
exports.webxdcScores = webxdcScores;

/**
 * Returns the recommended Vite config for a Webxdc app.
 *
 * @returns The recommended Vite config for a Webxdc app.
 */
exports.webxdcViteConfig = function (options = {}) {
  options = Object.assign(
    { plugins: [buildXDC(), eruda(), legacy(), injectWebxdc()] },
    options
  );
  return options;
};
