<p align="center">
  <a href="https://quark-design.hellobike.com/">
    <img width="200" src="https://user-images.githubusercontent.com/14307551/197440754-08db4379-eb0f-4808-890d-690355e6e8d2.png">
  </a>
</p>


<h1 align="center">Quark Design</h1>

<div align="center">
  
  An enterprise-class UI design language and cross-framework UI library, Based on web components.
  
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

~~Wechat(微信交流/沟通群)，欢迎提意见或建议，有机会获取周边礼品🎁～, 若群已满请加右侧微信拉你入群~~

微信群已满员，请添加下面管理员拉你入群谢谢～

<div style="display:flex;">
  <img src="https://m.hellobike.com/resource/helloyun/15697/N-Exc_qun.png?x-oss-process=image/quality,q_80" width='180' style="margin-right: 50px;"/>
  <img src="https://user-images.githubusercontent.com/14307551/198974064-8d02f3af-3cef-4f89-8744-bb860dd56121.png" width='188'/>
</div>

English | [简体中文](./README.zh-CN.md)

## 🤔 Motivation
The emergence of the technical framework has improved the development experience and page performance, but the continuous iterative update of the technical framework has brought many challenges to the maintenance of the project, such as:

- Visual components cannot be used across technical frameworks (React, Vue, etc.)
- Once the technical framework is upgraded, visual components often have to be upgraded iteratively

Therefore, we developed this UI framework to isolate it from the technology framework (no technology stack), so that visual components can avoid falling into the vicious circle of technology stack iteration and iteration.

## ✨ Features

- Support Vue, React, Angular, JQ and no framework project
- 40+ High quality components
- Support Tree Shaking
- 90%+ Unit test coverage
- Written in TypeScript
- Support TypeScript
- Support Custom Theme
- Support i18n, built-in 20+ languages

| Component Library  | CDN | Import on demand | Build tools | Typescript | open source time | Support technology stack/framework |
| --------- | ---------- | --------- | --------- | ----------------------- | ----------- | ----------- |
| Quark      | 80.1kb    | √ | Rollup         | √ | 2022 | Vue/React/Angular/JQ/Svelte/no framework |
| Vant       | 183kb     | √ | Vite(Vant-cli) | √ | 2017 | Vue only    |
| Nutui      | 275.5kb   | √ | Vite           | √ | 2018 | Vue only    |
| TDesign Mobile | -     | √ | Gulp           | √ | 2021 | React only  |
| Antd Mobile | -        | √ | Gulp           | √ | 2016 | React only  |

## 🔗 CDN
The easiest way to use quark is to directly introduce the CDN link in the HTML file, and then you can use it anywhere in the world. Since quark has achieved CSS-IN-JS, you only need to load the link below.

```
<!-- Introduce CDN files, only 80kb -->
<script src="https://fastly.jsdelivr.net/npm/quarkd@1.0.11/umd/index.js"></script>
```

## 📦 Install
Using `npm` to install:

```bash
# install for Vue/React/Angular/No framework project
npm i quarkd
```

**React usage notes**: Since the components provided by `quarkd` are all native custom elements (analogous to div), events dispatched in the component need to be received by `addEventLisener`, such as the custom close event close inside the `dialog` component. The `Vue` technology stack can directly use `@xx` to receive natively dispatched events, so there is no need to use `addEventLisener` to receive.

In order to improve the development experience, we have Reactify (Reactify) for `quarkd`! So, we recommend that you use `@quarkd/quark-react` in your React/Preact projects!

```bash
# Recommended Use for React
npm i @quarkd/quark-react --save
```

## 🔨 Quickstart
Vue.x
```jsx
// 1. Import the components you need
import "quarkd/lib/button"

// 2. Use it
<quark-button type="primary">Button</quark-button>
```

React.x
```jsx
// 1. Import the components you need
import { Button } from '@quarkd/quark-react';

// 2. Use it
const App = () => (
  <>
    <Button type="primary">Button</Button>
  </>
);
```

Angular
```jsx
// 1. Import the components you need
import "quarkd/lib/button"

// 2. Use it
@Component({
  template: `<quark-button loading="{{loading}}"" (click)="handleClick()">
    Button
  </quark-button>`
})
```

No framework project

```html
<!DOCTYPE html>
<html lang="en">
<!-- cdn -->
<script src="https://fastly.jsdelivr.net/npm/quarkd@1.0.11/umd/index.js"></script>
<body>
  
  <quark-button loading="false" id="btn">Button</quark-button>

</body>
<script>
  window.addEventListener(function() {
    const el = document.getElementById('btn')
    el.loading = true
    setTimeout(() => { el.loading = true }, 2000);
  })
</script>
</html>
```

## 🎨 Custom theme

See [custom theme](https://quark-design.hellobike.com/#/en-US/guide/theme).

## 🌍 Internationalization

Dozens of languages supported in, see [Docs](https://quark-design.hellobike.com/#/en-US/guide/internationalization).

## 🖥 Browser Support

Modern browsers and Internet Explorer 11 (with [polyfills](https://www.webcomponents.org/polyfills)).


## Special Note

- Since the components provided by `quarkd` are all native custom elements (analogous to div), the events dispatched by the components need to be received using addEventListener.
- The Vue stack uses `@xx` to receive natively dispatched events, so there is no need to use addEventListener to receive them.
- For the React technology stack, in order to avoid developers manually addingEventLisener to receive events, we rely on `quarkd` at the bottom and Reactify (Reactize) the upper layer! Therefore the React project recommends using `@quarkd/quark-react`.


## Pay attention

- Unknown custom element in Vue project:

```html
<!-- vue2: -->
Unknown custom element: <quark-icon> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
<!-- vue3 -->
[Vue warn]: Failed to resolve component: quark-icon 
```

This is because the syntax part of Vue components refers to custom elements. In order to avoid conflicts with Vue components, custom elements need to be ignored! Please inject the following code into the project:

```tsx
// VUE2.x
Vue.config.ignoredElements = [/^quark-/]

// VUE3.x
// https://v3.cn.vuejs.org/guide/migration/global-api.html#config-productiontip-%E7%A7%BB%E9%99%A4
const app = createApp({})
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('quark-')
```

If you are using vite, modify vite.config.js:

```tsx
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('quark-')
        }
      }
    })
  ]
}
```

## 👋 Contributions [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Contributions are welcome! See [Contributor's Guide](./CONTRIBUTING.md) before making a pull request. 

