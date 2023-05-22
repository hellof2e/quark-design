# Tag

### Intro

Tags for tagging and classification.

### Install

```tsx
import "quarkd/lib/tag";
```

### Basic Usage

```html
<quark-tag>Q</quark-tag>
```

### Type

```html
<quark-tag type="primary">Q</quark-tag>
```

### Size

```html
<quark-tag>Q</quark-tag> <quark-tag size="large">Q</quark-tag>
```

### Plain tag

```html
<quark-tag plain>Q</quark-tag>
```

### Light tag

```html
<quark-tag light>Q</quark-tag>
```

### Custom style

```html
<quark-tag size="large" color="#ffe1e1" textcolor="#ad0000">Q</quark-tag>
<quark-tag size="large" color="linear-gradient(135deg, #667eea, #764ba2)">
  Q
</quark-tag>
<quark-tag
  class="custom-border-color"
  plain
  size="large"
  color="#ffe1e1"
  textcolor="#ad0000"
>
  Q
</quark-tag>
```

```css
.custom-border-color {
  --tag-border-color: #fb990f;
}
```

### Round tag

```html
<quark-tag size="large" round>Q</quark-tag>
```

## API

### Props

| Attribute | Description                                                                    | Type      | Default   |
| --------- | ------------------------------------------------------------------------------ | --------- | --------- |
| type      | Tag type，can be set to `primary` `danger` `orange` `success` `warning` `gray` | `string`  | `primary` |
| size      | Tag size，can be set to `small` `large`                                        | `string`  | `small`   |
| plain     | Whether to be plain style                                                      | `boolean` | `false`   |
| round     | Whether to be round style                                                      | `boolean` | `false`   |
| color     | Tag color                                                                      | `string`  | -         |
| textcolor | Tag text color                                                                 | `string`  | -         |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/theme).

| Name                  | Description                            | Default                                                                         |
| --------------------- | -------------------------------------- | ------------------------------------------------------------------------------- |
| `--tag-border-radius` | tag round                              | `4px`                                                                           |
| `--tag-hspacing`      | tag                                    | small `4px`, large `6px`                                                        |
| `--tag-vspacing`      | tag text left and right margins        | `2px`                                                                           |
| `--tag-font-size`     | tag font size                          | small `11px`, large `14px`                                                      |
| `--tag-font-weight`   | tag font weight                        | small `400`, large `500`                                                        |
| `--tag-font-family`   | tag font family                        | small `PingFangSC-Regular, PingFang SC`, large `PingFangSC-Medium, PingFang SC` |
| `--tag-line-height`   | tag line height                        | small `12px`, large `20px`                                                      |
| `--tag-text-color`    | tag text color                         | `#fff`                                                                          |
| `--tag-background`    | tag background                         |
| `--tag-border-color ` | tag border color, only plain tag works |
