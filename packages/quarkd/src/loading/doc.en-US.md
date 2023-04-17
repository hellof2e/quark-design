# Loading

### Intro

Used to indicate the transition state during loading.

### Install

```tsx
import "quarkd/lib/loading";
```

### Basic Usage

```html
<quark-loading></quark-loading>
```

### Type

```html
<quark-loading type="circular"></quark-loading>
<quark-loading type="spinner"></quark-loading>
```

### Size

Default `px`。

```html
<quark-loading size="20"></quark-loading>
<quark-loading size="30"></quark-loading>
<quark-loading size="40"></quark-loading>
```

### Color

```html
<quark-loading size="30"></quark-loading> // Default
<quark-loading size="30" color="green"></quark-loading>
<quark-loading size="30" color="#08f"></quark-loading>
```

### Text

```html
<quark-loading size="30">Loading...</quark-loading>
```

### Vertical

```html
<quark-loading size="30" vertical>Loading...</quark-loading>
```

### Text Color

```html
<quark-loading size="30" vertical class="custom-text">Loading...</quark-loading>

.custom-text { --loading-text-color: #0088ff; }
```

## API

### Props

| Attribute | Description                                          | Type                 | Default   |
| --------- | ---------------------------------------------------- | -------------------- | --------- |
| type      | Icon type, `circular` `spinner`                      | `string`             | `spinner` |
| color     | Icon color                                           | `string`             | `#879099` |
| size      | Icon size, `20px` `2em` `2rem` `20vm` `20vh`         | `string` or `number` | `30px`    |
| vertical  | Whether to arrange icons and text content vertically | `boolean`            | `false`   |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to[Theme customization](#/zh-CN/guide/theme).

| Name                       | Description            | Default Value |
| -------------------------- | ---------------------- | ------------- |
| `--loading-text-color`     | Loading text color     | `#969799`     |
| `--loading-text-font-size` | Loading text font size | `14px`        |
