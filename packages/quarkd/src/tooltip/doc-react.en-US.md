# Tooltip

### Intro

Simple text prompt bubbles.

### Install

```tsx
import { Tooltip } '@quarkd/quark-react';
```

### Basic Usage

```js
export default () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip tips="bubble text" open={open} onClose={handleClose}>
        <div onClick={handleClick}>top position</div>
      </Tooltip>
    </div>
  );
};
```

### Set Tips Direction

The tips position of the bubble is controlled by the placement property.

```html
<Tooltip placement="top" tips="bubble text">
  <div>top position</div>
</Tooltip>
```

Placement supports the following values:

```tsx
top           # top middle position
topleft       # top left position
topright      # top right position
left          # left middle position
lefttop       # left top position
leftbottom    # left bottom position
right         # right middle position
righttop      # right top position
rightbottom   # left bottom position
bottom        # bottom middle position
bottomleft    # bottom left position
bottomright   # bottom right position
```

### Show Close Button

Control whether to display the close button through the closeable property.

```html
<Tooltip tips="bubble text" closeable>
  <div>top position</div>
</Tooltip>
```

### Whether To Close Automatically

Whether to automatically close is controlled by the autoclose property, and how many milliseconds it will be automatically closed by the opentime property.

```html
<Tooltip tips="bubble text" autoclose opentime="5000">
  <div>top position</div>
</Tooltip>
```

### Scroll To Close

Controls whether to close when the page is scrolled through the scrollhidden property.

```html
<Tooltip tips="bubble text" scrollhidden>
  <div>top position</div>
</Tooltip>
```

### Custom Style

```html
<Tooltip tips="bubble text">
  <div>top position</div>
</Tooltip>
<style>
  .custom-style {
    --tips-background-color: #0088ff;
    --tips-font-weight: 500;
  }
</style>
```

## API

### Props

| Attribute    | Description                                              | Type                                                                                                                          | Default Value |
| ------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- |
| open         | Whether to show tip                                      | `boolean`                                                                                                                     | `require`     |
| placement    | Position of tip                                          | `top` `topleft` `topright` `left` `lefttop` `leftbottom` `right` `righttop` `rightbottom` `bottom` `bottomleft` `bottomright` | `bottom`      |
| tips         | content of tip                                           | `string `                                                                                                                     | `require`     |
| closeable    | Whether to show close button                             | `boolean`                                                                                                                     | `false`       |
| autoclose    | Whether to automatically close after display             | `boolean`                                                                                                                     | `false`       |
| opentime     | Time from display to auto-off                            | `string`                                                                                                                      | `3000`        |
| scrollhidden | Whether to close automatically when the page is scrolled | `boolean`                                                                                                                     | `false`       |
| zindex       | z-index                                                  | `number`                                                                                                                      | `999`         |
| onClose      | tip disappear callback                                   | `() => void`                                                                                                                  | `require`     |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to [theme customization](#/zh-CN/guide/theme).

| Name                      | Description                                                                                                   | Default   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- | --------- |
| `--tips-background-color` | background color                                                                                              | `#242729` |
| `--tips-color`            | color                                                                                                         | `#fff`    |
| `--tips-font-size`        | font size                                                                                                     | `14`      |
| `--tips-font-weight`      | font weight                                                                                                   | `400`     |
| `--tips-line-height`      | line height                                                                                                   | `1.4`     |
| `--tips-hspacing`         | horizontal padding                                                                                            | `8px`     |
| `--tips-vspacing`         | vertical padding                                                                                              | `6px`     |
| `--tips-margin-bottom`    | tip distance from actual display element（It takes effect when placement is top, topleft, topright）          | `6px`     |
| `--tips-margin-top`       | tip distance from actual display element（It takes effect when placement is bottom, bottomleft, bottomright） | `6px`     |
| `--tips-margin-right`     | tip distance from actual display element（It takes effect when placement is left, lefttop, leftbottom）       | `16px`    |
| `--tips-margin-left`      | tip distance from actual display element（It takes effect when placement is right, righttop, rightbottom）    | `16px`    |
