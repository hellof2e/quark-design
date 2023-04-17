# VirtualList

### Intro

Virtual list is often used to render a list with a very large amount of data. It can ensure that only the current visible area is rendered, and other parts are rendered after the user scrolls into the visible area. The smoothness of the page is guaranteed.

### Install

```tsx
import "quarkd/lib/virtuallist";
```

### Basic Usage

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

| Arribute        | Description               | Type     | Default |
| --------------- | ------------------------- | -------- | ------- |
| itemheight      | List item height, unit px | `number` | `50`    |
| containerheight | Container height, unit px | `number` | `500`   |

### Event

| Event | Description                            | Type         |
| ----- | -------------------------------------- | ------------ |
| load  | Triggered when scrolling to the bottom | `() => void` |

### Methods

| Name          | Description                                                                       | Type                        |
| ------------- | --------------------------------------------------------------------------------- | --------------------------- |
| setListData   | Used to set all data of the list                                                  | `(listData: any[]) => void` |
| setRenderItem | The rendering function used to set the list items, which needs to return a string | `(itemData: any) => string` |
