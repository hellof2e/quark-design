# ActionSheet

### Intro

The pop-up modal panel at the bottom contains multiple options related to the current situation.

### Install

```tsx
import { ActionSheet } from "@quarkd/quark-react";
```

### Basic Usage

```js
export default () => {
  const showBase = () => {
    ActionSheet({
      actions: [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }],
      select: (index, action) => {
        console.log.(action.name);
      },
    });
  };

  return (
    <div>
      <div onClick={showBase} title="Basic Usage"></div>
    </div>
  );
}
```

### Show Title

```js
ActionSheet({
  title: "This is title message",
  actions: [{ name: "Option 1" }, { name: "Option 2" }, { name: "Option 3" }],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
```

### Show Cancel Button

```js
ActionSheet({
  title: "This is title message",
  cancelText: "Cancel",
  actions: [{ name: "Option 1" }, { name: "Option 2" }, { name: "Option 3" }],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
```

### Custom Title Style

```js
ActionSheet({
  title: "This is title message",
  titleColor: "red",
  titleFontSize: 20,
  actions: [{ name: "Option 1" }, { name: "Option 2" }, { name: "Option 3" }],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
```

### Custom Options Style

```js
ActionSheet({
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
```

### Custom Cancel Button Style

```js
ActionSheet({
  title: "This is title message",
  cancelText: "Cancel",
  cancelTextColor: "red",
  cancelTextFontSize: 20,
  actions: [{ name: "Option 1" }, { name: "Option 2" }, { name: "Option 3" }],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
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
| cancelTextFontSize | Font size of cancel button   | `number `                                 | `16`      |
| zIndex             | actionsheet z-index          | `number `                                 | `999`     |
| select             | Selected callback            | `(index: number, action: Action) => void` |           |
| cancel             | Cancel button click callback | `() => void `                             |           |
| close              | Mask click callback          | `() => void `                             |           |

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
