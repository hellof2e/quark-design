# Checkbox 复选框

### 介绍

复选框
<br/>
用于在选中和非选中状态之间进行切换。

### 安装使用

```tsx
import { Checkbox } from "@quarkd/quark-react";
```

### 复选框基础用法

复选框通过 `checked` 绑定勾选状态。

```js
export default () => {
  const [checked, setCheck] = useState(true);

  const handleChange = () => {
    setCheck(() => !checked);
  };

  return (
    <>
      <Checkbox checked={checked} onChange={handleChange}>
        Apple
      </Checkbox>
      <Checkbox checked={false}>Orange</Checkbox>
    </>
  );
};
```

### 复选框形状

复选框支持`round`、`square`两种形状，默认为 `round`。

```html
<Checkbox checked={true}>圆形(默认)</Checkbox>
<Checkbox checked={true} shape="square">方形</Checkbox>
```

### 复选框大小

复选框大小支持 `normal`、`big` 两种，默认为 `normal`。

```html
<Checkbox checked={true} shape="round" size="big">默认形状-大</Checkbox>
<Checkbox checked={true} shape="square" size="big">方形-大</Checkbox>
```

### 复选框禁用状态

复选框支持禁用

```html
<Checkbox checked={true} disabled>已选-禁用</Checkbox>
<Checkbox checked={true} disabled>未选-禁用</Checkbox>
```

### 复选框群组

复选框支持成组出现
由于技术限制，复选框组的值需要是一个由数组通过 join()方法组成的字符串

```jsx
export default () => {
  const [groupValue, setGroupValue] = useState(["苹果", "橘子"]);

  const onGroupChange = ({ detail }) => {
    setGroupValue(() => detail.value);
  };

  return (
    <>
      <CheckboxGroup value={groupValue.join()} onChange={onGroupChange}>
        <Checkbox name="apple">苹果</Checkbox>
        <Checkbox name="warning" disabled>
          橘子
        </Checkbox>
        <Checkbox name="banana">香蕉</Checkbox>
      </CheckboxGroup>
    </>
  );
};
```

### 自定义复选框风格

复选框选中颜色自定义

```html
<Checkbox checked={true}>复选框-选中颜色自定义</Checkbox>

<!-- CSS -->
Checkbox { --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640
100%); }
```

## API

### Checkbox Props

| 参数     | 说明                                | 类型                                  | 默认值   |
| -------- | ----------------------------------- | ------------------------------------- | -------- |
| shape    | 形状，可选值为 `round` `square`     | `string`                              | `round`  |
| size     | 复选框大小，可选值为 `normal` `big` | `string`                              | `normal` |
| disabled | 复选框禁用状态                      | `boolean`                             | `false`  |
| checked  | 复选框勾选状态                      | `boolean`                             | `false`  |
| onChange | 复选框勾选状态变化时回调函数        | `(e: { detail: { value: string } }) => void` |

### Checkbox-group Props

| 参数     | 说明                           | 类型                                      | 默认值 |
| -------- | ------------------------------ | ----------------------------------------- | ------ |
| value    | 指定选中的选项                 | `string`                                  | -      |
| onChange | 复选框组勾选状态变化时回调函数 | `(e: { detail: { value: string[] } }) => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                      | 说明                                      | 默认值            |
| ------------------------- | ----------------------------------------- | ----------------- |
| `--checkbox-font-size`    | Checkbox 文字大小                         | `12px`            |
| `--checkbox-color`        | Checkbox 文字颜色                         | `#242729`         |
| `--checkbox-label-height` | Checkbox 文字行高                         | 和选择框高度一致  |
| `--checkbox-size`         | Checkbox 复选框尺寸，优先级高于 size 属性 | `16px; big: 20px` |
| `--checkbox-background`   | Checkbox 选中颜色                         | `#0088ff`         |
