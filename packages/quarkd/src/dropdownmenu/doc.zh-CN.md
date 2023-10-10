# ActionSheet

### 介绍

ActionSheet 动作面板

### 安装使用

```tsx
import ActionSheet from "quarkd/lib/action-sheet";
```

### 基本用法

```html
<div @click="showActionSheet()">点击</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const actionSheet = ActionSheet({
        actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### 带标题

```html
<div @click="showActionSheet()">点击</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "我是标题信息",
        actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### 带取消按钮

```html
<div @click="showActionSheet()">点击</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "我是标题信息",
        cancelText: "取消",
        actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### 自定义标题样式

```html
<div @click="showActionSheet()">点击</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "我是标题信息",
        titleColor: "red",
        titleFontSize: 20,
        actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### 自定义选项样式

```html
<div @click="showActionSheet()">点击</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "我是标题信息",
        titleColor: "red",
        titleFontSize: 20,
        actions: [
          { name: "选项一", color: "#999", fontSize: 20 },
          { name: "选项二" },
          { name: "选项三" },
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### 自定义取消按钮样式

```html
<div @click="showActionSheet()">点击</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "我是标题信息",
        cancelText: "取消",
        cancelTextColor: "red",
        cancelTextFontSize: 20,
        actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

## API

### Props

| 参数               | 说明             | 类型                                      | 默认值    |
| ------------------ | ---------------- | ----------------------------------------- | --------- |
| title              | 标题文字         | `string`                                  |           |
| actions            | 选项按钮         | `Action []`                               | `require` |
| cancelText         | 取消按钮         | `string`                                  |
| titleColor         | 标题文字颜色     | `string `                                 | `#969799` |
| titleFontSize      | 标题文字大小     | `number `                                 | `14`      |
| cancelTextColor    | 取消按钮文字颜色 | `string `                                 | `#646566` |
| cancelTextFontSize | 取消按钮文字大小 | `number `                                 | `16`      |
| zIndex             | actionsheet 层级 | `number `                                 | `999`     |
| select             | 选项选中回调     | `(index: number, action: Action) => void` |           |
| cancel             | 取消按钮点击回调 | `() => void `                             |           |
| close              | 蒙版点击回调     | `() => void `                             |           |

### Action 的数据结构如下

```js
type Action = {
  name: string,
  color?: string,
  fontSize?: number,
};

type ActionParams = {
  title?: string,
  actions: Action[],
  cancelText?: string,
  titleColor?: string,
  titleFontSize?: number,
  cancelTextColor?: string,
  cancelTextFontSize?: number,
  select: (index: number, action: Action) => void,
  cancel?: () => void,
  close?: () => void,
  zIndex?: number,
};
```
