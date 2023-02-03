# Radio 单选框

### 介绍

单选框，用于在多个选项中选择单个结果。

### 安装使用

```tsx
import { Radio } from "@quarkd/quark-react";
```

### 单选框基础用法

一般成组出现，通过 value 和 name 的匹配来绑定勾选。

```tsx
import { useState } from "react";
import { Radio, RadioGroup } from "@quarkd/quark-react";

export default () => {
  const [value1, setValue1] = useState("apple");
  const handleChange = ({ detail }) => {
    setValue(() => detail.value);
  };

  return (
    <>
      <RadioGroup value={value} onChange={handleChange}>
        <Radio name="apple">苹果</Radio>
        <Radio name="banana">香蕉</Radio>
      </RadioGroup>
    </>
  );
};
```

### 单选框形状

单选框支持`round`、`square`两种形状，默认为 `round`。

```tsx
import { useState } from "react";
import { Radio, RadioGroup } from "@quarkd/quark-react";

export default () => {
  const [value1, setValue1] = useState("apple");
  const handleChange = ({ detail }) => {
    setValue(() => detail.value);
  };

  return (
    <>
      <RadioGroup value={value} onChange={handleChange}>
        <Radio name="apple">圆形(默认)</Radio>
        <Radio name="banana" shape="square">
          方形
        </Radio>
      </RadioGroup>
    </>
  );
};
```

### 单选框大小

单选框大小支持 `normal`、`big` 两种，默认为 `normal`。

```html
<RadioGroup value="{value}">
  <Radio name="apple" shape="square" size="big">方形(大)</Radio>
  <Radio name="banana" size="big">圆形(大)</Radio>
</RadioGroup>
```

### 单选框禁用

单选框支持禁用

```html
<Radio checked={true} disabled>已选-禁用</Radio>
<Radio checked={false} disabled>未选-禁用</Radio>
<Radio checked={true} shape="square" disabled>方形-已选-禁用</Radio>
<Radio checked={false} shape="square" disabled>方形-未选-禁用</Radio>
```

### 单选框风格

单选框选中颜色自定义

```html
<Radio className="my-radio" checked="true">选中颜色自定义</Radio>

<!-- CSS -->
.my-radio { --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640
100%); }
```

## API

### Radio Props

| 参数     | 说明                                | 类型      | 默认值   |
| -------- | ----------------------------------- | --------- | -------- |
| shape    | 形状，可选值为 `round` `square`     | `string`  | `round`  |
| size     | 单选框大小，可选值为 `normal` `big` | `string`  | `normal` |
| disabled | 单选框禁用状态                      | `boolean` | `false`  |

### RadioGroup Props

| 参数     | 说明           | 类型                                  | 默认值 |
| -------- | -------------- | ------------------------------------- | ------ |
| value    | 指定选中的选项 | `string`                              | -      |
| onChange | 变化时回调函数 | `(e: { detail: { value: string } }) => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                   | 说明                                   | 默认值            |
| ---------------------- | -------------------------------------- | ----------------- |
| `--radio-font-size`    | radio 文字大小                         | `12px`            |
| `--radio-color`        | radio 文字颜色                         | `#242729 `        |
| `--radio-label-height` | radio 文字行高                         | 和选择框高度一致  |
| `--radio-size`         | radio 单选框尺寸，优先级高于 size 属性 | `16px; big: 20px` |
| `--radio-background`   | radio 选中颜色                         | `#0088ff`         |
