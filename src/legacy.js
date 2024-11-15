import _legacy from "@vitejs/plugin-legacy";

// convert your code to be compatible with legacy browsers and adds polyfills
export function legacy(opts = {}) {
  opts = Object.assign(
    { targets: ["ChromeAndroid >=37", "iOS >=11"], renderModernChunks: false },
    opts,
  );
  return _legacy(opts);
}
