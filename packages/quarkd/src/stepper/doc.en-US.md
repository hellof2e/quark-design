# Stepper

### Intro

The stepper component consists of an increase button, a decrease button and an input box, which are used to input and adjust numbers within a certain range.

### Install

```tsx
import "quarkd/lib/stepper";
```

### Basic Usage

```html
<quark-stepper value="1"></quark-stepper>
```

### Range

```html
<quark-stepper min="5" max="12" />
```

### Step

```html
<quark-stepper steps="2" />
```

### Integer

```html
<quark-stepper interger />
```

### Disabled

```html
<quark-stepper disabled />
```

### Custom Style

```html
<quark-stepper />
<style>
  quark-stepper {
    --stepper-input-text-color: black;
    --stepper-input-background-color: white;
    --stepper-input-font-size: 18px;
    --stepper-button-border-radius: 50%;
    --stepper-button-border-width: 1px;
    --stepper-plus-background-color: red;
    --stepper-plus-color: white;
    --stepper-minus-background-color: white;
    --stepper-minus-color: #ee0a24;
    --stepper-minus-border-color: #ee0a24;
  }
</style>
```

### Change Event

```html
<quark-stepper @change="change" :value="value" />
```

```js
export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    change({ detail }) {
      this.value = detail.value;
    },
  },
};
```

## API

### Props

|   Attribute   |                        Description                         |   Type    | Default |
| :-----------: | :--------------------------------------------------------: | :-------: | :------ |
|      min      |                          Minimum                           | `number`  |         |
|      max      |                          Maximum                           | `number`  |         |
|     steps     |         Steps (Step size with each click changes)          | ` number` | `1`     |
|     name      | Stepper name, which will be recalled in the `change` event | `string`  |         |
| decimallength |                       Decimal length                       | `number`  |         |
|    integer    |               Whether to allow only integers               | `boolean` | `false` |
|   disabled    |                 Whether to disable stepper                 | `boolean` | `false` |

### Events

|   Event   |                Description                |                        Arguments                        |
| :-------: | :---------------------------------------: | :-----------------------------------------------------: |
|  change   |        Emitted when value changed         | `(e:{detail: { name: string, value: number }}) => void` |
| overlimit | Emitted when a disabled button is clicked |        `(e:{detail: { action: string}}) => void`        |
|   plus    |  Emitted when the plus button is clicked  |                      `() => void`                       |
|   minus   | Emitted when the minus button is clicked  |                      `() => void`                       |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                               | Description                           | Default   |
| ---------------------------------- | ------------------------------------- | --------- |
| `--stepper-input-text-color`       | stepper-input font color              | `#e8e8e8` |
| `--stepper-input-background-color` | stepper-input background color        | `#f2f3f5` |
| `--stepper-input-width`            | stepper-input width                   | `32px`    |
| `--stepper-input-height`           | stepper-input height                  | `28px`    |
| `--stepper-input-border-color`     | stepper-input border color            |           |
| `--stepper-input-border-width`     | stepper-input border width            | `1px`     |
| `--stepper-input-font-size`        | stepper-input font size               | `14px`    |
| `--stepper-input-line-height`      | stepper-input line-height             | `normal`  |
| `--stepper-input-border-radius`    | stepper-input border radius           |           |
| `--stepper-button-border-radius`   | stepper-button border radius          |           |
| `--stepper-button-border-height`   | stepper-button height                 | `28px`    |
| `--stepper-button-border-width`    | stepper-button width                  | `28px`    |
| `--stepper-button-disabled-color`  | stepper disabled color                | `#c8c9cc` |
| `--stepper-minus-color`            | stepper-minus-button font color       | `#e8e8e8` |
| `--stepper-minus-background-color` | stepper-minus-button background color | `#f2f3f5` |
| `--stepper-plus-color`             | stepper-plus-button font color        | `#e8e8e8` |
| `--stepper-plus-background-color`  | stepper-plus-button background color  | `#f2f3f5` |
| `--stepper-minus-border-color`     | stepper-minus-button border color     |           |
| `--stepper-plus-border-color`      | stepper-plus-button border color      |           |
