# Button 按钮

### 介绍

按钮。

### 安装使用

```tsx
import { Button } from "@quarkd/quark-react";
```

### 基本使用

```html
<button>默认按钮</button>
```

### 按钮类型

按钮支持 `primary`、`success`、`danger`、`warning`和默认类型。

```html
<button>默认按钮</button>
<button type="primary">主要按钮</button>
<button type="success">成功按钮</button>
<button type="danger">危险按钮</button>
<button type="warning">警告按钮</button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<button plain type="primary">主要按钮</button>
<button plain type="success">成功按钮</button>
```

### 浅色按钮

通过 `light` 属性将按钮设置为浅色按钮，浅色按钮的文字为按钮颜色，背景为对应的浅色。

```html
<button type="primary" light>主要按钮</button>
<button type="success" light>成功按钮</button>
```

### 按钮尺寸

按钮支持 `big`、`small` 和默认尺寸。

```html
<button type="primary" size="small">小号尺寸</button>
<button type="primary" size="big">大号尺寸</button>
<button type="primary" size="large">特大尺寸</button>
<button type="primary">普通尺寸</button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<button disabled type="primary">禁用状态</button>
<button disabled plain>禁用状态</button>
```

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆角（`round`）、方形按钮(`square`)和默认的小圆角。

```html
<button shape="square" type="danger">方形按钮</button>
<button shape="round" type="primary">圆角按钮</button>
```

### 加载状态

通过 `loading` 属性设置加载状态，其中`loadingcolor `属性控制 loading 颜色，`loadingsize `属性控制 loading 大小，`loadingtype `属性控制 loading 类型，loading 参考 loading 组件，

```html
<button loading type="danger" loadtype="circular">加载中...</button>
<button loading type="warning">加载中...</button>
<button onClick="{changeLoading}" loading="{isLoading}" type="success">
  Click me!
</button>
```

### 图标按钮

通过 `icon` 属性设置图标。

```html
<button
  type="primary"
  icon="https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png"
>
  喜欢
</button>
```

## API

### Props

| 参数         | 说明                                                                     | 类型      | 默认值    |
| ------------ | ------------------------------------------------------------------------ | --------- | --------- |
| type         | 类型，可选值为 `primary`、`success`、`danger`、`warning` 和默认 5 种类型 | `string`  | -         |
| size         | 尺寸，可选值为 `small`, `normal`, `big`, `large` 4 种类型                | `string`  | `normal`  |
| disabled     | 是否禁用按钮                                                             | `boolean` | `false`   |
| icon         | 按钮图标 (支持传 url 链接)                                               | `string`  | -         |
| shape        | 形状，可选值为 `square`                                                  | `string`  | `round`   |
| plain        | 是否为朴素按钮                                                           | `boolean` | `false `  |
| light        | 是否为浅色按钮                                                           | `boolean` | `false `  |
| loading      | 按钮 loading 状态                                                        | `boolean` | `false`   |
| loadtype     | 加载图标类型，可选值为 `circular`                                        | `string`  | `spinner` |
| loadingcolor | 加载图标颜色                                                             | `string`  | `#fff`    |
| loadingsize  | 加载图标大小                                                             | `string`  | `20`      |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式。

| 名称                         | 说明           | 默认值 |
| ---------------------------- | -------------- | ------ |
| `--Button-height`            | 按钮高度       | `32px` |
| `--Button-hspacing`          | 按钮左右内边距 | `12px` |
| `--Button-font-size`         | 按钮字体大小   | `14px` |
| `--Button-border-radius`     | 按钮圆角       | `8px`  |
| `--Button-color`             | 文字颜色       | `#fff` |
| `--Button-icon-hspacing`     | icon 右间距    | `6px`  |
| `--Button-icon-size`         | icon 大小      | `1em`  |
| `--Button-big-border-radius` | 大尺寸按钮圆角 | `8px`  |
