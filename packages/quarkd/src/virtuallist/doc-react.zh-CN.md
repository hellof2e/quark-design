# VirtualList

### 介绍

虚拟列表，常用于渲染数据量非常大的列表，它可以保证只渲染当前的可视区域，其他部分在用户滚动到可视区域内之后再渲染。保证了页面的流畅。

### 安装使用

```tsx
import { VirtualList } from "@quarkd/quark-react";
```

### 基础用法

```tsx
export default () => {
  const [list, setList] = useState(new Array(100).fill(0).map((_, i) => i + 1));
  const virtualListRef = useRef(null);

  const onLoad = () => {
    const len = list.length;
    const arr = new Array(100).fill(0).map((_, i) => len + i + 1);
    const newList = [...list, ...arr];
    setList(newList);
    virtualListRef.current.setListData(newList);
  };

  const renderItem = (text) => {
    const div = `
      <div style="height: 50px; line-height: 50px; text-align: center;">${text}</div>
    `;
    return div;
  };

  return (
    <VirtualList
      ref={virtualListRef}
      itemheight={50}
      containerheight={500}
      onLoad={onLoad}
    />
  );
};
```

### Props

| 参数         | 说明                                                       | 类型         | 默认值      |
| ------------ | ---------------------------------------------------------- | ------------ | ----------- |
| error        | 是否加载失败，加载失败后点击错误提示可以重新触发 load 事件 | `boolean`    | `false`     |
| loading      | 是否处于加载状态，加载过程中不触发 load 事件               | `boolean`    | `false`     |
| finished     | 数据是否加载结束                                           | `boolean`    | `false`     |
| offset       | 滚动条与底部距离小于 offset 时触发 load 事件               | `number`     | `300`       |
| loadingtext  | 加载过程中的提示文案                                       | `string`     | `加载中...` |
| finishedtext | 加载完成后的提示文案                                       | `string`     |             |
| errortext    | 加载失败后的提示文案                                       | `string`     |             |
| textcolor    | 提示文案字体颜色                                           | `string`     | `#879099`   |
| onLoad       | 滚动条与底部距离小于 offset 时触发                         | `() => void` |             |
| onReload     | 发生错误, 点击重试时触发                                   | `() => void` |             |

### slots

| 名称     | 说明                         |
| -------- | ---------------------------- |
| content  | 要展示的内容                 |
| finished | 自定义的结束状态提示内容     |
| error    | 自定义的错误提示内容         |
| loading  | 自定义的加载过程中的提示信息 |
