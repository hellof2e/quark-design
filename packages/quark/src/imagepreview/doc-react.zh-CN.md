# ImagePreview 图片预览

### 介绍

提供基础图片预览功能

### 安装使用

其中 `imagepreview` 为函数式用法、`ImagePreview` 为组件式用法

```tsx
import {
  imagepreview,
  ImagePreview,
  ImagePreviewRef,
} from "@quarkd/quark-react";
```

### 基础用法

预览图片

```js
imagepreview({
  images: ["1.png", "2.png", "3.png"],
});
```

### 指定初始位置

指定图片预览位置默认从 1 开始

```js
imagepreview({
  startPosition: 3,
  images: ["1.png", "2.png", "3.png"],
});
```

### 监听滑动事件

```js
imagepreview({
  images: ["1.png", "2.png", "3.png"],
  change: (index) => Toast.text(`当前移动位置${index + 1}`),
});
```

### 监听关闭事件

```js
imagepreview({
  images: ["1.png", "2.png", "3.png"],
  close: (index) => Toast.text(`当前关闭位置${index + 1}`),
});
```

### 标签式调用

```tsx
export default () => {
  const preview = useRef<ImagePreviewRef>(null);
  const [open, setOpen] = useState(false);
  const baseUrls = [
    "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
    "https://m.hellobike.com/resource/helloyun/15697/1V_2oJv02t.png",
    "https://m.hellobike.com/resource/helloyun/15697/Q6t6B_noNetWork.png",
  ];

  const componentsClick = () => {
    setOpen(true);
    preview.current.setData({
      images: baseUrls,
    });
  };
  return (
    <div>
      <div onClick={componentsClick} />
      <ImagePreview ref={preview} open={open} />
    </div>
  );
};
```

### 自定义导航

配合 change 事件显示下标

```tsx
export default () => {
  const baseUrls = [
    "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
    "https://m.hellobike.com/resource/helloyun/15697/1V_2oJv02t.png",
    "https://m.hellobike.com/resource/helloyun/15697/Q6t6B_noNetWork.png",
  ];
  const [index, setIndex] = useState(0);
  const preview2 = useRef<ImagePreviewRef>(null);

  const componentsClick2 = () => {
    setOpen2(true);
    preview2.current.setData({
      images: baseUrls,
      change: (_index) => setIndex(_index),
      close: () => setOpen2(false),
    });
  };

  return (
    <div>
      <div onClick={componentsClick2}>自定义导航</div>
      <ImagePreview ref={preview2} open={open}>
        <p className="my-indicator" slot="indicator">
          Page{{ index }}{" "}
        </p>
      </ImagePreview>
    </div>
  );
};
```

## Props

| 参数 | 说明           | 类型       | 默认值  |
| ---- | -------------- | ---------- | ------- |
| open | 标签式调用属性 | `boolean ` | `false` |

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
  close: (index: number) => void // 组件关闭事件
};
```

### slot

| 名称           | 说明           |
| -------------- | -------------- |
| name=indicator | 自定义分页显示 |
