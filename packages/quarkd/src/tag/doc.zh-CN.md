# Tag 标签

### 介绍

用于标记和分类的标签。

### 安装使用

```tsx
import "quarkd/lib/tag";
```

### 基本用法

```html
<quark-tag>正</quark-tag>
```

### 标签类型

```html
<quark-tag type="primary">正</quark-tag>
```

### 标签大小

```html
<quark-tag>正</quark-tag> <quark-tag size="large">正</quark-tag>
```

### 空心标签

```html
<quark-tag plain>正</quark-tag>
```

### 浅色标签

```html
<quark-tag light>正</quark-tag>
```

### 自定义样式

```html
<quark-tag size="large" color="#ffe1e1" textcolor="#ad0000">正</quark-tag>
<quark-tag size="large" color="linear-gradient(135deg, #667eea, #764ba2)">
  正
</quark-tag>
<quark-tag
  class="custom-border-color"
  plain
  size="large"
  color="#ffe1e1"
  textcolor="#ad0000"
>
  正
</quark-tag>
```

```css
.custom-border-color {
  --tag-border-color: #fb990f;
}
```

### 圆角标签

```html
<quark-tag size="large" round>正</quark-tag>
```

## API

### Props

| 参数      | 说明                                                                  | 类型      | 默认值    |
| --------- | --------------------------------------------------------------------- | --------- | --------- |
| type      | 类型，可选值为 `primary` `danger` `orange` `success` `warning` `gray` | `string`  | `primary` |
| size      | 标签大小，可选值为 `small` `large`                                    | `string`  | `small`   |
| plain     | 是否空心                                                              | `boolean` | `false`   |
| light     | 是否浅色系                                                            | `boolean` | `false`   |
| round     | 是否圆角标签                                                          | `boolean` | `false`   |
| color     | 标签颜色                                                              | `string`  | -         |
| textcolor | 标签文字颜色                                                          | `string`  | -         |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                  | 说明                   | 默认值                                                                          |
| --------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| `--tag-border-radius` | tag 圆角               | `4px`                                                                           |
| `--tag-hspacing`      | tag 文字左右边距       | small `4px`, large `6px`                                                        |
| `--tag-vspacing`      | tag 文字上下边距       | `2px`                                                                           |
| `--tag-font-size`     | 文字大小               | small `11px`, large `14px`                                                      |
| `--tag-font-weight`   | 字重                   | small `400`, large `500`                                                        |
| `--tag-font-family`   | 字体                   | small `PingFangSC-Regular, PingFang SC`, large `PingFangSC-Medium, PingFang SC` |
| `--tag-line-height`   | 行高                   | small `12px`, large `20px`                                                      |
| `--tag-text-color`    | 字体颜色               | `#fff`                                                                          |
| `--tag-background`    | tag 背景               |
| `--tag-border-color`  | 描边颜色，空心标签生效 |                                                                                 |
