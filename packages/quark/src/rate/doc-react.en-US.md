# Rate

### Intro

The rate component is used for rating things.

### Install

```tsx
import { Rate } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Rate value="1"></Rate>
```

```css
/* Unchosen star color */
Rate {
  color: rgb(238, 238, 238);
}
```

### Custom color

```html
<Rate value="2" active-color="green"></Rate>
```

### Disabled

```html
<Rate value="2" disabled></Rate>
```

### Readonly

```html
<Rate value="2" readonly></Rate>
```

### Change Event

```tsx
export default () => {
  const onselect = (e) => {
    console.log(e.detail.value);
  };
  return <Rate value={rate} onChange={onselect} />;
};
```

### image icon

```html
<Rate value="2" imgicon="https://quark-design.hellobike.com/assets/quark-logo.7fd50e67.png"></Rate>
```

## API

### Props

| Attribute                          | Description                                                 | Type      | Default   |
| ---------------------------------- | ----------------------------------------------------------- | --------- | --------- |
| defaultvalue                       | Default chosen value 1-5 represent star                     | `string`  | ` 0`      |
| value                              | Chosen value，can be set to async value, 1-5 represent star | `string`  | ` 0`      |
| size                               | Icon font size                                              | `string`  | `25`      |
| disabled                           | Whether to disable rate                                     | `boolean` | `false`   |
| readonly                           | Whether to be readonly                                      | `boolean` | `false`   |
| activecolor                        | chosen color                                                | `string`  | `#ffc800` |
| imgicon                            | iamge icon                                                  | `string`  | `-`       |
| onChange Emitted when rate changed | `(e: { detail: { value: string } }) => void`                            |           |

