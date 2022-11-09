# textArea

### Intro

Multi-line text input

### Install

```tsx
import { TextArea } from "@quarkd/quark-react";
```

### Basic Usage

```html
<textarea />
```

### Rows Number

```html
<textarea rows="6" />
```

### Autosize

```html
<textarea autosize />
```

### Count

```html
<textarea showcount />
```

### Maxlength

```html
<textarea showcount maxlength="50" />
```

### Disabled

```html
<textarea disabled />
```

### Custom Style

```html
<textarea showcount class="custom-style" />
```

```css
.custom-style {
  --textarea-border-color: red;
  --textarea-color: red;
  --textarea-count-color: red;
  --textarea-placeholder-color: red;
  --textarea-text-count-align: "left";
}
```

### Events

```tsx
export default () => {
  return (
    <Textarea
      onBlur={(event) => {
        Toast.text(`${event.target.value}, blur`);
      }}
      onInput={(event) => {
        Toast.text(`${event.target.value}, input`);
      }}
      onFocus={(event) => {
        Toast.text(`${event.target.value}, focus`);
      }}
      onCompositionStart={(event) => {
        Toast.text(`${event.target.value}, compositionStart`);
      }}
    />
  );
};
```

## API

### Props

| Attribute          | Description                                  | Type     | Default |
| ------------------ | -------------------------------------------- | -------- | ------- |
| value              | Input value                                  | String   |
| placeholder        | Placeholder                                  | String   |
| rows               | Rows number                                  | number   | 2       |
| maxlength          | Maxlength                                    | number   | -       |
| showcount          | Show count                                   | boolean  | false   |
| autocomplete       | Autocomplete                                 | boolean  | false   |
| disabled           | Whether to disable textarea                  | boolean  | false   |
| readonly           | Whether to be readonly                       | boolean  | false   |
| id                 | Textarea id, used with label                 | string   |
| onInput            | Emitted when input value changed             | Function |
| onFocus            | Emitted when input is focused                | Function |
| onBlur             | Emitted when input is blurred                | Function |
| onCompositionStart | Emitted when input editor starts a new input | Function |

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
