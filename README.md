<p align="center">
  <a href="https://quark-ecosystem.github.io/quarkd-docs">
    <img src="https://github.com/hellof2e/quark-design/assets/14307551/45ca3969-3f92-49a1-84fa-a4e6160cb7f4" />
  </a>
</p>

<h2 align="center">Quark Design</h2>

<div align="center">

Next-gen frontend component library, it can be used in any framework or no framework.

</div>

哈啰集团面向 C 端 UI 组件库，支撑哈啰几乎所有 C 端 H5 项目，包括交易，支付，两轮，商城等。这是一个设计轻盈优雅的企业级 UI 组件库，可以满足日常所需所有基础组件，且支持跨技术栈运行。

<p align="center">
  <a href="https://www.npmjs.com/package/quarkd"><img src="https://img.shields.io/npm/dt/quarkd.svg" alt="Total Downloads"></a>
  <a href="https://www.npmjs.com/package/quarkd">
    <img src="https://img.shields.io/npm/v/quarkd.svg" alt="Published on NPM">
  </a>
  <a href="https://github.com/hellof2e/quark-design">
    <img src="https://img.shields.io/github/contributors/hellof2e/quark-design" alt="contributors">
  </a>
  <a href="https://github.com/hellof2e/quark-design/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/quark-design.svg" alt="License"></a>
</p>

<p align="center">
  <span>English | </span>
  <a href="https://github.com/hellof2e/quark-design/blob/main/README.zh-CN.md">
  简体中文
  </a>
</p>

---

## Features

🚀 Cross framework: Any front-end framework can be used.

❤️ Lightweight: Crafted with minimalistic Code design.

⚡️ Fast: Native HTML/CSS/JS build. 


## Documentation

For full documentation, visit [https://quark-ecosystem.github.io/quarkd-docs](https://quark-ecosystem.github.io/quarkd-docs).

## Install

```bash
npm install quarkd
```

## Usage example

```jsx
import "quarkd/lib/button";

// like a normal div tag `<div>xx</div>`, can be used in any browser.
<quark-button type="primary" onclick="onClick">
  Button
</quark-button>;
```

```html
// react
<quark-button type="primary" onClick="onClick">Button</quark-button>

// vue
<quark-button type="primary" @click="onClick">Button</quark-button>

// svelte
<quark-button type="primary" on:click="{onClick}">Button</quark-button>

// angular
<quark-button type="primary" (click)="onClick">Button</quark-button>
```

## Vs Code plugin

[Visual Studio | Marketplace](https://marketplace.visualstudio.com/items?itemName=quarkd.quarkd-vscode-extension)

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discuss Quark design on Github](https://github.com/hellof2e/quark-design/discussions)

## Contributing

If you're interested in contributing to quark design, please read our [contributing docs](https://github.com/hellof2e/quark-design/blob/main/CONTRIBUTING.md) **before submitting a pull request**.
