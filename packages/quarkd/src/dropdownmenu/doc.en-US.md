# DropdownMenu

### Intro

The menu list that pops down downwards.

### Install

```tsx
import DropdownMenu from "quarkd/lib/dropdownmenu";
```

### Basic Usage

```html
<quark-dropdown-menu>
  <quark-dropdown-item ref="item1" :value="value1"></quark-dropdown-item>
  <quark-dropdown-item ref="item2" :value="value2"></quark-dropdown-item>
</quark-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: "0",
      value2: "a",
    };
  },
  mounted() {
    this.$refs.item1.setOptions([
      { text: "Option1", value: "0" },
      { text: "Option2", value: "1" },
      { text: "Option3", value: "2" },
    ]);
    this.$refs.item2.setOptions([
      { text: "Option A", value: "a" },
      { text: "Option B", value: "b" },
      { text: "Option C", value: "c" },
    ]);
  },
};
```

### Custom Content

```html
<quark-dropdown-menu>
  <quark-dropdown-item ref="item1" :value="value1"></quark-dropdown-item>
  <quark-dropdown-item ref="item2" title="Title">
    <quark-cell title="Title">
      <quark-switch :checked="switch1" @change="onSwitch1Change"></quark-switch>
    </quark-cell>
    <quark-cell title="Title">
      <quark-switch :checked="switch2" @change="onSwitch2Change"></quark-switch>
    </quark-cell>
    <div style="padding: 5px 16px">
      <quark-button type="primary" size="big" @click="onConfirm">
        Confirm
      </quark-button>
    </div>
  </quark-dropdown-item>
</quark-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: "0",
      value2: "a",
      switch1: true,
      switch2: false,
    };
  },
  mounted() {
    this.$refs.item1.setOptions([
      { text: "Option1", value: "0" },
      { text: "Option2", value: "1" },
      { text: "Option3", value: "2" },
    ]);
    this.$refs.item2.setOptions([
      { text: "Option A", value: "a" },
      { text: "Option B", value: "b" },
      { text: "Option C", value: "c" },
    ]);
  },
  methods: {
    onSwitch1Change(e) {
      this.switch1 = e.detail.value;
    },
    onSwitch2Change(e) {
      this.switch2 = e.detail.value;
    },
    onConfirm() {
      this.$refs.item2.toggle();
    },
  },
};
```

### Custom Active Color

```html
<quark-dropdown-menu active-color="#f00">
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
</quark-dropdown-menu>
```

### Disabled

```html
<quark-dropdown-menu>
  <quark-dropdown-item disabled></quark-dropdown-item>
  <quark-dropdown-item disabled></quark-dropdown-item>
</quark-dropdown-menu>
```

### Expand Direction

```html
<quark-dropdown-menu direction="up">
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
</quark-dropdown-menu>
```

### Swipe Items

```html
<quark-dropdown-menu :swipe-threshold="4">
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
</quark-dropdown-menu>
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

| Attribute | Description                      | Type      | Default                 |
| --------- | -------------------------------- | --------- | ----------------------- |
| value     | Value of current option          | `string`  |                         |
| title     | Item title                       | `string`  | Text of selected option |
| disabled  | Whether to disable dropdown item | `boolean` | `false`                 |

### DropdownItem Events

| Event  | Description                             | Arguments                                    |
| ------ | --------------------------------------- | -------------------------------------------- |
| change | Emitted select option and value changed | `e: ({ detail: { value: string } }) => void` |
| open   | Emitted when opening menu               | -                                            |
| close  | Emitted when closing menu               | -                                            |

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
type DropdownMenuDirection = "down" | "up";

type DropdownMenuProps = {
  zIndex?: number;
  hideOverlay?: boolean;
  activeColor?: string;
  direction?: DropdownMenuDirection;
  swipeThreshold?: number;
};

type DropdownItemProps = {
  value?: string;
  title?: string;
  disabled?: boolean;
};

type DropdownItemOption = {
  text: string;
  value: string;
};
```
