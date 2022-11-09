# ShareSheet

### 介绍

ShareSheet 分享面板

### 安装

```tsx
import ShareSheet from "quarkd/lib/sharesheet";
```

### 基本用法

```html
<div @click="showShareSheet()">点击</div>
```

```js
import ShareSheet from "quarkd/lib/sharesheet";
export default {
  methods: {
    showShareSheet() {
      ShareSheet({
        options: [
          {
            name: "微信",
            icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png",
          },
          {
            name: "微信朋友圈",
            icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png",
          },
          {
            name: "QQ",
            icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png",
          },
          {
            name: "QQ空间",
            icon: "https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png",
          },
          {
            name: "微博",
            icon: "https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png",
          },
          {
            name: "二维码",
            icon: "https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png",
          },
        ],
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
<div @click="showShareSheet()">点击</div>
```

```js
import ShareSheet from "quarkd/lib/sharesheet";
export default {
  methods: {
    showShareSheet() {
      ShareSheet({
        titleColor: "red",
        titleFontSize: 20,
        options: [
          {
            name: "微信",
            icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png",
          },
          {
            name: "微信朋友圈",
            icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png",
          },
          {
            name: "QQ",
            icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png",
          },
          {
            name: "QQ空间",
            icon: "https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png",
          },
          {
            name: "微博",
            icon: "https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png",
          },
          {
            name: "二维码",
            icon: "https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png",
          },
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
<div @click="showShareSheet()">点击</div>
```

```js
import ShareSheet from "quarkd/lib/sharesheet";
export default {
  methods: {
    showShareSheet() {
      ShareSheet({
        cancelColor: "red",
        options: [
          {
            name: "微信",
            icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png",
          },
          {
            name: "微信朋友圈",
            icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png",
          },
          {
            name: "QQ",
            icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png",
          },
          {
            name: "QQ空间",
            icon: "https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png",
          },
          {
            name: "微博",
            icon: "https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png",
          },
          {
            name: "二维码",
            icon: "https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png",
          },
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

| 参数           | 说明             | 类型                                      | 默认值    |
| -------------- | ---------------- | ----------------------------------------- | --------- |
| options        | 选项按钮         | `Option [] `                              | `require` |
| titleColor     | 标题文字颜色     | `string `                                 | `#969799` |
| titleFontSize  | 标题文字大小     | `number `                                 | `14`      |
| cancelColor    | 取消按钮文字颜色 | `string `                                 | `#646566` |
| cancelFontSize | 取消按钮文字大小 | `number`                                  | `16`      |
| zIndex         | sharesheet 层级  | `number `                                 | `999`     |
| select         | 选项选中回调     | `(index: number, action: Option) => void` |           |
| cancel         | 取消按钮点击回调 | `() => void`                              |           |
| close          | 蒙版点击回调     | `() => void `                             |           |

### Option 的数据结构如下

```js
type Option = {
  name: string,
  icon: string,
};

type ShareSheetParams = {
  options: Option[],
  titleColor?: string,
  titleFontSize?: number,
  cancelColor?: string,
  cancelFontSize?: number,
  select: (index: number, action: Option) => void,
  cancel?: () => void,
  close?: () => void,
  zIndex?: number,
};
```
