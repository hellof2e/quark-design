# ActionSheet

### Intro

The pop-up modal panel at the bottom contains multiple options related to the current situation.

### Install

```ts
import ActionSheet from "quarkd/lib/action-sheet";
```

### Basic Usage

```html
<div @click="showActionSheet()">Click</div>
```

```js
export default {
  methods: {
    showActionSheet() {
      const actionSheet = ActionSheet({
        actions: [
          { name: "Option 1" },
          { name: "Option 2" },
          { name: "Option 3" },
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### Show Title

```html
<div @click="showActionSheet()">Click</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "This is title message",
        actions: [
          { name: "Option 1" },
          { name: "Option 2" },
          { name: "Option 3" },
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### Show Cancel Button

```html
<div @click="showActionSheet()">Click</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "This is title message",
        cancelText: "Cancel",
        actions: [
          { name: "Option 1" },
          { name: "Option 2" },
          { name: "Option 3" },
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### Custom Title Style

```html
<div @click="showActionSheet()">Click</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "This is title message",
        titleColor: "red",
        titleFontSize: 20,
        actions: [
          { name: "Option 1" },
          { name: "Option 2" },
          { name: "Option 3" },
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### Custom Options Style

```html
<div @click="showActionSheet()">Click</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "This is title message",
        titleColor: "red",
        titleFontSize: 20,
        actions: [
          { name: "Option 1", color: "#999", fontSize: 20 },
          { name: "Option 2" },
          { name: "Option 3" },
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### Custom Cancel Button Style

```html
<div @click="showActionSheet()">Click</div>
```

```js
import ActionSheet from "quarkd/lib/action-sheet";
export default {
  methods: {
    showActionSheet() {
      const pop = ActionSheet({
        title: "This is title message",
        cancelText: "Cancel",
        cancelTextColor: "red",
        cancelTextFontSize: 20,
        actions: [
          { name: "Option 1" },
          { name: "Option 2" },
          { name: "Option 3" },
        ],
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

| Attribute          | Description                  | Type                                      | Default   |
| ------------------ | ---------------------------- | ----------------------------------------- | --------- |
| title              | Title                        | `string`                                  |           |
| actions            | Options                      | `Action []`                               | `require` |
| cancelText         | Text of cancel button        | `string `                                 |
| titleColor         | Title color                  | `string `                                 | `#969799` |
| titleFontSize      | Title font size              | `number `                                 | `14`      |
| cancelTextColor    | Text color of cancel button  | `string `                                 | `#646566` |
| cancelTextFontSize | Font size of cancel button   | `number`                                  | `16`      |
| zIndex             | actionsheet z-index          | `number `                                 | `999`     |
| select             | Selected callback            | `(index: number, action: Action) => void` |           |
| cancel             | Cancel button click callback | `() => void `                             |           |
| close              | Mask click callback          | `() => void`                              |           |

### Data Structure of Action

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
