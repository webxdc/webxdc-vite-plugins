# Vite Plugins for Webxdc

Collection of [Vite](https://vitejs.dev/) plugins and utilities for [webxdc](https://webxdc.org/).

## Features

- 📱 Integrated `webxdc.js` mini-emulator to test your WebXDC right on the browser while developing.
- 🐞 Integrated [Eruda](https://github.com/liriliri/eruda) support to debug inside Delta Chat when building with `NODE_ENV=debug`.

- 📦 Automatically generate your `.xdc` file.

- 🦕 Support legacy/old browsers.

## Getting Started

Add `@webxdc/vite-plugins` library as development dependency:

```bash
npm install --save-dev "@webxdc/vite-plugins"
```

Then update your Vite configuration as needed. See below for example Vite configurations.

## Example configurations

Example `vite.config.js` files

### Use recommended configuration

Use `webxdcViteConfig()` for a quick and easy default configuration.

```ts
// vite.config.ts

import { webxdcViteConfig } from "@webxdc/vite-plugins";
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
  mockWebxdc,
  //  legacy, // might cause problems in existing projects
} from "@webxdc/vite-plugins";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [buildXDC(), eruda(), mockWebxdc()],
});
```

For a full example check the [example](https://github.com/webxdc/vite-plugins/tree/master/example) folder.
