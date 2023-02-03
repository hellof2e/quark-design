# Card

## Intro

Used to display product pictures, prices and other information.

## Install

```tsx
import "quarkd/lib/card";
```

### Basic Usage

### Basic Usage

```html
<quark-card
  title="This is title"
  tips="100"
  content="This is loooooooong text content of `Card`"
  desc="footer content"
/>
```

## API

### Props

| Attribute | Description | Type   | Default Value |
| --------- | ----------- | ------ | ------------- |
| title     | Title       | String |
| content   | Content     | String |
| tips      | Tips        | String |               |
| desc      | footer      | String |               |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles.Please refer to [Theme customization](#/zh-CN/guide/theme)。

| Name                       | Description        | Default Value |
| -------------------------- | ------------------ | ------------- |
| `--card-height`            | height             | 138px         |
| `--card-border-radius`     | border-radius      | 4px           |
| `--card-hspacing`          | horizontal padding | 20px          |
| `--card-vspacing`          | vertical padding   | 20px          |
| `--card-title-font-size`   | Title font-size    | 14px          |
| `--card-title-color`       | Title font-color   | #999          |
| `--card-content-font-size` | Content font-size  | 14px          |
| `--card-content-color`     | Content font-color | #666          |
| `--card-tips-color`        | tips color         | #333          |
| `--card-tips-font-size`    | Tips font-size     | 15px          |
| `--card-desc-color`        | footer font-color  | #999          |
| `--card-desc-font-size`    | footer font-size   | 14px          |
