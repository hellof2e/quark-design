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

### Button

```html
<Empty title="no data" desc="add data now~" buttontext="go to Order" />
```

### Local empty page

```html
<Empty
  title="no data"
  desc="add data now~"
  buttontext="go to Order"
  type="local"
/>
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

| Attribute  | Description                           | Type     | Default  |
| ---------- | ------------------------------------- | -------- | -------- |
| title      | Title                                 | `string` |          |
| desc       | Description                           | `string` |          |
| image      | image url                             | `string` |          |
| imagesize  | image size                            | `string` |          |
| buttontext | button text                           | `string` |          |
| type       | global empty page or local empty page | `string` | `global` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                              | Description               | Default    |
| --------------------------------- | ------------------------- | ---------- |
| `--empty-padding`                 | Container padding         | `32px 0`   |
| `--empty-title-font-size`         | Title font size           | `16px`     |
| `--empty-image-width`             | Image width               | `191px`    |
| `--empty-title-color`             | Title font color          | `#242729`  |
| `--empty-title-line-height`       | Title line-height         | `22px`     |
| `--empty-title-white-space`       | Whether title change line | `pre-wrap` |
| `--empty-desc-font-size`          | Desc font size            |
| `--empty-desc-color`              | Desc font color           | `#969799`  |
| `--empty-desc-line-height`        | Desc line-height          | `20px`     |
| `--empty-desc-width`              | Desc font width           |
| `--empty-desc-white-space`        | Whether desc change line  | `pre-wrap` |
| `--empty-button-font-size`        | Button font size          | `16px`     |
| `--empty-button-text-color`       | Button text color         | `#fff`     |
| `--empty-button-margin-top`       | Button margin top         | `20px`     |
| `--empty-button-background-color` | Button background color   | `#0088ff`  |
| `--empty-button-line-height`      | Button line height        | `22px`     |
| `--empty-button-padding-column`   | Button padding column     | `9px`      |
| `--empty-button-padding-row`      | Button padding row        | `34px`     |
| `--empty-button-border-radius`    | Button border radius      | `20px`     |
