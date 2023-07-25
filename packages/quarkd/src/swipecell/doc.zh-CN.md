# Cell 单元格

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
  <quark-cell title="这是标题" desc="描述文字" />
  <div slot="left">
    <quark-button type="primary" shape="square"> 选择 </quark-button>
  </div>
  <div slot="right">
    <quark-button type="danger" shape="square"> 删除 </quark-button>
    <quark-button type="primary" shape="square"> 收藏 </quark-button>
  </div>
</quark-swipe-cell>
```

### 自定义内容

`quark-swipe-cell` 可以嵌套任意内容。

```html
<quark-swipe-cell>
  <quark-empty title="暂无数据" desc="快去添加数据吧~" type="local" />
  <div slot="right">
    <quark-button type="primary" shape="square">添加</quark-button>
  </div>
</quark-swipe-cell>
```

### 异步关闭

通过`setBeforeClose`方法，设置回调函数，可以自定义两侧滑动内容关闭时的行为。

```html
<quark-swipe-cell ref="asyncSwipeCell">
  <quark-cell title="这是标题" desc="描述文字" />
  <div slot="right">
    <quark-button type="primary" shape="square">删除</quark-button>
  </div>
</quark-swipe-cell>
```

```js
export default {
  mounted() {
    this.$refs.asyncSwipeCell.setBeforeClose((position: SwipeCellPosition) => {
      if (position === "right") {
        return new Promise((resolve) => {
          const toast = Toast.loading("请求中");
          setTimeout(() => {
            toast.hide();
            Toast.success("删除成功");
            resolve(true);
          }, 1000);
        });
      } else {
        return true;
      }
    });
  },
};
```

## API

### Props

| 方法名     | 说明                 | 类型               | 默认值  |
| ---------- | -------------------- | ------------------ | ------- |
| name       | 唯一标识符           | `number \| string` | `''`    |
| leftwidth  | 指定左侧滑动区域宽度 | `number`           | `auto`  |
| rightwidth | 指定右侧滑动区域宽度 | `number`           | `auto`  |
| disabled   | 是否禁用滑动         | `boolean `         | `false` |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 默认显示的内容     |
| left    | 左侧滑动区域的内容 |
| right   | 右侧滑动区域的内容 |

### Events

| 参数  | 说明       | 类型                                                         |
| ----- | ---------- | ------------------------------------------------------------ |
| click | 点击时触发 | `(args: { detail: { positon: SwipeCellPosition } }) => void` |
| open  | 打开时触发 | `(args: Params) => void`                                     |
| close | 关闭时触发 | `(args: Params) => void`                                     |

### Methods

| 名称           | 说明                                                          | 类型                                                       |
| -------------- | ------------------------------------------------------------- | ---------------------------------------------------------- |
| open           | 打开单元格侧边栏                                              | `(args: SwipeCellSide) => void`                            |
| close          | 收起单元格侧边栏                                              | `() => void`                                               |
| setBeforeClose | 设置关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(args: SwipeCellPosition) => boolean \| Promise<boolean>` |

### 类型定义

```ts
type SwipeCellSide = "left" | "right";
type SwipeCellPosition = SwipeCellSide | "cell" | "outside";
type Params = {
  detail: {
    name: string | number;
    position: SwipeCellPosition;
  };
};
```
