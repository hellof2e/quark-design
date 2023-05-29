# Button

### Intro

To trigger an operation.

### Install

```tsx
import { Button } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Button>Default</Button>
```

### Type

There are `primary`, `success`, `danger`, `warning` and default type.

```html
<Button>Default</Button>
<Button type="primary">Blue</Button>
<Button type="success">Green</Button>
<Button type="danger">Red</Button>
<Button type="warning">Yellow</Button>
<Button type="grey">Grey</Button>
```

### Plain

To set the Button as a plain Button, add `plain` prop to the Button. The plain Button's text is the Button color, and the background is white.

```html
<Button plain type="primary">Primary</Button>
<Button plain type="success">Success</Button>
```

### Light

To set the Button as a light Button, add `light` prop to the Button. The light Button's text is the Button color, and the background is the light color.

```html
<Button light type="primary">Primary</Button>
<Button light type="success">Success</Button>
```

### Size

Support `big`, `small`, the default is normal.

```html
<Button type="primary" size="small">Small</Button>
<Button type="primary" size="big">Big</Button>
<Button type="primary" size="large">Large</Button>
<Button type="primary">Normal</Button>
```

### Disabled

To mark a Button as disabled, add `disabled` prop to the Button. The Button cannot be clicked when disabled.

```html
<Button disabled type="primary">Disabled</Button>
<Button disabled plain>Disabled</Button>
```

### Shape

A Button shape can be added to a Button by setting `shape` prop on the Button, which supports `round` and `square` Buttons. The default is small rounded corners.

```html
<Button shape="square" type="danger">Square</Button>
<Button shape="round" type="primary">Round</Button>
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
<Button
  type="primary"
  icon="https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png"
>
  Like
</Button>
```

## API

### Props

| Attribute    | Description                                                       | Type      | Default   |
| ------------ | ----------------------------------------------------------------- | --------- | --------- |
| type         | Button type，can be set to `primary`,`success`,`danger`,`warning` | `string`  | -         |
| size         | Button size，can be set to `small`, `normal`, `big`, `large`      | `string`  | `normal`  |
| disabled     | Whether to disable Button                                         | `boolean` | `false`   |
| icon         | Icon on Button (can be set to url link)                           | `string`  | -         |
| shape        | Button shape，can be set to `square`, `round`                     | `string`  | `round`   |
| plain        | Whether to be plain Button                                        | `boolean` | `false `  |
| light        | Whether to be light Button                                        | `boolean` | `false `  |
| loading      | Whether to show loading status                                    | `boolean` | `false`   |
| loadtype     | Loading type，can be set to `circular`                            | `string`  | `spinner` |
| loadingcolor | Loading color                                                     | `string`  | `#fff`    |
| loadingsize  | Loading size                                                      | `string`  | `20`      |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                         | Description                      | Default Value |
| ---------------------------- | -------------------------------- | ------------- |
| `--Button-height`            | Height of Button                 | `32px`        |
| `--Button-hspacing`          | Left and right padding of Button | `12px`        |
| `--Button-font-size`         | font size on Button              | `14px`        |
| `--Button-border-radius`     | Border-radius of Button          | `8px`         |
| `--Button-color`             | Font color on Button             | `#fff`        |
| `--Button-icon-hspacing`     | icon margin right                | `6px`         |
| `--Button-icon-size`         | icon size                        | `1em`         |
| `--Button-big-border-radius` | Border-radius of big size Button | `8px`         |
