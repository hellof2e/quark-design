# MarketDialog

### Intro

Pure picture popup

### Install

```tsx
import MarketDialog from "quarkd/lib/marketdialog";
```

### Basic Usage

```js
MarketDialog({
  url: "https://m.hellobike.com/resource/helloyun/15697/Zj-NfJdxdA.png",
});
```

### Tabbed Call

For example, we need to customize the image rounded corners

```html
<quark-market-dialog :open="open" @close="close">
  <img
    slot="market"
    src="https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"
  />
</quark-market-dialog>
```

## API

### Props

| Attribute | Description                        | Type      | Default   |
| --------- | ---------------------------------- | --------- | --------- |
| open      | Control popup window show and hide | `boolean` | `require` |
| url       | popup image url                    | `string`  |           |
| size      | The size of close button           | `string`  | `32`      |

### Event

| Event | Description                            | Callback     |
| ----- | -------------------------------------- | ------------ |
| close | Click the close icon callback function | `() => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to [Theme customization](#/zh-CN/guide/theme)。

| Name                     | Description  | Default |
| ------------------------ | ------------ | ------- |
| `--market-dialog-width`  | Image width  | `288px` |
| `--market-dialog-radius` | Image Radius | `12px`  |
