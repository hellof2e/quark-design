# Stepper

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 安装使用

```tsx
import "quarkd/lib/stepper";
```

### 基础用法

```html
<quark-stepper value="1"></quark-stepper>
```

### 限制输入范围

```html
<quark-stepper min="5" max="12" />
```

### 步长设置

```html
<quark-stepper steps="2" />
```

### 限制输入整数

```html
<quark-stepper interger />
```

### 禁用状态

```html
<quark-stepper disabled />
```

### 自定义样式

```html
<quark-stepper />
<style>
  quark-stepper {
    --stepper-input-text-color: black;
    --stepper-input-background-color: white;
    --stepper-input-font-size: 18px;
    --stepper-button-border-radius: 50%;
    --stepper-button-border-width: 1px;
    --stepper-plus-background-color: red;
    --stepper-plus-color: white;
    --stepper-minus-background-color: white;
    --stepper-minus-color: #ee0a24;
    --stepper-minus-border-color: #ee0a24;
  }
</style>
```

### 变更回调

```html
<quark-stepper @change="change" :value="value" />
```

```js
export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    change({ detail }) {
      this.value = detail.value;
    },
  },
};
```

## API

### Props

|     参数      |              说明              |   类型    | 默认值  |
| :-----------: | :----------------------------: | :-------: | :------ |
|      min      |             最小值             | `number`  |         |
|      max      |             最大值             | `number`  |         |
|     steps     |  步数(每次点击改变的数值间隔)  | `number`  | `1`     |
|     name      | 标识符，会在`change`事件中返回 | `string`  |         |
| decimallength |       固定显示的小数位数       | `number`  |         |
|    integer    |       是否只允许输入整数       | `boolean` | `false` |
|   disabled    |         是否禁用步进器         | `boolean` | `false` |

### Events

|  事件名   |           说明           |                          类型                           |
| :-------: | :----------------------: | :-----------------------------------------------------: |
|  change   | 当绑定值变化时触发的事件 | `(e:{detail: { name: string, value: number }}) => void` |
| overlimit |  点击不可用的按钮时触发  |        `(e:{detail: { action: string}}) => void`        |
|   plus    |    点击增加按钮时触发    |                      `() => void`                       |
|   minus   |    点击减少按钮时触发    |                      `() => void`                       |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                               | 说明                          | 默认值    |
| ---------------------------------- | ----------------------------- | --------- |
| `--stepper-input-text-color`       | stepper-input 字体颜色        | `#e8e8e8` |
| `--stepper-input-background-color` | stepper-input 背景颜色        | `#f2f3f5` |
| `--stepper-input-width`            | stepper-input 宽度            | `32px`    |
| `--stepper-input-height`           | stepper-input 高度            | `28px`    |
| `--stepper-input-border-color`     | stepper-input 边框颜色        |           |
| `--stepper-input-border-width`     | stepper-input 边框宽度        | `1px`     |
| `--stepper-input-font-size`        | stepper-input 字体大小        | `14px`    |
| `--stepper-input-line-height`      | stepper-input 行高            | `normal`  |
| `--stepper-input-border-radius`    | stepper-input 边框圆角        |           |
| `--stepper-button-border-radius`   | stepper-button 边框圆角       |           |
| `--stepper-button-border-height`   | stepper-button 高度           | `28px`    |
| `--stepper-button-border-width`    | stepper-button 宽度           | `28px`    |
| `--stepper-button-disabled-color`  | stepper 禁用时颜色            | `#c8c9cc` |
| `--stepper-minus-color`            | stepper-minus-button 字体颜色 | `#e8e8e8` |
| `--stepper-minus-background-color` | stepper-minus-button 背景颜色 | `#f2f3f5` |
| `--stepper-plus-color`             | stepper-plus-button 字体颜色  | `#e8e8e8` |
| `--stepper-plus-background-color`  | stepper-plus-button 背景颜色  | `#f2f3f5` |
| `--stepper-minus-border-color`     | stepper-minus-button 边框颜色 |           |
| `--stepper-plus-border-color`      | stepper-plus-button 边框颜色  |           |
