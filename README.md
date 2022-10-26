<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://user-images.githubusercontent.com/14307551/197440754-08db4379-eb0f-4808-890d-690355e6e8d2.png">
  </a>
</p>


<h1 align="center">Quark Design</h1>

<div align="center">
  
  一套企业级跨框架 UI 设计语言
  
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
- 支持服务端渲染（Bate）。
  
## 兼容环境

现代浏览器和 IE11（需要 [polyfills](https://www.webcomponents.org/polyfills)）
  
## 安装

```bash
// Vue1.x/Vue2.x/Vue3.x/Angular/无框架前端工程
npm i quarkd --save
```

```bash
// React 项目
npm i @quarkd/quark-react --save
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
```html
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

## 参与共建
参考 [本地开发文档](https://github.com/hellof2e/quark-design/blob/main/CONTRIBUTORING.md)

