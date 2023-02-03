# CheckBox

### Intro

A group of options for multiple choices.

<br/>
To toggle between the checked and unchecked status.

### Install

```tsx
import "quarkd/lib/checkbox";
```

### Basic Usage

To change the checked status, bind and set `checked` prop on the CheckBox.

```html
<quark-checkbox :checked="mycheck" @change="onChange">checked</quark-checkbox>
<quark-checkbox checked="false">unchecked</quark-checkbox>
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

### Shape

Checkbox shape supports `round` and `square`, the default is `round`.

```html
<quark-checkbox checked="true">round(default)</quark-checkbox>
<quark-checkbox checked="true" shape="square">square</quark-checkbox>
```

### Size

Checkbox size supports `normal` and `big`, the default is `normal`.

```html
<quark-checkbox checked="true" shape="round" size="big"
  >default shape - big</quark-checkbox
>
<quark-checkbox checked="true" shape="square" size="big"
  >square - big</quark-checkbox
>
```

### Disabled

To disable checkbox, add `disabled` prop on the CheckBox.

```html
<quark-checkbox checked="true" disabled>checked - disabled</quark-checkbox>
<quark-checkbox checked="false" disabled>unchecked - disabled</quark-checkbox>
```

### Checkbox Group

Checkboxes support grouping.<br/>>
Due to technical limitations, the value of the checkbox group needs to be a string consisting of an array via the join() method.

```html
<quark-checkbox-group :value="groupValue.join()" @change="onGroupChange">
  <quark-checkbox name="apple">Apple</quark-checkbox>
  <quark-checkbox name="orange" disabled>Orange</quark-checkbox>
  <quark-checkbox name="banana">Banana</quark-checkbox>
</quark-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      groupValue: ["Apple", "Orange"],
    };
  },
  methods: {
    onGroupChange({ detail }) {
      this.groupValue = detail.value;
    },
  },
};
```

### Custom Style

Custom checked color

```html
<quark-checkbox checked="true">Checkbox-Custom checked color</quark-checkbox>
```

```css
:quark-checkbox {
  --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640 100%);
}
```

## API

### quark-checkbox Props

| Attribute | Description                           | Type      | Default  |
| --------- | ------------------------------------- | --------- | -------- |
| shape     | Shape，can be set to `round` `square` | `string`  | `round`  |
| size      | Size，can be set to `normal` `big`    | `string`  | `normal` |
| disabled  | Disable checkbox                      | `boolean` | `false`  |
| checked   | Check status                          | `boolean` | `false`  |

### quark-checkbox Event

| Event  | Description                                | Type                                     |
| ------ | ------------------------------------------ | ---------------------------------------- |
| change | Emitted when checkbox check status changed | `(e: {detail: {value: string}}) => void` |

### quark-checkbox-group Props

| Attribute | Description       | Type     | Default |
| --------- | ----------------- | -------- | ------- |
| value     | Specific checkbox | `string` | -       |

### quark-checkbox-Group Event

| Event  | Description                               | Type                                       |
| ------ | ----------------------------------------- | ------------------------------------------ |
| change | mitted when checkbox check status changed | `(e: {detail: {value: string[]}}) => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                      | Description                                        | Default                        |
| ------------------------- | -------------------------------------------------- | ------------------------------ |
| `--checkbox-font-size`    | checkbox label font size                           | `12px`                         |
| `--checkbox-color`        | checkbox label font color                          | `#242729`                      |
| `--checkbox-label-height` | checkbox label line-height                         | same as the height of checkbox |
| `--checkbox-size`         | checkbox size，Priority is higher than `size` prop | `16px; big: 20px`              |
| `--checkbox-background`   | checked color                                      | `#0088ff`                      |
