# Swipe

### 介绍

用于循环播放一组图片或内容。

### 安装使用

```tsx
import { Swipe, SwipeItem } from "@quarkd/quark-react";
```

### 基本使用

```html
<Swipe>
  <SwipeItem>
    <div>1</div>
  </SwipeItem>
  <SwipeItem>
    <div>2</div>
  </SwipeItem>
  <SwipeItem>
    <div>3</div>
  </SwipeItem>
  <SwipeItem>
    <div>4</div>
  </SwipeItem>
</Swipe>
```

### 圆形指示器

```html
<Swipe type="round">
  <SwipeItem>
    <div>1</div>
  </SwipeItem>
  <SwipeItem>
    <div>2</div>
  </SwipeItem>
  <SwipeItem>
    <div>3</div>
  </SwipeItem>
  <SwipeItem>
    <div>4</div>
  </SwipeItem>
</Swipe>
```

### 自动播放

```html
<Swipe autoplay>
  <SwipeItem>
    <div>1</div>
  </SwipeItem>
  <SwipeItem>
    <div>2</div>
  </SwipeItem>
  <SwipeItem>
    <div>3</div>
  </SwipeItem>
  <SwipeItem>
    <div>4</div>
  </SwipeItem>
</Swipe>
```

### 设置默认选中的 SwipeItem

```html
<Swipe defaultindex="2">
  <SwipeItem>
    <div>1</div>
  </SwipeItem>
  <SwipeItem>
    <div>2</div>
  </SwipeItem>
  <SwipeItem>
    <div>3</div>
  </SwipeItem>
  <SwipeItem>
    <div>4</div>
  </SwipeItem>
</Swipe>
```

### 自定义滑块大小

```html
<Swipe class="custom-style">
  <SwipeItem>
    <div>1</div>
  </SwipeItem>
  <SwipeItem>
    <div>2</div>
  </SwipeItem>
  <SwipeItem>
    <div>3</div>
  </SwipeItem>
  <SwipeItem>
    <div>4</div>
  </SwipeItem>
</Swipe>
```

### 设置指示器颜色

```html
<Swipe activecolor="red">
  <SwipeItem>
    <div>1</div>
  </SwipeItem>
  <SwipeItem>
    <div>2</div>
  </SwipeItem>
  <SwipeItem>
    <div>3</div>
  </SwipeItem>
  <SwipeItem>
    <div>4</div>
  </SwipeItem>
</Swipe>
```

### 自定义指示器

```js
export default () => {
  const handleChange = (e) => {
    const indicator = document.getElementById('indicator');
    indicator.innerHTML = `${e.detail.index + 1} / 4`;
  };
  return (
    <div >
      <Swipe onChange={handleChange}>
        <SwipeItem>
          <div  >1</div>
        </SwipeItem>
        <SwipeItem>
          <div  >2</div>
        </SwipeItem>
        <SwipeItem>
          <div  >3</div>
        </SwipeItem>
        <SwipeItem>
          <div  >4</div>
        </SwipeItem>
        <div id="indicator" slot="indicators" className="custom-indicator">
          {' '}
          1 / 4{' '}
        </div>
      </Swipe>
    </div>
  );
}

<style>
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 2;
}
</style>
```

### 监听 change 事件

```js
export default () => {
  const handleChange = (e) => {
    console.log(e.detail.index, 11111);
  };
  return (
    <div>
      <Swipe onChange={handleChange}>
        <SwipeItem>
          <div>1</div>
        </SwipeItem>
        <SwipeItem>
          <div>2</div>
        </SwipeItem>
        <SwipeItem>
          <div>3</div>
        </SwipeItem>
        <SwipeItem>
          <div>4</div>
        </SwipeItem>
      </Swipe>
    </div>
  );
};
```

## API

### Props

| 参数          | 说明                       | 类型                                     | 默认值    |
| ------------- | -------------------------- | ---------------------------------------- | --------- |
| type          | 轮播指示器类型,可选`round` | `string`                                 |           |
| duration      | 动画执行时间               | `number`                                 | `500`     |
| interval      | 自动播放时间间隔           | `number`                                 | `3000`    |
| defaultindex  | 默认选中的 index           | `number`                                 | `0`       |
| autoplay      | 是否自动播放               | `boolean`                                | `false`   |
| activecolor   | 指示器选中状态的颜色       | `string`                                 | `#0088ff` |
| inactivecolor | 指示器非选中状态的颜色     | `string `                                | `#d3dae0` |
| onChange      | 每一页轮播结束后触发       | `（e: {detail:{index: number}}）=> void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/theme)。

| 名称                            | 说明             | 默认值    |
| ------------------------------- | ---------------- | --------- |
| `--swipe-width`                 | 轮播卡片宽度     | `100%`    |
| `--swipe-height`                | 轮播卡片高度     | `100%`    |
| `--swipe-border-radius`         | 轮播卡片圆角     | `0`       |
| `--swipe-indicator-activecolor` | 轮播卡指示器颜色 | `#0088ff` |
| `--swipe-indicator-margin`      | 轮播指示器间距   | `2px`     |
