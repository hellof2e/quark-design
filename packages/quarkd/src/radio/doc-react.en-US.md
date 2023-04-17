# Radio

### Intro

Single radio, Single selection among multiple options.

## Install

```tsx
import { Radio } from "@quarkd/quark-react";
```

### Basic Usage

Generally appear in groups. Use `value` to bind the name of checked radio.

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
        <Radio name="apple">Apple</Radio>
        <Radio name="banana">Banana</Radio>
      </RadioGroup>
    </>
  );
};
```

### Shape

Radio shape supports `round` and `square`, the default is `round`.

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
        <Radio name="apple">Round(default)</Radio>
        <Radio name="banana" shape="square">
          Square
        </Radio>
      </RadioGroup>
    </>
  );
};
```

### Size

Radio size supports `normal` and `big`, the default is `normal`.

```html
<RadioGroup value="{value}">
  <Radio name="apple" shape="square" size="big">Square(Big)</Radio>
  <Radio name="banana" size="big">Round(Big)</Radio>
</RadioGroup>
```

### Disabled

To disable radio, add `disabled` prop on the Radio.

```html
<Radio checked="{true}" disabled>checked - disabled</Radio>
<Radio checked="{false}" disabled>unchecked - disabled</Radio>
<Radio checked="{true}" shape="square" disabled
  >square - checked - disabled</Radio
>
<Radio checked="{false}" shape="square" disabled
  >square - unchecked - disabled</Radio
>
```

### Custom Style

Custom checked color

```html
<Radio className="my-radio" checked="true">Radio-Custom checked color</Radio>

<!-- CSS -->
.my-radio { --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640
100%); }
```

## API

### Radio Props

| Attribute | Description                           | Type      | Default  |
| --------- | ------------------------------------- | --------- | -------- |
| shape     | Shape，can be set to `round` `square` | `string`  | `round`  |
| size      | Size，can be set to `normal` `big`    | `string ` | `normal` |
| disabled  | Disable radio                         | `boolean` | `false`  |

### RadioGroup Props

| 参数     | 说明                                                                                 | 类型     | 默认值 |
| -------- | ------------------------------------------------------------------------------------ | -------- | ------ |
| value    | Specific radio                                                                       | `String` | -      |
| onChange | Emitted when radio check status changed `(e: { detail: { value: string } }) => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                   | Description                                     | Default                     |
| ---------------------- | ----------------------------------------------- | --------------------------- |
| `--radio-font-size`    | radio label font size                           | `12px`                      |
| `--radio-color`        | radio label font color                          | `#242729 `                  |
| `--radio-label-height` | radio label line-height                         | same as the height of radio |
| `--radio-size`         | radio size，Priority is higher than `size` prop | `16px; big: 20px`           |
| `--radio-background`   | checked color                                   | `#0088ff`                   |
