# Image

### Intro

Enhanced img tag with multiple image fill modes, support for image lazy loading, loading hint, loading failure hint.

### Install

```jsx
import "quarkd/lib/image";
```

### Basic Usage

The basic usage is consistent with the native img tag, and native attributes such as src, width, height, and alt can be set.

```html
<quark-image
  src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
  :width="100"
  :height="100"
/>
```

### Round

```html
<quark-image
  src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
  width="100px"
  height="100px"
  round
/>
```

### Lazy load

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

| Attribute | Description                                                                                 | Type                 | Default |
| --------- | ------------------------------------------------------------------------------------------- | -------------------- | ------- |
| width     | Width，default unit is px                                                                   | `number` or `string` | -       |
| height    | Height，default unit is px                                                                  | `number` or `string` | -       |
| fit       | Fit mode, same as [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) | `string`             | `fill`  |
| lazy      | Whether to enable lazy load                                                                 | `boolean`            | `false` |
| round     | Whether to be round                                                                         | `boolean`            | `false` |
| radius    | Border Radius                                                                               | `number` or `string` | -       |
| alt       | Alternate textual description of image                                                      | `string`             | -       |

### Fit optional value

| Name       | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| contain    | Keep aspect ratio, fully display the long side of the image                         |
| cover      | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill       | Stretch and resize image to fill the content box                                    |
| none       | Not resize image                                                                    |
| scale-down | Take the smaller of `none` or `contain`                                             |

### Events

| Event |          Description           |     Type     |
| :---: | :----------------------------: | :----------: |
| load  |   Emitted when image loaded    | `（）=>void` |
| error | Emitted when image load failed | `（）=>void` |

### Slots

| Name    | Description                |
| ------- | -------------------------- |
| loading | Custom loading placeholder |
| error   | Custom error placeholder   |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).
| Name | Description | Default |
| ------------------------ | ----------------------------------- | --------------- |
| `--image-height` | Image height | `100%` |
| `--image-width` | Image width | `100%` |
