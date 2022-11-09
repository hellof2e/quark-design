# Overlay

### Intro

Create a mask layer to emphasize specific page elements and prevent users from performing other operations.

### Install

```tsx
import "quarkd/lib/overlay";
```

### Basic Usage

```html
<template>
  <div>
    <h2>Basic usage</h2>
    <div @click="click">open</div>
    <quark-overlay :open="open" @close="close" />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
  },
};
```

### Embedded Content

```html
<template>
  <div>
    <h2>Custom header</h2>
    <div @click="click">Custom heade</div>
    <quark-overlay :open="open" @close="close">
      <div class="content"></div>
    </quark-overlay>
  </div>
</template>
<style>
  .content {
    border-radius: 4px;
    width: 200px;
    height: 200px;
    background-color: white;
  }
</style>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
  },
};
```

## API

### Props

| Attribute | Description            | Type      | Default   |
| --------- | ---------------------- | --------- | --------- |
| open      | Whether to show picker | `boolean` | `require` |
| zindex    | z-index                | `number ` | `999`     |

### Events

| Event | Description | Type         |
| ----- | ----------- | ------------ |
| close | Close mask  | `() => void` |

|

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to [Theme customization](#/zh-CN/guide/theme)。

| Name                   | Description     | Default Value        |
| ---------------------- | --------------- | -------------------- |
| `--overlay-background` | Mask background | `rgba(0, 0, 0, 0.7)` |
