// vite configuration, just for testing!

import {
  buildXDC,
  eruda,
  mockWebxdc,
  legacy,
  injectScript,
  webxdcScores,
} from "./src/index";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [buildXDC(), eruda(), mockWebxdc("./emulator/webxdc.js"), legacy()],
});
