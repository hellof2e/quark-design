# Rate 评分

## 介绍

评价打分组件

## 安装

```tsx
import { Rate } from "@quarkd/quark-react";
```

### 基本用法

```html
<Rate value="1"></Rate>
```

```css
/* 设置星星未选中的颜色 */
Rate {
  color: rgb(238, 238, 238);
}
```

### 自定义颜色

```html
<Rate value="2" active-color="green"></Rate>
```

### 禁用状态

```html
<Rate value="2" disabled></Rate>
```

### 只读状态

```html
<Rate value="2" readonly></Rate>
```

### 监听 change 事件

```tsx
export default () => {
  const onselect = (e) => {
    console.log(e.detail.value);
  };
  return <Rate value={rate} onChange={onselect} />;
};
```

## API

### Props

| 参数         | 说明                              | 类型                                 | 默认值    |
| ------------ | --------------------------------- | ------------------------------------ | --------- |
| defaultvalue | 默认选中 1-5 代表星级             | `string`                             | ` 0`      |
| value        | 选中，可接收异步数值 1-5 代表星级 | `string`                             | ` 0`      |
| size         | icon 字体大小                     | `string`                             | `25`      |
| disabled     | 是否禁用                          | `boolean`                            | `false`   |
| readonly     | 是否只读                          | `boolean`                            | `false`   |
| activecolor  | 选中的时候颜色                    | `string`                             | `#ffc800` |
| onChange     | 当前分值修改时时触发的事件        | `(e: { detail: { value: string } }) => void` |           |
