# Noticebar

### Intro

Used to display message notifications

### Install

```tsx
import { Noticebar } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Noticebar text="{text}"></Noticebar>
```

### Multiple lines

Set `multiple` prop on the Noticebar to control the maximum number of lines which text can show.

```html
<Noticebar text="{multipleText}" multiple="2"></Noticebar>
```

### Set style

The font color is controlled by `color` prop, and the background color is controlled by `bgcolor` prop.

```html
<Noticebar text="{text}" color="red" bgcolor="#ddd"></Noticebar>
```

### Scrollable

To make the text scrollable, embed `quark-marquee` component in the Noticebar.

```tsx
import { Marquee } from "@quarkd/quark-react";
```

```html
<Noticebar>
  <marquee slot="text" title="{multipleText}"></marquee>
</Noticebar>
```

### Hide Icon

To hide right or left icon, add `righthide` or `lefthide` on the Noticebar.

```html
<Noticebar text="hide right icon" righthide></Noticebar>
<Noticebar text="hide left icon" lefthide></Noticebar>
```

### Custom ends

To custom left or right content, set `slot="left"` or `slot="right"` on the specific component.

```html
<Noticebar text="The way of the university is to be bright and virtuous.">
  <div slot="left">Left content</div>
  <div slot="right">Right content</div>
</Noticebar>
```

### Right event

```html
<Noticebar
  text="Try to click right icon"
  onRightclick="{handleClick}"
></Noticebar>
```

## API

### Props

| Attribute    | Description                           | Type          | Default |
| ------------ | ------------------------------------- | ------------- | ------- |
| text         | Text                                  | `string`      |
| multiple     | Maximum number of lines text can show | `string`      | `1`     |
| lefthide     | Whether to hide left icon             | `boolean`     | `false` |
| righthide    | Whether to hide right icon            | `boolean `    | `false` |
| keyword      | keyword highlight                     | `string`      |         |
| onRightclick | Right click event                     | `() => void ` |         |

### slot

| Name  | Description          |
| ----- | -------------------- |
| left  | Custom left content  |
| text  | Custom text          |
| right | Custom right content |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                      | Description      | Default   |
| ------------------------- | ---------------- | --------- |
| `--noticebar-border-radius`  | component border-radius |  0px  |
| `--noticebar-padding`  | component padding |  10px  |
| `--noticebar-left-color`  | Left icon color  | `inherit` |
| `--noticebar-right-color` | Right icon color | `inherit` |
