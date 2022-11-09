# Empty

### Intro

Empty status.

### Install

```tsx
import { Empty } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Empty />
```

### Description

```html
<Empty title="no data" desc="add data now~" />
```

### Custom Image Size

```html
<!-- default unit is px -->
<Empty desc="no data" imagesize="100" />

<!-- support rem, em, vw, vh -->
<Empty desc="no data" imagesize="100rem" />
```

### Custom Image

```html
<Empty
  desc="no data"
  imagesize="100"
  image="https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png"
/>
```

### Custom Bottom

```html
<Empty desc="Go and Order" title="no order history">
  <div slot="footer">custom footer</div>
</Empty>
```

## API

### Props

| Attribute | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| title     | Title       | `string` |         |
| desc      | Description | `string` |         |
| image     | image url   | `string` |         |
| imagesize | image size  | `string` |         |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                        | Description               | Default    |
| --------------------------- | ------------------------- | ---------- |
| `--empty-title-font-size`   | Title font size           | `16px`     |
| `--empty-title-color`       | Title font color          | `#242729`  |
| `--empty-title-line-height` | Title line-height         | `22px`     |
| `--empty-title-width`       | Title font width          |
| `--empty-title-white-space` | Whether title change line | `pre-wrap` |
| `--empty-desc-font-size`    | Desc font size            |
| `--empty-desc-color`        | Desc font color           | `#969799`  |
| `--empty-desc-line-height`  | Desc line-height          | `20px`     |
| `--empty-desc-width`        | Desc font width           |
| `--empty-desc-white-space`  | Whether desc change line  | `pre-wrap` |
