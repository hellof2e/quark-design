# Overlay

### Intro

Create a mask layer to emphasize specific page elements and prevent users from performing other operations.

### Install

```tsx
import { Overlay } from "@quarkd/quark-react";
```

### Basic Usage

```js
export default () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <div onClick={handleClick}></div>
      <Overlay open={open} onClose={handleClose} />
    </div>
  );
};
```

### Embedded Content

```html
<Overlay open="{open}" onClose="{handleClose}">
  <div class="content"></div>
</Overlay>
<style>
  .content {
    border-radius: 4px;
    width: 200px;
    height: 200px;
    background-color: white;
  }
</style>
```

## API

### Props

| Attribute | Description            | Type         | Default   |
| --------- | ---------------------- | ------------ | --------- |
| open      | Whether to show picker | `boolean`    | `require` |
| zindex    | z-index                | `number `    | `999`     |
| onClose   | Close mask             | `() => void` | `require` |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to [Theme customization](#/zh-CN/guide/theme)。

| Name                   | Description     | Default Value        |
| ---------------------- | --------------- | -------------------- |
| `--overlay-background` | Mask background | `rgba(0, 0, 0, 0.7)` |
