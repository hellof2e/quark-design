# Switch

### Intro

Used to switch between open and closed states.

### Install

```tsx
import { Switch } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Swtich checked></Swtich>
```

### Disabled

```html
<Swtich disabled></Swtich>
```

### Custom Size

TO change switch size, set `size` prop on the Switch or alter `font-size` value of `style` prop.

```html
<Swtich size="26px"></Swtich> <Swtich style="font-size: 26px"></Swtich>
```

### Custom Color

To custom color, set `color` prop on the Switch.

```html
<Swtich color="red"></Swtich>
```

### Change Event

```js
export default () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.detail.value);
  };
  return <Swtich onChange="console.log(event)" checked={checked}></Swtich>;
};
```

## API

### Props

| Attribute | Description                       | Type                                   | Default |
| --------- | --------------------------------- | -------------------------------------- | ------- |
| checked   | On/Off                            | `boolean`                              | `false` |
| disabled  | Disable switch                    | `boolean`                              | `false` |
| size      | Switch size                       | `number`                               | `16px`  |
| color     | Switch color                      | `string`                               | -       |
| onChange  | Emitted when check status changed | `e: {detail:{value: string}}）=>void ` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                   | Description        | Default          |
| ---------------------- | ------------------ | ---------------- |
| `--switch-label-width` | switch label width | `50px / 3.125em` |
