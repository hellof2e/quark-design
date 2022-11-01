<p align="center">
  <a href="https://quark-design.hellobike.com/">
    <img width="200" src="https://user-images.githubusercontent.com/14307551/197440754-08db4379-eb0f-4808-890d-690355e6e8d2.png">
  </a>
</p>


<h1 align="center">Quark Design</h1>

<div align="center">
  
  一套企业级跨框架 UI 设计语言，底层基于 Web components
  
</div>

## Contact us

~~Wechat(微信交流/沟通群)，欢迎提意见或建议，有机会获取周边礼品🎁～, 若群已满请加右边小助手微信拉你入群~~

微信群已满员，请添加下面管理员拉你入群谢谢～

<div style="display:flex;">
  <img src="https://user-images.githubusercontent.com/14307551/198974064-8d02f3af-3cef-4f89-8744-bb860dd56121.png" width='230'/>
</div>

## 特性

- 支持 Vue、React、Angular 等各类框架/无框架。
- 完全覆盖您所需要的各种通用组件。
- 支持按需引用。
- 详尽的文档和示例。
- 单元测试覆盖。
- 支持 TypeScript。
- 支持定制主题。
- 国际化语言支持。
- 支持服务端渲染（Beta）。

[English](./README.md) | 简体中文

## 🤔 动机

技术框架的出现，提升了开发体验以页面性能，但技术框架的不断迭代更新，为项目的维护带来诸多挑战，如：

- 视觉组件无法跨技术框架（React、Vue等）使用
- 技术框架一旦升级，视觉组件常常必须配合迭代升级

因此，我们开发了这套 UI 框架，旨在与技术框架隔离（技术栈无关），让视觉组件避免落入技术栈迭代而迭代的怪圈。

## 安装

```bash
# Vue/Angular/JQ/无框架工程
npm i quarkd
```


```bash
# React 项目
npm i @quarkd/quark-react
```

## 示例
Vue.x
```jsx
import "quarkd/lib/button"

<quark-button type="primary">Button</quark-button>
```

React.x
```jsx
import { Button } from '@quarkd/quark-react';

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
<body>
  <quark-button loading="false" id="btn">Button</quark-button>
</body>

<script src="./node_modules/quarkd/lib/button/index.js" /> // or cdn
<script>
  window.addEventListener(function() {
    const el = document.getElementById('btn')
    el.loading = true
    setTimeout(() => { el.loading = true }, 2000);
  })
</script>
</html>
```

## 定制主题

参考  [定制主题](https://quark-design.hellobike.com/#/zh-CN/guide/theme) 文档。

## 国际化

参考 [国际化文档](https://quark-design.hellobike.com/#/zh-CN/guide/internationalization)。

## 兼容环境

现代浏览器和 IE11（需要 [polyfills](https://www.webcomponents.org/polyfills)）

## 参与共建

参考 [本地开发文档](https://github.com/hellof2e/quark-design/blob/main/CONTRIBUTING.md)

## 特别说明

- 由于 `quarkd` 提供的组件均为原生自定义元素（类比div），因此组件派发的事件需要使用addEventLisener接收。
- Vue 技术栈使用 `@xx` 即可接收原生派发的事件，因此不需要使用addEventLisener接收。
- 针对 React 技术栈，为了避免开发者手动 addEventLisener 接收事件，我们底层依托 `quarkd` ，上层进行了 Reactify(React 化)！因此 React 项目推荐使用 `@quarkd/quark-react`。


##  注意

- Vue 工程中使用组件可能会出现告警：

```html
<!-- vue2: -->
Unknown custom element: <quark-icon> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
<!-- vue3 -->
[Vue warn]: Failed to resolve component: quark-icon 
```

这是由于 Vue 组件的语法部分参考了自定义元素，为了避免与 Vue 组件产生冲突，需要将自定义元素忽略！请在工程中注入如下代码即可：

```tsx
// VUE2.x
Vue.config.ignoredElements = [/^quark-/]

// VUE3.x
// https://v3.cn.vuejs.org/guide/migration/global-api.html#config-productiontip-%E7%A7%BB%E9%99%A4
const app = createApp({})
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('quark-')
```

如果您使用的是 vite，修改 vite.config.js:

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
## 贡献者
<a href="https://github.com/hellof2e/quark-design/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hellof2e/quark-design" />
</a>
