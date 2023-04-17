# Cell 单元格

### 介绍

列表项，可组成列表。

### 安装使用

```tsx
import "quarkd/lib/cell";
```

### 基本用法

```html
<quark-cell title="这是标题" />
<quark-cell title="这是标题" islink />
<quark-cell title="这是标题" desc="描述文字" />
<quark-cell title="这是标题" desc="描述文字" islink />
```

### 链接跳转

```html
<quark-cell title="路由跳转" to="#/button" islink />
<quark-cell title="链接跳转" to="https://baidu.com" islink />
```

### 图标展示

```html
<quark-cell
  title="这是标题"
  icon="https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png"
  islink
/>
```

### 分组用法

```html
<quark-cell-group>
  <quark-cell title="这是标题" islink />
  <quark-cell title="这是标题" islink />
</quark-cell-group>
```

### 自定义样式

设置标题最大宽度，省略号展示

```html
<quark-cell
  class="my-cell"
  title="这是标题很长长长长长长长长长长长长长长长长长长"
/>
```

```css
/* CSS 省略号展示 */
.my-cell {
  --cell-title-white-space: nowrap;
  --cell-title-text-overflow: ellipsis;
}
```

### 自定义右侧描述

通过 Slot（`Cell` 包裹的内容）可以自定义右侧描述。

```html
<quark-cell title="标题">
  <div>自定义内容</div>
</quark-cell>
```

## API

### Props

| 方法名 | 说明                      | 类型       | 默认值  |
| ------ | ------------------------- | ---------- | ------- |
| title  | 标题                      | `string`   | -       |
| desc   | 描述文字                  | `string`   | -       |
| to     | 链接跳转                  | `string`   | -       |
| islink | 是否显示右侧箭头          | `boolean ` | `false` |
| icon   | 左侧图标(支持传 url 链接) | `string `  | -       |

### Slots

| 名称            | 说明            |
| --------------- | --------------- |
| slot            | 自定义右侧信息  |
| slot name=title | 自定义标题      |
| slot name=icon  | 自定义左侧 icon |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                       | 说明             | 默认值                            |
| -------------------------- | ---------------- | --------------------------------- |
| `--cell-title-font-size`   | 标题字体大小     | `14px`                            |
| `--cell-title-color`       | 标题字体颜色     | `#666`                            |
| `--cell-title-width`       | 标题字体最大宽度 |
| `--cell-title-font-weight` | 标题字重         |
| `--cell-title-font-family` | 标题字体         | `PingFangSC-Regular, PingFang SC` |
| `--cell-title-white-space` | 标题是否换行     | `nowrap`                          |
| `--cell-desc-font-size`    | 描述字体大小     |
| `--cell-desc-color`        | 描述字体颜色     | `#969799`                         |
| `--cell-desc-width`        | 描述字体最大宽度 | `14px`                            |
| `--cell-desc-white-space`  | 描述是否换行     | `nowrap`                          |
| `--cell-desc-font-weight`  | 描述字重         |
| `--cell-desc-font-family`  | 描述字体         | `PingFangSC-Regular, PingFang SC` |
| `--cell-icon-font-size`    | 图标大小         | `16px`                            |
| `--cell-quark-icon-color`  | 图标颜色         | `#969799`                         |
| `--cell-hspacing`          | cell 左右内边距  | `16px`                            |
| `--cell-vspacing`          | cell 上下内边距  | `13px`                            |
