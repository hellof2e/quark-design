# Slider

### Intro

Used to select a value within a given range.

### Install

```tsx
import "quarkd/lib/slider";
```

### Basic Usage

```html
<quark-slider value="50"></quark-slider>
```

### Dual Thumb

Add `range` attribute to enable dual thumb mode. Make sure `value` is an array.

```html
<quark-slider value="[20, 60]" range></quark-slider>
```

### Range

```html
<quark-slider value="0" min="-50" max="50" />
```

### Disabled

```html
<quark-slider value="50" disabled />
```

### Readonly

```html
<quark-slider value="50" readonly />
```

### Step Size

```html
<quark-slider value="50" step="10" />
```

### Custom Style

```html
<quark-slider value="50" barheight="4" activecolor="#ee0a24" />
```

### Custom Button

```html
<quark-slider value="50">
  <div slot="button" class="custom-button">50</div>
</quark-slider>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #1989fa;
    border-radius: 100px;
  }
</style>
```

### Vertical

Set `vertical` attribute to display slider vertically. The height will be 100% of parent element.

```html
<div style="height: 150px; display: flex;">
  <quark-slider value="50" vertical />
  <quark-slider value="[20, 60]" range vertical style="margin-left: 100px;" />
</div>
```

### Change Event

```html
<quark-slider @change="onChange" :value="value" />
```

```js
export default {
  data() {
    return {
      value: 50,
    };
  },
  methods: {
    onChange({ detail }) {
      this.value = detail.value;
    },
  },
};
```

## API

### Props

|   Attribute   |                  Description                   |             Type             | Default   |
| :-----------: | :--------------------------------------------: | :--------------------------: | :-------- |
|     value     | Current value, array format in dual thumb mode | `number \| [number, number]` | `0`       |
|      min      |                    Minimum                     |           `number`           | `0`       |
|      max      |                    Maximum                     |           `number`           | `100`     |
|     step      |                   Step size                    |           `number`           | `1`       |
|   barheight   |           Height of bar, unit is px            |           `number`           | `2`       |
|  buttonsize   |            Button size, unit is px             |           `number`           | `24`      |
|  activecolor  |              Active color of bar               |           `string`           | `#1989fa` |
| inactivecolor |             Inactive color of bar              |           `string`           | `#e5e5e5` |
|     range     |       Whether to enable dual thumb mode        |          `boolean`           | `false`   |
|    reverse    |           Whether to reverse slider            |          `boolean`           | `false`   |
|   disabled    |           Whether to disable slider            |          `boolean`           | `false`   |
|   readonly    |             Whether to be readonly             |          `boolean`           | `false`   |
|   vertical    |      Whether to display slider vertically      |          `boolean`           | `false`   |

### Events

|   Event   |         Description         |                                             Arguments                                             |
| :-------: | :-------------------------: | :-----------------------------------------------------------------------------------------------: |
|  change   | Emitted when value changed  |                 `(e: { detail: { value: number \| [number, number] } }) => void`                  |
| dragstart | Emitted when start dragging |                  `(e: { detail: { event: TouchEvent \| MouseEvent } }) => void`                   |
|  dragend  |  Emitted when end dragging  | `(e: { detail: { value: number \| [number, number], event: TouchEvent \| MouseEvent } }) => void` |

### Slots

|     Name     |            Description            |
| :----------: | :-------------------------------: |
|    button    |           Custom button           |
| left-button  | Custom left button in range mode  |
| right-button | Custom right button in range mode |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                                 | Description          | Default                     |
| ------------------------------------ | -------------------- | --------------------------- |
| `--quark-slider-active-background`   | Active background    | `#1989fa`                   |
| `--quark-slider-inactive-background` | Inactive background  | `#e5e5e5`                   |
| `--quark-slider-disabled-opacity`    | Disabled opacity     | `0.5`                       |
| `--quark-slider-bar-height`          | Bar height           | `2px`                       |
| `--quark-slider-button-width`        | Button width         | `24px`                      |
| `--quark-slider-button-height`       | Button height        | `24px`                      |
| `--quark-slider-button-radius`       | Button border radius | `50%`                       |
| `--quark-slider-button-background`   | Button background    | `#fff`                      |
| `--quark-slider-button-shadow`       | Button shadow        | `0 1px 2px rgba(0,0,0,0.5)` |
