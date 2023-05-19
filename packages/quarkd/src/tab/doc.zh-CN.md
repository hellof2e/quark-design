# Tab 标签组件

### 介绍

选项卡。

### 安装使用

```tsx
import "quarkd/lib/tab";
```

### 基础用法

```html
<quark-tabs :activekey="active">
  <quark-tab-content label="tab1"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3" disabled> tab3 content </quark-tab-content>
  <quark-tab-content label="tab4"> tab4 content </quark-tab-content>
</quark-tabs>
```

```javascript
data() {
  return {
    active: 1,
  }
},
```

### 深色模式

```html
<quark-tabs dark :activekey="active">
  <quark-tab-content label="tab1"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3" disabled> tab3 content </quark-tab-content>
  <quark-tab-content label="tab4"> tab4 content </quark-tab-content>
</quark-tabs>
```

```javascript
data() {
  return {
    active: 1,
  }
},
```

### 通过名称匹配

```html
<quark-tabs :activekey="activeName">
  <quark-tab-content label="tab1" name="a"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2" name="b"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3" disabled name="c">
    tab3 content
  </quark-tab-content>
  <quark-tab-content label="tab4" name="d"> tab4 content </quark-tab-content>
</quark-tabs>
```

```js
data() {
  return {
    activeName: 'd',
  }
},
```

### 横向滚动

长度超过自动支持横向滚动。

```html
<quark-tabs>
  <quark-tab-content label="tab1">tab1</quark-tab-content>
  <quark-tab-content label="tab2">tab2</quark-tab-content>
  ...
  <quark-tab-content label="tab10">tab10</quark-tab-content>
</quark-tabs>
```

### 点击事件

```html
<quark-tabs :activekey="activeName1" @change="onChange">
  <quark-tab-content label="tab1" name="a"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2" name="b"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3" disabled name="c">
    tab3 content
  </quark-tab-content>
  <quark-tab-content label="tab4" name="d"> tab4 content </quark-tab-content>
</quark-tabs>
```

```js
data() {
  return {
    activeName1: 'd',
  }
},
methods: {
  onChange({detail}) {
    this.activeName1 = detail.name;
    Toast.text('当前选择:'+detail.label);
  }
}
```

### 吸顶效果

nav-item 在滚动时固定在屏幕上方

```html
<quark-tabs sticky offsettop="17vw">
  <quark-tab-content label="tab1"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3"> tab3 content </quark-tab-content>
  <quark-tab-content label="tab4"> tab4 content </quark-tab-content>
</quark-tabs>
```

## API

### Quark-tabs props

| 方法名    | 说明                                                   | 类型       | 默认值  |
| --------- | ------------------------------------------------------ | ---------- | ------- |
| activekey | 当前激活的 tab，对应到 `quark-tab-content` 中的 `name` | `string`   | 无      |
| sticky    | 是否吸顶                                               | `boolean ` | `false` |
| dark      | 深色模式                                               | `boolean ` | `false` |
| offsettop | 吸顶时与顶部的距离(单位: vw)                           | `string `  | `0vw`   |
| linewidth | 下划线宽                                               | `string `  | `40px`  |

### Quark-tab-content props

| 方法名   | 说明                            | 类型       | 默认值  |
| -------- | ------------------------------- | ---------- | ------- |
| label    | tab 显示名称                    | `string `  | 无      |
| disabled | tab 禁用状态                    | `boolean ` | `false` |
| name     | tab 匹配名称(和 activekey 匹配) | `string `  | 无      |

### Quark-tabs Event

| 名称   | 说明            | 类型                                                 |
| ------ | --------------- | ---------------------------------------------------- |
| change | change 回调函数 | `(e: {detail: {name:string，label:string}}) => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                          | 说明                                      | 默认值                    |
| ----------------------------- | ----------------------------------------- | ------------------------- |
| `--tab-item-color`            | `tab-item` 字体颜色                       | `#5E6266`                 |
| `--tab-item-active-color`     | `tab-item` 激活态`active`字体颜色         | `#333333`                 |
| `--tab-item-disabled-color`   | `tab-item` 禁用状态字体颜色               | `#c8c9cc`                 |
| `--tab-item-min-width`        | `tab-item` 最小宽度(决定一行最多展示几个) | `20vw`(一行最多展示 5 个) |
| `--tab-item-height`           | `tab-item` 高度设置                       | `44px `                   |
| `--tab-item-font-size`        | `tab-item` 字体大小                       | `16px`                    |
| `--tab-active-line-color`     | `tab-item` 激活态`下划线`颜色             | `#0088ff `                |
| `--tabs-background-color`     | tabs 背景色                               | `#ffffff`                 |
| `--tab-item-background-color` | `tab-item` 背景色                         | `#ffffff `                |
