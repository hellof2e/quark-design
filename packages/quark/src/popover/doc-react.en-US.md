# Popover

### Intro

Used to display some content on top of another.

### Install

```jsx
import { Popover, PopoverRef } from "@quarkd/quark-react";
```

### Basic Usage

When the Popover pops up, it is positioned based on the contents of the default slot.

```jsx
export default () => {
  const [open, setOpen] = useState(false);
  const openRef = useRef < PopoverRef > null;
  const actions = [
    { text: "Option1" },
    { text: "Option2" },
    { text: "Option3" },
  ];
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const { current: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  return (
    <div className="demo">
      <Popover
        ref={lightRef}
        open={open}
        onClose={() => {
          handleClose();
        }}
        onSelect={({ detail }) => {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      >
        <div
          className="quark-popover"
          onClick={() => {
            handleClick();
          }}
        >
          Basic Usage
        </div>
      </Popover>
    </div>
  );
};
```

### Light Style

Popover supports light and dark styles. The default is dark style. Set the theme property to light to switch to light style.

```html
<Popover theme="light">
  <div class="Popover" @click="click">Light Style</div>
</Popover>
```

### Show Icon

In the actions array, you can define the icon of the option through the icon field, which supports passing in image link.

```js
export default () => {
  const [open, setOpen] = useState(false);
  const openRef = useRef < PopoverRef > null;
  const actions = [
    {
      text: "Option1",
      icon: "https:xxx",
    },
    {
      text: "Option2",
      icon: "https:xxx",
    },
    {
      text: "Option3",
    },
  ];

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const { current: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  return (
    <div className="demo">
      <Popover
        ref={lightRef}
        open={open}
        onClose={() => {
          handleClose();
        }}
        onSelect={({ detail }) => {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      >
        <div
          className="quark-popover"
          onClick={() => {
            handleClick();
          }}
        >
          Show Icon
        </div>
      </Popover>
    </div>
  );
};
```

### Disabled

In the actions array, an option can be disabled via the disabled field.

```js
export default () => {
  const actions = [
    {
      text: "Option1",
      icon: "https:xxx",
      disabled: true,
    },
    {
      text: "Option2",
      icon: "https:xxx",
    },
    {
      text: "Option3",
    },
  ];
  const [open, setOpen] = useState(false);
  const openRef = useRef < PopoverRef > null;

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const { current: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  return (
    <div className="demo">
      <Popover
        ref={lightRef}
        open={open}
        onClose={() => {
          handleClose();
        }}
        onSelect={({ detail }) => {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      >
        <div
          className="quark-popover"
          onClick={() => {
            handleClick();
          }}
        >
          Disabled
        </div>
      </Popover>
    </div>
  );
};
```

### Position

The pop-up position of the bubble is controlled by the placement property.

```html
<Popover placement="top">
  <div class="Popover">Light Style</div>
</Popover>
```

placement supports the following values:

```js
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
<Popover>
  <div class="Popover">Custom Style</div>
  <div slot="content" class="popover-content">This is custom content</div>
</Popover>
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

### Close Scroll

The scrollhidden property controls whether to close when the page is scrolled.

```html
<Popover scroolhidden>
  <div class="Popover">Close Scroll</div>
</Popover>
```

## API

### Props

| Attribute    | Description                                              | Type                                                                                                                          | Default Value |
| ------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- |
| open         | Whether to show popover                                  | `boolean`                                                                                                                     | `false`       |
| placement    | tip popup position                                       | `top` `topleft` `topright` `left` `lefttop` `leftbottom` `right` `righttop` `rightbottom` `bottom` `bottomleft` `bottomright` | `bottom`      |
| scroolhidden | Whether to close automatically when the page is scrolled | `boolean`                                                                                                                     | `false`       |
| zindex       | popover z-index                                          | `number`                                                                                                                      | `999`         |
| theme        | popover theme mode                                       | support `light` `dark`                                                                                                        | `dark`        |
| onClose      | Emitted when an action is closed                         | `() => void`                                                                                                                  | `require`     |
| onSelect     | Emitted when an action is clicked                        | `(e:{detail:{action: PopoverAction, index: number}}) => void`                                                                 | `require`     |

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
