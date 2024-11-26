// example vite configuration

import {
  buildXDC,
  eruda,
  mockWebxdc,
  legacy,
  secureContext, // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts
} from "@webxdc/vite-plugins";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [buildXDC(), eruda(), mockWebxdc(), legacy(), secureContext()],
});
