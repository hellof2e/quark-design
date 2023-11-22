# DropdownMenu

### Intro

The menu list that pops down downwards.

### Install

```tsx
import {
  DropdownMenu,
  DropdownItem,
  DropdownItemInstance,
} from "@quarkd/quark-react";
```

### Basic Usage

```js
export default () => {
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("a");
  const item1 = useRef < DropdownItemInstance > null;
  const item2 = useRef < DropdownItemInstance > null;

  useEffect(() => {
    item1.current.setOptions([
      { text: "Option1", value: "0" },
      { text: "Option2", value: "1 " },
      { text: "Option3", value: "2 " },
      ,
    ]);

    item2.current.setOptions([
      { text: "Option A", value: "a" },
      { text: "Option B", value: "b" },
      { text: "Option C", value: "c" },
    ]);
  }, []);

  return (
    <DropdownMenu>
      <DropdownItem ref={item1} value={value1} />
      <DropdownItem ref={item2} value={value2} />
    </DropdownMenu>
  );
};
```

### Custom Content

```js
export default () => {
  const [value1, setValue1] = useState("0");
  const item1 = useRef < DropdownItemInstance > null;
  const item2 = useRef < DropdownItemInstance > null;
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);

  const onSwitch1Change = (e) => {
    setSwitch1(() => e.detail.value);
  };

  const onSwitch2Change = (e) => {
    setSwitch2(() => e.detail.value);
  };

  const onConfirm = () => {
    item2.current.toggle();
  };

  useEffect(() => {
    item1.current.setOptions([
      { text: "Option1", value: "0" },
      { text: "Option2", value: "1 " },
      { text: "Option3", value: "2 " },
    ]);
  }, []);

  return (
    <DropdownMenu>
      <DropdownItem ref={item1} value={value1} />
      <DropdownItem ref={item2} title="Title">
        <quark-cell title="Title">
          <quark-switch checked={switch1} onChange={onSwitch1Change} />
        </quark-cell>
        <quark-cell title="Title">
          <quark-switch checked={switch2} onChange={onSwitch2Change} />
        </quark-cell>
        <div style="padding: 5px 16px">
          <quark-button type="primary" size="big" onClick={onConfirm}>
            Confirm
          </quark-button>
        </div>
      </DropdownItem>
    </DropdownMenu>
  );
};
```

### Custom Active Color

```js
export default () => {
  return (
    <DropdownMenu active-color="#f00">
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
    </DropdownMenu>
  );
};
```

### Disabled

```js
export default () => {
  return (
    <DropdownMenu>
      <DropdownItem disabled></DropdownItem>
      <DropdownItem disabled></DropdownItem>
    </DropdownMenu>
  );
};
```

### Expand Direction

```js
export default () => {
  return (
    <DropdownMenu swipe-threshold={4}>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
    </DropdownMenu>
  );
};
```

### Swipe Items

```js
export default () => {
  return (
    <DropdownMenu swipe-threshold={4}>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
    </DropdownMenu>
  );
};
```

## API

### DropdownMenu Props

| Attribute       | Description                                                                                                                       | Type         | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| active-color    | Active color of title and option                                                                                                  | `string`     | `#08f`  |
| direction       | Expand direction                                                                                                                  | `up`、`down` | `down`  |
| z-index         | z-index of menu item                                                                                                              | `number`     | `10`    |
| hide-overlay    | Whether to hide overlay                                                                                                           | `boolean`    | `false` |
| swipe-threshold | Horizontal scrolling is allowed when the number of items exceeds the threshold and the total width exceeds the width of the menu. | `number`     | `0`     |

### DropdownMenuItem Props

| Attribute | Description                             | Type                                         | Default                 |
| --------- | --------------------------------------- | -------------------------------------------- | ----------------------- |
| value     | Value of current option                 | `string`                                     |                         |
| title     | Item title                              | `string`                                     | Text of selected option |
| disabled  | Whether to disable dropdown item        | `boolean`                                    | `false`                 |
| change    | Emitted select option and value changed | `e: ({ detail: { value: string } }) => void` |                         |
| open      | Emitted when opening menu               | `() => void`                                 |                         |
| close     | Emitted when closing menu               | `() => void`                                 |                         |

### DropdownItem Slots

| Name    | Description |
| ------- | ----------- |
| default | Content     |

### DropdownItem Methods

| Name   | Description    | Attribute        | Return value |
| ------ | -------------- | ---------------- | ------------ |
| toggle | Toggle display | `show?: boolean` | -            |

### CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to [theme customization](#/zh-CN/guide/theme).

| 名称                                           | 默认值    | 说明 |
| ---------------------------------------------- | --------- | ---- |
| `--quark-dropdown-menu-height`                 | `48px`    | -    |
| `--quark-dropdown-menu-title-background-color` | `#fff`    | -    |
| `--quark-dropdown-menu-title-color`            | `#242729` | -    |
| `--quark-dropdown-menu-title-font-size`        | `14px`    | -    |
| `--quark-dropdown-menu-title-padding`          | `8px`     | -    |

### Type Definition

```ts
type Direction = "down" | "up";

type DropdownMenuProps = {
  zIndex?: number;
  hideOverlay?: boolean;
  activeColor?: string;
  direction?: Direction;
  swipeThreshold?: number;
};

type DropdownItemOption = {
  text: string;
  value: string;
};
```
