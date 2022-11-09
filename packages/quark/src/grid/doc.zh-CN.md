# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容。

### 安装使用

```tsx
import "quarkd/lib/grid";
```

### 基本使用

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

```html
<quark-grid>
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
</quark-grid>
```

### 自定义列数

默认一行展示四个格子，可以通过 `column` 自定义列数。

```html
<quark-grid column="3">
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
</quark-grid>
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```html
<quark-grid square>
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
</quark-grid>
```

### 无边框

设置 noborder 属性后，将不显示边框。

```html
<quark-grid noborder>
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
  <quark-grid-item
    icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
    text="文字"
  />
</quark-grid>
```

### 自定义内容

通过默认插槽可以自定义格子展示的内容。

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

| 参数     | 说明                   | 类型      | 默认值  |
| -------- | ---------------------- | --------- | ------- |
| column   | 显示列数               | `string`  | `4`     |
| noborder | 是否隐藏边框           | `boolean` | `false` |
| square   | 是否将格子固定为正方形 | `boolean` | `false` |

### GridItem Props

| 参数     | 说明       | 类型     | 默认值 |
| -------- | ---------- | -------- | ------ |
| text     | 显示的文字 | `string` |        |
| icon     | 显示的图标 | `string` |        |
| iconsize | 图标大小   | `string` | `28px` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                           | 说明                   | 默认值    |
| ------------------------------ | ---------------------- | --------- |
| `--grid-item-background-color` | 格子背景色             | `#FFFFFF` |
| `--grid-item-text-font-size`   | 格子文字大小           | `12px`    |
| `--grid-item-text-color`       | 格子文字颜色           | `#242729` |
| `--grid-item-text-margin-top`  | 格子文字距 icon 的距离 | `8px`     |
| `--grid-item-icon-font-size`   | icon 大小              | `28px`    |
| `--grid-item-hspacing`         | 格子内容左右内边距     | `16px`    |
| `--grid-item-vspacing`         | 格子内容上下内边距     | `16px`    |
