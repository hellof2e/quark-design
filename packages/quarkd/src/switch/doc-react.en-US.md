# Switch

### Intro

Used to switch between open and closed states.

### Install

```tsx
import { Switch } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Switch checked></Switch>
```

### Disabled

```html
<Switch disabled></Switch>
```

### Custom Size

TO change switch size, set `size` prop on the Switch or alter `font-size` value of `style` prop.

```html
<Switch size="26"></Switch> <Switch style="font-size: 26px"></Switch>
```

### Custom Color

To custom color, set `color` prop on the Switch.

### Loading

```html
<quark-switch loading></quark-switch>
```

```html
<Switch color="red"></Switch>
```

### Change Event

```js
export default () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.detail.value);
  };
  return <Switch onChange="console.log(event)" checked={checked}></Switch>;
};
```

## API

### Props

| Attribute     | Description                       | Type                                         | Default   |
| ------------- | --------------------------------- | -------------------------------------------- | --------- |
| checked       | On/Off                            | `boolean`                                    | `false`   |
| disabled      | Disable switch                    | `boolean`                                    | `false`   |
| loading       | Loading switch                    | `boolean`                                    | `false`   |
| size          | Switch size                       | `number`                                     | `16px`    |
| color         | Background color when active      | `string`                                     | `#08f`    |
| inactivecolor | Background color when inactive    | `string`                                     | `#e1e6eb` |
| onChange      | Emitted when check status changed | `e: ({ detail: { value: string } }) => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                   | Description        | Default          |
| ---------------------- | ------------------ | ---------------- |
| `--switch-label-width` | switch label width | `50px / 3.125em` |
