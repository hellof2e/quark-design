# Search

### Intro

Input box component for search scenarios.

## Install

```tsx
import { Search } from "@quarkd/quark-react";
```

## Basic Usage

```html
<Search value="123"></Search>
```

## Round

```html
<Search shape="round" value="123"></Search>
```

### Hide Action Button

```html
<Search hideaction></Search>
```

### Show Back Button

```html
<Search showback></Search>
```

### Dark

```html
<Search dark></Search>
```

### Slot

```html
<Search hideaction>
  <div slot="action">
    <div>Primary Button</div>
  </div>
</Search>
```

### Event

```tsx
export default () => {
  const onBlur = ({ detail }) => {
    console.log(detail.value);
  };
  const onChange = ({ detail }) => {
    console.log(detail.value);
  };
  return <Search showback onBlur={onBlur} onChange={onChange} />;
};
```

### Custom Style

```html
<Search showback iconcolor="aqua" />
```

```css
/* CSS display */
:search {
  --search-background: linear-gradient(135deg, #667eea, #764ba2);
  --search-action-text-color: aqua;
}
```

## API

### Props

| Attribute   | Description                               | Type                                   | Default                  |
| ----------- | ----------------------------------------- | -------------------------------------- | ------------------------ |
| value       | Input value                               |                                        |
| shape       | Shape of field                            | `square` `round`                       | `square`                 |
| dark        | Dark                                      | `boolean`                              | `fasle`                  |
| showback    | Whether to show the back button           | `boolean`                              | `false`                  |
| hideaction  | Hide action button                        | `boolean`                              | `false`                  |
| actiontext  | Text of action button                     | `string`                               | `Cancel`                 |
| iconcolor   | Icon color, it's white in dark mode       | `string`                               | `#242729`                |
| placeholder | placeholder text                          | `string`                               | `Please enter key words` |
| maxlength   | Input field max length                    | `string` or `number`                   |
| autofocus   | Whether to auto focus, unsupported in iOS | `boolean`                              |
| clearable   | Whether to be clearable                   | `boolean`                              | `true`                   |
| disabled    | Whether to disable field                  | `boolean`                              | `fasle`                  |
| readonly    | Whether to be readonly                    | `boolean`                              | `fasle`                  |
| onFocus     | Emitted when input is focused             | `(e:{detail:{value:string}}) => void ` |                          |
| onBlur      | Emitted when input is blurred             | `(e:{detail:{value:string}}) => void ` |                          |
| onSearch    | Emitted when confirming search            | `(e:{detail:{value:string}}) => void ` |                          |
| onChange    | Emitted when input value changed          | `(e:{detail:{value:string}}) => void ` |                          |
| onCancel    | Emitted when the action button is clicked | `() => void `                          |                          |
| onBack      | Emitted when the back button is clicked   | `() => void `                          |                          |

### CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                         | Description              | Default    |
| ---------------------------- | ------------------------ | ---------- |
| `--field-font-size`          | Input field font size    | `14px`     |
| `--search-background`        | Search background color  | `#fff`     |
| `--search-dark-background`   | Dark background          | `#08f`     |
| `--search-action-text-color` | Action button font color | `#242729 ` |
| `--search-action-font-size`  | Action button font size  | `16px `    |
