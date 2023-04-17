# Popover

### Intro

Used to display some content on top of another.

### Install

```tsx
import "quarkd/lib/popover";
```

### Basic Usage

When the Popover pops up, it is positioned based on the contents of the default slot.

```html
<quark-popover ref="popoverRef" :open="open" @close="close" @select="select">
  <div class="quark-popover" @click="click">Basic Usage</div>
</quark-popover>
```

```js
<script>
export default {
  el: 'demo',
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: 'Option1'
      }, {
        text: 'Option2'
      }, {
        text: 'Option3'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### Light Style

Popover supports light and dark styles. The default is dark style. Set the theme property to light to switch to light style.

```html
<quark-popover
  theme="light"
  ref="popoverRef"
  :open="open"
  @close="close"
  @select="select"
>
  <div class="quark-popover" @click="click">Light Style</div>
</quark-popover>
```

```js
<script>
export default {
  el: 'demo',
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: 'Option1'
      }, {
        text: 'Option2'
      }, {
        text: 'Option3'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### Show Icon

In the actions array, you can define the icon of the option through the icon field, which supports passing in image link.

```html
<quark-popover ref="popoverRef" :open="open" @close="close" @select="select">
  <div class="quark-popover" @click="click">Show Icon</div>
</quark-popover>
```

```js
<script>
export default {
  el: 'demo',
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: 'Option1',
        icon: 'https:xxx'
      }, {
        text: 'Option2',
        icon: 'https:xxx'
      }, {
        text: 'Option3'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### Disabled

In the actions array, an option can be disabled via the disabled field.

```html
<quark-popover ref="popoverRef" :open="open" @close="close" @select="select">
  <div class="quark-popover" @click="click">Disabled</div>
</quark-popover>
```

```js
<script>
export default {
  el: 'demo',
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: 'Option1',
        disabled: true
      }, {
        text: 'Option2',
        icon: 'https:xxx'
      }, {
        text: 'Option3'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### Position

The pop-up position of the bubble is controlled by the placement property.

```html
<quark-popover placement="top">
  <div class="quark-popover" @click="click">Light Style</div>
</quark-popover>
```

placement supports the following values:

```tsx
top           # Top middle position
topleft       # Top left position
topright      # Top right position
left          # Left middle position
lefttop       # Left top position
leftbottom    # Left bottom position
right         # Right middle position
righttop      # Right top position
rightbottom   # Right bottom position
bottom        # Bottom middle position
bottomleft    # Bottom Left position
bottomright   # Bottom Right position
```

### Custom Content

With the content slot, arbitrary content can be placed inside the Popover.

```html
<quark-popover :open="open" @close="close" @select="select">
  <div class="quark-popover" @click="click">Custom Style</div>
  <div slot="content" class="popover-content" @click="close">
    This is custom content
  </div>
</quark-popover>
<style>
  .popover-content {
    width: 160px;
    height: 140px;
    background-color: #4a4a4a;
    border-radius: 8px;
    color: white;
  }
</style>
```

```js
<script>
export default {
  el: 'demo',
  data() {
    return {
      open: false
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### Close Scroll

The scrollhidden property controls whether to close when the page is scrolled.

```html
<quark-popover
  scrollhidden
  ref="popoverRef"
  :open="open"
  @close="close"
  @select="select"
>
  <div class="quark-popover" @click="click">Close Scroll</div>
</quark-popover>
```

```js
<script>
export default {
  el: 'demo',
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: 'Option1',
      }, {
        text: 'Option2',
        icon: 'https:xxx'
      }, {
        text: 'Option3'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

## API

### Props

| Attribute    | Description                                              | Type                                                                                                                          | Default Value |
| ------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- |
| open         | Whether to show popover                                  | `boolean`                                                                                                                     | `false`       |
| placement    | tip popup position                                       | `top` `topleft` `topright` `left` `lefttop` `leftbottom` `right` `righttop` `rightbottom` `bottom` `bottomleft` `bottomright` | `bottom`      |
| scrollhidden | Whether to close automatically when the page is scrolled | `boolean`                                                                                                                     | `false`       |
| zindex       | popover z-index                                          | `number`                                                                                                                      | `999`         |
| theme        | popover theme mode                                       | support `light` `dark`                                                                                                        | `dark`        |

### Events

| Event  | Description                       | Type                                                          |
| ------ | --------------------------------- | ------------------------------------------------------------- |
| close  | Emitted when an action is closed  | `() => void`                                                  |
| select | Emitted when an action is clicked | `(e:{detail:{action: PopoverAction, index: number}}) => void` |

### Methods

| Method     | Description                 | Callback                             |
| ---------- | --------------------------- | ------------------------------------ |
| setActions | Used to set Popover options | `(actions: PopoverAction[]) => void` |

### Data Structure of PopoverAction

```js
type PopoverAction = {
  text: string,
  icon?: string, // url link
  disabled?: boolean,
};
```

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles.Please refer to [Theme customization](#/zh-CN/guide/theme)。

| Name                           | Description                                                                                                       | Default Value |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------- |
| `--popover-background-color`   | popover background-color                                                                                          | `#4a4a4a`     |
| `--popover-color`              | popover font-color                                                                                                | `#fff`        |
| `--popover-action-font-size`   | popover font-size                                                                                                 | `14px`        |
| `--popover-action-font-weight` | popover font-weight                                                                                               | `400`         |
| `--popover-action-line-height` | popover line-height                                                                                               | `1.4`         |
| `--popover-action-height`      | popover height                                                                                                    | `44px`        |
| `--popover-hspacing`           | popover horizontal padding                                                                                        | `16px`        |
| `--popover-margin-bottom`      | popover distance from actual display element（It takes effect when placement is top, topleft, topright）          | `6px`         |
| `--popover-margin-top`         | popover distance from actual display element（It takes effect when placement is bottom、bottomleft、bottomright） | `6px`         |
| `--popover-margin-right`       | popover distance from actual display element（It takes effect when placement is left、lefttop、leftbottom）       | `16px`        |
| `--popover-margin-left`        | popover distance from actual display element（It takes effect when placement is right、righttop、rightbottom）    | `16px`        |
