# Popup

### 介绍

弹出层

### 安装

```tsx
import "quarkd/lib/popup";
```

### 基本使用

```jsx
<quark-popup
  position="bottom"
  :open="open"
  @close="open = false">
  <div>第一行</div>
  <div>第二行</div>
</quark-popup>

<div @click="open = true">触发Popup显示</div>
```

### 弹窗位置

通过 position 属性设置弹出位置，默认居中弹出，可以设置为 top、bottom、left、right。

```html
<quark-popup position="top" :open="open" />
```

### 关闭图标

设置 closeable 属性后，会在弹出层的右上角显示关闭图标。

```html
<quark-popup position="bottom" :open="open" closeable />
```

### 禁止遮罩层点击

设置 forbidmaskclick 属性后，点击遮罩层将无法自动关闭弹层。

```html
<quark-popup position="bottom" :open="open" forbidmaskclick />
```

### 圆角弹窗

设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```html
<quark-popup position="bottom" :open="open" round />
```

### 内部滚动设置

通过 `scrollid` 设置指定需要滚动的元素即可。

```html
<quark-popup
  position="center"
  :open="openScroll"
  @close="openScroll = false"
  scrollid="scroll-it" // 设置需要滚动元素的id
>
  <div class="fix-content">Fixable content</div>
  <!-- 以下元素可实现滚动 -->
  <div id="scroll-it" class="scroll-list">
    <div v-for="item in 100" :key="item">
      {{ item }}
    </div>
  </div>
</quark-popup>
```

## API

### Props

| 参数            | 说明                     | 类型                          | 默认值    |
| --------------- | ------------------------ | ----------------------------- | --------- |
| open            | 弹窗状态                 | `boolean`                     | `require` |
| position        | 弹框位置                 | `top` `bottom` `left` `right` | `bottom`  |
| round           | 是否圆角                 | `boolean`                     | `false`   |
| closeable       | 是否显示关闭按钮         | `boolean`                     | `false`   |
| safearea        | 是否开启底部安全区域适配 | `boolean`                     | `false`   |
| forbidmaskclick | 是否禁止遮罩层点击       | `boolean`                     | `false`   |
| zindex          | popup 层级设置           | `number、string`              | -         |

### Event

| 名称         | 说明                       | 类型         |
| ------------ | -------------------------- | ------------ |
| clickoverlay | 遮罩层点击触发             | `() => void` |
| close        | 关闭弹出层立即触发         | `() => void` |
| closed       | 关闭弹出层且动画结束后触发 | `() => void` |
| opened       | 弹出层打开后触发           | `() => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                    | 说明                                                                | 默认值               |
| ----------------------- | ------------------------------------------------------------------- | -------------------- |
| `--popup-mask-color`    | 蒙层背景                                                            | `rgba(0, 0, 0, 0.7)` |
| `--popup-z-index`       | 组件层级                                                            | `999`                |
| `--popup-bg`            | popup 内容区域背景                                                  | `#fff`               |
| `--popup-width`         | popup 内容区域宽度                                                  | `auto`               |
| `--popup-height`        | popup 内容区域高度                                                  | `auto`               |
| `--popup-max-width`     | popup 内容区域最大宽度                                              | `90%`                |
| `--popup-min-width`     | popup 内容区域最小宽度                                              | -                    |
| `--popup-max-height`    | popup 内容区域最大高度                                              | `90%`                |
| `--popup-min-height`    | popup 内容区域最小高度                                              | `200px`              |
| `--popup-border-radius` | popup 圆角大小（仅当 position 为 bottom，且 props 设置 round 生效） | `200px`              |
