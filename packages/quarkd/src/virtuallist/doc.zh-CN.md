# VirtualList 列表

### 介绍

虚拟列表，常用于渲染数据量非常大的列表，它可以保证只渲染当前的可视区域，其他部分在用户滚动到可视区域内之后再渲染。保证了页面的流畅。

### 安装使用

```tsx
import "quarkd/lib/virtuallist";
```

### 基础用法

```html
<quark-virtuallist
  ref="virtualListRef"
  :itemheight="50"
  :containerheight="500"
  @load="onLoad"
/>
```

```javascript
data() {
  return {
    list: new Array(100).fill(0).map((_, i) => i + 1),
    loading: false,
    finished: false,
  };
},
mounted() {
  this.$refs.virtualListRef.setListData(this.list);
  this.$refs.virtualListRef.setRenderItem(this.renderItem);
},
methods: {
  onLoad() {
    const len = this.list.length;
    const arr = new Array(100).fill(0).map((_, i) => len + i + 1);
    this.list = this.list.concat(arr);
    this.$refs.virtualListRef.setListData(this.list);
  },
  renderItem() {
    const div = `
      <div style="height: 50px; line-height: 50px; text-align: center;">${text}</div>
    `;
    return div;
  }
}
```

## API

### Props

| 参数            | 说明                | 类型     | 默认值 |
| --------------- | ------------------- | -------- | ------ |
| itemheight      | 列表项高度，单位 px | `number` | `50`   |
| containerheight | 容器高度，单位 px   | `number` | `500`  |

### Event

| 名称 | 说明               | 类型          |
| ---- | ------------------ | ------------- |
| load | 滑动至底部时时触发 | `() => void ` |

### 方法

| 名称          | 说明                                   | 类型                        |
| ------------- | -------------------------------------- | --------------------------- |
| setListData   | 用于设置列表所有数据                   | `(listData: any[]) => void` |
| setRenderItem | 用于设置列表项的渲染函数，需返回字符串 | `(itemData: any) => string` |
