# Switch 开关

### 介绍

用来打开或关闭选项。

### 安装

```tsx
import { Switch } from "@quarkd/quark-react";
```

### 基本使用

```html
<Switch checked></Switch>
```

### 禁用状态

```html
<Switch disabled></Switch>
```

### 自定义大小

可以通过 `size` 或修改元素 `font-size` 来控制大小。

```html
<Switch size="26px"></Switch> <Switch style="font-size: 26px"></Switch>
```

### 自定义颜色

可以通过 `color` 属性控制颜色。

```html
<Switch color="red"></Switch>
```

### change 事件

```js
export default () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.detail.value);
  };
  return <Switch onChange="console.log(event)" checked={checked}></Switch>;
};
```

## API

### Props

| 参数     | 说明            | 类型                                   | 默认值  |
| -------- | --------------- | -------------------------------------- | ------- |
| checked  | 开/关           | `boolean`                              | `false` |
| disabled | 禁用            | `boolean`                              | `false` |
| size     | 开关大小        | `number`                               | `16px ` |
| color    | 颜色            | `string`                               | -       |
| onChange | change 回调函数 | `e: ({ detail: { value: string } }) => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                   | 说明                       | 默认值           |
| ---------------------- | -------------------------- | ---------------- |
| `--switch-label-width` | 通过该变量控制 switch 宽度 | `50px / 3.125em` |
