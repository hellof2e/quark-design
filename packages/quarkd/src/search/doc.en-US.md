# Search

### Intro

Input box component for search scenarios.

## Install

```tsx
import "quarkd/lib/search";
```

## Basic Usage

```html
<quark-search value="123"></quark-search>
```

## Round

```html
<quark-search shape="round" value="123"></quark-search>
```

### Hide Action Button

```html
<quark-search hideaction></quark-search>
```

### Show Back Button

```html
<quark-search showback></quark-search>
```

### Dark

```html
<quark-search dark></quark-search>
```

### Slot

```html
<quark-search hideaction>
  <div slot="action">
    <div>Primary Button</div>
  </div>
</quark-search>
```

### Event

```html
<quark-search id="search" showback @focus="onFocus" @change="onChange" />
```

```javascript
methods: {
  onBlur({ detail }) {
    console.log(detail.value)
  },
  onChange({ detail }) {
    console.log(detail.value)
  }
}
```

### Custom Style

```html
<quark-search showback iconcolor="aqua" />
```

```css
/* CSS display */
:quark-search {
  --search-background: linear-gradient(135deg, #667eea, #764ba2);
  --search-action-text-color: aqua;
}
```

## API

### Props

| Attribute   | Description                               | Type                 | Default                  |
| ----------- | ----------------------------------------- | -------------------- | ------------------------ |
| value       | Input value                               |                      |
| shape       | Shape of field                            | `square` `round`     | `square`                 |
| dark        | Dark                                      | `boolean`            | `fasle`                  |
| showback    | Whether to show the back button           | `boolean`            | `false`                  |
| hideaction  | Hide action button                        | `boolean`            | `false`                  |
| actiontext  | Text of action button                     | `string`             | `Cancel`                 |
| iconcolor   | Icon color, it's white in dark mode       | `string`             | `#242729`                |
| placeholder | placeholder text                          | `string`             | `Please enter key words` |
| maxlength   | Input field max length                    | `string` or `number` |
| autofocus   | Whether to auto focus, unsupported in iOS | `boolean`            |
| clearable   | Whether to be clearable                   | `boolean`            | `true`                   |
| disabled    | Whether to disable field                  | `boolean`            | `fasle`                  |
| readonly    | Whether to be readonly                    | `boolean`            | `fasle`                  |

### Event

| Event  | Description                               | Type                                   |
| ------ | ----------------------------------------- | -------------------------------------- |
| focus  | Emitted when input is focused             | `(e:{detail:{value:string}}) => void ` |
| blur   | Emitted when input is blurred             | `(e:{detail:{value:string}}) => void ` |
| search | Emitted when confirming search            | `(e:{detail:{value:string}}) => void ` |
| change | Emitted when input value changed          | `(e:{detail:{value:string}}) => void ` |
| cancel | Emitted when the action button is clicked | `() => void `                          |
| back   | Emitted when the back button is clicked   | `() => void `                          |

### CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                         | Description              | Default    |
| ---------------------------- | ------------------------ | ---------- |
| `--field-font-size`          | Input field font size    | `14px`     |
| `--search-background`        | Search background color  | `#fff`     |
| `--search-dark-background`   | Dark background          | `#08f`     |
| `--search-action-text-color` | Action button font color | `#242729 ` |
| `--search-action-font-size`  | Action button font size  | `16px `    |
