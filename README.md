# nuxt-eslint-layer

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![code style][code-style-src]][code-style-href]

Preconfigured eslint for Nuxt 3

[🏀 Online playground](https://stackblitz.com/github/gabortorma/nuxt-eslint-layer?file=playground%2Fapp.vue)

## Install

```bash
pnpm add -D @gabortorma/nuxt-eslint-layer
```

## Usage

Add the dependency to `extends` section in your `nuxt.config`:

```ts
defineNuxtConfig({
  extends: [
    '@gabortorma/nuxt-eslint-layer'
  ]
})
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gabortorma/nuxt-eslint-layer/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@gabortorma/nuxt-eslint-layer
[npm-downloads-src]: https://img.shields.io/npm/dm/@gabortorma/nuxt-eslint-layer.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@gabortorma/nuxt-eslint-layer
[license-src]: https://img.shields.io/npm/l/@gabortorma/nuxt-eslint-layer.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@gabortorma/nuxt-eslint-layer
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/gabortorma/antfu-eslint-config
