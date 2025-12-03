# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 安装使用

```tsx
import "quarkd/lib/slider";
```

### 基础用法

```html
<quark-slider value="50"></quark-slider>
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```html
<quark-slider value="[20, 60]" range></quark-slider>
```

### 指定选择范围

```html
<quark-slider value="0" min="-50" max="50" />
```

### 禁用状态

```html
<quark-slider value="50" disabled />
```

### 只读状态

```html
<quark-slider value="50" readonly />
```

### 指定步长

```html
<quark-slider value="50" step="10" />
```

### 自定义样式

```html
<quark-slider value="50" barheight="4" activecolor="#ee0a24" />
```

### 自定义按钮

```html
<quark-slider value="60">
  <div slot="button" class="custom-button">60</div>
</quark-slider>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #1989fa;
    border-radius: 100px;
  }
</style>
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```html
<div style="height: 150px; display: flex;">
  <quark-slider value="50" vertical />
  <quark-slider value="[20, 60]" range vertical style="margin-left: 100px;" />
</div>
```

### 变更回调

```html
<quark-slider @change="onChange" :value="value" />
```

```js
export default {
  data() {
    return {
      value: 50,
    };
  },
  methods: {
    onChange({ detail }) {
      this.value = detail.value;
    },
  },
};
```

## API

### Props

|     参数      |                    说明                    |             类型             | 默认值    |
| :-----------: | :----------------------------------------: | :--------------------------: | :-------- |
|     value     |  当前进度百分比，在双滑块模式下为数组格式  | `number \| [number, number]` | `0`       |
|      min      |                   最小值                   |           `number`           | `0`       |
|      max      |                   最大值                   |           `number`           | `100`     |
|     step      |                    步长                    |           `number`           | `1`       |
|   barheight   |           进度条高度，单位为 px            |           `number`           | `2`       |
|  buttonsize   |          滑块按钮大小，单位为 px           |           `number`           | `24`      |
|  activecolor  |              进度条激活态颜色              |           `string`           | `#1989fa` |
| inactivecolor |             进度条非激活态颜色             |           `string`           | `#e5e5e5` |
|     range     |             是否开启双滑块模式             |          `boolean`           | `false`   |
|    reverse    |              是否将进度条反转              |          `boolean`           | `false`   |
|   disabled    |                是否禁用滑块                |          `boolean`           | `false`   |
|   readonly    | 是否为只读状态，只读状态下无法修改滑块的值 |          `boolean`           | `false`   |
|   vertical    |                是否垂直展示                |          `boolean`           | `false`   |

### Events

|  事件名   |           说明           |                                               类型                                                |
| :-------: | :----------------------: | :-----------------------------------------------------------------------------------------------: |
|  change   | 当绑定值变化时触发的事件 |                 `(e: { detail: { value: number \| [number, number] } }) => void`                  |
| dragstart |      开始拖动时触发      |                  `(e: { detail: { event: TouchEvent \| MouseEvent } }) => void`                   |
|  dragend  |      结束拖动时触发      | `(e: { detail: { value: number \| [number, number], event: TouchEvent \| MouseEvent } }) => void` |

### Slots

|     名称     |                说明                |
| :----------: | :--------------------------------: |
|    button    |           自定义滑块按钮           |
| left-button  | 自定义左侧滑块按钮（双滑块模式下） |
| right-button | 自定义右侧滑块按钮（双滑块模式下） |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                                 | 说明           | 默认值                      |
| ------------------------------------ | -------------- | --------------------------- |
| `--quark-slider-active-background`   | 激活态背景色   | `#1989fa`                   |
| `--quark-slider-inactive-background` | 非激活态背景色 | `#e5e5e5`                   |
| `--quark-slider-disabled-opacity`    | 禁用态透明度   | `0.5`                       |
| `--quark-slider-bar-height`          | 进度条高度     | `2px`                       |
| `--quark-slider-button-width`        | 按钮宽度       | `24px`                      |
| `--quark-slider-button-height`       | 按钮高度       | `24px`                      |
| `--quark-slider-button-radius`       | 按钮圆角       | `50%`                       |
| `--quark-slider-button-background`   | 按钮背景色     | `#fff`                      |
| `--quark-slider-button-shadow`       | 按钮阴影       | `0 1px 2px rgba(0,0,0,0.5)` |
