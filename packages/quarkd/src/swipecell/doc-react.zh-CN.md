# Cell 单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 安装使用

```tsx
import { SwipeCell, SwipeCellRef } from "@quarkd/quark-react";
```

### 基本用法

`SwipeCell` 组件提供了 left 和 right 两个插槽，用于定义两侧滑动区域的内容。

```tsx
export default () => {
  return (
    <SwipeCell>
      <Cell title="这是标题" desc="描述文字" />
      <div slot="left">
        <Button type="primary" shape="square">
          选择
        </Button>
      </div>
      <div slot="right">
        <Button type="danger" shape="square">
          删除
        </Button>
        <Button type="primary" shape="square">
          收藏
        </Button>
      </div>
    </SwipeCell>
  );
};
```

### 自定义内容

`SwipeCell` 可以嵌套任意内容。

```tsx
export default () => {
  return (
    <SwipeCell>
      <Empty title="暂无数据" desc="快去添加数据吧~" type="local" />
      <div slot="right">
        <Button type="primary" shape="square">
          添加
        </Button>
      </div>
    </SwipeCell>
  );
};
```

### 异步关闭

通过`setBeforeClose`方法，设置回调函数，可以自定义两侧滑动内容关闭时的行为。

```tsx
export default () => {
  const swipeCellRef = useRef<SwipeCellRef>(null);

  useEffect(() => {
    const { current } = swipeCellRef;
    current.setBeforeClose((position: SwipeCellPosition) => {
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
  }, []);

  return (
    <SwipeCell ref={swipeCellRef}>
      <Cell title="这是标题" desc="描述文字" />
      <div slot="right">
        <Button type="primary" shape="square">
          删除
        </Button>
      </div>
    </SwipeCell>
  );
};
```

## API

### Props

| 方法名     | 说明                 | 类型                                                         | 默认值  |
| ---------- | -------------------- | ------------------------------------------------------------ | ------- |
| name       | 唯一标识符           | `number \| string`                                           | `''`    |
| leftwidth  | 指定左侧滑动区域宽度 | `number`                                                     | `auto`  |
| rightwidth | 指定右侧滑动区域宽度 | `number`                                                     | `auto`  |
| disabled   | 是否禁用滑动         | `boolean `                                                   | `false` |
| onClick    | 点击时触发           | `(args: { detail: { positon: SwipeCellPosition } }) => void` |
| onOpen     | 打开时触发           | `(args: Params) => void`                                     |
| onClose    | 关闭时触发           | `(args: Params) => void`                                     |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 默认显示的内容     |
| left    | 左侧滑动区域的内容 |
| right   | 右侧滑动区域的内容 |

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
