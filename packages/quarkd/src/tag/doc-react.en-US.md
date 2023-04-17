# Tag

### Intro

Tags for tagging and classification.

### Install

```tsx
import { Tag } "@quarkd/quark-react";
```

### Basic Usage

### 基本用法

```html
<Tag>Q</Tag>
```

### Type

```html
<Tag type="primary">Q</Tag>
```

### Size

```html
<Tag>Q</Tag> <Tag size="large">Q</Tag>
```

### Plain tag

```html
<Tag plain>Q</Tag>
```

### Custom style

```html
<Tag size="large" color="#ffe1e1" textcolor="#ad0000">Q</Tag>
```

### Round tag

```html
<Tag size="large" round>Q</Tag>
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
