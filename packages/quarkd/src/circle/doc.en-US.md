# Circle

### Intro

Circular progress bar component, and supports gradient color animation.

### Install

```tsx
import "quarkd/lib/circle";
```

### Basic Usage

```html
<quark-circle :rate="rate">{{ rate }}%</quark-circle>
```

### Custom Size

```html
<quark-circle :rate="rate" size="80">Size</quark-circle>
```

### Custom Color

```html
<quark-circle :rate="rate" color="#02b357">Color</quark-circle>
```

### Custom Strokewidth

```html
<quark-circle :rate="rate" :strokewidth="5">Strokewidth</quark-circle>
```

### Custom Layercolor

```html
<quark-circle :rate="rate" layercolor="#f00">Layercolor</quark-circle>
```

### Anticlockwise

```html
<quark-circle :rate="rate" anticlockwise>Anticlockwise</quark-circle>
```

### Gradient

```html
<quark-circle
  ref="circleRef"
  class="custom"
  :strokewidth="5"
  :rate="rate"
  size="100"
>
  Gradient
</quark-circle>
```

```js
export default {
  mounted() {
    this.$refs.circleRef.setGradient({
      "0%": "#3fecff",
      "100%": "#6149f6",
    });
  },
};
```

```css
.custom {
  --quark-circle-transition: all linear 0.3s;
}
```

### Start Position

```html
<quark-circle :rate="rate" startposition="right">Right</quark-circle>
<quark-circle :rate="rate" startposition="bottom">Bottom</quark-circle>
<quark-circle :rate="rate" startposition="left"> Left</quark-circle>
```

## API

### Props

| Attribute     | Description                 | Type                  | Default |
| ------------- | --------------------------- | --------------------- | ------- |
| rate          | Target rate                 | `number`              | `0`     |
| size          | Circle size                 | `number`              | `100`   |
| color         | Progress color              | `string`              | `#08f`  |
| layercolor    | Layer color                 | `string`              | `#fff`  |
| strokewidth   | Stroke width                | `number`              | `2`     |
| fill          | Fill color                  | `string`              | `#fff`  |
| strokelinecap | Stroke linecap              | `StrokeLinecap`       | `round` |
| anticlockwise | Whether to be anticlockwise | `boolean`             | `false` |
| startposition | Progress start position     | `CircleStartPosition` | `top`   |

### Methods

| Name        | Description           | Type         |
| ----------- | --------------------- | ------------ |
| setGradient | set progress gradient | `() => void` |

### Slots

| Name | Description    |
| ---- | -------------- |
| slot | Custom content |

### Data Structure of Action

```ts
type StrokeLinecap = "round" | "square" | "butt";
type CircleStartPosition = "left" | "right" | "top" | "bottom";
```

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                             | Description         | Default                      |
| -------------------------------- | ------------------- | ---------------------------- |
| `--quark-circle-transition`      | progress transition | `transition: all linear 1s;` |
| `--quark--circle-text-font-size` | text font size      | `14px`                       |
