# Overlay 遮罩

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 安装使用

```tsx
import { Overlay } from "@quarkd/quark-react";
```

### 基础用法

```js
export default () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <div onClick={handleClick}></div>
      <Overlay open={open} onClose={handleClose} />
    </div>
  );
};
```

### 嵌入内容

```html
<Overlay open="{open}" onClose="{handleClose}">
  <div class="content"></div>
</Overlay>
<style>
  .content {
    border-radius: 4px;
    width: 200px;
    height: 200px;
    background-color: white;
  }
</style>
```

## API

### Props

| 参数    | 说明            | 类型         | 默认值    |
| ------- | --------------- | ------------ | --------- |
| open    | picker 是否显示 | `boolean `   | `require` |
| zindex  | 遮罩层级        | `number `    | `999`     |
| onClose | 遮罩关闭        | `() => void` | `require` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                   | 说明     | 默认值               |
| ---------------------- | -------- | -------------------- |
| `--overlay-background` | 遮罩背景 | `rgba(0, 0, 0, 0.7)` |
