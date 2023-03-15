# Badge

### Intro

When new content or pending information is available, a red dot, number or desc show on the top-right.

### Install

```tsx
import { Badge } from "@quarkd/quark-react";
```

### Basic Usage

Show Badge content by setting `content` prop, or just show a red dot by setting `type` prop to dot.

```html
<Badge type="dot"></Badge>
<Badge type="round" content="9"></Badge>
<Badge type="label" content="text badge"></Badge>
```

### Type

There are `dot`、`round`、`label` in Quark，the default is `round`.

```html
<Badge type="dot">
  <div></div>
</Badge>
<Badge type="round" content="9">
  <div></div>
</Badge>
```

### Size

There are `normal`、`big` in Quark，the default is `normal`.

```html
<Badge type="dot">
  <div></div>
</Badge>
<Badge content="9">
  <div></div>
</Badge>
<Badge type="dot" size="big">
  <div></div>
</Badge>
<Badge size="big" content="9">
  <div></div>
</Badge>
```

### Border

To show border of badge, add `border` prop on the Badge. The default border color is white.

```html
<Badge type="label" content="normal badge">
  <div></div>
</Badge>
<Badge type="label" content="white-border badge" border>
  <div></div>
</Badge>
```

### Max

The maximun can be added to a badge by setting `max` prop on the Badge, the default is 99. Show ... when the number of `content` prop on the Badge exceeds.

```html
<Badge content="9">
  <div></div>
</Badge>
<Badge content="100" max="99">
  <div></div>
</Badge>
```

### Custom style - background color

```html
<Badge className="bg-color">
  <div></div>
</Badge>
```

```css
.bg-color {
  --badge-background: linear-gradient(90deg, blue, pink);
}
```

## API

### Props

| Attribute | Description                                                             | Type      | Default  |
| --------- | ----------------------------------------------------------------------- | --------- | -------- |
| type      | Type，can be set to `dot` `round` `label`                               | `string`  | `round`  |
| content   | Content                                                                 | `string`  | -        |
| size      | Size，can be set to `normal` `big`                                      | `string`  | `normal` |
| border    | Whether to show the border of badge. The default border color is white. | `boolean` | `false`  |
| max       | Max value                                                               | `number`  | `99`     |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                     | Description                     | Default                |
| ------------------------ | ------------------------------- | ---------------------- |
| `--badge-text-color`     | Badge text color                | `#FFFFFF`              |
| `--badge-background`     | Badge background color          | `#F72626`              |
| `--badge-padding-column` | Top and bottom padding of badge | `0`                  |
| `--badge-padding-row`    | Left and right padding of badge | `normal: 4px` `big: 6px` |
| `--badge-font-size`      | Badge font size                 | `normal: 10px` `label: 11px` `big: 12px` |
| `--badge-font-weight`    | Badge font weight               | `500`                  |
| `--badge-line-height`    | Badge font line height          | `normal: 14px` `label: 16px` `big: 20px` |
| `--badge-dot-size`       | Badge dot size                  | `8px`                  |
| `--badge-font-family`    | Badge font-family               | `system default style` |
| `--badge-border-color`   | Badge border color              | `#FFFFFF`              |
