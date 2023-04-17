# Skeleton 骨架屏

### 介绍

用于在内容加载过程中展示一组占位图形。

### 安装使用

```jsx
import "quarkd/lib/skeleton";
```

### 基础用法

```html
<quark-skeleton :row="2"></quark-skeleton>
```

### 显示头像、标题

```html
<quark-skeleton title avatar :row="2"></quark-skeleton>
```

### 显示子组件

```html
<quark-skeleton title avatar :row="2" :hide="hide">
  <div>正式内容</div>
</quark-skeleton>
```

### 设置段落宽度

段落宽度使用 `rowwidths` 属性，采用逗号进行分割：比如 `row` 设为 `3`，则可设置 `rowwidths` 为 `100%,100%,60%`

```html
<quark-skeleton
  title
  avatar
  :row="3"
  rowwidths="100%,100%,60%"
></quark-skeleton>
```

## API

### Props

| 参数        | 说明               | 类型                | 默认值  |
| ----------- | ------------------ | ------------------- | ------- |
| avatar      | 是否显示头像占位图 | `boolean`           | `false` |
| avatarshape | 头像占位图形状     | `round` 或 `square` | `round` |
| title       | 是否显示标题占位图 | `boolean`           | `false` |
| row         | 段落占位图行数     | `number`            | -       |
| rowwidths   | 段落每行宽度       | `string`            | -       |
| hide        | 关闭骨架屏         | `boolean`           | `false` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                                 | 说明                 | 默认值    |
| ------------------------------------ | -------------------- | --------- |
| `--skeleton-avatar-size`             | 头像占位符尺寸       | `32px`    |
| `--skeleton-avatar-margin-right`     | 头像占位符距右侧间距 | `16px`    |
| `--skeleton-avatar-background-color` | 头像占位符背景色     | `#f2f3f5` |
| `--skeleton-title-width`             | 标题占位图宽度       | `40%`     |
| `--skeleton-row-height`              | 段落占位图高度       | `16px`    |
| `--skeleton-row-background-color`    | 段落占位图背景       | `#f2f3f5` |
| `--skeleton-row-border-radius`       | 段落占位图圆角       | `0`       |
| `--skeleton-row-margin-top`          | 段落占位图行间距     | `12px`    |
