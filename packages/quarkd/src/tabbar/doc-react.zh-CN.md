# Tabbar 底部栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 安装使用

```tsx
import "quarkd/lib/tabbar";
```

如果使用 `quark-icons`，请先安装：`npm install --save quark-icons`。

```js
// 引入 icons
import "@quarkd/icons/lib/home";
import "@quarkd/icons/lib/user";
import "@quarkd/icons/lib/tel";
```

### 基础用法

```html
<QuarkTabbar @change="onChange">
  <QuarkTabbarItem>
    <quark-icon-home size="20" />
    <div>首页</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-user size="20" />
    <div>我的</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-tel size="20" />
    <div>联系</div>
  </QuarkTabbarItem>
</QuarkTabbar>
```

### 不带图标

```html
<QuarkTabbar @change="onChange">
  <QuarkTabbarItem>首页</QuarkTabbarItem>
  <QuarkTabbarItem>我的</QuarkTabbarItem>
  <QuarkTabbarItem>联系</QuarkTabbarItem>
</QuarkTabbar>
```

### 设置默认激活菜单

```html
<QuarkTabbar val="联系">
  <QuarkTabbarItem>
    <quark-icon-home size="20" />
    <div>首页</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-user size="20" />
    <div>我的</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-tel size="20" />
    <div>联系</div>
  </QuarkTabbarItem>
</QuarkTabbar>
```

### 固定在页面底部

通过 `fixed` 来设置固定底部

```html
<QuarkTabbar fixed>
  <QuarkTabbarItem>
    <quark-icon-home size="20" />
    <div>首页</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-user size="20" />
    <div>我的</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-tel size="20" />
    <div>联系</div>
  </QuarkTabbarItem>
</QuarkTabbar>
```

## API

### QuarkTabbar Props

| 参数        | 说明               | 类型      | 默认值    |
| ----------- | ------------------ | --------- | --------- |
| fixed       | 是否固定在底部     | `boolean` | `true`    |
| activecolor | 激活菜单的颜色     | `string`  | `#0088FF` |
| value       | 选中的名称或索引值 | `string`  | `0`       |

### QuarkTabbar Event

| 名称   | 说明           | 类型                                                |
| ------ | -------------- | --------------------------------------------------- |
| change | 切换标签时触发 | `{e:{detail: {value: 选中的名称或索引值}}} => void` |
