# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 安装使用

```tsx
import "quarkd/lib/swipecell";
```

### 基本用法

`quark-swipe-cell` 组件提供了 left 和 right 两个插槽，用于定义两侧滑动区域的内容。

```html
<quark-swipe-cell>
  <quark-button slot="left" size="big" shape="square" type="danger"
    >按钮1</quark-button
  >
  <quark-cell title="标题" desc="描述"></quark-cell>
  <quark-button slot="right" size="big" shape="square" type="primary"
    >按钮2</quark-button
  >
</quark-swipe-cell>
```

## API

### Props

| 方法名      | 说明                 | 类型      | 默认值 |
| ----------- | -------------------- | --------- | ------ |
| left-width  | 指定左侧滑动区域宽度 | `number`  | auto   |
| right-width | 指定左侧滑动区域宽度 | `number`  | auto   |
| disabled    | 是否禁止滑动         | `boolean` | false  |
| threshold   | 触发阈值             | `number`  | 0.15   |

### Method

| 名称   | 说明       | 类型                            |
| ------ | ---------- | ------------------------------- |
| open   | 打开侧边栏 | `(side: SwipeCellSide) => void` |
| close  | 关闭侧边栏 | `(side: SwipeCellSide) => void` |
| toogle | 切换侧边栏 | `(side: SwipeCellSide) => void` |

### Slots

| 名称            | 说明     |
| --------------- | -------- |
| slot            | 自定义   |
| slot name=left  | 左滑内容 |
| slot name=right | 右滑内容 |

### Event

| 名称  | 说明         | 类型                                                   |
| ----- | ------------ | ------------------------------------------------------ |
| open  | 滑动开时触发 | `e: ({ detail: { position: SwipeCellSide } }) => void` |
| close | 滑动关时触发 | `e: ({ detail: { position: SwipeCellSide } }) => void` |
