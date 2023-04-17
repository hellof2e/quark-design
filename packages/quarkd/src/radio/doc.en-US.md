# Radio

### Intro

Single radio, Single selection among multiple options.

## Install

```tsx
import "quarkd/lib/radio";
```

### Basic Usage

Generally appear in groups. Use `value` to bind the name of checked radio.

```html
<quark-radio-group :value="value" @change="onChange">
  <quark-radio name="apple">Apple</quark-radio>
  <quark-radio name="banana">Banana</quark-radio>
</quark-radio-group>
```

```javascript
export default {
  data() {
    return {
      value: "apple", // initial value: apple
    };
  },
  methods: {
    onChange({ detail }) {
      this.value = detail.value;
    },
  },
};
```

### Shape

Radio shape supports `round` and `square`, the default is `round`.

```html
<quark-radio-group :value="value" @change="onChange">
  <quark-radio name="apple">Round(default)</quark-radio>
  <quark-radio name="banana" shape="square">Square</quark-radio>
</quark-radio-group>
```

### Size

Radio size supports `normal` and `big`, the default is `normal`.

```html
<quark-radio-group :value="value" @change="onChange">
  <quark-radio name="apple" shape="square" size="big">Square(Big)</quark-radio>
  <quark-radio name="banana" size="big">Round(Big)</quark-radio>
</quark-radio-group>
```

### Disabled

To disable radio, add `disabled` prop on the Radio.

```html
<quark-radio checked="true" disabled>checked - disabled</quark-radio>
<quark-radio checked="false" disabled>unchecked - disabled</quark-radio>
<quark-radio checked="true" shape="square" disabled
  >square - checked - disabled</quark-radio
>
<quark-radio checked="false" shape="square" disabled
  >square - unchecked - disabled</quark-radio
>
```

### Custom Style

Custom checked color

```html
<quark-radio checked="true">Radio-Custom checked color</quark-radio>
```

```css
:quark-radio {
  --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640 100%);
}
```

## API

### Props: quark-radio

| Attribute | Description                           | Type      | Default  |
| --------- | ------------------------------------- | --------- | -------- |
| shape     | Shape，can be set to `round` `square` | `string`  | `round`  |
| size      | Size，can be set to `normal` `big`    | `string ` | `normal` |
| disabled  | Disable radio                         | `boolean` | `false`  |

### Props: quark-radio-group

| Attribute | Description    | Type     | Default |
| --------- | -------------- | -------- | ------- |
| value     | Specific radio | `String` | -       |

### Event: quark-radio-Group

| Event  | Description                             | Type                                     |
| ------ | --------------------------------------- | ---------------------------------------- |
| change | Emitted when radio check status changed | `(e: {detail: {value: string}}) => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                   | Description                                     | Default                     |
| ---------------------- | ----------------------------------------------- | --------------------------- |
| `--radio-font-size`    | radio label font size                           | `12px`                      |
| `--radio-color`        | radio label font color                          | `#242729 `                  |
| `--radio-label-height` | radio label line-height                         | same as the height of radio |
| `--radio-size`         | radio size，Priority is higher than `size` prop | `16px; big: 20px`           |
| `--radio-background`   | checked color                                   | `#0088ff`                   |
