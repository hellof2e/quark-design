# Switch

### Intro

Used to switch between open and closed states.

### Install

```tsx
import "quarkd/lib/switch";
```

### Basic Usage

```
<quark-switch checked onchange=""></quark-switch>
```

### Disabled

```html
<quark-switch disabled></quark-switch>
```

### Custom Size

TO change switch size, set `size` prop on the Switch or alter `font-size` value of `style` prop.

```html
<quark-switch size="26px"></quark-switch>
<quark-switch style="font-size: 26px"></quark-switch>
```

### Custom Color

To custom color, set `color` and `inactivecolor` prop on the Switch.

```html
<quark-switch color="red" inactivecolor="#08f"></quark-switch>
```

### Loading

```html
<quark-switch loading></quark-switch>
```

### Change Event

```html
<quark-switch @change="onChange" :checked="checked"></quark-switch>
```

```js
<script>
export default {
  data() {
    return {
      checked: false
    }
  },
  methods: {
    onChange(e) {
      data.checked = e.detail.value;
    }
  }
}
</script>
```

## API

### Props

| Attribute     | Description                    | Type      | Default   |
| ------------- | ------------------------------ | --------- | --------- |
| checked       | On/Off                         | `boolean` | `false`   |
| disabled      | Disable switch                 | `boolean` | `false`   |
| loading       | Loading switch                 | `boolean` | `false`   |
| size          | Switch size                    | `number`  | `16px`    |
| color         | Background color when active   | `string`  | `#08f`    |
| inactivecolor | Background color when inactive | `string`  | `#e1e6eb` |

### Event

| Event  | Description                       | Arguments                                    |
| ------ | --------------------------------- | -------------------------------------------- |
| change | Emitted when check status changed | `e: ({ detail: { value: string } }) => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                   | Description        | Default          |
| ---------------------- | ------------------ | ---------------- |
| `--switch-label-width` | switch label width | `50px / 3.125em` |
