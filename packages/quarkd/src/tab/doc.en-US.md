# Tab

### Introduce

Used to switch between different content areas.

### Install

```tsx
import "quarkd/lib/tab";
```

### Basic Usage

```html
<quark-tabs :activekey="active">
  <quark-tab-content label="tab1"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3" disabled> tab3 content </quark-tab-content>
  <quark-tab-content label="tab4"> tab4 content </quark-tab-content>
</quark-tabs>
```

```js
data() {
  return {
    active: 1,
  }
},
```

### Dark Mode

```html
<quark-tabs darg :activekey="active">
  <quark-tab-content label="tab1"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3" disabled> tab3 content </quark-tab-content>
  <quark-tab-content label="tab4"> tab4 content </quark-tab-content>
</quark-tabs>
```

```js
data() {
  return {
    active: 1,
  }
},
```

### Match By Name

```html
<quark-tabs :activekey="activeName">
  <quark-tab-content label="tab1" name="a"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2" name="b"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3" disabled name="c">
    tab3 content
  </quark-tab-content>
  <quark-tab-content label="tab4" name="d"> tab4 content </quark-tab-content>
</quark-tabs>
```

```js
data() {
  return {
    activeName: 'd',
  }
},
```

### Swipe Tabs

Horizontal scrolling is automatically supported when the length exceeds the viewport.

```html
<quark-tabs>
  <quark-tab-content label="tab1">tab1</quark-tab-content>
  <quark-tab-content label="tab2">tab2</quark-tab-content>
  ...
  <quark-tab-content label="tab10">tab10</quark-tab-content>
</quark-tabs>
```

### Click Tab Event

```html
<quark-tabs :activekey="activeName1" @change="onChange">
  <quark-tab-content label="tab1" name="a"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2" name="b"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3" disabled name="c">
    tab3 content
  </quark-tab-content>
  <quark-tab-content label="tab4" name="d"> tab4 content </quark-tab-content>
</quark-tabs>
```

```js
data() {
  return {
    activeName1: 'd',
  }
},
methods: {
  onChange({detail}) {
    this.activeName1 = detail.name;
    Toast.text('current selection:' + detail.label);
  }
}
```

### Sticky

In sticky mode, the nav-item will be fixed to top when scroll to top.

```html
<quark-tabs sticky offsettop="17vw">
  <quark-tab-content label="tab1"> tab1 content </quark-tab-content>
  <quark-tab-content label="tab2"> tab2 content </quark-tab-content>
  <quark-tab-content label="tab3"> tab3 content </quark-tab-content>
  <quark-tab-content label="tab4"> tab4 content </quark-tab-content>
</quark-tabs>
```

## API

### Quark-tabs props

| Attribute | Description                                                                     | Type      | Default Value |
| --------- | ------------------------------------------------------------------------------- | --------- | ------------- |
| activekey | The currently activated tab, corresponding to the `name` in `quark-tab-content` | `string`  | -             |
| sticky    | Whether to use sticky mode                                                      | `boolean` | `false`       |
| dark      | Whether to use dark mode                                                        | `boolean` | `false`       |
| offsettop | Sticky offset top , supports vm                                                 | `string`  | `0vw`         |
| linewidth | Width of tab line                                                               | `string`  | `40px`        |

### Quark-tab-content props

| Attribute | Description                        | Type      | Default Value |
| --------- | ---------------------------------- | --------- | ------------- |
| label     | tab show name                      | `string`  | -             |
| disabled  | tab Whether to disable tab         | `boolean` | `false`       |
| name      | tab match label(matches activekey) | `string`  | -             |

### Quark-tabs Event

| Name   | Description     | Type                                                 |
| ------ | --------------- | ---------------------------------------------------- |
| change | change callback | `(e: {detail: {name:string，label:string}}) => void` |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，which can be used to customize styles，Please refer to[Theme customization](#/zh-CN/guide/theme).

| Name                          | Description                                                                   | Default Value                    |
| ----------------------------- | ----------------------------------------------------------------------------- | -------------------------------- |
| `--tab-item-color`            | `tab-item` Font color                                                         | `#5E6266`                        |
| `--tab-item-active-color`     | `tab-item` Active state `active` font color                                   | `#333333`                        |
| `--tab-item-disabled-color`   | `tab-item` Disabled state font color                                          | `#c8c9cc`                        |
| `--tab-item-min-width`        | `tab-item` Minimum width (determines the maximum number of display in a line) | `20vw`(Display up to 5 in a row) |
| `--tab-item-height`           | `tab-item` Height setting                                                     | `44px`                           |
| `--tab-item-font-size`        | `tab-item` Font size                                                          | `16px`                           |
| `--tab-active-line-color`     | `tab-item` active state `underline` color                                     | `#0088ff`                        |
| `--tabs-background-color`     | tabs Background color                                                         | `#ffffff`                        |
| `--tab-item-background-color` | `tab-item` Background color                                                   | `#ffffff`                        |
