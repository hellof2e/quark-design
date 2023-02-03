# Popup

### Intro

Pop-up windows

### Install

```tsx
import { Popup } from "@quarkd/quark-react";
```

### Basic Usage

```js
export default () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <div onClick={handleOpen}>
        Basic Usage
      </div>
      <Popup open={open} onClose={handleClose}>
        <div>First Line</div>
        <div>Second Line</div>
        <div>Third Line</div>
        <div>Forth Line</div>
        <div>Fifth Line</div>
        <div>Six Line</div>
      </Popup>
    </div>
  );
};
```

### Position

Use position prop to set popup display position.By default, the popup is centered and can be set to top, bottom, left, right.

```html
<Popup position="top" :open="open" />
```

### Close Icon

After setting the closeable property, the close icon will be displayed in the upper right corner of the popup layer.

```html
<Popup position="bottom" :open="open" closeable />
```
### Forbid mask click

forbid mask click

```html
<Popup position="bottom" :open="open" forbidmaskclick />
```
### Round Corner

After setting the round property, the popup window will add different rounded corner styles according to the popup position.

```html
<Popup position="bottom" :open="open" round />
```

## API

### Props

| Attribute | Description                                   | Type                          | Default   |
| --------- | --------------------------------------------- | ----------------------------- | --------- |
| open      | Popup status                                  | `boolean`                     | `require` |
| position  | Popup position                                | `top` `bottom` `left` `right` | `bottom`  |
| round     | Whether to show round corner                  | `boolean`                     | `false`   |
| closeable | Whether to show close icon                    | `boolean `                    | `false`   |
| safearea  | Whether to enable bottom safe area adaptation | `boolean`                     | `false`   |
| zindex    | Popup z-index                                 | `number、string `             | -         |
| onClose  | Emitted when Popup will close                  | `（）=> void`                 | -         |
| onClosed  | Emitted after Popup closed                 | `（）=> void`                 | -         |
| onOpened  | Emitted after Popup opened                  | `（）=> void`                 | -         |
## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to[Theme customization](#/zh-CN/guide/theme)。

| Name                    | Description                                                                                         | Default Value        |
| ----------------------- | --------------------------------------------------------------------------------------------------- | -------------------- |
| `--popup-mask-color`    | Mask background                                                                                     | `rgba(0, 0, 0, 0.7)` |
| `--popup-z-index`       | z-index                                                                                             | `999`                |
| `--popup-max-width`     | Popup content area max width                                                                        | `90%`                |
| `--popup-min-width`     | Popup content area min width                                                                        | -                    |
| `--popup-max-height`    | Popup content area max height                                                                       | `90%`                |
| `--popup-min-height`    | Popup content area min height                                                                       | `200px`              |
| `--popup-border-radius` | Popup border radius size(Only when the position is bottom and the props setting round takes effect) | `200px`              |
