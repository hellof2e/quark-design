# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

ps：由于浏览器最小字体大小为 12px，因此 demo 中展示高度略有误差。

### 安装使用

```tsx
import "quarkd/lib/badge";
```

### 徽标独立使用

设置 `content` 属性后，Badge 显示对应的内容，也可以通过设置 `type` 属性为 dot 来显示小红点。

```html
<quark-badge type="dot"></quark-badge>
<quark-badge type="round" content="9"></quark-badge>
<quark-badge type="label" content="文字徽标"></quark-badge>
```

### 徽标类型

徽标支持`dot`、`round`、`label`三种类型，默认为 `round`。

```html
<quark-badge type="dot">
  <div></div>
</quark-badge>
<quark-badge type="round" content="9">
  <div></div>
</quark-badge>
```

### 徽标大小

徽标大小支持 `normal`、`big` 两种，默认为 `normal`。

```html
<quark-badge type="dot">
  <div></div>
</quark-badge>
<quark-badge content="9">
  <div></div>
</quark-badge>
<quark-badge type="dot" size="big">
  <div></div>
</quark-badge>
<quark-badge size="big" content="9">
  <div></div>
</quark-badge>
```

### 徽标风格

徽标边框支持白色边框

```html
<quark-badge type="label" content="普通徽标">
  <div></div>
</quark-badge>
<quark-badge type="label" content="边框徽标" border>
  <div></div>
</quark-badge>
```

### 数字徽标

数字徽标支持最大值, 超出显示..., 默认最大 99

```html
<quark-badge content="9">
  <div></div>
</quark-badge>
<quark-badge content="100" max="99">
  <div></div>
</quark-badge>
```

### 自定义样式-背景色

```html
<quark-badge class="bg-color">
  <div></div>
</quark-badge>
```

```css
.bg-color {
  --badge-background: linear-gradient(90deg, blue, pink);
}
```

## API

### Props

| 参数    | 说明                                 | 类型      | 默认值   |
| ------- | ------------------------------------ | --------- | -------- |
| type    | 类型，可选值为 `dot` `round` `label` | `string`  | `round`  |
| content | 显示内容                             | `string`  | 无       |
| size    | 徽标大小，可选值为 `normal` `big`    | `string`  | `normal` |
| border  | 是否显示边框(默认白色)               | `boolean` | `false`  |
| max     | 数字显示最大值                       | `number`  | `99`     |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                     | 说明                 | 默认值                                   |
| ------------------------ | -------------------- | ---------------------------------------- |
| `--badge-text-color`     | badge 文字颜色       | `#FFFFFF`                                |
| `--badge-background`     | badge 背景           | `#F72626`                                |
| `--badge-padding-column` | badge 竖直方向内边距 | `0`                                      |
| `--badge-padding-row`    | badge 水平方向内边距 | `normal: 4px` `big: 6px`                 |
| `--badge-font-size`      | badge 文字大小       | `normal: 10px` `label: 11px` `big: 12px` |
| `--badge-font-weight`    | badge 文字粗细       | `500`                                    |
| `--badge-line-height`    | badge 文字行高       | `normal: 14px` `label: 16px` `big: 20px` |
| `--badge-dot-size`       | badge dot 模式大小   | `8px`                                    |
| `--badge-font-family`    | badge font-family    | `跟随系统`                               |
| `--badge-border-color`   | badge 边框颜色       | `#FFFFFF`                                |
