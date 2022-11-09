# Swipe

### Intro

Used to loop a group of pictures or content.

### Install

```tsx
import "quarkd/lib/swipe";
```

### Basic Usage

```html
<quark-swipe>
  <quark-swipe-item>
    <div class="one">1</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">2</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="one">3</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">4</div>
  </quark-swipe-item>
</quark-swipe>
```

### Round Indicator

```html
<quark-swipe type="round">
  <quark-swipe-item>
    <div class="one">1</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">2</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="one">3</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">4</div>
  </quark-swipe-item>
</quark-swipe>
```

### Autoplay

```html
<quark-swipe autoplay>
  <quark-swipe-item>
    <div class="one">1</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">2</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="one">3</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">4</div>
  </quark-swipe-item>
</quark-swipe>
```

### Default SwipeItem

```html
<quark-swipe :defaultindex="2">
  <quark-swipe-item>
    <div class="one">1</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">2</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="one">3</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">4</div>
  </quark-swipe-item>
</quark-swipe>
```

### Set SwipeItem Size

```html
<quark-swipe class="custom-style">
  <quark-swipe-item>
    <div class="one">1</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">2</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="one">3</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">4</div>
  </quark-swipe-item>
</quark-swipe>
```

### Set Indicator color

```html
<quark-swipe activecolor="red">
  <quark-swipe-item>
    <div class="one">1</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">2</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="one">3</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">4</div>
  </quark-swipe-item>
</quark-swipe>
```

### Custom Indicator

```html
<quark-swipe id="custom-indicator" @change="onChange">
  <quark-swipe-item>
    <div class="one">1</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">2</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="one">3</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">4</div>
  </quark-swipe-item>
  <div slot="indicators" class="custom-indicator" id="indicator">1/4</div>
</quark-swipe>

<script>
  export default {
    methods: {
      onChange(e) {
        const indicator = document.getElementById("indicator");
        indicator.innerHTML = `${e.detail.index + 1} / 4`;
      },
    },
  };
</script>

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

```html
<quark-swipe @change="onChange">
  <quark-swipe-item>
    <div class="one">1</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">2</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="one">3</div>
  </quark-swipe-item>
  <quark-swipe-item>
    <div class="two">4</div>
  </quark-swipe-item>
</quark-swipe>

<script>
  export default {
    methods: {
      onChange(e) {
        console.log(e.detail.index);
      },
    },
  };
</script>

<style>
  .one {
    width: 100%;
    height: 200px;
    background-color: #66c6f2;
  }
  .two {
    width: 100%;
    height: 200px;
    background-color: #39a9ed;
  }
</style>
```

## API

### Props

| Attibute      | Description                           | Type       | Default   |
| ------------- | ------------------------------------- | ---------- | --------- |
| type          | Indicator type, can be set to `round` | `string`   |           |
| duration      |                                       | `number`   | `500`     |
| interval      | Animation duration                    | `number `  | `3000`    |
| defaultindex  | Default SwipeItem                     | `number `  | `0`       |
| autoplay      | Whether to enable autoplay            | ` boolean` | `false`   |
| activecolor   | Selected indicator color              | `string`   | `#0088ff` |
| inactivecolor | Not selected indicator color          | `string`   | `#d3dae0` |

### Event

| Event  | Description                        | Type                                     |
| ------ | ---------------------------------- | ---------------------------------------- |
| change | Emitted when current swipe changed | `（e: {detail:{index: number}}）=> void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                            | Description             | Default   |
| ------------------------------- | ----------------------- | --------- |
| `--swipe-width`                 | SwipeItem width         | `100%`    |
| `--swipe-height`                | SwipeItem height        | `100%`    |
| `--swipe-border-radius`         | SwipeItem border radius | `0`       |
| `--swipe-indicator-activecolor` | Indicator color         | `#0088ff` |
| `--swipe-indicator-margin`      | Indicator margin        | `2px`     |
