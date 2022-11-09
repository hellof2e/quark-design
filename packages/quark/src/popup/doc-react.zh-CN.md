# Popup

### 介绍

弹出层

### 安装

```tsx
import { Popup } from "@quarkd/quark-react";
```

### 基本使用

```js
export default () => {
  const [open, setOpen] = useState(false);

  const handleClsoe = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        基本使用
      </div>
      <PopUp open={open} onClosed={handleClsoe}>
        <div>第二行</div>
        <div>第三行</div>
        <div>第四行</div>
        <div>第五行</div>
        <div>第六行</div>
      </PopUp>
    </div>
  );
};
```

### 弹窗位置

通过 position 属性设置弹出位置，默认居中弹出，可以设置为 top、bottom、left、right。

```html
<Popup position="top" :open="open" />
```

### 关闭图标

设置 closeable 属性后，会在弹出层的右上角显示关闭图标。

```html
<Popup position="bottom" :open="open" closeable />
```

### 圆角弹窗

设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```html
<Popup position="bottom" :open="open" round />
```

## API

### Props

| 参数      | 说明                     | 类型                          | 默认值    |
| --------- | ------------------------ | ----------------------------- | --------- |
| open      | 弹窗状态                 | `boolean`                     | `require` |
| position  | 弹框位置                 | `top` `bottom` `left` `right` | `bottom`  |
| round     | 是否圆角                 | `boolean `                    | `false`   |
| closeable | 是否显示关闭按钮         | `boolean`                     | `false`   |
| safearea  | 是否开启底部安全区域适配 | ` boolean`                    | `false`   |
| zindex    | popup 层级设置           | `number、string`              | -         |
| onClosed  | 组件关闭回调             | `（）=> void`                 | -         |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                    | 说明                                                                | 默认值               |
| ----------------------- | ------------------------------------------------------------------- | -------------------- |
| `--popup-mask-color`    | 蒙层背景                                                            | `rgba(0, 0, 0, 0.7)` |
| `--popup-z-index`       | 组件层级                                                            | `999`                |
| `--popup-max-width`     | popup 内容区域最大宽度                                              | `90%`                |
| `--popup-min-width`     | popup 内容区域最小宽度                                              | -                    |
| `--popup-max-height`    | popup 内容区域最大高度                                              | `90%`                |
| `--popup-min-height`    | popup 内容区域最小高度                                              | `200px`              |
| `--popup-border-radius` | popup 圆角大小（仅当 position 为 bottom，且 props 设置 round 生效） | `16px`               |
