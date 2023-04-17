# Noticebar

### Intro

Used to display message notifications

### Install

```tsx
import "quarkd/lib/noticebar";
```

### Basic Usage

```html
<quark-noticebar :text="text"></quark-noticebar>
```

### Multiple lines

Set `multiple` prop on the Noticebar to control the maximum number of lines which text can show.

```html
<quark-noticebar :text="multipleText" :multiple="2"></quark-noticebar>
```

### Set style

The font color is controlled by `color` prop, and the background color is controlled by `bgcolor` prop.

```html
<quark-noticebar :text="text" color="red" bgcolor="#ddd"></quark-noticebar>
```

### Scrollable

To make the text scrollable, embed `quark-marquee` component in the Noticebar.

```tsx
import "quarkd/lib/marquee";
```

```html
<quark-noticebar>
  <quark-marquee slot="text" :title="multipleText"></quark-marquee>
</quark-noticebar>
```

### Hide Icon

To hide right or left icon, add `righthide` or `lefthide` on the Noticebar.

```html
<quark-noticebar text="hide right icon" righthide></quark-noticebar>
<quark-noticebar text="hide left icon" lefthide></quark-noticebar>
```

### Custom ends

To custom left or right content, set `slot="left"` or `slot="right"` on the specific component.

```html
<quark-noticebar text="The way of the university is to be bright and virtuous.">
  <div slot="left">Left content</div>
  <div slot="right">Right content</div>
</quark-noticebar>
```

### Right event

```html
<quark-noticebar
  text="Try to click right icon"
  @rightclick="handleClick"
></quark-noticebar>
```

## API

### Props

| Attribute | Description                           | Type       | Default |
| --------- | ------------------------------------- | ---------- | ------- |
| text      | Text                                  | `string`   |
| multiple  | Maximum number of lines text can show | `string`   | `1`     |
| lefthide  | Whether to hide left icon             | `boolean`  | `false` |
| righthide | Whether to hide right icon            | `boolean ` | `false` |
| keyword   | keyword highlight                     | `string`   |         |

### slot

| Name  | Description          |
| ----- | -------------------- |
| left  | Custom left content  |
| text  | Custom text          |
| right | Custom right content |

### Event

| Event      | Description       | Type         |
| ---------- | ----------------- | ------------ |
| rightclick | Right click event | `() => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                        | Description             | Default   |
| --------------------------- | ----------------------- | --------- |
| `--noticebar-border-radius` | component border-radius | `0px`     |
| `--noticebar-padding`       | component padding       | `10px`    |
| `--noticebar-left-color`    | Left icon color         | `inherit` |
| `--noticebar-right-color`   | Right icon color        | `inherit` |
