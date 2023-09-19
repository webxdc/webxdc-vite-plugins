// vite configuration, just for testing!

import {
  buildXDC,
  eruda,
  injectWebxdc,
  legacy,
  injectScript,
  webxdcScores,
} from "./src/index";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    buildXDC(),
    eruda(),
    injectWebxdc("./emulator/webxdc.js"),
    legacy(),
  ],
});
