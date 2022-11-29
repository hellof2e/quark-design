# 加载动画 Loading

### 介绍

加载图标，用于表示加载中的过渡状态。

### 安装

```tsx
import { Loading } from "@quarkd/quark-react";
```

### 基本使用

```html
<Loading></Loading>
```

### 加载类型

```html
<Loading type="circular"></Loading> <Loading type="spinner"></Loading>
```

### 自定义大小

默认单位为 `px`。

```html
<Loading size="20"></Loading>
<Loading size="30"></Loading>
<Loading size="40"></Loading>
```

### 自定义颜色

```html
<Loading size="30"></Loading> // 默认颜色
<Loading size="30" color="green"></Loading>
<Loading size="30" color="warning"></Loading>
```

### 加载文案

```html
<Loading size="30">加载中...</Loading>
```

### 垂直排列

```html
<Loading size="30" vertical>加载中...</Loading>
```

### 自定义文本样式

```html
<Loading size="30" vertical class="custom-text">加载中...</Loading>
```

```css
.custom-text {
  --loading-text-color: #0088ff;
}
```

## API

### Props

| 参数     | 说明                             | 类型               | 默认值    |
| -------- | -------------------------------- | ------------------ | --------- |
| type     | 图标类型， `circular` `spinner`  | `string`           | `spinner` |
| color    | 图标颜色                         | `string`           | `#879099` |
| size     | 图标大小，如 `20px` `2em` `2rem` `20vm` `20vh` | `string or number` | `30px`    |
| vertical | 文案是否垂直排列                 | `boolean`          | `false`   |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                       | 说明             | 默认值    |
| -------------------------- | ---------------- | --------- |
| `--loading-text-color`     | 加载文案颜色     | `#969799` |
| `--loading-text-font-size` | 加载文案文字大小 | `14px`    |
