# Button

### Intro

To trigger an operation.

### Install

```tsx
import { Button } from "@quarkd/quark-react";
```

### Basic Usage

```html
<button>Default</button>
```

### Type

There are `primary`, `success`, `danger`, `warning` and default type.

```html
<button>Default</button>
<button type="primary">Blue</button>
<button type="success">Green</button>
<button type="danger">Red</button>
<button type="warning">Yellow</button>
<button type="grey">Grey</button>
```

### Plain

To set the Button as a plain Button, add `plain` prop to the Button. The plain Button's text is the Button color, and the background is white.

```html
<button plain type="primary">Primary</button>
<button plain type="success">Success</button>
```

### Size

Support `big`, `small`, the default is normal.

```html
<button type="primary" size="small">Small</button>
<button type="primary" size="big">Big</button>
<button type="primary">Normal</button>
```

### Disabled

To mark a Button as disabled, add `disabled` prop to the Button. The Button cannot be clicked when disabled.

```html
<button disabled type="primary">Disabled</button>
<button disabled plain>Disabled</button>
```

### Shape

A Button shape can be added to a Button by setting `shape` prop on the Button, which supports `round` and `square` Buttons. The default is small rounded corners.

```html
<button shape="square" type="danger">Square</button>
<button shape="round" type="primary">Round</button>
```

### Loading

A loading indicator can be added to a Button by setting `loading` prop on the Button. `loadingcolor` prop controls the loading color, `loadingsize` prop controls the loading size, and `loadingtype` prop controls the loading type. For loading, refer to the loading component.

```tsx
<Button loading type="danger" loadtype="circular">Loading...</Button>
<Button loading type="warning">Loading...</Button>
<Button onClick={changeLoading} loading={isLoading} type="success">Click me!</Button>
```

### Icon

Button components can contain an Icon. This is done by setting `icon` prop within the Button.

```html
<button
  type="primary"
  icon="https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png"
>
  Like
</button>
```

## API

### Props

| Attribute    | Description                                                       | Type      | Default   |
| ------------ | ----------------------------------------------------------------- | --------- | --------- |
| type         | Button type，can be set to `primary`,`success`,`danger`,`warning` | `string`  | -         |
| size         | Button size，can be set to `small`, `normal`, `big`, `large`      | `string`  | `normal`  |
| disabled     | Whether to disable button                                         | `boolean` | `false`   |
| icon         | Icon on button (can be set to url link)                           | `string`  | -         |
| shape        | Button shape，can be set to `square`, `round`                     | `string`  | `round`   |
| plain        | Whether to be plain button                                        | `boolean` | `false `  |
| loading      | Whether to show loading status                                    | `boolean` | `false`   |
| loadtype     | Loading type，can be set to `circular`                            | `string`  | `spinner` |
| loadingcolor | Loading color                                                     | `string`  | `#fff`    |
| loadingsize  | Loading size                                                      | `string`  | `20`      |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                         | Description                      | Default Value |
| ---------------------------- | -------------------------------- | ------------- |
| `--button-height`            | Height of button                 | `32px`        |
| `--button-hspacing`          | Left and right padding of button | `12px`        |
| `--button-font-size`         | font size on button              | `14px`        |
| `--button-border-radius`     | Border-radius of button          | `8px`         |
| `--button-color`             | Font color on button             | `#fff`        |
| `--button-icon-hspacing`     | icon margin right                | `6px`         |
| `--button-icon-size`         | icon size                        | `1em`         |
| `--button-big-border-radius` | Border-radius of big size button | `8px`         |
