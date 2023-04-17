# textArea

### Intro

Multi-line text input

### Install

```jsx
import "quarkd/lib/textarea";
```

### Basic Usage

```html
<quark-textarea />
```

### Rows Number

```jsx
<div class="quark-cell">
  <quark-textarea rows="6" />
</div>
```

### Autosize

```jsx
<div class="quark-cell">
  <quark-textarea autosize />
</div>
```

### Count

```jsx
<div class="quark-cell">
  <quark-textarea showcount />
</div>
```

### Maxlength

```jsx
<div class="quark-cell">
  <quark-textarea showcount maxlength="50" />
</div>
```

### Disabled

```jsx
<div class="quark-cell">
  <quark-textarea disabled />
</div>
```

### Custom Style

```html
<div class="quark-cell">
  <quark-textarea showcount class="custom-style" />
</div>

<style>
  .custom-style {
    --textarea-border-color: red;
    --textarea-color: red;
    --textarea-count-color: red;
    --textarea-placeholder-color: red;
    --textarea-text-count-align: "left";
  }
</style>
```

### Events

```html
<div class="quark-cell">
  <quark-textarea
    @input="handleEvent($event, 'input')"
    @blur="handleEvent($event, 'blur')"
    @focus="handleEvent($event, 'focus')"
    @compositionstart="handleEvent($event, 'compositionstart')"
  />
</div>
```

```js
import Toast from "../toast";
export default {
  methods: {
    handleEvent(event, type) {
      Toast.text(`${event.target.value}, ${type}`);
    },
  },
};
```

## API

### Props

| Attribute    | Description                  | Type      | Default |
| ------------ | ---------------------------- | --------- | ------- |
| value        | Input value                  | `string`  |
| placeholder  | Placeholder                  | `string`  |
| rows         | Rows number                  | `number`  | `2`     |
| maxlength    | Maxlength                    | `number`  | `-`     |
| showcount    | Show count                   | `boolean` | `false` |
| autocomplete | Autocomplete                 | `boolean` | `false` |
| disabled     | Whether to disable textarea  | `boolean` | `false` |
| readonly     | Whether to be readonly       | `boolean` | `false` |
| id           | Textarea id, used with label | `string`  |

### Events

textarea native events are supported

| Event            | Description                                  | Type                                          |
| ---------------- | -------------------------------------------- | --------------------------------------------- |
| input            | Emitted when input value changed             | `(e: ({ detail: { value: string } }) => void` |
| focus            | Emitted when input is focused                | `(e: ({ detail: { value: string } }) => void` |
| blur             | Emitted when input is blurred                | `(e: ({ detail: { value: string } }) => void` |
| compositionstart | Emitted when input editor starts a new input | `(）=> void `                                 |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                           | Description            | Default    |
| ------------------------------ | ---------------------- | ---------- |
| `--textarea-color`             | text color             | `#242729 ` |
| `--textarea-font-size`         | text size              | `14px`     |
| `--textarea-text-align`        | text align             | `left`     |
| `--textarea-text-count-align`  | text count align       | `right`    |
| `--textarea-count-color`       | text count color       | `#242729`  |
| `--textarea-border-color`      | textarea border color  | `#242729`  |
| `--textarea-placeholder-color` | placeholder text color | `#242729`  |
