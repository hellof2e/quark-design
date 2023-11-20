<p align="center">
  <a href="https://quarkc.hellobike.com/">
    <img width="120" src="https://user-images.githubusercontent.com/14307551/197440754-08db4379-eb0f-4808-890d-690355e6e8d2.png">
  </a>
</p>

<h1 align="center">Quark Design</h1>

<div align="center">

下一代前端组件库，它可以在任意框架或无框架中使用。

</div>

哈啰集团面向 C 端 UI 组件库，支撑哈啰几乎所有 C 端 H5 项目，包括交易，支付，两轮，商城等。这是一个设计轻盈优雅的企业级 UI 组件库，可以满足所有日常使用的基础组件需求。

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
  <a href="https://github.com/hellof2e/quark-design/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/quark-design.svg" alt="License">
  </a>
</p>

<p align="center">
  <a href="https://github.com/hellof2e/quark-design/blob/main/README.md">
  English |
  </a>
  <span>简体中文</span>
</p>

---

## 文档（组件库源码只有一份！技术栈不同，给出如下文档示例）

> 组件库源码只有一份！技术栈不同，给出如下文档说明

更多介绍，请访问。

- [Vue Doc](https://vue-quarkd.hellobike.com)
- [React Doc](https://react-quarkd.hellobike.com)
- [Vanilla Javascript Doc(work in progress...)](https://vanilla-quarkd.hellobike.com)
- [Angular Doc(work in progress...)](https://angular-quarkd.hellobike.com)
- [Svelte Doc(work in progress...)](https://svelte-quarkd.hellobike.com)

## 使用示例
```js
import "quarkd/lib/button"

// 就像一个普通的 div 标签 `<div>xx</div>`, 可以在任何浏览器被使用
<quark-button type="primary">Button</quark-button>
```

```html
// react
<quark-button type="primary" onClick="onClick">Button</quark-button>

// vue
<quark-button type="primary" @click="onClick">Button</quark-button>

// svelte
<quark-button type="primary" on:click={onClick}>Button</quark-button>

// angular
<quark-button type="primary" (click)="onClick">Button</quark-button>
```


## Vs Code 插件

[Visual Studio | Marketplace](https://marketplace.visualstudio.com/items?itemName=quarkd.quarkd-vscode-extension)

## 社区交流

如需帮助、讨论最佳实践或任何其他可从可搜索中获益的对话：

[Discuss Quark design on Github](https://github.com/hellof2e/quark-design/discussions)

## 贡献者

如果您有兴趣为 Quark design 做出贡献，请阅读我们的 [contributing docs](https://github.com/hellof2e/quark-design/blob/main/CONTRIBUTING.md) **在提交 PR 之前**.
