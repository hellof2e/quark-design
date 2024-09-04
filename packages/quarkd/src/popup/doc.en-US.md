# Popup

### Introduction

Popup layer

### Installation

```tsx
import "quarkd/lib/popup";
```

### Basic Usage

```jsx
<quark-popup
  position="bottom"
  :open="open"
  @close="open = false">
  <div>First line</div>
  <div>Second line</div>
</quark-popup>

<div @click="open = true">Trigger Popup display</div>
```

### Popup Position

Set the popup position through the position attribute. The default is centered. It can be set to top, bottom, left, or right.

```html
<quark-popup position="top" :open="open" />
```

### Close Icon

After setting the closeable property, the close icon will be displayed in the upper right corner of the popup layer.

```html
<quark-popup position="bottom" :open="open" closeable />
```

### Forbid mask click

forbid mask click

```html
<quark-popup position="bottom" :open="open" forbidmaskclick />
```

### Round Corner

After setting the round property, the popup window will add different rounded corner styles according to the popup position.

```html
<quark-popup position="bottom" :open="open" round />
```

### Internal Scroll Setting

You can specify the element that needs to scroll by setting the `scrollid`.

```html
<quark-popup
  position="center"
  :open="openScroll"
  @close="openScroll = false"
  scrollid="scroll-it" // Set the id of the element that needs to scroll
>
  <div class="fix-content">Fixable content</div>
  <!-- The following elements can scroll -->
  <div id="scroll-it" class="scroll-list">
    <div v-for="item in 100" :key="item">
      {{ item }}
    </div>
  </div>
</quark-popup>
```

## API

### Props

| Attribute       | Description                                   | Type                          | Default   |
| --------------- | --------------------------------------------- | ----------------------------- | --------- |
| open            | Popup status                                  | `boolean`                     | `require` |
| position        | Popup position                                | `top` `bottom` `left` `right` | `bottom`  |
| round           | Whether to show round corner                  | `boolean`                     | `false`   |
| closeable       | Whether to show close icon                    | `boolean `                    | `false`   |
| forbidmaskclick | Whether forbid mask click                     | `boolean`                     | `false`   |
| safearea        | Whether to enable bottom safe area adaptation | `boolean`                     | `false`   |
| zindex          | Popup z-index                                 | `number、string `             | -         |

### Event

| Event        | Description                   | Type          |
| ------------ | ----------------------------- | ------------- |
| clickoverlay | Emitted when overlay click    | `() => void`  |
| close        | Emitted when Popup will close | `（）=> void` |
| closed       | Emitted after Popup closed    | `（）=> void` |
| opened       | Emitted after Popup opened    | `（）=> void` |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to[Theme customization](#/zh-CN/guide/theme)。

| Name                    | Description                                                                                         | Default Value        |
| ----------------------- | --------------------------------------------------------------------------------------------------- | -------------------- |
| `--popup-mask-color`    | Mask background                                                                                     | `rgba(0, 0, 0, 0.7)` |
| `--popup-z-index`       | z-index                                                                                             | `999`                |
| `--popup-bg`            | popup content area background                                                                       | `#fff`               |
| `--popup-width`         | popup content area width                                                                            | `auto`               |
| `--popup-height`        | popup content area height                                                                           | `auto`               |
| `--popup-max-width`     | Popup content area max width                                                                        | `90%`                |
| `--popup-min-width`     | Popup content area min width                                                                        | -                    |
| `--popup-max-height`    | Popup content area max height                                                                       | `90%`                |
| `--popup-min-height`    | Popup content area min height                                                                       | `200px`              |
| `--popup-border-radius` | Popup border radius size(Only when the position is bottom and the props setting round takes effect) | `200px`              |
