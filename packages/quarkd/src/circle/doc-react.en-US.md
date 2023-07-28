# Circle

### Intro

Circular progress bar component, and supports gradient color animation.

### Install

```tsx
import { Circle } from "@quarkd/quark-react";
```

### Basic Usage

```tsx
export default () => {
  return <Circle rate={rate}>{rate}%</Circle>;
};
```

### Custom Size

```tsx
export default () => {
  return (
    <Circle rate={rate} size="80">
      Size
    </Circle>
  );
};
```

### Custom Color

```tsx
export default () => {
  return (
    <Circle rate={rate} color="#02b357">
      Color
    </Circle>
  );
};
```

### Custom Strokewidth

```tsx
export default () => {
  return (
    <Circle rate={rate} strokewidth={5}>
      Strokewidth
    </Circle>
  );
};
```

### Custom Layercolor

```tsx
export default () => {
  return (
    <Circle rate={rate} layercolor="#f00">
      Layercolor
    </Circle>
  );
};
```

### Anticlockwise

```tsx
export default () => {
  return (
    <Circle rate={rate} anticlockwise>
      Anticlockwise
    </Circle>
  );
};
```

### Gradient

```tsx
export default () => {
  const circleRef = useRef<CircleRef>();
  useEffect(() => {
    circleRef.setGradientt({
      "0%": "#3fecff",
      "100%": "#6149f6",
    });
  }, []);
  return (
    <Circle
      ref={circleRef}
      class="custom"
      rate={rate}
      strokewidth={5}
      size="100"
    >
      Gradient
    </Circle>
  );
};
```

```css
.custom {
  --quark-circle-transition: all linear 0.3s;
}
```

### Start Position

```tsx
export default () => {
  return (
    <Circle rate={rate} startposition="right">Right</Circle>
    <Circle rate={rate} startposition="bottom">Bottom</Circle>
    <Circle rate={rate} startposition="left">Left</Circle>
  )
}
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

| Name                        | Description | Default                      |
| --------------------------- | ----------- | ---------------------------- |
| `--quark-circle-transition` | -           | `transition: all linear 1s;` |
