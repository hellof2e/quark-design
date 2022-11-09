# Grid

### Intro

Used to divide the page into blocks of equal width in the horizontal direction for displaying content or page navigation.

### Install

```tsx
import "quarkd/lib/grid";
```

### Basic Usage

To change the icon and add text in the block, set `icon` prop and `text` prop on the Grid respectively.

```html
<quark-grid>
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
</quark-grid>
```

### Column Num

To change the column number of grid, set `column` prop on the Grid. The default is 4.

```html
<quark-grid column="3">
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
</quark-grid>
```

### Square

To make every block of grid be quare shape, add `square` prop on the Grid.

```html
<quark-grid square>
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
</quark-grid>
```

### No Border

Every block of grid has no border when add `noborder` prop on the Grid.

```html
<quark-grid noborder>
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="text"
  />
</quark-grid>
```

### Custom Content

To custom content in the block of grid, use Grid with default slot.

```html
<quark-grid>
  <quark-grid-item>
    <img
      src="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
      style="width: 40px;"
    />
  </quark-grid-item>
  <quark-grid-item>
    <img
      src="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
      style="width: 40px;"
    />
  </quark-grid-item>
  <quark-grid-item>
    <img
      src="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
      style="width: 40px;"
    />
  </quark-grid-item>
</quark-grid>
```

## API

### Props

| Attribute | Description                | Type      | Default |
| --------- | -------------------------- | --------- | ------- |
| column    | Column number              | `string`  | `4`     |
| noborder  | Whether to hide border     | `boolean` | `false` |
| square    | Whether to be square shape | `boolean` | `false` |

### GridItem Props

| Attribute | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| text      | Text        | `string` |         |
| icon      | Icon        | `string` |         |
| iconsize  | Icon size   | `string` | `28px`  |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                           | Descripton                           | Default   |
| ------------------------------ | ------------------------------------ | --------- |
| `--grid-item-background-color` | Block background color               | `#FFFFFF` |
| `--grid-item-text-font-size`   | Block text font size                 | `12px`    |
| `--grid-item-text-color`       | Block text font color                | `#242729` |
| `--grid-item-text-margin-top`  | Distance between text and icon       | `8px`     |
| `--grid-item-icon-font-size`   | Icon size                            | `28px`    |
| `--grid-item-hspacing`         | Block content left and right padding | `16px`    |
| `--grid-item-vspacing`         | Block content top and bottom padding | `16px`    |
