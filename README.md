# webxdc-vite-plugins

Collection of [Vite](https://vitejs.dev/) plugins and utilities for [webxdc](https://webxdc.org/).

Example project: <https://github.com/webxdc/webxdc-vite>

## Getting Started

Setup a new Vite project using this template: <https://github.com/webxdc/webxdc-vite>

Alternatively, for an existing vite project add `webxdc-vite-plugins`:

```bash
npm install --save-dev webxdc-vite-plugins
```

Then update your Vite configuration as needed. See below for example Vite configurations.

## Example configurations

Example `vite.config.js` files

### Use all recommendations

Use `webxdcViteConfig()` for a quick and easy default configuration.

```ts
// vite.config.ts

import { webxdcViteConfig } from "webxdc-vite-plugins";
import { defineConfig } from "vite";

export default defineConfig(webxdcViteConfig());
```

### Use plugins individually

Use the individual plugins for more control over the build.

```ts
// vite.config.ts

import {
  buildXDC,
  eruda,
  //  injectScript,
  mockWebxdc,
  //  legacy, // might cause problems in existing projects
  //  webxdcScores,
} from "webxdc-vite-plugins";
import { defineConfig } from "vite";

export default defineConfig({
  build: getDefaultViteBuildOptions(),
  plugins: [buildXDC(), eruda(), mockWebxdc()],
});
```
