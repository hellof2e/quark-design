# Textarea 文本域

### 介绍

多行文本输入框

### 安装使用

```tsx
import { Textarea } from "@quarkd/quark-react";
```

### 基本使用

```html
<textarea />
```

### 指定行数

```html
<textarea rows="6" />
```

### 根据内容自动调整高度

```html
<textarea autosize />
```

### 字数统计

```html
<textarea showcount />
```

### 字数限制

```html
<textarea showcount maxlength="50" />
```

### 禁用状态

```html
<textarea disabled />
```

### 自定义样式

```html
<textarea showcount class="custom-style" />
```

```css
.custom-style {
  --textarea-border-color: red;
  --textarea-color: red;
  --textarea-count-color: red;
  --textarea-placeholder-color: red;
  --textarea-text-count-align: "left";
}
```

### 触发事件

```tsx
export default () => {
  return (
    <Textarea
      onBlur={(event) => {
        Toast.text(`${event.target.value}, blur`);
      }}
      onInput={(event) => {
        Toast.text(`${event.target.value}, input`);
      }}
      onFocus={(event) => {
        Toast.text(`${event.target.value}, focus`);
      }}
      onCompositionStart={(event) => {
        Toast.text(`${event.target.value}, compositionStart`);
      }}
    />
  );
};
```

## API

### Props

| 参数               | 说明                                      | 类型                                         | 默认值  |
| ------------------ | ----------------------------------------- | -------------------------------------------- | ------- |
| value              | 输入值                                    | `string`                                     |
| placeholder        | 提示文本                                  | `string`                                     |
| rows               | 行数                                      | `number`                                     | `2`     |
| maxlength          | 最大字符数                                | `number`                                     | `-`     |
| showcount          | 显示字数                                  | `boolean`                                    | `false` |
| autocomplete       | 自动补全                                  | `boolean`                                    | `false` |
| disabled           | 是否禁用                                  | `boolean`                                    | `false` |
| readonly           | 是否只读                                  | `boolean`                                    | `false` |
| id                 | textarea 元素的 id，常用来配合 label 使用 | `string`                                     |
| onInput            | 文本域内容变化时触发                      | `(e: { detail: { value: string } }) => void` |         |
| onFocus            | 文本域获得焦点时触发                      | `(e: { detail: { value: string } }) => void` |         |
| onBlur             | 文本域失去焦点时触发                      | `(e: { detail: { value: string } }) => void` |         |
| onCompositionStart | 输入法编辑器开始新的输入时触发            | `(）=> void `                                |

## CSS 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                           | 说明           | 默认值     |
| ------------------------------ | -------------- | ---------- |
| `--textarea-color`             | 文字颜色       | `#242729 ` |
| `--textarea-font-size`         | 文字大小       | `14px`     |
| `--textarea-text-align`        | 文字位置       | `left`     |
| `--textarea-text-count-align`  | 统计字数位置   | `right`    |
| `--textarea-count-color`       | 统计字数颜色   | `#242729`  |
| `--textarea-border-color`      | 文本域边框颜色 | `#242729`  |
| `--textarea-placeholder-color` | 占位文字颜色   | `#242729`  |
