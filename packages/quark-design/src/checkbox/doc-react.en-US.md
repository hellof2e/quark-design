# Checkbox

### Intro

A group of options for multiple choices.

<br/>
To toggle between the checked and unchecked status.

### Install

```tsx
import { Checkbox } from "@quarkd/quark-react";
```

### Basic Usage

To change the checked status, bind and set `checked` prop on the Checkbox.

```jsx
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

### Shape

Checkbox shape supports `round` and `square`, the default is `round`.

```html
<Checkbox checked={true}>round(default)</Checkbox>
<Checkbox checked={true} shape="square">square</Checkbox>
```

### Size

Checkbox size supports `normal` and `big`, the default is `normal`.

```html
<Checkbox checked={true} shape="round" size="big"
  >default shape - big</Checkbox
>
<Checkbox checked={true} shape="square" size="big">square - big</Checkbox>
```

### Disabled

To disable Checkbox, add `disabled` prop on the Checkbox.

```html
<Checkbox checked={true} disabled>checked - disabled</Checkbox>
<Checkbox checked={true} disabled>unchecked - disabled</Checkbox>
```

### Checkbox Group

Checkboxes support grouping.<br/>>
Due to technical limitations, the value of the Checkbox group needs to be a string consisting of an array via the join() method.

```jsx
export default () => {
  const [groupValue, setGroupValue] = useState(["Apple", "Orange"]);

  const onGroupChange = ({ detail }) => {
    setGroupValue(() => detail.value);
  };

  return (
    <>
      <CheckboxGroup value={groupValue.join()} onChange={onGroupChange}>
        <Checkbox name="apple">Apple</Checkbox>
        <Checkbox name="warning" disabled>
          Orange
        </Checkbox>
        <Checkbox name="banana">Banana</Checkbox>
      </CheckboxGroup>
    </>
  );
};
```

### Custom Style

Custom checked color

```html
<Checkbox checked={true}>Checkbox-Custom checked color</Checkbox>

<!-- CSS -->
Checkbox { --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640
100%); }
```

## API

### Checkbox Props

| Attribute | Description                           | Type      | Default  |
| --------- | ------------------------------------- | --------- | -------- |
| shape     | Shape，can be set to `round` `square` | `string`  | `round`  |
| size      | Size，can be set to `normal` `big`    | `string`  | `normal` |
| disabled  | Disable Checkbox                      | `boolean` | `false`  |
| checked   | Check status                          | `boolean` | `false`  |

### CheckboxGroup Props

| Attribute | Description                                | Type                                     | Default |
| --------- | ------------------------------------------ | ---------------------------------------- | ------- |
| value     | Specific Checkbox                          | `string`                                 | -       |
| onChange  | Emitted when Checkbox check status changed | `(e: {detail: {value: string}}) => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                      | Description                                        | Default                        |
| ------------------------- | -------------------------------------------------- | ------------------------------ |
| `--checkbox-font-size`    | Checkbox label font size                           | `12px`                         |
| `--checkbox-color`        | Checkbox label font color                          | `#242729`                      |
| `--checkbox-label-height` | Checkbox label line-height                         | same as the height of Checkbox |
| `--checkbox-size`         | Checkbox size，Priority is higher than `size` prop | `16px; big: 20px`              |
| `--checkbox-background`   | checked color                                      | `#0088ff`                      |
