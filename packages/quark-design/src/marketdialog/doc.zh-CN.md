# MarketDialog 营销弹窗

### 介绍

纯图片弹窗

### 安装

```tsx
import MarketDialog from "quarkd/lib/marketdialog";
```

### 基本用法

```js
MarketDialog({
  url: "https://m.hellobike.com/resource/helloyun/15697/Zj-NfJdxdA.png",
});
```

### 标签式调用

比如我们需要自定义图片圆角

```html
<quark-market-dialog :open="open" @close="close">
  <img
    slot="market"
    src="https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"
  />
</quark-market-dialog>
```

## API

### Props

| 参数 | 说明             | 类型      | 默认值    |
| ---- | ---------------- | --------- | --------- |
| open | 控制弹窗显示隐藏 | `boolean` | `require` |
| url  | 弹窗图片地址     | `string`  |           |
| size | 关闭按钮大小     | `string`  | `32`      |

### Event

| 名称  | 说明                 | 类型         |
| ----- | -------------------- | ------------ |
| close | 点击关闭图标回调函数 | `() => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                     | 说明     | 默认值  |
| ------------------------ | -------- | ------- |
| `--market-dialog-width`  | 图片宽度 | `288px` |
| `--market-dialog-radius` | 图片圆角 | `12px`  |
