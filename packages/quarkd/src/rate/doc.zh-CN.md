# Rate 评分

## 介绍

评价打分组件。

## 安装

```tsx
import "quarkd/lib/rate";
```

### 基本用法

```html
<quark-rate value="1"></quark-rate>
```

```css
/* 设置星星未选中的颜色 */
quark-rate {
  color: rgb(238, 238, 238);
}
```

### 自定义颜色

```html
<quark-rate value="2" active-color="green"></quark-rate>
```

### 禁用状态

```html
<quark-rate value="2" disabled></quark-rate>
```

### 只读状态

```html
<quark-rate value="2" readonly></quark-rate>
```

### 监听 change 事件

```html
<quark-rate :value="rate" @change="onselect"></quark-rate>
```

```javascript
 onselect(e) { console.log(e.detail.value) }
```

### 图片 icon

```html
<quark-rate
  defaultvalue="2"
  imgicon="https://vue-quarkdesign.hellobike.com/assets/quark-logo.f9a6a307.png"
></quark-rate>
```

## API

### Props

| 参数         | 说明                              | 类型      | 默认值    |
| ------------ | --------------------------------- | --------- | --------- |
| defaultvalue | 默认选中 1-5 代表星级             | `string`  | ` 0`      |
| value        | 选中，可接收异步数值 1-5 代表星级 | `string`  | ` 0`      |
| size         | icon 字体大小                     | `string`  | `25`      |
| disabled     | 是否禁用                          | `boolean` | `false`   |
| readonly     | 是否只读                          | `boolean` | `false`   |
| activecolor  | 选中的时候颜色                    | `string`  | `#ffc800` |
| imgicon      | 图片 icon                         | `string`  | `-`       |

### Event

| 参数   | 说明                       | 类型                                         |
| ------ | -------------------------- | -------------------------------------------- |
| change | 当前分值修改时时触发的事件 | `(e: { detail: { value: string } }) => void` |
