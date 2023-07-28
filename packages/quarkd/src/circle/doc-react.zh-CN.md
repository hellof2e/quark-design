# Circle 环形的进度

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 安装使用

```tsx
import { Circle } from "@quarkd/quark-react";
```

### 基本用法

```tsx
export default () => {
  return <Circle rate={rate}>{rate}%</Circle>;
};
```

### 大小定制

通过 `size` 属性设置圆环直径。

```tsx
export default () => {
  return (
    <Circle rate={rate} size="80">
      大小定制
    </Circle>
  );
};
```

### 颜色定制

通过 `color` 属性设置进度条颜色。

```tsx
export default () => {
  return (
    <Circle rate={rate} color="#02b357">
      颜色定制
    </Circle>
  );
};
```

### 进度条宽度

通过 `strokewidth` 属性设置进度条宽度。

```tsx
export default () => {
  return (
    <Circle rate={rate} strokewidth={5}>
      宽度定制
    </Circle>
  );
};
```

### 轨道颜色

通过 `layercolor` 属性设置轨道颜色。

```tsx
export default () => {
  return (
    <Circle rate={rate} layercolor="#f00">
      轨道颜色
    </Circle>
  );
};
```

### 逆时针

将 `anticlockwise` 设置为`true`，进度会从逆时针方向开始。

```tsx
export default () => {
  return (
    <Circle rate={rate} anticlockwise>
      逆时针
    </Circle>
  );
};
```

### 渐变色

通过 `setGradient` 方法设置渐变色。
通过 `--quark-circle-transition` 设置进度条动画效果。

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
      渐变色
    </Circle>
  );
};
```

```css
.custom {
  --quark-circle-transition: all linear 0.3s;
}
```

### 起始位置

进度条默认从顶部开始，可以通过 `startposition` 属性设置起始位置。

```tsx
export default () => {
  return (
    <Circle rate={rate} startposition="right">右侧</Circle>
    <Circle rate={rate} startposition="bottom">下侧</Circle>
    <Circle rate={rate} startposition="left">左侧</Circle>
  )
}
```

## API

### Props

| 方法名        | 说明               | 类型                  | 默认值  |
| ------------- | ------------------ | --------------------- | ------- |
| rate          | 当前进度           | `number`              | `0`     |
| size          | 圆环直径           | `number`              | `100`   |
| color         | 进度条颜色         | `string`              | `#08f`  |
| layercolor    | 轨道颜色           | `string`              | `#fff`  |
| strokewidth   | 进度条宽度         | `number`              | `2`     |
| fill          | 填充颜色           | `string`              | `#fff`  |
| strokelinecap | 进度条端点的形状   | `StrokeLinecap`       | `round` |
| anticlockwise | 是否逆时针时针增加 | `boolean`             | `false` |
| startposition | 进度起始位置       | `CircleStartPosition` | `top`   |

### Methods

| 名称        | 说明             | 类型         |
| ----------- | ---------------- | ------------ |
| setGradient | 设置进度条渐变色 | `() => void` |

### Slots

| 名称 | 说明       |
| ---- | ---------- |
| slot | 自定义内容 |

### 类型定义

```ts
type StrokeLinecap = "round" | "square" | "butt";
type CircleStartPosition = "left" | "right" | "top" | "bottom";
```

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                        | 说明           | 默认值                       |
| --------------------------- | -------------- | ---------------------------- |
| `--quark-circle-transition` | 进度条运动动画 | `transition: all linear 1s;` |
