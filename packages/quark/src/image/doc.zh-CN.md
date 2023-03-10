# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 安装使用

```jsx
import "quarkd/lib/image";
```

### 基础用法

基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

```html
<quark-image
  src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
/>
```

### 圆形图片

```html
<quark-image
  src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
  :width="100"
  :height="100"
  round
/>
```

### 懒加载

```html
<quark-image
  src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
  width="100px"
  height="100px"
  lazy
/>
```

## API

### Props

| 参数   | 说明                                                                                                     | 类型                 | 默认值  |
| ------ | -------------------------------------------------------------------------------------------------------- | -------------------- | ------- |
| width  | 宽度，默认单位为 px                                                                                      | `number` or `string` | -       |
| height | 高度，默认单位为 px                                                                                      | `number` or `string` | -       |
| fit    | 图片填充模式，等同于原生的[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) 属性 | `string`             | `fill`  |
| lazy   | 懒加载                                                                                                   | `boolean`            | `false` |
| round  | 是否显示为圆形                                                                                           | `boolean`            | `false` |
| radius | 外边框圆角                                                                                               | `number` or `string` | -       |
| alt    | 定义了图像的备用文本描述                                                                                 | `string`             | -       |

### fit 填充模式

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |

### Events

| 事件名 | 说明               | 类型         |
| ------ | ------------------ | ------------ |
| load   | 图片加载完毕时触发 | `（）=>void` |
| error  | 图片加载失败时触发 | `（）=>void` |

### Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| loading | 自定义加载中的提示内容     |
| error   | 自定义加载失败时的提示内容 |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。
| 名称 | 说明 | 默认值 |
| ------------------------ | ----------------------------------- | --------------- |
| `--image-height` | 图片高度 | `100%` |
| `--image-width` | 图片宽度 | `100%` |
