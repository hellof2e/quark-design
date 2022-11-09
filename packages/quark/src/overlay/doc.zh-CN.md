# Overlay 遮罩

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 安装使用

```tsx
import "quarkd/lib/overlay";
```

### 基础用法

```html
<template>
  <div>
    <h2>基础用法</h2>
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

### 嵌入内容

```html
<template>
  <div>
    <h2>自定义头部</h2>
    <div @click="click">自定义头部</div>
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

| 参数   | 说明            | 类型       | 默认值    |
| ------ | --------------- | ---------- | --------- |
| open   | picker 是否显示 | `boolean ` | `require` |
| zindex | 遮罩层级        | `number `  | `999`     |

### Events

| 名称  | 说明     | 类型         |
| ----- | -------- | ------------ |
| close | 遮罩关闭 | `() => void` |

|

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                   | 说明     | 默认值               |
| ---------------------- | -------- | -------------------- |
| `--overlay-background` | 遮罩背景 | `rgba(0, 0, 0, 0.7)` |
