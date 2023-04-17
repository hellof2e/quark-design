# ImagePreview 图片预览

### 介绍

提供基础图片预览功能

### 安装使用

```tsx
import imagePreview from "quarkd/lib/imagepreview";
```

### 基础用法

预览图片

```js
imagePreview({
  images: ["1.png", "2.png", "3.png"],
});
```

### 指定初始位置

指定图片预览位置默认从 1 开始

```js
imagePreview({
  startPosition: 3,
  images: ["1.png", "2.png", "3.png"],
});
```

### 监听滑动事件

```js
imagePreview({
  images: ["1.png", "2.png", "3.png"],
  change: (index) => Toast.text(`当前移动位置${index + 1}`),
});
```

### 监听关闭事件

```js
imagePreview({
  images: ["1.png", "2.png", "3.png"],
  close: (index) => Toast.text(`当前关闭位置${index + 1}`),
});
```

### 标签式调用

```html
<quark-image-preview ref="preview" :open="open" />
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  mounted() {
    setTimeout(() => {
      //模拟异步获取数据
      const preview = this.$refs.preview;
      preview.setData({
        images: ["1.png", "2.png", "3.png"],
        close: () => (this.open = false),
      });
    }, 1000);
  },
  methods: {},
};
```

### 自定义导航

配合 change 事件显示下标

```html
<quark-image-preview ref="preview2" :open="open">
  <p class="my-indicator" slot="indicator">第{{ index }} 页</p>
</quark-image-preview>
```

```js
export default {
  data() {
    return {
      open: false,
      index: 1,
    };
  },
  mounted() {
    setTimeout(() => {
      //模拟异步获取数据
      const preview = this.$refs.preview;
      preview2.setData({
        images: ["1.png", "2.png", "3.png"],
        change: (index) => (this.index = index + 1),
        close: () => (this.open = false),
      });
    }, 1000);
  },
  methods: {},
};
```

## API

### Props

| 参数 | 说明           | 类型      | 默认值  |
| ---- | -------------- | --------- | ------- |
| open | 标签式调用属性 | `boolean` | `false` |

### 方法

| 名称    | 说明                 | 类型                      |
| ------- | -------------------- | ------------------------- |
| setData | 用于设置图片预览数据 | `(data: Options) => void` |

### 类型定义

```js
type Options = {
  images: string[] // 要显示的图片数组
  startPosition?: number // 默认显示位置
  change?: (index: number) => void // 图片滑到事件
  close?: (index: number) => void // 组件关闭事件
};
```

### slot

| 名称           | 说明           |
| -------------- | -------------- |
| name=indicator | 自定义分页显示 |
