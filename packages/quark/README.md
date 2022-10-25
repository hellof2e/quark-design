[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


# Quark

Quark 是一个基于 Web Components 的跨框架 UI 组件库，输出标准的 Custom Element，组件可以同时在 React、Vue、Preact、Angular 或 原生 JS 等任意框架或无框架中使用。

## 🤔 Motivation

技术框架的出现，提升了开发体验以页面性能，但技术框架的不断迭代更新，为项目的维护带来诸多挑战，如：

- 视觉组件无法跨技术框架（React、Vue等）使用
- 技术框架一旦升级，视觉组件常常必须配合迭代升级

因此，我们开发了这套 UI 框架，旨在与技术框架隔离（技术栈无关），让视觉组件避免落入技术栈迭代而迭代的怪圈。

## Features

- **支持 Vue、React、Angular 等各类框架/无框架**
- **完全覆盖您所需要的各种通用组件**
- 支持按需引用
- 支持 TypeScript
- 支持定制主题
- 详尽的文档和示例
- 单元测试覆盖
- 支持服务端渲染（Bate）


## 安装

具体安装使用方法请参考 Quark 官网。


```shell
$ npm i quarkd -S  # or yarn add quarkd
```

## 使用

```tsx
import 'quarkd/lib/button';

<quark-button type="primary">按钮</quark-button>
```

### 示例1：Vue 工程

```tsx
<template>
  <div>
    <quark-button @click="handleClick" type="primary">按钮</quark-button>
  </div>
</template>
```
### 示例2：React 工程

```jsx
class Demo extends React.Component {
  render() {
    return <quark-button onClick={() => this.handleClick} type="primary">按钮</quark-button>
  }
}
```

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