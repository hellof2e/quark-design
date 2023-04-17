# Cell

### Intro

The cell is a single display item in the list.

### Install

```tsx
import { Cell } from "@quarkd/quark-react";
```

### Basic Usage

```tsx
import { Cell } from '@quarkd/quark-react';

export default () => {
  return (
    <Cell title="Cell title" />
    <Cell title="Cell title" islink />
    <Cell title="Cell title" desc="Content" />
    <Cell title="Cell title" desc="Content" islink />
  )
}
```

### Router

```tsx
import { Cell } from '@quarkd/quark-react';

export default () => {
  return (
    <Cell title="Router" to="#/button" islink />
    <Cell title="URL" to="https://baidu.com" islink />
  )
}
```

### Icon

```tsx
import { Cell } from "@quarkd/quark-react";

export default () => {
  return (
    <Cell
      title="Cell title"
      icon="https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png"
      islink
    />
  );
};
```

### Inset Grouped

```tsx
import { Cell, CellGroup } from "@quarkd/quark-react";

export default () => {
  return (
    <CellGroup>
      <Cell title="Cell title" islink />
      <Cell title="Cell title" islink />
    </CellGroup>
  );
};
```

### Custom

Set the maximum width of the title, show ellipsis

```tsx
import { Cell } from "@quarkd/quark-react";

export default () => {
  return <Cell title="The title is very very very long" />;
};
```

```css
/** CSS show ellipsis **/
.my-cell {
  --cell-title-white-space: nowrap;
  --cell-title-text-overflow: ellipsis;
}
```

### Customize right description

The description on the right can be customized through Slot (the content of the `Cell` package).

```tsx
import { Cell } from "@quarkd/quark-react";

export default () => {
  return (
    <Cell title="Cell title">
      <div>Custom content</div>
    </Cell>
  );
};
```

## API

### Props

| Attribute | Description                       | Type       | Default |
| --------- | --------------------------------- | ---------- | ------- |
| title     | Title                             | `string`   | -       |
| desc      | description                       | `string`   | -       |
| to        | Target route of the link          | `string`   | -       |
| islink    | Whether to show link icon         | `boolean ` | `false` |
| icon      | Left Icon(can be set to url link) | `string `  | -       |

### Slots

| Name            | Description       |
| --------------- | ----------------- |
| slot            | Custom right info |
| slot name=title | Custom title      |
| slot name=icon  | Custom left icon  |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                       | Description                    | Default                           |
| -------------------------- | ------------------------------ | --------------------------------- |
| `--cell-title-font-size`   | Title font size                | `14px`                            |
| `--cell-title-color`       | Title font color               | `#666`                            |
| `--cell-title-width`       | Title font max width           |
| `--cell-title-font-weight` | Title font weight              |
| `--cell-title-font-family` | Title font family              | `PingFangSC-Regular, PingFang SC` |
| `--cell-title-white-space` | Whether the title change line  | `nowrap`                          |
| `--cell-desc-font-size`    | Desc font size                 |
| `--cell-desc-color`        | Desc font color                | `#969799`                         |
| `--cell-desc-width`        | Desc font max width            | `14px`                            |
| `--cell-desc-white-space`  | Whether the desc change line   | `nowrap`                          |
| `--cell-desc-font-weight`  | Desc font weight               |
| `--cell-desc-font-family`  | Desc font family               | `PingFangSC-Regular, PingFang SC` |
| `--cell-icon-font-size`    | Icon size                      | `16px`                            |
| `--cell-quark-icon-color`  | Icon color                     | `#969799`                         |
| `--cell-hspacing`          | left and right padding of cell | `16px`                            |
| `--cell-vspacing`          | top and bottom padding of cell | `13px`                            |
