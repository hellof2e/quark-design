# Loading

### Intro

Used to indicate the transition state during loading.

### Install

```tsx
import { Loading } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Loading></Loading>
```

### Type

```html
<Loading type="circular"></Loading> <Loading type="spinner"></Loading>
```

### Size

Default `px`。

```html
<Loading size="20"></Loading>
<Loading size="30"></Loading>
<Loading size="40"></Loading>
```

### Color

```html
<Loading size="30"></Loading> // Default
<Loading size="30" color="green"></Loading>
<Loading size="30" color="warning"></Loading>
```

### Text

```html
<Loading size="30">loading...</Loading>
```

### Vertical

```html
<Loading size="30" vertical>loading...</Loading>
```

### Text Color

```html
<Loading size="30" vertical class="custom-text">loading...</Loading>
```

```css
.custom-text {
  --loading-text-color: #0088ff;
}
```

## API

### Props

| Attribute | Description                                          | Type                 | Default   |
| --------- | ---------------------------------------------------- | -------------------- | --------- |
| type      | Icon type, `circular` `spinner`                      | `string`             | `spinner` |
| color     | Icon color                                           | `string`             | `#879099` |
| size      | Icon size, `20px` `2em` `2rem`                       | `string` or `number` | `30px`    |
| vertical  | Whether to arrange icons and text content vertically | `boolean`            | `false`   |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to[Theme customization](#/zh-CN/guide/theme).

| Name                       | Description            | Default Value |
| -------------------------- | ---------------------- | ------------- |
| `--loading-text-color`     | Loading text color     | `#969799`     |
| `--loading-text-font-size` | Loading text font size | `14px`        |
