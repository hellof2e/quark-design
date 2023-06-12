# Tooltip 文字提示

### 介绍

简单的文字提示气泡框。

### 安装使用

```tsx
import "quarkd/lib/tooltip";
```

### 设置 tips 方向

通过 `placement` 属性来控制气泡的弹出位置。

```tsx
<quark-tooltip placement="top" tips="气泡文字">
  <div>top 位置</div>
</quark-tooltip>
```

`placement` 支持以下值：

```tsx
top           # 顶部中间位置
topleft       # 顶部左侧位置
topright      # 顶部右侧位置
left          # 左侧中间位置
lefttop       # 左侧上方位置
leftbottom    # 左侧下方位置
right         # 右侧中间位置
righttop      # 右侧上方位置
rightbottom   # 右侧下方位置
bottom        # 底部中间位置
bottomleft    # 底部左侧位置
bottomright   # 底部右侧位置
```

### 设置 tips 尺寸

通过 `size` 属性来控制气泡的大小。`size` 支持`large`和默认 2 种类型。

```tsx
<quark-tooltip placement="top" size="large" tips="气泡文字">
  <div>large 尺寸</div>
</quark-tooltip>
```

### 显示关闭按钮

通过 closeable 属性来控制是否显示关闭按钮。

```html
<quark-tooltip
  placement="top"
  tips="气泡文字"
  closeable
  :open="open"
  @close="close"
>
  <div @click="click">top 位置</div>
</quark-tooltip>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
  },
};
```

### 是否自动关闭

通过 autoclose 属性来控制是否自动关闭，通过 opentime 属性控制多少毫秒后自动关闭。

```html
<quark-tooltip
  placement="top"
  tips="气泡文字"
  autoclose
  opentime="5000"
  :open="open"
  @close="close"
>
  <div @click="click">top 位置</div>
</quark-tooltip>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
  },
};
```

### 滚动关闭

通过 scrollhidden 属性来控制当页面滚动时是否关闭。

```html
<quark-tooltip
  placement="top"
  tips="气泡文字"
  scrollhidden
  :open="open"
  @close="close"
>
  <div @click="click">top 位置</div>
</quark-tooltip>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
  },
};
```

### 自定义样式

```html
<quark-tooltip
  placement="top"
  tips="气泡文字"
  :open="open"
  class="custom-style"
>
  <div @click="click">top 位置</div>
</quark-tooltip>
<style>
  .custom-style {
    --tips-background-color: #0088ff;
    --tips-font-weight: 500;
  }
</style>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
  },
};
```

## API

### Props

| 参数         | 说明                                     | 类型                                                                                                                               | 默认值    |
| ------------ | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| open         | tip 是否显示                             | `boolean`                                                                                                                          | `require` |
| placement    | tip 弹出位置                             | 支持 `top` `topleft` `topright` `left` `lefttop` `leftbottom` `right` `righttop` `rightbottom` `bottom` `bottomleft` `bottomright` | `bottom`  |
| size         | tip 尺寸，可选值为`large`和默认 2 种类型 | `string`                                                                                                                           | -         |
| tips         | tip 文字提示内容                         | `string`                                                                                                                           | `require` |
| closeable    | 是否显示关闭按钮                         | `boolean`                                                                                                                          | `false`   |
| autoclose    | 显示后是否自动关闭                       | `boolean`                                                                                                                          | `false`   |
| opentime     | 显示后到自动关闭的时间                   | `string`                                                                                                                           | `3000`    |
| scrollhidden | 当页面滚动后，是否自动关闭               | `boolean`                                                                                                                          | `false`   |
| zindex       | tips 层级                                | `number`                                                                                                                           | `999`     |

### Events

| 名称  | 说明         | 类型          |
| ----- | ------------ | ------------- |
| close | tip 消失回调 | `() => void ` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                      | 说明                                                                          | 默认值    |
| ------------------------- | ----------------------------------------------------------------------------- | --------- |
| `--tips-background-color` | tip 背景色                                                                    | `#242729` |
| `--tips-color`            | tip 提示文字颜色                                                              | `#fff`    |
| `--tips-font-size`        | tip 提示文字大小                                                              | `14`      |
| `--tips-font-weight`      | tip 提示文字自重                                                              | `400`     |
| `--tips-line-height`      | tip 提示文字行高                                                              | `1.4`     |
| `--tips-hspacing`         | tip 水平内边距                                                                | `8px`     |
| `--tips-vspacing`         | tip 垂直内边距                                                                | `6px`     |
| `--tips-margin-bottom`    | tip 距实际显示元素距离（placement 为 top、topleft、topright 时生效）          | `6px`     |
| `--tips-margin-top`       | tip 距实际显示元素距离（placement 为 bottom、bottomleft、bottomright 时生效） | `6px`     |
| `--tips-margin-right`     | tip 距实际显示元素距离（placement 为 left、lefttop、leftbottom 时生效）       | `16px`    |
| `--tips-margin-left`      | tip 距实际显示元素距离（placement 为 right、righttop、rightbottom 时生效）    | `16px`    |
