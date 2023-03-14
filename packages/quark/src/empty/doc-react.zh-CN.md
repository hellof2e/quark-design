# Empty 空状态

### 介绍

空状态。

### 安装使用

```tsx
import { Empty } from "@quarkd/quark-react";
```

### 基础用法

```html
<Empty />
```

### 描述文字

```html
<Empty title="描述文字" desc="快去添加数据吧~" />
```

### 自定义图片大小

通过 `imagesize` 属性图片的大小。

```html
<!-- 不指定单位，默认为 px -->
<Empty desc="描述文字" imagesize="100" />

<!-- 指定单位，支持 rem, vh, vw -->
<Empty desc="描述文字" imagesize="100rem" />
```

### 自定义图片

通过 `image` 属性中传入任意图片 URL。

```html
<Empty
  desc="描述文字"
  imagesize="100"
  image="https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png"
/>
```

### 自定义底部

```html
<Empty desc="快去下一单吧" title="没有历史订单">
  <div slot="footer">
    <div>自定义底部</div>
  </div>
</Empty>
```

## API

### Props

| 参数      | 说明     | 类型      | 默认值 |
| --------- | -------- | --------- | ------ |
| title     | 标题文字 | `string`  |        |
| desc      | 描述文字 | `string` |        |
| image     | 图片 url | `string` |        |
| imagesize | 图片大小 | `string` |        |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                        | 说明             | 默认值     |
| --------------------------- | ---------------- | ---------- |
| `--empty-padding` | 空白页容器内边距  | `32px 0`     |
| `--empty-title-font-size`   | 标题字体大小     | `16px`     |
| `--empty-image-width`       | 图片宽度         | `191px`     |
| `--empty-title-color`       | 标题字体颜色     | `#242729`  |
| `--empty-title-line-height` | 标题字体行高     | `22px`     |
| `--empty-title-white-space` | 标题是否换行     | `pre-wrap` |
| `--empty-desc-font-size`    | 描述字体大小     |
| `--empty-desc-color`        | 描述字体颜色     | `#969799`  |
| `--empty-desc-line-height`  | 描述字体行高     | `20px`     |
| `--empty-desc-width`        | 描述字体最大宽度 |
| `--empty-desc-white-space`  | 描述是否换行     | `pre-wrap` |
