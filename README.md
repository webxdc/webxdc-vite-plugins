# Vite Plugins for Webxdc

[![npm package](https://img.shields.io/npm/v/@webxdc/vite-plugins.svg)](https://npmjs.com/package/@webxdc/vite-plugins)
[![CI](https://github.com/webxdc/vite-plugins/actions/workflows/ci.yml/badge.svg)](https://github.com/webxdc/vite-plugins/actions/workflows/ci.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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

For a full example check the [example](https://github.com/webxdc/vite-plugins/tree/main/example) folder.

## Troubleshooting

if you get this error when using vite:

```
✘ [ERROR] Failed to resolve "@webxdc/vite-plugins". This package is ESM only but it was tried to load by `require`.
```

to fix it you need to set in your `package.json`:

```json
{
  ...
  "type": "module",
  ...
}
```
