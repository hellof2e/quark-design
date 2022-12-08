<p align="center">
  <a href="https://quark-design.hellobike.com/">
    <img width="200" src="https://user-images.githubusercontent.com/14307551/197440754-08db4379-eb0f-4808-890d-690355e6e8d2.png">
  </a>
</p>

<h1 align="center">Quark Design</h1>

<div align="center">
  
  一套企业级跨框架 UI 设计语言，底层基于 Web Components
  
</div>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://www.npmjs.com/package/quarkd">
    <img src="https://img.shields.io/npm/v/quarkd.svg" alt="Published on NPM">
  </a>
  <a href="https://github.com/hellof2e/quark-design">
    <img src="https://img.shields.io/github/contributors/hellof2e/quark-design" alt="contributors">
  </a>
  <a href="https://github.com/hellof2e/quark-design">
    <img src="https://img.shields.io/github/issues-closed/hellof2e/quark-design" alt="issues">
  </a>
</p>

<p align="center">
  <a href="https://www.webcomponents.org/element/quarkd">
    <img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on webcomponents.org">
  </a>
  
  <a href="https://github.com/hellof2e/quark-design/actions/workflows/sync-docs.yml">
    <img src="https://github.com/hellof2e/quark-design/actions/workflows/deploy2io.yml/badge.svg?branch=main" alt="build status">
  </a>
</p>

## Contact us

~~Wechat(微信交流/沟通群)，欢迎提意见或建议，有机会获取周边礼品 🎁 ～, 若群已满请加右边小助手微信拉你入群~~

~~微信(1)群已满~~ 可扫码加入微信(2)群，或添加下面管理员拉你入群谢谢

<div style="display:flex;">
  <img src="https://m.hellobike.com/resource/helloyun/15697/N-Exc_qun.png?x-oss-process=image/quality,q_80" width='180'/>
  <img src="https://user-images.githubusercontent.com/14307551/198974064-8d02f3af-3cef-4f89-8744-bb860dd56121.png" width='188'/>
</div>



简体中文 | [English](./README.en-US.md)

## 🤔 动机

技术框架的出现，提升了开发体验和页面性能，但技术框架的不断迭代更新，为项目的维护带来诸多挑战，如：

- 视觉组件无法跨技术框架（React、Vue 等）使用
- 技术框架一旦升级，视觉组件常常必须配合迭代升级

因此，我们开发了这套 UI 框架，旨在让其与技术框架隔离（技术栈无关），让视觉组件避免落入技术栈迭代而迭代的怪圈。

## ✨ 特性

- 支持 Vue、React、Angular 等各类框架/无框架。
- 完全覆盖您所需要的各种通用组件。
- 支持按需引用。
- 详尽的文档和示例。
- 单元测试覆盖。
- 支持 TypeScript。
- 支持定制主题。
- 国际化语言支持。
- 支持服务端渲染（Beta）。

| framework      | CDN     | 打包/构建工具  | TypeScript | 开源时间 | 支持技术栈/框架                    |
| -------------- | ------- | -------------- | ---------- | -------- | ---------------------------------- |
| Quark          | 80.1kb  | Rollup         | √          | 2022     | Vue/React/Angular/JQ/Svelte/无框架 |
| Vant           | 183kb   | Vite(Vant-cli) | √          | 2017     | Vue                                |
| Nutui          | 275.5kb | Vite           | √          | 2018     | Vue                                |
| TDesign Mobile | -       | Gulp           | √          | 2021     | React                              |
| Antd Mobile    | -       | Gulp           | √          | 2016     | React                              |

*上面CDN体积对比包含各类组件库能正常运行展示所需的运行时、js、css*

## 🔗 CDN 使用

使用 quark 最简单的方式是直接在 HTML 文件中引入 CDN 链接，之后你可以全局中任意使用，由于 quark 做到了 CSS-IN-JS，因此您只需加载下面链接即可。

```
<!-- 引入CDN文件，只有 80kb -->
<script src="https://fastly.jsdelivr.net/npm/quarkd@latest/umd/index.js"></script>
```

## 📦 通过 npm 安装

```bash
# Vue / React / Preact / Angular / JQ / 其他技术栈或无框架项目
npm i quarkd --save
```

**React 使用须知**：由于 `quarkd` 提供的组件均为原生自定义元素（类比 div），因此组件内派发（dispatch）的事件需要使用 `addEventLisener` 接收，比如 `dialog` 组件内部的自定义关闭事件 `close`。而 Vue 技术栈则可以直接使用 `@xx` 即可接收原生派发的事件，因此不需要使用 `addEventLisener` 接收。

为了提升开发体验，我们对 `quarkd` 进行了 Reactify(React 化)！所以，我们建议您在 React/Preact 项目中使用 `@quarkd/quark-react`！

```bash
# React 推荐使用
npm i @quarkd/quark-react --save
```

## 🔨 示例

Vue.x

```jsx
import "quarkd/lib/button";

<quark-button type="primary">Button</quark-button>;
```

React.x

```jsx
import { Button } from "@quarkd/quark-react";

const App = () => (
  <>
    <Button type="primary">Button</Button>
  </>
);
```

Angular

```jsx
import { Component } from '@angular/core
import "quarkd/lib/button"

@Component({
  template: `<quark-button loading="{{loading}}"" (click)="handleClick()">
    Button
  </quark-button>`
})
```

其它 H5 项目

```html
<!DOCTYPE html>
<html lang="en">
  <!-- 1. CDN, import all components -->
  <script src="https://fastly.jsdelivr.net/npm/quarkd@latest/umd/index.js"></script>
  <body>
  
    <!-- 2. use it -->
    <quark-button loading="true">Button</quark-button>
  
  </body>
</html>
```

## 🎨 定制主题

参考 [定制主题](https://quark-design.hellobike.com/#/zh-CN/guide/theme) 文档。

## 🌍 国际化

参考 [国际化文档](https://quark-design.hellobike.com/#/zh-CN/guide/internationalization)。

## 🖥 兼容环境

现代浏览器和 IE11（需要 [polyfills](https://www.webcomponents.org/polyfills)）

## 特别说明

- 由于 `quarkd` 提供的组件均为原生自定义元素（类比 div），因此组件派发的事件需要使用 addEventLisener 接收。
- Vue 技术栈使用 `@xx` 即可接收原生派发的事件，因此不需要使用 addEventLisener 接收。
- 针对 React 技术栈，为了避免开发者手动 addEventLisener 接收事件，我们底层依托 `quarkd` ，上层进行了 Reactify(React 化)！因此 React 项目推荐使用 `@quarkd/quark-react`。

## 注意

- Vue 工程中使用组件可能会出现告警：

```html
<!-- vue2: -->
Unknown custom element:
<quark-icon>
  - did you register the component correctly? For recursive components, make
  sure to provide the "name" option.
  <!-- vue3 -->
  [Vue warn]: Failed to resolve component: quark-icon
</quark-icon>
```

这是由于 Vue 组件的语法部分参考了自定义元素，为了避免与 Vue 组件产生冲突，需要将自定义元素忽略！请在工程中注入如下代码即可：

```tsx
// VUE2.x
Vue.config.ignoredElements = [/^quark-/];

// VUE3.x
// https://v3.cn.vuejs.org/guide/migration/global-api.html#config-productiontip-%E7%A7%BB%E9%99%A4
const app = createApp({});
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("quark-");
```

如果您使用的是 vite，修改 vite.config.js:

```tsx
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("quark-"),
        },
      },
    }),
  ],
};
```

## 👋 Contributor 贡献代码 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

参考 [本地开发文档](./CONTRIBUTING.zh-CN.md)
