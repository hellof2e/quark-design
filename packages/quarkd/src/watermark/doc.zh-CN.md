# Watermark 水印

### 介绍

水印——在页面上添加文字或图案（适用于防止信息盗用场景）。

### 安装使用

```tsx
import "quarkd/lib/watermark";
```

### 基本使用

```html
<quark-watermark text="quark-design" />
```

### 图片水印

```html
<quark-watermark
  width="100"
  height="36"
  rotate="-12"
  image="https://m.hellobike.com/resource/helloyun/16682/o7HKA_image.png?x-oss-process=image/quality,q_80"
/>
```

### 调整水印间距

```html
<quark-watermark text="quark-design" gapy="24" gapx="48" />
```

### 多行文字水印

```js
this.$refs.watermark.setText(["quark-design", "A component library"]);
```

## API

### Props

| 参数      | 说明                                                       | 类型                 | 默认值               |
| --------- | ---------------------------------------------------------- | -------------------- | -------------------- |
| text      | 单行水印文字                                               | `string`             | `-`                  |
| image     | 水印图片源，若同时传入 text 和 image，优先使用图片渲染水印 | `string`             | `-`                  |
| width     | 水印宽度                                                   | `string` or `number` | `120`                |
| height    | 水印高度                                                   | `string` or `number` | `64`                 |
| rotate    | 水印绘制时，旋转的角度，单位 °                             | `string` or `number` | `-22`                |
| fontSize  | 文字大小                                                   | `string` or `number` | `14`                 |
| fontColor | 文字颜色                                                   | `string`             | `rgba(0, 0, 0, .15)` |
| gapx      | 水印之间的水平间距                                         | `string` or `number` | `24`                 |
| gapy      | 水印之间的垂直间距                                         | `string` or `number` | `48`                 |

### 方法

| 名称    | 说明                                 | 类型                   |
| ------- | ------------------------------------ | ---------------------- |
| setText | 设置水印文字，多行文字需通过数组传入 | `string` or `string[]` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称        | 说明           | 默认值 |
| ----------- | -------------- | ------ |
| `--z-index` | 水印的 z-index | `2000` |
