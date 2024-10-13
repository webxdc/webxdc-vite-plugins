// example vite configuration

import {
  buildXDC,
  eruda,
  mockWebxdc,
  legacy,
  injectScript,
  webxdcScores,
} from "webxdc-vite-plugins";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [buildXDC(), eruda(), mockWebxdc(), legacy()],
});
