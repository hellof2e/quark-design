# Watermark

### Intro

Watermark - adding text or patterns on the page (applicable to preventing information theft scenarios)

### Install

```tsx
import "quarkd/lib/watermark";
```

### Basic Usage

```html
<quark-watermark text="quark-design" />
```

### Image Watermark

```html
<quark-watermark
  width="100"
  height="36"
  rotate="-12"
  image="https://m.hellobike.com/resource/helloyun/16682/o7HKA_image.png?x-oss-process=image/quality,q_80"
/>
```

### Adjust the watermark spacing

```html
<quark-watermark text="quark-design" gapy="24" gapx="48" />
```

### Multiline text watermark

```js
this.$refs.watermark.setText(["quark-design", "A component library"]);
```

## API

### Props

| Attribute | Description                                                                                                                     | Type                 | Default              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| text      | watermark text content                                                                                                          | `string`             | `-`                  |
| image     | For the source of watermark images, if both text and image are passed in, the image will be used to render the watermark first. | `string`             | `-`                  |
| width     | watermark width                                                                                                                 | `string` or `number` | `120`                |
| height    | watermark height                                                                                                                | `string` or `number` | `64`                 |
| rotate    | The rotation angle when drawing the watermark,unit °                                                                            | `string` or `number` | `-22`                |
| fontsize  | text size                                                                                                                       | `string` or `number` | `14`                 |
| fontcolor | text color                                                                                                                      | `string`             | `rgba(0, 0, 0, .15)` |
| gapx      | horizontal spacing between watermarks                                                                                           | `string` or `number` | `24`                 |
| gapy      | vertical spacing between watermarks                                                                                             | `string` or `number` | `48`                 |

### Methods

| Name    | Description                                                                    | Type                   |
| ------- | ------------------------------------------------------------------------------ | ---------------------- |
| setText | Set the watermark text. Multi-line text needs to be passed in through an array | `string` or `string[]` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name        | Description                 | Default |
| ----------- | --------------------------- | ------- |
| `--z-index` | switch z-index of Watermark | `2000`  |
