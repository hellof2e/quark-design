# Switch 开关

### 介绍

用来打开或关闭选项。

### 安装

```tsx
import "quarkd/lib/switch";
```

### 基本使用

```html
<quark-switch checked></quark-switch>
```

### 禁用状态

```html
<quark-switch disabled></quark-switch>
```

### 自定义大小

可以通过 `size` 或修改元素 `font-size` 来控制大小。

```html
<quark-switch size="26px"></quark-switch>
<quark-switch style="font-size: 26px"></quark-switch>
```

### 自定义颜色

可以通过 `color` 属性控制打开时的背景色 `inactivecolor` 属性控制关闭时的背景色。

```html
<quark-switch color="red" inactivecolor="#08f"></quark-switch>
```

### 加载状态

```html
<quark-switch loading></quark-switch>
```

### change 事件

```html
<quark-switch @change="onChange" :checked="checked"></quark-switch>
```

```js
<script>
export default {
  data() {
    return {
        checked: false
    }
  },
  methods: {
    onChange(e) {
      data.checked = e.detail.value;
    }
  }
}
</script>
```

## API

### Props

| 参数          | 说明           | 类型      | 默认值    |
| ------------- | -------------- | --------- | --------- |
| checked       | 开/关          | `boolean` | `false`   |
| disabled      | 禁用           | `boolean` | `false`   |
| loading       | 加载状态       | `boolean` | `false`   |
| size          | 开关大小       | `number`  | `16px `   |
| color         | 打开时的背景色 | `string`  | `#08f`    |
| inactivecolor | 关闭时的背景色 | `string`  | `#e1e6eb` |

### Event

| 名称   | 说明            | 类型                                         |
| ------ | --------------- | -------------------------------------------- |
| change | change 回调函数 | `e: ({ detail: { value: string } }) => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                   | 说明                       | 默认值           |
| ---------------------- | -------------------------- | ---------------- |
| `--switch-label-width` | 通过该变量控制 switch 宽度 | `50px / 3.125em` |
