# MarketDialog

### Intro

Pure picture popup

### Install

```tsx
import { MarketDialog } from "@quarkd/quark-react";
```

### Basic Usage

```tsx
export default () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <MarketDialog
      open={open}
      onClose={close}
      url="https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"
    />
  );
};
```

### Tabbed Call

For example, we need to customize the image rounded corners

```tsx
export default () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <MarketDialog open={open} onClose={close}>
      <img
        slot="market"
        src="https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"
      />
    </MarketDialog>
  );
};
```

## API

### Props

| Attribute | Description                            | Type         | Default   |
| --------- | -------------------------------------- | ------------ | --------- |
| open      | Control popup window show and hide     | `boolean`    | `require` |
| url       | popup image url                        | `string`     |           |
| size      | The size of close button               | `string`     | `32`      |
| onClose   | Click the close icon callback function | `() => void` |           |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to [Theme customization](#/zh-CN/guide/theme)。

| Name                     | Description  | Default |
| ------------------------ | ------------ | ------- |
| `--market-dialog-width`  | Image width  | `288px` |
| `--market-dialog-radius` | Image Radius | `12px`  |
