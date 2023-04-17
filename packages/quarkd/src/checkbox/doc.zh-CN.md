# CheckBox 复选框

### 介绍

用于在选中和非选中状态之间进行切换。

### 安装使用

```tsx
import "quarkd/lib/checkbox";
```

### 复选框基础用法

复选框通过 `checked` 绑定勾选状态。

```html
<quark-checkbox :checked="mycheck" @change="onChange">勾选</quark-checkbox>
<quark-checkbox checked="false">不勾选</quark-checkbox>
```

```javascript
export default {
  data() {
    return {
      mycheck: true,
    };
  },
  methods: {
    onChange({ detail }) {
      this.mycheck = detail.value;
    },
  },
};
```

### 复选框形状

复选框支持`round`、`square`两种形状，默认为 `round`。

```html
<quark-checkbox checked="true">圆形(默认)</quark-checkbox>
<quark-checkbox checked="true" shape="square">方形</quark-checkbox>
```

### 复选框大小

复选框大小支持 `normal`、`big` 两种，默认为 `normal`。

```html
<quark-checkbox checked="true" shape="round" size="big"
  >默认形状-大</quark-checkbox
>
<quark-checkbox checked="true" shape="square" size="big"
  >方形-大</quark-checkbox
>
```

### 复选框禁用状态

复选框支持禁用

```html
<quark-checkbox checked="true" disabled>已选-禁用</quark-checkbox>
<quark-checkbox checked="false" disabled>未选-禁用</quark-checkbox>
```

### 复选框群组

复选框支持成组出现
由于技术限制，复选框组的值需要是一个由数组通过 join()方法组成的字符串

```html
<quark-checkbox-group :value="groupValue.join()" @change="onGroupChange">
  <quark-checkbox name="apple">苹果</quark-checkbox>
  <quark-checkbox name="warning" disabled>橘子</quark-checkbox>
  <quark-checkbox name="banana">香蕉</quark-checkbox>
</quark-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      groupValue: ["苹果", "橘子"],
    };
  },
  methods: {
    onGroupChange({ detail }) {
      this.groupValue = detail.value;
    },
  },
};
```

### 自定义复选框风格

复选框选中颜色自定义

```html
<quark-checkbox checked="true">复选框-选中颜色自定义</quark-checkbox>
```

```css
:quark-checkbox {
  --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640 100%);
}
```

## API

### quark-checkbox Props

| 参数     | 说明                                | 类型      | 默认值   |
| -------- | ----------------------------------- | --------- | -------- |
| shape    | 形状，可选值为 `round` `square`     | `string`  | `round`  |
| size     | 复选框大小，可选值为 `normal` `big` | `string`  | `normal` |
| disabled | 复选框禁用状态                      | `boolean` | `false`  |
| checked  | 复选框勾选状态                      | `boolean` | `false`  |

### quark-checkbox Event

| 参数   | 说明                         | 类型                                         |
| ------ | ---------------------------- | -------------------------------------------- |
| change | 复选框勾选状态变化时回调函数 | `(e: { detail: { value: string } }) => void` |

### quark-checkbox-group Props

| 参数  | 说明           | 类型     | 默认值 |
| ----- | -------------- | -------- | ------ |
| value | 指定选中的选项 | `string` | -      |

### quark-checkbox-Group Event

| 参数   | 说明                           | 类型                                           |
| ------ | ------------------------------ | ---------------------------------------------- |
| change | 复选框组勾选状态变化时回调函数 | `(e: { detail: { value: string[] } }) => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                      | 说明                                      | 默认值            |
| ------------------------- | ----------------------------------------- | ----------------- |
| `--checkbox-font-size`    | checkbox 文字大小                         | `12px`            |
| `--checkbox-color`        | checkbox 文字颜色                         | `#242729`         |
| `--checkbox-label-height` | checkbox 文字行高                         | 和选择框高度一致  |
| `--checkbox-size`         | checkbox 复选框尺寸，优先级高于 size 属性 | `16px; big: 20px` |
| `--checkbox-background`   | checkbox 选中颜色                         | `#0088ff`         |
