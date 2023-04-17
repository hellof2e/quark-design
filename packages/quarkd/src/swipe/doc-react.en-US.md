# Swipe

### Intro

Used to loop a group of pictures or content.

### Install

```tsx
import { Swipe, SwipeItem } from "@quarkd/quark-react";
```

### Basic Usage

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

### Round Indicator

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

### Autoplay

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

### Default SwipeItem

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

### Set SwipeItem Size

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

### Set Indicator color

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

### Custom Indicator

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

### Change Event

```js
export default () => {
  const handleChange = (e) => {
    console.log(e.detail.index);
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

| Attibute      | Description                           | Type                                     | Default   |
| ------------- | ------------------------------------- | ---------------------------------------- | --------- |
| type          | Indicator type, can be set to `round` | `string`                                 |           |
| duration      |                                       | `number`                                 | `500`     |
| interval      | Animation duration                    | `number `                                | `3000`    |
| defaultindex  | Default SwipeItem                     | `number `                                | `0`       |
| autoplay      | Whether to enable autoplay            | ` boolean`                               | `false`   |
| activecolor   | Selected indicator color              | `string`                                 | `#0088ff` |
| inactivecolor | Not selected indicator color          | `string`                                 | `#d3dae0` |
| onChange      | Emitted when current swipe changed    | `（e: {detail:{index: number}}）=> void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                            | Description             | Default   |
| ------------------------------- | ----------------------- | --------- |
| `--swipe-width`                 | SwipeItem width         | `100%`    |
| `--swipe-height`                | SwipeItem height        | `100%`    |
| `--swipe-border-radius`         | SwipeItem border radius | `0`       |
| `--swipe-indicator-activecolor` | Indicator color         | `#0088ff` |
| `--swipe-indicator-margin`      | Indicator margin        | `2px`     |
