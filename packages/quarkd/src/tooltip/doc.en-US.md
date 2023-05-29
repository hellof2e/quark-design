# Tooltip

### Intro

Simple text prompt bubbles.

### Install

```tsx
import "quarkd/lib/tooltip";
```

### Set Tips Direction

The tips position of the bubble is controlled by the placement property.

```tsx
<quark-tooltip placement="top" tips="bubble text">
  <div>top position</div>
</quark-tooltip>
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

### Set tips Size

The tips size of the bubble is controlled by the size property. Size supports 2 types: `large` and the default.

```tsx
<quark-tooltip placement="top" size="large" tips="bubble text">
  <div>large Size</div>
</quark-tooltip>
```

### Show Close Button

Control whether to display the close button through the closeable property.

```html
<quark-tooltip
  placement="top"
  tips="bubble text"
  closeable
  :open="open"
  @close="close"
>
  <div @click="click">top position</div>
</quark-tooltip>
```

```JS
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    click() {
      this.open = true
    },
    close() {
      this.open = false
    }
  }
};
```

### Whether To Close Automatically

Whether to automatically close is controlled by the autoclose property, and how many milliseconds it will be automatically closed by the opentime property.

```html
<quark-tooltip
  placement="top"
  tips="bubble text"
  autoclose
  opentime="5000"
  :open="open"
  @close="close"
>
  <div @click="click">top position</div>
</quark-tooltip>
```

```JS
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    click() {
      this.open = true
    },
    close() {
      this.open = false
    }
  }
};
```

### Scroll To Close

Controls whether to close when the page is scrolled through the scrollhidden property.

```html
<quark-tooltip
  placement="top"
  tips="bubble text"
  scrollhidden
  :open="open"
  @close="close"
>
  <div @click="click">top position</div>
</quark-tooltip>
```

```JS
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    click() {
      this.open = true
    },
    close() {
      this.open = false
    }
  }
};
```

### Custom Style

```html
<quark-tooltip
  placement="top"
  tips="bubble text"
  :open="open"
  class="custom-style"
>
  <div @click="click">top position</div>
</quark-tooltip>
<style>
  .custom-style {
    --tips-background-color: #0088ff;
    --tips-font-weight: 500;
  }
</style>
```

```JS
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    click() {
      this.open = true
    }
  }
};
```

## API

### Props

| Attribute    | Description                                              | Type                                                                                                                          | Default Value |
| ------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- |
| open         | Whether to show tip                                      | `boolean`                                                                                                                     | `require`     |
| placement    | Position of tip                                          | `top` `topleft` `topright` `left` `lefttop` `leftbottom` `right` `righttop` `rightbottom` `bottom` `bottomleft` `bottomright` | `bottom`      |
| size         | Size of tip                                              | `large`                                                                                                                       | -             |
| tips         | content of tip                                           | `string `                                                                                                                     | `require`     |
| closeable    | Whether to show close button                             | `boolean`                                                                                                                     | `false`       |
| autoclose    | Whether to automatically close after display             | `boolean`                                                                                                                     | `false`       |
| opentime     | Time from display to auto-off                            | `string`                                                                                                                      | `3000`        |
| scrollhidden | Whether to close automatically when the page is scrolled | `boolean`                                                                                                                     | `false`       |
| zindex       | z-index                                                  | `number`                                                                                                                      | `999`         |

### Events

| Event | Description            | Callback     |
| ----- | ---------------------- | ------------ |
| close | tip disappear callback | `() => void` |

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
